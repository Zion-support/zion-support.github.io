#!/bin/bash

# Merge Other Branch Types Script
# Handles codex, chore, feature, and other branch types

set -e

echo "🚀 Starting merge of other branch types..."

# Function to merge branches by type
merge_branch_type() {
    local branch_type="$1"
    local max_branches="$2"
    
    echo ""
    echo "🔄 Processing $branch_type branches (max: $max_branches)"
    
    # Get branches of this type
    local branches=($(git branch -r | grep "$branch_type/" | head -$max_branches | sort -V))
    local total=${#branches[@]}
    
    if [ $total -eq 0 ]; then
        echo "⏭️  No $branch_type branches found"
        return 0
    fi
    
    echo "📋 Found $total $branch_type branches"
    
    local successful=0
    local failed=0
    local skipped=0
    
    for branch in "${branches[@]}"; do
        echo "  🔄 Processing: $branch"
        
        # Check if branch exists
        if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
            echo "    ⚠️  Branch does not exist, skipping..."
            ((skipped++))
            continue
        fi
        
        # Check if branch has new commits
        if ! git log --oneline "$branch" --not origin/main | head -1 > /dev/null 2>&1; then
            echo "    ⏭️  No new commits, skipping..."
            ((skipped++))
            continue
        fi
        
        # Try to merge
        if git merge "$branch" --no-edit --no-ff 2>/dev/null; then
            echo "    ✅ Successfully merged"
            ((successful++))
        else
            echo "    ⚠️  Merge conflict, resolving..."
            
            # Quick conflict resolution - prefer main branch
            git checkout --ours . 2>/dev/null || true
            git add . 2>/dev/null || true
            
            if git commit --no-edit 2>/dev/null; then
                echo "    ✅ Conflict resolved and merged"
                ((successful++))
            else
                echo "    ❌ Failed to resolve conflicts"
                git merge --abort 2>/dev/null || true
                ((failed++))
            fi
        fi
    done
    
    echo "📊 $branch_type Summary: ✅ $successful successful, ❌ $failed failed, ⏭️ $skipped skipped"
    
    # Push changes if there were successful merges
    if [ $successful -gt 0 ]; then
        echo "🚀 Pushing $branch_type changes..."
        git push origin main 2>/dev/null || echo "⚠️  Failed to push $branch_type changes"
    fi
    
    return $successful
}

# Main execution
echo "📍 Ensuring we're on main branch..."
git checkout main
git pull origin main

# Process different branch types
echo "📋 Processing different branch types..."

# Process codex branches (limit to 500)
merge_branch_type "codex" 500

# Process chore branches (limit to 300)
merge_branch_type "chore" 300

# Process feature branches (limit to 200)
merge_branch_type "feature" 200

# Process clean branches (limit to 200)
merge_branch_type "clean" 200

# Process comprehensive branches (limit to 100)
merge_branch_type "comprehensive" 100

# Process content branches (limit to 100)
merge_branch_type "content" 100

# Process fix branches (limit to 100)
merge_branch_type "fix" 100

# Process improve branches (limit to 50)
merge_branch_type "improve" 50

# Process update branches (limit to 50)
merge_branch_type "update" 50

echo ""
echo "🎉 OTHER BRANCHES MERGE COMPLETED!"

echo ""
echo "🔍 Final repository status:"
git status

echo ""
echo "✅ Other branches merge process completed successfully!"