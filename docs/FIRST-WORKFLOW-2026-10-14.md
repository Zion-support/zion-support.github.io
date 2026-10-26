# First-workflow guide — 14 October 2026

Owner-approved scoped content batch. Status: branch implementation, NOT deployed. Production release hold remains unchanged.

## Scope

- Five editorial guides: `/apps/choose-first-workflow.html` and `/pt`, `/es`, `/fr`, `/de` counterparts.
- One translated link inside each existing homepage app-path section; no new repeated homepage promotion section.
- Fifteen direct returns from matching-language Start Here, Pilot Planner and Field Service Evidence Guide pages. Discovery pages and their submission/delivery logic are untouched.
- Four resource comparisons per guide: purpose, input, expected result and human verification. Guides distinguish editorial resources, local planning and questionnaire delivery; no AI or app-count claims.
- English, Portuguese (pt-BR), Spanish, French and German copy; six head alternates, self-canonical URLs, matching-language navigation, visible keyboard focus and responsive card layout.

## Validation commands

`node scripts/test-first-workflow.cjs`

After the existing renderers, before final coverage reconciliation:

`node scripts/render-first-workflow.cjs out && node scripts/finalize-field-evidence-aliases.cjs out && node scripts/test-first-workflow.cjs out`

The existing field-guide alias finalizer must rerun after the new return links so complete locale aliases and their integrity hashes remain aligned. The existing route-family coverage pass runs afterwards; no second competing global registry is introduced.

## Release acceptance — pending

- Exact committed-source fixture and integration tests.
- Complete artifact render, existing regressions and alias/hash equality.
- Genuine 390px/1280px browser viewport, keyboard navigation and native-language editorial review.
- Owner/operator clearance of existing CI/privacy/release blockers, reviewed merge and separate production publish approval. Do not restore automatic push/cron triggers or bypass checks.
- Successful deployment plus fresh no-cache GETs of five guides, five homepage links, fifteen resource returns, aliases and publication manifest. HTTP publication is not functionality or inbox-delivery certification.

Rollback: revert the bounded PR; remove only the owned first-workflow blocks and guide files from generated artifacts. Preserve previous guides, forms, canonical routes and scripts. No emails, form submissions, purchases, bookings or new background schedules are part of this batch.
