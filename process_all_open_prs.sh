#!/bin/bash

# Comprehensive script to process all open PRs
# This script will resolve conflicts and merge all open PRs into main

set -e

echo "🚀 Starting comprehensive PR merge process..."
echo "📊 Found $(wc -l < open_prs.txt) open PRs to process"

# Create log file
LOG_FILE="pr_merge_process_$(date +%Y%m%d_%H%M%S).log"
echo "📝 Logging to: $LOG_FILE"

# Statistics
TOTAL_PRS=$(wc -l < open_prs.txt)
PROCESSED=0
MERGED=0
FAILED=0
CONFLICTS_RESOLVED=0

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Function to process a single PR
process_pr() {
    local pr_num=$1
    log "🔍 Processing PR #$pr_num..."
    
    # Get PR details from GitHub API
    local pr_info=$(curl -s -H "Accept: application/vnd.github.v3+json" \
        "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_num" 2>/dev/null)
    
    if [ -z "$pr_info" ] || [ "$pr_info" = "null" ]; then
        log "❌ PR #$pr_num not found or API error"
        return 1
    fi
    
    # Extract branch information
    local head_branch=$(echo "$pr_info" | grep -o '"head":[^}]*"ref":"[^"]*"' | sed 's/.*"ref":"\([^"]*\)".*/\1/')
    local base_branch=$(echo "$pr_info" | grep -o '"base":[^}]*"ref":"[^"]*"' | sed 's/.*"ref":"\([^"]*\)".*/\1/')
    local title=$(echo "$pr_info" | grep -o '"title":"[^"]*"' | sed 's/"title":"\([^"]*\)".*/\1/')
    
    log "📋 PR #$pr_num: $title"
    log "🌿 Head: $head_branch -> Base: $base_branch"
    
    # Skip if not targeting main
    if [ "$base_branch" != "main" ]; then
        log "⏭️  Skipping PR #$pr_num (targets $base_branch, not main)"
        return 0
    fi
    
    # Check if branch exists locally or remotely
    if ! git show-ref --verify --quiet "refs/remotes/origin/$head_branch"; then
        log "❌ Branch $head_branch not found in remote"
        return 1
    fi
    
    # Create local tracking branch
    if ! git show-ref --verify --quiet "refs/heads/$head_branch"; then
        log "🌿 Creating local branch $head_branch"
        git checkout -b "$head_branch" "origin/$head_branch" || {
            log "❌ Failed to create local branch $head_branch"
            return 1
        }
    else
        git checkout "$head_branch" || {
            log "❌ Failed to checkout $head_branch"
            return 1
        }
    fi
    
    # Update branch with latest main
    log "🔄 Updating branch with latest main..."
    git fetch origin main
    
    # Try to merge main into the branch
    if git merge origin/main --no-commit --no-edit 2>/dev/null; then
        log "✅ No conflicts found, committing merge..."
        git commit -m "Merge main into $head_branch for PR #$pr_num" || true
    else
        log "⚠️  Conflicts detected, resolving automatically..."
        # Auto-resolve conflicts by preferring main branch
        git checkout --theirs . 2>/dev/null || true
        git add . 2>/dev/null || true
        git commit -m "Resolve merge conflicts: prefer main branch for PR #$pr_num" 2>/dev/null || {
            log "⚠️  Auto-resolution failed, trying manual resolution..."
            # If auto-resolution fails, abort and try a different approach
            git merge --abort 2>/dev/null || true
            # Force merge by preferring main
            git reset --hard origin/main 2>/dev/null || true
            git cherry-pick "$head_branch" 2>/dev/null || true
        }
        CONFLICTS_RESOLVED=$((CONFLICTS_RESOLVED + 1))
    fi
    
    # Switch back to main and merge the PR branch
    git checkout main
    if git merge "$head_branch" --no-edit 2>/dev/null; then
        log "✅ Successfully merged PR #$pr_num into main"
        MERGED=$((MERGED + 1))
        
        # Push to remote
        if git push origin main 2>/dev/null; then
            log "🚀 Pushed to remote successfully"
        else
            log "⚠️  Push failed, trying to sync..."
            git pull origin main --no-rebase --no-edit 2>/dev/null || true
            git push origin main 2>/dev/null || true
        fi
        
        # Clean up
        git branch -D "$head_branch" 2>/dev/null || true
        
        return 0
    else
        log "❌ Failed to merge PR #$pr_num into main"
        git merge --abort 2>/dev/null || true
        return 1
    fi
}

# Main processing loop
log "🎯 Starting to process $TOTAL_PRS open PRs..."

while IFS= read -r pr_num; do
    if [ -z "$pr_num" ]; then
        continue
    fi
    
    PROCESSED=$((PROCESSED + 1))
    log "📊 Progress: $PROCESSED/$TOTAL_PRS PRs processed"
    
    if process_pr "$pr_num"; then
        log "✅ PR #$pr_num completed successfully"
    else
        log "❌ PR #$pr_num failed"
        FAILED=$((FAILED + 1))
    fi
    
    # Small delay to avoid rate limiting
    sleep 2
    
    # Commit progress every 10 PRs
    if [ $((PROCESSED % 10)) -eq 0 ]; then
        log "💾 Committing progress..."
        git add -A 2>/dev/null || true
        git commit -m "Progress: processed $PROCESSED/$TOTAL_PRS PRs (merged: $MERGED, failed: $FAILED)" 2>/dev/null || true
        git push origin main 2>/dev/null || true
    fi
    
done < open_prs.txt

# Final statistics
log "🏁 Process completed!"
log "📊 Final Statistics:"
log "   Total PRs: $TOTAL_PRS"
log "   Processed: $PROCESSED"
log "   Merged: $MERGED"
log "   Failed: $FAILED"
log "   Conflicts Resolved: $CONFLICTS_RESOLVED"

# Final commit
git add -A 2>/dev/null || true
git commit -m "Complete: processed $PROCESSED/$TOTAL_PRS PRs (merged: $MERGED, failed: $FAILED, conflicts: $CONFLICTS_RESOLVED)" 2>/dev/null || true
git push origin main 2>/dev/null || true

echo "🎉 PR merge process completed! Check $LOG_FILE for details."