#!/bin/bash

echo "🔧 Resolving merge conflicts in all files..."

# Find all files with merge conflicts
files_with_conflicts=$(find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

if [ -z "$files_with_conflicts" ]; then
    echo "✅ No merge conflicts found!"
    exit 0
fi

echo "Found conflicts in $(echo "$files_with_conflicts" | wc -l) files"

# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Use sed to resolve conflicts by keeping HEAD version and removing conflict markers
    sed -i '/<<<<<<< HEAD/,/>>>>>>> / {
        /<<<<<<< HEAD/d
        /=======/,/>>>>>>> /d
        />>>>>>> /d
    }' "$file"
    
    # Clean up common syntax errors
    sed -i 's/";,//g' "$file"
    sed -i 's/";//g' "$file"
    sed -i 's/,"//g' "$file"
    sed -i 's/,,//g' "$file"
    
    echo "✅ Resolved conflicts in: $file"
done

echo "🎉 All merge conflicts resolved!"