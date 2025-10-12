#!/bin/bash

# Find all files with merge conflicts
<<<<<<< HEAD
files=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD")

for file in $files; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
    
    # Remove merge conflict markers and keep HEAD version
    awk '
    /^<<<<<<< HEAD/ { in_head = 1; next }
    /^=======/ { in_head = 0; in_other = 1; next }
    /^>>>>>>> / { in_other = 0; next }
    in_head { print }
    !in_head && !in_other { print }
    ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
done

<<<<<<< HEAD
echo "Merge conflicts fixed in all files"
=======
echo "Merge conflicts fixed!"
>>>>>>> cursor/fix-errors-and-merge-to-main-2460
