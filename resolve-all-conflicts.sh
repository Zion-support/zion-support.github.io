#!/bin/bash

echo "🔧 Starting comprehensive merge conflict resolution..."

# Get all conflicted files
conflicted_files=$(git status --porcelain | grep "^UU\|^AU\|^UA" | cut -c4-)

echo "Found $(echo "$conflicted_files" | wc -l) files with conflicts"

# Counter for resolved files
resolved=0
failed=0

# Process each conflicted file
while IFS= read -r file; do
    if [ -n "$file" ]; then
        echo "🔧 Resolving conflicts in: $file"
        
        # Try to resolve by accepting main branch version
        if git checkout --theirs "$file" 2>/dev/null; then
            git add "$file"
            echo "✅ Resolved: $file"
            ((resolved++))
        else
            echo "❌ Failed to resolve: $file"
            ((failed++))
        fi
    fi
done <<< "$conflicted_files"

echo ""
echo "📊 Resolution Summary:"
echo "✅ Successfully resolved: $resolved files"
echo "❌ Failed to resolve: $failed files"

# Handle modify/delete conflicts by accepting main branch
echo ""
echo "🔧 Handling modify/delete conflicts..."
modify_delete_files=$(git status --porcelain | grep "^DU\|^UD" | cut -c4-)

while IFS= read -r file; do
    if [ -n "$file" ]; then
        echo "🔧 Handling modify/delete conflict: $file"
        git add "$file"
        ((resolved++))
    fi
done <<< "$modify_delete_files"

echo ""
echo "🎉 Conflict resolution completed!"
echo "📊 Total files processed: $((resolved + failed))"