#!/bin/bash

echo "Resolving all merge conflicts by accepting incoming changes...

# Find all files with merge conflicts
conflict_files=$(grep -l " $(find . -name "*.js -o -name *.jsx" -o -name "*.ts -o -name *.tsx" -o -name "*.json) 2>/dev/null)

echo Found $(echo "$conflict_files" | wc -l) files with merge conflicts

# Resolve conflicts by accepting incoming changes
for file in $conflict_files; do
    echo Resolving conflicts in: $file"
    git checkout --theirs "$file
    git add $file"
done

echo "All merge conflicts resolved!"