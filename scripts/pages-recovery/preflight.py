"""Fail closed before republishing a verified existing Pages artifact."""
import json, os, re, urllib.request
REPO='Zion-support/zion-support.github.io'
SHA='4cf34e55fd3d65d8ac53b9a25329254d46134487'
RUN=42289866638
ARTIFACT=13539903299
DEPLOYMENT=7610596379
DIGEST='5e517ee4002b52f79292d3709c70d1ab7b51c059e30e6362d488de988c90b27e'
WORKFLOWS=(348640155,254611010,241910915)

def get(path):
    req=urllib.request.Request('https://api.github.com/repos/'+REPO+'/'+path, headers={'Authorization':'Bearer '+os.environ['GH_TOKEN'],'Accept':'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'})
    with urllib.request.urlopen(req,timeout=60) as response: return json.load(response)

def check(api=get):
    if os.environ.get('GITHUB_REPOSITORY')!=REPO or os.environ.get('GITHUB_REF')!='refs/heads/main': raise ValueError('Unexpected execution context')
    if api('git/ref/heads/main')['object']['sha']!=os.environ['GITHUB_SHA']: raise ValueError('Main changed')
    for workflow in WORKFLOWS:
        if api(f'actions/workflows/{workflow}')['state']!='disabled_manually': raise ValueError('Publisher is not paused')
        for status in ('in_progress','queued','waiting','pending','requested'):
            result=api(f'actions/workflows/{workflow}/runs?status={status}&per_page=100')
            # Any count or row blocks. No pagination can convert a nonzero result to safe.
            if result['total_count']!=0 or result['workflow_runs']!=[]: raise ValueError('Publisher has active or uncertain runs')
    deployments=api('deployments?environment=github-pages&per_page=100')
    if not deployments: raise ValueError('Deployment history missing')
    # An environment job creates its own provisional deployment before steps run.
    # Permit at most that one authenticated run; never ignore another pending job.
    if deployments[0]['id']!=DEPLOYMENT:
        own=deployments[0]
        own_statuses=api(f"deployments/{own['id']}/statuses?per_page=100")
        run_id=os.environ.get('GITHUB_RUN_ID','')
        prefix='https://github.com/'+REPO+'/actions/runs/'+run_id+'/job/'
        if (os.environ.get('ALLOW_OWN_DEPLOYMENT')!='1' or not run_id.isdigit()
            or own['sha']!=os.environ['GITHUB_SHA'] or own.get('ref')!='main'
            or own.get('environment')!='github-pages' or not own_statuses
            or own_statuses[0]['state'] not in ('queued','pending','waiting','in_progress')
            or not re.fullmatch(re.escape(prefix)+r'[0-9]+',own_statuses[0].get('log_url',''))):
            raise ValueError('Unexpected provisional deployment')
        current=api(f'actions/runs/{run_id}')
        if (current['path']!='.github/workflows/emergency-pages-sanitize.yml'
            or current['event']!='workflow_dispatch' or current['head_branch']!='main'
            or current['head_sha']!=os.environ['GITHUB_SHA']):
            raise ValueError('Unexpected recovery workflow')
        job_id=own_statuses[0]['log_url'].rsplit('/',1)[1]
        job=api(f'actions/jobs/{job_id}')
        if (job['run_id']!=int(run_id) or job['name']!='deploy'
            or job['status']!='in_progress' or job.get('conclusion') is not None):
            raise ValueError('Unexpected deployment job')
        deployments=deployments[1:]
    if not deployments or deployments[0]['id']!=DEPLOYMENT or deployments[0]['sha']!=SHA: raise ValueError('Deployment changed')
    statuses=api(f'deployments/{DEPLOYMENT}/statuses?per_page=100')
    if not statuses or statuses[0]['state']!='success': raise ValueError('Deployment is not successful')
    artifact=api(f'actions/artifacts/{ARTIFACT}')
    if artifact['expired'] or artifact['name']!='github-pages' or artifact['digest']!='sha256:'+DIGEST or artifact['workflow_run']['id']!=RUN or artifact['workflow_run']['head_sha']!=SHA: raise ValueError('Artifact provenance changed')
    run=api(f'actions/runs/{RUN}')
    if run['head_sha']!=SHA or run['workflow_id']!=241910915: raise ValueError('Source run changed')
    jobs=[]; page=1
    while True:
        result=api(f'actions/runs/{RUN}/jobs?per_page=100&page={page}')
        rows=result['jobs']; jobs.extend(rows)
        if len(jobs)==result['total_count']: break
        if not rows or len(jobs)>result['total_count'] or page>=100: raise ValueError('Incomplete source jobs')
        page+=1
    if not all(any(j['name']==name and j['conclusion']=='success' for j in jobs) for name in ('build','deploy')): raise ValueError('Source publication not verified')

if __name__=='__main__':
    try: check()
    except Exception: raise SystemExit('Publication safety check failed; no deployment permitted.')
    print('Publication safety checks passed.')
