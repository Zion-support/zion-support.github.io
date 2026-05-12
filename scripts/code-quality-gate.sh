#!/usr/bin/env bash
# scripts/code-quality-gate.sh - Autonomous code quality enforcement
# Uses free tools: eslint, tsc, audit-ci, curl
# Autonomous: runs via GitHub Actions, blocks merges on failures

set -euo pipefail

REPO_DIR="${REPO_DIR:-$(pwd)}"
LOG_FILE="${HOME}/.hermes/memory/code-quality-gate.log"
TELEGRAM_BOT_TOKEN="${TELEGRAM_BOT_TOKEN:-}"
TELEGRAM_CHAT_ID="${TELEGRAM_CHAT_ID:-8435383377}"
GITHUB_TOKEN="${GITHUB_TOKEN:-}"
PR_NUMBER="${PR_NUMBER:-}"

mkdir -p "$(dirname "$LOG_FILE")"

log() { echo "[$(date -u +"%Y-%m-%dT%H:%M:%SZ")] $1" >> "$LOG_FILE"; }

# Quality checks
FAILED=0

# 1. ESLint (if configured)
if [[ -f "$REPO_DIR/.eslintrc.js" ]] || [[ -f "$REPO_DIR/.eslintrc.json" ]]; then
  if ! npx eslint . --quiet 2>/dev/null; then
    log "❌ ESLint failed"
    FAILED=1
  fi
fi

# 2. TypeScript type check
if [[ -f "$REPO_DIR/tsconfig.json" ]]; then
  if ! npx tsc --noEmit 2>/dev/null; then
    log "❌ TypeScript check failed"
    FAILED=1
  fi
fi

# 3. Security audit
if ! npx audit-ci --high 2>/dev/null; then
  log "❌ Security audit failed"
  FAILED=1
fi

# 4. Test coverage check (if jest configured)
if [[ -f "$REPO_DIR/package.json" ]] && grep -q "jest" package.json; then
  if ! npm test -- --coverage --coverageThreshold='{"global":{"branches":80,"functions":80,"lines":80,"statements":80}}' 2>/dev/null; then
    log "❌ Test coverage below threshold"
    FAILED=1
  fi
fi

# Exit status
if [[ $FAILED -eq 1 ]]; then
  log "❌ Quality gate failed - blocking merge"
  if [[ -n "$TELEGRAM_BOT_TOKEN" ]]; then
    curl -sf -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
      -d "chat_id=${TELEGRAM_CHAT_ID}" \
      -d "text=⚠️ Code Quality Gate FAILED on PR #$PR_NUMBER%0A blocked merge." \
      --max-time 10 || true
  fi
  exit 1
else
  log "✅ All quality gates passed"
  exit 0
fi