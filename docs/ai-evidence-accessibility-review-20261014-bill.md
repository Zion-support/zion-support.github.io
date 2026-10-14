# Evidence guides and accessibility — approved review continuation

Status: DRAFT / NOT PRODUCTION INTEGRATED / NOT VERIFIED LIVE.

Stacked on PR #71573, inspected head 6a8134289744d06b92a63b0f1cca64530a4da4a8. Existing five-language renderer, worked examples, runtime translations and concurrent source remain untouched.

Adds 5 comparison guides (EN, PT-BR, ES, FR, DE), reciprocal tool/guide links, focusable main landmarks, reduced-motion scrolling and translated trace-table captions across 15 tool editions. Guides explain tool selection, browser-local privacy, limitations, free Discovery and internal documented all-in cost x1.40. No delivery guarantees, binding quotes or dispatch authority are implied.

Reproduce:

```sh
node scripts/render-ai-evidence-accessibility.cjs public /tmp/zion-evidence-accessibility
node --test scripts/test-ai-evidence-accessibility.cjs
```

Local result: 22/22 tests passed. Script bytes for all 15 generated tool editions match the prior review output, and source templates remain unchanged. This is offline structural regression evidence, not a full functional, visual, assistive-technology, native-language or live QA certificate.

No changes to main, production hooks, workflow triggers, homepage source, forms, email recipients, billing, DNS or Pages configuration. Existing homepage fragments stay review-only. The new guide URLs are preview targets, not verified public links. Maintainer must integrate the renderer and five homepage promotion fragments only after reviewer approval and separate merge/deploy confirmation; enforce exact-head CI/provider checks, test keyboard/mobile/screen-reader behavior and verify HTTPS/content/interaction after authorized release.

Urgent business cases retain single-sender owners and customer confirmation/PO/separate Zion release gates. No order, signature, payment, supplier commitment or outbound email was issued by this app-review lane.
