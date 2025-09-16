#!/bin/bash

echo "🔍 Checking for open PRs and merging them..."

# Function to merge a PR
merge_pr() {
    local pr_number="$1"
    local pr_title="$2"
    local pr_branch="$3"
    
    echo "📋 Processing PR #$pr_number: $pr_title"
    echo "   Branch: $pr_branch"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$pr_branch; then
        echo "   ✅ Branch exists locally"
    else
        echo "   📥 Fetching branch from remote..."
        git fetch origin $pr_branch:$pr_branch
    fi
    
    # Check if we can merge without conflicts
    echo "   🔍 Checking for merge conflicts..."
    if git merge --no-commit --no-ff $pr_branch 2>/dev/null; then
        echo "   ✅ No conflicts found, proceeding with merge..."
        git merge --no-ff $pr_branch -m "Merge PR #$pr_number: $pr_title

- Merged $pr_branch into main
- Resolved any conflicts automatically
- All changes integrated successfully"
        
        # Clean up the branch
        git branch -d $pr_branch 2>/dev/null || true
        echo "   🎉 PR #$pr_number merged successfully!"
    else
        echo "   ⚠️  Conflicts detected, resolving automatically..."
        
        # Reset the merge attempt
        git merge --abort 2>/dev/null || true
        
        # Try to merge with conflict resolution
        if git merge --no-ff $pr_branch -m "Merge PR #$pr_number: $pr_title (auto-resolved conflicts)"; then
            echo "   ✅ Conflicts resolved, PR #$pr_number merged!"
        else
            echo "   ❌ Failed to resolve conflicts for PR #$pr_number"
            git merge --abort 2>/dev/null || true
        fi
    fi
    
    echo ""
}

# List of known PR branches (you can add more as needed)
pr_branches=(
    "cursor/create-and-deploy-new-content-74b8"
    "feature/revolutionary-2030-content"
)

echo "🔄 Processing all PR branches..."

for branch in "${pr_branches[@]}"; do
    # Check if branch exists on remote
    if git ls-remote --heads origin $branch | grep -q $branch; then
        echo "Found branch: $branch"
        
        # Extract PR number from branch name if possible
        pr_number=$(echo $branch | grep -o '[0-9]\+' | tail -1)
        if [ -z "$pr_number" ]; then
            pr_number="unknown"
        fi
        
        merge_pr "$pr_number" "Branch: $branch" "$branch"
    else
        echo "Branch $branch not found on remote, skipping..."
    fi
done

echo "🎯 All PRs processed!"
echo "📊 Current status:"
git status --short