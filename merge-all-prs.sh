#!/bin/bash

# Comprehensive PR merge script
set -e

echo "🚀 Starting comprehensive PR merge process..."

# Function to check if a branch can be merged
check_mergeable() {
    local branch=$1
    echo "Checking mergeability of $branch..."
    
    # Check if branch exists
    if ! git show-ref --verify --quiet refs/remotes/origin/$branch; then
        echo "❌ Branch $branch does not exist"
        return 1
    fi
    
    # Check if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        echo "✅ Branch $branch is already merged"
        return 1
    fi
    
    return 0
}

# Function to resolve conflicts and merge a branch
merge_branch() {
    local branch=$1
    echo "🔄 Processing branch: $branch"
    
    # Fetch the latest
    git fetch origin $branch
    
    # Check if branch can be merged
    if ! check_mergeable $branch; then
        return 0
    fi
    
    # Create a temporary branch for merging
    local temp_branch="temp-merge-$branch-$(date +%s)"
    git checkout -b $temp_branch main
    
    echo "🔄 Attempting to merge $branch into $temp_branch..."
    
    # Try to merge with conflict resolution
    if git merge origin/$branch --no-ff -m "Merge $branch into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        
        # Update main
        git checkout main
        git merge $temp_branch --ff-only
        git push origin main
        
        # Clean up
        git branch -D $temp_branch
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch, attempting resolution..."
        
        # List conflicted files
        git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
            echo "  Conflict in: $file"
        done
        
        # Try to resolve conflicts automatically
        echo "🔧 Attempting automatic conflict resolution..."
        
        # For package.json conflicts, prefer main version
        if [ -f "package.json" ] && git status --porcelain | grep -q "package.json"; then
            echo "  Resolving package.json conflicts..."
            git checkout --ours package.json
            git add package.json
        fi
        
        # For package-lock.json conflicts, regenerate
        if [ -f "package-lock.json" ] && git status --porcelain | grep -q "package-lock.json"; then
            echo "  Regenerating package-lock.json..."
            git checkout --ours package-lock.json
            npm install --package-lock-only
            git add package-lock.json
        fi
        
        # For other conflicts, try to resolve automatically
        git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
            echo "  Auto-resolving $file..."
            # Try to resolve by taking the version from the branch being merged
            if git checkout --theirs "$file" 2>/dev/null; then
                git add "$file"
            else
                # If that fails, take ours
                git checkout --ours "$file" 2>/dev/null || true
                git add "$file"
            fi
        done
        
        # Check if all conflicts are resolved
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "❌ Could not automatically resolve all conflicts in $branch"
            git merge --abort
            git checkout main
            git branch -D $temp_branch
            return 1
        else
            echo "✅ Conflicts resolved, completing merge..."
            git commit --no-edit
            
            # Update main
            git checkout main
            git merge $temp_branch --ff-only
            git push origin main
            
            # Clean up
            git branch -D $temp_branch
            return 0
        fi
    fi
}

# Main execution
echo "📋 Getting list of open PRs..."

# Get all remote branches that might be PRs
branches=$(git branch -r | grep -v HEAD | grep -v main | sed 's/origin\///' | head -50)

echo "Found $(echo "$branches" | wc -l) branches to process"

# Process each branch
for branch in $branches; do
    echo ""
    echo "🔄 Processing: $branch"
    if merge_branch "$branch"; then
        echo "✅ Successfully processed $branch"
    else
        echo "❌ Failed to process $branch"
    fi
done

echo ""
echo "🎉 PR merge process completed!"
echo "📊 Final status:"
git status
git log --oneline -10