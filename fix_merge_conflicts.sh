#!/bin/bash

# Function to fix merge conflicts in a file
fix_merge_conflicts() {
    local file="$1"
    echo "Fixing merge conflicts in: $file"
    
    # Create backup
    cp "$file" "${file}.backup"
    
    # Remove all merge conflict markers and keep the HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/!d' "$file"
    sed -i '/^=======/,/^>>>>>>>/d' "$file"
    sed -i '/^<<<<<<< HEAD/d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>>/d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
}

# Find all files with merge conflicts
files_with_conflicts=$(find app -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \;)

# Fix each file
for file in $files_with_conflicts; do
    fix_merge_conflicts "$file"
done

echo "All merge conflicts fixed!"
