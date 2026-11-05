import json
from pathlib import Path

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')

# --- Compute metrics from live log ---
records = [json.loads(line) for line in log_path.read_text().splitlines() if line.strip()]
totalRuns = len(records)

sendsAttempted = 0
duplicatesSuppressed = 0
authFailures = 0
hotFollowups = 0
latestComplete = None
potentialClients = 0

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
        potentialClients = src.get('potentialClients', potentialClients)

print(f"totalRuns={totalRuns}")
print(f"sendsAttempted={sendsAttempted}")
print(f"duplicatesSuppressed={duplicatesSuppressed}")
print(f"authFailures={authFailures}")
print(f"hotFollowups={hotFollowups}")
print(f"latestComplete={latestComplete}")
print(f"potentialClients={potentialClients}")

# --- Load improvements.json ---
data = json.loads(impr_path.read_text())
digests = data.get('digests', [])
latest = digests[-1] if digests else {}
print(f"\nLatest digest ts: {latest.get('ts')}")
print(f"Latest digest status: {latest.get('status')}")
print(f"Latest digest metrics.totalRuns: {latest.get('metrics',{}).get('totalRuns')}")
print(f"Latest digest metrics.latestComplete: {latest.get('metrics',{}).get('latestComplete')}")
print(f"Latest digest leaked updatedAt: {latest.get('updatedAt')}")
print(f"Root updatedAt: {data.get('updatedAt')}")
print(f"Improvements count: {len(data.get('improvements',[]))}")
imp = data.get('improvements',[])
if imp:
    last = imp[-1]
    print(f"Last improvement ts: {last.get('ts')}")
    print(f"Last improvement pattern: {last.get('pattern','')[:100]}")
