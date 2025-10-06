#!/bin/bash

echo "Starting to process all open PRs..."

# Get list of open PRs
echo "Fetching open PRs..."
pr_data=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=50")

# Extract PR numbers and branch names
pr_numbers=($(echo "$pr_data" | grep '"number"' | sed 's/.*"number": \([0-9]*\).*/\1/'))
branch_names=($(echo "$pr_data" | grep -A 3 '"head"' | grep '"ref"' | sed 's/.*"ref": "\([^"]*\)".*/\1/'))

echo "Found ${#pr_numbers[@]} open PRs"

# Process each PR
for i in "${!pr_numbers[@]}"; do
    pr_number="${pr_numbers[$i]}"
    branch_name="${branch_names[$i]}"
    
    echo "Processing PR #$pr_number (branch: $branch_name)"
    
    # Fetch the branch
    git fetch origin "$branch_name" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        # Checkout the branch
        git checkout "$branch_name" 2>/dev/null
        
        if [ $? -eq 0 ]; then
            # Try to merge with main
            git merge main 2>/dev/null
            
            if [ $? -eq 0 ]; then
                echo "  ✓ Successfully merged $branch_name"
                # Switch back to main and merge
                git checkout main
                git merge "$branch_name" 2>/dev/null
                
                if [ $? -eq 0 ]; then
                    echo "  ✓ Successfully merged to main"
                else
                    echo "  ✗ Failed to merge to main"
                fi
            else
                echo "  ⚠ Merge conflicts in $branch_name - resolving..."
                # Resolve conflicts
                ./resolve_conflicts.sh 2>/dev/null
                git add . 2>/dev/null
                git commit -m "Resolve merge conflicts for $branch_name" 2>/dev/null
                
                if [ $? -eq 0 ]; then
                    echo "  ✓ Conflicts resolved for $branch_name"
                    # Switch back to main and merge
                    git checkout main
                    git merge "$branch_name" 2>/dev/null
                    
                    if [ $? -eq 0 ]; then
                        echo "  ✓ Successfully merged to main after conflict resolution"
                    else
                        echo "  ✗ Failed to merge to main after conflict resolution"
                    fi
                else
                    echo "  ✗ Failed to resolve conflicts for $branch_name"
                fi
            fi
        else
            echo "  ✗ Failed to checkout $branch_name"
        fi
    else
        echo "  ✗ Failed to fetch $branch_name"
    fi
    
    echo "---"
done

echo "Processing complete!"