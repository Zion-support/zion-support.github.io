#!/bin/bash

echo "Starting comprehensive merge conflict resolution..."

# Find and fix all merge conflicts in src directory
find src -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "Fixing conflicts in: $file"
        
        # Create backup
        cp "$file" "$file.backup.$(date +%s)"
        
        # Remove merge conflict markers and keep HEAD version
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>> cursor\/fix-netlify-build-and-merge-to-main-ca65/d' "$file"
        
        # Fix import paths
        sed -i 's|@/data/|../data/|g' "$file"
        sed -i 's|@/components/|../components/|g' "$file"
        sed -i 's|@/hooks/|../hooks/|g' "$file"
        sed -i 's|@/utils/|../utils/|g' "$file"
        sed -i 's|@/context/|../context/|g' "$file"
        
        # Fix SEO imports
        sed -i 's|from '\''../components/SEO\.jsx'\''|from '\''../components/SEO'\''|g' "$file"
        sed -i 's|from '\''../components/SEO\.tsx'\''|from '\''../components/SEO'\''|g' "$file"
        
        echo "Fixed: $file"
    fi
done

echo "Merge conflict resolution completed!"
echo "Files processed: $(find src -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | wc -l)"