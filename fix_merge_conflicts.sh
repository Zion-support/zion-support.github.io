#!/bin/bash

echo "🔧 Fixing merge conflicts in critical files..."

# Find all files with merge conflicts
files_with_conflicts=$(find app -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true)

if [ -z "$files_with_conflicts" ]; then
    echo "✅ No merge conflicts found!"
    exit 0
fi

echo "📁 Found files with merge conflicts:"
echo "$files_with_conflicts"

# Fix each file by keeping the HEAD version
for file in $files_with_conflicts; do
    echo "🔨 Fixing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove merge conflict markers and keep HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/!d; /^=======/d; /^>>>>>>>/d' "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< /d; /^=======/d; /^>>>>>>> /d' "$file"
done

echo "✅ Merge conflicts fixed!"
echo "🔍 Running build check..."

# Try to build
if npm run build > /dev/null 2>&1; then
    echo "✅ Build successful!"
else
    echo "⚠️  Build failed, but merge conflicts were fixed"
fi

echo "🎉 Process completed!"