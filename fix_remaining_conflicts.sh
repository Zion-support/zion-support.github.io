#!/bin/bash

echo "Fixing all remaining merge conflicts..."

# Find all files with merge conflicts, excluding node_modules
files=$(find . -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found $(echo "$files" | wc -l) files with remaining conflicts"

for file in $files; do
    echo "Fixing: $file"
    
    # Skip backup files
    if [[ "$file" == *".backup"* ]]; then
        echo "Skipping backup file: $file"
        continue
    fi
    
    # Create backup
    cp "$file" "$file.backup.$(date +%s)"
    
    # Remove merge conflict markers and keep HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/!d; /^=======/d; /^>>>>>>> /d' "$file"
    
    # Check if file is now empty or has only whitespace
    if [[ ! -s "$file" ]] || [[ -z "$(cat "$file" | tr -d '[:space:]')" ]]; then
        echo "File is empty after conflict resolution, restoring from backup"
        mv "$file.backup.$(date +%s)" "$file"
        continue
    fi
    
    echo "Fixed: $file"
done

echo "All remaining merge conflicts fixed!"