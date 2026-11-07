import json
from pathlib import Path
from datetime import datetime, timezone

log = Path('/Users/miami2/zion.app/lead-crm/outreach-log.jsonl')
impr = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')

lines = [line for line in log.read_text().splitlines() if line.strip()]
print(f'Total non-empty lines: {len(lines)}')

sends = 0
dups = 0
auth_fails = 0
hot_fu = 0
latest_complete = None
complete_ts_list = []
latest_pc = 0
latest_scanned = 0

for line in lines:
    r = json.loads(line)
    event = r.get('event', '')
    if event in ('complete', 'auth_missing'):
        ts = r.get('ts') or r.get('summary', {}).get('ts')
        if ts:
            complete_ts_list.append(ts)
    if event == 'complete':
        s = r.get('summary', r)
        sends += s.get('sent', s.get('emailsSentCount', 0))
        dups += s.get('skippedDuplicateSuppression', 0)
        errs = s.get('errors', [])
        err_text = ' '.join(errs) if isinstance(errs, list) else str(errs)
        if 'No auth for gmail' in err_text:
            auth_fails += 1
        hot_fu += s.get('hotFollowups', 0)
        latest_pc = s.get('potentialClients', 0)
        latest_scanned = s.get('scanned', 0)
    elif event == 'auth_missing':
        s = r.get('summary', r)
        errs = s.get('errors', [])
        err_text = ' '.join(errs) if isinstance(errs, list) else str(errs)
        if 'No auth for gmail' in err_text:
            auth_fails += 1

if complete_ts_list:
    latest_complete = max(complete_ts_list)

print(f'totalRuns: {len(lines)}')
print(f'sendsAttempted: {sends}')
print(f'duplicatesSuppressed: {dups}')
print(f'authFailures: {auth_fails}')
print(f'hotFollowups: {hot_fu}')
print(f'latestComplete: {latest_complete}')
print(f'potentialClients (latest complete): {latest_pc}')
print(f'scanned (latest complete): {latest_scanned}')

# Load improvements.json to check latest entry
data = json.loads(impr.read_text())
improvements = data.get('improvements', [])
digests = data.get('digests', [])
latest_digest = digests[-1] if digests else {}
latest_impr = improvements[-1] if improvements else {}

print(f'\n--- Latest digest ---')
print(f'ts: {latest_digest.get("ts")}')
print(f'status: {latest_digest.get("status")}')
md = latest_digest.get('metrics', {})
print(f'metrics.totalRuns: {md.get("totalRuns")}')
print(f'metrics.sendsAttempted: {md.get("sendsAttempted")}')
print(f'metrics.duplicatesSuppressed: {md.get("duplicatesSuppressed")}')
print(f'metrics.authFailures: {md.get("authFailures")}')
print(f'metrics.hotFollowups: {md.get("hotFollowups")}')
print(f'metrics.latestComplete: {md.get("latestComplete")}')
print(f'metrics.potentialClients: {md.get("potentialClients")}')
print(f'metrics.sendEnabled: {md.get("sendEnabled")}')
print(f'metrics.gmailAuth: {md.get("gmailAuth")}')

print(f'\n--- Latest improvement entry ---')
print(f'ts: {latest_impr.get("ts")}')
print(f'pattern: {latest_impr.get("pattern", "")[:100]}...')
print(f'recommendations: {len(latest_impr.get("recommendations", []))} items')

# Check if latest improvement is semantically duplicate
live_metrics_match = (
    md.get('totalRuns') == len(lines) and
    md.get('sendsAttempted') == sends and
    md.get('duplicatesSuppressed') == dups and
    md.get('authFailures') == auth_fails and
    md.get('hotFollowups') == hot_fu and
    md.get('potentialClients') == latest_pc
)
print(f'\nLive metrics match latest digest: {live_metrics_match}')
print(f'Latest improvement ts: {latest_impr.get("ts")}')
print(f'Current time (ISO): {datetime.now(timezone.utc).isoformat()}')
