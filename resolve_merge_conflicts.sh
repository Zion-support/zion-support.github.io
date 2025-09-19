#!/bin/bash

echo "Starting merge conflict resolution..."

# Find all files with merge conflicts
echo "Finding files with merge conflicts..."
conflict_files=$(grep -r "<<<<<<< HEAD" src/ --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" -l)

echo "Found $(echo "$conflict_files" | wc -l) files with merge conflicts"

# Process each file
for file in $conflict_files; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup.$(date +%s)"
    
    # Resolve common merge conflicts
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> cursor\/fix-netlify-build-and-merge-to-main-ca65/d' "$file"
    
    # Fix common import path issues
    sed -i 's|@/data/|../data/|g' "$file"
    sed -i 's|@/components/|../components/|g' "$file"
    sed -i 's|@/hooks/|../hooks/|g' "$file"
    sed -i 's|@/utils/|../utils/|g' "$file"
    sed -i 's|@/context/|../context/|g' "$file"
    
    # Fix SEO import issues
    sed -i 's|from '\''../components/SEO.jsx'\''|from '\''../components/SEO'\''|g' "$file"
    sed -i 's|from '\''../components/SEO.tsx'\''|from '\''../components/SEO'\''|g' "$file"
    
    echo "Resolved conflicts in: $file"
done

echo "Merge conflict resolution completed!"
echo "Please review the changes and test the build."