#!/bin/bash

# Script to fix merge conflicts in all files
echo "Fixing merge conflicts..."

# Find all files with merge conflicts
<<<<<<< HEAD
files_with_conflicts=$(grep -r "<<<<<<< HEAD\|=======\|>>>>>>> " . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" | cut -d: -f1 | sort -u)
=======
files_with_conflicts=$(find /workspace/app -name "*.tsx" -o -name "*.ts" | xargs grep -l "" 2>/dev/null)
>>>>>>> 66636f0649a4af9daff867918bf1282f740567c2

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
<<<<<<< HEAD
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
=======
    # Process the file to resolve conflicts
    awk '
    /^/ { in_head = 1; next }
    /^/ { in_head = 0; in_other = 1; next }
    /^
    in_other { next }
    { print }
    ' "$file" > "$temp_file"
    
    # Replace the original file
    mv "$temp_file" "$file"
>>>>>>> 66636f0649a4af9daff867918bf1282f740567c2
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"