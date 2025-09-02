#!/bin/bash

echo "Resolving all remaining merge conflicts..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Resolving conflicts in: $file"
    
    # Remove all conflict markers and keep our version (HEAD)
    sed -i '/^    sed -i '/^    
    # Remove any remaining     sed -i '/^}

# Find all files with conflicts
conflict_files=$(grep -l "
if [ -z "$conflict_files" ]; then
    echo "No files with conflicts found."
    exit 0
fi

echo "Found files with conflicts:"
echo "$conflict_files"

# Resolve conflicts in each file
for file in $conflict_files; do
    if [ -f "$file" ]; then
        resolve_conflicts "$file"
    fi
done

echo "Conflict resolution completed."

# Check for any remaining conflicts
remaining_conflicts=$(grep -l "
if [ -z "$remaining_conflicts" ]; then
    echo "✅ All conflicts resolved successfully!"
else
    echo "⚠️  Some conflicts remain:"
    echo "$remaining_conflicts"
fi