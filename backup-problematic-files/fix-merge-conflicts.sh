#!/bin/bash

echo "Fixing merge conflicts in the codebase..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "\|\|\|

files_with_conflicts=$(find pages/ -name "*.tsx" -exec grep -l "/d' "$file"
    sed -i '/

# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create backup
    cp "$file" "/workspace/backup-merge-conflicts/$(basename "$file").backup"
    
    # Remove merge conflict markers and keep the main branch content
    sed -i '//,//d' "$file"
    sed -i '/echo "Fixing merge conflicts in pages/ directory..."

# Find all files with merge conflicts
files_with_conflicts=$(find pages/ -name "*.tsx" -exec grep -l "

    # Remove merge conflict markers and keep the main branch content
    sed -i '/
    sed -i '/

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove merge conflict markers and keep HEAD version
    # Remove lines from  to  (inclusive)
    # Remove lines from  to     sed -i '//,//d' "$file"
    sed -i '//,/        echo "Fixed: $file"
done

echo "Merge conflicts fixed!"

