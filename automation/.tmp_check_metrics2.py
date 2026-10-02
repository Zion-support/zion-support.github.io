import json
from pathlib import Path

data = json.loads(Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json').read_text())
d = data['digests'][-1]
print('root totalRuns:', d.get('totalRuns'))
print('metrics.totalRuns:', d.get('metrics', {}).get('totalRuns'))
print('metrics keys:', list(d.get('metrics', {}).keys()))
