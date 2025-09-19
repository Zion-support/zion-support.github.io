#!/bin/bash

echo "Resolving all remaining merge conflicts...

# Find all files with merge conflicts and resolve them
while IFS= read -r -d '' file; do
    echo Resolving conflicts in: $file"
    
    # Use git to resolve conflicts by accepting our version (HEAD)
    git checkout --ours "$file
    git add $file"
done < <(find . -name "*.js -o -name *.jsx" -o -name "*.ts -o -name *.tsx" -o -name "*.json -print0 | xargs -0 grep -l " 2>/dev/null)

echo "All remaining merge conflicts resolved!"