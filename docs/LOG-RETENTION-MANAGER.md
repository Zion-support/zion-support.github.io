# Autonomous Log Rotation & Storage Cost Optimizer

> Automated cleanup of old logs, reports, artifacts; enforces retention policies; controls GitHub Actions storage costs. Self-hosted.

## Overview

Log and artifact retention is now managed automatically. This system:

- **Prunes old files** from `automation/reports/`, `.hermes/memory/` directories
- **Deletes GitHub Actions artifacts** older than configured threshold (via GitHub API)
- **Applies retention policies** by file type (daily logs 30d, weekly 90d, monthly 365d)
- **Safety checks** — never deletes files modified <24h ago; respects free space threshold
- **Dry-run mode** — default: reports what would be deleted without actually removing
- **Cost savings** — reduces GitHub Actions artifact storage expenses
- **Telegram summary** — reports space freed, files removed
- **Fully autonomous** — scheduled daily cleanup

---

## Architecture

```
┌──────────────────────────────┐
│ GitHub Actions               │
│ Daily 02:00 UTC (off-peak)  │
└──────────┬───────────────────┘
           │
           ▼
┌──────────────────────────────────────────┐
│ automation/log-retention-manager.cjs      │
│  1. Scan target directories:              │
│     - automation/reports/*.log, *.jsonl   │
│     - .hermes/memory/**/*.json, *.log     │
│  2. Check file modification time          │
│     - Skip if modified <24h ago           │
│     - Delete if older than retention days │
│  3. GitHub Actions artifact cleanup:      │
│     - List workflow runs via GitHub API   │
│     - Delete artifacts > RETENTION_DAYS   │
│  4. Compute bytes freed, count removed    │
│  5. Telegram summary + optional GitHub issue│
└──────────┬──────────────────────────────────┘
           │
           ▼
    ┌──────┴───────┐
    │              │
    ▼              ▼
┌──────────────┐ ┌─────────────────────┐
│ Telegram     │ │ GitHub Issue        │
│ Daily (if    │ │ (monthly summary)   │
│ activity)   │ │                     │
│             │ │ 📊 Storage trend   │
│ 🧹 Freed:   │ │ 💰 Cost savings    │
│  2.1GB      │ │                    │
│ 1,243 files │ └─────────────────────┘
└──────────────┘
           │
           ▼
┌──────────────────────────────────────────┐
│ State persisted                            │
│ .hermes/memory/log-retention/              │
│  - retention-manager.log                   │
│  - latest-report.json                      │
└──────────────────────────────────────────┘
```

---

## Components

| File | Purpose |
|------|---------|
| `automation/log-retention-manager.cjs` | Retention enforcer — file deletion + GitHub artifact cleanup |
| `.github/workflows/log-retention-manager.yml` | Daily cleanup workflow |
| `.hermes/memory/log-retention/latest-report.json` | Last run report (files deleted, bytes freed) |
| `docs/LOG-RETENTION-MANAGER.md` | This file |

---

## What Gets Cleaned

### Directories & Patterns

| Directory | File Patterns | Retention | Reason |
|-----------|---------------|-----------|--------|
| `automation/reports/` | `*.log` | 30 days | Daily logs |
| `automation/reports/` | `*.jsonl` | 30 days | Daily raw data streams |
| `automation/reports/` | `*.json` (non-latest) | 90 days | Weekly/monthly aggregates |
| `.hermes/memory/*/` | `*.log` | 30 days | Component logs |
| `.hermes/memory/*/` | `history.json` | 90 days | Time-series history |
| `.hermes/memory/*/` | `latest-report.json` | keep forever | Current snapshot |
| GitHub Actions artifacts | All artifacts | 30 days | Workflow run artifacts |

**Never deleted:**
- `latest-report.json` (current state)
- Files modified within last 24 hours (safety lock)
- Any file if free disk space > 20 GB (skip cleanup entirely)

---

## Configuration

| Env Var | Default | Description |
|---------|---------|-------------|
| `RETENTION_DAYS_DAILY` | `30` | Days to keep daily logs |
| `RETENTION_DAYS_WEEKLY` | `90` | Days to keep weekly aggregates |
| `RETENTION_DAYS_MONTHLY` | `365` | Days to keep monthly/yearly snapshots |
| `RETENTION_DAYS_ARTIFACTS` | `30` | Days to keep GitHub Actions artifacts |
| `RETENTION_DRY_RUN` | `true` | If `false`, actually deletes files |
| `GITHUB_TOKEN` | — | Required for artifact deletion |
| `TELEGRAM_BOT_TOKEN` | — | For summary alerts |

**Dry-run mode:** By default, the script only reports what it *would* delete. Set `RETENTION_DRY_RUN=false` in workflow env to enable actual deletion. (First run in dry-run to verify.)

---

## Retention Policies

| File Type | Retention | Rationale |
|-----------|-----------|-----------|
| Daily logs & raw streams | 30 days | Enough for recent debugging; older logs aggregated in digest |
| Weekly reports | 90 days | Quarterly review possible; old data stored in separate archive if needed |
| History files (time-series) | 90 days | Trend analysis uses last 3 months; older can be aggregated |
| GitHub Actions artifacts | 30 days | Artifacts from recent runs only; reduces storage cost |
| `latest-report.json` | Indefinite | Current state always kept |

