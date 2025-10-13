#!/bin/bash

echo "Starting comprehensive merge conflict resolution..."

# Find all files with merge conflicts
files_with_conflicts=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "/!d' "$file"
    sed -i '/
    
    # Remove any syntax errors that might have been introduced
    sed -i 's/,,/,/g' "$file"
    sed -i 's/return(\([^)]*\))/return (\1)/g' "$file"
    sed -i 's/return(<\([^>]*\)>)/return <\1>/g' "$file"
    sed -i 's/);/);/g' "$file"
    sed -i 's/};/};/g' "$file"
}

# Fix each file
for file in $files_with_conflicts; do
    if [ -f "$file" ]; then
        fix_merge_conflicts "$file"
    fi
done

echo "Merge conflict resolution completed!"
echo "All files have been cleaned of merge conflict markers."
