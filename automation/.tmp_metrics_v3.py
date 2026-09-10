import json, sys
from pathlib import Path
from collections import Counter

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')

# Canonical verifier
log_text = log_path.read_text()
lines = [l for l in log_text.splitlines() if l.strip()]
records = []
for line in lines:
    try:
        records.append(json.loads(line))
    except:
        pass

print(f'LINES: {len(lines)}')
print(f'RECORDS: {len(records)}')

events = Counter(r.get('event','?') for r in records)
print(f'EVENT_COUNTS: {dict(events)}')

# Full canonical verifier
totalRuns = len(lines)
sendsAttempted = 0
duplicatesSuppressed = 0
authFailures = 0
hotFollowups = 0
latestComplete = None
candidates = []

for r in records:
    ev = r.get('event')
    ts = r.get('ts')
    if ev in ('complete', 'auth_missing') and ts:
        candidates.append(ts)
    src = r.get('summary', r)
    sendsAttempted += src.get('sent', src.get('emailsSentCount', 0))
    duplicatesSuppressed += src.get('skippedDuplicateSuppression', 0)
    err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else str(src.get('errors', ''))
    if 'No auth for gmail' in err_text:
        authFailures += 1
    hotFollowups += src.get('hotFollowups', 0)

latestComplete = max(candidates) if candidates else None

print(f'TOTAL_RUNS: {totalRuns}')
print(f'SENDS_ATTEMPTED: {sendsAttempted}')
print(f'DUPLICATES_SUPPRESSED: {duplicatesSuppressed}')
print(f'AUTH_FAILURES: {authFailures}')
print(f'HOT_FOLLOWUPS: {hotFollowups}')
print(f'LATEST_COMPLETE: {latestComplete}')
print(f'CANDIDATES_COUNT: {len(candidates)}')

# Show canonical complete events summary
print('---CANONICAL COMPLETES---')
for r in records:
    if r.get('event') == 'complete':
        s = r.get('summary', {})
        print(f"ts={r.get('ts')} scanned={s.get('scanned')} pc={s.get('potentialClients')} dup={s.get('skippedDuplicateSuppression')} sent={s.get('sent')} hf={s.get('hotFollowups')} errs={s.get('errors')}")
