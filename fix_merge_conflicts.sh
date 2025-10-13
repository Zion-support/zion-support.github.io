#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" app/components/ | cut -d: -f1 | sort -u)

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# Process each file
for file in $files_with_conflicts; do
    echo "Processing $file..."
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the latest version (after =======)
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> cursor/d' "$file"
    
    echo "Fixed $file"
done

echo "All merge conflicts fixed!"