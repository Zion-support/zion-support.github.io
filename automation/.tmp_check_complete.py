import json
from pathlib import Path

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
lines = [l.strip() for l in log_path.read_text().splitlines() if l.strip()]
records = [json.loads(l) for l in lines]

# Find the latest complete event
latest_complete = None
for r in reversed(records):
    if r.get('event') in ('complete', 'auth_missing'):
        latest_complete = r
        break

if latest_complete:
    summary = latest_complete.get('summary', latest_complete)
    print('LATEST_COMPLETE_EVENT:')
    print('  ts:', latest_complete.get('ts'))
    print('  scanned:', summary.get('scanned', 0))
    print('  potentialClients:', summary.get('potentialClients', 0))
    print('  skippedDuplicateSuppression:', summary.get('skippedDuplicateSuppression', 0))
    print('  sent:', summary.get('sent', 0))
    print('  errors:', summary.get('errors', []))
    print('  hotFollowups:', summary.get('hotFollowups', 0))
    print('  sendEnabled:', summary.get('sendEnabled', 'N/A'))
    print('  gmailAuth:', summary.get('gmailAuth', 'N/A'))
else:
    print('NO_COMPLETE_EVENT_FOUND')
