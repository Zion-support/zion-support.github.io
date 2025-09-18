#!/bin/bash

# Script to resolve merge conflicts by choosing the most recent version
echo "Starting merge conflict resolution..."

# Find all files with merge conflicts
echo "Finding files with merge conflicts..."
conflicted_files=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found conflicted files:"
echo "$conflicted_files"

# For each conflicted file, resolve conflicts by keeping the most recent version
for file in $conflicted_files; do
    echo "Resolving conflicts in: $file"
    
    # Skip temp files and backup files
    if [[ "$file" == *"temp_exclude"* ]] || [[ "$file" == *"backup"* ]] || [[ "$file" == *"corrupted"* ]]; then
        echo "Skipping temp/backup file: $file"
        continue
    fi
    
    # Create a backup
    cp "$file" "$file.backup.$(date +%s)"
    
    # Use git checkout --theirs to keep the most recent version
    git checkout --theirs "$file" 2>/dev/null || {
        echo "Failed to resolve $file with git checkout --theirs"
        # If git checkout fails, try to manually clean the file
        sed -i '/<<<<<<< HEAD/,/>>>>>>> /d' "$file" 2>/dev/null || {
            echo "Failed to clean $file with sed"
        }
    }
done

echo "Merge conflict resolution completed!"

# Check if there are still conflicts
remaining_conflicts=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null | wc -l)

if [ "$remaining_conflicts" -gt 0 ]; then
    echo "Warning: $remaining_conflicts files still have conflicts"
    find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null
else
    echo "All merge conflicts resolved successfully!"
fi
