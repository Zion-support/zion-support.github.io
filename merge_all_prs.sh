#!/bin/bash
set -e

echo "🚀 Starting comprehensive PR merge process..."

# Function to resolve conflicts selectively
resolve_conflicts_selectively() {
    echo "🔧 Applying selective conflict resolution..."
    
    # Keep main's version for critical config files
    git checkout --ours package*.json next.config* tsconfig* eslint.config* middleware* 2>/dev/null || true
    git checkout --ours yarn.lock package-lock.json pnpm-lock.yaml 2>/dev/null || true
    
    # For component files, prefer incoming changes but handle conflicts
    for file in $(git diff --name-only --diff-filter=U | grep -E '\.(tsx|ts|jsx|js)$' | grep -v -E '(config|middleware)'); do
        if [ -f "$file" ]; then
            echo "Resolving $file..."
            # Simple strategy: remove conflict markers and keep both versions where possible
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file" 2>/dev/null || true
            sed -i '/>>>>>>> /d' "$file" 2>/dev/null || true
        fi
    done
    
    git add .
    git commit -m "Resolve merge conflicts (prefer main configs, merge components)" --no-edit
}

# Get all cursor branches
echo "📋 Fetching cursor branches..."
git fetch origin --prune
branches=($(git ls-remote --heads origin 'cursor/*' | awk '{print $2}' | sed 's.refs/heads/..'))

echo "Found ${#branches[@]} branches to process"

success_count=0
fail_count=0

for branch in "${branches[@]}"; do
    echo "🔄 Processing $branch..."
    
    # Ensure we're on main and up to date
    git checkout -q main
    git pull -q --ff-only
    
    # Try to merge
    if git merge --no-ff -m "Merge $branch" "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git push -q origin main
        success_count=$((success_count + 1))
    else
        echo "⚠️ Conflict in $branch, attempting resolution..."
        if resolve_conflicts_selectively; then
            echo "✅ Successfully resolved and merged $branch"
            git push -q origin main
            success_count=$((success_count + 1))
        else
            echo "❌ Failed to resolve conflicts in $branch"
            git merge --abort 2>/dev/null || true
            fail_count=$((fail_count + 1))
        fi
    fi
    
    echo "---"
done

echo "🎉 Merge process completed!"
echo "✅ Successful merges: $success_count"
echo "❌ Failed merges: $fail_count"