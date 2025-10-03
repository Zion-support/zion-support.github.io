#!/bin/bash

# Script to merge our specific PR: cursor/create-and-deploy-new-content-26bc

set -e

echo "🚀 Merging specific PR: cursor/create-and-deploy-new-content-26bc"
echo "================================================================="

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Ensure we're on main branch
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ]; then
    log "Switching to main branch..."
    git checkout main
fi

# Pull latest main
log "Updating main branch..."
git fetch origin
git reset --hard origin/main

# Our branch name
BRANCH_NAME="cursor/create-and-deploy-new-content-26bc"

log "Attempting to merge branch: $BRANCH_NAME"

# Try to merge our branch
if git merge origin/$BRANCH_NAME --no-ff -m "Merge PR: $BRANCH_NAME - Add comprehensive new content and enhanced frontend advertising"; then
    log "✅ Successfully merged $BRANCH_NAME"
    
    # Push to main
    log "Pushing to origin/main..."
    git push origin main
    
    log "🎉 Successfully merged and pushed $BRANCH_NAME to main!"
    
else
    log "⚠️  Merge conflict detected. Attempting resolution..."
    
    # Check what files have conflicts
    git status --porcelain | grep "^UU\|^AA\|^DD" > /tmp/conflict_files.txt
    
    if [ -s /tmp/conflict_files.txt ]; then
        log "Found $(wc -l < /tmp/conflict_files.txt) files with conflicts:"
        cat /tmp/conflict_files.txt
        
        # Strategy: Accept our changes (from our branch) since we want to keep our new content
        log "Resolving conflicts by accepting our branch changes..."
        
        # Accept our changes for all conflicted files
        git checkout --theirs .
        git add .
        
        # Commit the resolution
        if git commit -m "Resolve merge conflicts by accepting new content changes"; then
            log "✅ Conflicts resolved successfully"
            
            # Push to main
            log "Pushing resolved changes to origin/main..."
            git push origin main
            
            log "🎉 Successfully resolved conflicts and pushed to main!"
        else
            log "❌ Failed to commit conflict resolution"
            git status
            exit 1
        fi
    else
        log "No conflict files found. Checking git status..."
        git status
        exit 1
    fi
fi

log "✅ Merge process completed successfully!"