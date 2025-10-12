#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep HEAD version
    # This is a simple approach - remove everything between ======= and >>>>>>> markers
    # and remove the <<<<<<< HEAD line
    sed -i '/^<<<<<<< HEAD/d' "$file"
    sed -i '/^=======/,/^>>>>>>>/d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"