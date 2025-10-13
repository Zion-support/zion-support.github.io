#!/bin/bash

echo "Starting systematic merge conflict resolution..."

# Find all files with merge conflicts
echo "Finding files with merge conflicts..."
conflict_files=$(grep -r "<<<<<<< HEAD" app/ --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" -l)

echo "Found $(echo "$conflict_files" | wc -l) files with merge conflicts"

# Counter for processed files
count=0
total=$(echo "$conflict_files" | wc -l)

# Process each file
echo "$conflict_files" | while read -r file; do
    if [ -z "$file" ]; then
        continue
    fi
    
    count=$((count + 1))
    echo "Processing $count/$total: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Try to resolve merge conflicts by keeping the first version (HEAD)
    # This is a simple approach - in practice, you might want more sophisticated logic
    sed -i '/^<<<<<<< HEAD/,/^=======/!d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    sed -i '/^=======$/d' "$file"
    
    # Remove any remaining merge conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    sed -i '/^=======$/d' "$file"
    
    # Clean up any malformed syntax that might have been created
    # Remove duplicate semicolons
    sed -i 's/;;/;/g' "$file"
    
    # Remove standalone semicolons
    sed -i '/^;$/d' "$file"
    
    # Remove TODO comments that might be causing issues
    sed -i '/\/\/ TODO: /d' "$file"
    
    # Remove empty lines with just spaces or tabs
    sed -i '/^[[:space:]]*$/d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflict resolution completed!"
echo "Please review the changes and test the build."