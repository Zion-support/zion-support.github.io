import json
from pathlib import Path

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')

log_text = log_path.read_text()
impr_text = impr_path.read_text()

records = [json.loads(line) for line in log_text.splitlines() if line.strip()]
data = json.loads(impr_text)
digests = data.get('digests', [])
latest = digests[-1] if digests else {}

computed = {
    'totalRuns': len(records),
    'sendsAttempted': 0,
    'duplicatesSuppressed': 0,
    'authFailures': 0,
    'hotFollowups': 0,
    'latestComplete': None,
    'scanned': 0,
    'potentialClients': 0
}

for r in records:
    if r.get('event') == 'complete' or r.get('event') == 'auth_missing':
        ts = r.get('ts')
        if ts:
            if computed['latestComplete'] is None or ts > computed['latestComplete']:
                computed['latestComplete'] = ts
    src = r.get('summary', r)
    computed['sendsAttempted'] += src.get('sent', src.get('emailsSentCount', 0))
    computed['duplicatesSuppressed'] += src.get('skippedDuplicateSuppression', 0)
    err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else str(src.get('errors', ''))
    if 'No auth for gmail' in err_text:
        computed['authFailures'] += 1
    computed['hotFollowups'] += src.get('hotFollowups', 0)
    if 'scanned' in src:
        computed['scanned'] = max(computed['scanned'], src['scanned'])
    if 'potentialClients' in src:
        computed['potentialClients'] = max(computed['potentialClients'], src['potentialClients'])

print('=== COMPUTED METRICS ===')
for k, v in computed.items():
    print(f'{k}: {v}')

print()
print('=== LATEST DIGEST ===')
metrics = latest.get('metrics', {})
for k, v in metrics.items():
    print(f'{k}: {v}')
print(f'status: {latest.get("status")}')

print()
print('=== CURRENT STATE ANALYSIS ===')
auth_ok = metrics.get('gmailAuth') == True or computed['authFailures'] == 0
send_enabled = metrics.get('sendEnabled') == True
print(f'Auth working: {auth_ok} (authFailures={computed["authFailures"]}, gmailAuth={metrics.get("gmailAuth")})')
print(f'Send enabled: {send_enabled}')
print(f'Has hot-followup threads: needs probe')

# Check if latest improvements entry is semantically identical
latest_impr = data.get('improvements', [])[-1] if data.get('improvements') else None
if latest_impr:
    print()
    print('=== LATEST IMPROVEMENTS ENTRY ===')
    print(f'ts: {latest_impr.get("ts")}')
    print(f'status: {latest_impr.get("status")}')
    print(f'authState: {latest_impr.get("authState")}')
    print(f'候補クライアント: {latest_impr.get("potentialClients")}')
    
    # Check for semantic duplicate
    cur_impr = {
        'authState': 'healthy',
        'metrics': {
            'totalRuns': computed['totalRuns'],
            'sendsAttempted': computed['sendsAttempted'],
            'duplicatesSuppressed': computed['duplicatesSuppressed'],
            'authFailures': computed['authFailures'],
            'hotFollowups': computed['hotFollowups']
        },
        'potentialClients': computed['potentialClients'],
        'scanned': computed['scanned'],
        'sendEnabled': send_enabled,
        'gmailAuth': auth_ok,
        'status': 'active/working',
        'latestComplete': computed['latestComplete'],
        'pattern': 'send-disabled scan-only, no canonical sends',
        'recommendations': ['send-path currently disabled; enable send auth/config to convert findings into outreach']
    }
    
    prior = latest_impr
    if (prior.get('status') == cur_impr['status'] and
        prior.get('authState') == cur_impr['authState'] and
        prior.get('sendEnabled') == cur_impr['sendEnabled'] and
        prior.get('gmailAuth') == cur_impr['gmailAuth'] and
        prior.get('potentialClients') == cur_impr['potentialClients'] and
        prior.get('pattern') == cur_impr['pattern'] and
        any(r.get('send-path') == cur_impr['recommendations'][0] for r in prior.get('recommendations', []))):
        print()
        print('=== DUPLICATE DETECTION ===')
        print('LATEST IMPROVEMENTS ENTRY IS SEMANTICALLY IDENTICAL - SKIP APPEND')
