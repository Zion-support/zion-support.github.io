#!/bin/bash

# Script to fix merge conflicts by keeping the HEAD version
echo "Fixing merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(find . -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep HEAD version
    # This is a simplified approach - it keeps everything between <<<<<<< HEAD and =======
    # and removes everything between ======= and >>>>>>> cursor/...
    
    # First, remove the ======= to >>>>>>> sections
    sed -i '/^=======/,/^>>>>>>> cursor/d' "$file"
    
    # Then remove the <<<<<<< HEAD markers
    sed -i '/^<<<<<<< HEAD/d' "$file"
    
    # Remove any remaining merge conflict markers
    sed -i '/^>>>>>>> cursor/d' "$file"
    sed -i '/^=======/d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"