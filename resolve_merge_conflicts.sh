#!/bin/bash

echo "Resolving all merge conflicts by accepting incoming changes from remote main..."

# Get list of all conflicted files
git status --porcelain | grep "^UU\|^AU\|^UA\|^DD\|^AD\|^DA" | awk '{print $2}' > conflicted_files.txt

# Accept incoming changes for all conflicted files
while IFS= read -r file; do
    if [ -f "$file" ]; then
        echo "Resolving conflict in: $file"
        git checkout --theirs "$file"
        git add "$file"
    fi
done < conflicted_files.txt

# For modify/delete conflicts, accept the deletion (remove the file)
git status --porcelain | grep "^DU\|^UD" | awk '{print $2}' | while read -r file; do
    if [ -f "$file" ]; then
        echo "Removing file (deleted in incoming): $file"
        git rm "$file"
    fi
done

echo "Merge conflicts resolved. Committing changes..."

# Commit the resolved conflicts
git commit -m "Resolve merge conflicts: accept incoming changes from remote main"

echo "Merge conflicts resolution completed!"