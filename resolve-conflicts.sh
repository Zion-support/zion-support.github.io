#!/bin/bash

# Get all conflicted files
conflicted_files=$(git status --porcelain | grep "^UU" | cut -c4-)

echo "Resolving conflicts for $(echo "$conflicted_files" | wc -l) files..."

# Resolve each conflict by accepting our version
for file in $conflicted_files; do
    echo "Resolving conflict in: $file"
    git checkout --ours "$file"
    git add "$file"
done

echo "All conflicts resolved!"