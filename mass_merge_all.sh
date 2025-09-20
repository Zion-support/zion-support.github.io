#!/bin/bash

# Mass Merge All - Process all remaining branches in large batches
set -e

echo "🚀 Starting Mass Merge All - Processing all remaining branches..."

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Use the existing merge conflict auto-resolver
log "🔧 Running conflict auto-resolver..."
node automation/merge-conflict-auto-resolver.cjs

# Get ALL cursor branches
log "🔍 Getting all remaining cursor branches..."
branches=$(git branch -r | grep "cursor/" | sed 's/origin\///')
total_branches=$(echo "$branches" | wc -l)

log "📊 Found $total_branches cursor branches to process"

success_count=0
failed_count=0
processed_count=0
batch_size=200

# Process branches in large batches
while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    processed_count=$((processed_count + 1))
    
    # Only log every 50 branches to reduce output
    if [ $((processed_count % 50)) -eq 0 ]; then
        log "🔄 Processing $processed_count/$total_branches: $branch"
    fi
    
    # Try to merge with conflict resolution
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        success_count=$((success_count + 1))
    elif git merge "origin/$branch" --no-edit 2>&1 | grep -q "Already up to date"; then
        success_count=$((success_count + 1))
    else
        # Use the automated conflict resolver
        node automation/merge-conflict-auto-resolver.cjs
        
        # Add resolved files
        git add . 2>/dev/null || true
        
        if git commit --no-edit 2>/dev/null; then
            success_count=$((success_count + 1))
        else
            git merge --abort 2>/dev/null || true
            failed_count=$((failed_count + 1))
        fi
    fi
    
    # Push every batch
    if [ $((processed_count % batch_size)) -eq 0 ]; then
        log "🔄 Pushing batch after $processed_count branches..."
        git push origin main 2>/dev/null || log "⚠️ Push failed"
        log "📊 Batch summary: $success_count merged, $failed_count failed"
    fi
    
    # Show progress every 500 branches
    if [ $((processed_count % 500)) -eq 0 ]; then
        log "📊 Progress: $processed_count/$total_branches processed"
    fi
    
    # Safety check
    if [ $failed_count -gt 500 ]; then
        log "⚠️ Too many failures ($failed_count), stopping for safety"
        break
    fi
    
done <<< "$branches"

# Final push
log "🔄 Final push..."
git push origin main

log "📊 Mass Merge Summary:"
log "✅ Successfully merged: $success_count branches"
log "❌ Failed: $failed_count branches"
log "📋 Total processed: $processed_count branches"
log "🎉 Mass merge completed!"

# Show remaining branches
remaining=$(git branch -r | grep "cursor/" | wc -l)
log "📊 Remaining branches: $remaining"