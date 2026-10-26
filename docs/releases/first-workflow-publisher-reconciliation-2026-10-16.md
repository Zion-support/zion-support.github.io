# Publisher reconciliation — 16 October 2026

Continuation of approved draft-only PR #71575, inspecting main 49639303c0d7cf1c276aa5fa1cc8dd916d22d8c6 and feature head a18aa249437ca9dcc6faea32616466e4a41134d6. Supersedes earlier claims that this PR's guides are wired into the current production publisher.

## Conflict cause and resolution
Main changed the deployment architecture after this PR branched from f117fc0. It now publishes through prepare-pages-out.sh and a short dispatch-only workflow. This PR retained the old 9KB renderer pipeline with one additive guide hook. Restoring that older pipeline over current main would discard concurrent publisher decisions.

The draft static-deploy.yml is reconciled byte-for-byte with inspected main (blob 74aff349c5ef102f0e5fa26b5bee773488ea5d94). Main itself is untouched. Manual-only trigger, main-ref guard, artifact assembly and existing money-path checks remain as current main defines them. No DNS, dispatch, merge, new permission or automatic publish is introduced. The old draft publisher remains auditable in commit a18aa249437ca9dcc6faea32616466e4a41134d6.

The seven other original feature paths were queried individually at the immutable main SHA; all were absent, so no same-path content collision was found there. Reverse GitHub compare returned its 300-file cap and is NOT an exhaustive main change inventory. GitHub's expected-head branch update is used separately to incorporate current main without force-pushing.

## Review-only CI
New first-workflow-contract.yml has contents:read only, Node22, a five-minute timeout and no publishing/upload/deployment steps. On PR events it fetches four bounded text files from context.sha (the synthetic merge candidate), checks their Git blob hashes, then runs syntax and the original extended fixture suite. No git checkout is needed, avoiding unrelated invalid gitlink metadata without deleting pointers or weakening full-repository checks. No third-party package installation, secrets forwarding, external writes, pull_request_target, cron or push trigger.

YAML, embedded JavaScript syntax and read-only/manual-only constraints were checked locally. Remote candidate execution is a separate receipt; do not claim it passed before reading its job result. Fixture QA does not prove full artifact integration or live functionality.

## Remaining release work
The multilingual renderer/source is preserved but deliberately UNWIRED from current production. Review integration with current public/ content and prepare-pages-out.sh, including required guide target routes and owned homepage sections, before adding any render/finalization steps. Do not reintroduce the obsolete publisher or skip current commercial/privacy gates. Historical descriptions of free Discovery versus current commercial copy require owner review, not automatic price changes.

After exact-current-head full artifact and browser/native-language review and separate merge/deploy confirmation, verify five guide bodies, homepage promotions, reciprocal links, metadata and the actual deployed source receipt via fresh GETs. No new page is declared live by this repair. Full-network translation/readiness remains incomplete.
