# Automation fingerprint incident digest

Scheduled workflow: `.github/workflows/ai-automation-fingerprint-digest-weekly.yml`

## What it does

- Lists open GitHub issues that have any `automation-fp-*` label (from `gh-issue-dedupe-or-create.cjs`).
- Writes `automation/reports/automation-fingerprint-incidents-latest.{json,md}` (gitignored locally).
- Uploads both as a workflow artifact.

## Without token

`automation/generate-automation-fingerprint-incident-digest.cjs` writes stub files and exits 0 if `GH_TOKEN` / `GITHUB_TOKEN` is unset.

## npm

```bash
npm run automation:fingerprint-digest
```

See also `docs/automation-issue-dedupe-helper.md`.
