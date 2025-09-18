#!/bin/bash

echo "🧹 Final comprehensive cleanup..."

# Delete all JSX files in pages directory
find src/pages -name "*.jsx" -delete
echo "🗑️  Deleted all JSX files in pages directory"

# Delete all JSX files in components directory
find src/components -name "*.jsx" -delete
echo "🗑️  Deleted all JSX files in components directory"

# Find all remaining files with merge conflicts and delete them
find src/ -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" \) -exec grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " {} \; 2>/dev/null | while read file; do
    echo "🗑️  Deleting corrupted file: $file"
    rm "$file"
done

echo "✅ Final cleanup complete!"