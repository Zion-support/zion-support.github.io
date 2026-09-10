import json
from pathlib import Path

impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')

data = json.loads(impr_path.read_text())
digests = data.get('digests', [])
latest_digest = digests[-1] if digests else {}
metrics = latest_digest.get('metrics', {})

lines = [line for line in log_path.read_text().splitlines() if line.strip()]
total_runs = len(lines)

sends_attempted = 0
duplicates_suppressed = 0
auth_failures = 0
hot_followups = 0
latest_complete = None
latest_potential_clients = 0
latest_scanned = 0
complete_ts_candidates = []

for line in lines:
    try:
        r = json.loads(line)
    except:
        continue
    event = r.get('event', '')
    
    if event in ('complete', 'auth_missing'):
        ts = r.get('ts')
        if ts:
            complete_ts_candidates.append(ts)
        summary = r.get('summary', r)
        pc = summary.get('potentialClients', 0)
        if pc and pc > latest_potential_clients:
            latest_potential_clients = pc
        scanned_val = summary.get('scanned', 0)
        if scanned_val and scanned_val > latest_scanned:
            latest_scanned = scanned_val
    
    src = r.get('summary', r)
    sends_attempted += src.get('sent', src.get('emailsSentCount', 0))
    duplicates_suppressed += src.get('skippedDuplicateSuppression', 0)
    err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else ''
    if 'No auth for gmail' in err_text:
        auth_failures += 1
    hot_followups += src.get('hotFollowups', 0)

if complete_ts_candidates:
    latest_complete = max(complete_ts_candidates)

print('=== LIVE METRICS ===')
print(f'totalRuns: {total_runs}')
print(f'sendsAttempted: {sends_attempted}')
print(f'duplicatesSuppressed: {duplicates_suppressed}')
print(f'authFailures: {auth_failures}')
print(f'hotFollowups: {hot_followups}')
print(f'latestComplete: {latest_complete}')
print(f'latestPotentialClients: {latest_potential_clients}')
print(f'latestScanned: {latest_scanned}')
print()
print('=== LATEST DIGEST METRICS ===')
for k, v in metrics.items():
    print(f'{k}: {v}')
print()
print('=== MATCH CHECK ===')
print(f'totalRuns: live={total_runs} digest={metrics.get("totalRuns")} match={total_runs==metrics.get("totalRuns")}')
print(f'sendsAttempted: live={sends_attempted} digest={metrics.get("sendsAttempted")} match={sends_attempted==metrics.get("sendsAttempted")}')
print(f'duplicatesSuppressed: live={duplicates_suppressed} digest={metrics.get("duplicatesSuppressed")} match={duplicates_suppressed==metrics.get("duplicatesSuppressed")}')
print(f'authFailures: live={auth_failures} digest={metrics.get("authFailures")} match={auth_failures==metrics.get("authFailures")}')
print(f'hotFollowups: live={hot_followups} digest={metrics.get("hotFollowups")} match={hot_followups==metrics.get("hotFollowups")}')
print(f'latestComplete: live={latest_complete} digest={metrics.get("latestComplete")} match={latest_complete==metrics.get("latestComplete")}')
print(f'potentialClients: live={latest_potential_clients} digest={metrics.get("potentialClients")} match={latest_potential_clients==metrics.get("potentialClients")}')
print(f'scanned: live={latest_scanned} digest={metrics.get("scanned")} match={latest_scanned==metrics.get("scanned")}')
