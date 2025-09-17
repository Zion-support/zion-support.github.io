#!/bin/bash

echo "Final merge resolution - accepting our version for all conflicts..."

# Add all resolved files
git add .

# For any remaining unmerged files, accept our version
git status --porcelain | grep "^UU\|^AA\|^DD" | awk '{print $2}' | while read file; do
    if [ -f "$file" ]; then
        echo "Resolving conflict in: $file"
        git checkout --ours "$file"
        git add "$file"
    fi
done

# For files that were deleted by us but modified by them, keep them deleted
git status --porcelain | grep "^DU" | awk '{print $2}' | while read file; do
    echo "Keeping deleted: $file"
    git rm "$file"
done

# For files that were added by them but not by us, remove them
git status --porcelain | grep "^AU" | awk '{print $2}' | while read file; do
    echo "Removing added file: $file"
    git rm "$file"
done

echo "Committing merge..."
git commit -m "Resolve all merge conflicts by accepting our clean version"