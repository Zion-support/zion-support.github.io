import json
from pathlib import Path

data_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach')
impr = data_path / 'improvements.json'
log  = data_path / 'outreach-log.jsonl'

with open(log) as f:
    records = [json.loads(line) for line in f.read().splitlines() if line.strip()]

with open(impr) as f:
    data = json.load(f)

digests = data.get('digests', [])
latest = digests[-1] if digests else {}
metrics = latest.get('metrics', {})
latest_complete = metrics.get('latestComplete') or latest.get('latestComplete')

expected = {
    'totalRuns': metrics.get('totalRuns') or metrics.get('totalOutreachRuns', 0),
    'sendsAttempted': metrics.get('sendsAttempted', 0),
    'duplicatesSuppressed': metrics.get('duplicatesSuppressed', 0),
    'authFailures': metrics.get('authFailures', 0),
    'hotFollowups': metrics.get('hotFollowups', 0),
    'latestComplete': latest_complete,
}

computed = {
    'totalRuns': len(records),
    'sendsAttempted': 0,
    'duplicatesSuppressed': 0,
    'authFailures': 0,
    'hotFollowups': 0,
    'latestComplete': None
}

for r in records:
    if r.get('event') in ('complete', 'auth_missing'):
        computed['latestComplete'] = r.get('ts') or computed['latestComplete']
    src = r.get('summary', r)
    computed['sendsAttempted'] += src.get('sent', src.get('emailsSentCount', 0))
    computed['duplicatesSuppressed'] += src.get('skippedDuplicateSuppression', 0)
    err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else ''
    computed['authFailures'] += 1 if 'No auth for gmail' in err_text else 0
    computed['hotFollowups'] += src.get('hotFollowups', 0)

candidates = [r.get('ts') for r in records if r.get('event') in ('complete', 'auth_missing') and r.get('ts')]
computed['latestComplete'] = max(candidates) if candidates else None

print('computed:', json.dumps(computed, indent=2))
print('expected:', json.dumps(expected, indent=2))
print('match:', computed == expected)
print('status:', latest.get('status'))
print('total_runs:', len(records))
print('latest_complete:', computed['latestComplete'])
print('sends_attempted:', computed['sendsAttempted'])
print('duplicates_suppressed:', computed['duplicatesSuppressed'])
print('auth_failures:', computed['authFailures'])
print('hot_followups:', computed['hotFollowups'])
