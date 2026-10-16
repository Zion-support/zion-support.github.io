# Checkout prerequisite repair for PR 71584

This supplements and supersedes the first checkout blocker in `satellite-suite-five-locales-review.md`. It does not resolve the publisher commercial guard, full artifact validation or release hold.

## Evidence and scope

Parent: `4812c1d10331e73492598d37e8deb0ac9d3f70af`.
Prior run 38824123614 / job 116727440741 failed before tests in checkout credential cleanup with `fatal: No url found for submodule path '.deploy-temp' in .gitmodules` and exit 128.

Reused the already reviewed pointer-cleanup scope of #71561/#71571 in this existing app branch, not a new competing PR. On the exact parent, all eight entries below were independently retrieved through GitHub Contents API: each was type `submodule`, size 0, `submodule_git_url: null`. `.gitmodules` returned 404 on the same parent. They are unconfigured Git index pointers, not ordinary source directories or independent repositories being deleted.

## Reversible original pointers

| Path | Original commit pointer |
| --- | --- |
| .deploy-temp | 05aaa610e0e8e87eba3b6b0e06f48bfde35b5211 |
| .nvm | bab86d5de571015b63fd8fc30b47bbe072a1290e |
| .pageploy | 7a37473ec82bcfe8f127b598d96fe3e7dc55672c |
| gh-deploy-clone | a497c70c21c5f2af45674abd29793be7bcc8e966 |
| llama.cpp | 68e7ea3eabef29a3e222681c81e0cc7ed070c09d |
| zion-repo | 71cdd01d816fcdbd5575ea68ce4f1be65569d251 |
| zion-support.github.io | f99ffd454a49790cc9cf20ad9ab9588b09969a81 |
| zion-techgroup | 90b50ed482f211093dfab43c6270161253045ff6 |

Only these mode-160000 entries are removed, plus this documentation. No credentials, security cleanup, schedules, permissions, deployment guards, ordinary source files or external repositories are removed/changed.

Local synthetic Git-index reproduction with all eight unconfigured pointers returned exit 128 before removal and exit 0 afterward. A retained ordinary source blob remained unchanged. This is mechanism-level evidence, not a remote CI or production certificate.

The branch update is non-forced and leased against the expected parent. Inspect exact new-head Actions results, full merge-candidate artifact and publisher guard resolution before any release. Main is not modified by this repair.
