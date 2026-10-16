# Resource comparison content — 16 October 2026

Implemented in existing draft PR71571 only. Not merged, deployed or live.

Base inspected immediately before this batch: 5a554d8ba40e156128c62d540a3441db717b7b37, branch content/guided-app-pathways-20261014. User confirmed the three-file review batch, Notion status update and Supermemory checkpoint. No production release or pricing change is included.

## Content

Adds one resource-comparison section to each generated EN/PT-BR/ES/FR/DE use-case map: a localized heading, introductory paragraph and three evaluation steps. Readers identify input/output and resource type, test a synthetic example, then name a reviewer and acceptance criterion. Original destination URLs and order remain unchanged. No new promotion, form, script, pricing, payment, recipient or publisher modification.

## Verification

Four original source blobs independently Git-SHA verified at the immutable base. Existing exact-source localization suite: 14/14 PASS before edits. Expanded offline suite: 17/17 PASS after edits, including actual source renderer, five locales, missing/empty comparison copy rejection and escaping. Five real-source previews generated with original href sequences preserved. Existing protected form/script checks retained.

Command: python scripts/test-use-case-map-link-copy.py

Offline review ZIP: https://backend.composio.dev/api/v3/sl/yRnNcJfseh

These are local checks, not full production-artifact, remote-CI, native-language, browser/mobile/accessibility or live app-functionality certification. All-network translation remains incomplete. Generated content requires canonical-pipeline integration, complete artifact QA, scoped release approval and fresh public verification before it can be called live.

## Release blocker and continuation

Inspected main public/discovery/index.html blob 6e4762ce6b861010694b59323d90ad846028dd50 retains $99 Offer/Stripe CTAs while hub source promotes Free Discovery. Proposed owner: website/Discovery maintainer. Reconcile the canonical offer and source/public behavior before expanding promotion; this batch changes neither policy nor checkout.

Current main publisher invokes scripts/prepare-pages-out.sh. Inspect that script and current PR head before assuming which renderers production executes. Preserve concurrent branch work, manual-only publishing and existing release/privacy gates. No force push, main update, merge or deployment in this batch. Next: verify committed file readback, current-head checks and full artifact compatibility, then complete editorial/accessibility review before a separately scoped publication proposal.
