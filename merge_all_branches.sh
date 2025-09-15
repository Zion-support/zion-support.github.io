#!/bin/bash

<<<<<<< HEAD
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
=======
# Script to merge all unmerged branches into main
# This script will attempt to merge all unmerged branches and resolve conflicts automatically

set -e

echo "Starting automated branch merging process..."

# Get all unmerged branches
UNMERGED_BRANCHES=$(git branch -r --no-merged HEAD | grep -v codex | head -50)

# Counter for successful merges
SUCCESS_COUNT=0
FAILED_COUNT=0

for branch in $UNMERGED_BRANCHES; do
    echo "Attempting to merge: $branch"
    
    # Try to merge the branch
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged: $branch"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
    else
        echo "⚠️  Merge failed for: $branch, attempting conflict resolution..."
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU"; then
            echo "Resolving conflicts for: $branch"
            
            # Try to resolve conflicts by accepting the feature branch version
            # This is a simple strategy - in production you might want more sophisticated conflict resolution
            
            # Get all conflicted files
            CONFLICTED_FILES=$(git status --porcelain | grep "^UU" | awk '{print $2}')
            
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    echo "Resolving conflicts in: $file"
                    # Accept the feature branch version (--theirs)
                    git checkout --theirs "$file" 2>/dev/null || true
                fi
            done
            
            # Add all resolved files
            git add . 2>/dev/null || true
            
            # Try to commit the merge
            if git commit -m "Merge $branch: Resolved conflicts by accepting feature branch improvements" --no-edit; then
                echo "✅ Successfully resolved conflicts and merged: $branch"
                SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
            else
                echo "❌ Failed to commit merge for: $branch"
                # Abort the merge and continue
                git merge --abort 2>/dev/null || true
                FAILED_COUNT=$((FAILED_COUNT + 1))
            fi
        else
            echo "❌ Merge failed for: $branch (no conflicts detected)"
            git merge --abort 2>/dev/null || true
            FAILED_COUNT=$((FAILED_COUNT + 1))
        fi
    fi
    
    echo "---"
done

echo "Merge process completed!"
echo "Successfully merged: $SUCCESS_COUNT branches"
echo "Failed to merge: $FAILED_COUNT branches"
echo "Total processed: $((SUCCESS_COUNT + FAILED_COUNT)) branches"
>>>>>>> origin/auto/autonomy-17186719616
