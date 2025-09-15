#!/bin/bash
set -e

# Minimal smart PR merge script
# - Creates a backup branch
# - Fetches a small batch of open PR heads
# - Merges those with differences into main (skips others)
# - Aborts on conflicts for that PR and continues

BATCH_SIZE=${BATCH_SIZE:-10}
LOG_FILE="smart-merge-log-$(date +%Y%m%d-%H%M%S).txt"
BACKUP_BRANCH="smart-merge-backup-$(date +%Y%m%d-%H%M%S)"

log() { echo "$(date '+%Y-%m-%d %H:%M:%S') - $*" | tee -a "$LOG_FILE"; }

log "🚀 Starting minimal smart PR merge process"
log "⏰ Started at: $(date)"
log "---"

# Create backup branch off current main
log "🔒 Creating backup branch: $BACKUP_BRANCH"
 git checkout -q main
 git pull -q --rebase origin main || true
 git checkout -q -b "$BACKUP_BRANCH"
 git push -q origin "$BACKUP_BRANCH" || true
 git checkout -q main

SUCCESS=0
FAILED=0
SKIPPED=0
TOTAL=0

log "📋 Listing open PR heads from origin (limit: $BATCH_SIZE)"
PR_HEADS=$(git ls-remote --refs origin 'pull/*/head' | awk '{print $2}' | head -n "$BATCH_SIZE")

if [ -z "$PR_HEADS" ]; then
  log "ℹ️  No PR heads found. Exiting."
  exit 0
fi

for ref in $PR_HEADS; do
  TOTAL=$((TOTAL+1))
  pr_number=$(echo "$ref" | sed -E 's#refs/pull/([0-9]+)/head#\1#')
  tmp_branch="tmp-pr-$pr_number"
  log "🔄 Processing PR #$pr_number ($ref)"

  # Fetch PR head into a local temp branch
  if ! git fetch -q origin "$ref":"$tmp_branch"; then
    log "❌ Fetch failed for PR #$pr_number"
    FAILED=$((FAILED+1))
    continue
  fi

  # Skip if no differences vs main
  if git diff --quiet main.."$tmp_branch"; then
    log "⏭️  No differences vs main for PR #$pr_number, skipping"
    SKIPPED=$((SKIPPED+1))
    git branch -D "$tmp_branch" >/dev/null 2>&1 || true
    continue
  fi

  # Try a non-ff, non-commit merge (to detect conflicts), then commit
  if git merge --no-ff --no-commit "$tmp_branch" 2>/dev/null; then
    git commit -q -m "Merge PR #$pr_number via automation"
    SUCCESS=$((SUCCESS+1))
    log "✅ Merged PR #$pr_number"
  else
    log "⚠️  Conflicts for PR #$pr_number, aborting merge"
    git merge --abort || true
    FAILED=$((FAILED+1))
  fi

  # Cleanup temp branch
  git branch -D "$tmp_branch" >/dev/null 2>&1 || true

  # Push every 3 successful merges
  if [ $((SUCCESS % 3)) -eq 0 ] && [ $SUCCESS -gt 0 ]; then
    log "💾 Pushing progress to origin/main"
    git push -q origin main || true
  fi

done

log "💾 Final push to origin/main"
 git push -q origin main || true

log "🎉 Merge run complete"
log "📊 Summary: SUCCESS=$SUCCESS FAILED=$FAILED SKIPPED=$SKIPPED TOTAL=$TOTAL"
log "🔒 Backup branch: $BACKUP_BRANCH"
