#!/bin/bash
<<<<<<< HEAD


# Script to automatically resolve merge conflicts by choosing the main branch version
# This script removes everything from <<<<<<< HEAD to ======= and keeps everything after =======


echo "Fixing merge conflicts in source files..."

# Find all files with merge conflicts in src and app directories
find src app -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" -o -name "*.css" | while read file; do
  if [ -f "$file" ] && grep -q "<<<<<<< HEAD" "$file"; then
    echo "Fixing conflicts in: $file"
=======

# Script to fix merge conflicts by keeping HEAD version
echo "Fixing merge conflicts in all files..."

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace/app -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file to resolve conflicts
    awk '
    /^<<<<<<< HEAD/ { in_head = 1; next }
    /^=======/ { in_head = 0; in_other = 1; next }
    /^>>>>>>> / { in_other = 0; next }
    in_other { next }
    { print }
    ' "$file" > "$temp_file"
    
<<<<<<< HEAD
    # Remove the 
    sed -i '/^>>>>>>> /d' "$file"
=======
    # Replace the original file
    mv "$temp_file" "$file"
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
    
    echo "Fixed: $file"
done

<<<<<<< HEAD
echo "Merge conflicts fixed!"

echo "Merge conflicts fixed!"

echo "Merge conflicts fixed. Backups saved to /workspace/backup-merge-conflicts/"
echo "Please review the changes and test the build."



echo "Merge conflicts fixed!"


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
        sed -i '/^

        # Remove any remaining conflict markers
        sed -i '/^<<<<<<< /d' "$file"
        sed -i '/^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
    fi
done

echo "Merge conflicts fixed!"





echo "Merge conflicts fixed!"

=======
echo "All merge conflicts have been resolved!"
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
