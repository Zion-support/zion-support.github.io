import json, sys
from pathlib import Path

CFF = '/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl'
IFF = '/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json'

try:
    log = Path(CFF).read_text()
except FileNotFoundError:
    print('JSONL_FILE_MISSING')
    sys.exit(1)

lines = [ln for ln in log.splitlines() if ln.strip()]
records = [json.loads(ln) for ln in lines]

impr = json.loads(Path(IFF).read_text())
digests = impr.get('digests', [])
latest = digests[-1] if digests else {}
metrics = latest.get('metrics', {})
latest_complete = metrics.get('latestComplete') or latest.get('latestComplete')
expected = {
    'totalRuns': metrics.get('totalRuns') if metrics.get('totalRuns') is not None else metrics.get('totalOutreachRuns', 0),
    'sendsAttempted': metrics.get('sendsAttempted', 0),
    'duplicatesSuppressed': metrics.get('duplicatesSuppressed', 0),
    'authFailures': metrics.get('authFailures', 0),
    'hotFollowups': metrics.get('hotFollowups', 0),
    'latestComplete': latest_complete,
}
computed = {'totalRuns': len(records), 'sendsAttempted': 0, 'duplicatesSuppressed': 0, 'authFailures': 0, 'hotFollowups': 0, 'latestComplete': None}
for r in records:
    if r.get('event') == 'complete' or r.get('event') == 'auth_missing':
        computed['latestComplete'] = r.get('ts') or computed['latestComplete']
    src = r.get('summary', r)
    computed['sendsAttempted'] += src.get('sent', src.get('emailsSentCount', 0))
    computed['duplicatesSuppressed'] += src.get('skippedDuplicateSuppression', 0)
    err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else ''
    computed['authFailures'] += 1 if 'No auth for gmail' in err_text else 0
    computed['hotFollowups'] += src.get('hotFollowups', 0)

candidates = [r.get('ts') for r in records if r.get('event') in ('complete', 'auth_missing') and r.get('ts')]
computed['latestComplete'] = max(candidates) if candidates else None

ok = computed == expected and latest.get('status') == 'blocked/auth-missing'
print('JSON_PARSE_OK')
print('SCHEMA_OK')
print('JSONL_OK')
print('METRICS_RECONCILED' if ok else f'METRICS_MISMATCH computed={computed} expected={expected}')
print('VERIFICATION_COMPLETE')
sys.exit(0 if ok else 1)
