import json
from pathlib import Path

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')

raw = log_path.read_text()
lines = [line for line in raw.splitlines() if line.strip()]

records = [json.loads(line) for line in lines]

# Find all complete events, sort by ts
completes = [r for r in records if r.get('event') == 'complete']
print(f"Total complete events: {len(completes)}")

# Sort by ts
completes_sorted = sorted(completes, key=lambda r: r.get('ts', ''))

# Latest complete
latest = completes_sorted[-1] if completes_sorted else None
print(f"\nLatest complete event:")
print(f"  ts: {latest.get('ts') if latest else 'N/A'}")
if latest:
    summary = latest.get('summary', {})
    print(f"  potentialClients: {summary.get('potentialClients')}")
    print(f"  scanned: {summary.get('scanned')}")
    print(f"  sent: {summary.get('sent')}")
    print(f"  skippedDuplicateSuppression: {summary.get('skippedDuplicateSuppression')}")
    print(f"  hotFollowups: {summary.get('hotFollowups')}")
    print(f"  errors: {summary.get('errors')}")

# Show last 5 completes
print(f"\nLast 5 complete events (by ts):")
for r in completes_sorted[-5:]:
    s = r.get('summary', {})
    print(f"  ts={r.get('ts')} potentialClients={s.get('potentialClients')} scanned={s.get('scanned')} sent={s.get('sent')} skipped={s.get('skippedDuplicateSuppression')}")

# Check for auth_missing events
auth_missing = [r for r in records if r.get('event') == 'auth_missing']
print(f"\nAuth missing events: {len(auth_missing)}")
for r in auth_missing[-3:]:
    print(f"  ts={r.get('ts')} errors={r.get('summary',{}).get('errors')}")

# Check if any complete events happened after Sep 7
print(f"\nComplete events after 2026-09-07T01:27:59:")
post_sep7 = [r for r in completes_sorted if r.get('ts', '') > '2026-09-07T01:27:59.585368Z']
print(f"  Count: {len(post_sep7)}")
for r in post_sep7[:5]:
    s = r.get('summary', {})
    print(f"  ts={r.get('ts')} potentialClients={s.get('potentialClients')} scanned={s.get('scanned')}")
