#!/bin/bash

# Script to fix merge conflicts in blog files
# This script removes merge conflict markers and keeps the HEAD version

echo "Starting merge conflict resolution..."

# Find all files with merge conflicts
conflict_files=$(grep -l "^" /workspace/app/blog -r | head -50)

for file in $conflict_files; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep HEAD version
    # This removes everything from  to  and from  to ranch
    sed -i '/^/,/^/d' "$file"
    sed -i '/^    
    echo "Fixed: $file"
done

echo "Merge conflict resolution completed for first 50 files."
echo "Run this script again to process more files if needed."