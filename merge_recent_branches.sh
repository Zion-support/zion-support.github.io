#!/bin/bash

echo "🚀 Starting selective branch merge process..."
echo "⏰ $(date)"

# Function to log with timestamp
log() {
    echo "[$(date '+%H:%M:%S')] $1"
}

# Ensure we're on main branch
log "📍 Switching to main branch..."
git checkout main

# Pull latest changes
log "📥 Pulling latest changes from origin..."
git pull origin main

# Get the most recent branches (limit to 5 for efficiency)
log "🔍 Finding most recent cursor branches..."
recent_branches=($(git branch -r | grep "cursor/" | grep -v "HEAD" | tail -5 | sed 's|origin/||'))

log "📋 Processing ${#recent_branches[@]} recent branches:"
for branch in "${recent_branches[@]}"; do
    echo "  - $branch"
done

# Process each recent branch
merged_count=0
conflict_count=0

for branch in "${recent_branches[@]}"; do
    log "🔄 Processing branch: $branch"
    
    # Check if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        log "⏭️  Branch $branch is already merged, skipping"
        continue
    fi
    
    # Create local tracking branch
    git checkout -b "$branch" "origin/$branch" 2>/dev/null || {
        git checkout "$branch" 2>/dev/null || {
            log "❌ Failed to checkout branch $branch"
            continue
        }
    }
    
    # Switch back to main for merge
    git checkout main
    
    # Attempt to merge
    log "🔀 Attempting to merge $branch into main..."
    if git merge "$branch" --no-edit 2>/dev/null; then
        log "✅ Successfully merged $branch"
        ((merged_count++))
        
        # Push the merge
        if git push origin main 2>/dev/null; then
            log "📤 Pushed merge to origin/main"
        else
            log "⚠️  Failed to push merge to origin"
        fi
        
        # Clean up local branch
        git branch -d "$branch" 2>/dev/null
    else
        log "⚠️  Merge conflict detected for $branch"
        ((conflict_count++))
        
        # Attempt simple conflict resolution
        log "🤖 Attempting automatic conflict resolution..."
        
        # Accept ours for package files, theirs for source files
        git checkout --ours package*.json 2>/dev/null
        git checkout --theirs src/ 2>/dev/null
        git checkout --theirs pages/ 2>/dev/null
        git checkout --theirs components/ 2>/dev/null
        
        git add . 2>/dev/null
        
        # Try to commit the resolution
        if git commit --no-edit 2>/dev/null; then
            log "✅ Successfully resolved conflicts for $branch"
            ((merged_count++))
            
            # Push the resolved merge
            if git push origin main 2>/dev/null; then
                log "📤 Pushed resolved merge to origin/main"
            fi
            
            # Clean up local branch
            git branch -d "$branch" 2>/dev/null
        else
            log "❌ Failed to resolve conflicts automatically for $branch"
            git merge --abort 2>/dev/null
        fi
    fi
    
    # Ensure we're back on main
    git checkout main 2>/dev/null
done

# Summary
log "🎉 Selective branch merge completed!"
log "📊 Summary:"
log "   Branches processed: ${#recent_branches[@]}"
log "   Successfully merged: $merged_count"
log "   Had conflicts: $conflict_count"

# Check current status
log "📍 Current repository status:"
git status --short

echo "🚀 Selective branch merge process completed!"