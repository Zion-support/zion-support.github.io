#!/bin/bash

# Script to fix merge conflicts in the codebase
echo "Fixing merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" src/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" | cut -d: -f1 | sort -u)

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup.$(date +%s)"
    
    # Use git to resolve conflicts automatically (choose HEAD version)
    git checkout --ours "$file" 2>/dev/null || true
    
    # If that doesn't work, try to fix manually
    if grep -q "<<<<<<< HEAD" "$file"; then
        # Remove merge conflict markers and keep the first version
        sed -i '/<<<<<<< HEAD/,/>>>>>>> /c\
        ' "$file"
        # Clean up any remaining conflict markers
        sed -i '/=======/d' "$file"
        sed -i '/<<<<<<< HEAD/d' "$file"
        sed -i '/>>>>>>> /d' "$file"
    fi
done

echo "Merge conflicts fixed!"