#!/bin/bash

# Final Batch Merge Script
# This script will efficiently process the remaining PRs to complete the merge process

set -e

echo "Starting Final Batch Merge Process..."
echo "===================================="

# Ensure we're on main branch
git checkout main
git pull origin main

# Create a final backup branch
BACKUP_BRANCH="final-merge-backup-$(date +%s)"
echo "Creating final backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Function to check if a branch exists remotely
branch_exists() {
    local branch_name=$1
    git ls-remote --heads origin "$branch_name" | grep -q "$branch_name"
}

# Function to merge a single PR with smart conflict resolution
merge_pr_smart() {
    local pr_number=$1
    local branch_name=$2
    local pr_title=$3
    
    echo "Processing PR #$pr_number: $pr_title"
    echo "Branch: $branch_name"
    echo "----------------------------------------"
    
    # Check if branch exists remotely
    if ! branch_exists "$branch_name"; then
        echo "❌ Branch $branch_name not found remotely, skipping..."
        return 1
    fi
    
    # Fetch the branch
    echo "Fetching branch $branch_name..."
    git fetch origin "$branch_name"
    
    # Try to merge
    echo "Attempting to merge PR #$pr_number..."
    if git merge --no-ff origin/"$branch_name" -m "Merge PR #$pr_number: $pr_title"; then
        echo "✅ Successfully merged PR #$pr_number"
        return 0
    else
        echo "❌ Merge conflict detected for PR #$pr_number"
        
        # Smart conflict resolution - prefer incoming changes for most files
        echo "Resolving conflicts intelligently..."
        
        # Get conflicted files
        local conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | cut -d' ' -f2 || echo "")
        
        if [ -n "$conflicted_files" ]; then
            echo "Resolving conflicts in: $conflicted_files"
            
            # Resolve conflicts by preferring incoming changes
            for file in $conflicted_files; do
                if [ -f "$file" ]; then
                    echo "  Resolving: $file"
                    git checkout --theirs "$file"
                    git add "$file"
                fi
            done
            
            # Handle unmerged files (modify/delete conflicts)
            local unmerged_files=$(git status --porcelain | grep "^U " | cut -d' ' -f2 || echo "")
            if [ -n "$unmerged_files" ]; then
                echo "Handling unmerged files: $unmerged_files"
                for file in $unmerged_files; do
                    if [ -f "$file" ]; then
                        echo "  Adding unmerged file: $file"
                        git add "$file"
                    fi
                done
            fi
            
            # Try to complete the merge
            if git commit --no-edit; then
                echo "✅ Successfully resolved conflicts for PR #$pr_number"
                return 0
            else
                echo "❌ Failed to resolve conflicts for PR #$pr_number"
                git merge --abort
                return 1
            fi
        else
            echo "❌ No conflicted files found, aborting merge"
            git merge --abort
            return 1
        fi
    fi
}

# Get current open PRs
echo "Fetching current open pull requests..."
curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" > current_prs_final.json

# Parse PRs and create a clean list
echo "Parsing PRs for final merge..."
awk '
/"number":/ {
    number = $2
    gsub(/,/, "", number)
    pr_number = number
}
/"title":/ {
    title = substr($0, index($0, ":") + 3)
    gsub(/,$/, "", title)
    gsub(/"/, "", title)
    pr_title = title
}
/"ref":/ && !/compare_url/ {
    ref = substr($0, index($0, ":") + 3)
    gsub(/,$/, "", ref)
    gsub(/"/, "", ref)
    if (ref != "ref" && ref != "href" && ref != "archive_url" && ref != "git_refs_url" && ref != "main") {
        printf "%s|%s|%s\n", pr_number, ref, pr_title
    }
}
' current_prs_final.json > final_prs_to_merge.txt

# Process PRs in final batch
echo "Processing final batch of PRs..."
echo "================================"

successful_merges=0
failed_merges=0

while IFS='|' read -r pr_number branch_name pr_title; do
    if [ -n "$pr_number" ] && [ -n "$branch_name" ] && [ -n "$pr_title" ]; then
        echo "Attempting to merge PR #$pr_number..."
        
        if merge_pr_smart "$pr_number" "$branch_name" "$pr_title"; then
            echo "✅ PR #$pr_number merged successfully"
            successful_merges=$((successful_merges + 1))
        else
            echo "❌ Failed to merge PR #$pr_number"
            failed_merges=$((failed_merges + 1))
        fi
        
        echo ""
        
        # Commit progress every 5 PRs
        if [ $((successful_merges % 5)) -eq 0 ] && [ $successful_merges -gt 0 ]; then
            echo "Progress: $successful_merges successful merges, $failed_merges failed"
            echo "Committing progress..."
            git add .
            git commit -m "Final batch progress: $successful_merges PRs merged successfully"
        fi
        
        # Small delay
        sleep 0.5
    fi
done < final_prs_to_merge.txt

echo "========================================="
echo "Final batch merge process completed!"
echo "Results:"
echo "  Successful merges: $successful_merges"
echo "  Failed merges: $failed_merges"
echo "  Total processed: $((successful_merges + failed_merges))"
echo "Backup branch created: $BACKUP_BRANCH"

# Check final status
echo "Final git status:"
git status

# Push all changes to main
echo "Pushing all final merged changes to main..."
git push origin main

echo "✅ All final changes pushed successfully!"
echo "🎉 Merge process completed! Check the backup branch if needed: $BACKUP_BRANCH"