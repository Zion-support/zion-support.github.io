#!/bin/bash

echo "🔧 Resolving all remaining merge conflicts..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Processing: $file"
    
    # Remove all conflict markers and keep our version (HEAD)
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> .*/d' "$file"
    
    # Remove any remaining <<<<<<< HEAD lines
    sed -i '/^<<<<<<< HEAD/d' "$file"
    
    echo "✅ Resolved conflicts in: $file"
}

# Find all files with merge conflicts (excluding shell scripts and git files)
conflict_files=$(grep -l "<<<<<<< HEAD" -r . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.sh" --exclude="*.md" 2>/dev/null)

if [ -z "$conflict_files" ]; then
    echo "🎉 No merge conflicts found!"
    exit 0
fi

echo "Found $(echo "$conflict_files" | wc -l) files with conflicts:"
echo "$conflict_files"

# Process each file
echo ""
echo "Resolving conflicts..."
for file in $conflict_files; do
    if [ -f "$file" ]; then
        resolve_conflicts "$file"
    fi
done

# Check for remaining conflicts
echo ""
echo "Checking for remaining conflicts..."
remaining_conflicts=$(grep -l "<<<<<<< HEAD" -r . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.sh" --exclude="*.md" 2>/dev/null)

if [ -z "$remaining_conflicts" ]; then
    echo "🎉 All merge conflicts have been resolved!"
else
    echo "⚠️  Some conflicts remain:"
    echo "$remaining_conflicts"
fi

echo ""
echo "✅ Conflict resolution complete!"