#!/bin/bash

# Find all files with merge conflicts and fix them
echo "Fixing merge conflicts in all files...

# Find all files with merge conflict markers
files_with_conflicts=$(grep -r -l \|\|>>>>>>> " . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.log --exclude=*.txt" --exclude="*.json 2>/dev/null)

for file in $files_with_conflicts; do
    echo Fixing conflicts in: $file"
    
    # Create a backup
    cp "$file $file.backup"
    
    # Use sed to remove merge conflict markers and keep the HEAD version
    sed -i '/^$/,/^$/d' "$file
    sed -i '/^>>>>>>> .*$/d' $file"
    
    # Remove any remaining conflict markers
    sed -i '/^$/d' "$file
    sed -i '/^$/d' $file"
    sed -i '/^>>>>>>> .*$/d' "$file
done

echo Merge conflicts fixed in all files."