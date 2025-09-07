#!/bin/bash

# Script to fix merge conflicts by keeping HEAD version
echo "Fixing merge conflicts in source files..."

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace/app -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep HEAD version
    # This sed command removes everything from ======= to >>>>>>> and the ======= line itself
    sed -i '/=======/,/>>>>>>>/d' "$file"
    
    # Remove any remaining <<<<<<< HEAD lines
    sed -i '/<<<<<<< HEAD/d' "$file"
    
    # Remove any remaining >>>>>>> lines
    sed -i '/>>>>>>>/d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"