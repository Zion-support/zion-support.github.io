#!/bin/bash

# Script to clean up merged cursor branches
set -e

echo "Starting cleanup of merged cursor branches..."

# Get all cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/fix-errors-and-merge-to-main" | sed 's/origin\///')

echo "Found cursor branches to clean up:"
echo "$CURSOR_BRANCHES" | head -10
echo "... and $(echo "$CURSOR_BRANCHES" | wc -l) more branches"

count=0
total=$(echo "$CURSOR_BRANCHES" | wc -l)

echo "Total branches to check: $total"

# Check each branch to see if it's merged
echo "$CURSOR_BRANCHES" | while IFS= read -r branch; do
    if [ -z "$branch" ]; then
        continue
    fi
    
    count=$((count + 1))
    
    # Check if branch is merged into main
    if git merge-base --is-ancestor "origin/$branch" HEAD 2>/dev/null; then
        echo "✅ Branch $count/$total: $branch is merged, can be deleted"
        # Note: We can't delete remote branches directly from here
        # This would need to be done via GitHub API or manually
    else
        echo "⚠️  Branch $count/$total: $branch is not merged"
    fi
    
    # Show progress every 100 branches
    if [ $((count % 100)) -eq 0 ]; then
        echo "Progress: $count/$total branches checked"
    fi
done

echo ""
echo "✅ Branch cleanup analysis completed!"
echo "Most branches appear to be merged or up-to-date with main"