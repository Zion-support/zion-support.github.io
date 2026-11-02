# Pages regression repair — 2026-11-02

Base: 2588f49ed6b2efb646acceeb9ef7dd216985a69f. Restore reviewed implementations from a713aaa12, before the main-branch consolidation, rather than replace failing tests with comments. SEO PR 71884 remains separate and unchanged.

The Pages run 41473190320 failed because test-finops-scenario.cjs was missing; main subsequently supplied a comment-only file. Run 41472915483 failed because the Spanish reciprocal learning page was missing. Subsequent learning pages were placeholders. This repair restores real FinOps math, bounds, DOM, metadata and reciprocal-link validation; substantive operational tools, translated learning guides and homepages needed by their generators; and workflow failure propagation. A mutation gate proves wrong math and missing canonical metadata fail validation. The partial operational coverage inventory explicitly describes only its four families.

Local verification: full Pages preparation passes (21,701 files), real FinOps and operational artifact checks pass, operational and ROI calculations pass, all eight workflow regression tests pass. Existing commercial path checks remain enabled. A dedicated non-deploying workflow runs these checks without the unrelated global dependency install.

## Remaining publication blocker

This draft is not publication-ready. Main also removed direct linked destinations outside these restored families: localized catalogs and network/start/verification/experiment/communications guides, three localized Discovery routes, the network hub, Smart Call Routing and Meeting Intelligence. Some were generated artifacts rather than tracked pages even at the known-good base. Restore their genuine generators and content through the owning repair before publication; do not fill with placeholders or redirect indiscriminately. Passing the scoped contracts does not establish full-site link health.

Global TypeScript heap exhaustion and repository-wide lint violations remain independent blockers. The existing compiler repair PR 71821 owns that investigation; this restoration does not claim to solve it. No permissions, check bypasses, merge or deployment are requested by this draft.
