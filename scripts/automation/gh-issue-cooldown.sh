#!/usr/bin/env bash
# gh-issue-cooldown.sh — shared helpers for GitHub issue cooldown windows.
# Sourced by workflows that create/dedupe issues (ai-pm2-slo-agent,
# ai-pm2-restart-guardian). Safe to source under `set -euo pipefail`.

# gh_issue_cooldown_hours_from_registry
#   Returns the cooldown window (hours) for deduped automation issues.
#   Reads automation/reports/issue-cooldown-registry.json when present;
#   otherwise falls back to the default (12h).
gh_issue_cooldown_hours_from_registry() {
  local registry="automation/reports/issue-cooldown-registry.json"
  local hours=""
  if command -v node >/dev/null 2>&1; then
    hours=$(node -e '
      try {
        const fs = require("fs");
        const r = JSON.parse(fs.readFileSync(process.argv[1], "utf8"));
        const v = Number(r && r.hours);
        process.stdout.write(Number.isFinite(v) && v > 0 ? String(v) : "12");
      } catch (e) {
        process.stdout.write("12");
      }
    ' "$registry" 2>/dev/null) || hours=""
  fi
  echo "${hours:-12}"
}
