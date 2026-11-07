import json, sys
from pathlib import Path

BASE = Path('/Users/miami2/zion.app/automation/data/lead-outreach')
log  = BASE / 'outreach-log.jsonl'
impr = BASE / 'improvements.json'

records = [json.loads(l) for l in log.read_text().splitlines() if l.strip()]
total = len(records)

sends = 0; dup = 0; auth = 0; hot = 0; candidates = []; pc = 0
for r in records:
    if r.get('event') in ('complete','auth_missing') and r.get('ts'):
        candidates.append(r['ts'])
    src = r.get('summary', r)
    sends += src.get('sent', src.get('emailsSentCount', 0))
    dup  += src.get('skippedDuplicateSuppression', 0)
    err  = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else str(src.get('errors',''))
    auth += 1 if 'No auth' in err else 0
    hot  += src.get('hotFollowups', 0)
    if r.get('event') == 'complete' and r.get('summary', {}).get('potentialClients'):
        pc = r['summary']['potentialClients']

latest_complete = max(candidates) if candidates else None

data  = json.loads(impr.read_text())
latest_digest = data['digests'][-1]
m = latest_digest['metrics']

print('=== LIVE METRICS ===')
print(f'LINES       = {total}')
print(f'SENDS       = {sends}')
print(f'DUP_SUPP    = {dup}')
print(f'AUTH_FAIL   = {auth}')
print(f'HOT_FOLLOW  = {hot}')
print(f'POTENTIAL   = {pc}')
print(f'LATEST_CPLT = {latest_complete}')

print()
print('=== DIGEST STATE ===')
print(f'DIGEST_TS      = {latest_digest["ts"]}')
print(f'DIGEST_STATUS  = {latest_digest["status"]}')
print(f'DIGEST_TOTAL   = {m["totalRuns"]}')
print(f'DIGEST_SENDS   = {m["sendsAttempted"]}')
print(f'DIGEST_DUP     = {m["duplicatesSuppressed"]}')
print(f'DIGEST_AUTH    = {m["authFailures"]}')
print(f'DIGEST_HOT     = {m["hotFollowups"]}')
print(f'DIGEST_PC      = {m["potentialClients"]}')
print(f'DIGEST_LATEST  = {m["latestComplete"]}')
print(f'IMPR_COUNT     = {len(data["improvements"])}')
print(f'LAST_IMPR_TS   = {data["improvements"][-1]["ts"]}')

# Comparison
live = {
    'totalRuns': total,
    'sendsAttempted': sends,
    'duplicatesSuppressed': dup,
    'authFailures': auth,
    'hotFollowups': hot,
    'potentialClients': pc,
    'latestComplete': latest_complete,
}
expected = {
    'totalRuns': m['totalRuns'],
    'sendsAttempted': m['sendsAttempted'],
    'duplicatesSuppressed': m['duplicatesSuppressed'],
    'authFailures': m['authFailures'],
    'hotFollowups': m['hotFollowups'],
    'potentialClients': m['potentialClients'],
    'latestComplete': m['latestComplete'],
}
match = live == expected
print()
print(f'METRICS_MATCH = {match}')
if not match:
    for k in live:
        if live[k] != expected[k]:
            print(f'  DIFF {k}: live={live[k]} digest={expected[k]}')
