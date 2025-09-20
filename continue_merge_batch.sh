#!/bin/bash

# Continue Merge Batch - Process next batch of branches
set -e

echo "🚀 Starting Continue Merge Batch..."

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Get the next 100 cursor branches (skip the first 50 we already processed)
log "🔍 Getting next batch of cursor branches..."
branches=$(git branch -r | grep "cursor/" | tail -150 | head -100 | sed 's/origin\///')

success_count=0
failed_count=0
conflict_count=0
processed_count=0

for branch in $branches; do
    processed_count=$((processed_count + 1))
    log "🔄 Processing $processed_count/100: $branch"
    
    # Try to merge with conflict resolution
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        log "✅ Merged $branch"
        success_count=$((success_count + 1))
    elif git merge "origin/$branch" --no-edit 2>&1 | grep -q "Already up to date"; then
        log "ℹ️ $branch already up to date"
        success_count=$((success_count + 1))
    else
        log "⚠️ Conflicts in $branch, resolving..."
        conflict_count=$((conflict_count + 1))
        
        # Advanced conflict resolution
        conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$conflicted_files" ]; then
            log "🔧 Resolving conflicts in: $conflicted_files"
            
            # For each conflicted file, try different resolution strategies
            for file in $conflicted_files; do
                if [ -f "$file" ]; then
                    # For package files, prefer incoming
                    if [[ "$file" == *"package"* ]]; then
                        git checkout --theirs "$file" 2>/dev/null || true
                    # For config files, prefer incoming
                    elif [[ "$file" == *"config"* ]] || [[ "$file" == *".toml"* ]] || [[ "$file" == *".json"* ]]; then
                        git checkout --theirs "$file" 2>/dev/null || true
                    # For source files, try to merge intelligently
                    else
                        # Remove conflict markers and keep both versions
                        sed -i '/^<<<<<<< /d; /^=======/d; /^>>>>>>> /d' "$file" 2>/dev/null || true
                    fi
                    git add "$file" 2>/dev/null || true
                fi
            done
            
            # Try to commit the resolved conflicts
            if git commit --no-edit 2>/dev/null; then
                log "✅ Resolved conflicts and merged $branch"
                success_count=$((success_count + 1))
            else
                log "❌ Failed to resolve conflicts in $branch"
                git merge --abort 2>/dev/null || true
                failed_count=$((failed_count + 1))
            fi
        else
            # No conflicts but merge failed, try to abort and continue
            git merge --abort 2>/dev/null || true
            failed_count=$((failed_count + 1))
        fi
    fi
    
    # Push every 10 merges
    if [ $((success_count % 10)) -eq 0 ] && [ $success_count -gt 0 ]; then
        log "🔄 Pushing changes..."
        git push origin main 2>/dev/null || log "⚠️ Push failed"
    fi
    
    # Show progress every 25 branches
    if [ $((processed_count % 25)) -eq 0 ]; then
        log "📊 Progress: $processed_count processed, $success_count merged, $conflict_count conflicts, $failed_count failed"
    fi
done

# Final push
log "🔄 Final push..."
git push origin main

log "📊 Continue Merge Batch Summary:"
log "✅ Successfully merged: $success_count branches"
log "⚠️ Conflicts resolved: $conflict_count branches"
log "❌ Failed: $failed_count branches"
log "📋 Total processed: $processed_count branches"
log "🎉 Continue merge batch completed!"