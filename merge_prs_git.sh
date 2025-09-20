#!/bin/bash

# Script to merge PRs using git commands directly
echo "Starting bulk PR merge process using git..."

# Function to extract PR number from branch name
extract_pr_number() {
    local branch_name="$1"
    echo "$branch_name" | grep -o 'pr-[0-9]*' | grep -o '[0-9]*' || echo "$branch_name" | grep -o '[0-9]*' | head -1
}

# Get all remote branches that look like PR branches
PR_BRANCHES=$(git branch -r | grep -E '(pr-|pull-|fix-|feature-|update-)' | head -20)

echo "Found branches to process:"
echo "$PR_BRANCHES"

merged=0
failed=0
count=0

for branch in $PR_BRANCHES; do
    count=$((count + 1))
    branch_name=$(echo $branch | sed 's/origin\///')
    
    echo ""
    echo "[$count] Processing branch: $branch_name"
    
    # Fetch the branch
    git fetch origin $branch_name 2>/dev/null
    
    if [ $? -eq 0 ]; then
        # Try to merge
        echo "  Attempting to merge $branch_name into main..."
        
        if git merge origin/$branch_name --no-ff -m "Merge $branch_name into main" 2>/dev/null; then
            echo "  ✅ Successfully merged $branch_name"
            merged=$((merged + 1))
        else
            echo "  ❌ Merge conflict or failed to merge $branch_name"
            git merge --abort 2>/dev/null
            failed=$((failed + 1))
        fi
    else
        echo "  ❌ Failed to fetch $branch_name"
        failed=$((failed + 1))
    fi
    
    # Add a small delay
    sleep 0.5
done

echo ""
echo "=== MERGE SUMMARY ==="
echo "Total branches processed: $count"
echo "Successfully merged: $merged"
echo "Failed to merge: $failed"
echo "======================"

# Push the merged changes
echo ""
echo "Pushing merged changes to origin/main..."
git push origin main