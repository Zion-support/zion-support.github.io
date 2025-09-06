#!/bin/bash

echo "Resolving merge conflicts for PR #12178..."

# Get list of conflicted files
CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)

echo "Found conflicted files:"
echo "$CONFLICTED_FILES"

# Resolve conflicts by taking the version from the PR branch
for file in $CONFLICTED_FILES; do
    echo "Resolving conflict in: $file"
    git checkout origin/cursor/fix-website-loading-errors-and-merge-08ac -- "$file"
done

# Add all resolved files
git add .

echo "All conflicts resolved by preferring PR branch version"