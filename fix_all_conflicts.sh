#!/bin/bash

echo "Fixing all merge conflicts by removing conflict markers..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" /workspace/app/ --include="*.tsx" --include="*.ts" -l)

if [ -z "$files_with_conflicts" ]; then
    echo "No merge conflicts found in app directory"
    exit 0
fi

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# For each file with conflicts, remove all conflict markers
for file in $files_with_conflicts; do
    echo "Fixing conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove all conflict markers and keep content after the last =======
    # This is a more aggressive approach that removes everything between conflict markers
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
done

echo "All merge conflicts fixed!"