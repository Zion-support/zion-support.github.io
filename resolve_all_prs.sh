#!/bin/bash

# Script to resolve merge conflicts and update all open PRs
set -e

echo "=== Starting PR Conflict Resolution Process ==="

# Get list of open PRs with conflicts
echo "Fetching open PRs..."
PRS=$(gh pr list --state open --json number,headRefName,mergeable --jq '.[] | select(.mergeable == "CONFLICTING") | .number')

if [ -z "$PRS" ]; then
    echo "No PRs with conflicts found."
    exit 0
fi

echo "Found PRs with conflicts: $PRS"

# Process each PR
for pr in $PRS; do
    echo "Processing PR #$pr..."
    
    # Get the branch name
    BRANCH=$(gh pr view $pr --json headRefName --jq '.headRefName')
    echo "Branch: $BRANCH"
    
    # Checkout the PR branch
    echo "Checking out PR #$pr..."
    gh pr checkout $pr
    
    # Fetch latest main
    echo "Fetching latest main..."
    git fetch origin main
    
    # Merge main into the branch
    echo "Merging main into $BRANCH..."
    if git merge origin/main; then
        echo "Merge successful for PR #$pr"
        
        # Push the updated branch
        echo "Pushing updated branch..."
        git push origin $BRANCH
        
        echo "✅ PR #$pr updated successfully"
    else
        echo "❌ Merge failed for PR #$pr"
        # Reset to clean state
        git merge --abort 2>/dev/null || true
    fi
    
    echo "---"
done

echo "=== PR Conflict Resolution Complete ==="