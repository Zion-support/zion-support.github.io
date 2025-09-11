#!/bin/bash

# Focus on important PRs and cursor branches
set -e

echo "🎯 Focusing on important PRs and cursor branches..."

# Function to merge a specific branch
merge_specific_branch() {
    local branch=$1
    echo "🔄 Processing: $branch"
    
    # Fetch the branch
    git fetch origin $branch 2>/dev/null || {
        echo "❌ Branch $branch not found"
        return 1
    }
    
    # Check if already merged
    if git branch --merged main | grep -q "$branch"; then
        echo "✅ Branch $branch already merged"
        return 0
    fi
    
    # Create temp branch
    local temp_branch="temp-merge-$branch-$(date +%s)"
    git checkout -b $temp_branch main
    
    # Try to merge
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
        echo "⚠️  Conflicts in $branch, attempting resolution..."
        
        # Auto-resolve common conflicts
        git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
            echo "  Resolving conflict in: $file"
            if [[ "$file" == "package.json" ]] || [[ "$file" == "package-lock.json" ]]; then
                git checkout --ours "$file"
                if [[ "$file" == "package-lock.json" ]]; then
                    npm install --package-lock-only
                fi
            else
                git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file"
            fi
            git add "$file"
        done
        
        # Check if resolved
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "❌ Could not resolve conflicts in $branch"
            git merge --abort
            git checkout main
            git branch -D $temp_branch
            return 1
        else
            git commit --no-edit
            git checkout main
            git merge $temp_branch --ff-only
            git push origin main
            git branch -D $temp_branch
            echo "✅ Resolved conflicts and merged $branch"
            return 0
        fi
    fi
}

# Priority branches to merge
priority_branches=(
    "cursor/fix-netlify-build-and-merge-to-main-9ff1"
    "cursor/check-fix-push-and-merge-to-main-4014"
    "cursor/website-audit-and-enhancement-037a"
    "cursor/fix-web-application-console-errors-0bf5"
    "cursor/netlify-pnpm-node22"
    "cursor/fix-netlify-build-corepack-pnpm"
    "cursor/fix-netlify-build-pnpm"
    "fix/netlify-build-pnpm"
    "fix/netlify-node-22-16-0"
    "chore/netlify-build-fix"
)

echo "📋 Processing ${#priority_branches[@]} priority branches..."

for branch in "${priority_branches[@]}"; do
    echo ""
    if merge_specific_branch "$branch"; then
        echo "✅ Successfully processed $branch"
    else
        echo "❌ Failed to process $branch"
    fi
done

echo ""
echo "🎉 Priority PR merge completed!"
echo "📊 Final status:"
git status
git log --oneline -5