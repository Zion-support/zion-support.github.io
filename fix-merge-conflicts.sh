#!/bin/bash

# Script to fix merge conflicts by keeping HEAD version
echo "Fixing merge conflicts in source files..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< " src/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" --include="*.css" | cut -d: -f1 | sort -u)

for file in $files_with_conflicts; do
    echo "Fixing conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup.$(date +%s)"
    
    # Remove merge conflict markers and keep HEAD version
    # keeping only the HEAD version
    awk '
=======
    # keeping only the HEAD version
    awk '
    in_head { print }
    !in_head && !in_other { print }
    ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"
