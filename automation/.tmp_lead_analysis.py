import json
from pathlib import Path
from datetime import datetime, timezone

log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')

# --- Parse outreach-log.jsonl ---
content = log_path.read_text()
lines = [l for l in content.splitlines() if l.strip()]
all_records = []
parse_errors = 0
for line in lines:
    try:
        rec = json.loads(line)
        all_records.append(rec)
        if 'event' in rec and rec['event'] not in ('start', 'complete', 'auth_missing', 'send', 'send_disabled_analysis', 'batch-run'):
            pass
    except json.JSONDecodeError:
        parse_errors += 1

print(f"=== OUTREACH LOG ANALYSIS ===")
print(f"Total non-empty lines: {len(lines)}")
print(f"JSON parse errors: {parse_errors}")
print(f"Parsed records: {len(all_records)}")

# Count event types
from collections import Counter
event_counts = Counter(r.get('event') for r in all_records)
print(f"\nEvent type breakdown:")
for evt, cnt in sorted(event_counts.items()):
    print(f"  {evt}: {cnt}")

# Compute canonical metrics from complete/auth_missing records only
totalRuns = len(lines)
sendsAttempted = 0
duplicatesSuppressed = 0
authFailures = 0
hotFollowups = 0
latestComplete = None
candidates = []

for r in all_records:
    ev = r.get('event', '')
    if ev in ('complete', 'auth_missing') and r.get('ts'):
        candidates.append(r['ts'])
    src = r.get('summary', r)
    sent = src.get('sent', src.get('emailsSentCount', 0))
    if isinstance(sent, int):
        sendsAttempted += sent
    skipped = src.get('skippedDuplicateSuppression', 0)
    if isinstance(skipped, int):
        duplicatesSuppressed += skipped
    errs = src.get('errors', [])
    err_text = ' '.join(errs) if isinstance(errs, list) else str(errs)
    if 'No auth for gmail' in err_text:
        authFailures += 1
    hf = src.get('hotFollowups', 0)
    if isinstance(hf, int):
        hotFollowups += hf
    pc = src.get('potentialClients')
    if pc is not None:
        # Track latest potentialClients from complete events
        pass

latestComplete = max(candidates) if candidates else None

# Get latest complete event's potentialClients
latest_pc = None
latest_scanned = None
for r in reversed(all_records):
    if r.get('event') in ('complete', 'auth_missing'):
        summary = r.get('summary', r)
        if 'potentialClients' in summary:
            latest_pc = summary['potentialClients']
        if 'scanned' in summary:
            latest_scanned = summary['scanned']
        break

print(f"\n=== CANONICAL METRICS (from complete/auth_missing events) ===")
print(f"totalRuns: {totalRuns}")
print(f"sendsAttempted: {sendsAttempted}")
print(f"duplicatesSuppressed: {duplicatesSuppressed}")
print(f"authFailures: {authFailures}")
print(f"hotFollowups: {hotFollowups}")
print(f"latestComplete: {latestComplete}")
print(f"latestComplete potentialClients: {latest_pc}")
print(f"latestComplete scanned: {latest_scanned}")

# Check for recent new complete events (since latest digest's latestComplete)
latest_digest_ts = "2026-09-07T01:27:59.585368Z"
new_since = [r for r in all_records if r.get('event') in ('complete', 'auth_missing') and r.get('ts', '') > latest_digest_ts]
print(f"\nNew complete/auth_missing events since {latest_digest_ts}: {len(new_since)}")
for nr in new_since[:10]:
    ev = nr.get('event', '?')
    ts = nr.get('ts', '?')
    summary = nr.get('summary', nr)
    sent = summary.get('sent', summary.get('emailsSentCount', 0))
    skipped = summary.get('skippedDuplicateSuppression', 0)
    pc = summary.get('potentialClients', 'N/A')
    hf = summary.get('hotFollowups', 0)
    errs = summary.get('errors', [])
    print(f"  {ev} | {ts} | sent={sent} | skipped={skipped} | pc={pc} | hf={hf} | errors={errs}")

# Check for auth_missing events
auth_missing_events = [r for r in all_records if r.get('event') == 'auth_missing']
print(f"\nAuth-missing events: {len(auth_missing_events)}")
for ae in auth_missing_events[:5]:
    print(f"  ts={ae.get('ts')} summary.errors={ae.get('summary', {}).get('errors', [])}")

# --- Parse improvements.json ---
print(f"\n=== IMPROVEMENTS.JSON ANALYSIS ===")
data = json.loads(impr_path.read_text())
digests = data.get('digests', [])
improvements = data.get('improvements', [])
print(f"Digests count: {len(digests)}")
print(f"Improvements count: {len(improvements)}")

if digests:
    latest = digests[-1]
    m = latest.get('metrics', {})
    print(f"\nLatest digest:")
    print(f"  ts: {latest.get('ts')}")
    print(f"  status: {latest.get('status')}")
    print(f"  metrics.totalRuns: {m.get('totalRuns')}")
    print(f"  metrics.sendsAttempted: {m.get('sendsAttempted')}")
    print(f"  metrics.duplicatesSuppressed: {m.get('duplicatesSuppressed')}")
    print(f"  metrics.authFailures: {m.get('authFailures')}")
    print(f"  metrics.hotFollowups: {m.get('hotFollowups')}")
    print(f"  metrics.latestComplete: {m.get('latestComplete')}")
    print(f"  metrics.potentialClients: {m.get('potentialClients')}")
    print(f"  metrics.scanned: {m.get('scanned')}")
    print(f"  metrics.reconciliationNote: {m.get('reconciliationNote', 'N/A')[:200]}")

if improvements:
    latest_imp = improvements[-1]
    print(f"\nLatest improvements entry:")
    print(f"  ts: {latest_imp.get('ts')}")
    print(f"  pattern: {latest_imp.get('pattern', 'N/A')[:300]}")
    print(f"  recommendations count: {len(latest_imp.get('recommendations', []))}")

# Determine if there's a meaningful state delta
print(f"\n=== STATE DELTA ANALYSIS ===")
print(f"totalRuns delta: {totalRuns} vs digest {m.get('totalRuns')} -> {totalRuns - m.get('totalRuns', 0)}")
print(f"sendsAttempted delta: {sendsAttempted} vs digest {m.get('sendsAttempted')} -> {sendsAttempted - m.get('sendsAttempted', 0)}")
print(f"duplicatesSuppressed delta: {duplicatesSuppressed} vs digest {m.get('duplicatesSuppressed')} -> {duplicatesSuppressed - m.get('duplicatesSuppressed', 0)}")
print(f"authFailures delta: {authFailures} vs digest {m.get('authFailures')} -> {authFailures - m.get('authFailures', 0)}")
print(f"hotFollowups delta: {hotFollowups} vs digest {m.get('hotFollowups')} -> {hotFollowups - m.get('hotFollowups', 0)}")
print(f"latestComplete delta: {latestComplete} vs digest {m.get('latestComplete')}")
print(f"potentialClients delta: {latest_pc} vs digest {m.get('potentialClients')} -> {latest_pc - m.get('potentialClients', 0) if latest_pc is not None and m.get('potentialClients') is not None else 'N/A'}")
print(f"scanned delta: {latest_scanned} vs digest {m.get('scanned')} -> {latest_scanned - m.get('scanned', 0) if latest_scanned is not None and m.get('scanned') is not None else 'N/A'}")
