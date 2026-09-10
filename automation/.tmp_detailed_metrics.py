import json
from pathlib import Path
from collections import Counter

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
data = log_path.read_text()
lines_raw = data.splitlines()
non_empty = [l for l in lines_raw if l.strip()]
lines = [json.loads(l) for l in non_empty]

totalRuns = len(lines)

complete_events = []
auth_failures = 0
sendsAttempted = 0
duplicatesSuppressed = 0
hotFollowups = 0
start_timestamps = []
complete_timestamps = []

for r in lines:
    ev = r.get('event', '')
    if ev == 'start':
        start_timestamps.append(r.get('ts'))
    elif ev == 'complete' or ev == 'auth_missing':
        # count authFailures from all records regardless of event
        src = r.get('summary', {})
        if isinstance(src.get('errors'), list):
            for e in src['errors']:
                if 'No auth for gmail' in str(e):
                    auth_failures += 1
        complete_timestamps.append(r.get('ts'))
        complete_events.append(r)
        sendsAttempted += src.get('sent', 0)
        duplicatesSuppressed += src.get('skippedDuplicateSuppression', 0)
        hotFollowups += src.get('hotFollowups', 0)
    elif ev == 'send':
        # legacy sends counted for sendsAttempted
        sendsAttempted += 1

latestComplete = max(complete_timestamps) if complete_timestamps else None

# potentialClients from latest complete
latest_potentialClients = 0
for r in reversed(complete_events):
    pc = r.get('summary', {}).get('potentialClients', 0)
    if pc is not None:
        latest_potentialClients = pc
        break

# unique suppressed addresses
suppressed_addresses = set()
for r in complete_events:
    sa = r.get('summary', {}).get('skippedAddressSuppression', [])
    if isinstance(sa, list):
        for addr in sa:
            suppressed_addresses.add(addr)

# canonical send-event subjects (for hot followup thread detection)
send_subjects = Counter()
legacy_send_events = []
for r in lines:
    if r.get('event') == 'send':
        subject = r.get('subject', '')
        send_subjects[subject] += 1
        legacy_send_events.append(r)

latest_digest_ts = None
latest_digest_status = None
latest_digest_metrics = {}
latest_digest_complete = None

impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
impr_data = json.loads(impr_path.read_text())
digests = impr_data.get('digests', [])
if digests:
    latest = digests[-1]
    latest_digest_ts = latest.get('ts')
    latest_digest_status = latest.get('status')
    latest_digest_metrics = latest.get('metrics', {})
    latest_digest_complete = latest_digest_metrics.get('latestComplete') or latest.get('latestComplete')

print(f"totalRuns={totalRuns}")
print(f"nonEmptyLines={len(non_empty)}")
print(f"sendsAttempted={sendsAttempted}")
print(f"duplicatesSuppressed={duplicatesSuppressed}")
print(f"authFailures={auth_failures}")
print(f"hotFollowups={hotFollowups}")
print(f"latestComplete={latestComplete}")
print(f"latest_potentialClients={latest_potentialClients}")
print(f"suppressed_addresses_count={len(suppressed_addresses)}")
print(f"latest_digest_ts={latest_digest_ts}")
print(f"latest_digest_status={latest_digest_status}")
print(f"latest_digest_complete={latest_digest_complete}")
print(f"send_subjects_top5={send_subjects.most_common(5)}")
print(f"complete_events_count={len(complete_events)}")
print(f"start_events_count={len(start_timestamps)}")
print("---")
for r in complete_events:
    s = r.get('summary', {})
    print(f"  ts={r.get('ts')} scanned={s.get('scanned')} pc={s.get('potentialClients')} sent={s.get('sent')} skip={s.get('skippedDuplicateSuppression')} errs={s.get('errors')}")
