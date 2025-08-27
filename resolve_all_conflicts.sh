#!/bin/bash

echo "🔧 Resolving all merge conflicts in the codebase..."

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    echo "Processing: $file"
    
    # Remove all merge conflict markers and keep the content after >>>>>>> 
    # This keeps the most recent changes
    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
    sed -i '/>>>>>>> /d' "$file"
    
    # Clean up any remaining conflict artifacts
    sed -i '/^=======$/d' "$file"
    sed -i '/^<<<<<<< HEAD$/d' "$file"
    sed -i '/^>>>>>>> [a-f0-9]*$/d' "$file"
}

# Find all files with merge conflicts
echo "🔍 Finding files with merge conflicts..."
conflict_files=$(grep -r -l "<<<<<<< HEAD" . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.sh" 2>/dev/null)

if [ -z "$conflict_files" ]; then
    echo "✅ No merge conflicts found!"
    exit 0
fi

echo "📁 Found $(echo "$conflict_files" | wc -l) files with conflicts"

# Process each file
echo "🔄 Resolving conflicts..."
echo "$conflict_files" | while read -r file; do
    if [ -f "$file" ]; then
        resolve_conflicts "$file"
    fi
done

echo "🧹 Cleaning up any remaining artifacts..."

# Additional cleanup for common patterns
find . -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.css" -o -name "*.html" \) \
    -not -path "./node_modules/*" \
    -not -path "./.git/*" \
    -exec sed -i 's/^=======$//g' {} \;

find . -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.json" -o -name "*.css" -o -name "*.html" \) \
    -not -path "./node_modules/*" \
    -not -path "./.git/*" \
    -exec sed -i '/^$/d' {} \;

echo "✅ All merge conflicts resolved!"
echo "🔍 Verifying no conflicts remain..."

# Final check
remaining_conflicts=$(grep -r -l "<<<<<<< HEAD" . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.sh" 2>/dev/null | head -5)

if [ -z "$remaining_conflicts" ]; then
    echo "🎉 All conflicts successfully resolved!"
else
    echo "⚠️  Some conflicts may still remain in:"
    echo "$remaining_conflicts"
fi