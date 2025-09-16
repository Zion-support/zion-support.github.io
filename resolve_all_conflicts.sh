#!/bin/bash

echo "Resolving all merge conflicts by using main branch version..."

# Find all files with merge conflicts
conflicted_files=$(grep -r -l "<<<<<<< HEAD" src/ 2>/dev/null || true)

if [ -z "$conflicted_files" ]; then
    echo "No merge conflicts found."
    exit 0
fi

echo "Found conflicted files:"
echo "$conflicted_files"

# For each conflicted file, resolve conflicts by using main branch version
for file in $conflicted_files; do
    echo "Resolving conflicts in: $file"
    
    # Use git checkout --theirs to resolve conflicts
    git checkout --theirs "$file" 2>/dev/null || {
        echo "Failed to resolve conflicts in $file, trying manual approach..."
        
        # Manual approach: remove conflict markers and keep the content after =======
        sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
    }
    
    # Add the resolved file
    git add "$file"
done

echo "All merge conflicts resolved!"