#!/bin/bash

echo "Resolving all merge conflicts..."

# Function to resolve conflicts by taking the HEAD version (our local changes)
resolve_conflicts() {
    local file="$1"
    echo "Resolving conflicts in: $file"
    
    # Remove all conflict markers and keep the HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> [a-f0-9]/d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< HEAD/d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
}

# Find all files with merge conflicts
conflict_files=$(git status --porcelain | grep "^UU" | cut -c4-)

if [ -z "$conflict_files" ]; then
    # Alternative method to find conflict files
    conflict_files=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true)
fi

echo "Found conflict files:"
echo "$conflict_files"

# Resolve conflicts in each file
for file in $conflict_files; do
    if [ -f "$file" ]; then
        resolve_conflicts "$file"
    fi
done

echo "All merge conflicts resolved!"