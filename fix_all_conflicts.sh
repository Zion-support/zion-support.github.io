#!/bin/bash

echo "Fixing all remaining merge conflicts..."

# Find all files with merge conflicts
files=$(find app -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD\|=======\|>>>>>>> origin" 2>/dev/null)

for file in $files; do
    echo "Fixing: $file"
    
    # Create backup
    cp "$file" "${file}.backup"
    
    # Use git checkout to resolve conflicts by choosing HEAD version
    git checkout --ours "$file" 2>/dev/null || true
    
    # If that doesn't work, use sed to remove conflict markers
    if grep -q "<<<<<<< HEAD" "$file" 2>/dev/null; then
        # Remove all conflict markers and keep only the content between HEAD and =======
        sed -i '/<<<<<<< HEAD/,/=======/!d' "$file"
        sed -i 's/<<<<<<< HEAD//' "$file"
        sed -i 's/=======//' "$file"
        sed -i '/>>>>>>> origin/d' "$file"
        sed -i '/>>>>>>> cursor/d' "$file"
    fi
done

echo "All merge conflicts fixed!"