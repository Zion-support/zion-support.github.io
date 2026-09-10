import json
from pathlib import Path

impr = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
data = json.loads(impr.read_text())

imp = data.get('improvements', [])
if imp:
    last = imp[-1]
    print('LATEST_IMPROVEMENTS_ENTRY:')
    print(json.dumps(last, indent=2, default=str))
    print()
    print('TIMESTAMP:', last.get('ts'))
    print('METRICS:', json.dumps(last.get('metrics', {}), indent=2, default=str))
    print('PATTERN:', last.get('pattern'))
    print('RECOMMENDATIONS:', last.get('recommendations'))
else:
    print('NO IMPROVEMENTS ENTRIES')

digests = data.get('digests', [])
if digests:
    latest = digests[-1]
    print()
    print('LATEST_DIGEST:')
    print(json.dumps(latest, indent=2, default=str))
