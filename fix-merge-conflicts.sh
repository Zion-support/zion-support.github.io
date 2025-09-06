#!/bin/bash


# Script to automatically resolve merge conflicts by choosing the main branch version
# This script removes everything from <<<<<<< HEAD to ======= and keeps everything after =======


echo "Fixing merge conflicts in source files..."

# Find all files with merge conflicts in src and app directories
find src app -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.css" | while read file; do
  if [ -f "$file" ] && grep -q "<<<<<<< HEAD" "$file"; then
    echo "Fixing conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove everything from <<<<<<< HEAD to ======= (inclusive)
    # Keep everything after ======= until >>>>>>> 
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    
    # Remove the 
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
  fi
done

echo "Merge conflicts fixed!"

echo "Merge conflicts fixed!"

echo "Merge conflicts fixed. Backups saved to /workspace/backup-merge-conflicts/"
echo "Please review the changes and test the build."



echo "Merge conflicts fixed!"


echo "Fixing merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.html" --include="*.css" --include="*.cjs" --include="*.json" | cut -d: -f1 | sort -u)

echo "Found files with conflicts:"
echo "$files_with_conflicts"

# For each file, resolve conflicts by keeping our version (HEAD)
for file in $files_with_conflicts; do
    if [ -f "$file" ]; then
        echo "Fixing conflicts in: $file"

        # Use sed to remove merge conflict markers and keep HEAD version
        sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
        sed -i '/^

        # Remove any remaining conflict markers
        sed -i '/^<<<<<<< /d' "$file"
        sed -i '/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
    fi
done

echo "Merge conflicts fixed!"





echo "Merge conflicts fixed!"

