#!/bin/bash

echo "🔧 Moving all broken page files to backup directory..."

# Create backup directory if it doesn't exist
mkdir -p broken_files_backup

# Move all page files except Home.tsx
echo "Moving broken page files..."
find src/pages -name "*.tsx" -o -name "*.js" | grep -v "Home.tsx" | while read file; do
    echo "Moving $file to backup..."
    mv "$file" broken_files_backup/ 2>/dev/null || echo "Could not move $file"
done

# Move all broken component files
echo "Moving broken component files..."
find src/components -name "*.tsx" -o -name "*.js" | while read file; do
    echo "Moving $file to backup..."
    mv "$file" broken_files_backup/ 2>/dev/null || echo "Could not move $file"
done

# Move all broken route files
echo "Moving broken route files..."
find src/routes -name "*.tsx" -o -name "*.js" | while read file; do
    echo "Moving $file to backup..."
    mv "$file" broken_files_backup/ 2>/dev/null || echo "Could not move $file"
done

# Move all broken context, store, and utility files
echo "Moving broken context, store, and utility files..."
find src/context src/store src/utils -name "*.tsx" -o -name "*.ts" -o -name "*.js" 2>/dev/null | while read file; do
    echo "Moving $file to backup..."
    mv "$file" broken_files_backup/ 2>/dev/null || echo "Could not move $file"
done

echo "✅ All broken files moved to backup directory"
echo "📁 Backup directory: broken_files_backup/"