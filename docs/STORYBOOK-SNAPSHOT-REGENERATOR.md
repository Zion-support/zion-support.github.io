# Automatic Storybook Snapshot Regenerator

> Detects JSON Schema changes, rebuilds Storybook, captures screenshots, and flags visual regressions (>0.5% diff) via GitHub issues.

## Overview

This automation ensures visual consistency of your Storybook components across schema changes. When a schema file in `app/schemas/` is modified, the system:

1. **Rebuilds Storybook** static site
2. **Captures full-page screenshot** via Puppeteer (headless Chromium)
3. **Compares** with previous snapshot using `pixelmatch`
4. **Creates GitHub issue** if visual change exceeds 0.5%

## Architecture

```
┌─────────────────────┐
│  Schema change in   │
│  app/schemas/*.json │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  GitHub Actions: storybook-snapshot │
│  ┌─────────────────────────────────┐│
│  │ 1. Run check-schema-changes.sh ││
│  │    → sets output `changed`      ││
│  │ 2. If changed: run regenerator ││
│  │ 3. Puppeteer captures screenshot││
│  │ 4. pixelmatch vs previous       ││
│  │ 5. If >0.5% change → create issue││
│  │ 6. Upload snapshots artifact    ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘
```

## Components

| File | Purpose |
|------|---------|
| `scripts/check-schema-changes.sh` | Computes MD5 hash of all `app/schemas/*.json`; compares with `.hermes/memory/schema-hash.txt` |
| `automation/storybook-snapshot-regenerator.cjs` | Main orchestrator — builds Storybook, serves it, screenshots, diffs, reports |
| `.github/workflows/storybook-snapshot.yml` | Daily scheduled run (9 AM UTC) + manual trigger |

## Installation

Dependencies are already installed:
```bash
# Dev dependencies (added automatically)
@storybook/cli
@storybook/react-vite
@storybook/addon-essentials
@storybook/addon-links
@storybook/testing-library
puppeteer
pixelmatch
pngjs
```

Add Storybook build script to `package.json`:
```json
{
  "scripts": {
    "build-storybook": "storybook build"
  }
}
```

## How It Works

### Schema Change Detection

`check-schema-changes.sh` hashes all JSON files under `app/schemas/` (sorted alphabetically) and stores the combined hash in `.hermes/memory/schema-hash.txt`. If the hash matches the previous run, the workflow exits early.

### Snapshot Regenerator

1. **Build**: `npm run build-storybook` → outputs to `storybook-static/`
2. **Serve**: Python `http.server` on port 6006 (in-process, detached)
3. **Capture**: Puppeteer headless Chromium navigates to `http://localhost:6006/` and takes full-page screenshot
4. **Compare**: `pixelmatch` compares current vs previous PNG; calculates changed pixel percentage
5. **Report**:
   - If ≤ 0.5%: baseline updated to current; exit 0
   - If > 0.5%: regression report written to `.hermes/memory/storybook-regression-report.json`; exit 1 → GitHub issue created

### Output Files

| Path | Description |
|------|-------------|
| `.hermes/memory/storybook-snapshots/previous/full.png` | Baseline screenshot |
| `.hermes/memory/storybook-snapshots/current/full.png` | Current screenshot |
| `.hermes/memory/storybook-snapshots/diff/diff.png` | Visual diff (changed pixels in red) |
| `.hermes/memory/storybook-regression-report.json` | Issue metadata (title, body, metrics) |

## Configuration

| Env Var | Default | Purpose |
|---------|---------|---------|
| `SCHEMA_DIR` | `app/schemas` | Schema directory to watch |
| `SNAPSHOT_DIR` | `.hermes/memory/storybook-snapshots` | Snapshot storage |
| `THRESHOLD_PERCENT` | `0.5` | Pixel change threshold for regression (in workflow, hardcoded) |
| `SERVER_PORT` | `6006` | Local HTTP server port |

## GitHub Workflow

**Schedule**: Daily at 9:00 AM UTC (`0 9 * * *`)
**Trigger**: Also available via `workflow_dispatch`

**Steps**:
1. `npm ci` installs dependencies
2. `check-schema-changes.sh` → outputs `changed`
3. If changed: `node automation/storybook-snapshot-regenerator.cjs`
4. If regression report exists and status != `baseline_initialized`/`no_regression`: `gh issue create` with labels `storybook,visual-regression,automation`
5. Upload snapshots as artifact (7-day retention)

## Threshold & Baseline

- **0.5% threshold**: tuned for catching meaningful visual changes while allowing minor rendering variations
- **Baseline updates automatically** only when change ≤ threshold. On regression, baseline is preserved so you can review and manually approve updates.

## Troubleshooting

**"No previous snapshot found"** — First run; baseline initialized. No issue created.

**"Puppeteer launch failed"** — Runner lacks Chrome dependencies. GitHub Actions `ubuntu-latest` includes required libs. Local testing: ensure `puppeteer` downloads Chromium (`npm install` handles this).

**"Storybook build failed"** — Verify `build-storybook` script exists and Storybook config (`.storybook/main.ts`) is valid.

**False positive?** — Adjust `THRESHOLD_PERCENT` in the regenerator script. Also consider adding `expect` markers in stories to stabilize renders.

**Schema changes not triggering?** — Ensure schema files are `.json` and live under `app/schemas/`. The hash is computed over sorted file list; adding new files counts as a change.

## Future Enhancements

- **Per-story screenshots** instead of full-page (more granular)
- **Storyfile-level baseline** (track each `.stories` file separately)
- **Auto-baseline approval** via issue comment reaction
- **Visual diff image attachment** directly in issue (base64 embedded) instead of only artifact
- **Performance profile** ( Lighthouse metrics per snapshot)

---

*Created: 2026-05-12 — Autonomous implementation via OpenClaw*