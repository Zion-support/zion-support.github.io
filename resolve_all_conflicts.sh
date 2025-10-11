#!/bin/bash

echo "Starting comprehensive merge conflict resolution..."

# Find all files with merge conflicts
files_with_conflicts=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true)

echo "Found $(echo "$files_with_conflicts" | wc -l) files with merge conflicts"

# Function to fix merge conflicts in a file
fix_merge_conflicts() {
    local file="$1"
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove all merge conflict markers and keep only the content between HEAD markers
    sed -i '/<<<<<<< HEAD/,/=======/!d' "$file"
    sed -i '/<<<<<<< HEAD/d' "$file"
    sed -i '/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
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
