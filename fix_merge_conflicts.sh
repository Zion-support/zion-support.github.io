#!/bin/bash

echo "Fixing merge conflicts in the codebase..."

# Find all files with merge conflict markers
conflict_files=$(grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" | cut -d: -f1 | sort -u)

echo "Found merge conflicts in:"
echo "$conflict_files"

for file in $conflict_files; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the HEAD version (first part)
    awk '/^<<<<<<< HEAD/,/^=======/ { if (!/^<<<<<<< HEAD/ && !/^=======/) print } /^>>>>>>>/ { next } !/^<<<<<<< HEAD/,/^=======/ { print } !/^>>>>>>>/ { print }' "$file" > "$file.tmp"
    
    # If the file is still corrupted, try a simpler approach
    if grep -q "<<<<<<< HEAD" "$file.tmp"; then
        echo "Using simpler conflict resolution for $file"
        # Keep only the HEAD version (before =======)
        sed '/^=======/,/^>>>>>>>/d' "$file" | sed '/^<<<<<<< HEAD/d' > "$file.tmp"
    fi
    
    mv "$file.tmp" "$file"
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"