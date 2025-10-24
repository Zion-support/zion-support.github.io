#!/bin/bash

# Safe script to merge cursor branches with conflict resolution
echo "Starting safe cursor branch merge process..."

# Get a small batch of branches to start with
BRANCHES=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | head -20)

count=0
successful_merges=0
failed_merges=0

for branch in $BRANCHES; do
    count=$((count + 1))
    echo "Processing branch $count: $branch"
    
    # Extract branch name without origin/
    branch_name=$(echo $branch | sed 's/origin\///')
    
    # Check if branch exists locally
    if ! git show-ref --verify --quiet refs/heads/$branch_name; then
        # Create local tracking branch
        git checkout -b $branch_name $branch 2>/dev/null
    fi
    
    # Switch to main branch
    git checkout main
    
    # Try to merge with conflict resolution
    if git merge --no-ff -m "Merge $branch_name" $branch_name 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        successful_merges=$((successful_merges + 1))
    else
        echo "⚠️  Merge conflict in $branch_name, attempting to resolve..."
        
        # Check if there are actual conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "❌ Real conflicts found in $branch_name, skipping for now"
            git merge --abort 2>/dev/null
            failed_merges=$((failed_merges + 1))
        else
            # No real conflicts, might be a fast-forward issue
            echo "ℹ️  No conflicts, but merge failed. Checking status..."
            git status --short
            git merge --abort 2>/dev/null
            failed_merges=$((failed_merges + 1))
        fi
    fi
    
    # Clean up local branch
    git branch -D $branch_name 2>/dev/null
    
    echo "---"
done

echo "Safe merge process completed!"
echo "Total branches processed: $count"
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"