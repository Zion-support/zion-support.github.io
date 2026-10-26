# Discovery spotlight release review — 13 October 2026

Review-only branch. Do not merge/deploy while the release gate is closed.

## Content
- Replaces the legacy English spotlight with a consistent, truthful guide and four equivalent translated guides (PT-BR, ES, FR, DE).
- Removes instant/simultaneous inbox-delivery promises, same-day follow-up guarantees, inflated app counts and stale conflicting batch labels.
- Preserves free online Discovery and links to existing optional plans; no pricing or payment links changed.
- Reciprocal language links, one main landmark, skip links and shared Discovery CSS.

## Homepage and app index
Run `node scripts/preview-discovery-spotlight.cjs <artifact-root>` AFTER existing homepage renderers to add five translated promotion blocks and app-index language links. This PR includes a read-only preview workflow, NOT a production deployment. Before any approved release, integrate that invocation at the final offline-render stage of static-deploy.yml and check all linked routes against the final artifact. The current production workflow is intentionally unchanged.

## Review gates
- Confirm preview generation succeeds twice and preserves all original page bytes outside the owned promotion blocks.
- Check source and artifact links, metadata, translations and visual layout.
- Translation parity here covers this guide, not the whole app catalog. Native editorial review and full-app functional certification remain outstanding.
- Obtain separate release approval. Confirm all required CI checks and privacy gate, deploy, then perform fresh HTTPS/DOM verification for all five guide URLs and homepages.
- Do not claim email inbox delivery until independently tested with explicit authorization.
