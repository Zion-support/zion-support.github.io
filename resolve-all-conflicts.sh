#!/bin/bash

echo "🔧 Resolving all merge conflicts systematically..."

# Find all files with merge conflict markers
echo "📁 Searching for files with merge conflicts..."
conflict_files=$(grep -l "<<<<<<< HEAD" -r . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.md" --include="*.json" --include="*.yml" --include="*.yaml" 2>/dev/null)

if [ -z "$conflict_files" ]; then
    echo "✅ No merge conflicts found!"
    exit 0
fi

echo "⚠️  Found $(echo "$conflict_files" | wc -l) files with merge conflicts"

# Process each file
for file in $conflict_files; do
    echo "🔧 Processing: $file"
    
    # Create backup
    cp "$file" "$file.backup.$(date +%s)"
    
    # Remove all merge conflict markers and keep the first version (HEAD)
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> .*$/d' "$file"
    
    # Remove any remaining conflict markers
    sed -i '/^<<<<<<< HEAD/d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    # Clean up any remaining empty lines
    sed -i '/^[[:space:]]*$/d' "$file"
    
    echo "✅ Resolved conflicts in: $file"
done

echo "🎉 All merge conflicts resolved!"
echo "📝 Files processed:"
echo "$conflict_files"

# Check if any conflicts remain
remaining_conflicts=$(grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.md" --include="*.json" --include="*.yml" --include="*.yaml" 2>/dev/null | wc -l)

if [ "$remaining_conflicts" -eq 0 ]; then
    echo "✅ No remaining conflicts found!"
else
    echo "⚠️  $remaining_conflicts conflicts still remain"
    echo "🔍 Remaining conflicts:"
    grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" --include="*.md" --include="*.json" --include="*.yml" --include="*.yaml" 2>/dev/null | head -10
fi

echo "🚀 Ready to build and merge!"