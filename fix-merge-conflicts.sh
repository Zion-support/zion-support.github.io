#!/bin/bash

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
echo "Fixing merge conflicts in the codebase..."

# Find all files with merge conflicts
files_with_conflicts=$(grep -r "files_with_conflicts=$(grep -r "files_with_conflicts=$(find pages/ -name "*.tsx" -exec grep -l "
echo "Found files with merge conflicts:"
echo "$files_with_conflicts"

# Create backup directory
mkdir -p /workspace/backup-merge-conflicts

# Process each file
for file in $files_with_conflicts; do
    echo "Processing: $file"
    
    # Create backup
    cp "$file" "/workspace/backup-merge-conflicts/$(basename "$file").backup"
    
    # Remove merge conflict markers and keep the main branch content
    sed -i '/    sed -i '/# Script to fix merge conflicts by keeping HEAD version
echo "Fixing merge conflicts in pages/ directory..."

# Find all files with merge conflicts
files_with_conflicts=$(find pages/ -name "*.tsx" -exec grep -l "
for file in $files_with_conflicts; do
    echo "Fixing merge conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Remove merge conflict markers and keep the main branch content
    sed -i '/    sed -i '/    # Use sed to remove merge conflict markers and keep HEAD version
    # Remove lines from     # Remove lines from     sed -i '/    sed -i '/    
    echo "Fixed: $file"
done

echo "Merge conflicts fixed. Backups saved to /workspace/backup-merge-conflicts/"
echo "Please review the changes and test the build."
echo "Merge conflicts fixed. Backups saved to /workspace/backup-merge-conflicts/"
echo "Please review the changes and test the build."
echo "Merge conflicts fixed!"
