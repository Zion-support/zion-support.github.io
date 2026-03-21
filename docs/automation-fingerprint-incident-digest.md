# Automation fingerprint incident digest

Scheduled workflow: `.github/workflows/ai-automation-fingerprint-digest-weekly.yml`

## What it does

- Lists open GitHub issues that have any `automation-fp-*` label (created by `scripts/automation/gh-issue-dedupe-or-create.cjs`).
- Writes:
  - `automation/reports/automation-fingerprint-incidents-latest.json`
  - `automation/reports/automation-fingerprint-incidents-latest.md`
- Uploads both as a workflow artifact.

## Local / CI without token

`automation/generate-automation-fingerprint-incident-digest.cjs` exits 0 and writes stub files if `GH_TOKEN` / `GITHUB_TOKEN` is unset.

## npm

```bash
npm run automation:fingerprint-digest
```

## Related

- `scripts/automation/gh-issue-close-on-recovery.cjs` — close fingerprint-matched issues when a guard recovers (`npm run issues:close-on-recovery`).
- `scripts/automation/validate-workflow-issue-dedupe-contract.cjs` — preflight contract for `ISSUE_TITLE` + `ISSUE_FINGERPRINT` on escalation steps (`npm run workflows:issue-dedupe-contract`).
