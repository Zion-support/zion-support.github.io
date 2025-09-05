#!/bin/bash
# Script to fix merge conflicts by keeping HEAD version
echo "Fixing merge conflicts in pages/ directory..."
# Find all files with merge conflicts
files_with_conflicts=$(grep -r "" src/ --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx" -l)
files_with_conflicts=$(find pages/ -name "*.tsx" -exec grep -l "" {} \;)
for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    # Create a backup
    cp "$file" "$file.backup"
    # Use sed to remove merge conflict markers and keep HEAD version
    sed -i '/^/,/^/!d' "$file"
    sed -i '/^/,/^    sed -i '/^/d' "$file"
    sed -i '/^/d' "$file"
    sed -i '/^    # Remove lines from  to  (inclusive)
    # Remove lines from  to     sed -i '//,//d' "$file"
    sed -i '//,/    
    echo "Fixed: $file"
done
echo "Merge conflicts fixed!"