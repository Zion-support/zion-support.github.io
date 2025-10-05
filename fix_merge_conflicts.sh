#!/bin/bash

# Script to fix Git merge conflicts by choosing HEAD version
# This will remove all merge conflict markers and keep only the HEAD version

echo "Fixing merge conflicts in all files..."

# Find all files with merge conflicts
files_with_conflicts=$(find src -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

if [ -z "$files_with_conflicts" ]; then
    echo "No merge conflicts found."
    exit 0
fi

echo "Found merge conflicts in $(echo "$files_with_conflicts" | wc -l) files"

# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove merge conflict markers and keep only HEAD version
    # This removes everything from <<<<<<< HEAD to ======= and from >>>>>>> to the end
    sed -i '/<<<<<<< HEAD/,/=======/d; />>>>>>> /d' "$file"
    
    # Clean up any empty lines that might be left
    sed -i '/^[[:space:]]*$/d' "$file"
done

echo "Merge conflicts fixed. Backup files created with .backup extension."
echo "Running tests to verify fixes..."

# Run tests to check if fixes worked
cd /workspace && pnpm run test:ci