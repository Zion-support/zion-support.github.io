# Satellite + Discovery dependency integration review

Parent: 41d380e6aadc99103513cd3b5ecffb5d7a0aac8d, existing PR71584.

## Purpose

Move beyond isolated app tests: assemble the exact existing free-Discovery restoration (PR71595), free/privacy publisher checks (PR71582), and uncertain-delivery protection (PR71562) with the satellite suite in a disposable workspace. The original PR branches and production sources remain unchanged. This is a validation candidate, not a merge of those PRs or a deployable approval.

Immutable source snapshots are under tests/fixtures/satellite-release-dependencies and their Git blob hashes/source commits are recorded in manifest.json. They are copied directly from those existing PRs, not alternative implementations. The manifest also leases the source target blobs and homepage; a concurrent change fails preflight instead of overwriting newer work.

The homepage candidate applies the three existing PR71582 privacy replacements and removes exactly the inherited obsolete paid-marker comment. It does not change prices, promises, form recipients or unrelated links. No fabricated marker is inserted to pass a guard. Existing brittle or conflicting guards are deliberately allowed to fail and identify their owner.

## Execution

```
python3 tests/satellite-release-integration.test.py
python3 scripts/check-satellite-release-integration.py --source . --evidence /tmp/zion-release-evidence
```

Only reviewed preparation input directories are copied; the selected preparation script then builds real out/ in temporary storage. Tests run in order: mocked Discovery delivery, satellite Python suite, unchanged dependency preparation script, real five-homepage rendering, localized runtime tests, manifest/page hashes and five Discovery destination checks. There are no real form submissions, emails, deployment calls, tokens in source or outbound prospecting.

The read-only PR workflow retains report.json and step logs for three days even on failure. It does not upload to Pages or enable publishing. A successful candidate test would still not certify DNS/HTTPS, project Pages ownership, whole-site translation, all existing claims, provider checks, native editorial review or inbox delivery.

## Local verification before commit

12 staging tests passed, including immutable blob and source leases, exact privacy edits preserving other bytes, missing/duplicate match rejection, bounded scope, traversal/symlink rejection, staging without source changes and failing-command propagation. Python syntax passed. These tests use synthetic fixtures; hosted combined-build results must be read independently.

Container direct GitHub download was unavailable (DNS resolution failure). No complete local repository artifact is claimed. The existing connected GitHub API provided the actual source metadata and blob provenance; hosted review build supplies the real source tree.

## Release status

DRAFT / UNMERGED / NO PRODUCTION CHANGE. Existing PR71584 runtime, translation and source code are untouched. Existing Discovery source, privacy guards and delivery PRs are not modified or marked accepted. This commit adds review validation only. Read the exact-head integration outcome before proposing any release.

## Source-candidate integration

After the hosted staging pass, the exact five dependency blobs and reviewed homepage patch may be applied to the same draft branch. The harness is intentionally idempotent: its leases accept either the original source blobs or the identical pinned candidate blobs, and the homepage accepts only the pre-reviewed source hash or the exact reviewed candidate hash `0fc732f96ccfeeacc032b17c5640782e1cc37d16`. Any third state fails. This allows the workflow to validate the actual review branch after integration without weakening concurrency detection or rewriting the upstream fixes.

The integrated source still remains DRAFT / UNMERGED. The upstream PR numbers and commit provenance stay in the manifest for traceability. Applying the exact candidate does not close, supersede or silently modify those owners' PR branches.
