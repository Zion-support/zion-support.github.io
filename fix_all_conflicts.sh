#!/bin/bash

# Find all files with merge conflicts in app directory
files_with_conflicts=$(find /workspace/app -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove merge conflict markers and keep the better version (after =======)
    # This is a simple approach - it removes everything between <<<<<<< HEAD and =======
    # and everything between ======= and >>>>>>> cursor
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> cursor/d' "$file"
    
    # Clean up any remaining merge conflict markers
    sed -i '/<<<<<<< HEAD/d' "$file"
    sed -i '/=======/d' "$file"
    sed -i '/>>>>>>> cursor/d' "$file"
    
    echo "Fixed: $file"
done

echo "All merge conflicts fixed!"
