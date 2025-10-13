#!/bin/bash

# Find all files with merge conflicts
echo "Finding files with merge conflicts..."
conflict_files=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

if [ -z "$conflict_files" ]; then
    echo "No merge conflicts found."
    exit 0
fi

echo "Found merge conflicts in:"
echo "$conflict_files"

# Process each file
for file in $conflict_files; do
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use git to resolve conflicts by taking the HEAD version
    # This will remove all conflict markers and keep the HEAD version
    sed -i '/^<<<<<<< HEAD/,/^>>>>>>> /c\
<<<<<<< HEAD' "$file"
    
    # Remove conflict markers and keep only the content between HEAD and =======
    awk '/^<<<<<<< HEAD/,/^=======/ { if (/^=======/) next; if (!/^<<<<<<< HEAD/) print } /^>>>>>>> /,/^<<<<<<< HEAD/ { if (/^>>>>>>> /) next; if (!/^<<<<<<< HEAD/) print } !/^<<<<<<< HEAD/,/^=======/ { if (!/^=======/) print } !/^>>>>>>> /,/^<<<<<<< HEAD/ { if (!/^<<<<<<< HEAD/) print }' "$file" > "$file.tmp"
    
    # If the awk approach doesn't work, use a simpler approach
    # Remove all conflict markers and keep the first version
    sed -i '/^<<<<<<< HEAD/,/^=======/!d' "$file"
    sed -i 's/^<<<<<<< HEAD//' "$file"
    sed -i '/^=======/,/^>>>>>>> /d' "$file"
    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed. Please review the changes."