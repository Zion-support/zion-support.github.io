#!/bin/bash
<<<<<<< HEAD
<<<<<<< HEAD
=======

echo "Fixing merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "
echo "Found files with conflicts:"
echo "$files_with_conflicts"

# For each file, resolve conflicts by keeping our version (HEAD)
for file in $files_with_conflicts; do
    if [ -f "$file" ]; then
        echo "Fixing conflicts in: $file"

        # Use sed to remove merge conflict markers and keep HEAD version
        sed -i '/^        sed -i '/^
        # Remove any remaining conflict markers
        sed -i '/^        sed -i '/^/d' "$file"
        sed -i '/^    fi
done

echo "Merge conflicts fixed!"
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
# Script to fix merge conflicts by keeping HEAD version
echo "Fixing merge conflicts in pages/ directory..."

# Find all files with merge conflicts
files_with_conflicts=$(find pages/ -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \;)

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove merge conflict markers and keep HEAD version
    # Remove lines from <<<<<<< HEAD to ======= (inclusive)
    # Remove lines from ======= to >>>>>>> (inclusive)
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/=======/,/>>>>>>> /d' "$file"
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======

>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
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
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

=======
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
# Script to fix merge conflicts by keeping HEAD version
echo "Fixing merge conflicts in pages/ directory..."

# Find all files with merge conflicts
<<<<<<< HEAD
files_with_conflicts=$(find pages/ -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \;)

=======
files_with_conflicts=$(find pages/ -name "*.tsx" -exec grep -l "

    # Remove merge conflict markers and keep the main branch content
    sed -i '/
    sed -i '/

<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
<<<<<<< HEAD
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
    # Use sed to remove merge conflict markers and keep HEAD version
    # Remove lines from <<<<<<< HEAD to ======= (inclusive)
    # Remove lines from ======= to >>>>>>> (inclusive)
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/=======/,/>>>>>>> /d' "$file"
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
=======
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
    
=======
    # Use sed to remove merge conflict markers and keep HEAD version
    # Remove lines from  (inclusive)
    # Remove lines from  to 
    sed -i '//d' "$file"
    sed -i '//,/

>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
    echo "Fixed: $file"
done

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
echo "Merge conflicts fixed. Backups saved to /workspace/backup-merge-conflicts/"
echo "Please review the changes and test the build."
=======
echo "Merge conflicts fixed!"
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
echo "Merge conflicts fixed!"
=======
echo "Merge conflicts fixed. Backups saved to /workspace/backup-merge-conflicts/"
echo "Please review the changes and test the build."
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
echo "Merge conflicts fixed!"

>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
<<<<<<< HEAD
=======

echo "Fixing merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.html" --include="*.css" --include="*.cjs" --include="*.json" | cut -d: -f1 | sort -u)

echo "Found files with conflicts:"
echo "$files_with_conflicts"

# For each file, resolve conflicts by keeping our version (HEAD)
for file in $files_with_conflicts; do
    if [ -f "$file" ]; then
        echo "Fixing conflicts in: $file"

        # Use sed to remove merge conflict markers and keep HEAD version
        sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"

        # Remove any remaining conflict markers
        sed -i '/^<<<<<<< /d' "$file"
        sed -i '/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
    fi
done

echo "Merge conflicts fixed!"
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
