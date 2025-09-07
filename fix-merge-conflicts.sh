#!/bin/bash
<<<<<<< HEAD

# Script to fix merge conflicts in all files
echo "Fixing merge conflicts..."

# Find all files with merge conflicts
<<<<<<< HEAD
files_with_conflicts=$(grep -r "<<<<<<< HEAD\|=======\|>>>>>>> " . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" | cut -d: -f1 | sort -u)
=======
files_with_conflicts=$(find /workspace/app -name "*.tsx" -o -name "*.ts" | xargs grep -l "" 2>/dev/null)
>>>>>>> 66636f0649a4af9daff867918bf1282f740567c2

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
<<<<<<< HEAD
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
=======
    # Process the file to resolve conflicts
    awk '
    /^/ { in_head = 1; next }
    /^/ { in_head = 0; in_other = 1; next }
    /^
    in_other { next }
=======



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
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file to resolve conflicts
    awk '
    /^/ { in_head = 0; in_other = 1; next }
    /^    in_other { next }
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
    { print }
    ' "$file" > "$temp_file"
    
    # Replace the original file
    mv "$temp_file" "$file"
>>>>>>> 66636f0649a4af9daff867918bf1282f740567c2
    
    echo "Fixed: $file"
done

<<<<<<< HEAD
echo "Merge conflicts fixed!"
=======


echo "Merge conflicts fixed!"
=======
echo "Merge conflicts fixed!"
=======
echo "Merge conflicts fixed. Backups saved to /workspace/backup-merge-conflicts/"
echo "Please review the changes and test the build."
=======
echo "Merge conflicts fixed!"



echo "Fixing merge conflicts..."

# Find all files with merge conflicts
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
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
