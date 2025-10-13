#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# For each file, remove merge conflict markers and keep the HEAD version
for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/!d; /^=======/d; /^>>>>>>> .*/d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< HEAD/d; /^=======/d; /^>>>>>>> .*/d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"
