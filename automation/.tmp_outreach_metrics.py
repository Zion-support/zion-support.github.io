import json
from pathlib import Path

log = Path('data/lead-outreach/outreach-log.jsonl')
impr = Path('data/lead-outreach/improvements.json')

records = [json.loads(line) for line in log.read_text().splitlines() if line.strip()]
total = len(records)

sends = 0
dupes = 0
auth_fail = 0
hot_fu = 0
latest_complete = None
potential_clients = 0
scanned = 0

for r in records:
    if r.get('event') in ('complete', 'auth_missing'):
        ts = r.get('ts')
        if ts:
            if latest_complete is None or ts > latest_complete:
                latest_complete = ts
        src = r.get('summary', r)
        sends += src.get('sent', src.get('emailsSentCount', 0))
        dupes += src.get('skippedDuplicateSuppression', 0)
        err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else ''
        if 'No auth for gmail' in err_text:
            auth_fail += 1
        hot_fu += src.get('hotFollowups', 0)
        pc = src.get('potentialClients', 0)
        sc = src.get('scanned', 0)
        if pc and pc > potential_clients:
            potential_clients = pc
        if sc and sc > scanned:
            scanned = sc

data = json.loads(impr.read_text())
latest_digest = data['digests'][-1] if data.get('digests') else {}
latest_impr = data['improvements'][-1] if data.get('improvements') else {}

print(f'TOTAL_RUNS={total}')
print(f'SENDS_ATTEMPTED={sends}')
print(f'DUPLICATES_SUPPRESSED={dupes}')
print(f'AUTH_FAILURES={auth_fail}')
print(f'HOT_FOLLOWUPS={hot_fu}')
print(f'LATEST_COMPLETE={latest_complete}')
print(f'POTENTIAL_CLIENTS_LATEST_SCAN={potential_clients}')
print(f'SCANNED_LATEST_SCAN={scanned}')
print(f'LATEST_DIGEST_TS={latest_digest.get("ts","N/A")}')
print(f'LATEST_DIGEST_STATUS={latest_digest.get("metrics",{}).get("status","N/A")}')
print(f'LATEST_IMPR_TS={latest_impr.get("ts","N/A")}')
print(f'LATEST_IMPR_FIELDS={list(latest_impr.keys()) if latest_impr else []}')
