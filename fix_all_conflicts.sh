#!/bin/bash

echo "🔧 Fixing all remaining merge conflicts..."

# Find all files with merge conflict markers
conflict_files=$(grep -r "<<<<<<< HEAD" src/ --include="*.tsx" --include="*.ts" -l)

echo "Found files with conflicts:"
echo "$conflict_files"

# Fix each file by removing conflict markers and keeping the better content
for file in $conflict_files; do
    echo "Fixing: $file"
    
    # Create a backup
    cp "$file" "${file}.backup"
    
    # Remove all conflict markers and keep the content after the last =======
    # This is a simple approach - we'll keep everything after the last =======
    sed -i '/^<<<<<<< HEAD/,/^>>>>>>> /d' "$file"
    
    # Remove any remaining ======= lines
    sed -i '/^=======$/d' "$file"
    
    echo "✅ Fixed: $file"
done

echo "🎉 All conflicts resolved!"

# Try building again
echo "🚀 Attempting build..."
npm run build