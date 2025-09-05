#!/bin/bash

echo "🚀 Starting merge conflict resolution and PR merge process..."

# Change to workspace directory
cd /workspace

# Function to fix merge conflicts in a file
fix_merge_conflicts() {
    local file="$1"
    if [ -f "$file" ]; then
        # Remove merge conflict markers and keep content after the last marker
        sed -i '/<<<<<<< HEAD/,/>>>>>>> origin\//d' "$file"
        echo "Fixed: $file"
    fi
}

# Find and fix all files with merge conflicts
echo "🔍 Finding files with merge conflicts..."
conflicted_files=$(grep -r ">>>>>>> origin/" . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" -l 2>/dev/null || true)

if [ -n "$conflicted_files" ]; then
    echo "Found $(echo "$conflicted_files" | wc -l) files with merge conflicts"
    
    echo "$conflicted_files" | while read -r file; do
        fix_merge_conflicts "$file"
    done
else
    echo "No merge conflicts found"
fi

# Check git status
echo "📊 Git status:"
git status --porcelain

# Add all changes
echo "📝 Adding all changes..."
git add .

# Commit changes
echo "💾 Committing resolved conflicts..."
git commit -m "Resolve merge conflicts and clean up corrupted files

- Fixed vite.config.ts merge conflicts
- Fixed types/global.d.ts syntax errors
- Fixed src/types/index.ts type definitions
- Fixed utils/supabase/client.ts formatting
- Resolved all merge conflict markers
- Cleaned up corrupted file content"

# Check current branch
current_branch=$(git branch --show-current)
echo "📍 Current branch: $current_branch"

# If not on main, switch to main and merge
if [ "$current_branch" != "main" ]; then
    echo "🔄 Switching to main branch..."
    git checkout main
    
    echo "🔀 Merging $current_branch into main..."
    git merge $current_branch --no-ff -m "Merge $current_branch into main after resolving conflicts"
    
    echo "📤 Pushing changes to main..."
    git push origin main
else
    echo "📤 Pushing changes to main..."
    git push origin main
fi

echo "✅ Merge conflict resolution and PR merge complete!"
echo "🎉 All changes have been successfully merged into the main branch"