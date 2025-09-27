#!/bin/bash

# Script to merge cursor branches into main
set -e

echo "🚀 Starting cursor branch merge process..."

# Create log file
LOG_FILE="cursor_branch_merge_$(date +%Y%m%d_%H%M%S).log"
echo "📝 Logging to: $LOG_FILE"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Get list of cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | sed 's/origin\///' | head -20)
TOTAL_BRANCHES=$(echo "$CURSOR_BRANCHES" | wc -l)
PROCESSED=0
MERGED=0
FAILED=0

log "📊 Found $TOTAL_BRANCHES cursor branches to process"

# Function to process a single branch
process_branch() {
    local branch_name=$1
    log "🔍 Processing branch: $branch_name..."
    
    # Create local tracking branch
    if ! git show-ref --verify --quiet "refs/heads/$branch_name" 2>/dev/null; then
        log "🌿 Creating local branch $branch_name"
        git checkout -b "$branch_name" "origin/$branch_name" || {
            log "❌ Failed to create local branch $branch_name"
            return 1
        }
    else
        git checkout "$branch_name" || {
            log "❌ Failed to checkout $branch_name"
            return 1
        }
    fi
    
    # Update branch with latest main
    log "🔄 Updating branch with latest main..."
    git fetch origin main
    
    # Try to merge main into the branch
    if git merge origin/main --no-commit --no-edit 2>/dev/null; then
        log "✅ No conflicts found, committing merge..."
        git commit -m "Merge main into $branch_name" || true
    else
        log "⚠️  Conflicts detected, resolving automatically..."
        # Auto-resolve conflicts by preferring main branch
        git checkout --theirs . 2>/dev/null || true
        git add . 2>/dev/null || true
        git commit -m "Resolve merge conflicts: prefer main branch for $branch_name" 2>/dev/null || {
            log "⚠️  Auto-resolution failed, trying manual resolution..."
            # If auto-resolution fails, abort and try a different approach
            git merge --abort 2>/dev/null || true
            # Force merge by preferring main
            git reset --hard origin/main 2>/dev/null || true
            git cherry-pick "$branch_name" 2>/dev/null || true
        }
    fi
    
    # Switch back to main and merge the branch
    git checkout main
    if git merge "$branch_name" --no-edit 2>/dev/null; then
        log "✅ Successfully merged $branch_name into main"
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
        git branch -D "$branch_name" 2>/dev/null || true
        
        return 0
    else
        log "❌ Failed to merge $branch_name into main"
        git merge --abort 2>/dev/null || true
        return 1
    fi
}

# Main processing loop
log "🎯 Starting to process $TOTAL_BRANCHES cursor branches..."

echo "$CURSOR_BRANCHES" | while IFS= read -r branch_name; do
    if [ -z "$branch_name" ]; then
        continue
    fi
    
    PROCESSED=$((PROCESSED + 1))
    log "📊 Progress: $PROCESSED/$TOTAL_BRANCHES branches processed"
    
    if process_branch "$branch_name"; then
        log "✅ Branch $branch_name completed successfully"
    else
        log "❌ Branch $branch_name failed"
        FAILED=$((FAILED + 1))
    fi
    
    # Small delay to avoid rate limiting
    sleep 1
    
    # Commit progress every 5 branches
    if [ $((PROCESSED % 5)) -eq 0 ]; then
        log "💾 Committing progress..."
        git add -A 2>/dev/null || true
        git commit -m "Progress: processed $PROCESSED/$TOTAL_BRANCHES branches (merged: $MERGED, failed: $FAILED)" 2>/dev/null || true
        git push origin main 2>/dev/null || true
    fi
    
done

# Final statistics
log "🏁 Process completed!"
log "📊 Final Statistics:"
log "   Total Branches: $TOTAL_BRANCHES"
log "   Processed: $PROCESSED"
log "   Merged: $MERGED"
log "   Failed: $FAILED"

echo "🎉 Cursor branch merge process completed! Check $LOG_FILE for details."