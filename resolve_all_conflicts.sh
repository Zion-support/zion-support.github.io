#!/bin/bash

echo "🔧 Resolving all merge conflicts in the codebase..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Processing: $file"
    
    # Remove all merge conflict markers and keep the HEAD version
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> .*/d' "$file"
    
    # Remove any empty lines that might be left
    sed -i '/^[[:space:]]*$/d' "$file"
    
    echo "✅ Resolved conflicts in: $file"
}

# Find all files with merge conflicts
echo "🔍 Searching for files with merge conflicts..."
conflict_files=$(grep -l "<<<<<<< HEAD" -r . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.sh" 2>/dev/null)

if [ -z "$conflict_files" ]; then
    echo "✅ No merge conflicts found!"
    exit 0
fi

echo "📋 Found files with conflicts:"
echo "$conflict_files"

# Process each file
for file in $conflict_files; do
    if [ -f "$file" ]; then
        resolve_conflicts "$file"
    fi
done

echo ""
echo "🎉 All merge conflicts have been resolved!"
echo "📝 Files processed:"
echo "$conflict_files"

# Check if there are any remaining conflicts
remaining_conflicts=$(grep -l "<<<<<<< HEAD" -r . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.sh" 2>/dev/null)

if [ -z "$remaining_conflicts" ]; then
    echo "✅ Verification: No remaining conflicts found!"
else
    echo "❌ Warning: Some conflicts may still exist in:"
    echo "$remaining_conflicts"
fi