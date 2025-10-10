#!/bin/bash

echo "Resolving merge conflicts in all files..."

# Find all files with merge conflict markers
files_with_conflicts=$(grep -r -l "<<<<<<< HEAD\|=======\|>>>>>>> " . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.sh" --exclude="*.py" --exclude="*.cjs" --exclude="*.js" 2>/dev/null | head -50)

echo "Found $(echo "$files_with_conflicts" | wc -l) files with conflicts"

for file in $files_with_conflicts; do
    if [ -f "$file" ]; then
        echo "Processing: $file"
        
        # Create a backup
        cp "$file" "$file.backup"
        
        # Use sed to resolve conflicts by keeping HEAD version
        # Remove conflict markers and keep only the HEAD version
        sed -i '/^<<<<<<< HEAD/,/^=======/!d; /^=======/d; /^>>>>>>> /d' "$file"
        
        # Clean up any remaining conflict markers
        sed -i '/^<<<<<<< HEAD/d; /^=======/d; /^>>>>>>> /d' "$file"
        
        echo "Resolved conflicts in: $file"
    fi
done

echo "Conflict resolution completed!"
