# Field network promotion — 10 October 2026

Approved focused publication: replace the existing five-language field evidence homepage promotion with a clear guide CTA and links to supplier quote evidence, SLA scenarios, ROI assumptions and the automation pilot planner. Add reciprocal links between the five guide locales, the app network map and the existing English Smart Hands playbook.

Artifact-only implementation: render-field-network-promotion.cjs runs at the end of render-field-evidence-quality.cjs in the existing production workflow. Owned markers make repeated rendering idempotent; existing forms are checked byte-for-byte. Redirect entrypoints are preserved. No delivery, bookings or external service calls are added.

Offline insertion-contract tests passed on 13 fixture pages, including current public homepage, map and playbook source. A second render was byte-identical. Locale home and guide fixtures test insertion only, not a full production build. Production CI and live verification must be checked after publication.

Scope is not a claim that every app, tool or playbook is translated. Linked tools retain their published language, explicitly disclosed. No unrelated PR is merged.

Publication manifest: /apps/field-network-publication.json.
