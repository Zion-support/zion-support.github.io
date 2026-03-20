# GitHub issue dedupe helper (autonomous workflows)

Use `scripts/automation/gh-issue-dedupe-or-create.cjs` to avoid opening duplicate incident issues when the same guard fires on a schedule.

## Environment

| Variable | Required | Description |
|----------|----------|-------------|
| `ISSUE_TITLE` | yes | **Stable** title used for exact match against open issues |
| `ISSUE_BODY_FILE` | yes | Path to markdown body (created in a prior `run:` step) |
| `ISSUE_LABEL` | no | Label for new issues (default: `bug`) |
| `COOLDOWN_HOURS` | no | If an open issue with this title was updated within N hours, skip comment/create |
| `SKIP_IF_OPEN` | no | If `1`/`true`, skip when any open issue matches title |
| `ISSUE_LIST_LIMIT` | no | Max open issues to scan (default `200`) |

Requires `gh` CLI and `GITHUB_TOKEN` / `GH_TOKEN` (GitHub Actions provides `github.token`).

## Behavior

1. Lists open issues (up to `ISSUE_LIST_LIMIT`).
2. If an issue has **exact** title `ISSUE_TITLE`, either comments with the body file or respects cooldown.
3. Otherwise creates a new issue with `ISSUE_LABEL`.

## Example (workflow step)

```yaml
- name: Escalate (deduped)
  env:
    GH_TOKEN: ${{ github.token }}
    ISSUE_TITLE: My stable alert title
    ISSUE_BODY_FILE: incident-body.md
    COOLDOWN_HOURS: '12'
  run: node scripts/automation/gh-issue-dedupe-or-create.cjs || true
```

Reference implementation: `.github/workflows/ai-report-size-budget-guard.yml`.
