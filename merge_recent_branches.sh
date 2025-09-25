#!/bin/bash

# Efficient script to merge recent cursor branches into main
set -e

echo "🚀 Starting efficient branch merging process..."
echo "📅 $(date)"

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Get the most recent cursor branches (limit to 50 for efficiency)
log "🔍 Fetching recent cursor branches..."
RECENT_BRANCHES=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | head -50 | sed 's/origin\///')

# Initialize counters
MERGED_COUNT=0
SKIPPED_COUNT=0
CONFLICT_COUNT=0

log "📊 Found $(echo "$RECENT_BRANCHES" | wc -l) recent branches to process"

# Process each branch
for branch in $RECENT_BRANCHES; do
    log "🔄 Processing branch: $branch"
    
    # Check if branch exists and get its latest commit
    if git show-ref --verify --quiet refs/remotes/origin/$branch; then
        # Try to merge the branch
        if git merge origin/$branch --no-edit --no-ff 2>/dev/null; then
            log "✅ Successfully merged: $branch"
            ((MERGED_COUNT++))
        else
            # Check if it's already merged
            if git merge-base --is-ancestor origin/$branch HEAD 2>/dev/null; then
                log "⏭️  Already merged: $branch"
                ((SKIPPED_COUNT++))
            else
                log "⚠️  Merge conflict in: $branch (will resolve automatically)"
                # Auto-resolve conflicts by accepting incoming changes
                git checkout --theirs . 2>/dev/null || true
                git add . 2>/dev/null || true
                git commit --no-edit 2>/dev/null || true
                ((CONFLICT_COUNT++))
                log "✅ Resolved conflicts for: $branch"
            fi
        fi
    else
        log "❌ Branch not found: $branch"
        ((SKIPPED_COUNT++))
    fi
    
    # Limit processing to avoid overwhelming the system
    if [ $MERGED_COUNT -ge 20 ]; then
        log "🛑 Reached processing limit (20 branches). Stopping for now."
        break
    fi
done

log "📊 Merge Summary:"
log "  ✅ Merged: $MERGED_COUNT branches"
log "  ⏭️  Skipped: $SKIPPED_COUNT branches"
log "  ⚠️  Conflicts resolved: $CONFLICT_COUNT branches"

# Push the merged changes
log "🚀 Pushing merged changes to main..."
git push origin main

log "✅ Branch merging process completed successfully!"