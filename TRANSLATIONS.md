# Translation policy and evidence authority

Updated 14 October 2026. This page defines publication policy, not a whole-network completion certificate.

## Supported languages
English (`en`), Portuguese (`pt-BR`), Spanish (`es`), French (`fr`) and German (`de`). The `x-default` alternate points to the corresponding English route; preserve existing self-canonical aliases rather than mass-renaming published pages.

## Coverage authorities
- [Network translation policy](https://github.com/Zion-support/zion-app-network/blob/main/TRANSLATIONS.md)
- [Scoped translation status](https://github.com/Zion-support/zion-app-network/blob/main/TRANSLATIONS-STATUS.md): the coverage authority for verified releases.
- [Route-family reconciliation](https://github.com/Zion-support/zion-app-network/blob/main/TRANSLATIONS-COVERAGE-2026-10-12.md): explains directory/suffix grouping and excluded redirects/incomplete bodies.
- [Production route report](https://ziontechgroup.com/apps/network-publication-coverage.json): machine-readable route evidence, not proof of semantic translation quality or app functionality.

The former October 6 batch table is superseded by these authorities. No current app or gap totals are asserted here. Legacy catalog descriptions remain partly untranslated; an unlisted release is unverified, not complete.

## Release contract
1. New owned showcase/spotlight content must have complete bodies, headings, value propositions, CTAs, labels and navigation in all five supported languages. Product names may remain unchanged.
2. Each variant needs the correct `html lang`, a self-canonical URL, five reciprocal `hreflang` alternates plus `x-default`, and a visible keyboard-accessible language switcher.
3. Existing directory and filename-suffix variants are supported. A filename, language declaration, redirect or HTTP 200 alone does not establish translated body coverage.
4. Interlink related resources and source repositories; disclose the actual language and capability of linked tools. A guide, prototype and tested implementation must not be marketed as equivalent.
5. Use the production artifact renderers. Do not assume editing root HTML will change the deployed page. Preserve existing anchor IDs, aliases, forms, scripts, recipients, commercial prices and authorization controls.
6. Re-render twice for byte-idempotence. Test missing destinations, incorrect declared languages, untranslated controls, protected form/script preservation and reciprocal navigation. Run fresh GET-only publication checks after an approved deployment.
7. Keep Discovery free and online without promising uninterrupted availability. Browser reports and email-service acceptance are separate evidence; actual client and Commercial inbox receipt remains a separate delivery test. Do not submit duplicate live questionnaires to manufacture verification.

## Consolidation and review
Continue the existing [five-language resource-path PR](https://github.com/Zion-support/zion-support.github.io/pull/71543), not a competing homepage promotion. Keep it draft until current-head checks and maintainer review pass. Native-language editorial review, mobile layout and keyboard/focus review remain required; automated route checks are not substitutes.
