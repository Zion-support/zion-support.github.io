#!/bin/bash

echo "Resolving merge conflicts..."

# Find all files with conflicts
conflict_files=$(git diff --name-only --diff-filter=U)

for file in $conflict_files; do
    echo "Resolving conflicts in $file"
    
    # Remove conflict markers and keep both versions where possible
    sed -i '/^<<<<<<< HEAD$/d' "$file"
    sed -i '/^=======$/d' "$file"
    sed -i '/^>>>>>>> [a-f0-9]*$/d' "$file"
    
    # Remove duplicate lines that might have been created
    awk '!seen[$0]++' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
done

echo "All conflicts resolved!"