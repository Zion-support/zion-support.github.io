import json
from pathlib import Path

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
data_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')

records = [json.loads(line) for line in log_path.read_text().splitlines() if line.strip()]
total_runs = len(records)

sends_attempted = 0
duplicates_suppressed = 0
auth_failures = 0
hot_followups = 0
latest_complete = None
potential_clients = 0
scanned = 0

complete_candidates = []
for r in records:
    event = r.get('event', '')
    if event in ('complete', 'auth_missing'):
        ts = r.get('ts')
        if ts:
            complete_candidates.append(ts)
    
    src = r.get('summary', r)
    sends_attempted += src.get('sent', src.get('emailsSentCount', 0))
    duplicates_suppressed += src.get('skippedDuplicateSuppression', 0)
    
    err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else str(src.get('errors', ''))
    if 'No auth for gmail' in err_text:
        auth_failures += 1
    
    hot_followups += src.get('hotFollowups', 0)
    potential_clients = src.get('potentialClients', potential_clients)
    scanned = src.get('scanned', scanned)

if complete_candidates:
    latest_complete = max(complete_candidates)

print(f'TOTAL_RUNS={total_runs}')
print(f'SENDS_ATTEMPTED={sends_attempted}')
print(f'DUPLICATES_SUPPRESSED={duplicates_suppressed}')
print(f'AUTH_FAILURES={auth_failures}')
print(f'HOT_FOLLOWUPS={hot_followups}')
print(f'LATEST_COMPLETE={latest_complete}')
print(f'POTENTIAL_CLIENTS={potential_clients}')
print(f'SCANNED={scanned}')
