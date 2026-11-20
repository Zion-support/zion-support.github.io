# Automation change coalescer

The direct-main helper remains a no-op. This coalescer is a safer path for compatible, low-risk automation output, but is not a publisher or release approver.

## Process

- Producers prepare a branch matching `automation/staging/<safe-slug>`. This workflow does not create or push staging branches.
- Invoke manually on `main` (`workflow_dispatch`) or via a reviewed reusable workflow (`workflow_call`). There is no schedule, automatic push, or PR event trigger.
- The job checks out **trusted `main`** with non-cone sparse checkout, depth 1, and a bounded depth-200 blobless fetch of `main` and the staging commit, never executing staging code. If the common ancestor is older than the bound, it fails closed and requires the staging branch to be rebased; it never certifies a partial diff.
- Node's built-in test runner checks the local guard first; the guard then validates the pinned staging head against the merge base of `main`.
- A branch-motion check ensures the remote head still matches the validated commit before opening or editing a **draft PR**, and an additional PR-head readback catches a subsequent change. Existing draft descriptions are edited only when content differs. Source-run provenance is restricted to a GitHub Actions run in the same repository.
- Existing exact-head CI, privacy/security checks, content review, and a human release decision remain necessary. No merge, production deployment, or direct-main push occurs.

## Policies and safety budgets

| Policy | Allowed directories | Allowed file types |
| --- | --- | --- |
| `content` | `public/blog/`, `public/case-studies/`, `public/industries/`, `public/services/`, `public/apps/`, `content/` | `.md`, `.html`, `.json`, `.txt`, `.csv` |
| `reports` | `automation/reports/` | `.md`, `.json`, `.txt`, `.csv`, `.ndjson` |
| `docs` | `docs/`, root `README.md` | `.md`, `.rst`, `.txt`, `.json`, `.csv`, `.ndjson` |

Protected paths always rejected include `.github/`, scripts, package manifests, secrets/credentials, payment/billing/checkout, Discovery, Managed IT, APIs/functions/middleware, and executable automation code. The validator also checks staged blobs for high-confidence private-key and API-token signatures, invalid UTF-8, and active JavaScript/embedded HTML on the public-content path. Detection is conservative and not a comprehensive secrets audit: **never place secrets on a staging branch**, since the GitHub commit can already be visible before the coalescer runs. Deletions are inspected. Symlinks, executable Git modes, submodules, binaries, unusual filenames, and unsupported extensions fail closed. Per staging proposal: **200 changed files**, **12,000 changed lines**, **2 MiB per staged file**, **8 MiB total staged file bytes**.

## Free advisory review intelligence

The verifier emits a machine-readable `review_tier` and `review_reasons` as GitHub outputs, workflow summary, and `automation/reports/coalescer-validation-latest.json` in the isolated runner. It uses deterministic rules only; it is **not AI analysis** or a release certification:

- `enhanced`: public-content proposal, any deleted lines, more than 50 changed paths, or more than 3,000 changed lines.
- `standard`: no extra review signals found. This **still requires CI and human review**.

The report is **not committed or uploaded**. The workflow adds its advisory tier and source-run URL to the draft PR description. No paid service, secrets, third-party API, CRM mutation, emails, repeated PR comments, or automated merges.

## Verification and release gate

Run `node --test scripts/automation/validate-coalescer-staging.test.cjs` and `node --check` on both JS files. Synthetic tests cover credential redaction, active markup, invalid UTF-8, and unavailable merge-base fail-closed behavior. Parse the YAML and verify pinned action SHAs, narrow permissions and event triggers. Confirm **exact-head GitHub-hosted checks** before approval. After owner review, execute a synthetic safe staging branch and verify an actual draft PR is produced; confirm a malicious/protected branch is blocked. The workflow cannot be end-to-end dispatched from default `main` before merge. Existing saturated Actions queues are a reason to defer release, not to bypass checks.
