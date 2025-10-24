#!/bin/bash

# Script to check which branches have commits not in main
echo "Checking all branches for commits not in main..."

# Get all remote branches
branches=$(git branch -r | grep -v "origin/HEAD" | grep -v "origin/main" | sed 's/origin\///')

echo "Found branches:"
echo "$branches"
echo ""

# Check each branch
for branch in $branches; do
    commits=$(git log --oneline "origin/$branch" ^origin/main | wc -l)
    if [ "$commits" -gt 0 ]; then
        echo "Branch $branch has $commits new commits:"
        git log --oneline "origin/$branch" ^origin/main | head -3
        echo ""
    fi
done

echo "Check completed."