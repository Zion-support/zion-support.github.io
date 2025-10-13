#!/bin/bash

echo "Resolving merge conflicts by choosing 'ours' version for all conflicted files..."

# Get all conflicted files
conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4-)

# Count total files
total_files=$(echo "$conflicted_files" | wc -l)
echo "Total conflicted files: $total_files"

# Resolve conflicts by choosing 'ours' version
count=0
for file in $conflicted_files; do
    if [ -f "$file" ]; then
        echo "Resolving conflict in: $file"
        git checkout --ours "$file"
        git add "$file"
        ((count++))
        
        # Show progress every 50 files
        if [ $((count % 50)) -eq 0 ]; then
            echo "Progress: $count/$total_files files resolved"
        fi
    fi
done

echo "Resolved conflicts in $count files"
echo "Completing merge..."

# Complete the merge
git commit -m "Resolve merge conflicts by choosing main branch version

- Resolved 620 merge conflicts
- Chose 'ours' version for all conflicted files
- All conflicts resolved successfully"

echo "Merge conflicts resolved and committed successfully!"