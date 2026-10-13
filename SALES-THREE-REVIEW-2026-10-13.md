# Three sales resources — prepared release, NOT LIVE

Owner-approved content scope: Lead Score Copilot, Outbound Sequencer AI and Sales Call Analyzer. Existing War Room ship gate is CLOSED; this branch does not change main, deployment workflows or production. No automatic hook added and no email or client data submitted.

## Prepared content
- Complete editorial guide copy in EN/PT-BR/ES/FR/DE; same responsive layout, skip link, focus indicator, one H1, canonical and six alternates.
- Reciprocal three-resource links plus preserved original related destination references and localized Discovery/guide links.
- Five promotional insertions inside the existing consolidated homepage section, not five new standalone promotion sections.
- Explicitly no implemented scoring, email sequences, transcription or CRM synchronization claims. Product names remain historical identifiers.

## Offline QA
Run `node --check scripts/render-sales-three-evidence.cjs` and `node scripts/test-sales-three-evidence.cjs`.
Passed 15 page contracts, five protected homepage contracts, 20 output-file byte-idempotence checks and a missing-anchor negative control. Original fixture forms/scripts and pre-existing link preserved. Full production build, native-speaker review, rendered browser testing and paired email inbox receipt NOT certified.

## Integration gates before publication
1. Resolve ship gate with Kleber/release owner. Do not merge or deploy while closed.
2. Re-read current build order and safely append invocation AFTER `render-home-app-paths.cjs` (including its network bridge) and before artifact verification/upload. Do not overwrite existing hook/workflow. Current branch is preparation only, not integrated.
3. Run `node scripts/render-sales-three-evidence.cjs out` on the completed artifact; run full existing regression suite and retain unrelated forms/scripts/prices/endpoints.
4. Independent project sites can shadow homepage artifact subtrees. For each resource, publish the generated subtree into its own repository root (default index.html plus pt/es/fr/de/index.html), preserving .nojekyll and existing NETWORK/README references. Confirm canonical source bytes and project Pages behavior before advertising the repair as live.
5. Independently GET all 15 canonical routes and five homepages, verify release marker/locale/canonical/alternates/navigation and test 375px/1280px keyboard/overflow behavior. Do not equate HTTP200 with implemented AI capability.
6. Update the existing Notion board and checkpoint. No blanket app count or whole-network translation claim.

Operational owners/holds are preserved separately: Cincinnati outbound freeze and date/model/cost reconciliation; RMSI hard hold; PRODAM owner approval and full verified cost x1.40. No supplier award, order, reservation or dispatch without written client acceptance, PO and separate Zion authorization.
