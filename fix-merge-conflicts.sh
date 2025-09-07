#!/bin/bash
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422

# Script to fix merge conflicts in all files
echo "Fixing merge conflicts..."

# Find all files with merge conflicts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
files_with_conflicts=$(find /workspace/app -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)
=======
files_with_conflicts=$(find /workspace/app -name "*.tsx" -o -name "*.ts" | xargs grep -l "" 2>/dev/null)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
=======

# Script to automatically resolve merge conflicts by choosing HEAD version
echo "Fixing merge conflicts in all files..."

# Find all files with merge conflicts
files_with_conflicts=$(find ./app -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD")

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
files_with_conflicts=$(grep -r "<<<<<<< HEAD\|=======\|>>>>>>> " . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" | cut -d: -f1 | sort -u)

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
    
    # Create a backup
    cp "$file" "$file.backup"
    
<<<<<<< HEAD
    # Process the file to resolve conflicts
    awk '
<<<<<<< HEAD
    /^<<<<<<< HEAD/ { in_head = 1; next }
    /^=======/ { in_head = 0; in_other = 1; next }
    /^>>>>>>> / { in_other = 0; next }
<<<<<<< HEAD
=======
    /^/ { in_other = 0; next }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
    /^/ { in_head = 1; next }
    /^/ { in_head = 0; in_other = 1; next }
    /^
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    in_other { next }
    { print }
    ' "$file" > "$temp_file"
    
    # Replace the original file
    mv "$temp_file" "$file"
<<<<<<< HEAD
=======
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
    
    echo "Fixed: $file"
done

<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> main
=======
echo "All merge conflicts have been resolved!"
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
=======
done

echo "Merge conflicts resolved in all files."
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
echo "Merge conflicts fixed!"
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
