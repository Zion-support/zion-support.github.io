#!/bin/bash

# Script to automatically resolve merge conflicts by choosing main branch version
echo "Resolving merge conflicts by choosing main branch version..."

# Get list of conflicted files
git status --porcelain | grep "^UU" | cut -c4- | while read file; do
    echo "Resolving conflict in: $file"
    # Choose the main branch version (ours)
    git checkout --ours "$file"
    git add "$file"
done

echo "All conflicts resolved. Committing merge..."
git commit -m "Merge PR #11887: Automate test improve and merge code - Resolved conflicts by choosing main branch version"