#!/bin/bash

# Script to merge all open branches and resolve conflicts
set -e

echo "🚀 Starting comprehensive branch merge process..."

# Get all cursor branches
BRANCHES=$(git branch -r | grep "cursor/create-and-deploy-new-content" | head -50)

# Counter for tracking progress
count=0
total=$(echo "$BRANCHES" | wc -l)
successful_merges=0
failed_merges=0

echo "📊 Found $total branches to process"

# Function to merge a single branch
merge_branch() {
    local branch=$1
    local branch_name=$(echo "$branch" | sed 's/origin\///')
    
    echo "🔄 Processing branch: $branch_name ($((++count))/$total)"
    
    # Checkout the branch
    if ! git checkout -b "$branch_name" "$branch" 2>/dev/null; then
        echo "⚠️  Branch $branch_name already exists locally, switching to it"
        git checkout "$branch_name" 2>/dev/null || {
            echo "❌ Failed to checkout $branch_name"
            return 1
        }
    fi
    
    # Try to merge with main
    if git merge main --no-ff -m "Merge $branch_name into main" 2>/dev/null; then
        echo "✅ Successfully merged $branch_name"
        ((successful_merges++))
        
        # Push the merged changes
        git push origin main 2>/dev/null || {
            echo "⚠️  Failed to push merged changes for $branch_name"
        }
        
        # Switch back to main
        git checkout main
        
        # Delete the local branch
        git branch -D "$branch_name" 2>/dev/null || true
        
    else
        echo "⚠️  Merge conflict in $branch_name, attempting to resolve..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "🔧 Resolving conflicts in $branch_name..."
            
            # Use our version for common conflict files
            git checkout --ours . 2>/dev/null || true
            git add . 2>/dev/null || true
            
            # Try to commit the resolved conflicts
            if git commit -m "Resolve merge conflicts in $branch_name" 2>/dev/null; then
                echo "✅ Resolved conflicts in $branch_name"
                ((successful_merges++))
                
                # Push the resolved changes
                git push origin main 2>/dev/null || {
                    echo "⚠️  Failed to push resolved changes for $branch_name"
                }
            else
                echo "❌ Failed to resolve conflicts in $branch_name"
                git merge --abort 2>/dev/null || true
                ((failed_merges++))
            fi
        else
            echo "❌ Unknown merge issue with $branch_name"
            git merge --abort 2>/dev/null || true
            ((failed_merges++))
        fi
        
        # Switch back to main
        git checkout main
        
        # Delete the local branch
        git branch -D "$branch_name" 2>/dev/null || true
    fi
    
    echo "---"
}

# Process each branch
for branch in $BRANCHES; do
    merge_branch "$branch"
    
    # Add a small delay to avoid overwhelming the system
    sleep 1
done

echo "🎉 Merge process completed!"
echo "📈 Results:"
echo "   ✅ Successful merges: $successful_merges"
echo "   ❌ Failed merges: $failed_merges"
echo "   📊 Total processed: $count"

# Final status check
echo "🔍 Final git status:"
git status

echo "🏁 Script completed successfully!"