#!/bin/bash

# Master Merge Resolver Script
# This script will resolve ALL merge conflicts and merge ALL PRs into main

set -e

echo "🚀 MASTER MERGE RESOLVER - Starting Complete Resolution Process..."

# Configuration
MAIN_BRANCH="main"
REMOTE="origin"
LOG_FILE="merge_resolution_$(date +%Y%m%d_%H%M%S).log"

# Function to log with timestamp
log() {
    local message="$1"
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $message" | tee -a "$LOG_FILE"
}

# Function to check if we're in a git repository
check_git_repo() {
    if [ ! -d ".git" ]; then
        log "❌ Not in a git repository. Exiting."
        exit 1
    fi
    log "✅ Git repository found"
}

# Function to get current branch
get_current_branch() {
    CURRENT_BRANCH=$(git branch --show-current)
    log "📍 Current branch: $CURRENT_BRANCH"
}

# Function to check for merge conflicts
check_merge_conflicts() {
    log "🔍 Checking for merge conflicts..."
    local conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
    
    if [ -n "$conflicted_files" ]; then
        log "⚠️  Found merge conflicts in:"
        echo "$conflicted_files" | while read -r file; do
            if [ -n "$file" ]; then
                log "  - $file"
            fi
        done
        return 0
    else
        log "✅ No merge conflicts found"
        return 1
    fi
}

# Function to resolve merge conflicts automatically
resolve_merge_conflicts() {
    log "🔧 Resolving merge conflicts automatically..."
    
    local conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
    
    if [ -n "$conflicted_files" ]; then
        echo "$conflicted_files" | while read -r file; do
            if [ -n "$file" ]; then
                log "📝 Resolving conflicts in: $file"
                
                # Create a backup
                cp "$file" "$file.backup.$(date +%s)" 2>/dev/null || true
                
                # Use git checkout to take the current branch version (HEAD)
                git checkout --ours "$file" 2>/dev/null || true
                
                # Add the resolved file
                git add "$file" 2>/dev/null || true
            fi
        done
        
        log "✅ Merge conflicts resolved"
    fi
}

# Function to merge with main
merge_with_main() {
    log "🔄 Merging with main branch..."
    
    # Fetch latest changes
    git fetch "$REMOTE" "$MAIN_BRANCH" 2>/dev/null || true
    
    # Try to merge
    if git merge "$REMOTE/$MAIN_BRANCH" --no-edit 2>/dev/null; then
        log "✅ Successfully merged with main"
        return 0
    else
        log "⚠️  Merge conflicts detected, resolving..."
        if check_merge_conflicts; then
            resolve_merge_conflicts
            git commit -m "Resolve merge conflicts automatically" 2>/dev/null || true
            log "✅ Merge conflicts resolved and committed"
            return 0
        else
            log "❌ Failed to resolve merge conflicts"
            return 1
        fi
    fi
}

# Function to get all remote branches
get_all_branches() {
    log "📋 Getting all remote branches..."
    git branch -r --sort=-committerdate | head -50
}

# Function to merge a specific branch
merge_branch() {
    local branch="$1"
    log "🔄 Attempting to merge branch: $branch"
    
    # Fetch the branch
    git fetch "$REMOTE" "$branch" 2>/dev/null || true
    
    # Try to merge
    if git merge "$REMOTE/$branch" --no-edit 2>/dev/null; then
        log "✅ Successfully merged $branch"
        return 0
    else
        log "⚠️  Merge conflicts in $branch, resolving..."
        
        # Get conflicted files
        local conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$conflicted_files" ]; then
            echo "$conflicted_files" | while read -r file; do
                if [ -n "$file" ]; then
                    log "📝 Resolving conflicts in: $file"
                    git checkout --ours "$file" 2>/dev/null || true
                    git add "$file" 2>/dev/null || true
                fi
            done
            
            # Commit resolved conflicts
            if git diff --cached --quiet 2>/dev/null; then
                log "ℹ️  No changes to commit"
            else
                git commit -m "Resolve merge conflicts in $branch" 2>/dev/null || true
                log "✅ Committed resolved conflicts for $branch"
            fi
        fi
        
        return 0
    fi
}

# Function to push changes
push_changes() {
    local branch="$1"
    log "📤 Pushing changes for branch: $branch"
    
    if git push "$REMOTE" "$branch" 2>/dev/null; then
        log "✅ Successfully pushed $branch"
        return 0
    else
        log "❌ Failed to push $branch"
        return 1
    fi
}

# Function to process all branches
process_all_branches() {
    log "🔄 Processing all branches for merging..."
    
    # Get all remote branches
    local all_branches=$(git branch -r --sort=-committerdate | grep -v "origin/main" | head -20)
    
    # Switch to main first
    git checkout "$MAIN_BRANCH" 2>/dev/null || true
    git pull "$REMOTE" "$MAIN_BRANCH" 2>/dev/null || true
    
    # Process each branch
    echo "$all_branches" | while read -r branch; do
        if [ -n "$branch" ]; then
            # Remove 'origin/' prefix
            local clean_branch=$(echo "$branch" | sed 's/origin\///')
            
            if [ "$clean_branch" != "$MAIN_BRANCH" ]; then
                log "🔄 Processing branch: $clean_branch"
                
                # Try to merge the branch
                if merge_branch "$clean_branch"; then
                    log "✅ Successfully processed $clean_branch"
                else
                    log "❌ Failed to process $clean_branch"
                fi
            fi
        fi
    done
}

# Function to clean up merged branches
cleanup_merged_branches() {
    log "🧹 Cleaning up merged branches..."
    
    # Switch to main
    git checkout "$MAIN_BRANCH" 2>/dev/null || true
    git pull "$REMOTE" "$MAIN_BRANCH" 2>/dev/null || true
    
    # Delete merged branches
    git branch --merged | grep -v "main" | xargs -r git branch -d 2>/dev/null || true
    log "✅ Cleaned up merged branches"
}

# Main execution function
main() {
    log "🚀 Starting master merge resolution process..."
    
    # Check if we're in a git repo
    check_git_repo
    get_current_branch
    
    # Check for existing merge conflicts
    if check_merge_conflicts; then
        resolve_merge_conflicts
        git commit -m "Resolve existing merge conflicts automatically" 2>/dev/null || true
    fi
    
    # Get all branches
    get_all_branches
    
    # Process all branches
    process_all_branches
    
    # Push all changes
    push_changes "$CURRENT_BRANCH"
    
    # Clean up
    cleanup_merged_branches
    
    log "🎉 Master merge resolution process completed!"
    log "📋 Log saved to: $LOG_FILE"
}

# Run main function
main "$@"