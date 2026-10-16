# First-workflow comparison and navigation — 16 October 2026

Approved draft-only continuation of PR #71575, based on inspected head 653d0be57d01d69e5cb30aa0b030848cdfafca17. NOT merged, NOT deployed, NOT live-verified.

## Additions
- Original comparison guidance in EN, PT-BR, ES, FR and DE: purpose, permitted inputs and manual evidence checks. No claims that linked resources keep data local; users must check each destination.
- Six localized in-page jumps per guide: four resource cards, comparison guidance and existing FAQ. Twenty card headings become named article landmarks; skip-to-main target is programmatically focusable.
- Shared navigation module and production artifact validation for duplicate IDs, missing fragments, focus target and complete comparison copy. Same layout and language switcher across all five guides.
- Existing five homepage promotions and fifteen matching-language return links retained without duplication. Existing FAQ, form/script preservation, escaping, canonical/hreflang, collision rejection and render-idempotence tests retained.

## Local validation
Node v20.20.2 syntax checks and isolated scripts/test-first-workflow.cjs PASS. Five locale outputs, twenty named cards, all local fragments and mutation-based rejection tests pass. This is synthetic fixture evidence, not the complete production artifact, real-browser accessibility QA or native-language editorial approval. Node 22 CI remains to be verified.

## Related navigation PR #71571 diagnosis
Exact inspected head e41827398f593bd9bc3dfcc43e931aa93f1cdae7. Performance job 116777141949 checked out merge candidate f5f5139492aee8948bc2f0303b55935d5d4883e8, installed dependencies and entered Next.js build. At 02:38:48 UTC on 16 October, its log reports runner shutdown followed by operation cancellation. This does NOT prove a measured performance-budget regression, heap OOM or the reason for runner shutdown. Do not disable the check or raise thresholds without evidence. Cloudflare Workers errors remain separately undiagnosed.

## Release gates
Preserve manual-only publishing and all existing CI/privacy/review gates. Obtain complete artifact/regression checks, browser/mobile/keyboard/native-language review and separate merge/deploy confirmation. After an authorized deployment, verify comparison text and local jumps, canonical/hreflang, five homepage links, fifteen returns and the publication manifest using fresh GETs. The existing v1 ownership marker is retained for safe replacement of this draft's owned guides; it alone cannot distinguish this content revision—inspect expected comparison text and source/deploy receipts.

No production workflow, Discovery form, recipient, endpoint, paid offer, external repository, schedule or permission is changed by this commit. No full-network completion claim.
