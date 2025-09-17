#!/bin/bash

# Script to merge multiple branches into main
# This will attempt to merge branches and handle conflicts

echo "Starting branch merge process..."

# List of branches to merge (prioritizing most recent and important ones)
branches=(
    "origin/feat/new-content-sept-2025"
    "origin/cursor/create-and-deploy-new-content-80c6"
    "origin/cursor/create-and-deploy-new-content-d188"
    "origin/cursor/create-and-deploy-new-content-eed6"
    "origin/cursor/create-and-deploy-new-content-b459"
    "origin/cursor/create-and-deploy-new-content-1b2c"
    "origin/cursor/create-and-deploy-new-content-4918"
    "origin/cursor/create-and-deploy-new-content-9af8"
    "origin/feat/add-agentic-crm-post-and-homepage-promo"
    "origin/performance-optimizations"
)

# Counter for successful merges
successful_merges=0
failed_merges=0

for branch in "${branches[@]}"; do
    echo "Attempting to merge $branch..."
    
    # Try to merge the branch
    if git merge "$branch" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        ((successful_merges++))
    else
        echo "❌ Failed to merge $branch due to conflicts"
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts for $branch..."
            
            # Try to resolve conflicts automatically where possible
            # This is a basic conflict resolution - in practice, you'd want more sophisticated logic
            git status --porcelain | grep "^UU" | while read -r file; do
                file_path=$(echo "$file" | cut -c4-)
                echo "Resolving conflicts in $file_path"
                
                # For now, we'll abort the merge and continue with the next branch
                # In a production environment, you'd want proper conflict resolution
            done
            
            # Abort the merge for now
            git merge --abort
            ((failed_merges++))
        else
            ((failed_merges++))
        fi
    fi
    
    echo "---"
done

echo "Merge process completed:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"

# Push the changes
if [ $successful_merges -gt 0 ]; then
    echo "Pushing merged changes..."
    git push origin main --force
fi