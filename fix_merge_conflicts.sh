#!/bin/bash

# Script to fix merge conflicts by keeping HEAD version
echo "Fixing merge conflicts in TypeScript/TSX files..."

# Find all .tsx and .ts files with merge conflicts (excluding .backup files)
files_with_conflicts=$(find /workspace/src -name "*.tsx" -o -name "*.ts" | grep -v ".backup" | xargs grep -l "<<<<<<< HEAD")

<<<<<<< HEAD
for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file to keep only HEAD version
    awk '
    /^<<<<<<< HEAD/ { in_head = 1; next }
    /^=======/ { in_head = 0; in_other = 1; next }
    /^>>>>>>> / { in_other = 0; next }
    in_head { print }
    !in_head && !in_other { print }
    ' "$file" > "$temp_file"
    
    # Replace the original file with the cleaned version
    mv "$temp_file" "$file"
=======
# Find all files with merge conflicts
conflict_files=$(grep -l "^
    sed -i '/^
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"