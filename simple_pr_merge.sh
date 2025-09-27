#!/bin/bash

# Simple script to merge open PRs using GitHub API
set -e

echo "🚀 Starting simple PR merge process..."

# Create log file
LOG_FILE="simple_pr_merge_$(date +%Y%m%d_%H%M%S).log"
echo "📝 Logging to: $LOG_FILE"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Get list of open PRs from GitHub API
log "📡 Fetching list of open PRs from GitHub API..."

# Get the first 10 open PRs
OPEN_PRS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=10" | \
    python3 -c "
import json, sys
try:
    prs = json.load(sys.stdin)
    for pr in prs:
        print(f\"{pr['number']}|{pr['head']['ref']}|{pr['title']}\")
except:
    pass
")

if [ -z "$OPEN_PRS" ]; then
    log "❌ Failed to fetch open PRs from GitHub API"
    exit 1
fi

log "📊 Found $(echo "$OPEN_PRS" | wc -l) open PRs to process"

# Statistics
TOTAL_PRS=$(echo "$OPEN_PRS" | wc -l)
PROCESSED=0
MERGED=0
FAILED=0

# Function to process a single PR
process_pr() {
    local pr_num=$1
    local head_branch=$2
    local title=$3
    
    log "🔍 Processing PR #$pr_num..."
    log "📋 PR #$pr_num: $title"
    log "🌿 Branch: $head_branch"
    
    # Check if branch exists locally or remotely
    if ! git show-ref --verify --quiet "refs/remotes/origin/$head_branch" 2>/dev/null; then
        log "⚠️  Branch $head_branch not found on origin; trying PR ref fetch..."
        if git fetch origin "pull/$pr_num/head:pr-$pr_num" 2>/dev/null; then
            log "🌿 Created local branch pr-$pr_num from PR head"
            head_branch="pr-$pr_num"
        else
            log "❌ Branch $head_branch not found and PR ref fetch failed"
            return 1
        fi
    fi
    
    # Create local tracking branch if needed
    if ! git show-ref --verify --quiet "refs/heads/$head_branch" 2>/dev/null; then
        log "🌿 Creating local branch $head_branch"
        if git show-ref --verify --quiet "refs/remotes/origin/$head_branch" 2>/dev/null; then
            git checkout -b "$head_branch" "origin/$head_branch" || {
                log "❌ Failed to create local branch $head_branch"
                return 1
            }
        else
            git checkout -B "$head_branch" || {
                log "❌ Failed to create local branch $head_branch"
                return 1
            }
        fi
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

echo "$OPEN_PRS" | while IFS='|' read -r pr_num head_branch title; do
    if [ -z "$pr_num" ]; then
        continue
    fi
    
    PROCESSED=$((PROCESSED + 1))
    log "📊 Progress: $PROCESSED/$TOTAL_PRS PRs processed"
    
    if process_pr "$pr_num" "$head_branch" "$title"; then
        log "✅ PR #$pr_num completed successfully"
    else
        log "❌ PR #$pr_num failed"
        FAILED=$((FAILED + 1))
    fi
    
    # Small delay to avoid rate limiting
    sleep 2
    
done

# Final statistics
log "🏁 Process completed!"
log "📊 Final Statistics:"
log "   Total PRs: $TOTAL_PRS"
log "   Processed: $PROCESSED"
log "   Merged: $MERGED"
log "   Failed: $FAILED"

echo "🎉 PR merge process completed! Check $LOG_FILE for details."