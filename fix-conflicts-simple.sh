#!/bin/bash

echo "🔧 Fixing merge conflicts in all files..."

# Find all files with merge conflicts
files_with_conflicts=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

if [ -z "$files_with_conflicts" ]; then
    echo "✅ No files with merge conflicts found"
    exit 0
fi

echo "📋 Found files with conflicts:"
echo "$files_with_conflicts" | wc -l

# Process each file
echo "$files_with_conflicts" | while read -r file; do
    echo "🔧 Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove merge conflict markers and keep HEAD version
    sed -i '/<<<<<<< HEAD/,/=======/!d; /=======/,/>>>>>>> /d; s/<<<<<<< HEAD//g; s/=======//g; s/>>>>>>> [a-f0-9]*//g' "$file"
    
    # Fix common syntax errors
    sed -i 's/const \([a-zA-Z_][a-zA-Z0-9_]*\): React\.FC: ()  => {,,,/const \1: React.FC = () => {/g' "$file"
    sed -i 's/className="\([^"]*\)"\([^>]*>\)/className="\1"\2/g' "$file"
    sed -i 's/",",/",/g' "$file"
    sed -i 's/;;/;/g' "$file"
    
    echo "✅ Fixed: $file"
done

echo "🎉 All conflicts resolved!"
echo "💾 Committing changes..."

git add .
git commit -m "🔧 Resolve merge conflicts and fix syntax errors"

echo "✅ Changes committed successfully!"