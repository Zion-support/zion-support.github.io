#!/bin/bash

# Resolve merge conflicts by keeping HEAD version
git merge origin/main --no-commit

# Get list of conflicted files
conflicted_files=$(git diff --name-only --diff-filter=U)

# Resolve each conflict by keeping HEAD version
for file in $conflicted_files; do
    echo "Resolving conflict in: $file"
    git checkout --ours "$file"
    git add "$file"
done

# Commit the merge
git commit -m "Resolve merge conflicts by keeping HEAD version"

echo "All conflicts resolved and committed"