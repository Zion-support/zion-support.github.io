#!/bin/bash

# Script to fix merge conflicts in blog files
# This script removes merge conflict markers and keeps the HEAD version

echo "Starting merge conflict resolution..."

# Find all files with merge conflicts
<<<<<<< HEAD
conflict_files=$(grep -l "^
    sed -i '/^
for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file to keep only HEAD version
    awk '
    /^<<<<<<< HEAD/ { in_head = 1; next }
    /^=======/ { in_head = 0; in_other = 1; next }
    /^>>>>>>> / { in_other = 0; next }
    in_head { print }
    !in_head && !in_other { print }
    ' "$file" > "$temp_file"
    
    # Replace the original file with the cleaned version
    mv "$temp_file" "$file"
=======
conflict_files=$(grep -l "^<<<<<<< HEAD" /workspace/app/blog -r | head -50)

for file in $conflict_files; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep HEAD version
    # This removes everything from <<<<<<< HEAD to ======= and from ======= to >>>>>>> branch
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> .*/d' "$file"
    
    echo "Fixed: $file"
done

>>>>>>> origin/fix-errors-and-merge-final
echo "Merge conflict resolution completed for first 50 files."
echo "Run this script again to process more files if needed."