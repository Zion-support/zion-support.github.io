#!/bin/bash

# Aggressive Merge All - Process all remaining branches with aggressive conflict resolution
set -e

echo "🚀 Starting Aggressive Merge All..."

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Get ALL cursor branches
log "🔍 Getting all cursor branches..."
branches=$(git branch -r | grep "cursor/" | sed 's/origin\///')

total_branches=$(echo "$branches" | wc -l)
log "📊 Found $total_branches cursor branches to process"

success_count=0
failed_count=0
conflict_count=0
processed_count=0
skipped_count=0

for branch in $branches; do
    processed_count=$((processed_count + 1))
    log "🔄 Processing $processed_count/$total_branches: $branch"
    
    # Skip if branch is very old or likely to cause issues
    if [[ "$branch" == *"old"* ]] || [[ "$branch" == *"backup"* ]] || [[ "$branch" == *"temp"* ]]; then
        log "⏭️ Skipping potentially problematic branch: $branch"
        skipped_count=$((skipped_count + 1))
        continue
    fi
    
    # Try to merge with aggressive conflict resolution
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        log "✅ Merged $branch"
        success_count=$((success_count + 1))
    elif git merge "origin/$branch" --no-edit 2>&1 | grep -q "Already up to date"; then
        log "ℹ️ $branch already up to date"
        success_count=$((success_count + 1))
    else
        log "⚠️ Conflicts in $branch, resolving aggressively..."
        conflict_count=$((conflict_count + 1))
        
        # Ultra aggressive conflict resolution
        # 1. Get conflicted files
        conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$conflicted_files" ]; then
            log "🔧 Resolving conflicts in: $conflicted_files"
            
            # For each conflicted file, use aggressive resolution
            for file in $conflicted_files; do
                if [ -f "$file" ]; then
                    # For most files, prefer incoming changes (theirs)
                    git checkout --theirs "$file" 2>/dev/null || true
                    git add "$file" 2>/dev/null || true
                fi
            done
            
            # Try to commit the resolved conflicts
            if git commit --no-edit 2>/dev/null; then
                log "✅ Resolved conflicts and merged $branch"
                success_count=$((success_count + 1))
            else
                # If commit fails, try to add all files and commit
                git add . 2>/dev/null || true
                if git commit --no-edit 2>/dev/null; then
                    log "✅ Resolved conflicts and merged $branch (with all files)"
                    success_count=$((success_count + 1))
                else
                    log "❌ Failed to resolve conflicts in $branch"
                    git merge --abort 2>/dev/null || true
                    failed_count=$((failed_count + 1))
                fi
            fi
        else
            # No conflicts but merge failed, try to abort and continue
            git merge --abort 2>/dev/null || true
            failed_count=$((failed_count + 1))
        fi
    fi
    
    # Push every 25 merges for efficiency
    if [ $((success_count % 25)) -eq 0 ] && [ $success_count -gt 0 ]; then
        log "🔄 Pushing changes after $success_count successful merges..."
        git push origin main 2>/dev/null || log "⚠️ Push failed, continuing..."
    fi
    
    # Show progress every 100 branches
    if [ $((processed_count % 100)) -eq 0 ]; then
        log "📊 Progress: $processed_count processed, $success_count merged, $conflict_count conflicts, $failed_count failed, $skipped_count skipped"
    fi
    
    # Safety check - if too many failures, stop
    if [ $failed_count -gt 100 ]; then
        log "⚠️ Too many failures ($failed_count), stopping for safety"
        break
    fi
done

# Final push
log "🔄 Final push..."
git push origin main

log "📊 Aggressive Merge All Summary:"
log "✅ Successfully merged: $success_count branches"
log "⚠️ Conflicts resolved: $conflict_count branches"
log "❌ Failed: $failed_count branches"
log "⏭️ Skipped: $skipped_count branches"
log "📋 Total processed: $processed_count branches"
log "🎉 Aggressive merge all completed!"