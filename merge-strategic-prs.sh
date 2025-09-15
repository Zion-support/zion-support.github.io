#!/bin/bash

# Strategic PR Merge Script
# This script will merge the most important and recent PRs

set -e

echo "🚀 Starting strategic PR merge process..."

# Function to log with timestamp
log() {
    echo "[$(date '+%H:%M:%S')] $1"
}

# Function to check git status
check_status() {
    log "Checking git status..."
    git status --porcelain
}

# Function to fetch and update
fetch_update() {
    log "Fetching latest changes..."
    git fetch origin
    
    log "Updating main branch..."
    git checkout main
    git pull origin main
}

# Function to resolve conflicts
resolve_conflicts() {
    local branch=$1
    log "Resolving conflicts for $branch"
    
    # Checkout branch
    git checkout "$branch" 2>/dev/null || {
        log "Branch $branch not found locally, fetching..."
        git fetch origin "$branch:$branch"
        git checkout "$branch"
    }
    
    # Try merge
    if git merge main --no-commit 2>/dev/null; then
        log "No conflicts for $branch"
        git commit -m "Merge main into $branch"
    else
        log "Conflicts detected, auto-resolving..."
        
        # Auto-resolve conflicts
        git checkout --ours package.json 2>/dev/null || true
        git checkout --ours package-lock.json 2>/dev/null || true
        git rm "*.backup*" 2>/dev/null || true
        git checkout --ours app/page.tsx 2>/dev/null || true
        git checkout --ours app/layout.tsx 2>/dev/null || true
        git checkout --ours components/ 2>/dev/null || true
        git add .
        git commit -m "Auto-resolve conflicts in $branch"
    fi
}

# Function to merge PR
merge_pr() {
    local branch=$1
    log "Merging $branch into main"
    
    git checkout main
    if git merge "$branch" --no-ff -m "Merge $branch into main"; then
        log "Successfully merged $branch"
        git push origin main
        git branch -d "$branch" 2>/dev/null || true
        git push origin --delete "$branch" 2>/dev/null || true
    else
        log "Failed to merge $branch"
    fi
}

# Function to clean up
cleanup() {
    log "Cleaning up..."
    find . -name "*.backup*" -type f -delete 2>/dev/null || true
    find . -name "*.bak" -type f -delete 2>/dev/null || true
    find . -name "*~" -type f -delete 2>/dev/null || true
}

# Main execution
main() {
    log "Starting strategic merge process..."
    
    # Check status
    check_status
    
    # Fetch and update
    fetch_update
    
    # Define strategic PRs to merge (most recent and important)
    strategic_branches=(
        "cursor/website-audit-merged-v2"
        "cursor/website-cleanup-v2"
        "cursor/website-fixes-clean"
        "cursor/website-improvements-2025"
        "pr-update-cursor/add-new-services-and-advertise-them-42ec"
        "pr-update-cursor/analyze-improve-and-deploy-application-6fbe"
        "pr-update-cursor/website-audit-content-update-and-deployment-346c"
    )
    
    log "Processing strategic PRs: ${strategic_branches[*]}"
    
    # Process each strategic PR
    for branch in "${strategic_branches[@]}"; do
        log "Processing strategic PR: $branch"
        
        # Skip if branch doesn't exist
        if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
            log "Skipping $branch - doesn't exist"
            continue
        fi
        
        # Try to process the branch
        if resolve_conflicts "$branch"; then
            merge_pr "$branch"
        else
            log "Failed to process $branch"
        fi
    done
    
    # Clean up
    cleanup
    
    log "Strategic merge process completed!"
}

# Run main function
main "$@"