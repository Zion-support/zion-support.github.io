#!/bin/bash

# PR Merge and Conflict Resolution Script
echo "🔍 Checking current git status..."

# Check current status
git status --porcelain > /tmp/git_status.txt
echo "Git status:"
cat /tmp/git_status.txt

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"

# Fetch all branches
echo "📥 Fetching all branches..."
git fetch --all --prune

# Check for merge conflicts
echo "🔍 Checking for merge conflicts..."
if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
    echo "⚠️  Merge conflicts detected!"
    git status
    exit 1
fi

# Switch to main branch
echo "🔄 Switching to main branch..."
git checkout main

# Pull latest changes
echo "📥 Pulling latest changes from main..."
git pull origin main

# List all remote branches
echo "📋 Listing all remote branches..."
git branch -r | grep -v HEAD | grep -E "cursor/|feature/|fix/" | head -20

# Check for open PRs by looking at remote branches
echo "🔍 Checking for open PRs..."
OPEN_BRANCHES=$(git branch -r | grep -E "cursor/fix-errors-and-merge-to-main|feature/|fix/" | grep -v "merged" | head -10)

if [ -z "$OPEN_BRANCHES" ]; then
    echo "✅ No open PRs found"
    exit 0
fi

echo "📝 Found open branches:"
echo "$OPEN_BRANCHES"

# Function to merge a branch
merge_branch() {
    local branch=$1
    local branch_name=$(basename "$branch")
    
    echo "🔄 Attempting to merge $branch_name..."
    
    # Checkout the branch
    git checkout "$branch_name" 2>/dev/null || {
        echo "❌ Failed to checkout $branch_name"
        return 1
    }
    
    # Switch back to main
    git checkout main
    
    # Try to merge
    if git merge "$branch_name" --no-ff -m "Merge $branch_name into main"; then
        echo "✅ Successfully merged $branch_name"
        return 0
    else
        echo "⚠️  Merge conflict in $branch_name, attempting to resolve..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts in $branch_name..."
            
            # Auto-resolve simple conflicts
            git status --porcelain | while read line; do
                file=$(echo "$line" | awk '{print $2}')
                if [[ "$file" == *.tsx ]] || [[ "$file" == *.ts ]] || [[ "$file" == *.js ]] || [[ "$file" == *.json ]]; then
                    echo "🔧 Auto-resolving conflicts in $file..."
                    # Use ours strategy for these files
                    git checkout --ours "$file" 2>/dev/null || true
                    git add "$file" 2>/dev/null || true
                fi
            done
            
            # Complete the merge
            if git commit --no-edit; then
                echo "✅ Resolved conflicts and merged $branch_name"
                return 0
            else
                echo "❌ Failed to resolve conflicts for $branch_name"
                git merge --abort
                return 1
            fi
        fi
    fi
}

# Process each open branch
echo "$OPEN_BRANCHES" | while read branch; do
    if [ -n "$branch" ]; then
        merge_branch "$branch"
    fi
done

echo "🚀 Pushing changes to main..."
git push origin main

echo "✅ PR merge process completed!"
echo "📊 Final status:"
git log --oneline -5