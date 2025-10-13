#!/bin/bash

# Script to merge all open PRs into main branch
set -e

echo "Starting to merge all open PRs..."

# List of branches to merge (most recent first)
branches=(
    "origin/cursor/fix-errors-and-merge-to-main-1077"
    "origin/cursor/fix-errors-and-merge-to-main-25a5"
    "origin/cursor/fix-errors-and-merge-to-main-2d1b"
    "origin/cursor/fix-errors-and-merge-to-main-2fa9"
    "origin/cursor/fix-errors-and-merge-to-main-396e"
    "origin/cursor/fix-errors-and-merge-to-main-3b7c"
    "origin/cursor/fix-errors-and-merge-to-main-3f21"
    "origin/cursor/fix-errors-and-merge-to-main-4d8c"
    "origin/cursor/fix-errors-and-merge-to-main-5690"
    "origin/cursor/fix-errors-and-merge-to-main-5aa5"
    "origin/cursor/fix-errors-and-merge-to-main-653f"
    "origin/cursor/fix-errors-and-merge-to-main-6977"
    "origin/cursor/fix-errors-and-merge-to-main-7ab0"
    "origin/cursor/fix-errors-and-merge-to-main-87ea"
    "origin/cursor/fix-errors-and-merge-to-main-c0a0"
    "origin/cursor/fix-errors-and-merge-to-main-c5eb"
    "origin/cursor/fix-errors-and-merge-to-main-c6b9"
    "origin/cursor/fix-errors-and-merge-to-main-d738"
    "origin/cursor/fix-errors-and-merge-to-main-dcd8"
    "origin/cursor/fix-errors-and-merge-to-main-e54f"
    "origin/cursor/fix-errors-and-merge-to-main-e863"
    "origin/cursor/fix-errors-and-merge-to-main-f45b"
)

# Merge each branch
for branch in "${branches[@]}"; do
    echo "Attempting to merge $branch..."
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged $branch"
    else
        echo "❌ Failed to merge $branch, resolving conflicts..."
        # Resolve conflicts automatically
        git status --porcelain | grep "^UU" | cut -c4- | xargs -I {} git checkout --theirs {}
        git add .
        git commit -m "Resolve merge conflicts for $branch"
        echo "✅ Resolved conflicts and merged $branch"
    fi
done

echo "🎉 All PRs merged successfully!"