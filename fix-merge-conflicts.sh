#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use git to resolve conflicts by choosing HEAD version
    # This will remove all conflict markers and keep the HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/!d; /^=======/,/^>>>>>>> /d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< HEAD/d; /^=======/d; /^>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"
