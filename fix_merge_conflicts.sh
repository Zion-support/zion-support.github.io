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
    
    # Use sed to resolve conflicts by keeping HEAD version
    # Remove conflict markers and keep only the HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/!d; /^=======/,/^>>>>>>> /d; s/^<<<<<<< HEAD//; s/^=======//; s/^>>>>>>> .*//' "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< HEAD/d; /^=======/d; /^>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts resolved!"
