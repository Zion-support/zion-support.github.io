#!/bin/bash

<<<<<<< HEAD
<<<<<<< HEAD
# Script to fix merge conflicts by keeping HEAD version
echo "Fixing merge conflicts in pages/ directory..."

# Find all files with merge conflicts
files_with_conflicts=$(find pages/ -name "*.tsx" -exec grep -l "" {} \;)

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove merge conflict markers and keep HEAD version
    # Remove lines from  to  (inclusive)
    # Remove lines from  to     sed -i '//,//d' "$file"
    sed -i '//,/    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"
=======
=======
>>>>>>> pr-11935
echo "Fixing merge conflicts in the codebase..."

# Find all files with merge conflicts
<<<<<<< HEAD
files_with_conflicts=$(grep -r "<<<<<<< HEAD\|=======\|>>>>>>> main" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.cjs" --include="*.mjs" | cut -d: -f1 | sort | uniq)
=======
<<<<<<< HEAD
files_with_conflicts=$(grep -r "<<<<<<< HEAD\|=======\|>>>>>>> main" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.cjs" --include="*.mjs" | cut -d: -f1 | sort | uniq)
=======
files_with_conflicts=$(find pages/ -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \;)
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
>>>>>>> 22585ea456adf6ad6cf7b3256318e997f8ac668b

echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# Create backup directory
mkdir -p /workspace/backup-merge-conflicts

# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create backup
    cp "$file" "/workspace/backup-merge-conflicts/$(basename "$file").backup"
    
<<<<<<< HEAD
    # Remove merge conflict markers and keep the main branch content
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> main/d' "$file"
<<<<<<< HEAD
=======
=======
# Script to fix merge conflicts by keeping HEAD version
echo "Fixing merge conflicts in pages/ directory..."

# Find all files with merge conflicts
files_with_conflicts=$(find pages/ -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \;)

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
=======
<<<<<<< HEAD
    # Remove merge conflict markers and keep the main branch content
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> main/d' "$file"
=======
>>>>>>> 22585ea456adf6ad6cf7b3256318e997f8ac668b
    # Use sed to remove merge conflict markers and keep HEAD version
    # Remove lines from <<<<<<< HEAD to ======= (inclusive)
    # Remove lines from ======= to >>>>>>> (inclusive)
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/=======/,/>>>>>>> /d' "$file"
<<<<<<< HEAD
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> pr-11935
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
>>>>>>> 22585ea456adf6ad6cf7b3256318e997f8ac668b
    
    echo "Fixed: $file"
done

<<<<<<< HEAD
echo "Merge conflicts fixed. Backups saved to /workspace/backup-merge-conflicts/"
echo "Please review the changes and test the build."
>>>>>>> pr-11914
=======
<<<<<<< HEAD
echo "Merge conflicts fixed. Backups saved to /workspace/backup-merge-conflicts/"
echo "Please review the changes and test the build."
=======
echo "Merge conflicts fixed!"
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> pr-11935
