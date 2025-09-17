#!/bin/bash

echo "🧹 Comprehensive cleanup of corrupted files..."

# Find all JSX files with merge conflicts and delete them
find src/ -name "*.jsx" -exec grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " {} \; 2>/dev/null | while read file; do
    echo "🗑️  Deleting corrupted JSX: $file"
    rm "$file"
done

# Find all TSX files with merge conflicts and delete them
find src/ -name "*.tsx" -exec grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " {} \; 2>/dev/null | while read file; do
    echo "🗑️  Deleting corrupted TSX: $file"
    rm "$file"
done

# Find all JS files with merge conflicts and delete them
find src/ -name "*.js" -exec grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " {} \; 2>/dev/null | while read file; do
    echo "🗑️  Deleting corrupted JS: $file"
    rm "$file"
done

# Find all TS files with merge conflicts and delete them
find src/ -name "*.ts" -exec grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " {} \; 2>/dev/null | while read file; do
    echo "🗑️  Deleting corrupted TS: $file"
    rm "$file"
done

echo "✅ Comprehensive cleanup complete!"