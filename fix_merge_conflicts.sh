#!/bin/bash

# Script to fix merge conflicts in the codebase
echo "Starting merge conflict resolution..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "" app/ --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" -l)

echo "Found $(echo "$files_with_conflicts" | wc -l) files with merge conflicts"

# Function to fix merge conflicts in a file
fix_merge_conflicts() {
    local file="$1"
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use git to resolve conflicts by taking the HEAD version
    # This is a simple approach - in a real scenario you'd want more sophisticated conflict resolution
    sed -i '//,/    sed -i '//,/    sed -i '//d' "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^/d' "$file"
    sed -i '/^    
    # Remove any syntax errors that might have been introduced
    sed -i 's/,,/,/g' "$file"
    sed -i 's/return(\([^)]*\))/return (\1)/g' "$file"
    sed -i 's/return(<\([^>]*\)>)/return <\1>/g' "$file"
}

# Fix each file
for file in $files_with_conflicts; do
    if [ -f "$file" ]; then
        fix_merge_conflicts "$file"
    fi
done

echo "Merge conflict resolution completed!"
echo "Please review the changes and test the application."
