import json
from pathlib import Path
from collections import Counter

log = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
data = json.loads(Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json').read_text())
digests = data.get('digests', [])
latest = digests[-1] if digests else {}
metrics = latest.get('metrics', {})

records = [json.loads(line) for line in log.read_text().splitlines() if line.strip()]
print(f"Total non-empty lines in log: {len(records)}")

totalRuns = len(records)
sendsAttempted = 0
duplicatesSuppressed = 0
authFailures = 0
hotFollowups = 0
latestComplete = None
potentialClients = 0
scanned = 0

for r in records:
    if r.get('event') == 'complete' or r.get('event') == 'auth_missing':
        ts = r.get('ts')
        if ts:
            if latestComplete is None or ts > latestComplete:
                latestComplete = ts
        src = r.get('summary', r)
        sent = src.get('sent', src.get('emailsSentCount', 0))
        sendsAttempted += sent if isinstance(sent, (int, float)) else 0
        dup = src.get('skippedDuplicateSuppression', 0)
        duplicatesSuppressed += dup if isinstance(dup, (int, float)) else 0
        pc = src.get('potentialClients', 0)
        if isinstance(pc, (int, float)):
            potentialClients = pc
        sc = src.get('scanned', 0)
        if isinstance(sc, (int, float)):
            scanned = sc
        err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else str(src.get('errors', ''))
        if 'No auth for gmail' in err_text:
            authFailures += 1
        hf = src.get('hotFollowups', 0)
        hotFollowups += hf if isinstance(hf, (int, float)) else 0

print(f"totalRuns: {totalRuns}")
print(f"sendsAttempted: {sendsAttempted}")
print(f"duplicatesSuppressed: {duplicatesSuppressed}")
print(f"authFailures: {authFailures}")
print(f"hotFollowups: {hotFollowups}")
print(f"latestComplete: {latestComplete}")
print(f"potentialClients (latest complete): {potentialClients}")
print(f"scanned (latest complete): {scanned}")

last_digest_lc = metrics.get('latestComplete', '')
if latestComplete and latestComplete != last_digest_lc:
    print(f"\nNEW complete events since last digest: {latestComplete} vs {last_digest_lc}")
else:
    print(f"\nNo new complete events since last digest latestComplete={last_digest_lc}")

event_counts = Counter(r.get('event') for r in records)
print(f"\nEvent type counts: {dict(event_counts)}")
