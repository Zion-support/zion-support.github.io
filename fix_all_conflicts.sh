#!/bin/bash

echo "Fixing all remaining merge conflicts..."

# Find all files with merge conflicts
files=$(find . -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.json" -o -name "*.css" -o -name "*.md" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found $(echo "$files" | wc -l) files with remaining conflicts"

for file in $files; do
    echo "Fixing: $file"
    # Skip backup files and node_modules
    if [[ "$file" == *".backup"* ]] || [[ "$file" == *"node_modules"* ]] || [[ "$file" == *".git"* ]]; then
        echo "Skipping: $file"
        continue
    fi
    
    # Create backup
    cp "$file" "$file.backup.$(date +%s)"
    
    # Remove merge conflict markers and keep HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/!d; /^=======/d; /^>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
done

echo "All merge conflicts fixed!"