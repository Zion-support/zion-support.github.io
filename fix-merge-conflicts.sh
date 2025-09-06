#!/bin/bash

echo "Fixing merge conflicts in the codebase..."

# Find all files with merge conflicts
<<<<<<< HEAD
files_with_conflicts=$(grep -r "<<<<<<< HEAD\|=======\|>>>>>>> main" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.cjs" --include="*.mjs" | cut -d: -f1 | sort | uniq)
=======
\|
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5

\|

files_with_conflicts=$(find pages/ -name "*.tsx" -exec grep -l "/d' "$file"
    sed -i '/

<<<<<<< HEAD
# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create backup
    cp "$file" "/workspace/backup-merge-conflicts/$(basename "$file").backup"
    
    # Remove merge conflict markers and keep the main branch content
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> main/d' "$file"
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
# Script to fix merge conflicts by keeping HEAD version
echo "Fixing merge conflicts in pages/ directory..."

# Find all files with merge conflicts
files_with_conflicts=$(find pages/ -name "*.tsx" -exec grep -l "

    # Remove merge conflict markers and keep the main branch content
    sed -i '/
    sed -i '/

<<<<<<< HEAD
for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove merge conflict markers and keep HEAD version
    # Remove lines from <<<<<<< HEAD to ======= (inclusive)
    # Remove lines from ======= to >>>>>>> (inclusive)
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/=======/,/>>>>>>> /d' "$file"
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
    
=======
    # Use sed to remove merge conflict markers and keep HEAD version
    # Remove lines from  (inclusive)
    # Remove lines from  to 
    sed -i '//d' "$file"
    sed -i '//,/

>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"

