import json, sys
from pathlib import Path
from collections import Counter

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')

log_text = log_path.read_text()
lines = [l for l in log_text.splitlines() if l.strip()]
records = []
for line in lines:
    try:
        records.append(json.loads(line))
    except:
        pass

print(f'TOTAL_NON_EMPTY_LINES: {len(lines)}')
print(f'PARSEABLE_RECORDS: {len(records)}')

events = Counter(r.get('event','?') for r in records)
print(f'EVENT_COUNTS: {dict(events)}')

totalRuns = len(lines)
sendsAttempted = 0
duplicatesSuppressed = 0
authFailures = 0
hotFollowups = 0
latestComplete = None
latestPotentialClients = 0
latestCompleteRecord = None

for r in records:
    if r.get('event') in ('complete', 'auth_missing'):
        ts = r.get('ts')
        if ts and (latestComplete is None or ts > latestComplete):
            latestComplete = ts
            latestCompleteRecord = r
        src = r.get('summary', r)
        sendsAttempted += src.get('sent', src.get('emailsSentCount', 0))
        duplicatesSuppressed += src.get('skippedDuplicateSuppression', 0)
        err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else str(src.get('errors', ''))
        if 'No auth for gmail' in err_text:
            authFailures += 1
        hotFollowups += src.get('hotFollowups', 0)
        pc = src.get('potentialClients', 0)
        if pc and pc > latestPotentialClients:
            latestPotentialClients = pc

print(f'TOTAL_RUNS: {totalRuns}')
print(f'SENDS_ATTEMPTED: {sendsAttempted}')
print(f'DUPLICATES_SUPPRESSED: {duplicatesSuppressed}')
print(f'AUTH_FAILURES: {authFailures}')
print(f'HOT_FOLLOWUPS: {hotFollowups}')
print(f'LATEST_COMPLETE: {latestComplete}')
print(f'LATEST_POTENTIAL_CLIENTS: {latestPotentialClients}')
print(f'LATEST_COMPLETE_RECORD_EVENT: {latestCompleteRecord.get("event") if latestCompleteRecord else None}')
print(f'LATEST_COMPLETE_SUMMARY_POTENTIAL: {latestCompleteRecord.get("summary", {}).get("potentialClients") if latestCompleteRecord else None}')
print(f'LATEST_COMPLETE_SUMMARY_SENT: {latestCompleteRecord.get("summary", {}).get("sent") if latestCompleteRecord else None}')

print('---LAST 5 RECORDS---')
for r in records[-5:]:
    print(json.dumps(r, indent=2)[:800])
