#!/bin/bash

# Fix @/lib imports to relative imports
echo "Fixing @/lib imports..."

# Find all files with @/lib imports and fix them
find /workspace/src -name "*.jsx" -o -name "*.tsx" | while read file; do
    # Get the directory depth to determine the relative path
    dir=$(dirname "$file")
    depth=$(echo "$dir" | grep -o "/" | wc -l)
    
    # Calculate the relative path back to src
    relative_path=""
    for ((i=3; i<=depth; i++)); do
        relative_path="../$relative_path"
    done
    
    # Replace @/lib with the relative path
    if grep -q 'from "@/lib' "$file"; then
        echo "Fixing lib imports in: $file"
        sed -i "s|from \"@/lib|from \"${relative_path}lib|g" "$file"
        sed -i "s|from '@/lib|from \"${relative_path}lib|g" "$file"
    fi
done

echo "Lib import fixes completed!"