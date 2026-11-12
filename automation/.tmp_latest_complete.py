import json
from pathlib import Path

log = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
lines = [l for l in log.read_text().splitlines() if l.strip()]
records = [json.loads(l) for l in lines]

# Find the latest complete record
complete_records = [r for r in records if r.get('event') == 'complete']
complete_records.sort(key=lambda r: r.get('ts', ''), reverse=True)
print("Latest 3 complete records:")
for r in complete_records[:3]:
    print(json.dumps(r, indent=2))
    print("---")

# Check for any hot-follow-up label events or threads in the log
hot_events = [r for r in records if 'hot' in str(r).lower() or 'follow' in str(r).lower()]
print(f"hot-related events count: {len(hot_events)}")

# Check latest complete event summary
latest = complete_records[0] if complete_records else None
if latest:
    summary = latest.get('summary', latest)
    print(f"\nLatest complete summary:")
    print(f"  potentialClients: {summary.get('potentialClients')}")
    print(f"  scanned: {summary.get('scanned')}")
    print(f"  sent: {summary.get('sent')}")
    print(f"  skippedDuplicateSuppression: {summary.get('skippedDuplicateSuppression')}")
    print(f"  hotFollowups: {summary.get('hotFollowups')}")
    print(f"  errors: {summary.get('errors')}")
