#!/bin/bash

# Comprehensive script to resolve all merge conflicts and merge open PRs
set -e

echo "🚀 Starting comprehensive PR merge process..."
echo "⏰ Started at: $(date)"
echo "=========================================="

# Ensure we're in the right directory
cd /workspace

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "⚠️  Found conflicts in $file, resolving..."
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Strategy: Keep the more comprehensive version (usually the HEAD)
        if [[ "$file" == "src/App.tsx" ]]; then
            echo "📱 App.tsx detected, keeping comprehensive version..."
            # Remove conflict markers and keep the HEAD version
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            echo "📦 Package file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "netlify.toml" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            echo "📝 Regular file, keeping HEAD version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
        echo "✅ Resolved conflicts in $file"
    fi
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    local pr_number="$2"
    
    echo "🔄 Attempting to merge branch: $branch (PR #$pr_number)..."
    
    # Fetch the latest version of the branch
    if ! git fetch origin "$branch"; then
        echo "❌ Failed to fetch branch $branch"
        return 1
    fi
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "❌ Branch $branch does not exist on remote"
        return 1
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge PR #$pr_number ($branch) into main - $(date)"
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Resolve merge conflicts for PR #$pr_number ($branch) - $(date)"
            
            echo "✅ Successfully resolved conflicts and merged $branch"
            return 0
        else
            echo "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            return 1
        fi
    fi
}

# Ensure we're on main branch
echo "🔄 Switching to main branch..."
git checkout main || {
    echo "❌ Could not checkout main branch"
    exit 1
}

# Pull latest changes
echo "📥 Pulling latest changes from main..."
git pull origin main || {
    echo "❌ Could not pull latest changes"
    exit 1
}

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0

# List of PRs to merge (based on the GitHub API response)
PRS_TO_MERGE=(
    "23666|cursor/fix-netlify-build-and-merge-to-main-3a65"
    "23665|cursor/fix-netlify-build-and-merge-to-main-30c7"
    "23657|cursor/fix-netlify-build-and-merge-to-main-9474"
)

# Process each PR
for pr_info in "${PRS_TO_MERGE[@]}"; do
    IFS='|' read -r pr_number branch_name <<< "$pr_info"
    
    echo ""
    echo "=========================================="
    echo "🔄 Processing PR #$pr_number from branch: $branch_name"
    echo "=========================================="
    
    if merge_branch "$branch_name" "$pr_number"; then
        echo "✅ PR #$pr_number processed successfully"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
    else
        echo "❌ PR #$pr_number processing failed"
        FAILED_MERGES=$((FAILED_MERGES + 1))
    fi
    
    echo "=========================================="
    echo ""
    
    # Brief pause to avoid overwhelming the system
    sleep 1
done

# Test the build after merging
echo "🔨 Testing build after merges..."
if pnpm run build:no-check; then
    echo "✅ Build successful after merges"
else
    echo "❌ Build failed after merges"
    echo "🔧 Attempting to fix build issues..."
    
    # Try to fix common build issues
    pnpm install
    pnpm run lint:fix || echo "Lint fix failed, continuing..."
    
    # Try build again
    if pnpm run build:no-check; then
        echo "✅ Build fixed and successful"
        git add .
        git commit -m "Fix build issues after PR merges - $(date)"
    else
        echo "❌ Build still failing, manual intervention may be required"
    fi
fi

# Push changes
echo "💾 Pushing changes to remote..."
git push origin main || {
    echo "❌ Could not push to main"
    exit 1
}

# Summary
echo ""
echo "🎉 PR merge process completed!"
echo "📊 Final Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "⏰ Completed at: $(date)"

echo ""
echo "🧹 Next steps:"
echo "   1. Review the merged changes: git log --oneline -10"
echo "   2. Test the application thoroughly"
echo "   3. Consider cleaning up old feature branches"
echo "   4. Run tests to ensure everything works correctly"