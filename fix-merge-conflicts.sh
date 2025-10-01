#!/bin/bash

echo "🔧 Fixing merge conflicts in the codebase..."

# Find all files with merge conflict markers
CONFLICT_FILES=$(grep -l "^[<>=]\{7\}" $(find . -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" -o -name "*.md" \) -not -path "./node_modules/*" -not -path "./.git/*" -not -path "./dist/*") 2>/dev/null || echo "")

if [ -z "$CONFLICT_FILES" ]; then
    echo "✅ No merge conflicts found!"
    exit 0
fi

echo "📋 Found merge conflicts in:"
echo "$CONFLICT_FILES"

FIXED_COUNT=0

for file in $CONFLICT_FILES; do
    echo "🔧 Fixing conflicts in $file..."
    
    # Create backup
    cp "$file" "$file.backup.$(date +%s)"
    
    # Remove merge conflict markers and keep the first version (HEAD)
    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
    sed -i '/^>>>>>>> /d' "$file"
    
    echo "✅ Fixed conflicts in $file"
    FIXED_COUNT=$((FIXED_COUNT + 1))
done

echo ""
echo "🎉 Merge conflict resolution complete!"
echo "📊 Fixed $FIXED_COUNT files"
echo "💾 Backups created with .backup.timestamp suffix"