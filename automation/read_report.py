import json
import os

os.chdir('/Users/miami2/zion.app/automation')

report_path = 'growth-engine-report-latest.json'
if not os.path.exists(report_path):
    print("REPORT NOT FOUND")
else:
    with open(report_path) as f:
        d = json.load(f)
    print("run_id:", d.get('run_id'))
    print("ok:", d.get('ok'))
    print("status:", d.get('status'))
    print("dry_run:", d.get('dry_run'))
    print("send_attempted:", d.get('send_attempted', d.get('send_log_total')))
    print("send_succeeded:", d.get('send_succeeded'))
    print("send_failed:", d.get('send_failed'))
    errors = d.get('errors', d.get('error', []))
    print("errors:", json.dumps(errors, indent=2)[:500] if errors else "none")
