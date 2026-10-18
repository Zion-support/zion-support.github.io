# Evaluation build-path repair — draft, not deployed

Supersedes the earlier draft's integration assumption, not its scoped translation/unit-test evidence.

## Actual entrypoint

The inspected manual, main-only Pages workflow calls `scripts/prepare-pages-out.sh`, which did not invoke the older homepage renderer. Appending only to `render-network-home-ad.cjs` could not publish the evaluation content. The guide prerequisites and owned promotion were absent from the inspected public source.

This repair adds three scoped scripts and five lines to the actual preparation shell after all existing safety guards: run the existing 92-assertion unit suite, bootstrap the ten evaluation pages, and verify the output. The workflow, triggers, permissions, gates, DNS and other drafts are unchanged.

## Self-contained prerequisites

`bootstrap-network-evaluation.cjs` creates a missing guide in EN/pt-BR/ES/FR/DE with canonical, reciprocal alternate links, language selector and existing fully localized evaluation copy. Existing guides are preserved and extended rather than replaced. A missing owned homepage promotion is created once inside main, or before the footer for legacy no-main homepages; existing promotions are reused. The original finalizer adds the checklist and reciprocal links. No broad historical renderer pipeline is restored.

All ten pages are staged and validated before destination writes. Existing SEO head, script/form blocks and every existing href must be retained. No data collection, AI inference, local storage, email delivery, pricing, checkout, commercial-copy or operational-dispatch behavior is added or changed.

## Verification

- Original 92 synthetic unit assertions pass.
- New build-integration suite: 42 assertions pass with no preseeded guides/promotions, the real preparation shell, legacy no-main Portuguese fixture, clean repeat builds and negative tests for missing/wrong-language/redirect/conflicting-anchor input. Money guards remain active and prevent generation when they fail.
- Artifact verifier: 85 checks pass for five generated guide editions and their five matching homepage CTAs.
- Bootstrap and verifier also pass on all five exact retrieved homepage source bodies, independently of the build shell, with existing SEO/forms/scripts/hrefs preserved. Repeat generation is safe.
- Node/Bash syntax checks pass. These are local fixture/scoped-source checks, not complete production build or live/browser/native-speaker/accessibility certification.

## Independent release blockers

Running the real preparation shell with the retrieved Portuguese homepage stops at its pre-existing `Discovery $99` marker guard. The actual source has Free Discovery copy, no exact paid marker, and no main element. Bootstrap now supports the legacy layout, but this repair intentionally neither changes commercial copy nor weakens the safety guard. Owner decision is required to reconcile that mismatch before publication.

Cloudflare Workers check failed on both parent and original draft. GitHub provides a dashboard build link, not an error log; root cause remains undiagnosed. Full-repository CI, owner review, the commercial guard mismatch, authorized release and fresh live checks remain open. PR71599 stays draft/unmerged; no deployment was performed.
