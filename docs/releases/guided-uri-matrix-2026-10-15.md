# Guided navigation URI regression supplement — 15 October 2026

Review-only addition to existing draft PR #71571. The inspected source head was `2e608030a1fefb16b1fbab981b68a51056e34e9e`. Its navigation contract already had the accepted-scheme allowlist, 12 positive and 22 negative URI fixtures. Do not recreate or overwrite that work.

## Added verification

Run `node --check scripts/test-guided-app-uri-matrix.cjs` and `node scripts/test-guided-app-uri-matrix.cjs` from the repository root. The supplement first executes the existing contract, then checks 8 accepted and 12 rejected URI variants and 86 page/anchor combinations against the actual Start Here and Use-Case Map source pages. Safe unquoted anchors must increase the extracted-link count; malformed/unsafe quoted anchors must yield the specific URI failure. Control characters, mixed-case blocked schemes, entity encodings and backslashes are covered.

Local syntax and both source-page baselines PASS, using 17 Git-blob-hash-verified inputs from the inspected immutable head. No substitute app pages or synthetic destination files were used. This new standalone supplement is NOT wired into CI by this change; run the command explicitly until a separately reviewed test-workflow integration.

## CI diagnostic correction

Historical Performance Budget job 116096186038 ends with runner shutdown / operation canceled while Next.js was building. No measured budget threshold failure appears in that log. The workflow fallback's heap-OOM text is a conditional warning, not proof of the observed cause. The current Cloudflare failure at the inspected head links to build `4aa5b3d4-59a2-4583-9ad8-5826a0e324b8`; provider build logs/root cause remain uninspected. Current offline-contract jobs were queued at observation, not passed.

## Release hold

No production HTML, renderer, deployment workflow, forms, prices, recipients or main-branch changes. No merge, dispatch or deployment. This is offline source QA, not browser/mobile/native-language review, full artifact validation, live translation/interlink coverage, or working-app certification. Refresh exact-head checks after commit; preserve separate release review and approval.
