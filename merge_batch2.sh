#!/bin/bash

# Continue merging additional branches in batch 2
set -e

echo "🚀 Starting batch 2 merge process..."

# Function to merge a branch with conflict resolution
merge_branch() {
    local branch=$1
    echo "📦 Attempting to merge branch: $branch"
    
    # Fetch the branch
    git fetch origin "$branch" || { echo "❌ Failed to fetch $branch"; return 1; }
    
    # Try to merge
    if git merge "origin/$branch" --no-ff -m "Merge $branch into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        return 0
    else
        echo "⚠️  Merge conflict in $branch, attempting to resolve..."
        
        # List files with conflicts
        conflict_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$conflict_files" ]; then
            echo "🔧 Resolving conflicts in: $conflict_files"
            
            # For each conflicted file, try to resolve automatically
            for file in $conflict_files; do
                echo "  📝 Processing: $file"
                
                # Check if file exists
                if [ -f "$file" ]; then
                    # Try to resolve common conflicts
                    if grep -q "" "$file"; then
                        echo "    🔄 Resolving merge conflicts in $file"
                        
                        # For vite.config.ts - keep the simpler version
                        if [ "$file" = "vite.config.ts" ]; then
                            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                        fi
                        
                        # For other files, try to resolve by keeping the incoming version
                        git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
                        
                        # Remove conflict markers
                        sed -i '//,/                        sed -i '//d' "$file" 2>/dev/null || true
                        
                        # Stage the resolved file
                        git add "$file" 2>/dev/null || true
                    fi
                fi
            done
            
            # Try to commit the merge
            if git commit --no-edit 2>/dev/null; then
                echo "✅ Successfully resolved conflicts and merged $branch"
                return 0
            else
                echo "❌ Failed to resolve conflicts for $branch, aborting merge"
                git merge --abort 2>/dev/null || true
                return 1
            fi
        else
            echo "❌ No conflict files found, aborting merge"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Get list of cursor branches (next batch)
echo "📋 Getting list of cursor branches for batch 2..."
branches=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | sort -V | tail -40 | head -20)

# Counter for tracking progress
total=$(echo "$branches" | wc -l)
current=0
successful=0
failed=0

echo "📊 Found $total branches to process in batch 2"

# Process each branch
for branch in $branches; do
    current=$((current + 1))
    echo ""
    echo "🔄 [$current/$total] Processing: $branch"
    
    # Clean branch name (remove origin/ prefix)
    clean_branch=${branch#origin/}
    
    if merge_branch "$clean_branch"; then
        successful=$((successful + 1))
        echo "✅ Branch $clean_branch merged successfully"
    else
        failed=$((failed + 1))
        echo "❌ Failed to merge $clean_branch"
    fi
    
    # Pause briefly to avoid overwhelming the system
    sleep 1
done

echo ""
echo "📊 Batch 2 Merge Summary:"
echo "  ✅ Successful: $successful"
echo "  ❌ Failed: $failed"
echo "  📦 Total: $total"

# Push all changes to main
echo ""
echo "🚀 Pushing all changes to main..."
if git push origin main; then
    echo "✅ Successfully pushed all changes to main"
else
    echo "❌ Failed to push to main"
    exit 1
fi

echo ""
echo "🎉 Batch 2 merge process completed!"
echo "📊 Final stats: $successful successful merges, $failed failures"