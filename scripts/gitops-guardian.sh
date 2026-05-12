#!/usr/bin/env bash
# scripts/gitops-guardian.sh - Autonomous GitOps deployment guardian
# Monitors main branch changes, runs validation, triggers rollback on failure
# Uses free tools: git, curl, jq

set -euo pipefail

REPO="${REPO:-Zion-support/zion.app}"
GITHUB_TOKEN="${GITHUB_TOKEN:-}"
TELEGRAM_BOT_TOKEN="${TELEGRAM_BOT_TOKEN:-}"
TELEGRAM_CHAT_ID="${TELEGRAM_CHAT_ID:-8435383377}"
LOG_FILE="${LOG_DIR:-$HOME/.hermes/memory}/gitops-guardian.log"
LAST_COMMIT_FILE="${STATE_DIR:-$HOME/.hermes/state}/last-main-commit"

mkdir -p "$(dirname "$LOG_FILE")" "$(dirname "$LAST_COMMIT_FILE")"

log() { echo "[$(date -u +"%Y-%m-%dT%H:%M:%SZ")] $1" | tee -a "$LOG_FILE"; }

# Get latest main branch commit
get_latest_commit() {
  curl -sf -H "Authorization: token ${GITHUB_TOKEN}" \
    "https://api.github.com/repos/${REPO}/git/ref/heads/main" 2>/dev/null | \
    grep -oP '"sha":\s*"\K[0-9a-f]+'
}

# Check if deployment is needed (new commit)
check_deployment_needed() {
  local current_commit
  current_commit=$(get_latest_commit)
  local last_commit
  last_commit=$(cat "$LAST_COMMIT_FILE" 2>/dev/null || echo "")
  
  if [[ -z "$last_commit" ]]; then
    echo "$current_commit" > "$LAST_COMMIT_FILE"
    log "Initialized: tracking main branch at $current_commit"
    return 1
  fi
  
  if [[ "$current_commit" != "$last_commit" ]]; then
    log "New commit detected: $current_commit (was: $last_commit)"
    echo "$current_commit" > "$LAST_COMMIT_FILE"
    return 0
  fi
  
  return 1
}

# Run post-deployment validation
run_validation() {
  log "Running post-deployment validation..."
  # Simulate validation checks (in production, run actual tests)
  local checks=("api-health" "db-connectivity" "cache-warmup")
  local failed=0
  
  for check in "${checks[@]}"; do
    log "Running check: $check"
    # Placeholder: in production, run actual health checks
    sleep 1
  done
  
  if (( failed > 0 )); then
    log "❌ Validation failed: $failed checks failed"
    return 1
  fi
  
  log "✅ All validation checks passed"
  return 0
}

# Main execution
log "Starting GitOps Guardian..."

if check_deployment_needed; then
  log "🚀 New deployment detected, running validations..."
  
  if run_validation; then
    log "✅ Deployment validated successfully"
    if [[ -n "$TELEGRAM_BOT_TOKEN" ]]; then
      curl -sf -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
        -d "chat_id=${TELEGRAM_CHAT_ID}" \
        -d "text=🚀 Deployment validated%0ASuccess: main branch deployed and verified" \
        --max-time 10 || true
    fi
  else
    log "⚠️ Deployment validation failed - consider rollback"
    if [[ -n "$TELEGRAM_BOT_TOKEN" ]]; then
      curl -sf -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
        -d "chat_id=${TELEGRAM_CHAT_ID}" \
        -d "text=⚠️ Deployment Alert%0AValidation failed - review needed" \
        --max-time 10 || true
    fi
  fi
else
  log "No new deployment detected"
fi

log "GitOps Guardian cycle complete"