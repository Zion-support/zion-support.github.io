#!/bin/bash

echo "Resolving merge conflicts for final-production-ready-clean branch..."

# Get list of conflicted files
CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)

echo "Found conflicted files:"
echo "$CONFLICTED_FILES"

# Resolve conflicts by taking the version from the final-production-ready-clean branch
for file in $CONFLICTED_FILES; do
    echo "Resolving conflict in: $file"
    git checkout origin/final-production-ready-clean -- "$file"
done

# Add all resolved files
git add .

echo "All conflicts resolved by preferring final-production-ready-clean version"