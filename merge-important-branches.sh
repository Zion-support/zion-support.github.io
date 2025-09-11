#!/bin/bash

# Merge important branches systematically
set -e

echo "🎯 Merging important branches systematically..."

# Function to merge a branch
merge_branch() {
    local branch=$1
    echo "🔄 Processing branch: $branch"
    
    # Fetch the branch
    git fetch origin "$branch" 2>/dev/null || {
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
    git checkout -b "$temp_branch" main
    
    # Try to merge
    if git merge "origin/$branch" --no-ff -m "Merge $branch into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        
        # Update main
        git checkout main
        git merge "$temp_branch" --ff-only
        git push origin main
        
        # Clean up
        git branch -D "$temp_branch"
        return 0
    else
        echo "⚠️  Conflicts in $branch, attempting resolution..."
        
        # Auto-resolve common conflicts
        git status --porcelain | grep "^UU\|^AA\|^DD" | while read status file; do
            echo "  Resolving conflict in: $file"
            if [[ "$file" == "package.json" ]] || [[ "$file" == "package-lock.json" ]]; then
                git checkout --ours "$file"
                if [[ "$file" == "package-lock.json" ]]; then
                    npm install --package-lock-only 2>/dev/null || true
                fi
            elif [[ "$file" == "yarn.lock" ]]; then
                git checkout --ours "$file"
                yarn install --frozen-lockfile 2>/dev/null || true
            elif [[ "$file" == "tsconfig.json" ]] || [[ "$file" == "tsconfig.typecheck.json" ]]; then
                git checkout --ours "$file"
            else
                git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
            fi
            git add "$file" 2>/dev/null || true
        done
        
        # Add all resolved files
        git add . 2>/dev/null || true
        
        # Check if resolved
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "❌ Could not resolve conflicts in $branch"
            git merge --abort
            git checkout main
            git branch -D "$temp_branch"
            return 1
        else
            git commit --no-edit
            git checkout main
            git merge "$temp_branch" --ff-only
            git push origin main
            git branch -D "$temp_branch"
            echo "✅ Resolved conflicts and merged $branch"
            return 0
        fi
    fi
}

# Priority branches to merge
priority_branches=(
    "feature/website-improvements"
    "improvements/linting-fixes"
    "merged-conflicts-resolved"
    "chore/a11y-seo-improvements"
    "chore/analytics-perf-improvements"
    "chore/automation-ci-improvements"
    "chore/automation-improvements"
    "chore/homepage-improvements"
    "chore/seo-accessibility-improvements"
    "chore/site-audit-improvements"
)

echo "📋 Processing ${#priority_branches[@]} priority branches..."

for branch in "${priority_branches[@]}"; do
    echo ""
    if merge_branch "$branch"; then
        echo "✅ Successfully processed $branch"
    else
        echo "❌ Failed to process $branch"
    fi
done

echo ""
echo "🎉 Priority branch merge completed!"
echo "📊 Final status:"
git status
git log --oneline -5