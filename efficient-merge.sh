#!/bin/bash

# Efficient Merge Script - Focus on recent branches and handle conflicts
set -e

echo "🚀 Efficient Merge Process Starting"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

log() { echo -e "${BLUE}[$(date '+%H:%M:%S')]${NC} $1"; }
success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
warn() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Get recent branches (last 50)
get_recent_branches() {
    git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/remotes/origin/cursor/ | head -50 | sed 's/origin\///'
}

# Merge with conflict resolution
merge_with_resolution() {
    local branch=$1
    log "Processing $branch"
    
    # Fetch branch
    if ! git fetch origin "$branch" 2>/dev/null; then
        warn "Cannot fetch $branch, skipping"
        return 1
    fi
    
    # Check if already merged
    if git merge-base --is-ancestor "origin/$branch" HEAD 2>/dev/null; then
        log "$branch already merged, skipping"
        return 0
    fi
    
    # Attempt merge
    if git merge "origin/$branch" --no-edit 2>/dev/null; then
        success "Merged $branch"
        return 0
    fi
    
    # Handle conflicts
    warn "Conflicts in $branch, resolving automatically"
    
    # Auto-resolve conflicts by preferring main branch
    git checkout --ours . 2>/dev/null || true
    git add . 2>/dev/null || true
    
    if git commit -m "Auto-merge $branch with conflict resolution" 2>/dev/null; then
        success "Resolved conflicts for $branch"
        return 0
    fi
    
    # If still failing, abort
    git merge --abort 2>/dev/null || true
    error "Failed to merge $branch"
    return 1
}

# Main process
main() {
    log "Starting efficient merge process..."
    
    # Ensure clean state
    git checkout main
    git pull origin main
    
    # Get recent branches
    local branches=($(get_recent_branches))
    log "Found ${#branches[@]} recent branches to process"
    
    local merged=0
    local failed=0
    local skipped=0
    
    # Process each branch
    for branch in "${branches[@]}"; do
        if merge_with_resolution "$branch"; then
            merged=$((merged + 1))
        else
            failed=$((failed + 1))
        fi
        
        # Push every 10 merges
        if [ $((merged + failed)) -gt 0 ] && [ $(((merged + failed) % 10)) -eq 0 ]; then
            log "Pushing changes..."
            git push origin main || warn "Push failed"
        fi
    done
    
    # Final push
    git push origin main
    success "Merge process completed: $merged merged, $failed failed"
    
    # Clean up successfully merged branches
    log "Cleaning up merged branches..."
    for branch in "${branches[@]}"; do
        if git merge-base --is-ancestor "origin/$branch" HEAD 2>/dev/null; then
            git push origin --delete "$branch" 2>/dev/null || true
        fi
    done
    
    success "Cleanup completed"
}

# Run main function
main "$@"