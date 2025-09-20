#!/bin/bash

# Automated Merge All - Use existing automation tools for efficient merging
set -e

echo "🚀 Starting Automated Merge All using existing automation tools..."

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Use the existing merge conflict auto-resolver
log "🔧 Using existing merge conflict auto-resolver..."
node automation/merge-conflict-auto-resolver.cjs

# Get cursor branches in smaller batches
log "🔍 Getting cursor branches for batch processing..."
branches=$(git branch -r | grep "cursor/" | sed 's/origin\///' | head -100)
total_branches=$(echo "$branches" | wc -l)

log "📊 Processing first batch of $total_branches branches"

success_count=0
failed_count=0
processed_count=0

for branch in $branches; do
    processed_count=$((processed_count + 1))
    log "🔄 Processing $processed_count/$total_branches: $branch"
    
    # Try to merge
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        log "✅ Merged $branch"
        success_count=$((success_count + 1))
    elif git merge "origin/$branch" --no-edit 2>&1 | grep -q "Already up to date"; then
        log "ℹ️ $branch already up to date"
        success_count=$((success_count + 1))
    else
        log "⚠️ Conflicts in $branch, using auto-resolver..."
        
        # Use the automated conflict resolver
        node automation/merge-conflict-auto-resolver.cjs
        
        # Add resolved files
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
    
    # Push every 20 merges
    if [ $((success_count % 20)) -eq 0 ] && [ $success_count -gt 0 ]; then
        log "🔄 Pushing changes after $success_count successful merges..."
        git push origin main 2>/dev/null || log "⚠️ Push failed"
    fi
    
    # Show progress every 25 branches
    if [ $((processed_count % 25)) -eq 0 ]; then
        log "📊 Progress: $processed_count processed, $success_count merged, $failed_count failed"
    fi
done

# Final push
log "🔄 Final push..."
git push origin main

log "📊 Automated Merge Summary:"
log "✅ Successfully merged: $success_count branches"
log "❌ Failed: $failed_count branches"
log "📋 Total processed: $processed_count branches"
log "🎉 Automated merge batch completed!"

# Continue with next batch if there are more branches
remaining=$(git branch -r | grep "cursor/" | wc -l)
if [ $remaining -gt 0 ]; then
    log "🔄 $remaining branches remaining. Run this script again to continue."
fi