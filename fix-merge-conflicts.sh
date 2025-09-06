#!/bin/bash

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
        sed -i '/^>>>>>>> /d' "$file"
        
        # Remove any remaining conflict markers
        sed -i '/^<<<<<<< /d' "$file"
        sed -i '/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
    fi
done

echo "Merge conflicts fixed!"