#!/bin/bash

echo "Cleaning merge conflicts..."

# Find all files with merge conflicts
find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" \) -exec grep -l "<<<<<<< HEAD" {} \; | while read file; do
    echo "Cleaning: $file"
    
    # Remove all merge conflict markers and their content
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> origin\/cursor\/expand-services-and-deploy-updates-f53f/d' "$file"
    sed -i '/>>>>>>> origin\/cursor\/website-audit-and-enhancement-145a/d' "$file"
    sed -i '/>>>>>>> origin\/cursor\/analyze-improve-and-deploy-ziontechgroup-app-ace4/d' "$file"
    sed -i '/>>>>>>> origin\/cursor\/website-audit-and-enhancement-145a/d' "$file"
    
    # Remove any remaining ======= markers
    sed -i '/=======/d' "$file"
done

echo "Merge conflicts cleaned!"