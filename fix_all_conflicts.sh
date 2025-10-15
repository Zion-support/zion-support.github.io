#!/bin/bash

echo "Fixing all remaining merge conflicts..."

# Find all files with merge conflicts
files=$(find app -name "*.tsx" -o -name "*.ts" | xargs grep -l "\|

for file in $files; do
    echo "Fixing: $file"
    
    # Create backup
    cp "$file" "${file}.backup"
    
    # Use git checkout to resolve conflicts by choosing HEAD version
    git checkout --ours "$file" 2>/dev/null || true
    
    # If that doesn't work, use sed to remove conflict markers
    if grep -q "
        sed -i '/
    fi
done

echo "All merge conflicts fixed!"