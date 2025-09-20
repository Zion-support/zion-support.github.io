#!/bin/bash

# Quick Merge Recent - Focus on the most recent 50 branches
set -e

echo "🚀 Starting Quick Merge of Recent Branches..."

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Get the most recent 50 cursor branches
log "🔍 Getting most recent 50 cursor branches..."
branches=$(git branch -r | grep "cursor/" | tail -50 | sed 's/origin\///')

success_count=0
failed_count=0
processed_count=0

for branch in $branches; do
    processed_count=$((processed_count + 1))
    log "🔄 Processing $processed_count/50: $branch"
    
    # Try to merge with conflict resolution
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        log "✅ Merged $branch"
        success_count=$((success_count + 1))
    elif git merge "origin/$branch" --no-edit 2>&1 | grep -q "Already up to date"; then
        log "ℹ️ $branch already up to date"
        success_count=$((success_count + 1))
    else
        log "⚠️ Conflicts in $branch, resolving..."
        
        # Quick conflict resolution - keep incoming changes
        git checkout --theirs . 2>/dev/null || true
        git add . 2>/dev/null || true
        
        if git commit --no-edit 2>/dev/null; then
            log "✅ Resolved conflicts and merged $branch"
            success_count=$((success_count + 1))
        else
            log "❌ Failed to resolve $branch"
            git merge --abort 2>/dev/null || true
            failed_count=$((failed_count + 1))
        fi
    fi
    
    # Push every 5 merges
    if [ $((success_count % 5)) -eq 0 ] && [ $success_count -gt 0 ]; then
        log "🔄 Pushing changes..."
        git push origin main 2>/dev/null || log "⚠️ Push failed"
    fi
done

# Final push
log "🔄 Final push..."
git push origin main

log "📊 Quick Merge Summary:"
log "✅ Successfully merged: $success_count branches"
log "❌ Failed: $failed_count branches"
log "📋 Total processed: $processed_count branches"
log "🎉 Quick merge completed!"