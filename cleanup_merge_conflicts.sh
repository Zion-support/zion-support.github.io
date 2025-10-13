#!/bin/bash

# Clean up merge conflicts in all files
echo "Cleaning up merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

for file in $files_with_conflicts; do
    echo "Cleaning $file..."
    
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/^<<<<<<< HEAD$/,/^=======$/d' "$file"
    sed -i '/^>>>>>>> .*$/d' "$file"
    sed -i '/^<<<<<<< .*$/d' "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/^=======$/d' "$file"
    sed -i '/^>>>>>>> .*$/d' "$file"
done

echo "Merge conflicts cleaned up!"