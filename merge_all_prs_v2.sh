#!/bin/bash

# Script to merge all open PRs into main branch - Version 2
set -e

echo "Starting automated PR merge process..."

# Get PR numbers and their corresponding branch names
echo "Fetching PR details..."

# Create a mapping file of PR numbers to branch names
rm -f /tmp/pr_branch_mapping.txt

for pr_number in $(cat /tmp/pr_numbers.txt); do
    echo "Fetching details for PR #$pr_number..."
    branch_ref=$(curl -s -H "Accept: application/vnd.github.v3+json" "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number" | grep -o '"ref": "[^"]*"' | head -1 | sed 's/"ref": "//' | sed 's/"//')
    if [ ! -z "$branch_ref" ]; then
        echo "$pr_number:$branch_ref" >> /tmp/pr_branch_mapping.txt
        echo "  PR #$pr_number -> $branch_ref"
    else
        echo "  Failed to get branch for PR #$pr_number"
    fi
done

echo ""
echo "Found branch mappings:"
cat /tmp/pr_branch_mapping.txt
echo ""

# Ensure we're on main branch
git checkout main
git pull origin main

# Function to resolve yarn cache conflicts by removing cache and regenerating
resolve_yarn_conflicts() {
    echo "Resolving yarn cache conflicts..."
    
    # Remove yarn cache directories that are causing conflicts
    rm -rf .yarn/cache/ .yarn-cache/
    
    # Remove package-lock.json if it exists
    rm -f package-lock.json
    
    # Keep yarn.lock if it exists (it should be in the PR)
    if [ -f yarn.lock ]; then
        echo "Keeping yarn.lock from PR"
    fi
    
    # Remove install state
    rm -f .yarn/install-state.gz
}

# Function to merge a single PR
merge_pr() {
    local pr_number=$1
    local branch_name=$2
    
    echo "Processing PR #$pr_number (branch: $branch_name)"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/remotes/origin/$branch_name; then
        echo "Branch $branch_name exists, attempting merge..."
        
        # Try to merge the branch
        if git merge origin/$branch_name --no-edit; then
            echo "✅ Successfully merged PR #$pr_number"
            return 0
        else
            echo "⚠️  Merge conflict in PR #$pr_number, attempting to resolve..."
            
            # Check if conflicts are mainly in yarn cache
            if git status --porcelain | grep -q "yarn/cache\|yarn-cache"; then
                echo "Detected yarn cache conflicts, resolving..."
                resolve_yarn_conflicts
                
                # Add resolved files
                git add .
                
                # Complete the merge
                if git commit --no-edit; then
                    echo "✅ Successfully resolved conflicts and merged PR #$pr_number"
                    return 0
                else
                    echo "❌ Failed to resolve conflicts for PR #$pr_number"
                    git merge --abort
                    return 1
                fi
            else
                echo "❌ Non-yarn conflicts in PR #$pr_number, skipping for now"
                git merge --abort
                return 1
            fi
        fi
    else
        echo "⚠️  Branch $branch_name not found, skipping PR #$pr_number"
        return 1
    fi
}

# Process each PR
successful_merges=0
failed_merges=0
total_prs=$(cat /tmp/pr_branch_mapping.txt | wc -l)
count=0

while IFS=':' read -r pr_number branch_name; do
    count=$((count + 1))
    echo ""
    echo "Progress: $count/$total_prs - Processing PR #$pr_number"
    
    if merge_pr $pr_number $branch_name; then
        successful_merges=$((successful_merges + 1))
    else
        failed_merges=$((failed_merges + 1))
    fi
    
    # Push changes every 5 successful merges
    if [ $((successful_merges % 5)) -eq 0 ] && [ $successful_merges -gt 0 ]; then
        echo "Pushing changes to remote..."
        git push origin main
    fi
done < /tmp/pr_branch_mapping.txt

# Final push
echo "Pushing final changes to remote..."
git push origin main

echo ""
echo "=== MERGE SUMMARY ==="
echo "Total PRs processed: $total_prs"
echo "Successful merges: $successful_merges"
echo "Failed merges: $failed_merges"
if [ $total_prs -gt 0 ]; then
    echo "Success rate: $(( successful_merges * 100 / total_prs ))%"
fi

if [ $successful_merges -gt 0 ]; then
    echo "✅ Successfully merged $successful_merges PRs into main branch"
else
    echo "❌ No PRs were successfully merged"
fi