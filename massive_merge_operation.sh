#!/bin/bash

# Massive Merge Operation Script
# This script will systematically merge all cursor/codex branches into main

set -e

echo "🚀 Starting Massive Merge Operation"
echo "=================================="

# Configuration
MAIN_BRANCH="main"
BATCH_SIZE=50
MAX_CONFLICTS_PER_BATCH=10
LOG_FILE="merge_operation_$(date +%Y%m%d_%H%M%S).log"
CONFLICT_LOG="conflicts_$(date +%Y%m%d_%H%M%S).log"

# Initialize logs
echo "Starting merge operation at $(date)" > "$LOG_FILE"
echo "Conflicts encountered:" > "$CONFLICT_LOG"

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Function to handle merge conflicts
resolve_conflicts() {
    local branch=$1
    log "Resolving conflicts in branch: $branch"
    
    # Check if there are actual conflicts
    if git diff --name-only --diff-filter=U | grep -q .; then
        log "Found conflicts in $branch, attempting resolution..."
        
        # List conflicted files
        local conflicted_files=$(git diff --name-only --diff-filter=U)
        log "Conflicted files: $conflicted_files"
        
        # Try to resolve conflicts automatically
        for file in $conflicted_files; do
            log "Resolving conflicts in: $file"
            
            # Check if it's a package.json or similar file
            if [[ "$file" == *"package.json"* ]] || [[ "$file" == *"package-lock.json"* ]]; then
                # For package files, prefer main branch version
                git checkout --ours "$file"
                git add "$file"
                log "Resolved $file using main branch version"
            elif [[ "$file" == *".tsx"* ]] || [[ "$file" == *".ts"* ]] || [[ "$file" == *".js"* ]]; then
                # For code files, try to merge intelligently
                if git checkout --theirs "$file" 2>/dev/null; then
                    git add "$file"
                    log "Resolved $file using branch version"
                else
                    git checkout --ours "$file"
                    git add "$file"
                    log "Resolved $file using main branch version"
                fi
            else
                # For other files, prefer main branch
                git checkout --ours "$file"
                git add "$file"
                log "Resolved $file using main branch version"
            fi
        done
        
        # Commit the resolution
        if git commit --no-edit; then
            log "Successfully resolved conflicts in $branch"
            return 0
        else
            log "Failed to commit conflict resolution for $branch"
            echo "$branch" >> "$CONFLICT_LOG"
            return 1
        fi
    else
        log "No conflicts found in $branch"
        return 0
    fi
}

# Function to merge a single branch
merge_branch() {
    local branch=$1
    log "Attempting to merge branch: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        log "Branch $branch does not exist, skipping"
        return 1
    fi
    
    # Check if branch is already merged
    if git merge-base --is-ancestor "origin/$branch" "origin/$MAIN_BRANCH" 2>/dev/null; then
        log "Branch $branch is already merged, skipping"
        return 0
    fi
    
    # Create a temporary branch for merging
    local temp_branch="temp_merge_${branch//[^a-zA-Z0-9]/_}"
    
    # Fetch the latest changes
    git fetch origin "$branch"
    
    # Create temporary branch from main
    git checkout -b "$temp_branch" "origin/$MAIN_BRANCH"
    
    # Attempt to merge
    if git merge "origin/$branch" --no-edit --no-ff; then
        log "Successfully merged $branch"
        # Merge back to main
        git checkout "$MAIN_BRANCH"
        git merge "$temp_branch" --no-edit --no-ff
        git branch -D "$temp_branch"
        return 0
    else
        log "Merge conflict in $branch, attempting resolution..."
        if resolve_conflicts "$branch"; then
            # Merge back to main
            git checkout "$MAIN_BRANCH"
            git merge "$temp_branch" --no-edit --no-ff
            git branch -D "$temp_branch"
            return 0
        else
            log "Failed to resolve conflicts in $branch, skipping"
            git checkout "$MAIN_BRANCH"
            git branch -D "$temp_branch" 2>/dev/null || true
            echo "$branch" >> "$CONFLICT_LOG"
            return 1
        fi
    fi
}

# Get all cursor/codex branches
log "Fetching all branches..."
git fetch --all

# Get list of branches to merge
BRANCHES=$(git branch -r | grep -E "(cursor|codex)" | sed 's/origin\///' | head -1000)
TOTAL_BRANCHES=$(echo "$BRANCHES" | wc -l)

log "Found $TOTAL_BRANCHES branches to process"

# Process branches in batches
current_batch=0
successful_merges=0
failed_merges=0
conflict_count=0

for branch in $BRANCHES; do
    # Skip if it's the main branch
    if [[ "$branch" == "$MAIN_BRANCH" ]]; then
        continue
    fi
    
    # Process in batches
    if (( current_batch % BATCH_SIZE == 0 )); then
        log "Processing batch $((current_batch / BATCH_SIZE + 1))"
        log "Progress: $current_batch/$TOTAL_BRANCHES branches processed"
        log "Successful merges: $successful_merges, Failed: $failed_merges"
        
        # Push changes after each batch
        if (( successful_merges > 0 )); then
            log "Pushing changes to main branch..."
            git push origin "$MAIN_BRANCH" || log "Warning: Failed to push changes"
        fi
    fi
    
    if merge_branch "$branch"; then
        ((successful_merges++))
    else
        ((failed_merges++))
        ((conflict_count++))
        
        # If too many conflicts in this batch, take a break
        if (( conflict_count >= MAX_CONFLICTS_PER_BATCH )); then
            log "Too many conflicts in current batch, taking a break..."
            conflict_count=0
            sleep 5
        fi
    fi
    
    ((current_batch++))
    
    # Small delay to prevent overwhelming the system
    sleep 0.1
done

# Final push
log "Pushing final changes..."
git push origin "$MAIN_BRANCH" || log "Warning: Failed to push final changes"

# Summary
log "=================================="
log "Merge Operation Complete!"
log "Total branches processed: $TOTAL_BRANCHES"
log "Successful merges: $successful_merges"
log "Failed merges: $failed_merges"
log "Conflicts encountered: $(wc -l < "$CONFLICT_LOG")"
log "=================================="

# Show failed branches
if [[ -s "$CONFLICT_LOG" ]]; then
    log "Branches with unresolved conflicts:"
    cat "$CONFLICT_LOG" | tee -a "$LOG_FILE"
fi

echo "✅ Merge operation completed. Check $LOG_FILE for details."