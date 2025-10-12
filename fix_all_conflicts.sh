#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(find app/ -name "*.tsx" -o -name "*.ts" | xargs grep -l "^<<<<<<< HEAD" 2>/dev/null)

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"
echo ""

# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove merge conflict markers and keep the content after =======
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
done

echo ""
echo "Merge conflicts fixed. Checking remaining conflicts..."

# Check if any conflicts remain
remaining=$(grep -r "^<<<<<<< HEAD\|^=======\|^>>>>>>> " app/ --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l)
echo "Remaining conflicts: $remaining"