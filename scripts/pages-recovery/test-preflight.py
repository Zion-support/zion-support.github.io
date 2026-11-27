import importlib.util, unittest, os, copy
from unittest.mock import patch
from pathlib import Path
spec=importlib.util.spec_from_file_location('preflight',Path(__file__).with_name('preflight.py')); p=importlib.util.module_from_spec(spec);spec.loader.exec_module(p)
class Tests(unittest.TestCase):
 def setUp(self):
  self.env=patch.dict(os.environ,{'GITHUB_REPOSITORY':p.REPO,'GITHUB_REF':'refs/heads/main','GITHUB_SHA':'candidate'});self.env.start();self.addCleanup(self.env.stop)
  self.data={'git/ref/heads/main':{'object':{'sha':'candidate'}},'deployments?environment=github-pages&per_page=100':[{'id':p.DEPLOYMENT,'sha':p.SHA}],f'deployments/{p.DEPLOYMENT}/statuses?per_page=100':[{'state':'success'}],f'actions/artifacts/{p.ARTIFACT}':{'expired':False,'name':'github-pages','digest':'sha256:'+p.DIGEST,'workflow_run':{'id':p.RUN,'head_sha':p.SHA}},f'actions/runs/{p.RUN}':{'head_sha':p.SHA,'workflow_id':241910915},f'actions/runs/{p.RUN}/jobs?per_page=100&page=1':{'total_count':2,'jobs':[{'name':'build','conclusion':'success'},{'name':'deploy','conclusion':'success'}]}}
  for w in p.WORKFLOWS:
   self.data[f'actions/workflows/{w}']={'state':'disabled_manually'}
   for s in ('in_progress','queued','waiting','pending','requested'):self.data[f'actions/workflows/{w}/runs?status={s}&per_page=100']={'total_count':0,'workflow_runs':[]}
 def test_valid(self):p.check(self.data.__getitem__)
 def test_block_each_active_status(self):
  for w in p.WORKFLOWS:
   for s in ('in_progress','queued','waiting','pending','requested'):
    with self.subTest(workflow=w,status=s):
     d=copy.deepcopy(self.data);d[f'actions/workflows/{w}/runs?status={s}&per_page=100']['total_count']=1
     with self.assertRaises(ValueError):p.check(d.__getitem__)
 def test_inconsistent_list(self):
  self.data[f'actions/workflows/{p.WORKFLOWS[0]}/runs?status=queued&per_page=100']['workflow_runs']=[{}]
  with self.assertRaises(ValueError):p.check(self.data.__getitem__)
 def test_active_publisher(self):
  self.data[f'actions/workflows/{p.WORKFLOWS[0]}']['state']='active'
  with self.assertRaises(ValueError):p.check(self.data.__getitem__)
 def test_new_deployment(self):
  self.data['deployments?environment=github-pages&per_page=100'][0]['id']+=1
  self.data[f'deployments/{p.DEPLOYMENT+1}/statuses?per_page=100']=[]
  with self.assertRaises(ValueError):p.check(self.data.__getitem__)
 def test_main_moved(self):
  self.data['git/ref/heads/main']['object']['sha']='other'
  with self.assertRaises(ValueError):p.check(self.data.__getitem__)
 def test_bad_provenance(self):
  for key,value in [('expired',True),('digest','wrong'),('name','wrong')]:
   d=copy.deepcopy(self.data);d[f'actions/artifacts/{p.ARTIFACT}'][key]=value
   with self.assertRaises(ValueError):p.check(d.__getitem__)
 def test_missing_jobs(self):
  self.data[f'actions/runs/{p.RUN}/jobs?per_page=100&page=1']['jobs']=[]
  with self.assertRaises(ValueError):p.check(self.data.__getitem__)
 def test_failed_source_deploy(self):
  self.data[f'actions/runs/{p.RUN}/jobs?per_page=100&page=1']['jobs'][1]['conclusion']='failure'
  with self.assertRaises(ValueError):p.check(self.data.__getitem__)
 def provisional(self):
  own={'id':123,'sha':'candidate','ref':'main','environment':'github-pages'}
  self.data['deployments?environment=github-pages&per_page=100'].insert(0,own)
  self.data['deployments/123/statuses?per_page=100']=[{'state':'in_progress','log_url':'https://github.com/'+p.REPO+'/actions/runs/456/job/789'}]
  self.data['actions/runs/456']={'path':'.github/workflows/emergency-pages-sanitize.yml','event':'workflow_dispatch','head_branch':'main','head_sha':'candidate'}
  self.data['actions/jobs/789']={'run_id':456,'name':'deploy','status':'in_progress','conclusion':None}
  os.environ.update(ALLOW_OWN_DEPLOYMENT='1',GITHUB_RUN_ID='456')
 def test_own_provisional(self):
  self.provisional();p.check(self.data.__getitem__)
 def test_foreign_provisional(self):
  self.provisional();self.data['deployments/123/statuses?per_page=100'][0]['log_url']='https://github.com/'+p.REPO+'/actions/runs/457/job/789'
  with self.assertRaises(ValueError):p.check(self.data.__getitem__)
 def test_own_success_blocks(self):
  self.provisional();self.data['deployments/123/statuses?per_page=100'][0]['state']='success'
  with self.assertRaises(ValueError):p.check(self.data.__getitem__)
 def test_second_provisional_blocks(self):
  self.provisional();self.data['deployments?environment=github-pages&per_page=100'].insert(1,{'id':234,'sha':p.SHA})
  with self.assertRaises(ValueError):p.check(self.data.__getitem__)
 def test_own_invalid_details(self):
  for group,field,value in [('status','log_url','https://evil.example/actions/runs/456/job/789'),('deployment','sha','other'),('status','state','failure'),('run','path','.github/workflows/other.yml'),('run','event','push'),('job','name','other'),('job','run_id',457)]:
   with self.subTest(group=group,field=field):
    self.setUp();self.provisional()
    target={'status':self.data['deployments/123/statuses?per_page=100'][0],'deployment':self.data['deployments?environment=github-pages&per_page=100'][0],'run':self.data['actions/runs/456'],'job':self.data['actions/jobs/789']}[group]
    target[field]=value
    with self.assertRaises(ValueError):p.check(self.data.__getitem__)
 def test_own_no_status(self):
  self.provisional();self.data['deployments/123/statuses?per_page=100']=[]
  with self.assertRaises(ValueError):p.check(self.data.__getitem__)
if __name__=='__main__':unittest.main()
