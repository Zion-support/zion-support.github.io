#!/bin/bash

echo "Fixing all merge conflicts by keeping HEAD version..."

# Find all files with merge conflicts
files_with_conflicts=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.json" -o -name "*.css" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

if [ -z "$files_with_conflicts" ]; then
    echo "No merge conflicts found."
    exit 0
fi

echo "Found $(echo "$files_with_conflicts" | wc -l) files with merge conflicts"

# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create backup
    cp "$file" "${file}.backup.$(date +%s)"
    
    # Fix merge conflicts by keeping HEAD version
    # This sed command removes everything from <<<<<<< HEAD to ======= (keeping HEAD)
    # and removes everything from ======= to >>>>>>> branch (removing incoming)
    sed -i '/<<<<<<< HEAD/,/=======/!d; /=======/d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< /d; /^=======/d; /^>>>>>>> /d' "$file"
done

echo "Merge conflicts fixed in all files."