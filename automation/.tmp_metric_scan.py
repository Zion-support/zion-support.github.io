import json
from pathlib import Path

log = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
text = log.read_text()
lines = [l for l in text.splitlines() if l.strip()]
print(f'non_empty_lines: {len(lines)}')

records = [json.loads(l) for l in lines]
print(f'parsed_records: {len(records)}')

sends = 0
dups = 0
auth_fails = 0
hot_fu = 0
latest_complete = None
candidates = []

for r in records:
    if r.get('event') in ('complete', 'auth_missing'):
        ts = r.get('ts')
        if ts:
            candidates.append(ts)
    src = r.get('summary', r)
    sent_val = src.get('sent', src.get('emailsSentCount', 0))
    if isinstance(sent_val, (int, float)):
        sends += int(sent_val)
    dups += src.get('skippedDuplicateSuppression', 0)
    errs = src.get('errors', [])
    if isinstance(errs, list):
        err_text = ' '.join(errs)
    else:
        err_text = str(errs)
    if 'No auth for gmail' in err_text:
        auth_fails += 1
    hot_fu += src.get('hotFollowups', 0)

if candidates:
    latest_complete = max(candidates)

print(f'totalRuns: {len(records)}')
print(f'sendsAttempted: {sends}')
print(f'duplicatesSuppressed: {dups}')
print(f'authFailures: {auth_fails}')
print(f'hotFollowups: {hot_fu}')
print(f'latestComplete: {latest_complete}')
print('--- last 5 records ---')
for r in records[-5:]:
    print(json.dumps(r)[:200])
