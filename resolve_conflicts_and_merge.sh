#!/bin/bash

# Resolve conflicts and merge PRs more robustly
set -e

echo "Starting conflict resolution and merge process..."

# First, pull latest changes
echo "Pulling latest changes from main..."
git pull origin main

# Get the most recent 10 PRs to avoid overwhelming
echo "Fetching recent PRs..."
gh pr list --state open --limit 10 --json number,headRefName,title > recent_prs.json

# Process each PR
successful=0
failed=0
processed=0

# Simple processing without jq
while IFS= read -r line; do
    # Extract PR number and branch name using grep and sed
    pr_num=$(echo "$line" | grep -o '"number":[0-9]*' | grep -o '[0-9]*')
    head_ref=$(echo "$line" | grep -o '"headRefName":"[^"]*"' | sed 's/"headRefName":"//' | sed 's/"//')
    
    if [ -z "$pr_num" ] || [ -z "$head_ref" ] || [ "$head_ref" = "null" ]; then
        continue
    fi
    
    echo "Processing PR #$pr_num: $head_ref"
    ((processed++))
    
    # Fetch the branch
    if ! git fetch origin "$head_ref" 2>/dev/null; then
        echo "❌ Failed to fetch branch $head_ref"
        ((failed++))
        continue
    fi
    
    # Try to merge
    if git merge "origin/$head_ref" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $head_ref"
        ((successful++))
    else
        echo "⚠️  Merge conflicts for $head_ref, resolving..."
        
        # Check if there are conflicts
        if git status | grep -q "both modified\|deleted by"; then
            echo "Resolving conflicts for $head_ref..."
            
            # Use our version for conflicts (keep main branch changes)
            git checkout --ours . 2>/dev/null || true
            git add . 2>/dev/null || true
            
            if git commit -m "Resolve conflicts for PR #$pr_num - $head_ref" 2>/dev/null; then
                echo "✅ Successfully resolved conflicts for $head_ref"
                ((successful++))
            else
                echo "❌ Failed to resolve conflicts for $head_ref"
                git merge --abort 2>/dev/null || true
                ((failed++))
            fi
        else
            echo "❌ Merge failed for other reasons, aborting $head_ref"
            git merge --abort 2>/dev/null || true
            ((failed++))
        fi
    fi
    
    echo "---"
    sleep 0.5  # Small delay
    
done < recent_prs.json

echo "Processing completed!"
echo "Processed: $processed"
echo "Successful: $successful"
echo "Failed: $failed"

# Push all changes
echo "Pushing changes to main..."
if git push origin main; then
    echo "✅ Successfully pushed all changes to main"
else
    echo "❌ Failed to push changes to main"
    exit 1
fi

echo "All done!"