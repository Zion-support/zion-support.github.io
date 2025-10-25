#!/bin/bash

# Script to find branches that have actual changes compared to main

echo "🔍 Finding branches with actual changes..."

# Get all cursor branches
BRANCHES=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | sed 's/origin\///')

CHANGED_BRANCHES=()

for branch in $BRANCHES; do
    # Check if branch has commits ahead of main
    COMMITS_AHEAD=$(git log --oneline main..origin/$branch 2>/dev/null | wc -l)
    
    if [ "$COMMITS_AHEAD" -gt 0 ]; then
        echo "✅ $branch has $COMMITS_AHEAD commits ahead of main"
        CHANGED_BRANCHES+=("$branch")
    fi
done

echo "📊 Found ${#CHANGED_BRANCHES[@]} branches with changes:"
for branch in "${CHANGED_BRANCHES[@]}"; do
    echo "  - $branch"
done

# Also check merge branches
echo "🔍 Checking merge branches..."
MERGE_BRANCHES=$(git branch -r | grep "merge-cursor/fix-errors-and-merge-to-main" | sed 's/origin\///')

for branch in $MERGE_BRANCHES; do
    COMMITS_AHEAD=$(git log --oneline main..origin/$branch 2>/dev/null | wc -l)
    
    if [ "$COMMITS_AHEAD" -gt 0 ]; then
        echo "✅ $branch has $COMMITS_AHEAD commits ahead of main"
        CHANGED_BRANCHES+=("$branch")
    fi
done

echo "📊 Total branches with changes: ${#CHANGED_BRANCHES[@]}"