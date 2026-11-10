import json
from datetime import datetime, timezone

impr_path = '/Users/miami2/zion.app/automation/data/lead-outreach/improvements.json'

data = json.loads(open(impr_path).read())
digests = data['digests']
latest = digests[-1]
metrics = latest['metrics']

# Compute recencyDays from latestComplete
latest_complete = metrics.get('latestComplete')
if latest_complete:
    lc_dt = datetime.fromisoformat(latest_complete.replace('Z', '+00:00'))
    now_dt = datetime.now(timezone.utc)
    delta = (now_dt - lc_dt).total_seconds()
    metrics['recencyDays'] = round(delta / 86400, 4)

# Fix sendsAttempted: canonical verifier counts only complete-event summary.sent
metrics['sendsAttempted'] = 1

# Add reconciliationNote
metrics['reconciliationNote'] = (
    "Cron review 2026-09-22: metrics reconciliation. "
    "sendsAttempted corrected from 2 to 1 (canonical verifier counts only complete-event summary.sent; "
    "standalone legacy sent event does not carry sent/emailsSentCount and contributes 0 at canonical layer). "
    "1 tailored send to roberval.correa@newcon-br.com via legacy direct-send path. "
    "1 duplicate suppressed (same-address retry at 0-day recency) - suppression window functional. "
    "61 potential clients from 501 scanned. sendEnabled=false remains gating blocker; "
    "Gmail auth healthy (0 failures). Hot-followup label empty - no active threads, no CEO draft needed. "
    "Pattern/prompt/scoring: insufficient sends (1 canonical) to evaluate; accumulate 5+ sends before content experiments."
)

# Add reconciliationDate
now_ts = datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')
metrics['reconciliationDate'] = now_ts

# Move recommendations into metrics (from top-level leaked field)
if 'recommendations' in latest:
    recs = latest.pop('recommendations')
    if len(recs) >= 1:
        recs[0] = recs[0].replace('sendsAttempted=2', 'sendsAttempted=1').replace('2 tailored sends', '1 tailored send')
    if len(recs) >= 4:
        recs[3] = recs[3].replace('2 sends insufficient', '1 send insufficient')
    metrics['recommendations'] = recs

# Remove pattern from top level (improvements-only field, not valid at digest level)
if 'pattern' in latest:
    del latest['pattern']

# Update root updatedAt
data['updatedAt'] = now_ts

# Fix lastDigestTs to point to actual latest digest
data['lastDigestTs'] = latest['ts']

open(impr_path, 'w').write(json.dumps(data, indent=2) + '\n')
print('PATCHED_OK')
