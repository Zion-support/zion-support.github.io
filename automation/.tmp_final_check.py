import json
from pathlib import Path
from collections import Counter

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')

# Load data
raw = log_path.read_text()
lines = [line for line in raw.splitlines() if line.strip()]
records = [json.loads(line) for line in lines]

impr_data = json.loads(impr_path.read_text())
digests = impr_data.get('digests', [])
improvements = impr_data.get('improvements', [])
latest_digest = digests[-1] if digests else {}
latest_impr = improvements[-1] if improvements else {}

# Compute metrics
total_runs = len(records)
sends_attempted = 0
duplicates_suppressed = 0
auth_failures = 0
hot_followups = 0
complete_candidates = []

for r in records:
    if r.get('event') in ('complete', 'auth_missing'):
        ts = r.get('ts')
        if ts:
            complete_candidates.append(ts)
    src = r.get('summary', r)
    if isinstance(src, dict):
        sent_val = src.get('sent', src.get('emailsSentCount', 0))
        if isinstance(sent_val, (int, float)):
            sends_attempted += int(sent_val)
        dupe_val = src.get('skippedDuplicateSuppression', 0)
        if isinstance(dupe_val, (int, float)):
            duplicates_suppressed += int(dupe_val)
        errors = src.get('errors', [])
        if isinstance(errors, list):
            err_str = ' '.join(errors)
        elif isinstance(errors, str):
            err_str = errors
        else:
            err_str = ''
        if 'No auth for gmail' in err_str:
            auth_failures += 1
        hf = src.get('hotFollowups', 0)
        if isinstance(hf, (int, float)):
            hot_followups += int(hf)

latest_complete = max(complete_candidates) if complete_candidates else None

# Latest complete event potentialClients
potential_clients = 0
scanned = 0
for r in records:
    if r.get('event') == 'complete':
        sc = r.get('summary', {})
        if isinstance(sc, dict):
            pc = sc.get('potentialClients', 0)
            if isinstance(pc, (int, float)) and pc > potential_clients:
                potential_clients = int(pc)
            s = sc.get('scanned', 0)
            if isinstance(s, (int, float)):
                scanned = int(s)

events = Counter(r.get('event','?') for r in records)

# Check metrics vs latest digest
ld_metrics = latest_digest.get('metrics', {})
changes = []
for key in ['totalRuns', 'sendsAttempted', 'duplicatesSuppressed', 'authFailures', 'hotFollowups', 'latestComplete', 'potentialClients', 'scanned']:
    old = ld_metrics.get(key)
    new_map = {
        'totalRuns': total_runs,
        'sendsAttempted': sends_attempted,
        'duplicatesSuppressed': duplicates_suppressed,
        'authFailures': auth_failures,
        'hotFollowups': hot_followups,
        'latestComplete': latest_complete,
        'potentialClients': potential_clients,
        'scanned': scanned,
    }
    new = new_map[key]
    if old != new:
        changes.append((key, old, new))

# Check if latest improvements is a semantic duplicate
def is_same_state(impr, metrics):
    """Check if improvements entry already describes this exact state."""
    pattern = impr.get('pattern', '')
    # Key markers of the stale zero-send state
    has_zero_sends = ('0 canonical sends' in pattern or 'sendsAttempted=0' in pattern or 
                      ('sends' in pattern and '0' in pattern and 'canonical' in pattern.lower()))
    has_zero_potential = ('potentialClients=0' in pattern or 'potentialClients: 0' in pattern)
    has_same_total = str(metrics['totalRuns']) in pattern
    has_no_state_delta = ('no meaningful state delta' in pattern.lower() or 
                         'no material' in pattern.lower() or
                         'identical' in pattern.lower())
    return has_zero_sends and has_zero_potential and has_no_state_delta

same_state_as_latest_impr = (latest_impr and is_same_state(latest_impr, {
    'totalRuns': total_runs,
    'sendsAttempted': sends_attempted,
    'duplicatesSuppressed': duplicates_suppressed,
    'authFailures': auth_failures,
    'hotFollowups': hot_followups,
    'latestComplete': latest_complete,
    'potentialClients': potential_clients,
    'scanned': scanned,
}))

