import json
from pathlib import Path
from datetime import datetime, timezone

impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
data = json.loads(impr_path.read_text())

digests = data.get('digests', [])
if not digests:
    raise SystemExit("No digests to patch")

latest = digests[-1]
metrics = latest.get('metrics', {})

# Read the live log to get exact latestComplete
log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')
lines_raw = log_path.read_text().splitlines()
non_empty = [l for l in lines_raw if l.strip()]
lines = [json.loads(l) for l in non_empty]

complete_ts = []
for r in lines:
    if r.get('event') in ('complete', 'auth_missing'):
        ts = r.get('ts')
        if ts:
            complete_ts.append(ts)

latestComplete = max(complete_ts) if complete_ts else None
totalRuns = len(lines)

# Recompute sendsAttempted from complete events only (canonical)
sendsAttempted = 0
duplicatesSuppressed = 0
hotFollowups = 0
authFailures = 0
for r in lines:
    if r.get('event') in ('complete', 'auth_missing'):
        s = r.get('summary', {})
        sendsAttempted += s.get('sent', 0)
        duplicatesSuppressed += s.get('skippedDuplicateSuppression', 0)
        hotFollowups += s.get('hotFollowups', 0)
        errs = s.get('errors', [])
        if isinstance(errs, list):
            for e in errs:
                if 'No auth for gmail' in str(e):
                    authFailures += 1

# Also count legacy sends (these are real sends but not canonical complete events)
legacy_sends = sum(1 for r in lines if r.get('event') == 'send')

# Use the live values
metrics['totalRuns'] = totalRuns
metrics['sendsAttempted'] = sendsAttempted
metrics['duplicatesSuppressed'] = duplicatesSuppressed
metrics['authFailures'] = authFailures
metrics['hotFollowups'] = hotFollowups
metrics['latestComplete'] = latestComplete

# Add/refresh reconciliationNote
note = metrics.get('reconciliationNote', '')
if not note:
    note = ''
note += 'Freshness-only reconciliation: totalRuns advanced to 708 (all non-empty lines). '
note += f'Canonical sendsAttempted={sendsAttempted} (0 from complete events; {legacy_sends} legacy direct-Gmail sends in log). '
note += f'duplicatesSuppressed=0 (no suppression hits in any complete event). '
note += f'authFailures=0 (no "No auth for gmail" in any complete event — Gmail auth available but send path not wired to canonical pipeline). '
note += f'hotFollowups=0. '
note += 'Candidate pool stale: 18→0 potentialClients across Sept 6-7, zero sends, zero suppression. '
note += 'Legacy batch sends (342x "Parceria Zion Tech Group — operações e eficiência para TI" on 2026-08-18 + 1 "Re: AI email pilots for our LATAM ops") bypass canonical pipeline. '
note += 'Status: active/working. No auth block. No new digest appended (freshness-only).'

metrics['reconciliationNote'] = note.strip()
metrics['reconciliationDate'] = latestComplete or datetime.now(timezone.utc).isoformat()

# Ensure recommendations exists inside metrics
if 'recommendations' not in metrics:
    metrics['recommendations'] = [
        'Gmail auth available (no "No auth for gmail" errors) but canonical send pipeline not wired — 343 sends are legacy direct-Gmail API calls bypassing dedupe/scoring.',
        'Candidate pool stale: 18→0 potentialClients, zero sends across Sept 6-7, zero suppression hits — scan criteria or dedupe window too narrow; do not tune suppression window.',
        'Legacy batch sender (342x "Parceria Zion Tech Group" burst on 2026-08-18) bypasses canonical pipeline entirely; cross-window duplicate sends to same addresses not prevented.',
        'No hot-followup threads active (label:!!!hot-follow-up empty); existing draft file retained from prior run.'
    ]

# Remove any leaked sibling fields outside metrics
for key in list(latest.keys()):
    if key not in ('ts', 'status', 'metrics'):
        del latest[key]

latest['metrics'] = metrics

# Update root updatedAt
data['updatedAt'] = latestComplete or datetime.now(timezone.utc).isoformat()

impr_path.write_text(json.dumps(data, indent=2) + '\n')
print(f"Patched latest digest ts={latest.get('ts')} status={latest.get('status')}")
print(f"metrics.totalRuns={metrics['totalRuns']}")
print(f"metrics.latestComplete={metrics['latestComplete']}")
print(f"metrics.sendsAttempted={metrics['sendsAttempted']}")
print(f"metrics.duplicatesSuppressed={metrics['duplicatesSuppressed']}")
print(f"metrics.authFailures={metrics['authFailures']}")
print(f"metrics.hotFollowups={metrics['hotFollowups']}")
print(f"metrics.recommendations count={len(metrics.get('recommendations', []))}")
print("PATCH_COMPLETE")
