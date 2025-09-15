#!/bin/bash

echo "🔧 Robustly resolving merge conflicts in all files..."

# Function to resolve conflicts in a single file
resolve_file_conflicts() {
    local file="$1"
    echo "🔨 Resolving conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use a more robust approach to resolve conflicts
    # Keep everything from HEAD (our version) and remove conflict markers
    awk '
    /^/ { in_head = 1; next }
    /^/ { in_head = 0; in_other = 1; next }
    /^>>>>>>> / { in_other = 0; next }
    in_head { print }
    !in_head && !in_other { print }
    ' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
    
    echo "✅ Resolved: $file"
}

# Find all files with merge conflicts
files_with_conflicts=$(grep -l "" -r . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.log" --exclude="*.json" --exclude="*.backup" 2>/dev/null)

if [ -z "$files_with_conflicts" ]; then
    echo "✅ No merge conflicts found!"
    exit 0
fi

echo "📁 Found $(echo "$files_with_conflicts" | wc -l) files with merge conflicts"

# Counter for resolved files
resolved_count=0

# Process each file
for file in $files_with_conflicts; do
    resolve_file_conflicts "$file"
    ((resolved_count++))
done

echo "🎉 Successfully resolved $resolved_count files with merge conflicts!"

# Clean up backup files
echo "🧹 Cleaning up backup files..."
find . -name "*.backup" -delete 2>/dev/null

echo "✨ Merge conflict resolution complete!"
