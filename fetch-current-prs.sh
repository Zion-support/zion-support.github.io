#!/bin/bash

# Fetch current open PRs using git commands
echo "Fetching all remote branches..."
git fetch --all

echo ""
echo "Checking for branches that might be PRs..."
git branch -r | grep "cursor/fix" | grep -E "(errors|merge)" | head -20

echo ""
echo "Checking recent activity on these branches..."
for branch in $(git branch -r | grep "cursor/fix" | grep -E "(errors|merge)" | head -10); do
    echo "Branch: $branch"
    git log -1 --format="%ci - %s" "$branch" 2>/dev/null || echo "  (branch not found)"
    echo ""
done
