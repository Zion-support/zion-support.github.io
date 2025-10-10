#!/bin/bash

# Script to fix merge conflicts by choosing HEAD version
# This script will remove merge conflict markers and keep the HEAD version

echo "Starting merge conflict resolution..."

# Find all files with merge conflicts (excluding node_modules)
files_with_conflicts=$(find /workspace -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" \) -not -path "*/node_modules/*" -exec grep -l "<<<<<<< HEAD" {} \;)

total_files=$(echo "$files_with_conflicts" | wc -l)
echo "Found $total_files files with merge conflicts"

count=0
for file in $files_with_conflicts; do
    count=$((count + 1))
    echo "Processing file $count/$total_files: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove merge conflict markers and keep HEAD version
    # This removes everything from <<<<<<< HEAD to ======= (inclusive)
    # and everything from >>>>>>> branch-name to the end of that line
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> .*/d' "$file"
    
    # Also remove any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    # Clean up any double semicolons that might have been left
    sed -i 's/;;/;/g' "$file"
    
    # Clean up any double newlines
    sed -i '/^$/N;/^\n$/d' "$file"
done

echo "Merge conflict resolution completed!"
echo "Processed $count files"

# Check if there are any remaining conflicts
remaining_conflicts=$(find /workspace -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" \) -not -path "*/node_modules/*" -exec grep -l "<<<<<<< HEAD" {} \; | wc -l)
echo "Remaining conflicts: $remaining_conflicts"

if [ "$remaining_conflicts" -eq 0 ]; then
    echo "All merge conflicts resolved successfully!"
else
    echo "Some conflicts remain. Manual review may be needed."
fi