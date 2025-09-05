#!/bin/bash

echo "🔧 Fixing merge conflicts in source files..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" src/ --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx" -l)

for file in $files_with_conflicts; do
    echo "Fixing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove merge conflict markers and keep HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/!d' "$file"
    sed -i '/^=======/,/^>>>>>>> /d' "$file"
    sed -i '/^<<<<<<< HEAD/d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    # Clean up any remaining syntax issues
    sed -i 's/",'"'"'//g' "$file"
    sed -i 's/'"'"'",//g' "$file"
    sed -i 's/;'"'"'//g' "$file"
    sed -i 's/'"'"';//g' "$file"
    sed -i 's/",//g' "$file"
    sed -i 's/",//g' "$file"
    sed -i 's/;'"'"'//g' "$file"
    sed -i 's/'"'"';//g' "$file"
    
    echo "✅ Fixed: $file"
done

echo "🎉 Merge conflicts fixed!"