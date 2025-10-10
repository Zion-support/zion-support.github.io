#!/bin/bash

# Find all files with merge conflicts
files=$(find /workspace/src -name "*.tsx" -o -name "*.ts" | xargs grep -l "\|

for file in $files; do
    echo "Cleaning up merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/^$/,/^
    
    echo "Cleaned: $file"
done

echo "Merge conflict cleanup completed!"