#!/bin/bash
<<<<<<< HEAD
<<<<<<< HEAD



# Script to automatically resolve merge conflicts by choosing the main branch version
# This script removes everything from  and keeps everything after =======

echo "Fixing merge conflicts in source files..."


echo "Found files with conflicts:"
echo "$files_with_conflicts"

# For each file, resolve conflicts by keeping our version (HEAD)
for file in $files_with_conflicts; do
    if [ -f "$file" ]; then
        echo "Fixing conflicts in: $file"

        # Use sed to remove merge conflict markers and keep HEAD version
        sed -i '/^/d' "$file"
        sed -i '/^
        # Remove any remaining conflict markers
        sed -i '/^<<<<<<< /d' "$file"
        sed -i '/^=======/d' "$file"
        sed -i '/^    fi
done

echo "Merge conflicts fixed!"
=======



# Script to fix merge conflicts by keeping HEAD version
echo "Fixing merge conflicts in all files..."

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace/app -name "*.tsx" -o -name "*.ts" | xargs grep -l "
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0

# Script to automatically resolve merge conflicts by choosing the main branch version
# This script removes everything from <<<<<<< HEAD to ======= and keeps everything after =======

echo "Fixing merge conflicts in source files..."

<<<<<<< HEAD
# Find all files with merge conflicts in src and app directories
find src app -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.css" | while read file; do
  if [ -f "$file" ] && grep -q "<<<<<<< HEAD" "$file"; then
    echo "Fixing conflicts in: $file"
=======
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
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
# Script to fix merge conflicts by keeping HEAD version
echo "Fixing merge conflicts in all files..."

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace/app -name "*.tsx" -o -name "*.ts" | xargs grep -l "" 2>/dev/null)

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
<<<<<<< HEAD
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file to resolve conflicts
    awk '
<<<<<<< HEAD
    /^/ { in_head = 0; in_other = 1; next }
    /^    in_other { next }
=======
    /^/ { in_head = 1; next }
    /^/ { in_head = 0; in_other = 1; next }
    /^
    in_other { next }
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
    { print }
    ' "$file" > "$temp_file"
    
    # Replace the original file
    mv "$temp_file" "$file"
    
    echo "Fixed: $file"
done

<<<<<<< HEAD
<<<<<<< HEAD


echo "Merge conflicts fixed!"
=======
=======
<<<<<<< HEAD
echo "Merge conflicts fixed!"
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
echo "Merge conflicts fixed. Backups saved to /workspace/backup-merge-conflicts/"
echo "Please review the changes and test the build."
=======
echo "Merge conflicts fixed!"
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
echo "Merge conflicts fixed!"
=======
echo "Merge conflicts fixed. Backups saved to /workspace/backup-merge-conflicts/"
echo "Please review the changes and test the build."
<<<<<<< HEAD
=======
echo "Merge conflicts fixed!"


=======
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
echo "Merge conflicts fixed!"

>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
<<<<<<< HEAD
=======
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0

echo "Fixing merge conflicts..."

# Find all files with merge conflicts
<<<<<<< HEAD
files_with_conflicts=$(grep -r "/d' "$file"
        sed -i '/^
        # Remove any remaining conflict markers
        sed -i '/^<<<<<<< /d' "$file"
        sed -i '/^=======/d' "$file"
        sed -i '/^    fi
done

echo "Merge conflicts fixed!"
=======
=======
echo "All merge conflicts have been resolved!"
=======
echo "Merge conflicts resolved in all files."
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
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
>>>>>>> main
=======
echo "All merge conflicts have been resolved!"
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
