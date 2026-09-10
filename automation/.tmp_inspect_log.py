import json
from pathlib import Path
from collections import Counter

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')

lines = [l for l in log_path.read_text().splitlines() if l.strip()]
records = [json.loads(l) for l in lines]

print(f'Total non-empty lines: {len(lines)}')
print(f'Total parsed records: {len(records)}')

events = Counter(r.get('event','?') for r in records)
print(f'Event types: {dict(events)}')

totalRuns = len(lines)
sendsAttempted = 0
duplicatesSuppressed = 0
authFailures = 0
hotFollowups = 0
latestComplete = None
potentialClients = 0
scanned = 0

for r in records:
    if r.get('event') in ('complete', 'auth_missing'):
        ts = r.get('ts')
        if ts:
            if latestComplete is None or ts > latestComplete:
                latestComplete = ts
        src = r.get('summary', r)
        sendsAttempted += src.get('sent', src.get('emailsSentCount', 0))
        duplicatesSuppressed += src.get('skippedDuplicateSuppression', 0)
        err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else ''
        if 'No auth for gmail' in err_text:
            authFailures += 1
        hotFollowups += src.get('hotFollowups', 0)
        if 'potentialClients' in src:
            potentialClients = src['potentialClients']
        if 'scanned' in src:
            scanned = src['scanned']

print()
print('--- Canonical metrics ---')
print(f'totalRuns: {totalRuns}')
print(f'sendsAttempted: {sendsAttempted}')
print(f'duplicatesSuppressed: {duplicatesSuppressed}')
print(f'authFailures: {authFailures}')
print(f'hotFollowups: {hotFollowups}')
print(f'latestComplete: {latestComplete}')
print(f'potentialClients (latest): {potentialClients}')
print(f'scanned (latest): {scanned}')

print()
print('--- Pattern analysis ---')

if authFailures > 0:
    print(f'AUTH FAILURES DETECTED: {authFailures}')

if sendsAttempted == 0:
    print('NO SENDS ATTEMPTED in canonical pipeline')

if duplicatesSuppressed > 0:
    print(f'DUPLICATES SUPPRESSED: {duplicatesSuppressed}')
else:
    print('NO DUPLICATES SUPPRESSED (suppression unexercised)')

latest_records = [r for r in records if r.get('event') in ('complete', 'auth_missing')]
if latest_records:
    latest = max(latest_records, key=lambda r: r.get('ts', '') or '')
    print()
    print('--- Latest complete/auth_missing event ---')
    print(f'Event: {latest.get("event")}')
    print(f'TS: {latest.get("ts")}')
    summary = latest.get('summary', latest)
    print(f'Summary: {json.dumps(summary, indent=2, default=str)}')
