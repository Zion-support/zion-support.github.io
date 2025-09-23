#!/bin/bash

# Script to resolve merge conflicts by choosing the main branch version
# This will resolve conflicts by keeping the main branch version (HEAD)

echo "Resolving merge conflicts by keeping main branch version..."

# Get list of conflicted files
git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- > conflicted_files.txt

echo "Found $(wc -l < conflicted_files.txt) conflicted files"

# For each conflicted file, resolve by choosing main branch version
while IFS= read -r file; do
    if [ -f "$file" ]; then
        echo "Resolving conflict in: $file"
        # Use git checkout to choose the main branch version (HEAD)
        git checkout --ours "$file"
        git add "$file"
    fi
done < conflicted_files.txt

# Clean up
rm conflicted_files.txt

echo "Conflicts resolved. Committing merge..."
git commit -m "Resolve merge conflicts by keeping main branch version

- Merged origin/auto/autonomy-17186719616 into main
- Resolved conflicts by choosing main branch version
- All conflicts automatically resolved"

echo "Merge completed successfully!"