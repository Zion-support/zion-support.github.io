# Notion P0/P1 Triage Automation

Recurring GitHub → Notion sync for this repository.

## What it does

- Runs daily at 12:17 UTC (`17 12 * * *`) and on `workflow_dispatch`.
- Workflow: `.github/workflows/notion-p0p1-triage.yml`
- Script: `scripts/notion_p0p1_triage.py` (Python standard library only)
- Source: open issues in `Zion-support/zion-support.github.io` only; PRs are excluded.
- Scope: title starting with `P0` or `P1`, or label `production-incident`.
- Excludes Forever Log and OPS COMMS issues.
- Destination: Notion database **Incidentes & Ships do site** (`b391c5fb-634e-456b-9298-1c0d5c1889da`).
- Dedupe/upsert key: Notion `Item` = `GH #<number> — <title>`.
- New/updated rows use `Status=Aberto` and `Tipo=Incidente`.

## Activation checklist (owner)

1. In GitHub repo Settings → Secrets and variables → Actions, add secret `NOTION_TOKEN`.
   - Use a Notion integration token with access to the database above.
   - Never commit the token or paste it in issues, PRs, or comments.
2. Review draft PR #71633 and merge it through the existing release gate.
   - Scheduled workflows only run from the default branch (`main`).
3. After merge, run the workflow once manually from Actions → **Notion P0/P1 Triage** → Run workflow.
4. Confirm the run summary reports created/updated counts and that rows appear in Notion.

## Safety behavior

- If `NOTION_TOKEN` is missing, the script logs a warning and exits `0`; the workflow stays inert.
- The GitHub token permission is read-only for issues (`issues: read`).
- A single concurrency group prevents overlapping runs.

## Pilot (2026-10-22)

The pilot created five rows in Notion for GitHub issues #71630, #71600, #71388, #71546, and #71451.
This automation makes that same narrow logic recurring; it does not import the full open-issue backlog.
