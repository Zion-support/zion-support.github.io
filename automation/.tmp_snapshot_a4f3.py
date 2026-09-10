import json
from pathlib import Path

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')

log_text = log_path.read_text()
lines = [l for l in log_text.splitlines() if l.strip()]
print('TX1: total_nonempty_lines:', len(lines))
for l in lines[:3]:
    rec = json.loads(l)
    print('  sample event:', rec.get('event'), 'ts:', rec.get('ts'))
for l in lines[-3:]:
    rec = json.loads(l)
    print('  tail event:', rec.get('event'), 'ts:', rec.get('ts'))

data = json.loads(impr_path.read_text())
digests = data.get('digests', [])
print('TX2: digests count:', len(digests))
if digests:
    latest = digests[-1]
    print('  latest status:', latest.get('status'))
    m = latest.get('metrics', {})
    print('  latest metrics keys:', list(m.keys()))
    print('  latest totalRuns:', m.get('totalRuns'))
    print('  latest sendsAttempted:', m.get('sendsAttempted'))
    print('  latest duplicatesSuppressed:', m.get('duplicatesSuppressed'))
    print('  latest authFailures:', m.get('authFailures'))
    print('  latest latestComplete:', m.get('latestComplete'))
    print('  latest hotFollowups:', m.get('hotFollowups'))
print('TX_DONE')
