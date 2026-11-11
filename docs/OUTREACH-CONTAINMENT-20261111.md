# Outreach containment — draft, not production release

Base inspected: d52e4c183328af91f628e0770f0b3ec3bc874c96.
Concurrent work checked: #71954 (outcome accounting/auth failures) and #71655
(Actions concurrency). This patch does not replace their changes or edit workflows.

Both known send sinks now raise FollowupBlocked before accessing email helpers.
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
