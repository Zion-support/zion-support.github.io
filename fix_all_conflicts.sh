#!/bin/bash

echo "Fixing all merge conflicts in the codebase..."

<<<<<<< HEAD
# Find all files with conflict markers
files_with_conflicts=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v .git | xargs grep -l "<<<<<<< HEAD\|=======\|>>>>>>> main" 2>/dev/null)

echo "Found files with conflicts:"
echo "$files_with_conflicts"

# Process each file
for file in $files_with_conflicts; do
    if [ -f "$file" ]; then
        echo "Processing $file..."
        
        # Create a backup
        cp "$file" "$file.backup"
        
        # Remove conflict markers and choose the cleaner version
        # This is a more aggressive approach that removes all conflict markers
        sed -i '/^<<<<<<< HEAD$/,/^>>>>>>> main$/{
            /^<<<<<<< HEAD$/d
            /^=======$/d
            /^>>>>>>> main$/d
        }' "$file"
        
        # Clean up any remaining empty lines
        sed -i '/^[[:space:]]*$/N;/^\n$/d' "$file"
        
        echo "  ✓ Processed $file"
    fi
done

echo "Conflict resolution complete!"
=======
# Find all files with merge conflicts (excluding backups)
conflict_files=$(find /workspace/app/blog -name "*.tsx" -not -name "*.backup" -exec grep -l "^<<<<<<< HEAD" {} \;)

count=0
for file in $conflict_files; do
    count=$((count + 1))
    echo "Processing ($count): $file"
    
    # Remove merge conflict markers and keep HEAD version
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> .*/d' "$file"
done

echo "Merge conflict resolution completed for $count files."
>>>>>>> cursor/fix-errors-and-merge-to-main-e42d
