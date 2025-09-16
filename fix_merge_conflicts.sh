#!/bin/bash

echo "Finding files with merge conflicts..."

# Find all files with merge conflict markers
files_with_conflicts=$(grep -r "<<<<<<< HEAD" . --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx" --include="*.json" --include="*.css" --include="*.md" | cut -d: -f1 | sort -u)

echo "Found $(echo "$files_with_conflicts" | wc -l) files with merge conflicts"

# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Skip backup files and node_modules
    if [[ "$file" == *".backup"* ]] || [[ "$file" == *"node_modules"* ]] || [[ "$file" == *".git"* ]]; then
        echo "Skipping backup/git file: $file"
        continue
    fi
    
    # Create a backup
    cp "$file" "$file.backup.$(date +%s)"
    
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/!d; /^=======/d; /^>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflict resolution complete!"