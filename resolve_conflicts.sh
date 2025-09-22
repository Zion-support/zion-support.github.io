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

# Handle modify/delete conflicts by removing the files
git status --porcelain | grep "^DU" | cut -c4- | while read file; do
    echo "Removing deleted file: $file"
    git rm "$file"
done

echo "All conflicts resolved. Committing merge..."
git commit -m "Merge PR #11903: Expand services advertise and build project - Resolved conflicts by choosing main branch version"
echo "Starting conflict resolution..."

# First, let's merge main into our branch
git merge main

# For most conflicts, we'll take the main branch version
# But we want to keep our netlify.toml fix
git checkout --ours netlify.toml

# For other critical files, take main branch version
git checkout --theirs package.json
git checkout --theirs vite.config.ts
git checkout --theirs tsconfig.json
git checkout --theirs src/App.tsx
git checkout --theirs src/main.tsx
git checkout --theirs index.html
git checkout --theirs src/index.css

# For all other conflicts, take main branch version
git status --porcelain | grep "^UU" | cut -c4- | while read file; do
    if [ "$file" != "netlify.toml" ]; then
        echo "Resolving conflict in $file (taking main branch version)"
        git checkout --theirs "$file"
        git add "$file"
    fi
done

# Add all resolved files
git add .

echo "Conflict resolution completed. Checking status..."
git status

# Script to automatically resolve merge conflicts by choosing main branch version
echo "Resolving merge conflicts by choosing main branch version..."

# Get list of conflicted files
git status --porcelain | grep "^UU" | cut -c4- | while read file; do
    echo "Resolving conflict in: $file"
    # Choose the main branch version (ours)
    git checkout --ours "$file"
    git add "$file"
done

# Handle modify/delete conflicts by removing the files
git status --porcelain | grep "^DU" | cut -c4- | while read file; do
    echo "Removing deleted file: $file"
    git rm "$file"
done

echo "All conflicts resolved. Committing merge..."
git commit -m "Merge PR #11903: Expand services advertise and build project - Resolved conflicts by choosing main branch version"