---

## Safety Mechanisms

1. **Recent file protection:** Any file modified <24h ago is never deleted, even if past retention.
2. **Free space guard:** If free disk space >20 GB, cleanup is skipped entirely (no need).
3. **Dry-run default:** Actual deletion requires explicit opt-out of dry-run.
4. **Path restrictions:** Only deletes within known directories (`automation/reports/`, `.hermes/memory/`); never touches source code or database.
5. **GitHub artifact deletion:** Uses GitHub API with proper authentication; only deletes artifacts older than threshold.

---

## Report Format

### Telegram Daily Summary (when files deleted)
```
🧹 Log Retention & Storage Cleanup — May 12, 2026

📊 Space freed: 1.24 GB
🗑️ Files removed: 1,243

Top categories:
• logs: 892 files (812 MB)
• history: 251 files (318 MB)
• github-artifacts: 100 files (110 MB)

Next cleanup: daily at 02:00 UTC
Details: .hermes/memory/log-retention/latest-report.json
```

If dry-run:
```
🧹 Log Retention & Storage Cleanup — May 12, 2026

⚠️ Dry-run mode — no files deleted
Would free: 1.24 GB (1,243 files)

Configure: set RETENTION_DRY_RUN=false to enable deletion.
```

### JSON Report (`latest-report.json`)
```json
{
  "timestamp": "2026-05-12T11:30:00Z",
  "dryRun": true,
  "totalDeleted": 1243,
  "totalBytesFreed": 1328193602,
  "details": [
    { "category": "logs", "deleted": 892, "bytesFreed": 851200000 },
    { "category": "history", "deleted": 251, "bytesFreed": 335000000 },
    { "category": "github-artifacts", "deleted": 100, "bytesFreed": 110000000 }
  ],
  "skippedFreeSpace": true
}
```

---

## GitHub Workflow

| Trigger | Behavior |
|---------|----------|
| `schedule` daily 02:00 UTC | Scans and (optionally) deletes old files; uploads artifact of the report |
| `workflow_dispatch` | Manual run |

**Note:** 02:00 UTC chosen as off-peak; minimal load on server and GitHub API.

---

## Testing Locally

```bash
# Dry-run (default)
node automation/log-retention-manager.cjs

# Output:
🧹 Starting Log Retention & Storage Cleanup...
   Mode: DRY-RUN (no deletion)
   Policies: daily=30d, weekly=90d, monthly=365d, artifacts=30d
📊 Space freed: 0 B
🗑️ Files removed: 0
```

To test actual deletion (use with caution):
```bash
RETENTION_DRY_RUN=false node automation/log-retention-manager.cjs
```

**Create test files:**
```bash
# Create old log file (60 days old)
touch -d "60 days ago" automation/reports/test-old.log
# Run dry-run — should list it for deletion
```

---

## Cost Savings Impact

GitHub Actions artifact storage:
- Free tier: 2 GB for public repos; paid beyond
- Each artifact typically 10–100 MB per run
- Daily workflows (Digest, Lighthouse, Link Checker, etc.) produce ~500 MB/day
- With 30-day retention, that's ~15 GB stored
- Without cleanup, storage grows linearly; with 30d retention, capped at ~15 GB
- If you have 10 workflows each producing artifacts, savings can be several GB per month → **avoid $0.25/GB/month fees** (GitHub pricing)

**Estimated monthly savings:** 5–20 GB depending on workflow count → $1.25–$5/month, but more importantly prevents unbounded growth.

---

## Interpreting Report

- **`totalBytesFreed`** — how much space was reclaimed (if live deletion)
- **`details`** — breakdown by category (logs, history, artifacts)
- **`skippedFreeSpace`** — true if plenty of disk space, cleanup unnecessary
- **`dryRun`** — true means no files actually deleted; set `RETENTION_DRY_RUN=false` to enable

If `dryRun` is true but many files flagged, consider enabling deletion.

---

## Future Enhancements

- **Archive to S3/cloud** before deletion (optional long-term cold storage)
- **Compression** — gzip old logs before deletion to keep summaries longer
- **Retention policy per directory** — fine-grained control via config file
- **Dashboard widget** — show storage usage trend in daily digest
- **Automatic issue creation** — monthly report: "Storage cost trending up X%"
- **Integration with backup** — ensure backups respect retention too
- **Per-artifact namespace filtering** — keep artifacts from specific workflows longer (e.g., release builds)

---

## Why This Matters

- **Cost control:** Prevents runaway GitHub Actions storage bills
- **Disk hygiene:** Avoids "disk full" errors on server/host
- **Performance:** Smaller filesystem = faster scans, backups, clones
- **Compliance:** Some regulations require log retention limits (GDPR data minimization)
- **Autonomous:** Once configured, runs daily without intervention

---

*Created: 2026-05-12 — Autonomous implementation via OpenClaw (Task #33)*
