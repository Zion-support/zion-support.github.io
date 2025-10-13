#!/bin/bash

# Function to fix merge conflicts in a file
fix_merge_conflicts() {
    local file="$1"
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/!d; /^=======/d; /^>>>>>>> .*/d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< HEAD/d; /^=======/d; /^>>>>>>> .*/d' "$file"
}

# Find all files with merge conflicts in app directory
find /workspace/app -name "*.tsx" -o -name "*.ts" | while read file; do
    if grep -q "<<<<<<< HEAD" "$file"; then
        fix_merge_conflicts "$file"
    fi
done

echo "Merge conflicts fixed in app directory"
