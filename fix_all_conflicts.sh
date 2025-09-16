#!/bin/bash

echo "Fixing all remaining merge conflicts..."

# Find all files with merge conflicts
conflicted_files=$(grep -r -l "<<<<<<< HEAD" src/ 2>/dev/null || true)

if [ -z "$conflicted_files" ]; then
    echo "No merge conflicts found."
    exit 0
fi

echo "Found conflicted files:"
echo "$conflicted_files"

# For each conflicted file, remove all conflict markers
for file in $conflicted_files; do
    echo "Fixing conflicts in: $file"
    
    # Remove conflict markers
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    # Add the fixed file
    git add "$file"
done

echo "All merge conflicts fixed!"