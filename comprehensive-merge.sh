#!/bin/bash

# Comprehensive merge script to resolve conflicts and merge PRs
set -e

echo "=== Starting Comprehensive Merge Process ==="

# Function to log with timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Step 1: Check current status
log "Checking current git status..."
git status --porcelain > /tmp/git_status.txt 2>&1 || true

# Step 2: Pull latest changes from main
log "Pulling latest changes from origin/main..."
if git pull origin main --no-edit; then
    log "Successfully pulled changes from main"
else
    log "Pull failed, checking for conflicts..."
    
    # Check for merge conflicts
    if git diff --name-only --diff-filter=U > /tmp/conflicts.txt 2>/dev/null; then
        if [ -s /tmp/conflicts.txt ]; then
            log "Merge conflicts found. Resolving..."
            
            # Resolve conflicts by taking remote version
            while IFS= read -r file; do
                log "Resolving conflict in: $file"
                git checkout --theirs "$file"
                git add "$file"
            done < /tmp/conflicts.txt
            
            git commit -m "resolve: merge conflicts resolved by taking remote version"
            log "Conflicts resolved and committed"
        fi
    fi
fi

# Step 3: Identify and merge recent branches
log "Identifying potential PR branches..."

# Get list of recent branches (excluding main and backup branches)
git branch -r | grep -v "origin/main" | grep -v "origin/master" | grep -v "aggressive-merge-backup" | grep -v "jules_wip" | head -50 > /tmp/branches.txt

# Merge branches one by one
merge_count=0
while IFS= read -r branch; do
    branch_clean=$(echo "$branch" | sed 's/^[[:space:]]*origin\///' | sed 's/[[:space:]]*$//')
    
    if [ -n "$branch_clean" ]; then
        log "Attempting to merge branch: $branch_clean"
        
        if git merge "origin/$branch_clean" --no-edit --no-ff; then
            log "Successfully merged: $branch_clean"
            merge_count=$((merge_count + 1))
        else
            log "Failed to merge: $branch_clean, checking for conflicts..."
            
            # Check if there are conflicts to resolve
            if git diff --name-only --diff-filter=U > /tmp/branch_conflicts.txt 2>/dev/null; then
                if [ -s /tmp/branch_conflicts.txt ]; then
                    log "Resolving conflicts for branch: $branch_clean"
                    
                    # Resolve conflicts by taking the incoming version
                    while IFS= read -r conflict_file; do
                        log "Resolving conflict in: $conflict_file"
                        git checkout --theirs "$conflict_file"
                        git add "$conflict_file"
                    done < /tmp/branch_conflicts.txt
                    
                    git commit -m "resolve: merge conflicts for $branch_clean resolved by taking incoming version"
                    log "Conflicts resolved for: $branch_clean"
                    merge_count=$((merge_count + 1))
                else
                    log "No conflicts found, aborting merge for: $branch_clean"
                    git merge --abort 2>/dev/null || true
                fi
            else
                log "Aborting failed merge for: $branch_clean"
                git merge --abort 2>/dev/null || true
            fi
        fi
        
        # Limit the number of merges to avoid overwhelming the system
        if [ $merge_count -ge 10 ]; then
            log "Reached merge limit of 10 branches, stopping..."
            break
        fi
    fi
done < /tmp/branches.txt

# Step 4: Push changes back to main
log "Pushing merged changes to origin/main..."
if git push origin main; then
    log "Successfully pushed changes to main"
else
    log "Failed to push changes to main"
fi

# Step 5: Final status check
log "Final repository status:"
git status --short

log "=== Merge Process Completed ==="
log "Total branches merged: $merge_count"

# Clean up temporary files
rm -f /tmp/git_status.txt /tmp/conflicts.txt /tmp/branches.txt /tmp/branch_conflicts.txt

echo "Merge process finished. Check the logs above for details."