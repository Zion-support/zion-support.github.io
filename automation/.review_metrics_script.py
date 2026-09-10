import json
from pathlib import Path

impr = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
log  = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')

data = json.loads(impr.read_text())
digests = data.get('digests', [])
latest = digests[-1] if digests else {}
metrics = latest.get('metrics', {})
latest_complete = metrics.get('latestComplete')

records = [json.loads(line) for line in log.read_text().splitlines() if line.strip()]
expected = {
    'totalRuns': metrics.get('totalRuns', 0),
    'sendsAttempted': metrics.get('sendsAttempted', 0),
    'duplicatesSuppressed': metrics.get('duplicatesSuppressed', 0),
    'authFailures': metrics.get('authFailures', 0),
    'hotFollowups': metrics.get('hotFollowups', 0),
    'latestComplete': latest_complete,
}
computed = {'totalRuns': len(records), 'sendsAttempted': 0, 'duplicatesSuppressed': 0, 'authFailures': 0, 'hotFollowups': 0, 'latestComplete': None}
for r in records:
    if r.get('event') in ('complete', 'auth_missing'):
        ts = r.get('ts')
        if ts and (computed['latestComplete'] is None or ts > computed['latestComplete']):
            computed['latestComplete'] = ts
    src = r.get('summary', r)
    computed['sendsAttempted'] += src.get('sent', src.get('emailsSentCount', 0))
    computed['duplicatesSuppressed'] += src.get('skippedDuplicateSuppression', 0)
    err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else ''
    computed['authFailures'] += 1 if 'No auth for gmail' in err_text else 0
    computed['hotFollowups'] += src.get('hotFollowups', 0)

candidates = [r.get('ts') for r in records if r.get('event') in ('complete', 'auth_missing') and r.get('ts')]
computed['latestComplete'] = max(candidates) if candidates else None

print(f"totalRuns: computed={computed['totalRuns']} expected={expected['totalRuns']}")
print(f"sendsAttempted: {computed['sendsAttempted']} vs {expected['sendsAttempted']}")
print(f"duplicatesSuppressed: {computed['duplicatesSuppressed']} vs {expected['duplicatesSuppressed']}")
print(f"authFailures: {computed['authFailures']} vs {expected['authFailures']}")
print(f"hotFollowups: {computed['hotFollowups']} vs {expected['hotFollowups']}")
print(f"latestComplete: {computed['latestComplete']} vs {expected['latestComplete']}")
print(f"status: {latest.get('status')}")
print(f"computed==expected: {computed == expected}")
print(f"stats_active_working: {latest.get('status') == 'active/working'}")
