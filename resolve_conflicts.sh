#!/bin/bash

# Script to resolve merge conflicts by choosing the newer version (HEAD)

echo "Resolving merge conflicts..."

# Get list of conflicted files
conflicted_files=$(git diff --name-only --diff-filter=U)

for file in $conflicted_files; do
    echo "Resolving conflicts in: $file"
    
    # Use git checkout to take the version from the current branch (HEAD)
    git checkout --ours "$file"
    
    # Add the resolved file
    git add "$file"
done

echo "All conflicts resolved. Committing merge..."
git commit -m "Resolve merge conflicts by choosing newer versions

- Resolved conflicts in AI breakthrough pages
- Resolved conflicts in case studies
- Resolved conflicts in layout and homepage
- Resolved conflicts in quantum computing solutions
- Resolved conflicts in promotion banners and widgets

All conflicts resolved by choosing the newer version from main branch."