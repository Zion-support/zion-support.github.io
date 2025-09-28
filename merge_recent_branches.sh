#!/bin/bash

# Script to merge recent cursor branches into main
set -e

echo "Starting merge process for recent branches..."

# List of recent branches to merge (excluding already merged ones)
BRANCHES=(
    "origin/cursor/fix-netlify-build-and-merge-to-main-235d"
    "origin/cursor/fix-netlify-build-and-merge-to-main-6bbe"
    "origin/cursor/fix-netlify-build-and-merge-to-main-3cf0"
    "origin/cursor/fix-netlify-build-and-merge-to-main-ee72"
    "origin/cursor/fix-netlify-build-and-merge-to-main-f773"
    "origin/cursor/fix-netlify-build-and-merge-to-main-cfef"
    "origin/cursor/fix-netlify-build-and-merge-to-main-2113"
    "origin/cursor/fix-netlify-build-and-merge-to-main-1ab4"
    "origin/cursor/fix-netlify-build-and-merge-to-main-1fc1"
    "origin/cursor/fix-netlify-build-and-merge-to-main-d22b"
)

for branch in "${BRANCHES[@]}"; do
    echo "Attempting to merge $branch..."
    
    # Check if branch exists
    if git show-ref --verify --quiet refs/$branch; then
        # Try to merge
        if git merge "$branch" --no-commit 2>/dev/null; then
            echo "Successfully merged $branch"
            git commit -m "Merge $branch: Automated merge of recent changes"
        else
            echo "Merge conflicts or already up to date for $branch"
            # Reset any failed merge
            git merge --abort 2>/dev/null || true
        fi
    else
        echo "Branch $branch does not exist, skipping..."
    fi
done

echo "Merge process completed!"