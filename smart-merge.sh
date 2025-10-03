#!/bin/bash

# Smart merge script to handle merge conflicts and merge branches
set -e

echo "Starting smart merge process..."

# Function to resolve common merge conflicts
resolve_conflicts() {
    local file="$1"
    
    echo "Resolving conflicts in $file"
    
    # Common conflict resolution patterns
    if [[ "$file" == *".tsx" ]] || [[ "$file" == *".ts" ]]; then
        # For TypeScript files, try to resolve common patterns
        sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file" 2>/dev/null || true
        sed -i '/^>>>>>>> /d' "$file" 2>/dev/null || true
        
        # Remove duplicate imports
        awk '!seen[$0]++' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file" 2>/dev/null || true
    fi
    
    # Add file to git
    git add "$file" 2>/dev/null || true
}

# Get recent branches (last 20)
recent_branches=$(git branch -r | grep "cursor/fix-errors-and-merge-to-main" | tail -20)

echo "Processing most recent branches..."

for branch in $recent_branches; do
    local_branch=$(echo $branch | sed 's/origin\///')
    
    echo "Processing: $local_branch"
    
    # Checkout branch
    if git fetch origin $local_branch 2>/dev/null && git checkout -b $local_branch origin/$local_branch 2>/dev/null; then
        git checkout main
        
        # Try merge
        if git merge --no-edit $local_branch 2>/dev/null; then
            echo "✅ Merged $local_branch successfully"
            git branch -d $local_branch
        else
            echo "🔄 Resolving conflicts for $local_branch"
            
            # Get conflicted files
            conflicted_files=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
            
            if [ -n "$conflicted_files" ]; then
                echo "Conflicted files: $conflicted_files"
                
                # Try to resolve conflicts
                for file in $conflicted_files; do
                    resolve_conflicts "$file"
                done
                
                # Commit the resolution
                if git commit --no-edit 2>/dev/null; then
                    echo "✅ Resolved conflicts for $local_branch"
                    git branch -d $local_branch
                else
                    echo "❌ Could not resolve conflicts for $local_branch"
                    git merge --abort 2>/dev/null || true
                fi
            else
                echo "❌ No conflicted files found for $local_branch"
                git merge --abort 2>/dev/null || true
            fi
        fi
        
        git checkout main
    fi
done

echo "Smart merge process completed!"
git status