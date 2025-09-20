#!/bin/bash

echo "Cleaning remaining merge conflict markers..."

# Find all files with merge conflict markers
files_with_conflicts=$(grep -r "<<<<<<< HEAD\|=======\|>>>>>>> " . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.json" -l)

for file in $files_with_conflicts; do
    echo "Cleaning merge markers in: $file"
    
    # Create backup
    cp "$file" "$file.backup"
    
    # Remove all merge conflict markers and keep the content between ======= and >>>>>>> 
    # This keeps the "incoming" version which is usually what we want
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    # If the file is now empty or has issues, restore from backup and try a different approach
    if [[ ! -s "$file" ]] || grep -q "<<<<<<< HEAD\|=======\|>>>>>>> " "$file"; then
        echo "File $file still has issues, trying alternative cleanup..."
        cp "$file.backup" "$file"
        
        # Alternative: keep everything except the conflict markers
        sed -i '/^<<<<<<< HEAD/d' "$file"
        sed -i '/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
    fi
    
    # Remove backup
    rm "$file.backup"
done

echo "Merge conflict marker cleanup completed!"