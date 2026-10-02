import json
from pathlib import Path
from collections import Counter

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')

lines = log_path.read_text().splitlines()
records = [json.loads(line) for line in lines if line.strip()]
print(f'Total non-empty lines: {len(records)}')

computed = {
    'totalRuns': len(records),
    'sendsAttempted': 0,
    'duplicatesSuppressed': 0,
    'authFailures': 0,
    'hotFollowups': 0,
    'latestComplete': None,
    'potentialClients': 0,
    'scanned': 0,
}
candidates = []

for r in records:
    event = r.get('event', '')
    if event in ('complete', 'auth_missing'):
        ts = r.get('ts')
        if ts:
            candidates.append(ts)
    src = r.get('summary', r)
    if isinstance(src, dict):
        computed['sendsAttempted'] += src.get('sent', src.get('emailsSentCount', 0))
        computed['duplicatesSuppressed'] += src.get('skippedDuplicateSuppression', 0)
        computed['hotFollowups'] += src.get('hotFollowups', 0)
        err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else ''
        if 'No auth for gmail' in err_text:
            computed['authFailures'] += 1
        if event == 'complete':
            computed['potentialClients'] = src.get('potentialClients', computed['potentialClients'])
            computed['scanned'] = src.get('scanned', computed['scanned'])

computed['latestComplete'] = max(candidates) if candidates else None

print()
print('=== COMPUTED METRICS ===')
for k, v in computed.items():
    print(f'  {k}: {v}')

data = json.loads(impr_path.read_text())
digests = data.get('digests', [])
latest_digest = digests[-1] if digests else {}
metrics = latest_digest.get('metrics', {})
print()
print('=== LATEST DIGEST METRICS ===')
for k, v in metrics.items():
    print(f'  {k}: {v}')

print()
print('=== RECONCILIATION ===')
print(f'totalRuns: computed={computed["totalRuns"]} vs latest={metrics.get("totalRuns")}')
print(f'sendsAttempted: computed={computed["sendsAttempted"]} vs latest={metrics.get("sendsAttempted")}')
print(f'duplicatesSuppressed: computed={computed["duplicatesSuppressed"]} vs latest={metrics.get("duplicatesSuppressed")}')
print(f'authFailures: computed={computed["authFailures"]} vs latest={metrics.get("authFailures")}')
print(f'hotFollowups: computed={computed["hotFollowups"]} vs latest={metrics.get("hotFollowups")}')
print(f'latestComplete: computed={computed["latestComplete"]} vs latest={metrics.get("latestComplete")}')
print(f'potentialClients: computed={computed["potentialClients"]} vs latest={metrics.get("potentialClients")}')
print(f'scanned: computed={computed["scanned"]} vs latest={metrics.get("scanned")}')

print()
print('=== CANONICAL COMPLETE EVENTS WITH SENDS ===')
for r in records:
    if r.get('event') == 'complete':
        src = r.get('summary', r)
        sent = src.get('sent', 0) if isinstance(src, dict) else 0
        pc = src.get('potentialClients', 0) if isinstance(src, dict) else 0
        if sent > 0:
            print(f'  {r.get("ts")}: sent={sent}, potentialClients={pc}')

print()
print('=== HOT FOLLOWUP EVENTS ===')
for r in records:
    if 'hot' in str(r.get('event', '')).lower() or r.get('hotFollowups', 0) > 0:
        print(f'  {json.dumps(r, indent=2)[:300]}')

print()
print('=== EVENT TYPE COUNTS ===')
event_counts = Counter(r.get('event', 'unknown') for r in records)
for ev, cnt in event_counts.most_common():
    print(f'  {ev}: {cnt}')

print()
print('=== LAST 10 RECORDS ===')
for r in records[-10:]:
    summary = r.get('summary', r)
    sent = summary.get('sent', 0) if isinstance(summary, dict) else 0
    print(f'  {r.get("ts", "N/A")} | {r.get("event", "N/A")} | sent={sent}')

print()
print('=== COMPLETE EVENTS TIMELINE (last 20) ===')
complete_records = [r for r in records if r.get('event') == 'complete']
for r in complete_records[-20:]:
    src = r.get('summary', r)
    sent = src.get('sent', 0) if isinstance(src, dict) else 0
    pc = src.get('potentialClients', 0) if isinstance(src, dict) else 0
    scanned = src.get('scanned', 0) if isinstance(src, dict) else 0
    errors = src.get('errors', []) if isinstance(src, dict) else []
    print(f'  {r.get("ts")} | sent={sent} | pc={pc} | scanned={scanned} | errors={errors[:2]}')
