#!/usr/bin/env bash
# scripts/license-compliance-check.sh
#   Scans npm dependencies for non‑approved licenses and creates an issue/PR on detection.
#   Uses free tools: license-checker, jq, curl, git.
#   Runs autonomously via GitHub Actions every 24h.

set -euo pipefail

REPO_DIR="${REPO_DIR:-/Users/klebergarciaalcatrao/.openclaw/workspace/zion-app}"
LICENSE_FILE="${REPO_DIR}/.github/allowed-licenses.txt"
LOG_FILE="${HOME}/.hermes/memory/license-check.log"
STATE_FILE="${HOME}/.hermes/state/license-last-run"
TELEGRAM_BOT_TOKEN="${TELEGRAM_BOT_TOKEN:-}"
TELEGRAM_CHAT_ID="${TELEGRAM_CHAT_ID:-8435383377}"

mkdir -p "$(dirname "$LOG_FILE")" "$(dirname "$STATE_FILE")"

log() { echo "[$(date -u +"%Y-%m-%dT%H:%M:%SZ")] $1" >> "$LOG_FILE"; }

# Load allowed license list
readarray -t ALLOWED_LICENSES < "$LICENSE_FILE"

echo "Allowed licenses:" & printf '%s
' "${ALLOWED_LICENSES[@]}"

# Run license-checker (free npm package)
# Ensure license-checker is installed in repo
npm list -g license-checker >/dev/null 2>&1 || npm i -g license-checker

log "Scanning dependencies for licenses..."
JSON=$(license-checker --production --json)

# Find non‑approved licenses
NON_APPROVED=$(printf '%s
' "$JSON" | jq -r 'to_entries[] | select(.value.licenses as $lic | $lic | not (. | IN($approved[])) ) | .value.name' --argjson approved $(printf '[%s]' "${ALLOWED_LICENSES[@]/#/"}" "${ALLOWED_LICENSES[@]/%/"}") )

if [[ -n "$NON_APPROVED" ]]; then
  log "Non‑approved licenses detected: $NON_APPROVED"
  # Create issue with details
  body=$(printf '*%s*
- %s

%s' "Non‑approved licenses detected" "$(printf '%s
' $NON_APPROVED)" "Please add a license file or update dependencies.")
  curl -s -H "Authorization: token ${GITHUB_TOKEN}" \
    -H "Accept: application/vnd.github+json" \
    -X POST "https://api.github.com/repos/${REPO}/issues" \
    -d "\{"title":"[Automated] License compliance issue","body":"$body"\}" 2>/dev/null
   
echo "Issue created for license violations." >> "$LOG_FILE"
  else
  log "All licenses are approved.")
fi

# Record this run
date +%s > "$STATE_FILE"

log "License check complete."
