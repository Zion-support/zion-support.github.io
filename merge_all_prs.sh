#!/bin/bash

# Script to merge all open PRs systematically
echo "Starting comprehensive PR merge process..."

# Function to merge a single branch
merge_branch() {
    local branch=$1
    echo "Processing branch: $branch"
    
    # Fetch the branch
    git fetch origin "$branch"
    
    # Try to merge with strategy to accept incoming changes
    if git merge "origin/$branch" -X theirs --no-edit; then
        echo "Successfully merged $branch"
        return 0
    else
        echo "Merge conflicts detected for $branch, resolving..."
        
        # Resolve modify/delete conflicts by accepting incoming changes
        git status --porcelain | grep "^DU\|^UD" | cut -c4- | xargs -I {} git add {} 2>/dev/null || true
        
        # Add all files
        git add .
        
        # Commit the merge
        if git commit -m "Merge $branch - resolved conflicts by accepting incoming changes"; then
            echo "Conflicts resolved and committed for $branch"
            return 0
        else
            echo "Failed to commit merge for $branch"
            return 1
        fi
    fi
}

# Get list of unmerged branches
echo "Getting list of unmerged branches..."
unmerged_branches=$(git branch -r --no-merged main | grep "cursor/fix-errors-and-merge-to-main" | head -20)

if [ -z "$unmerged_branches" ]; then
    echo "No unmerged branches found"
    exit 0
fi

echo "Found unmerged branches:"
echo "$unmerged_branches"

# Process each branch
success_count=0
total_count=0

for branch in $unmerged_branches; do
    branch_name=$(echo $branch | sed 's/origin\///')
    total_count=$((total_count + 1))
    
    echo "Processing branch $total_count: $branch_name"
    
    if merge_branch "$branch_name"; then
        success_count=$((success_count + 1))
        echo "✅ Successfully merged $branch_name"
    else
        echo "❌ Failed to merge $branch_name"
        # Abort the merge and continue with next branch
        git merge --abort 2>/dev/null || true
    fi
    
    echo "---"
done

echo "Merge process completed: $success_count/$total_count branches merged successfully"

# Push all changes
echo "Pushing changes to origin..."
git push origin main

echo "All done!"