#!/bin/bash

# Find all files with merge conflicts
<<<<<<< HEAD
<<<<<<< HEAD
files_with_conflicts=$(find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "/!d; /^/d; /^
=======
files_with_conflicts=$(find app/ -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD")

echo "Found $(echo "$files_with_conflicts" | wc -l) files with merge conflicts"

# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
    
    # Remove any remaining conflict markers
    sed -i '/^/d; /^
    
<<<<<<< HEAD
    echo "Fixed: $file"
=======
files_with_conflicts=$(grep -r "<<<<<<< HEAD" app/components/ | cut -d: -f1 | sort -u)

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# Process each file
for file in $files_with_conflicts; do
    echo "Processing $file..."
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the latest version (after =======)
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> cursor/d' "$file"
    
    echo "Fixed $file"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0acf
done

echo "Merge conflicts fixed!"
=======
    # Use git to resolve conflicts by choosing HEAD version
    git checkout --ours "$file" 2>/dev/null || {
        # If git checkout fails, manually resolve by keeping HEAD content
        awk '
        /^<<<<<<< HEAD/ { in_head = 1; next }
        /^=======/ { in_head = 0; in_other = 1; next }
        /^>>>>>>> / { in_other = 0; next }
        in_head || (!in_head && !in_other) { print }
        ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
    }
done

echo "Merge conflicts resolved!"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
