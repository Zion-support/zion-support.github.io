#!/bin/bash

# Script to fix merge conflicts in the codebase
echo "Fixing merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" src/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" | cut -d: -f1 | sort -u)

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup.$(date +%s)"
    
    # Use sed to remove merge conflict markers and keep the first version
    sed -i '/<<<<<<< HEAD/,/=======/!d; /=======/d; />>>>>>> /d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/<<<<<<< HEAD/d; /=======/d; />>>>>>> /d' "$file"
done

echo "Merge conflicts fixed!"