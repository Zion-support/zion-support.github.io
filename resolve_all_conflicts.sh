#!/bin/bash

echo "🔧 Resolving ALL remaining merge conflicts..."

# Find all files with merge conflicts
conflict_files=$(find ./src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null)

echo "Found $(echo "$conflict_files" | wc -l) files with conflicts"

# For each file, resolve conflicts by keeping the cleaner version
for file in $conflict_files; do
    echo "🔧 Resolving conflicts in: $file"
    
    # Create a backup
    cp "$file" "$file.backup"
    
    # Use sed to remove conflict markers and keep the first version (HEAD)
    sed -i '/^<<<<<<< HEAD/,/^=======/!d' "$file"
    sed -i '/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    # Check if conflicts were resolved
    if ! grep -q "<<<<<<< HEAD" "$file"; then
        echo "✅ Resolved conflicts in: $file"
        rm "$file.backup"
    else
        echo "⚠️  Still has conflicts: $file (restored backup)"
        mv "$file.backup" "$file"
    fi
done

echo "🎉 All conflict resolution complete!"