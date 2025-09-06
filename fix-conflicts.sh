#!/bin/bash

# Find all files with merge conflicts
:fix-conflicts.sh
files=$(find pages components -name "*.tsx" -o -name "*.ts" | xargs grep -l "")

files=$(find pages components -name "*.tsx" -o -name "*.ts" | xargs grep -l "")
:backup-problematic-files/fix-conflicts.sh
:fix-conflicts.sh

for file in $conflicted_files; do
    echo "Fixing $file..."
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove all merge conflict markers and keep HEAD version
    sed -i '/^/,/^/!d' "$file"
    sed -i '/^/d' "$file"
    sed -i '/^    
    # Clean up any remaining conflict markers
    sed -i '/^
    sed -i '/^/d' "$file"
    sed -i '/^done
:backup-problematic-files/fix-conflicts.sh

:fix-conflicts.sh

echo "Fixed all conflicted files"