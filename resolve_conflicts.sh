#!/bin/bash

# Script to resolve common merge conflicts
echo "Starting merge conflict resolution..."

# Find all files with merge conflicts
conflicted_files=$(grep -l "^<<<<<<<\|^=======\|^>>>>>>>" -r src/ 2>/dev/null | head -20)

for file in $conflicted_files; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the first version (HEAD)
    sed -i '/^<<<<<<< /,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "Resolved conflicts in: $file"
done

echo "Merge conflict resolution completed for first 20 files."
echo "Please review the changes and test the build."