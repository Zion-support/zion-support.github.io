#!/bin/bash

echo "🔧 Fixing merge conflicts in all files..."

# Find all files with merge conflicts
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.cjs" | while read file; do
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "Fixing merge conflicts in: $file"
        
        # Create a backup
        cp "$file" "$file.backup"
        
        # Remove merge conflict markers and keep the newer version (after =======)
        # This is a simplified approach - in production you'd want more sophisticated conflict resolution
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/>>>>>>> cursor\/fix-syntax-push-and-merge-to-main-9b09/d' "$file"
        sed -i '/>>>>>>> cursor\/fix-syntax-push-and-merge-to-main-9b09/d' "$file"
        sed -i '/>>>>>>> origin\/cursor\/fix-syntax-push-and-merge-to-main-9b09/d' "$file"
        sed -i '/>>>>>>> origin\/cursor\/fix-syntax-push-and-merge-to-main-9b09/d' "$file"
        
        # Clean up any remaining conflict markers
        sed -i '/<<<<<<< HEAD/d' "$file"
        sed -i '/=======/d' "$file"
        sed -i '/>>>>>>> /d' "$file"
        
        echo "✅ Fixed: $file"
    fi
done

echo "🎉 Merge conflict fixing completed!"