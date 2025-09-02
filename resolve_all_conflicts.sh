#!/bin/bash

echo "Starting comprehensive merge conflict resolution..."

# Find all TypeScript/JavaScript files with merge conflicts
conflicted_files=$(find src/ -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "^<<<<<<<\|^=======\|^>>>>>>>" 2>/dev/null)

count=0
for file in $conflicted_files; do
    # Skip backup files
    if [[ "$file" == *".backup"* ]]; then
        continue
    fi
    
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup.$(date +%s)"
    
    # Remove merge conflict markers and keep the first version (HEAD)
    # This removes everything from <<<<<<< to ======= and the >>>>>>> line
    sed -i '/^<<<<<<< /,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    count=$((count + 1))
    if [ $((count % 50)) -eq 0 ]; then
        echo "Processed $count files..."
    fi
done

echo "Merge conflict resolution completed for $count files."
echo "Please test the build."