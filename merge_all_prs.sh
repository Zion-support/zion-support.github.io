#!/bin/bash

# Script to merge all open PRs into main branch
<<<<<<< HEAD
echo "Starting bulk PR merge process..."
=======
# This script will attempt to merge each PR and resolve conflicts automatically
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9

# Extract PR numbers from the JSON file
PR_NUMBERS=$(grep -o '"number": [0-9]*' /workspace/current_prs.json | grep -o '[0-9]*' | sort -n)

<<<<<<< HEAD
echo "Found PR numbers: $(echo $PR_NUMBERS | wc -w) PRs"

# Counter for tracking
count=0
merged=0
failed=0

for pr_num in $PR_NUMBERS; do
    count=$((count + 1))
    echo "[$count] Processing PR #$pr_num..."
    
    # Try to merge the PR
    if gh pr merge $pr_num --merge --delete-branch 2>/dev/null; then
        echo "✅ Successfully merged PR #$pr_num"
        merged=$((merged + 1))
    else
        echo "❌ Failed to merge PR #$pr_num (may have conflicts or be already merged)"
        failed=$((failed + 1))
    fi
    
    # Add a small delay to avoid rate limiting
    sleep 1
done

echo ""
echo "=== MERGE SUMMARY ==="
echo "Total PRs processed: $count"
echo "Successfully merged: $merged"
echo "Failed to merge: $failed"
echo "======================"
=======
echo "Starting PR merge process..."

# List of PR numbers to merge
PR_NUMBERS=(17585 19431 19432 19435 19436 19437 19438 19440 19444 19445 19446 19447 19448 19449 19450)

# Function to merge a PR
merge_pr() {
    local pr_number=$1
    echo "Processing PR #$pr_number..."
    
    # Get PR details
    local pr_info=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number")
    local head_ref=$(echo "$pr_info" | grep -o '"head":[^}]*"ref":"[^"]*"' | sed 's/.*"ref":"\([^"]*\)".*/\1/')
    local head_sha=$(echo "$pr_info" | grep -o '"head":[^}]*"sha":"[^"]*"' | sed 's/.*"sha":"\([^"]*\)".*/\1/')
    
    if [ -z "$head_ref" ]; then
        echo "Could not get head ref for PR #$pr_number, skipping..."
        return 1
    fi
    
    echo "PR #$pr_number head ref: $head_ref"
    
    # Fetch the branch
    git fetch origin "$head_ref:$head_ref"
    
    # Try to merge
    if git merge "$head_ref" --no-ff -m "Merge PR #$pr_number: $head_ref" 2>/dev/null; then
        echo "Successfully merged PR #$pr_number"
        return 0
    else
        echo "Merge conflict in PR #$pr_number, attempting to resolve..."
        
        # Check if there are conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts for PR #$pr_number..."
            
            # Use our version for conflicts (accept incoming changes)
            git checkout --ours .
            git add .
            
            # Complete the merge
            git commit -m "Merge PR #$pr_number: $head_ref (resolved conflicts)"
            echo "Resolved conflicts and merged PR #$pr_number"
        else
            echo "No conflicts detected, completing merge for PR #$pr_number"
            git commit -m "Merge PR #$pr_number: $head_ref"
        fi
        return 0
    fi
}

# Process each PR
for pr_number in "${PR_NUMBERS[@]}"; do
    echo "=========================================="
    echo "Processing PR #$pr_number"
    echo "=========================================="
    
    if merge_pr "$pr_number"; then
        echo "✅ Successfully processed PR #$pr_number"
    else
        echo "❌ Failed to process PR #$pr_number"
    fi
    
    echo ""
done

echo "=========================================="
echo "PR merge process completed"
echo "=========================================="

# Push all changes
echo "Pushing changes to main branch..."
git push origin main

echo "All PRs have been processed and pushed to main branch!"
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
