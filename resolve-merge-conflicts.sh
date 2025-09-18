#!/bin/bash

echo "🔧 Resolving merge conflicts automatically..."

# Remove the problematic App.minimal.tsx file that was deleted in HEAD
if [ -f "src/App.minimal.tsx" ]; then
    echo "Removing src/App.minimal.tsx (deleted in HEAD)"
    git rm src/App.minimal.tsx
fi

# Get list of all conflicted files
conflicted_files=$(git diff --name-only --diff-filter=U)

echo "Found $(echo "$conflicted_files" | wc -l) conflicted files"

# Resolve conflicts by using the incoming version (theirs) for most files
echo "$conflicted_files" | while read file; do
    if [ -n "$file" ]; then
        echo "Resolving conflict in: $file"
        # Use the incoming version (theirs) for most files
        git checkout --theirs "$file"
        git add "$file"
    fi
done

# Add all resolved files
git add .

echo "✅ All merge conflicts resolved"