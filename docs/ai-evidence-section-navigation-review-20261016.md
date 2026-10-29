# Evidence apps: five-language section navigation — 16 October 2026

Status: DRAFT / UNMERGED / NOT DEPLOYED / NOT VERIFIED LIVE.

## Reconciliation
The previous proposed translation batch was already completed by another continuation. Read current PR71573 head a12ba21c23d850ac8fc457b760e880677162997b and preserve its renderer, five-language guidance, reciprocal app links, localized homepage promotion fragments, output safety and source-path guards. Do not recreate that work or replace authoritative homepage bytes.

## This incremental improvement
- Add a consistent translated On this page navigation to all 15 generated EN/PT-BR/ES/FR/DE app pages: Inputs, Results, Worked example and Compare tools.
- Give the four destination sections stable IDs and programmatic focus targets. Preserve existing reciprocal locale/app links, scripts and styles.
- Add localized trace table captions explaining that at most 30 slowest recorded spans are displayed, not the total span count.
- Fail closed on wrong locale, missing/duplicate/conflicting targets and changed insertion contracts. Repeated finalization of valid output is byte-idempotent.
- Add 18 offline regression cases to the existing PR-only, read-only Node22 workflow. No production workflow hook or deployment trigger is added.

## Local evidence
Node20.20.2 baseline: 117/117 PASS. After patch: 135/135 PASS using node --test scripts/test-ai-evidence-*.cjs. Node syntax check passed. These are offline fixture/DOM-stub tests, not browser, mobile, screen-reader, native-language editorial or full production artifact certification. Remote current-head CI must be checked separately.

## Preview
node scripts/render-ai-evidence-review.cjs public /tmp/zion-evidence-review

Generated routes: /<slug>/ and /pt|es|fr|de/<slug>/, where slug is agent-trace-evidence-lab, field-sla-acceptance-matrix or ai-dependency-blast-radius. These are review artifact paths, NOT newly verified live URLs. Five homepage promotion fragments remain in review-promotions/ and are not injected into production.

## Next gates
Review exact-head CI and actual Workers build diagnostics; inspect native-language copy and browser/keyboard/mobile behavior; coordinate production integration and standalone Pages requirements from issue71574. Obtain separate merge/deploy authorization before publishing and independently verify actual HTTPS/content/interactions afterwards. No whole-network translation, availability or functionality claim.
