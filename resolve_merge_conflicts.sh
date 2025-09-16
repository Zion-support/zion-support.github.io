#!/bin/bash

# Script to resolve merge conflicts by choosing HEAD version
echo "Resolving merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(find . -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.json" -o -name "*.toml" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true)

if [ -z "$files_with_conflicts" ]; then
    echo "No merge conflicts found."
    exit 0
fi

echo "Found merge conflicts in:"
echo "$files_with_conflicts"

# Process each file
for file in $files_with_conflicts; do
    echo "Processing $file..."
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to resolve conflicts by choosing HEAD version
    # Remove conflict markers and keep only HEAD content
    sed -i '/^<<<<<<< HEAD/,/^=======/!d; /^=======/d; /^>>>>>>> /d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< /d; /^=======/d; /^>>>>>>> /d' "$file"
    
    echo "Resolved conflicts in $file"
done

echo "Merge conflicts resolved!"