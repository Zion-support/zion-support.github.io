#!/bin/bash

echo "🚀 Quick Conflict Resolution Script Starting..."

# Find all files with merge conflicts
CONFLICTED_FILES=$(find . -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" -o -name "*.html" -o -name "*.toml" -o -name "*.sh" \) -exec grep -l "<<<<<<< HEAD" {} \; 2>/dev/null)

echo "Found conflicted files: $CONFLICTED_FILES"

# Resolve conflicts in each file
for file in $CONFLICTED_FILES; do
    if [ -f "$file" ]; then
        echo "🔧 Resolving conflicts in $file..."
        
        # Create backup
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Remove conflict markers and keep the HEAD version
        sed -i '/^<<<<<<< HEAD$/d' "$file"
        sed -i '/^=======/,/^>>>>>>> /d' "$file"
        
        echo "✅ Resolved conflicts in $file"
    fi
done

echo "🎉 All conflicts resolved!"