#!/bin/bash

# Find all files with merge conflicts and fix them
find app -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \; | while read file; do
    echo "Fixing merge conflicts in: $file"
    
    # Remove merge conflict markers and keep the content after the last =======
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> cursor\/create-and-deploy-new-content-47dd/d' "$file"
    sed -i '/>>>>>>> cursor\/create-and-deploy-new-content-643b/d' "$file"
    
    # Clean up any remaining empty lines at the top
    sed -i '/^$/N;/^\n$/d' "$file"
done

echo "Merge conflicts fixed!"