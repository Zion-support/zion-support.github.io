#!/bin/bash

echo "Resolving merge conflicts across the codebase..."

# Function to resolve conflicts in a single file
resolve_file() {
    local file="$1"
    echo "Processing: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use a simple strategy: keep the HEAD version for most conflicts
    # Remove conflict markers and keep the HEAD content
    sed -i '/^/,/^/d' "$file"
    sed -i '/^    
    # Clean up any remaining conflict markers
    sed -i '/^$/d' "$file"
    sed -i '/^$/d' "$file"
    sed -i '/^}

# Find all files with merge conflicts
conflict_files=$(find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "" 2>/dev/null)

echo "Found $(echo "$conflict_files" | wc -l) files with conflicts"

# Process each file
for file in $conflict_files; do
    if [ -f "$file" ]; then
        resolve_file "$file"
    fi
done

echo "Merge conflicts resolved!"
echo "Running lint check..."

# Run lint to check for any remaining issues
npm run lint 2>/dev/null || echo "Lint completed with warnings/errors"

echo "Done!"