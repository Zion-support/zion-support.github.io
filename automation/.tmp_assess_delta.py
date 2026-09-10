import json
from pathlib import Path

impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
log_path  = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')

data = json.loads(impr_path.read_text())
digests = data.get('digests', [])
latest = digests[-1] if digests else {}
metrics = latest.get('metrics', {})

records = [json.loads(line) for line in log_path.read_text().splitlines() if line.strip()]
computed_totalRuns = len(records)
computed_sends = 0
computed_dupes = 0
computed_authFails = 0
computed_hot = 0
candidates = []
for r in records:
    if r.get('event') in ('complete', 'auth_missing'):
        ts = r.get('ts')
        if ts:
            candidates.append(ts)
        src = r.get('summary', r)
        computed_sends += src.get('sent', src.get('emailsSentCount', 0))
        computed_dupes += src.get('skippedDuplicateSuppression', 0)
        err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else ''
        if 'No auth for gmail' in err_text:
            computed_authFails += 1
        computed_hot += src.get('hotFollowups', 0)

latestComplete = max(candidates) if candidates else None
last_complete_summary = None
if candidates:
    for r in records:
        if r.get('event') in ('complete', 'auth_missing') and r.get('ts') == latestComplete:
            last_complete_summary = r.get('summary', r)
            break

potentialClients = last_complete_summary.get('potentialClients', 0) if last_complete_summary else 0
scanned = last_complete_summary.get('scanned', 0) if last_complete_summary else 0

print(f"totalRuns={computed_totalRuns}")
print(f"sendsAttempted={computed_sends}")
print(f"duplicatesSuppressed={computed_dupes}")
print(f"authFailures={computed_authFails}")
print(f"hotFollowups={computed_hot}")
print(f"latestComplete={latestComplete}")
print(f"potentialClients={potentialClients}")
print(f"scanned={scanned}")
print(f"digest_totalRuns={metrics.get('totalRuns')}")
print(f"digest_sends={metrics.get('sendsAttempted')}")
print(f"digest_dupes={metrics.get('duplicatesSuppressed')}")
print(f"digest_authFails={metrics.get('authFailures')}")
print(f"digest_hot={metrics.get('hotFollowups')}")
print(f"digest_latestComplete={metrics.get('latestComplete')}")
print(f"digest_potentialClients={metrics.get('potentialClients')}")
print(f"digest_scanned={metrics.get('scanned')}")

# Check if there are any start events without matching complete (orphaned)
start_ts = set()
complete_ts = set()
for r in records:
    if r.get('event') == 'start' and r.get('ts'):
        start_ts.add(r['ts'])
    if r.get('event') in ('complete', 'auth_missing') and r.get('ts'):
        complete_ts.add(r['ts'])
orphaned_starts = start_ts - complete_ts
print(f"orphaned_starts={len(orphaned_starts)}")
if orphaned_starts:
    print(f"orphaned_start_ts={list(orphaned_starts)[:5]}")

# Check for any new complete events since latestComplete in digest
if latestComplete:
    new_since = [r for r in records if r.get('event') in ('complete', 'auth_missing') and r.get('ts') and r['ts'] > latestComplete]
    print(f"new_complete_since_digest={len(new_since)}")
    for r in new_since[:3]:
        print(f"  new: {r.get('ts')} sent={r.get('summary', r).get('sent', 0)} pot={r.get('summary', r).get('potentialClients', 0)}")

# Check hot-followup label status from log
hot_followup_records = [r for r in records if r.get('event') == 'complete' and r.get('summary', r).get('hotFollowups', 0) > 0]
print(f"hot_followup_complete_records={len(hot_followup_records)}")
