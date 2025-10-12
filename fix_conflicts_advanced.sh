#!/bin/bash

# Advanced script to fix merge conflicts
echo "Starting advanced merge conflict resolution..."

# Find files with merge conflicts, excluding node_modules
files_with_conflicts=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | grep -v node_modules | xargs grep -l "^<<<<<<<" 2>/dev/null)

echo "Found $(echo "$files_with_conflicts" | wc -l) files with conflicts"

# Process each file
count=0
for file in $files_with_conflicts; do
    if [ -f "$file" ]; then
        count=$((count + 1))
        echo "[$count] Processing: $file"
        
        # Create a backup
        cp "$file" "$file.backup"
        
        # Use awk to process the file and keep content after =======
        awk '
        /^<<<<<<</ { in_conflict = 1; next }
        /^=======/ { in_conflict = 2; next }
        /^>>>>>>>/ { in_conflict = 0; next }
        in_conflict == 2 { print }
        in_conflict == 0 { print }
        ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
        
        echo "Fixed: $file"
    fi
done

echo "Merge conflict resolution completed! Processed $count files."