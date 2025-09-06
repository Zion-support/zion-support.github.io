#!/bin/bash

# Comprehensive PR merge script
echo "=== COMPREHENSIVE PR MERGE SCRIPT ==="

# Function to safely execute git commands with timeout
safe_git() {
    timeout 60 git "$@" 2>/dev/null
    return $?
}

# Get current status
echo "Getting current branch..."
CURRENT_BRANCH=$(safe_git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Switch to main
echo "Switching to main branch..."
safe_git checkout main
if [ $? -ne 0 ]; then
    echo "Failed to switch to main"
    exit 1
fi

# Get recent branches (last 50)
echo "Getting recent branches..."
RECENT_BRANCHES=$(safe_git for-each-ref --sort=-committerdate refs/remotes/origin --format='%(refname:short)' | head -50)

echo "Processing branches..."

# Process each branch
for branch in $RECENT_BRANCHES; do
    # Skip main and HEAD
    if [[ "$branch" == "origin/main" || "$branch" == "origin/HEAD" ]]; then
        continue
    fi
    
    echo "Processing: $branch"
    
    # Extract branch name
    BRANCH_NAME=${branch#origin/}
    
    # Create and checkout branch
    safe_git checkout -b "$BRANCH_NAME" "$branch"
    if [ $? -ne 0 ]; then
        echo "Skipping $branch (checkout failed)"
        continue
    fi
    
    # Try merge
    safe_git merge main --no-edit
    if [ $? -eq 0 ]; then
        echo "✅ Merged: $BRANCH_NAME"
        safe_git push origin "$BRANCH_NAME"
    else
        echo "❌ Conflict in: $BRANCH_NAME"
        safe_git merge --abort
    fi
    
    # Return to main
    safe_git checkout main
done

echo "=== MERGE PROCESS COMPLETED ==="