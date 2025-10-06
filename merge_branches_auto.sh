#!/bin/bash

# Script to merge all unmerged cursor branches into main with automatic conflict resolution
set -e

echo "Starting automated merge process for unmerged cursor branches..."

# Read the unmerged branches file
branches_file="unmerged_branches.txt"
if [ ! -f "$branches_file" ]; then
    echo "Error: $branches_file not found"
    exit 1
fi

# Counter for tracking progress
total_branches=$(wc -l < "$branches_file")
current=0
successful_merges=0
failed_merges=0

echo "Total branches to merge: $total_branches"

# Process each branch
while IFS= read -r branch; do
    current=$((current + 1))
    echo "[$current/$total_branches] Processing: $branch"
    
    # Extract branch name without origin/
    branch_name=$(echo "$branch" | sed 's/origin\///')
    
    # Try to merge the branch
    if git merge "$branch" --no-edit > /dev/null 2>&1; then
        echo "  ✅ Successfully merged $branch_name"
        successful_merges=$((successful_merges + 1))
    else
        echo "  ⚠️  Merge conflict in $branch_name, attempting auto-resolution..."
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "  🔧 Resolving conflicts automatically..."
            
            # Auto-resolve conflicts by choosing the main branch version (ours)
            git checkout --ours . > /dev/null 2>&1 || true
            git add . > /dev/null 2>&1 || true
            
            # Try to commit the resolution
            if git commit --no-edit > /dev/null 2>&1; then
                echo "  ✅ Auto-resolved conflicts for $branch_name"
                successful_merges=$((successful_merges + 1))
            else
                echo "  ❌ Failed to auto-resolve conflicts for $branch_name"
                git merge --abort > /dev/null 2>&1 || true
                failed_merges=$((failed_merges + 1))
            fi
        else
            echo "  ❌ Failed to merge $branch_name (no conflicts detected)"
            git merge --abort > /dev/null 2>&1 || true
            failed_merges=$((failed_merges + 1))
        fi
    fi
done < "$branches_file"

echo ""
echo "Merge process completed!"
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"
echo "Total processed: $total_branches"

if [ $successful_merges -gt 0 ]; then
    echo "Pushing merged changes to main..."
    git push origin main
    echo "✅ Changes pushed to main successfully!"
fi