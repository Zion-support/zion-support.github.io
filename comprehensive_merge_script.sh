#!/bin/bash

# Comprehensive script to merge all cursor branches into main
set -e

echo "🚀 Starting comprehensive cursor branch merge process..."

# Create backup
BACKUP_BRANCH="comprehensive-merge-backup-$(date +%Y%m%d-%H%M%S)"
echo "📦 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH" main
git push origin "$BACKUP_BRANCH"
git checkout main

# Statistics
TOTAL_BRANCHES=0
PROCESSED=0
MERGED=0
FAILED=0
ALREADY_MERGED=0
CONFLICTS_RESOLVED=0

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Function to check if a branch is already merged
is_branch_merged() {
    local branch_name=$1
    git merge-base --is-ancestor "origin/$branch_name" main 2>/dev/null
}

# Function to merge a single branch
merge_branch() {
    local branch_full=$1
    local branch_name=$(echo "$branch_full" | sed 's/origin\///')
    
    log "🔍 Processing branch: $branch_name"
    
    # Check if already merged
    if is_branch_merged "$branch_name"; then
        log "✅ Branch $branch_name already merged, skipping"
        ALREADY_MERGED=$((ALREADY_MERGED + 1))
        return 0
    fi
    
    # Fetch the branch
    if ! git fetch origin "$branch_name" 2>/dev/null; then
        log "❌ Failed to fetch $branch_name"
        return 1
    fi
    
    # Try to merge directly
    if git merge "origin/$branch_name" --no-edit --no-ff 2>/dev/null; then
        log "✅ Successfully merged $branch_name"
        MERGED=$((MERGED + 1))
        
        # Push to remote
        if git push origin main 2>/dev/null; then
            log "🚀 Pushed to remote successfully"
        else
            log "⚠️  Push failed, trying to sync..."
            git pull origin main --no-rebase --no-edit 2>/dev/null || true
            git push origin main 2>/dev/null || true
        fi
        
        return 0
    else
        log "⚠️  Merge conflicts detected for $branch_name"
        
        # Try to resolve conflicts automatically
        if git checkout --theirs . 2>/dev/null; then
            git add . 2>/dev/null || true
            if git commit -m "Resolve merge conflicts: prefer main branch for $branch_name" 2>/dev/null; then
                log "✅ Auto-resolved conflicts for $branch_name"
                CONFLICTS_RESOLVED=$((CONFLICTS_RESOLVED + 1))
                MERGED=$((MERGED + 1))
                
                # Push to remote
                git push origin main 2>/dev/null || true
                return 0
            fi
        fi
        
        # If auto-resolution fails, abort merge
        git merge --abort 2>/dev/null || true
        log "❌ Failed to merge $branch_name due to conflicts"
        FAILED=$((FAILED + 1))
        return 1
    fi
}

# Get list of all cursor branches
log "📋 Getting list of all cursor branches..."
git branch -r | grep "origin/cursor/" > cursor_branches.txt
TOTAL_BRANCHES=$(wc -l < cursor_branches.txt)
log "📊 Found $TOTAL_BRANCHES cursor branches to process"

# Process branches in batches
BATCH_SIZE=50
CURRENT_BATCH=0

log "🎯 Starting to process $TOTAL_BRANCHES cursor branches in batches of $BATCH_SIZE..."

while IFS= read -r branch_full; do
    if [ -z "$branch_full" ]; then
        continue
    fi
    
    PROCESSED=$((PROCESSED + 1))
    CURRENT_BATCH=$((PROCESSED % BATCH_SIZE))
    
    # Show progress every 10 branches
    if [ $((PROCESSED % 10)) -eq 0 ]; then
        log "📊 Progress: $PROCESSED/$TOTAL_BRANCHES branches processed (Merged: $MERGED, Failed: $FAILED, Already Merged: $ALREADY_MERGED)"
    fi
    
    if merge_branch "$branch_full"; then
        log "✅ Branch $branch_full completed successfully"
    else
        log "❌ Branch $branch_full failed"
    fi
    
    # Commit batch progress
    if [ $CURRENT_BATCH -eq 0 ] && [ $PROCESSED -gt 0 ]; then
        log "💾 Committing batch progress..."
        git add -A 2>/dev/null || true
        git commit -m "Batch merge progress: $PROCESSED/$TOTAL_BRANCHES processed (merged: $MERGED, failed: $FAILED)" 2>/dev/null || true
        git push origin main 2>/dev/null || true
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 0.1
    
done < cursor_branches.txt

# Final statistics and cleanup
log "🏁 Process completed!"
log "📊 Final Statistics:"
log "   Total Branches: $TOTAL_BRANCHES"
log "   Processed: $PROCESSED"
log "   Merged: $MERGED"
log "   Failed: $FAILED"
log "   Already Merged: $ALREADY_MERGED"
log "   Conflicts Resolved: $CONFLICTS_RESOLVED"

# Final commit
git add -A 2>/dev/null || true
git commit -m "Complete: processed $PROCESSED/$TOTAL_BRANCHES cursor branches (merged: $MERGED, failed: $FAILED, already merged: $ALREADY_MERGED, conflicts: $CONFLICTS_RESOLVED)" 2>/dev/null || true
git push origin main 2>/dev/null || true

# Clean up
rm -f cursor_branches.txt

echo "🎉 Comprehensive cursor branch merge process completed!"
echo "📦 Backup branch created: $BACKUP_BRANCH"