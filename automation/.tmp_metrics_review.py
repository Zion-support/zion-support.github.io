import json
from pathlib import Path
from collections import Counter

log = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
lines = [line for line in log.read_text().splitlines() if line.strip()]
print(f'Total non-empty lines: {len(lines)}')

records = [json.loads(line) for line in lines]

# Find latest complete/auth_missing
candidates = [r.get('ts') for r in records if r.get('event') in ('complete', 'auth_missing') and r.get('ts')]
latest_complete = max(candidates) if candidates else None
print(f'Latest complete/auth_missing: {latest_complete}')

# Count events by type
event_counts = Counter(r.get('event') for r in records)
print(f'Event counts: {dict(event_counts)}')

# Sum metrics
sends = 0
dups = 0
auth_fails = 0
hot_fu = 0
for r in records:
    src = r.get('summary', r)
    sends += src.get('sent', src.get('emailsSentCount', 0))
    dups += src.get('skippedDuplicateSuppression', 0)
    err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else ''
    if 'No auth for gmail' in err_text:
        auth_fails += 1
    hot_fu += src.get('hotFollowups', 0)

print(f'sendsAttempted: {sends}')
print(f'duplicatesSuppressed: {dups}')
print(f'authFailures: {auth_fails}')
print(f'hotFollowups: {hot_fu}')

# Get potentialClients from latest complete
for r in reversed(records):
    if r.get('event') in ('complete', 'auth_missing'):
        pc = r.get('summary', {}).get('potentialClients', 0)
        scanned = r.get('summary', {}).get('scanned', 0)
        print(f'latest potentialClients: {pc}')
        print(f'latest scanned: {scanned}')
        break

# Check for entries after 2026-09-08T15:51:00Z
cutoff = '2026-09-08T15:51:00.000000Z'
new_after = [r for r in records if r.get('ts', '') > cutoff]
print(f'Records after 2026-09-08T15:51:00Z: {len(new_after)}')
for r in new_after[:5]:
    print(f'  {r.get("ts")} {r.get("event")}')
