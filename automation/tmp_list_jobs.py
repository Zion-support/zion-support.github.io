import json
with open('/Users/miami2/.hermes/cron/jobs.json') as f:
    data = json.load(f)
if isinstance(data, dict):
    jobs = data.get("jobs", data)
else:
    jobs = data
if isinstance(jobs, list):
    print(f"Total jobs: {len(jobs)}")
    for i, job in enumerate(jobs):
        name = job.get("name", job.get("title", "?"))
        script = job.get("script", job.get("command", "?"))
        print(f"  [{i}] name={name} script={script}")
