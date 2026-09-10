import json
from pathlib import Path

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')

log_text = log_path.read_text()
lines = [l for l in log_text.splitlines() if l.strip()]
print(f'TOTAL_NONEMPTY_LINES: {len(lines)}')

records = [json.loads(l) for l in lines]

total_runs = len(records)
sends = 0
dups = 0
auth_fails = 0
hot_fu = 0
latest_complete = None
potential_clients = 0
scanned = 0

complete_events = []
auth_missing_events = []

for r in records:
    ev = r.get('event', '')
    if ev in ('complete', 'auth_missing'):
        ts = r.get('ts') or r.get('summary', {}).get('ts')
        if ts:
            if ev == 'complete':
                complete_events.append(r)
            else:
                auth_missing_events.append(r)
        src = r.get('summary', r)
        sends += src.get('sent', src.get('emailsSentCount', 0))
        dups += src.get('skippedDuplicateSuppression', 0)
        err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else str(src.get('errors', ''))
        if 'No auth for gmail' in err_text:
            auth_fails += 1
        hot_fu += src.get('hotFollowups', 0)
        if ev == 'complete':
            pc = src.get('potentialClients', 0)
            if pc and pc > potential_clients:
                potential_clients = pc
            sc = src.get('scanned', 0)
            if sc and sc > scanned:
                scanned = sc

candidates = [r.get('ts') for r in records if r.get('event') in ('complete','auth_missing') and r.get('ts')]
if candidates:
    latest_complete = max(candidates)

print(f'TOTAL_RUNS: {total_runs}')
print(f'SENDS_ATTEMPTED: {sends}')
print(f'DUPLICATES_SUPPRESSED: {dups}')
print(f'AUTH_FAILURES: {auth_fails}')
print(f'HOT_FOLLOWUPS: {hot_fu}')
print(f'LATEST_COMPLETE: {latest_complete}')
print(f'POTENTIAL_CLIENTS_MAX: {potential_clients}')
print(f'SCANNED_MAX: {scanned}')
print(f'COMPLETE_EVENTS: {len(complete_events)}')
print(f'AUTH_MISSING_EVENTS: {len(auth_missing_events)}')

print('--- LAST 5 RECORDS ---')
for r in records[-5:]:
    print(json.dumps(r, indent=2))
