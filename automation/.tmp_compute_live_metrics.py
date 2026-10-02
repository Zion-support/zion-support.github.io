#!/usr/bin/env python3
"""Compute live metrics from outreach-log.jsonl and compare with latest digest."""
import json
import sys
from pathlib import Path

data_dir = Path('/Users/miami2/zion.app/automation/data/lead-outreach')
log_path = data_dir / 'outreach-log.jsonl'
impr_path = data_dir / 'improvements.json'

# --- Live log metrics ---
with open(log_path) as f:
    lines = [l for l in f if l.strip()]

records = []
for line in lines:
    try:
        records.append(json.loads(line))
    except Exception:
        pass

total_runs = len(lines)
sends_attempted = 0
duplicates_suppressed = 0
auth_failures = 0
hot_followups = 0
latest_complete = None
candidates = []
potential_clients = 0
scanned = 0

for r in records:
    ev = r.get('event', '')
    if ev in ('complete', 'auth_missing') and r.get('ts'):
        candidates.append(r['ts'])
    s = r.get('summary', r)
    sends_attempted += s.get('sent', s.get('emailsSentCount', 0)) or 0
    duplicates_suppressed += s.get('skippedDuplicateSuppression', 0) or 0
    errs = s.get('errors', [])
    err_text = ' '.join(errs) if isinstance(errs, list) else str(errs)
    if 'No auth for gmail' in err_text:
        auth_failures += 1
    hot_followups += s.get('hotFollowups', 0) or 0
    if 'potentialClients' in s:
        potential_clients = s['potentialClients']
    if 'scanned' in s:
        scanned = s['scanned']

if candidates:
    latest_complete = max(candidates)

print(f'live_totalRuns={total_runs}')
print(f'live_sendsAttempted={sends_attempted}')
print(f'live_duplicatesSuppressed={duplicates_suppressed}')
print(f'live_authFailures={auth_failures}')
print(f'live_hotFollowups={hot_followups}')
print(f'live_latestComplete={latest_complete}')
print(f'live_potentialClients={potential_clients}')
print(f'live_scanned={scanned}')

# --- Latest digest metrics ---
with open(impr_path) as f:
    impr = json.load(f)

digests = impr.get('digests', [])
latest = digests[-1] if digests else {}
lm = latest.get('metrics', {})

print(f'digest_totalRuns={lm.get("totalRuns")}')
print(f'digest_sendsAttempted={lm.get("sendsAttempted")}')
print(f'digest_duplicatesSuppressed={lm.get("duplicatesSuppressed")}')
print(f'digest_authFailures={lm.get("authFailures")}')
print(f'digest_hotFollowups={lm.get("hotFollowups")}')
print(f'digest_latestComplete={lm.get("latestComplete")}')
print(f'digest_potentialClients={lm.get("potentialClients")}')
print(f'digest_scanned={lm.get("scanned")}')
print(f'digest_status={latest.get("status")}')
print(f'digest_ts={latest.get("ts")}')

# --- Comparison ---
mismatches = []
live_map = {
    'totalRuns': total_runs,
    'sendsAttempted': sends_attempted,
    'duplicatesSuppressed': duplicates_suppressed,
    'authFailures': auth_failures,
    'hotFollowups': hot_followups,
    'latestComplete': latest_complete,
    'potentialClients': potential_clients,
    'scanned': scanned,
}
for k, live_val in live_map.items():
    digest_val = lm.get(k)
    if live_val != digest_val:
        mismatches.append(f'{k}: live={live_val} digest={digest_val}')

print(f'MISMATCHES={len(mismatches)}')
for m in mismatches:
    print(f'  {m}')

# --- Improvements array check ---
imps = impr.get('improvements', [])
print(f'improvements_count={len(imps)}')
print(f'has_improvements_array={"improvements" in impr}')

# --- Recommendations at digest level check ---
if 'recommendations' in latest and 'recommendations' not in lm:
    print('WARNING: recommendations at digest level (should be in metrics)')
if 'pattern' in latest:
    print('WARNING: pattern at digest level (should be in improvements only)')

sys.exit(0)
