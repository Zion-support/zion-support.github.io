#!/bin/bash

# Function to fix merge conflicts in a file
fix_merge_conflicts() {
    local file="$1"
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> cursor\/fix-errors-and-merge-to-main-00e4/d' "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
}

# Find all files with merge conflicts and fix them
find app -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \; | while read file; do
    fix_merge_conflicts "$file"
done

echo "All merge conflicts fixed!"
