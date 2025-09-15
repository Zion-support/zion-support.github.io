#!/bin/bash

echo "🔧 Fixing all remaining merge conflicts..."

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