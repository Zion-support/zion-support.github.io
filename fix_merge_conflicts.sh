#!/bin/bash

# Find all files with merge conflicts
find /workspace/app -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \; | while read file; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use git to resolve conflicts by taking HEAD version
    cd /workspace
    git checkout --ours "$file" 2>/dev/null || true
    
    # If git checkout doesn't work, manually resolve by taking HEAD version
    if grep -q "<<<<<<< HEAD" "$file"; then
        # Extract content between <<<<<<< HEAD and =======
        sed -n '/<<<<<<< HEAD/,/=======/p' "$file" | sed '1d;$d' > "$file.tmp"
        
        # If no content between markers, try to extract from HEAD to end
        if [ ! -s "$file.tmp" ]; then
            sed -n '/<<<<<<< HEAD/,/>>>>>>>/p' "$file" | sed '1d;$d' > "$file.tmp"
        fi
        
        # Replace the entire file with the HEAD content
        if [ -s "$file.tmp" ]; then
            cp "$file.tmp" "$file"
        fi
        
        rm -f "$file.tmp"
    fi
    
    # Remove any remaining conflict markers
    sed -i '/<<<<<<< HEAD/d' "$file"
    sed -i '/=======/d' "$file"
    sed -i '/>>>>>>>/d' "$file"
done

echo "Merge conflicts fixed!"
