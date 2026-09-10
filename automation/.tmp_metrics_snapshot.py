import json
from pathlib import Path

log = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
records = [json.loads(line) for line in log.read_text().splitlines() if line.strip()]

total = len(records)
sends = 0
dup = 0
auth = 0
hot = 0
latest_complete = None
complete_count = 0
for r in records:
    if r.get('event') in ('complete', 'auth_missing'):
        ts = r.get('ts')
        if ts:
            if latest_complete is None or ts > latest_complete:
                latest_complete = ts
        src = r.get('summary', r)
        s = src.get('sent', src.get('emailsSentCount', 0))
        sends += s
        dup += src.get('skippedDuplicateSuppression', 0)
        errs = src.get('errors', [])
        if isinstance(errs, list):
            err_text = ' '.join(errs)
        else:
            err_text = str(errs)
        if 'No auth for gmail' in err_text:
            auth += 1
        hot += src.get('hotFollowups', 0)
        complete_count += 1

print(f"totalRuns: {total}")
print(f"complete/auth_missing events: {complete_count}")
print(f"sendsAttempted: {sends}")
print(f"duplicatesSuppressed: {dup}")
print(f"authFailures: {auth}")
print(f"hotFollowups: {hot}")
print(f"latestComplete: {latest_complete}")
