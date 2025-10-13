#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to resolve merge conflicts by keeping the version after =======
    # This removes everything from <<<<<<< HEAD to ======= and keeps what's after =======
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    
    # Remove the remaining merge conflict markers
    sed -i '/>>>>>>> cursor\//d' "$file"
    
    echo "Fixed: $file"
done

echo "All merge conflicts resolved!"