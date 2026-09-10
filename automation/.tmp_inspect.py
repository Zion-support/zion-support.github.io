import json
from pathlib import Path

impr = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
data = json.loads(impr.read_text())
digests = data.get('digests', [])
print('digests_count:', len(digests))
if digests:
    latest = digests[-1]
    print('latest_status:', latest.get('status'))
    print('latest_ts:', latest.get('ts'))
    print('latest_updatedAt:', latest.get('updatedAt'))
    m = latest.get('metrics', {})
    print('metrics:', json.dumps(m, indent=2))
    for k in latest:
        if k not in ('ts','status','metrics','updatedAt'):
            print('LEAKED_OUTSIDE_METRICS:', k, '=', latest[k])
print()
print('improvements_count:', len(data.get('improvements', [])))
if data.get('improvements'):
    last_imp = data['improvements'][-1]
    print('last_improvement_ts:', last_imp.get('ts'))
    print('last_improvement_pattern:', last_imp.get('pattern'))
    print('last_improvement_metrics:', json.dumps(last_imp.get('metrics', {}), indent=2))
    print('last_improvement_recommendations:', last_imp.get('recommendations'))
