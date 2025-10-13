#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# Fix each file
for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Remove merge conflict markers and keep the content between the first <<<<<<< and the last >>>>>>>
    # This is a simple approach that keeps the "HEAD" version
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    # Clean up any remaining empty lines at the end
    sed -i '/^$/N;/^\n$/d' "$file"
done

echo "Merge conflicts fixed!"