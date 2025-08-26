#!/bin/bash

# Comprehensive Merge Resolution Script
# This script will resolve all merge conflicts and merge all remaining open PRs

set -e

echo "Starting Comprehensive Merge Resolution Process..."
echo "================================================"

# Create a comprehensive backup branch
BACKUP_BRANCH="comprehensive-merge-backup-$(date +%s)"
echo "Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Function to check if a branch exists remotely
branch_exists() {
    local branch_name=$1
    git ls-remote --heads origin "$branch_name" | grep -q "$branch_name"
}

# Function to resolve conflicts intelligently
resolve_conflicts() {
    local pr_number=$1
    local branch_name=$2
    
    echo "Resolving conflicts for PR #$pr_number..."
    
    # Get list of conflicted files
    local conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | cut -d' ' -f2 || echo "")
    
    if [ -z "$conflicted_files" ]; then
        echo "No conflicts found, completing merge..."
        return 0
    fi
    
    echo "Found conflicted files:"
    echo "$conflicted_files"
    
    # Strategy: For most conflicts, prefer the incoming changes (PR changes)
    # This is usually the safest approach for PR merges
    
    # Handle different conflict types
    for file in $conflicted_files; do
        if [ -f "$file" ]; then
            echo "Resolving conflicts in: $file"
            
            # For TypeScript/React files, prefer incoming changes
            if [[ "$file" == *.tsx ]] || [[ "$file" == *.ts ]]; then
                echo "  Using incoming changes for TypeScript file"
                git checkout --theirs "$file"
                git add "$file"
            # For package files, prefer incoming changes
            elif [[ "$file" == package*.json ]] || [[ "$file" == *lock ]]; then
                echo "  Using incoming changes for package file"
                git checkout --theirs "$file"
                git add "$file"
            # For configuration files, prefer incoming changes
            elif [[ "$file" == *.config.* ]] || [[ "$file" == tsconfig.json ]]; then
                echo "  Using incoming changes for config file"
                git checkout --theirs "$file"
                git add "$file"
            # For other files, prefer incoming changes
            else
                echo "  Using incoming changes for other file"
                git checkout --theirs "$file"
                git add "$file"
            fi
        fi
    done
    
    # Try to complete the merge
    if git commit --no-edit; then
        echo "✅ Successfully resolved conflicts for PR #$pr_number"
        return 0
    else
        echo "❌ Failed to resolve conflicts for PR #$pr_number"
        return 1
    fi
}

# Function to merge a single PR with comprehensive conflict resolution
merge_pr_comprehensive() {
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
        
        # Resolve conflicts
        if resolve_conflicts "$pr_number" "$branch_name"; then
            echo "✅ Successfully resolved conflicts for PR #$pr_number"
            return 0
        else
            echo "❌ Failed to resolve conflicts for PR #$pr_number, aborting merge"
            git merge --abort
            return 1
        fi
    fi
}

# Get all open PRs
echo "Fetching open pull requests..."
curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" > current_prs.json

# Extract PR information and merge them
echo "Starting comprehensive PR merge process..."
echo "========================================="

# Parse PRs and merge them
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
' current_prs.json > prs_to_merge.txt

# Process PRs systematically
echo "Processing PRs for merging..."
echo "============================="

successful_merges=0
failed_merges=0

while IFS='|' read -r pr_number branch_name pr_title; do
    if [ -n "$pr_number" ] && [ -n "$branch_name" ] && [ -n "$pr_title" ]; then
        echo "Attempting to merge PR #$pr_number..."
        
        if merge_pr_comprehensive "$pr_number" "$branch_name" "$pr_title"; then
            echo "✅ PR #$pr_number merged successfully"
            successful_merges=$((successful_merges + 1))
        else
            echo "❌ Failed to merge PR #$pr_number"
            failed_merges=$((failed_merges + 1))
        fi
        
        echo ""
        
        # Small delay to avoid overwhelming the system
        sleep 1
        
        # Commit progress every 10 PRs
        if [ $((successful_merges % 10)) -eq 0 ] && [ $successful_merges -gt 0 ]; then
            echo "Progress: $successful_merges successful merges, $failed_merges failed"
            echo "Committing progress..."
            git add .
            git commit -m "Progress commit: $successful_merges PRs merged successfully"
        fi
    fi
done < prs_to_merge.txt

echo "========================================="
echo "Comprehensive merge process completed!"
echo "Results:"
echo "  Successful merges: $successful_merges"
echo "  Failed merges: $failed_merges"
echo "  Total processed: $((successful_merges + failed_merges))"
echo "Backup branch created: $BACKUP_BRANCH"

# Check final status
echo "Final git status:"
git status

# Push all changes to main
echo "Pushing all merged changes to main..."
git push origin main

echo "✅ All changes pushed successfully!"
echo "All done! Check the backup branch if you need to revert: $BACKUP_BRANCH"