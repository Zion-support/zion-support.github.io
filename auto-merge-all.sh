#!/bin/bash

# Comprehensive PR and branch merge script
# This script handles merging all open PRs and branches into main

set -e

echo "🚀 Starting comprehensive merge process..."

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Function to safely execute git commands
safe_git() {
    local cmd="$1"
    log "Executing: git $cmd"
    
    if git $cmd 2>/dev/null; then
        log "✅ Success: git $cmd"
        return 0
    else
        log "⚠️ Warning: git $cmd failed"
        return 1
    fi
}

# Function to resolve merge conflicts
resolve_conflicts() {
    local branch="$1"
    log "🔧 Attempting to resolve conflicts for $branch"
    
    # Check if there are actual conflicts
    if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
        log "Found merge conflicts, attempting resolution..."
        
        # Try to resolve by taking the incoming changes (theirs)
        git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | while read file; do
            if [ -f "$file" ]; then
                log "Resolving conflict in: $file"
                git checkout --theirs "$file" 2>/dev/null || true
                git add "$file" 2>/dev/null || true
            fi
        done
        
        # Try to commit the resolution
        if git commit --no-edit 2>/dev/null; then
            log "✅ Conflicts resolved for $branch"
            return 0
        else
            log "❌ Could not resolve conflicts for $branch"
            return 1
        fi
    else
        log "No conflicts found for $branch"
        return 0
    fi
}

# Main execution
main() {
    log "Starting merge process..."
    
    # Ensure we're in the right directory
    cd /workspace
    
    # Check if we're in a git repository
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        log "❌ Not in a git repository"
        exit 1
    fi
    
    # Ensure we're on main branch
    log "📋 Ensuring we're on main branch..."
    if ! safe_git "checkout main"; then
        log "Creating main branch..."
        safe_git "checkout -b main"
    fi
    
    # Pull latest changes
    log "⬇️ Pulling latest changes..."
    safe_git "pull origin main" || log "No remote main branch or pull failed"
    
    # Fetch all remote branches
    log "🔍 Fetching all remote branches..."
    safe_git "fetch --all"
    
    # Get list of remote branches (excluding main and HEAD)
    BRANCHES=$(git branch -r | grep -v 'origin/main' | grep -v 'origin/HEAD' | sed 's/origin\///' | tr -d ' ' | head -20)
    
    if [ -z "$BRANCHES" ]; then
        log "📊 No branches found to merge"
        exit 0
    fi
    
    log "📊 Found branches to merge:"
    echo "$BRANCHES" | while read branch; do
        echo "  - $branch"
    done
    
    # Initialize counters
    MERGED=0
    FAILED=0
    CONFLICTS=0
    
    # Process each branch
    echo "$BRANCHES" | while read branch; do
        if [ -z "$branch" ] || [ "$branch" == "main" ] || [ "$branch" == "HEAD" ]; then
            continue
        fi
        
        log "📝 Processing branch: $branch"
        
        # Try to merge the branch
        if safe_git "merge origin/$branch --no-ff -m \"Merge branch $branch into main\""; then
            log "✅ Successfully merged $branch"
            ((MERGED++))
        else
            log "⚠️ Merge failed for $branch, checking for conflicts..."
            
            # Check if there are conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                log "🔧 Found conflicts in $branch, attempting resolution..."
                
                if resolve_conflicts "$branch"; then
                    log "✅ Successfully merged $branch after conflict resolution"
                    ((MERGED++))
                else
                    log "❌ Could not resolve conflicts in $branch, aborting merge"
                    safe_git "merge --abort"
                    ((CONFLICTS++))
                fi
            else
                log "❌ Merge failed for $branch (no conflicts detected)"
                safe_git "merge --abort"
                ((FAILED++))
            fi
        fi
    done
    
    # Push changes if any were merged
    if [ $MERGED -gt 0 ]; then
        log "⬆️ Pushing merged changes..."
        if safe_git "push origin main"; then
            log "✅ Successfully pushed changes"
        else
            log "⚠️ Could not push to remote"
        fi
    fi
    
    # Final summary
    log "📊 Final Summary:"
    log "✅ Successfully merged: $MERGED branches"
    log "❌ Failed to merge: $FAILED branches"
    log "⚠️ Had conflicts: $CONFLICTS branches"
    
    # Show current status
    log "📋 Current git status:"
    git status --short || true
    
    log "🎉 Merge process completed!"
}

# Run main function
main "$@"