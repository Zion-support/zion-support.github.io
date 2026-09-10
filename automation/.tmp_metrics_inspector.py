import json
from pathlib import Path

log = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
impr = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')

lines = [l for l in log.read_text().splitlines() if l.strip()]
records = [json.loads(l) for l in lines]

totalRuns = len(records)
sendsAttempted = 0
duplicatesSuppressed = 0
authFailures = 0
hotFollowups = 0
latestComplete = None
potentialClients = 0
scanned = 0

complete_events = []
for r in records:
    ev = r.get('event', '')
    if ev in ('complete', 'auth_missing'):
        ts = r.get('ts')
        if ts:
            if latestComplete is None or ts > latestComplete:
                latestComplete = ts
        src = r.get('summary', r)
        sent = src.get('sent', src.get('emailsSentCount', 0))
        sendsAttempted += sent
        dup = src.get('skippedDuplicateSuppression', 0)
        duplicatesSuppressed += dup
        hf = src.get('hotFollowups', 0)
        hotFollowups += hf
        pc = src.get('potentialClients', 0)
        if pc and (potentialClients == 0 or pc > potentialClients):
            potentialClients = pc
        scanned_val = src.get('scanned', 0)
        if scanned_val:
            scanned = scanned_val
        err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else str(src.get('errors', ''))
        if 'No auth for gmail' in err_text:
            authFailures += 1
        complete_events.append(r)

print(f"totalRuns (non-empty lines): {totalRuns}")
print(f"sendsAttempted: {sendsAttempted}")
print(f"duplicatesSuppressed: {duplicatesSuppressed}")
print(f"authFailures: {authFailures}")
print(f"hotFollowups: {hotFollowups}")
print(f"latestComplete: {latestComplete}")
print(f"potentialClients (max): {potentialClients}")
print(f"scanned (last non-zero): {scanned}")
print(f"complete/auth_missing event count: {len(complete_events)}")

print("\n--- Last 5 complete/auth_missing events ---")
for r in complete_events[-5:]:
    print(json.dumps(r, indent=2)[:600])
    print("---")
