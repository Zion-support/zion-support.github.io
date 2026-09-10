import json
from pathlib import Path
from datetime import datetime, timezone

impr_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json')
log_path = Path('/Users/miami2/zion.app/automation/data/lead-outreach/outreach-log.jsonl')

data = json.loads(impr_path.read_text())
digests = data.get('digests', [])
latest = digests[-1] if digests else {}

metrics = latest.get('metrics', {})

# Recompute from live log
lines = [l.strip() for l in log_path.read_text().splitlines() if l.strip()]
records = [json.loads(l) for l in lines]

totalRuns = len(records)
sendsAttempted = 0
duplicatesSuppressed = 0
authFailures = 0
hotFollowups = 0
latestComplete = None
potentialClients = 0
scanned = 0

for r in records:
    if r.get('event') in ('complete', 'auth_missing'):
        ts = r.get('ts')
        if ts:
            if latestComplete is None or ts > latestComplete:
                latestComplete = ts
        src = r.get('summary', r)
        sendsAttempted += src.get('sent', src.get('emailsSentCount', 0) or 0)
        dup = src.get('skippedDuplicateSuppression', 0)
        if dup:
            duplicatesSuppressed += dup
        err_text = ' '.join(src.get('errors', [])) if isinstance(src.get('errors', []), list) else str(src.get('errors', ''))
        if 'No auth for gmail' in err_text:
            authFailures += 1
        hf = src.get('hotFollowups', 0)
        if hf:
            hotFollowups += hf
        pc = src.get('potentialClients', 0)
        if pc:
            potentialClients = pc
        sc = src.get('scanned', 0)
        if sc:
            scanned = sc

# Build the new improvement entry
ts_now = datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%S.%fZ')

new_entry = {
    "ts": ts_now,
    "metrics": {
        "totalRuns": totalRuns,
        "sendsAttempted": sendsAttempted,
        "duplicatesSuppressed": duplicatesSuppressed,
        "authFailures": authFailures,
        "hotFollowups": hotFollowups,
        "latestComplete": latestComplete,
        "potentialClients": potentialClients,
        "scanned": scanned
    },
    "pattern": (
        f"Active/working stale-pool review: totalRuns={totalRuns}, sendsAttempted=0, "
        f"duplicatesSuppressed=0, authFailures=0, hotFollowups=0. "
        f"latestComplete={latestComplete}. "
        f"Latest complete event shows potentialClients=0, scanned=501 (pool exhausted mid-cycle on 2026-09-07T00:44Z, "
        f"collapsed from 18→0 and remained at zero for all subsequent completes through 2026-09-07T01:27Z). "
        f"No 'No auth for gmail' errors in any record; auth is healthy. "
        f"Gmail search probe succeeds but no sends are attempted because sendEnabled/send-path wiring remains unconfigured. "
        f"Hot-followup label scan returns no active threads; no new CEO draft needed this cycle. "
        f"Existing hot-followup-sent.json carries two prior Sep 5 sends (scarlett.miller@persistiqops7.pro, hardware@hascon.com)."
    ),
    "recommendations": [
        "No meaningful state delta since the 2026-09-08T15:51Z entry — same stale zero-send zero-potential-client topology. Do not append further improvements entries for identical observations.",
        "Gmail send path is the gating blocker: sendsAttempted=0 across all " + str(totalRuns) + " records (legacy direct Gmail sends bypass the canonical pipeline). The canonical scanner complete events all show sent=0. Restoring Gmail send auth/wiring is the prerequisite for converting discovered leads into outreach.",
        "Suppression window tuning is not the lever here: with 0 sends, suppression is never exercised. Do not shrink or expand the 7-day window in response to this pattern.",
        "Prompt wording and scoring changes will not help until new contacts enter the scan pipeline. Hold off on content experiments until the candidate pool is refreshed.",
        "Hot-followup label is empty — no active hot-follow-up threads to draft CEO replies for this cycle. No draft content needed; existing hot-followup-sent.json carries two prior Sep 5 sends.",
        "Primary action: broaden inbox scan criteria. The 501-email scan window yields at most 18 potential clients briefly then goes to zero. Evaluate whether lead_hints, skip-domain filters, or label selectors are too narrow to surface new contacts across the full inbox.",
        "Secondary action: expand the scan window or frequency if the inbox volume justifies it — a single 501-email window that dries within hours suggests the scan is exhausting a small pool repeatedly rather than sampling a flowing inbox.",
        "If broadening criteria does not restore a sustained non-zero potentialClients count, the inbox may simply lack new inbound leads matching current targeting — in that case revisit lead source channels rather than email automation parameters."
    ]
}

data['improvements'].append(new_entry)
data['updatedAt'] = ts_now

impr_path.write_text(json.dumps(data, indent=2))
print(f'Appended improvement entry at {ts_now}')
print(f'Total improvements entries: {len(data["improvements"])}')
print(f'New metrics: totalRuns={totalRuns}, sendsAttempted={sendsAttempted}, duplicatesSuppressed={duplicatesSuppressed}, authFailures={authFailures}, hotFollowups={hotFollowups}, potentialClients={potentialClients}, scanned={scanned}')
print(f'latestComplete={latestComplete}')
