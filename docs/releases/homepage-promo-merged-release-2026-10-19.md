# Homepage promotion — Merged Release 2026 (draft, not live)

Status: DRAFT spec on 2026-10-19. Not rendered, not merged, not deployed, not live-verified. This file alone does not change ziontechgroup.com.

## Goal
Add ONE consolidated homepage promotion section, in EN / pt-BR / ES / FR / DE, linking the 18 Oct 2026 merged release: Agent Trace Evidence Lab, Field SLA Acceptance Matrix, AI Dependency Blast Radius, and the Hub v17 showcase (zion-app-network draft PR #7). No duplicate homepage sections, no invented app counts, no AI-functionality guarantees, no form/payment changes.

## Render contract (must follow before any code)
1. Inspect current `public/index.html` (pt-BR canonical), `public/en/index.html`, `public/es/`, `public/fr/`, `public/de/` and the tail of `scripts/render-network-home-ad.cjs` (ends with `require('./render-network-evaluation.cjs').render(out);`).
2. Decide: new idempotent renderer OR additive renderer chain. Preserve every existing `require(...)` hook in order; never restore superseded hooks.
3. Use one stable marker, e.g. `<!--zion-merged-release-home:start-->` / `<!--zion-merged-release-home:end-->`, inserted once per localized homepage before `</main>`. Repeated rendering must be byte-identical.
4. Each locale: exactly one matching section, one H2, three app cards in that language, localized Discovery CTA, localized hub/showcase links, five language links, no `<form>` added by this promotion.
5. Keep Discovery free. Link Discovery per locale: `/discovery/` (pt-BR root), `/en/discovery/`, `/es/discovery/`, `/fr/discovery/`, `/de/discovery/`.
6. Tests to add and run offline on the artifact (`out/`): locale/lang/canonical/hreflang consistency, marker count = 1 per homepage, all three app URLs present, Discovery free marker preserved, homepage < 80KB, no `/_next/`, Family A + money-path guards in `scripts/prepare-pages-out.sh` still pass.
7. `scripts/static-deploy.yml` must NOT be edited in this PR. Deploy stays `workflow_dispatch` from `main`, `prepare-pages-out.sh` gate first.

## Copy draft (review wording before rendering)
EN: "Evidence before expansion" — "Explore the tools merged on 18 October 2026: Agent Trace Evidence Lab, Field SLA Acceptance Matrix and AI Dependency Blast Radius. Publication is not proof of AI functionality; start with free Discovery and one small human-reviewed pilot."
PT: "Evidência antes da expansão" — "Explore as ferramentas consolidadas em 18 de outubro de 2026: Agent Trace Evidence Lab, Field SLA Acceptance Matrix e AI Dependency Blast Radius. Publicação não prova IA funcional; comece com o Discovery gratuito e um piloto pequeno com revisão humana."
ES: "Evidencia antes de la expansión" — "Explore las herramientas consolidadas el 18 de octubre de 2026: Agent Trace Evidence Lab, Field SLA Acceptance Matrix y AI Dependency Blast Radius. Publicar no demuestra IA funcional; empiece con Discovery gratuito y un piloto pequeño con revisión humana."
FR: "La preuve avant l’expansion" — "Explorez les outils consolidés le 18 octobre 2026 : Agent Trace Evidence Lab, Field SLA Acceptance Matrix et AI Dependency Blast Radius. Une publication ne prouve pas une IA fonctionnelle ; commencez par Discovery gratuit et un petit pilote avec revue humaine."
DE: "Nachweise vor Expansion" — "Erkunden Sie die am 18. Oktober 2026 konsolidierten Tools: Agent Trace Evidence Lab, Field SLA Acceptance Matrix und AI Dependency Blast Radius. Veröffentlichung beweist keine funktionierende KI; starten Sie mit kostenlosem Discovery und einem kleinen Piloten mit menschlicher Prüfung."

## Links (verified 2026-10-19)
- https://ziontechgroup.com/agent-trace-evidence-lab/
- https://ziontechgroup.com/field-sla-acceptance-matrix/
- https://ziontechgroup.com/ai-dependency-blast-radius/
- https://ziontechgroup.com/zion-app-network/
- https://ziontechgroup.com/discovery/
- Hub v17 draft (not live): https://github.com/Zion-support/zion-app-network/pull/7

## Release gates
1. Renderer + tests reviewed on this branch; CI green (do not claim CI green without exact-head runs).
2. Merge only with separate named approval. Do NOT merge PR71543.
3. After merge: dispatch Simple Static Deploy from `main` only with separate named approval, then verify live: /, /en/, /es/, /fr/, /de/ each exactly one promotion + the three app links, HTTP 200.
