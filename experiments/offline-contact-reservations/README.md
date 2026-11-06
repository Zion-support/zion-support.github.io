OFFLINE PROTOTYPE — NOT A GLOBAL DEDUPLICATION SERVICE

Run manually from the repository root:

    PYTHONDONTWRITEBYTECODE=1 python3 experiments/offline-contact-reservations/test_reservations.py
No dependencies beyond Python standard library. No service listener, transport,
provider integration, credential access, real contact data or production writes.
All test databases are temporary and removed at test completion. Only source, tests and documentation are included; no database files or
persistent access are created by publication.

Model:
- One SQLite database is the authority for participating callers only.
- BEGIN IMMEDIATE serializes eligibility check + reservation insertion.
- Unique intent ID and a partial unique contact index protect replay/concurrency.
- Missing database is opened mode=rw and fails; it is never silently initialized.
- Unknown contacts/unreconciled history, suppression, storage/schema errors and
  active/uncertain intents all hold. No permissive fallback ledger exists.
- Require 168 elapsed hours after last confirmed receipt observation.
- A bounded reserve token can transition to dispatching once. No provider call
  exists; this transition models the durable pre-dispatch boundary only.
- Receipt -> sent + cooldown in the same transaction; no receipt -> unknown.
- Expiration/crash recovery never enables automatic resend; uncertain rows keep
  the unique contact slot. Late/stale completion is rejected for reconciliation.
- Suppression prevents reserved work from beginning. After dispatch begins it
  cannot recall an external action; later receipts are retained and suppression
  remains in force. No exactly-once external delivery claim is made.

Validation after critical review: 24 tests pass, including 100 competing connections (one reservation),
20 requests from independent processes (one reservation), 30 concurrent dispatch
transitions (one success), exact 168h boundary, suppression before/after dispatch,
replay/conflicting identity, crash/expiry/unknown state, restart, stale tokens,
clock rollback, missing/corrupt/schema-invalid DB and lock timeout failure.
Two lock-timeout tests intentionally wait approximately 5 seconds each.
Thread contention now uses barriers. The 168h test uses an independent 604800s
policy oracle rather than importing the implementation constant. Three reverted
mutations (24h window, clock rollback acceptance, premature recovery) were rejected.
New negative tests cover opt-out before contact discovery, corrupt history time,
mid-transaction failure, lost acknowledgement after a successful commit, timeout
after dispatch, suppression/dispatch racing, and rollback after dispatch time.
Tests use synthetic contact IDs/receipts; successful dispatch is a state transition,
NOT a sent message. Tests exercise actual SQLite locking on this Mac/local disk,
not a distributed filesystem or a multi-host network authority.

Known boundaries:
- Caller identities, authentication, alias reconciliation and trustworthy history
  ingestion are NOT implemented. add_fixture_contact is test bootstrap only.
- The injected clock must be a trusted central clock; forward jumps and malicious
  callers are not defended here. No public API exposes this prototype.
- No SDM/Hermes/provider integration, TLS, ACL, high availability or migration.
- No reconciliation/unblock API: unknown states remain held indefinitely. This
  sacrifices liveness intentionally; manual editing is not an approved recovery.
- recover_uncertain now holds only expired reservations/dispatches; it does not
  revoke an unexpired dispatch. Expired dispatch may still be in flight, so it is
  held as unknown and its later completion rejected pending reconciliation.
  Real recovery requires owner-death/fencing evidence and
  receipt reconciliation; it must never revoke a claim and permit another sender.
- Same-contact coordination requires EVERY actual emitter to use the one central
  authority before sending. Copies of this database on other hosts do not qualify.
- SQLite schema version checking detects unavailable/unknown version; comprehensive
  migration/integrity validation, durable backup and disk-failure recovery remain.
- Receipt strings are trusted fixtures, not authenticated provider confirmations.
  Unknown outcomes cannot safely be retried just because 168 hours elapsed.

Schema is now version 2 (dispatch timestamp added). Earlier databases are rejected,
not silently migrated. Tests always create new temporary fixtures; no production
database or persistent test database was migrated.
Suppression and begin_dispatch serialize at their database transaction boundaries.
If dispatch wins first, a concurrent opt-out cannot undo that transition or recall
a hypothetical external request. No test claims the nonexistent transport observes
opt-out instantly. Wall-clock forward jumps remain a trusted-clock limitation.

No claim of global deduplication, guaranteed delivery or production readiness.
This directory is an unintegrated experiment. No package scripts, workflows,
crons, services or provider integrations are added. Repository CI may still run
on a pull request; it is not evidence of these Python tests running.
Do not connect this prototype to live senders without a separate design review.
