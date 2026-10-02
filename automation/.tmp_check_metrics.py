import json
from pathlib import Path

d = json.loads(Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json').read_text()['digests'][-1]
print('root totalRuns:', d.get('totalRuns'))
print('metrics.totalRuns:', d.get('metrics', {}).get('totalRuns'))
print('metrics.totalOutreachRuns:', d.get('metrics', {}).get('totalOutreachRuns'))
print()
print('full metrics keys:', list(d.get('metrics', {}).keys()))
print('full digest keys:', list(d.keys()))
