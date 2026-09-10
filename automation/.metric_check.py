import json
from pathlib import Path

log = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
lines = [json.loads(l) for l in log.read_text().splitlines() if l.strip()]
print(f"total_lines_nonempty: {len(lines)}")

totalRuns = len(lines)
sendsAttempted = 0
duplicatesSuppressed = 0
authFailures = 0
hotFollowups = 0
scanned = 0
potentialClients = 0
latestComplete = None
candidates = []
event_counts = {}

for r in lines:
    e = r.get('event','')
    event_counts[e] = event_counts.get(e, 0) + 1
    if e in ('complete','auth_missing'):
        ts = r.get('ts')
        if ts:
            candidates.append(ts)
        s = r.get('summary', r)
        sendsAttempted += s.get('sent', s.get('emailsSentCount', 0))
        duplicatesSuppressed += s.get('skippedDuplicateSuppression', 0)
        errs = s.get('errors', [])
        if isinstance(errs, list):
            err_text = ' '.join(errs)
        else:
            err_text = str(errs)
        if 'No auth for gmail' in err_text:
            authFailures += 1
        hotFollowups += s.get('hotFollowups', 0)
        scanned = s.get('scanned', scanned)
        potentialClients = s.get('potentialClients', potentialClients)

if candidates:
    latestComplete = max(candidates)

print("---METRICS---")
print(f"totalRuns={totalRuns}")
print(f"sendsAttempted={sendsAttempted}")
print(f"duplicatesSuppressed={duplicatesSuppressed}")
print(f"authFailures={authFailures}")
print(f"hotFollowups={hotFollowups}")
print(f"latestComplete={latestComplete}")
print(f"scanned={scanned}")
print(f"potentialClients={potentialClients}")
print(f"event_counts={json.dumps(event_counts)}")
