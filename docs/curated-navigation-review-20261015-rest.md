# Five-language resource-guide navigation — review only

Approved continuation on existing draft PR #71543. This change touches the artifact-only curated renderer, adds an isolated offline regression suite and this review note. It does not change production main, workflows, forms, email delivery, commercial terms or concurrent test suites.

## Improvement
English, Portuguese, Spanish, French and German guides receive explicit localized skip-to-main text, a focusable main target, on-page shortcuts to all four resource cards and next steps, accessible card headings and a localized back-to-top link. Smooth scrolling is conditional on no reduced-motion preference. Homepage promotion and reciprocal-guide overlay output stay unchanged.

## Offline evidence
Node v20.20.2 syntax check passed. 102/102 tests passed across the existing curated-network, reciprocal-language, ownership-marker suites and new accessibility suite. Initial partial-fixture run had two missing-dependency failures; fetching the exact pinned-branch finalizer and workflow resolved them without weakening assertions. New tests check all fragment targets are unique and present, localized labels in all five languages, repeat-render equality and existing homepage form/script preservation.

Run: `node --test scripts/test-curated-network.cjs scripts/test-curated-language-links.cjs scripts/test-curated-network-markers.cjs scripts/test-curated-navigation-accessibility.cjs`

The new suite is not newly wired into the deployment workflow; reviewer must run it or approve a later additive CI hook. No full production artifact build, browser/assistive-technology QA, native-language review, new live HTTP checks, form POST or dual-inbox receipt verification is claimed. PR was draft/unmerged/conflicted at pre-write check. Exact-head CI, conflicts, provider build diagnostics and owner approval remain release gates. No merge/deploy authorized or executed by this batch.
