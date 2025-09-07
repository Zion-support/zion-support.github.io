#!/bin/bash

# Script to fix merge conflicts in all files
echo "Fixing merge conflicts..."

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace/app -name "*.tsx" -o -name "*.ts" | xargs grep -l "" 2>/dev/null)

echo "🔧 Fixing merge conflicts in all files..."

# Find all files with merge conflicts
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.cjs" | while read file; do
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "Fixing merge conflicts in: $file"
        
        # Create a backup
        cp "$file" "$file.backup"
        
        # Remove merge conflict markers and keep the newer version (after =======)
        # This is a simplified approach - in production you'd want more sophisticated conflict resolution
        sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
        sed -i '/        sed -i '/        sed -i '/        sed -i '/        
        # Clean up any remaining conflict markers
        sed -i '/<<<<<<< HEAD/d' "$file"
        sed -i '/=======/d' "$file"
        sed -i '/        
        echo "✅ Fixed: $file"
    fi
done


# Script to fix merge conflicts by keeping HEAD version
echo "Fixing merge conflicts in all files..."

# Find all files with merge conflicts
files_with_conflicts=$(find /workspace/app -name "*.tsx" -o -name "*.ts" | xargs grep -l "" 2>/dev/null)

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"

# Script to automatically resolve merge conflicts by choosing HEAD version
echo "Fixing merge conflicts in all files..."

# Find all files with merge conflicts
files_with_conflicts=$(find ./app -name "*.tsx" -o -name "*.ts" | xargs grep -l "<<<<<<< HEAD")

for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
files_with_conflicts=$(grep -r "<<<<<<< HEAD\|=======\|
for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Process the file to resolve conflicts
    awk '
    /^/ { in_other = 0; next }
    /^/ { in_head = 1; next }
    /^/ { in_head = 0; in_other = 1; next }
    /^
    in_other { next }
    { print }
    ' "$file" > "$temp_file"
    
    # Replace the original file
    mv "$temp_file" "$file"
    # Remove merge conflict markers and keep the HEAD version
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed!"
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
        sed -i '/^    fi
done

echo "Merge conflicts fixed!"
echo "All merge conflicts have been resolved!"
done

echo "Merge conflicts resolved in all files."
echo "Merge conflicts fixed!"
echo "🎉 Merge conflict fixing completed!"
