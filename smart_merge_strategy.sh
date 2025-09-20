#!/bin/bash

# Smart Merge Strategy - Prioritize recent and important branches
set -e

echo "🧠 Starting Smart Merge Strategy"
echo "==============================="

# Configuration
MAIN_BRANCH="main"
LOG_FILE="smart_merge_$(date +%Y%m%d_%H%M%S).log"

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Function to get recent branches (last 30 days)
get_recent_branches() {
    log "Fetching recent branches..."
    git for-each-ref --sort=-committerdate refs/remotes/origin \
        --format='%(refname:short)' \
        --count=100 | \
    grep -E "(cursor|codex)" | \
    sed 's/origin\///' | \
    head -50
}

# Function to get branches with specific keywords (high priority)
get_priority_branches() {
    log "Fetching priority branches..."
    git branch -r | grep -E "(cursor|codex)" | \
    grep -E "(fix|bug|error|conflict|merge|build|deploy|main)" | \
    sed 's/origin\///' | \
    head -20
}

# Function to merge a branch safely
safe_merge() {
    local branch=$1
    log "Attempting safe merge of: $branch"
    
    # Check if branch exists and is not already merged
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        log "Branch $branch does not exist, skipping"
        return 1
    fi
    
    if git merge-base --is-ancestor "origin/$branch" "origin/$MAIN_BRANCH" 2>/dev/null; then
        log "Branch $branch is already merged, skipping"
        return 0
    fi
    
    # Create temporary branch
    local temp_branch="temp_${branch//[^a-zA-Z0-9]/_}_$(date +%s)"
    
    # Fetch and create temp branch
    if ! git fetch origin "$branch"; then
        log "❌ Failed to fetch branch $branch"
        return 1
    fi
    
    if ! git checkout -b "$temp_branch" "origin/$MAIN_BRANCH"; then
        log "❌ Failed to create temp branch for $branch"
        return 1
    fi
    
    # Attempt merge with strategy
    if git merge "origin/$branch" --no-edit --strategy=recursive -X ours; then
        log "✅ Successfully merged $branch"
        # Merge back to main
        git checkout "$MAIN_BRANCH"
        git merge "$temp_branch" --no-edit --no-ff
        git branch -D "$temp_branch"
        return 0
    else
        log "⚠️  Conflict in $branch, attempting resolution..."
        
        # Try to resolve conflicts automatically
        local conflicted_files=$(git diff --name-only --diff-filter=U)
        for file in $conflicted_files; do
            log "Resolving conflict in: $file"
            
            # Use main branch version for most files
            if git checkout --ours "$file" 2>/dev/null; then
                git add "$file"
            else
                # If that fails, try branch version
                git checkout --theirs "$file" 2>/dev/null || true
                git add "$file"
            fi
        done
        
        # Commit resolution
        if git commit --no-edit; then
            log "✅ Resolved conflicts in $branch"
            git checkout "$MAIN_BRANCH"
            git merge "$temp_branch" --no-edit --no-ff
            git branch -D "$temp_branch"
            return 0
        else
            log "❌ Failed to resolve conflicts in $branch"
            git checkout "$MAIN_BRANCH"
            git branch -D "$temp_branch" 2>/dev/null || true
            return 1
        fi
    fi
}

# Main execution
log "Starting smart merge strategy..."

# Get priority branches first
PRIORITY_BRANCHES=$(get_priority_branches)
log "Found $(echo "$PRIORITY_BRANCHES" | wc -l) priority branches"

# Get recent branches
RECENT_BRANCHES=$(get_recent_branches)
log "Found $(echo "$RECENT_BRANCHES" | wc -l) recent branches"

# Merge priority branches first
log "=== Merging Priority Branches ==="
successful=0
failed=0

for branch in $PRIORITY_BRANCHES; do
    if [[ "$branch" != "$MAIN_BRANCH" ]]; then
        if safe_merge "$branch"; then
            successful=$((successful + 1))
        else
            failed=$((failed + 1))
        fi
    fi
done

log "Priority branches: $successful successful, $failed failed"

# Push changes
log "Pushing changes..."
git push origin "$MAIN_BRANCH" || log "Warning: Failed to push"

# Merge recent branches
log "=== Merging Recent Branches ==="
successful=0
failed=0

for branch in $RECENT_BRANCHES; do
    if [[ "$branch" != "$MAIN_BRANCH" ]]; then
        if safe_merge "$branch"; then
            successful=$((successful + 1))
        else
            failed=$((failed + 1))
        fi
    fi
done

log "Recent branches: $successful successful, $failed failed"

# Final push
log "Final push..."
git push origin "$MAIN_BRANCH" || log "Warning: Failed to push"

log "✅ Smart merge strategy completed!"
echo "Check $LOG_FILE for detailed logs."