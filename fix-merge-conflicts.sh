#!/bin/bash

# Script to automatically resolve merge conflicts by choosing HEAD version
echo "Fixing merge conflicts in all files..."

# Find all files with merge conflicts
files_with_conflicts=$(find ./app -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD")

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file to resolve conflicts
    awk '
    /^<<<<<<< HEAD/ { in_head = 1; next }
    /^=======/ { in_head = 0; in_other = 1; next }
    /^>>>>>>> / { in_other = 0; next }
    in_other { next }
    { print }
    ' "$file" > "$temp_file"
    
    # Replace the original file
    mv "$temp_file" "$file"
done

echo "Merge conflicts resolved in all files."