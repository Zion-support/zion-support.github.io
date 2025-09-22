#!/bin/bash

echo "Starting merge conflict resolution..."

# Function to resolve conflicts in a file by keeping HEAD version
resolve_conflicts() {
    local file="$1"
    echo "Resolving conflicts in: $file"
    # Create a backup
    cp "$file" "$file.backup"
    # Use sed to resolve conflicts by keeping HEAD version
    # Remove conflict markers and keep only the HEAD version
    sed -i '/^
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< /d; /^
    echo "Resolved conflicts in: $file"
}

# Find all files with merge conflicts
echo "Finding files with merge conflicts..."
conflict_files=$(grep -r "" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.json" --include="*.css" --include="*.md" -l | head -50)

echo "Found $(echo "$conflict_files" | wc -l) files with conflicts"

# Process each file
for file in $conflict_files; do
    if [ -f "$file" ]; then
        resolve_conflicts "$file"
    fi
done

echo "Merge conflict resolution completed!"
echo "Files processed: $(echo "$conflict_files" | wc -l)"