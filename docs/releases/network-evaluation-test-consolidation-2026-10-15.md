# Evaluation test entrypoints — draft consolidation

During verification, PR71599 advanced concurrently from our tested repair `0020f10` to follow-up `e6b5d419`. That follow-up changed bootstrap helpers from relative file paths to URL routes, removed the old hash-manifest interface, and introduced `verify-network-evaluation-artifact.cjs` plus `test-network-evaluation-build.cjs`.

The follow-up's original unit suite (92 assertions) and active build suite (42 assertions, invoking the 85-check artifact verifier) passed locally. Two older test entrypoints still assumed the previous file-path interface and failed with EISDIR. The earlier 158-assertion result remains valid only for immutable commit0020f10, not the changed follow-up.

This consolidation replaces only those two stale test entrypoints with compatibility wrappers around the current authoritative verifier/build suite. `test-network-evaluation-artifact.cjs --verify <root>` delegates to the current verifier; either legacy test command without that option invokes the real-preparation integration suite. Duplicate invocations are the same checks, not additional independent coverage. The concurrent bootstrap, current preparation script, deployment workflow, commercial source and safety guards are not overwritten.

Validated commands: `node scripts/test-network-evaluation.cjs`, `node scripts/test-network-evaluation-build.cjs`, `node scripts/test-network-evaluation-artifact.cjs`, and `node scripts/test-network-evaluation-prepare.cjs`. These are local fixture tests, not a complete production build, live/browser QA or native editorial review.

Release remains blocked by the pre-existing free-Discovery source versus literal Discovery $99 homepage guard mismatch and unresolved hosting/CI review. Do not insert fake commercial markers, weaken safety gates or deploy to force completion. No merge, workflow dispatch or production publication is part of this test-only consolidation.
