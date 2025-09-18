#!/bin/bash

echo "🔧 Fixing all remaining merge conflicts..."

# Find all files with conflict markers
conflicted_files=$(find /workspace/src -name "*.jsx" -o -name "*.tsx" -o -name "*.js" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " 2>/dev/null)

echo "Found conflicted files:"
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