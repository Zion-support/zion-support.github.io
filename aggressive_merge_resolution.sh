#!/bin/bash

# Aggressive Merge Conflict Resolution Script
# This script will aggressively resolve conflicts and merge all PRs

set -e

echo "🚀 Starting aggressive merge conflict resolution..."

# Function to resolve conflicts by keeping our version
resolve_conflicts_aggressive() {
    echo "⚡ Aggressively resolving conflicts by keeping our changes..."
    
    # For each conflicted file, keep our version (HEAD)
    git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | while read file; do
        if [ -f "$file" ]; then
            echo "🔧 Resolving conflicts in: $file"
            # Use our version (HEAD)
            git checkout --ours "$file" 2>/dev/null || true
            # Remove any remaining conflict markers
            sed -i '/^<<<<<<< HEAD$/d; /^=======$/d; /^>>>>>>> .*/d' "$file" 2>/dev/null || true
        fi
    done
    
    # Add all resolved files
    git add . || true
}

# Function to merge branch aggressively
merge_branch_aggressive() {
    local branch_name="$1"
    echo "⚡ Aggressively merging: $branch_name"
    
    git checkout main
    
    # Try merge with our strategy
    if git merge "origin/$branch_name" -X ours --no-ff -m "Aggressive merge: $branch_name"; then
        echo "✅ Successfully merged $branch_name"
        return 0
    else
        echo "🔧 Resolving conflicts for $branch_name..."
        resolve_conflicts_aggressive
        if git commit -m "Resolve conflicts for $branch_name - keeping our changes"; then
            echo "✅ Resolved conflicts for $branch_name"
            return 0
        else
            echo "❌ Failed to resolve conflicts for $branch_name"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Main aggressive merge process
main() {
    echo "📍 Current branch: $(git branch --show-current)"
    echo "📍 Current status:"
    git status --short
    
    # Get the most recent branches that need merging
    echo "🔍 Finding branches to merge..."
    
    # List of priority branches to merge
    priority_branches=(
        "cursor/create-and-deploy-new-content-16c0"
        "cursor/create-and-deploy-new-content-1022"
        "cursor/create-and-deploy-new-content-e242"
        "cursor/merge-new-content-1757989975"
        "cursor/create-and-deploy-new-content-8f53"
    )
    
    successful_merges=0
    failed_merges=0
    
    for branch in "${priority_branches[@]}"; do
        # Check if branch exists
        if git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
            echo ""
            echo "🔄 Processing priority branch: $branch"
            
            if merge_branch_aggressive "$branch"; then
                ((successful_merges++))
                echo "✅ Successfully merged $branch"
            else
                ((failed_merges++))
                echo "❌ Failed to merge $branch"
            fi
            
            sleep 1
        else
            echo "⚠️  Branch $branch not found, skipping..."
        fi
    done
    
    # Also try to merge any other recent content branches
    echo ""
    echo "🔍 Looking for other recent content branches..."
    
    other_branches=$(git branch -r --sort=-committerdate | grep "cursor/create-and-deploy-new-content" | head -5)
    
    while IFS= read -r branch; do
        branch_name="${branch#origin/}"
        
        # Skip if already processed
        if [[ " ${priority_branches[@]} " =~ " ${branch_name} " ]]; then
            continue
        fi
        
        echo ""
        echo "🔄 Processing additional branch: $branch_name"
        
        if merge_branch_aggressive "$branch_name"; then
            ((successful_merges++))
            echo "✅ Successfully merged $branch_name"
        else
            ((failed_merges++))
            echo "❌ Failed to merge $branch_name"
        fi
        
        sleep 1
    done <<< "$other_branches"
    
    echo ""
    echo "📊 Aggressive Merge Summary:"
    echo "✅ Successful merges: $successful_merges"
    echo "❌ Failed merges: $failed_merges"
    
    # Force push to update remote
    echo ""
    echo "📤 Force pushing changes to remote..."
    git push origin main --force
    
    echo ""
    echo "🎉 Aggressive merge resolution completed!"
    echo "📈 Main branch updated with all possible changes"
}

# Run the aggressive merge process
main "$@"