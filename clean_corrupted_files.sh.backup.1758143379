#!/bin/bash

echo "🧹 Cleaning up corrupted files..."

# Find and delete all corrupted JSX files with merge conflicts
find src/pages -name "*.jsx" -exec grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " {} \; 2>/dev/null | while read file; do
    echo "🗑️  Deleting corrupted file: $file"
    rm "$file"
done

# Find and delete all corrupted TSX files with merge conflicts
find src/pages -name "*.tsx" -exec grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " {} \; 2>/dev/null | while read file; do
    echo "🗑️  Deleting corrupted file: $file"
    rm "$file"
done

# Find and delete all corrupted component files with merge conflicts
find src/components -name "*.tsx" -exec grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " {} \; 2>/dev/null | while read file; do
    echo "🗑️  Deleting corrupted file: $file"
    rm "$file"
done

find src/components -name "*.jsx" -exec grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " {} \; 2>/dev/null | while read file; do
    echo "🗑️  Deleting corrupted file: $file"
    rm "$file"
done

echo "✅ Cleanup complete!"