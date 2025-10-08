#!/bin/bash

# Find branches that have commits not in main

echo "Finding branches with unmerged commits..."
echo ""

# Get list of cursor branches
branches=$(git branch -r | grep "origin/cursor/fix-errors-and-merge-to-main-" | sed 's/origin\///' | head -50)

unmerged=()
merged=()

for branch in $branches; do
    # Check if branch has commits not in main
    if ! git merge-base --is-ancestor "origin/$branch" HEAD 2>/dev/null; then
        unmerged+=("$branch")
        echo "❌ NEEDS MERGE: $branch"
    else
        merged+=("$branch")
    fi
done

echo ""
echo "================================"
echo "Summary (first 50 branches):"
echo "  Already merged: ${#merged[@]}"
echo "  Need merging: ${#unmerged[@]}"
echo "================================"

if [ ${#unmerged[@]} -gt 0 ]; then
    echo ""
    echo "Branches that need merging:"
    for branch in "${unmerged[@]}"; do
        echo "  - $branch"
    done
fi
