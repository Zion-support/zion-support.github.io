#!/bin/bash

echo "🔧 Fixing all merge conflicts..."

# Find all files with merge conflicts
conflict_files=$(find src -name "*.tsx" -exec grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " {} \;)

if [ -z "$conflict_files" ]; then
    echo "✅ No merge conflicts found!"
    exit 0
fi

echo "📋 Found $(echo "$conflict_files" | wc -l) files with merge conflicts"

# Fix each file by keeping the main branch version
for file in $conflict_files; do
    echo "🔧 Fixing conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use git checkout --ours to keep main branch version
    git checkout --ours "$file" 2>/dev/null || {
        echo "⚠️  Could not use git checkout, manually fixing..."
        
        # Manual fix: remove conflict markers and keep content between <<<<<<< HEAD and =======
        sed -i '/^<<<<<<< HEAD/,/^=======/!d; /^<<<<<<< HEAD/d; /^=======/d' "$file"
        sed -i '/^>>>>>>> /d' "$file"
    }
    
    # Clean up any remaining conflict markers
    sed -i '/^<<<<<<< HEAD/d; /^=======/d; /^>>>>>>> /d' "$file"
    
    echo "✅ Fixed: $file"
done

echo "🎉 All merge conflicts have been resolved!"

# Check for any remaining conflicts
remaining_conflicts=$(find src -name "*.tsx" -exec grep -l "<<<<<<< HEAD\|=======\|>>>>>>> " {} \; 2>/dev/null)

if [ -n "$remaining_conflicts" ]; then
    echo "⚠️  Still found conflicts in:"
    echo "$remaining_conflicts"
else
    echo "✅ No remaining merge conflicts found!"
fi