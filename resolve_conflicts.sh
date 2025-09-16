#!/bin/bash

<<<<<<< HEAD
# Script to resolve merge conflicts in the repository
echo "🔧 Starting merge conflict resolution..."

# Find all files with merge conflicts
conflict_files=$(find ./src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " 2>/dev/null)

echo "Found conflict files:"
echo "$conflict_files"

# For each file with conflicts, we'll need to manually resolve them
# This script will help identify the files that need attention

for file in $conflict_files; do
    echo "📝 File with conflicts: $file"
    conflict_count=$(grep -c "<<<<<<< HEAD" "$file" 2>/dev/null || echo "0")
    echo "   Number of conflict blocks: $conflict_count"
done

echo "✅ Conflict detection complete. Manual resolution required for the above files."
=======
# Find all files with merge conflicts
files_with_conflicts=$(grep -r "<<<<<<< HEAD" src/ --include="*.jsx" --include="*.tsx" --include="*.js" --include="*.ts" | cut -d: -f1 | sort | uniq)

echo "Found $(echo "$files_with_conflicts" | wc -l) files with merge conflicts"

for file in $files_with_conflicts; do
    echo "Resolving conflicts in $file"
    
    # Create a temporary file
    temp_file="${file}.tmp"
    
    # Process the file to resolve conflicts by keeping HEAD version
    awk '
    /^<<<<<<< HEAD/ { in_head = 1; next }
    /^=======/ { in_head = 0; in_other = 1; next }
    /^>>>>>>> / { in_other = 0; next }
    in_other { next }
    { print }
    ' "$file" > "$temp_file"
    
    # Replace original file with resolved version
    mv "$temp_file" "$file"
    
    echo "Resolved conflicts in $file"
done

echo "All merge conflicts resolved!"
>>>>>>> cursor/create-and-deploy-new-content-d7eb
