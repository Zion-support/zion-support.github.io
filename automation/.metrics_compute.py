import json
from pathlib import Path

log = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
raw = log.read_text()
lines = [l for l in raw.splitlines() if l.strip()]
print(f'TOTAL_LINES: {len(lines)}')

records = [json.loads(l) for l in lines]

sends = 0
dupes = 0
auth_fails = 0
hot_fu = 0
complete_ts = None
potential = 0
scanned = 0
legacy_sends = 0

for r in records:
    ev = r.get('event', '')
    summary = r.get('summary', r)
    if ev in ('complete', 'auth_missing'):
        ts = r.get('ts')
        if ts:
            if complete_ts is None or ts > complete_ts:
                complete_ts = ts
        sent = summary.get('sent', summary.get('emailsSentCount', 0))
        sends += sent
        dupes += summary.get('skippedDuplicateSuppression', 0)
        errs = summary.get('errors', [])
        if isinstance(errs, list):
            err_text = ' '.join(errs)
        else:
            err_text = str(errs)
        if 'No auth for gmail' in err_text:
            auth_fails += 1
        hot_fu += summary.get('hotFollowups', 0)
        pc = summary.get('potentialClients', 0)
        scanned = summary.get('scanned', scanned)
    elif ev == 'send' and r.get('status') == 'sent':
        legacy_sends += 1

print(f'SENDS_ATTEMPTED: {sends}')
print(f'DUPLICATES_SUPPRESSED: {dupes}')
print(f'AUTH_FAILURES: {auth_fails}')
print(f'HOT_FOLLOWUPS: {hot_fu}')
print(f'COMPLETE_TS: {complete_ts}')
print(f'POTENTIAL_CLIENTS: {potential}')
print(f'SCANNED: {scanned}')
print(f'LEGACY_DIRECT_SENDS: {legacy_sends}')
