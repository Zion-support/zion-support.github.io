#!/bin/bash

<<<<<<< HEAD
# Script to merge open PRs systematically
echo "Starting systematic PR merge process..."

# Get list of open PRs
echo "Fetching open PRs..."
PR_LIST=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" | grep -o '"number":[0-9]*' | grep -o '[0-9]*' | head -20)

echo "Found PRs: $PR_LIST"

# Counter for tracking
count=0
success_count=0
error_count=0

for pr_number in $PR_LIST; do
    echo "Processing PR #$pr_number..."
    
    # Get PR details
    PR_DETAILS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number")
    BRANCH_NAME=$(echo "$PR_DETAILS" | grep -o '"head":{[^}]*"ref":"[^"]*"' | grep -o '"ref":"[^"]*"' | cut -d'"' -f4)
    
    echo "Branch: $BRANCH_NAME"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/remotes/origin/$BRANCH_NAME; then
        echo "Branch $BRANCH_NAME exists, attempting merge..."
        
        # Fetch the latest changes
        git fetch origin $BRANCH_NAME
        
        # Try to merge
        if git merge origin/$BRANCH_NAME --no-edit; then
            echo "✅ Successfully merged PR #$pr_number"
            success_count=$((success_count + 1))
            
            # Push the changes
            if git push origin main; then
                echo "✅ Successfully pushed merged changes"
            else
                echo "❌ Failed to push merged changes"
                error_count=$((error_count + 1))
            fi
        else
            echo "❌ Merge conflict in PR #$pr_number, resolving..."
            
            # Check for conflicts
            if git status | grep -q "both modified"; then
                echo "Resolving conflicts by accepting our changes..."
                git checkout --ours .
                git add .
                git commit -m "Resolve merge conflicts for PR #$pr_number"
                
                if git push origin main; then
                    echo "✅ Resolved conflicts and pushed for PR #$pr_number"
                    success_count=$((success_count + 1))
                else
                    echo "❌ Failed to push resolved conflicts for PR #$pr_number"
                    error_count=$((error_count + 1))
                fi
            else
                echo "❌ Failed to merge PR #$pr_number"
                error_count=$((error_count + 1))
            fi
        fi
    else
        echo "⚠️ Branch $BRANCH_NAME not found locally, skipping PR #$pr_number"
        error_count=$((error_count + 1))
    fi
    
    count=$((count + 1))
    echo "Progress: $count PRs processed, $success_count successful, $error_count errors"
    echo "---"
    
    # Small delay to avoid rate limiting
    sleep 2
done

echo "Merge process completed!"
echo "Total PRs processed: $count"
echo "Successful merges: $success_count"
echo "Errors: $error_count"
=======
# Script to merge open pull requests and resolve conflicts
# This script will attempt to merge multiple branches and handle conflicts

set -e

echo "Starting merge process for open pull requests..."

# Get list of unmerged branches
UNMERGED_BRANCHES=$(git branch -r --no-merged HEAD | grep -v "HEAD" | head -50)

# Create a temporary branch for merging
MERGE_BRANCH="bulk-merge-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$MERGE_BRANCH"

SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_BRANCHES=()

echo "Created merge branch: $MERGE_BRANCH"
echo "Attempting to merge branches..."

for branch in $UNMERGED_BRANCHES; do
    echo "Processing branch: $branch"
    
    # Try to merge the branch
    if git merge "$branch" --no-edit; then
        echo "✓ Successfully merged $branch"
        ((SUCCESSFUL_MERGES++))
    else
        echo "✗ Failed to merge $branch - conflicts detected"
        ((FAILED_MERGES++))
        CONFLICT_BRANCHES+=("$branch")
        
        # Abort the merge and continue with next branch
        git merge --abort
    fi
done

echo ""
echo "=== Merge Summary ==="
echo "Successful merges: $SUCCESSFUL_MERGES"
echo "Failed merges: $FAILED_MERGES"
echo "Total processed: $((SUCCESSFUL_MERGES + FAILED_MERGES))"

if [ ${#CONFLICT_BRANCHES[@]} -gt 0 ]; then
    echo ""
    echo "Branches with conflicts:"
    for branch in "${CONFLICT_BRANCHES[@]}"; do
        echo "  - $branch"
    done
fi

echo ""
echo "Current branch: $MERGE_BRANCH"
echo "To merge to main: git checkout main && git merge $MERGE_BRANCH"
echo "To continue resolving conflicts: git status"
>>>>>>> origin/auto/autonomy-17186719616
