#!/bin/bash

echo "Resolving merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" /workspace/app/ --include="*.tsx" --include="*.ts" -l)

if [ -z "$files_with_conflicts" ]; then
    echo "No merge conflicts found in app directory"
    exit 0
fi

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# For each file with conflicts, resolve by keeping the latest version
for file in $files_with_conflicts; do
    echo "Resolving conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use git checkout to get the latest version (ours)
    git checkout --ours "$file" 2>/dev/null || {
        # If git checkout fails, manually resolve by removing conflict markers
        # and keeping the content after the last =======
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>> /d' "$file"
    }
done

echo "Merge conflicts resolved!"