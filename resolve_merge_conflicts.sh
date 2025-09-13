#!/bin/bash

echo "Resolving merge conflicts..."

# Find all files with merge conflicts
conflict_files=$(grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" | cut -d: -f1 | sort -u)

echo "Found conflict files:"
echo "$conflict_files"

# For each conflict file, resolve by keeping the newer version (after =======)
for file in $conflict_files; do
    echo "Resolving conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove conflict markers and keep the newer version
    # This removes everything from <<<<<<< HEAD to ======= and keeps what's after =======
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i 's/>>>>>>> origin\/[^>]*//g' "$file"
    
    echo "Resolved: $file"
done

echo "Merge conflicts resolved!"