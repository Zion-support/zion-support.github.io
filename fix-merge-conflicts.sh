#!/bin/bash

echo "Fixing merge conflicts in the codebase..."

# Find all files with merge conflicts
<<<<<<< HEAD
files_with_conflicts=$(grep -r "<<<<<<< HEAD\|=======\|>>>>>>> main" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.cjs" --include="*.mjs" | cut -d: -f1 | sort | uniq)
=======
files_with_conflicts=$(find pages/ -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \;)
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# Create backup directory
mkdir -p /workspace/backup-merge-conflicts

# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create backup
    cp "$file" "/workspace/backup-merge-conflicts/$(basename "$file").backup"
    
<<<<<<< HEAD
    # Remove merge conflict markers and keep the main branch content
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> main/d' "$file"
=======
    # Use sed to remove merge conflict markers and keep HEAD version
    # Remove lines from <<<<<<< HEAD to ======= (inclusive)
    # Remove lines from ======= to >>>>>>> (inclusive)
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/=======/,/>>>>>>> /d' "$file"
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed. Backups saved to /workspace/backup-merge-conflicts/"
echo "Please review the changes and test the build."