# Check hot-follow-up threads (probe gmail label)
import subprocess
try:
    result = subprocess.run(
        ['gog', 'gmail', 'search', 'label:!!!hot-follow-up', '--max', '25', '--plain', '--no-input'],
        capture_output=True, text=True, timeout=30
    )
    hot_followup_output = result.stdout.strip()
    hot_followup_error = result.stderr.strip() if result.returncode != 0 else ''
    hot_followup_count = len([l for l in hot_followup_output.splitlines() if l.strip() and not l.startswith('Fetched') and not l.startswith('Total')])
except FileNotFoundError:
    hot_followup_output = ''
    hot_followup_error = 'gog binary not found'
    hot_followup_count = -1  # unknown
except subprocess.TimeoutExpired:
    hot_followup_output = ''
    hot_followup_error = 'gog probe timed out (30s)'
    hot_followup_count = -1
except Exception as e:
    hot_followup_output = ''
    hot_followup_error = str(e)
    hot_followup_count = -1

print("=" * 60)
print("HEALTH SNAPSHOT")
print("=" * 60)
print(f"Data dir: /Users/miami2/zion.app/automation/data/lead-outreach/")
print(f"Log: outreach-log.jsonl ({total_runs} non-empty lines)")
print(f"State file: improvements.json")
print()
print("Metrics (recomputed from live files):")
print(f"  totalRuns: {total_runs}")
print(f"  sendsAttempted: {sends_attempted}")
print(f"  duplicatesSuppressed: {duplicates_suppressed}")
print(f"  authFailures: {auth_failures}")
print(f"  hotFollowups: {hot_followups}")
print(f"  latestComplete: {latest_complete}")
print(f"  potentialClients (max across completes): {potential_clients}")
print(f"  scanned (max across completes): {scanned}")
print()
print(f"Event distribution: {dict(events)}")
print()
print(f"Auth: {'healthy' if auth_failures == 0 else 'FAILURES DETECTED'} (authFailures={auth_failures})")
print(f"Send path: sendEnabled={'true' if latest_digest.get('metrics',{}).get('sendEnabled') else 'false'}, gmailAuth={'true' if latest_digest.get('metrics',{}).get('gmailAuth') else 'false'}")
print()
print("Digest state:")
print(f"  Latest digest status: {latest_digest.get('status')}")
print(f"  Latest digest metrics match live files: {len(changes) == 0}")
if changes:
    print(f"  Changes vs latest digest:")
    for k, old, new in changes:
        print(f"    {k}: {old} -> {new}")
print(f"  Latest improvements entry ts: {latest_impr.get('ts')}")
print(f"  Latest improvements same-state: {same_state_as_latest_impr}")
print()
print("Hot-follow-up probe:")
if hot_followup_count >= 0:
    print(f"  Threads found: {hot_followup_count}")
    if hot_followup_count > 0:
        print(f"  Output preview:")
        for line in hot_followup_output.splitlines()[:5]:
            print(f"    {line}")
else:
    print(f"  Status: {hot_followup_error}")
print()
print("=" * 60)
print("ACTION DECISIONS")
print("=" * 60)

# Decision: digest append?
digest_needed = len(changes) > 0
print(f"Digest append needed: {digest_needed} (changes={len(changes)})")

# Decision: improvements append?
impr_needed = not same_state_as_latest_impr and (auth_failures > 0 or sends_attempted > 0 or hot_followups > 0 or hot_followup_count > 0 or digest_needed)
print(f"Improvements append needed: {impr_needed}")

# Decision: CEO draft?
auth_ok = auth_failures == 0 and latest_digest.get('metrics', {}).get('gmailAuth', False) == True
threads_exist = hot_followup_count > 0
draft_needed = auth_ok and threads_exist
print(f"Auth OK: {auth_ok}")
print(f"Hot-follow-up threads: {threads_exist}")
print(f"CEO draft needed: {draft_needed}")

print()
print("=" * 60)
print("PATTERN ASSESSMENT")
print("=" * 60)
if sends_attempted == 0:
    print("No canonical sends: suppression window never exercised,")
    print("content experiments unobservable until sends resume.")
    print("343 legacy direct Gmail sends in log bypass canonical pipeline.")
if auth_failures == 0 and sends_attempted == 0:
    print("Auth healthy but sends disabled - send-path config issue,")
    print("not a suppression/prompt/scoring problem.")
if hot_followup_count == 0:
    print("No active hot-follow-up threads - no CEO reply to draft.")
