# Outreach containment — draft, not production release

Base inspected: d52e4c183328af91f628e0770f0b3ec3bc874c96.
Concurrent work checked: #71954 (outcome accounting/auth failures) and #71655
(Actions concurrency). This patch does not replace their changes or edit workflows.

The two contained follow-up send sinks now raise FollowupBlocked before accessing email helpers.
The one-shot main also stops before processing candidates. Its default flags are
safe, but flags cannot bypass containment. No production send path is enabled.

The pure policy evaluator requires complete fresh suppression and all-account
history, rejects unknown/corrupt input, active/uncertain attempts and unclassified
inbound events, routes human replies for review, and uses the newest actual Zion
outbound across accounts plus 168 hours. Internal copies do not reset the clock.
Its eligibility result is diagnostic only and never authorizes a send.

## Deliberately unresolved
No trusted provider adapter or shared atomic coordinator is installed. Therefore
live clearance always raises, even on policy-eligible evidence. This is containment,
not a completed distributed deduplication implementation. Local JSON and Actions
concurrency cannot coordinate SDM, Telegram workers and separate hosts reliably.
Before lifting the hold, separately review and test: complete authenticated mailbox
scope, persistent refusal/bounce/owner holds, atomic cross-worker reservation,
fresh pre-send history, durable sending/uncertain/sent transitions, provider receipt
reconciliation and no retry of uncertain sends. Do not use an environment boolean
or manually edited JSON as a replacement. Review remaining senders/helpers too.

## Validation
Run python3 tests/test_followup_safety.py offline. It imports only the pure policy
module, extracts sink functions from AST without operational module initialization,
and uses synthetic example.test/zion.test identities. The multiprocess test proves
all attempted paths are held; it does not prove cross-process exactly-once sending.
No Gmail, LLM, credentials, jobs or production data are needed.

Keep this PR draft and unmerged. No changes to credentials, live configuration,
workflow schedules, business records or outbound messages are included.


## Review follow-up: policy holds and sender coverage

A `FollowupBlocked` raised by the worker send entry point is now classified as
`policy_hold`, increments `skipped`, and does not call `record_bounce`,
`record_send`, or `mark_seen_message_id`. The generic error handler is unchanged:
it still records arbitrary other exceptions as bounce. That broader outcome
contract needs reconciliation with concurrent draft #71954; this patch does not
claim transport errors prove a recipient bounced.

Offline validation: 14 tests, including execution of the actual worker send
try/except extracted by AST, with mocked effects and no operational module import.
The two added cases cover policy hold and preservation of the other-error route.
The entry-point test name now says contained followup entrypoints, not all known
senders. Multi-process tests demonstrate universal containment only, not a
shared reservation or exactly-once delivery.

### Confirmed send paths (review baseline fccfb16c2c9101d7f7d67f788e72a97aca123aa8)

| Source | Finding | Proposed policy |
| --- | --- | --- |
| scripts/outreach/outreach_worker_automation.py, send_ceo_reply | Held before dependencies; caller now handles policy hold separately | Keep hold until shared coordinator and complete evidence exist |
| scripts/outreach/send_hot_followup_ceo.py, main/send_via_helper | Held before dependencies | Same commercial follow-up policy |
| scripts/email_auto_responder.py:504, send_reply | Calls gog gmail send directly; no containment call; passes To and optional thread/reply IDs, no explicit CC or reply-all | Require verified inbound message ID, recipient/thread validation, shared reservation keyed by inbound message, resolved outcome; do not apply blanket 168h delay to essential requested replies |
| commands/google_workspace.py:602, gmail_send_new | Direct messages/send; no suppression/containment; catches exceptions as success=False | Require explicit intent; commercial new outreach requires suppression/history/coordination, unknown intent requires review; errors after dispatch become UNCERTAIN |
| commands/google_workspace.py:266 and :639, gmail_send_reply_fixed | Duplicate definitions; later definition overrides earlier suppression-aware version; active function sends directly without that suppression check | Consolidate definitions separately with caller inventory; distinguish requested reply from follow-up, enforce reply-all/commercial CC and shared idempotency |

This is a bounded confirmed inventory, not a repository-wide guarantee. The
scripts subtree was listed without truncation. Additional candidates requiring
source and runtime tracing include email_responder_v2.py, email-responder-v44.0.py,
email-v5.py, email-v6.py, growth-automation/rapid_fire_outreach_engine.py,
outreach/send_monitor_report.py, outreach_monitor/processed/ceo_replies/
send_matt_weiss_ceo_reply.py and its backup; commands/zion_email_outreach_agent.py
is also a candidate. Names alone do not establish live sending. Telegram, manual
mailboxes, Composio and other deployed workers must be inventoried separately.

### Appropriate shared protection (proposal only)

Use explicit purposes: commercial_initial, commercial_followup, requested_reply,
and internal_notification. Unknown purpose fails to review. Do not infer purpose
from a Re: subject or permit callers to self-assert an essential-reply bypass.
Requested replies need evidence of an unanswered inbound request and authorized
scope; promotional additions still follow commercial suppression. Maintain
separate marketing opt-out, channel restriction, verified delivery failure and
policy-hold records. Internal notifications require validated internal recipients.

All paths need shared reservation and outcome recording, recipient validation,
and protection against duplicate or uncertain delivery. Commercial follow-ups
add complete multi-account history, suppression checks and a 168-hour cooldown;
human replies leave the follow-up queue for a requested-reply workflow. Essential
replies do not wait seven days merely because an earlier message was sent.
Use separate permissions/queues so an unavailable commercial-history query does
not silently become either a marketing bypass or a blanket block of service replies.

A single sending gateway backed by transactional durable storage is the preferred
next step. Reserve before dispatch, persist SENDING before the external call,
record provider receipt as SENT, and retain UNCERTAIN for reconciliation after
ambiguous outcomes. Expiration must not automatically resend an uncertain attempt.
All actors must participate; a local file, workflow concurrency, or these tests
cannot prove coordination across Gmail, Telegram and other processes. No such
gateway, reliable suppression source, or complete multi-mailbox coverage has been
implemented or verified by this draft. No generic sender is modified here.
