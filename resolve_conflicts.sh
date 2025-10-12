#!/bin/bash

# Find all files with merge conflicts
files_with_conflicts=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# Process each file
for file in $files_with_conflicts; do
    echo "Processing $file..."
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove all merge conflict markers and keep the content between the last ======= and >>>>>>>
    # This keeps the most recent/complete version
    awk '
    /^<<<<<<< HEAD/ { in_conflict = 1; next }
    /^=======/ { if (in_conflict) { in_conflict = 2; next } }
    /^>>>>>>> / { if (in_conflict == 2) { in_conflict = 0; next } }
    { if (in_conflict == 0 || in_conflict == 2) print }
    ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
    
    echo "Resolved conflicts in $file"
done

echo "All merge conflicts resolved!"
