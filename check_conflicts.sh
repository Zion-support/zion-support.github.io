#!/bin/bash

# Script to check for merge conflicts with recent branches
echo "Checking for merge conflicts with recent branches..."

# Get the 20 most recent remote branches
RECENT_BRANCHES=$(git branch -r --sort=-committerdate | grep -v HEAD | grep -v main | head -20)

conflict_branches=()
clean_branches=()

for branch in $RECENT_BRANCHES; do
    echo "Checking branch: $branch"
    
    # Try to merge with main (dry run)
    if git merge-base HEAD "$branch" > /dev/null 2>&1; then
        if git merge-tree $(git merge-base HEAD "$branch") HEAD "$branch" > /dev/null 2>&1; then
            if git merge-tree $(git merge-base HEAD "$branch") HEAD "$branch" | grep -q "<<<<<<<"; then
                echo "  ❌ CONFLICT FOUND"
                conflict_branches+=("$branch")
            else
                echo "  ✅ Clean merge"
                clean_branches+=("$branch")
            fi
        else
            echo "  ❌ Merge failed"
            conflict_branches+=("$branch")
        fi
    else
        echo "  ❌ No common base"
        conflict_branches+=("$branch")
    fi
done

echo ""
echo "SUMMARY:"
echo "Clean branches: ${#clean_branches[@]}"
echo "Conflict branches: ${#conflict_branches[@]}"

if [ ${#conflict_branches[@]} -gt 0 ]; then
    echo ""
    echo "Branches with conflicts:"
    for branch in "${conflict_branches[@]}"; do
        echo "  - $branch"
    done
fi

if [ ${#clean_branches[@]} -gt 0 ]; then
    echo ""
    echo "Branches ready to merge:"
    for branch in "${clean_branches[@]}"; do
        echo "  - $branch"
    done
fi