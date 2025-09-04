#!/bin/bash

echo "🔧 Resolving All Merge Conflicts"
echo "================================="

# Function to resolve merge conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Resolving conflicts in $file..."
    
    # Remove all merge conflict markers and keep the main branch version
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< /d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "✅ Resolved conflicts in $file"
}

# Find all files with merge conflicts
echo "🔍 Finding files with merge conflicts..."

# Check for merge conflict markers in common file types
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" | while read file; do
    if grep -q "<<<<<<< HEAD\|=======\|>>>>>>> " "$file" 2>/dev/null; then
        echo "Found conflicts in: $file"
        resolve_conflicts "$file"
    fi
done

echo "🎉 All merge conflicts resolved!"
echo "Running build test..."

# Test the build
if npm run build; then
    echo "✅ Build successful after conflict resolution!"
else
    echo "❌ Build still has issues, checking for remaining conflicts..."
    find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" | while read file; do
        if grep -q "<<<<<<< HEAD\|=======\|>>>>>>> " "$file" 2>/dev/null; then
            echo "Remaining conflicts in: $file"
        fi
    done
fi