# Discovery restoration review

## Scope and source

This patch restores the free online questionnaire at `/discovery/` and `/pt/discovery/`, adds the missing ES/FR/DE pages and shared runtime/styles, restores `/contact/`, and removes the paid Discovery label from shared navigation.

Production source is `public/`, assembled by `scripts/prepare-pages-out.sh`. Do not publish the separate legacy `discovery/index.html` from the repository root as a substitute.

- Initial baseline checked: `bf61581dad8411c9a39d62b625c276fd5c73a7c7`; current-main reconciliation uses `09f9e3e7d8f02cc4d2066ed42ad9cc0de527e064`.
- EN/PT pages are restored byte-for-byte from `a713aaa12f99b910d64de9974b26568ecf712b89`.
- ES/FR/DE pages and shared JS/CSS match PR #71894 head `02b7adb88f2ad0e35e6c3f00fcc23f6cb73ae295` exactly.
- This patch does not edit PR #71894. Its preparation changes are near the top of the build script; this patch changes the Discovery gate near the bottom. Preserve both when integrating.

## Delivery behavior

The browser renders the report immediately and retains copy/download/manual-email fallbacks. FormSubmit receives that same report at the fixed Commercial endpoint, with one syntactically validated client address in CC. No unsupported autoresponse is used. Repeated pending, accepted and uncertain submissions are suppressed within the page session. Timeout/network errors never claim delivery.

Syntactic email validation is not ownership verification. This restores the existing public FormSubmit model, not an authenticated mail backend. No credentials, permissions, provider activation, CAPTCHA policy or real test messages were changed. Inbox delivery remains unverified and must not be advertised as guaranteed.

## Validation completed

Initial checks used Node 24.22.1. All checks below were repeated successfully on the repository's target major version, Node 22.23.4:

- `node scripts/test-discovery-release-contract.cjs`: 172 checks passed.
- `node scripts/test-discovery-restoration.cjs --static-only`: 16 unsafe mutations rejected, including independent removal of each of the seven report/error/fallback IDs identified during review.
- `node scripts/test-discovery-runtime.cjs`: 120 assertions in 21 scenarios passed with an in-memory DOM and mocked email responses.
- `node --check` on changed JS/CJS and `bash -n scripts/prepare-pages-out.sh`: passed.

The release gate checks all runtime-required DOM IDs, canonical/language values, protected form handling, required assets, honest acceptance behavior, recipient routing and a usable contact page. Paid-path checks for services and plans remain intact; Discovery no longer requires a Stripe checkout link.

## Dependency reconciliation

Main `183efa4` removed the obsolete Next 10-14-only analyzer, but its lock still omitted Vite's required peer/transitive/platform entries and exact-head hosted `npm ci` failed with EUSAGE. Concurrent main `09f9e3e7` now contains the exact reviewed lock blob `80801b6c2fca3f2610f28993fcc2a8fe25e6fd47`: 31 missing entries added, 15 orphaned analyzer dependencies removed and two development flags corrected. All retained package versions and the main manifest are unchanged; Next remains 16.4.5. No additional install-script entries are introduced. This Discovery PR preserves that main correction rather than duplicating a dependency change in its diff.

On Linux x64 with Node 22.23.4/npm 10.9.8, strict lock regeneration was idempotent and `npm ci --ignore-scripts --include=dev --include=optional --strict-peer-deps` installed 1,077 packages successfully. Dependency-tree validation, Vite import, native LightningCSS 1.32/1.33 transforms, an in-memory Rolldown bundle and the native Next analyzer CLI passed. Lifecycle scripts were disabled for these local dependency tests; these results are not full application or hosted-CI acceptance.

The first Discovery commit's 17 hosted workflows finished: six succeeded (including CodeQL, Dependency Review and Money Paths Stub Guard), five failed during dependency installation, four were cancelled during checkout, and two were skipped. Updated-head hosted checks remain required. Existing workflows and credentials are unchanged; with the lock already on main, the Discovery diff remains 14 files and does not add dependency-path workflow triggers. Some existing contract/advisory commands are no-op stubs and must not be counted as substantive validation.

## Pending acceptance

Chromium could not start: its local process socket returned `Operation not permitted`, including after a reviewed escalation. The browser test runner is included but browser/UI/mobile assertions have not run. It blocks external browser requests and mocks email responses.

No full repository installation, lint/typecheck, full Pages build, hosted CI, production deployment or inbox delivery check has passed as part of this patch. Existing site links outside these restored files and the legacy satellite `/zion-discovery/` remain separate acceptance work. Review PR #71894's reciprocal-page restoration before claiming network-wide health.

Reconcile current repository coordination and HEAD before remote writes. After integration, run the repository's required checks under Node 22, run the browser suite, publish through the existing approved workflow, compare live bytes with the accepted commit, and verify a specifically authorized dual-recipient delivery test before claiming email delivery.
