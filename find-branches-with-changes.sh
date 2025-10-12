#!/bin/bash

# Find branches that actually have changes compared to main

echo "Searching for branches with actual changes..."
BRANCHES_WITH_CHANGES=0
TOTAL_CHECKED=0

git branch -r | grep -E 'origin/cursor/(fix-errors-and-merge|check-fix-push)' | sed 's/origin\///' | while read BRANCH; do
    TOTAL_CHECKED=$((TOTAL_CHECKED + 1))
    
    # Check if branch has changes compared to main
    DIFF_COUNT=$(git diff main..."origin/$BRANCH" --stat 2>/dev/null | wc -l)
    
    if [ "$DIFF_COUNT" -gt 0 ]; then
        echo "Branch with changes: $BRANCH ($DIFF_COUNT lines different)"
        BRANCHES_WITH_CHANGES=$((BRANCHES_WITH_CHANGES + 1))
        
        # Show what files changed
        git diff main..."origin/$BRANCH" --name-status | head -10
        echo "---"
    fi
    
    # Progress indicator every 100 branches
    if [ $((TOTAL_CHECKED % 100)) -eq 0 ]; then
        echo "Checked $TOTAL_CHECKED branches so far..."
    fi
done

echo "Search complete. Found $BRANCHES_WITH_CHANGES branches with changes out of $TOTAL_CHECKED checked."