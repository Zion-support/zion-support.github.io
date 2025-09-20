#!/bin/bash

# Fix @/components imports to relative imports
echo "Fixing @/components imports..."

# Find all files with @/components imports and fix them
find /workspace/src -name "*.jsx" -o -name "*.tsx" | while read file; do
    # Get the directory depth to determine the relative path
    dir=$(dirname "$file")
    depth=$(echo "$dir" | grep -o "/" | wc -l)
    
    # Calculate the relative path back to src
    relative_path=""
    for ((i=3; i<=depth; i++)); do
        relative_path="../$relative_path"
    done
    
    # Replace @/components with the relative path
    if grep -q 'from "@/components' "$file"; then
        echo "Fixing imports in: $file"
        sed -i "s|from \"@/components|from \"${relative_path}components|g" "$file"
        sed -i "s|from '@/components|from \"${relative_path}components|g" "$file"
    fi
done

echo "Import fixes completed!"