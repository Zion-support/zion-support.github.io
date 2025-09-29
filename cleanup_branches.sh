#!/bin/bash

# Script to clean up old cursor branches
echo "Starting branch cleanup..."

# Get list of merged cursor branches
git branch -r --merged main | grep cursor > /tmp/merged_cursor_branches.txt

echo "Found $(wc -l < /tmp/merged_cursor_branches.txt) merged cursor branches"

# Process branches in batches of 50 to avoid overwhelming the server
batch_size=50
batch_num=1

while IFS= read -r branch; do
    # Extract branch name (remove origin/ prefix)
    branch_name=$(echo "$branch" | sed 's/origin\///')
    
    # Skip if branch name is empty or main
    if [ -z "$branch_name" ] || [ "$branch_name" = "main" ]; then
        continue
    fi
    
    echo "Deleting branch: $branch_name"
    
    # Delete the branch
    if git push origin --delete "$branch_name" 2>/dev/null; then
        echo "✓ Successfully deleted: $branch_name"
    else
        echo "✗ Failed to delete: $branch_name (may not exist)"
    fi
    
    # Process in batches
    if [ $((batch_num % batch_size)) -eq 0 ]; then
        echo "Completed batch $((batch_num / batch_size)). Waiting 2 seconds..."
        sleep 2
    fi
    
    batch_num=$((batch_num + 1))
    
done < /tmp/merged_cursor_branches.txt

echo "Branch cleanup completed!"
rm -f /tmp/merged_cursor_branches.txt