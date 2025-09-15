#!/bin/bash

echo "🔧 Fixing all remaining merge conflicts..."

<<<<<<< HEAD
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
=======
# Find all files with conflict markers in src directory
conflicted_files=$(find /workspace/src -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " 2>/dev/null)

echo "Found conflicted files in src:"
echo "$conflicted_files"

for file in $conflicted_files; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove all conflict markers and keep the first version (HEAD)
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "  Fixed: $file"
done

echo "✅ All conflicts fixed!"
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
