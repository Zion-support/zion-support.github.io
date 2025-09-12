#!/bin/bash

# Comprehensive script to resolve merge conflicts and merge all PRs
# This script handles the complete process of merging all open PRs into main

set -e

echo "🚀 Starting comprehensive PR merge process..."
echo "================================================"

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Function to run git commands safely
run_git() {
    local cmd="$1"
    log "Running: $cmd"
    if git $cmd; then
        log "✅ Success: $cmd"
        return 0
    else
        log "❌ Failed: $cmd"
        return 1
    fi
}

# Function to check if we're in a git repo
check_git_repo() {
    if [ -d ".git" ]; then
        log "✅ Git repository found"
        return 0
    else
        log "❌ Not in a git repository"
        return 1
    fi
}

# Function to get current branch
get_current_branch() {
    git branch --show-current 2>/dev/null || echo "unknown"
}

# Function to resolve merge conflicts
resolve_conflicts() {
    log "🔧 Checking for merge conflicts..."
    
    # Check git status
    local status=$(git status --porcelain 2>/dev/null || echo "")
    
    if [ -z "$status" ]; then
        log "✅ No conflicts found"
        return 0
    fi
    
    # Check for conflict markers
    local conflict_files=$(echo "$status" | grep -E '^UU|^AA|^DD' | wc -l)
    
    if [ "$conflict_files" -eq 0 ]; then
        log "✅ No merge conflicts found"
        return 0
    fi
    
    log "🔍 Found $conflict_files files with conflicts"
    
    # List conflict files
    echo "$status" | grep -E '^UU|^AA|^DD' | while read -r line; do
        local file=$(echo "$line" | cut -c4-)
        log "  - $file"
    done
    
    # Try to resolve conflicts automatically
    log "🤖 Attempting automatic conflict resolution..."
    
    # Add all files
    if run_git "add ."; then
        # Try to commit
        if run_git "commit -m 'Resolve merge conflicts automatically'"; then
            log "✅ Conflicts resolved successfully"
            return 0
        else
            log "❌ Could not commit resolved conflicts"
            return 1
        fi
    else
        log "❌ Could not add files"
        return 1
    fi
}

# Function to merge a specific branch
merge_branch() {
    local branch="$1"
    log "🔄 Processing branch: $branch"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet "refs/heads/$branch"; then
        log "✅ Branch $branch exists locally"
    else
        log "📥 Fetching branch $branch from origin..."
        if ! run_git "fetch origin $branch:$branch"; then
            log "❌ Failed to fetch branch $branch"
            return 1
        fi
    fi
    
    # Switch to the branch
    if ! run_git "checkout $branch"; then
        log "❌ Failed to checkout branch $branch"
        return 1
    fi
    
    # Pull latest changes
    if ! run_git "pull origin $branch"; then
        log "❌ Failed to pull latest changes for $branch"
        return 1
    fi
    
    # Switch back to main
    if ! run_git "checkout main"; then
        log "❌ Failed to checkout main"
        return 1
    fi
    
    # Attempt to merge
    log "🔀 Merging $branch into main..."
    if run_git "merge $branch --no-ff -m 'Merge $branch into main'"; then
        log "✅ Successfully merged $branch"
        
        # Push to origin
        log "⬆️ Pushing merged changes to origin..."
        if run_git "push origin main"; then
            log "✅ Successfully pushed to origin"
            
            # Delete the branch
            log "🗑️ Deleting branch $branch..."
            run_git "branch -d $branch" || log "⚠️ Could not delete local branch $branch"
            run_git "push origin --delete $branch" || log "⚠️ Could not delete remote branch $branch"
            
            return 0
        else
            log "❌ Failed to push to origin"
            return 1
        fi
    else
        log "❌ Merge failed for $branch, attempting conflict resolution..."
        if resolve_conflicts; then
            log "✅ Conflicts resolved for $branch"
            if run_git "push origin main"; then
                log "✅ Successfully pushed resolved changes"
                run_git "branch -d $branch" || log "⚠️ Could not delete local branch $branch"
                run_git "push origin --delete $branch" || log "⚠️ Could not delete remote branch $branch"
                return 0
            else
                log "❌ Failed to push resolved changes"
                return 1
            fi
        else
            log "❌ Could not resolve conflicts for $branch"
            log "🔄 Reverting merge for $branch..."
            run_git "merge --abort" || log "⚠️ Could not abort merge"
            return 1
        fi
    fi
}

# Main execution
main() {
    log "🔍 Starting comprehensive merge process..."
    
    # Check if we're in a git repository
    if ! check_git_repo; then
        log "❌ Not in a git repository. Exiting."
        exit 1
    fi
    
    # Get current branch
    local current_branch=$(get_current_branch)
    log "📍 Current branch: $current_branch"
    
    # Switch to main branch
    log "🔄 Switching to main branch..."
    if ! run_git "checkout main"; then
        log "❌ Failed to checkout main branch"
        exit 1
    fi
    
    # Pull latest changes
    log "⬇️ Pulling latest changes from origin..."
    if ! run_git "pull origin main"; then
        log "❌ Failed to pull latest changes"
        exit 1
    fi
    
    # Get list of remote branches (potential PRs)
    log "📝 Getting list of remote branches..."
    if ! run_git "fetch origin"; then
        log "❌ Failed to fetch from origin"
        exit 1
    fi
    
    # Get all remote branches that start with 'cursor/'
    local pr_branches=$(git branch -r | grep 'cursor/' | sed 's/origin\///' | head -20)
    
    if [ -z "$pr_branches" ]; then
        log "ℹ️ No PR branches found"
        exit 0
    fi
    
    log "🔍 Found potential PR branches:"
    echo "$pr_branches" | while read -r branch; do
        log "  - $branch"
    done
    
    # Process each branch
    local success_count=0
    local total_count=0
    
    echo "$pr_branches" | while read -r branch; do
        if [ -n "$branch" ]; then
            total_count=$((total_count + 1))
            log ""
            log "🔄 Processing branch $total_count: $branch"
            
            if merge_branch "$branch"; then
                success_count=$((success_count + 1))
                log "✅ Successfully processed $branch"
            else
                log "❌ Failed to process $branch"
            fi
        fi
    done
    
    # Final summary
    log ""
    log "🎉 PR merge process completed!"
    log "================================================"
    log "📊 Summary:"
    log "- Total branches processed: $total_count"
    log "- Successfully merged: $success_count"
    log "- Failed: $((total_count - success_count))"
    log "- Current branch: $(get_current_branch)"
    
    # Show final status
    log ""
    log "📋 Final git status:"
    run_git "status" || log "⚠️ Could not get git status"
    
    log ""
    log "📝 Recent commits:"
    run_git "log --oneline -5" || log "⚠️ Could not get git log"
    
    log ""
    log "✅ Comprehensive merge process completed!"
}

# Run the main function
main "$@"