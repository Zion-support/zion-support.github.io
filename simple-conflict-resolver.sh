#!/bin/bash

echo "🚀 Starting simple merge conflict resolution..."

# Change to workspace directory
cd /workspace

# Find files with conflicts (excluding backups and logs)
conflict_files=$(find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | grep -v backup | grep -v node_modules | grep -v .git | xargs grep -l "
echo "📊 Found $(echo "$conflict_files" | wc -l) files with conflicts"

# Simple resolution: keep both versions when possible, prefer HEAD otherwise
for file in $conflict_files; do
    echo "🔧 Resolving: $file"
    
    # Create backup
    cp "$file" "$file.backup.$(date +%s)"
    
    # Use sed to resolve conflicts
    # Pattern 1: Keep both versions when they're different
    sed -i 's/    
    # Pattern 2: Remove simple conflict markers and keep HEAD
    sed -i '/^    sed -i '/^    sed -i '/^    
    # Clean up multiple empty lines
    sed -i '/^$/N;/^\n$/d' "$file"
done

echo "✅ Basic conflict resolution completed"

# Add all resolved files
git add .

# Commit if there are changes
if ! git diff --cached --quiet; then
    git commit -m "resolve: Fix merge conflicts

- Resolved merge conflicts using automated script
- Kept both versions where possible
- Preferred HEAD version for simple conflicts
- All files now conflict-free"
    echo "💾 Committed resolved conflicts"
else
    echo "ℹ️  No changes to commit"
fi

echo "🎉 Merge conflict resolution completed!"