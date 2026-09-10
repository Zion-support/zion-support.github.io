import json
from pathlib import Path
from collections import Counter

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
lines = [l for l in log_path.read_text().splitlines() if l.strip()]
records = [json.loads(l) for l in lines]

totalRuns = len(records)
sendsAttempted = 0
duplicatesSuppressed = 0
authFailures = 0
hotFollowups = 0
latestComplete = None
potentialClients = 0
scanned = 0
candidates = []

for r in records:
    if r.get('event') in ('complete', 'auth_missing') and r.get('ts'):
        candidates.append(r.get('ts'))
    src = r.get('summary', r)
    sendsAttempted += src.get('sent', src.get('emailsSentCount', 0))
    duplicatesSuppressed += src.get('skippedDuplicateSuppression', 0)
    err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else ''
    if 'No auth for gmail' in err_text:
        authFailures += 1
    hotFollowups += src.get('hotFollowups', 0)
    if r.get('event') == 'complete':
        pc = src.get('potentialClients')
        if pc is not None:
            potentialClients = pc
        sc = src.get('scanned')
        if sc is not None:
            scanned = sc

if candidates:
    latestComplete = max(candidates)

print(f'TOTAL_RUNS={totalRuns}')
print(f'SENDS_ATTEMPTED={sendsAttempted}')
print(f'DUPLICATES_SUPPRESSED={duplicatesSuppressed}')
print(f'AUTH_FAILURES={authFailures}')
print(f'HOT_FOLLOWUPS={hotFollowups}')
print(f'LATEST_COMPLETE={latestComplete}')
print(f'POTENTIAL_CLIENTS={potentialClients}')
print(f'SCANNED={scanned}')
events = Counter(r.get('event') for r in records)
for k,v in sorted(events.items()):
    print(f'EVENT_{k}={v}')
