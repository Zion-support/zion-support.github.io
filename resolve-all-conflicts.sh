#!/bin/bash

echo "Resolving all merge conflicts by accepting incoming changes..."

# Find all files with merge conflicts
conflict_files=$(grep -l "" $(find . -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.json") 2>/dev/null)

echo "Found $(echo "$conflict_files" | wc -l) files with merge conflicts"

# Resolve conflicts by accepting incoming changes
for file in $conflict_files; do
    echo "Resolving conflicts in: $file"
    git checkout --theirs "$file"
    git add "$file"
done

echo "🎉 All merge conflicts resolved!"
echo "Running build test..."

# Test the build
if npm run build; then
    echo "✅ Build successful after conflict resolution!"
else
    echo "❌ Build still has issues, checking for remaining conflicts..."
    find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" | while read file; do
        if grep -q "\|\|>>>>>>> " "$file" 2>/dev/null; then
            echo "Remaining conflicts in: $file"
        fi
    done
fi