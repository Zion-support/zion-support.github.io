import json
from pathlib import Path

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')

log_text = log_path.read_text()
records = [json.loads(line) for line in log_text.splitlines() if line.strip()]

totalRuns = len(records)
sendsAttempted = 0
duplicatesSuppressed = 0
authFailures = 0
hotFollowups = 0
latestComplete = None
potentialClients_latest = None
scanned_latest = None

for r in records:
    if r.get('event') == 'complete' or r.get('event') == 'auth_missing':
        if r.get('ts'):
            if latestComplete is None or r['ts'] > latestComplete:
                latestComplete = r['ts']
        summary = r.get('summary', r)
        pc = summary.get('potentialClients')
        sc = summary.get('scanned')
        if pc is not None:
            potentialClients_latest = pc
        if sc is not None:
            scanned_latest = sc
        sent = summary.get('sent', summary.get('emailsSentCount', 0))
        sendsAttempted += sent
        duplicatesSuppressed += summary.get('skippedDuplicateSuppression', 0)
        err_text = ' '.join(summary.get('errors', [])) if isinstance(summary.get('errors', []), list) else ''
        if 'No auth for gmail' in err_text:
            authFailures += 1
        hotFollowups += summary.get('hotFollowups', 0)

print(f'totalRuns: {totalRuns}')
print(f'sendsAttempted: {sendsAttempted}')
print(f'duplicatesSuppressed: {duplicatesSuppressed}')
print(f'authFailures: {authFailures}')
print(f'hotFollowups: {hotFollowups}')
print(f'latestComplete: {latestComplete}')
print(f'potentialClients (latest complete): {potentialClients_latest}')
print(f'scanned (latest complete): {scanned_latest}')

print()
print('--- All complete/auth_missing events ---')
for r in records:
    if r.get('event') in ('complete', 'auth_missing'):
        summary = r.get('summary', r)
        ts = r.get('ts', 'N/A')
        pc = summary.get('potentialClients', 'N/A')
        sc = summary.get('scanned', 'N/A')
        sent = summary.get('sent', summary.get('emailsSentCount', 0))
        hf = summary.get('hotFollowups', 0)
        dup = summary.get('skippedDuplicateSuppression', 0)
        errs = summary.get('errors', [])
        print(f'  {ts} | event={r["event"]} | pc={pc} | scanned={sc} | sent={sent} | dupSupp={dup} | hf={hf} | errs={errs}')
