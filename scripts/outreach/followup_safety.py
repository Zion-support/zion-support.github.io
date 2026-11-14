"""Offline follow-up policy and non-bypassable containment for legacy senders.

No Gmail client, credentials, networking, disk state or send callback is used here.
Policy eligibility is NOT authority to send. A shared coordinator is not installed.
"""
import math
from email.utils import parseaddr

WEEK_SECONDS = 168 * 60 * 60
MAX_EVIDENCE_AGE = 60

class FollowupBlocked(RuntimeError):
    pass

def _timestamp(value):
    if type(value) not in (int, float) or not math.isfinite(value) or value < 0:
        raise ValueError('invalid_timestamp')
    return value

def evaluate_followup(evidence, now):
    """Return a reason, never a sending permit. All required accounts must agree.

Evidence is an internal adapter contract, not trusted user/LLM JSON. The future
adapter must obtain complete provider history and suppression state under a
shared reservation. Unknown/automatic inbound classifications require review.
"""
    try:
        now = _timestamp(now)
        if not isinstance(evidence, dict):
            return 'invalid_evidence'
        for flag in ('history_complete', 'suppression_complete', 'query_ok'):
            if evidence.get(flag) is not True:
                return 'incomplete_evidence'
        age = now - _timestamp(evidence['checked_at'])
        if not 0 <= age <= MAX_EVIDENCE_AGE:
            return 'stale_evidence'
        if evidence.get('suppressed') is not False:
            return 'suppression_hold'
        if evidence.get('send_state') != 'clear':
            return 'unreconciled_send'
        required = evidence['required_accounts']
        checked = evidence['checked_accounts']
        if (not isinstance(required, list) or not required or
            not isinstance(checked, list) or not all(isinstance(a, str) and a for a in required + checked)
            or set(required) != set(checked)):
            return 'account_scope_incomplete'
        own = set()
        for a in required:
            parsed = parseaddr(a)[1].lower()
            if parsed != a.lower() or '@' not in parsed:
                return 'invalid_account'
            own.add(parsed)
        history = evidence['history']
        if not isinstance(history, list) or not history:
            return 'missing_history'
        outbound = []
        inbound = []
        ids = set()
        for m in history:
            if not isinstance(m, dict) or not isinstance(m.get('id'), str) or not m['id'] or m['id'] in ids:
                return 'invalid_history'
            ids.add(m['id'])
            ts = _timestamp(m['ts'])
            if ts > now:
                return 'invalid_history'
            sender = parseaddr(m['from'])[1].lower()
            if '@' not in sender:
                return 'invalid_history'
            if m.get('kind') == 'outbound' and sender in own:
                outbound.append(ts)
            elif m.get('kind') == 'internal_copy' and sender in own:
                continue
            elif m.get('kind') == 'human_reply' and sender not in own:
                inbound.append(ts)
            else:
                return 'classification_review'
        if not outbound:
            return 'missing_outbound'
        last = max(outbound)
        if inbound and max(inbound) >= last:
            return 'human_reply_review'
        if now - last < WEEK_SECONDS:
            return 'cooldown_168h'
        return 'eligible_for_coordinator_review'
    except (KeyError, TypeError, ValueError, AttributeError):
        return 'invalid_evidence'

def require_live_clearance(evidence=None, now=None):
    """Always block: no verified shared coordinator/provider adapter exists.

Do not replace this with an env flag, a local lock or a JSON approval. A later
review must implement shared atomic ownership, fresh provider checks, durable
attempt state before transmission and reconciliation of uncertain results.
"""
    reason = evaluate_followup(evidence, now) if evidence is not None else 'missing_evidence'
    raise FollowupBlocked('outreach_live_hold: ' + reason + '; shared_coordinator_unavailable')
