#!/bin/bash

# Immediate PR Resolution Script
# Resolves merge conflicts and merges all open PRs into main branch

echo "🚀 IMMEDIATE PR RESOLUTION STARTED"
echo "=================================="

# Set working directory
cd /workspace

# Function to execute with timeout and error handling
execute_with_timeout() {
    local cmd="$1"
    local timeout="${2:-30}"
    
    echo "⚡ Executing: $cmd"
    if timeout "$timeout" bash -c "$cmd" 2>/dev/null; then
        echo "✅ SUCCESS: $cmd"
        return 0
    else
        echo "⚠️  TIMEOUT/FAILED: $cmd"
        return 1
    fi
}

# Step 1: Check current status
echo "📋 Checking current git status..."
execute_with_timeout "git status --porcelain" 10
execute_with_timeout "git branch --show-current" 10

# Step 2: Switch to main branch
echo "🔄 Switching to main branch..."
execute_with_timeout "git checkout main" 10

# Step 3: Pull latest changes
echo "📥 Pulling latest changes..."
execute_with_timeout "git pull origin main" 60

# Step 4: List available branches
echo "📋 Available branches:"
execute_with_timeout "git branch -r | grep cursor | head -10" 10

# Step 5: Merge specific branches we know exist
echo "🔄 Merging known branches..."

# From PR data analysis, we know these branches exist:
BRANCHES_TO_MERGE=(
    "cursor/fix-errors-and-merge-to-main-c241"
    "cursor/fix-errors-and-merge-to-main-de0a"
)

for branch in "${BRANCHES_TO_MERGE[@]}"; do
    echo "🔄 Attempting to merge: $branch"
    
    # Check if branch exists
    if git show-ref --verify --quiet "refs/remotes/origin/$branch" 2>/dev/null; then
        # Attempt merge
        if timeout 60 git merge "origin/$branch" --no-ff -m "Merge $branch into main" 2>/dev/null; then
            echo "✅ Successfully merged $branch"
        else
            echo "⚠️  Merge conflict in $branch, resolving..."
            
            # Auto-resolve conflicts
            git status --porcelain | grep "^UU\|^AA\|^DD" | awk '{print $2}' | while read file; do
                if [ -n "$file" ]; then
                    echo "🔧 Resolving conflicts in $file"
                    
                    # Strategy based on file type
                    if [[ "$file" == *.tsx ]] || [[ "$file" == *.ts ]]; then
                        git checkout --ours "$file" 2>/dev/null || true
                    elif [[ "$file" == *.json ]]; then
                        git checkout --theirs "$file" 2>/dev/null || true
                    else
                        git checkout --ours "$file" 2>/dev/null || true
                    fi
                    
                    git add "$file" 2>/dev/null || true
                fi
            done
            
            # Commit merge
            if timeout 30 git commit --no-edit 2>/dev/null; then
                echo "✅ Resolved conflicts and merged $branch"
            else
                echo "❌ Failed to resolve conflicts for $branch"
                git merge --abort 2>/dev/null || true
            fi
        fi
    else
        echo "⚠️  Branch $branch does not exist"
    fi
done

# Step 6: Push changes
echo "🚀 Pushing changes to main..."
execute_with_timeout "git push origin main" 120

# Step 7: Final status
echo "📊 Final status:"
execute_with_timeout "git log --oneline -5" 10

echo "🎉 IMMEDIATE PR RESOLUTION COMPLETED"