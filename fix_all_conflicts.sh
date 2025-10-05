#!/bin/bash

# Script to fix ALL merge conflicts in blog files
echo "Starting comprehensive merge conflict resolution..."

# Find all files with merge conflicts (excluding backups)
<<<<<<< HEAD
conflict_files=$(find /workspace/app/blog -name "*.tsx" -not -name "*.backup" -exec grep -l "^" {} \;)

count=0
for file in $conflict_files; do
    count=$((count + 1))
    echo "Processing ($count): $file"
    
    # Remove merge conflict markers and keep HEAD version
    sed -i '/^/,/^/d' "$file"
    sed -i '/^done
=======
conflict_files=$(find /workspace/app/blog -name "*.tsx" -not -name "*.backup" -exec grep -l "^
done
>>>>>>> cursor/fix-errors-and-merge-to-main-f279

echo "Merge conflict resolution completed for $count files."