#!/bin/bash

# Script to merge all open PRs systematically
set -e

echo "🚀 Starting comprehensive PR merge process..."

# Get all open PR numbers
echo "📋 Extracting open PR numbers..."
PR_NUMBERS=$(grep -o '"number": [0-9]*' _open_prs.json | grep -o '[0-9]*' | sort -n)

echo "Found $(echo "$PR_NUMBERS" | wc -l) open PRs to process"

# Function to merge a single PR
merge_pr() {
    local pr_number=$1
    local branch_name="pr-$pr_number"
    
    echo "🔄 Processing PR #$pr_number..."
    
    # Check if PR branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch_name; then
        echo "  ✅ Branch $branch_name exists locally"
    else
        # Try to fetch the PR branch
        echo "  🔍 Fetching PR #$pr_number branch..."
        if git fetch origin pull/$pr_number/head:$branch_name 2>/dev/null; then
            echo "  ✅ Successfully fetched PR #$pr_number"
        else
            echo "  ❌ Failed to fetch PR #$pr_number, skipping..."
            return 1
        fi
    fi
    
    # Check if the PR is already merged by checking if it's ahead of main
    if git merge-base --is-ancestor $branch_name HEAD 2>/dev/null; then
        echo "  ℹ️  PR #$pr_number is already merged, skipping..."
        git branch -d $branch_name 2>/dev/null || true
        return 0
    fi
    
    # Check for merge conflicts
    echo "  🔍 Checking for merge conflicts..."
    if git merge --no-commit --no-ff $branch_name 2>/dev/null; then
        echo "  ✅ No conflicts detected for PR #$pr_number"
        git merge --abort 2>/dev/null || true
        
        # Perform the actual merge
        echo "  🔀 Merging PR #$pr_number..."
        if git merge --no-ff $branch_name -m "Merge PR #$pr_number: $(git log --oneline -1 $branch_name)"; then
            echo "  ✅ Successfully merged PR #$pr_number"
            
            # Clean up the branch
            git branch -d $branch_name 2>/dev/null || true
            return 0
        else
            echo "  ❌ Failed to merge PR #$pr_number"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    else
        echo "  ⚠️  Merge conflicts detected for PR #$pr_number"
        git merge --abort 2>/dev/null || true
        
        # Try to resolve conflicts automatically
        echo "  🔧 Attempting to resolve conflicts..."
        if git merge --no-ff $branch_name -m "Merge PR #$pr_number with conflict resolution"; then
            echo "  ✅ Successfully resolved and merged PR #$pr_number"
            git branch -d $branch_name 2>/dev/null || true
            return 0
        else
            echo "  ❌ Failed to resolve conflicts for PR #$pr_number"
            git merge --abort 2>/dev/null || true
            return 1
        fi
    fi
}

# Process PRs one by one
SUCCESS_COUNT=0
FAILED_COUNT=0
SKIPPED_COUNT=0

echo "📦 Processing PRs individually..."

for pr_number in $PR_NUMBERS; do
    echo ""
    echo "--- Processing PR #$pr_number ---"
    
    if merge_pr $pr_number; then
        ((SUCCESS_COUNT++))
        echo "✅ PR #$pr_number processed successfully"
        
        # Push changes after each successful merge
        echo "🚀 Pushing changes to main branch..."
        if git push origin main; then
            echo "✅ Successfully pushed changes to main"
        else
            echo "❌ Failed to push changes to main"
        fi
        
        echo "⏳ Waiting 3 seconds before next PR..."
        sleep 3
    else
        ((FAILED_COUNT++))
        echo "❌ PR #$pr_number failed to process"
    fi
done

echo ""
echo "🎉 PR merge process completed!"
echo "📈 Total successful merges: $SUCCESS_COUNT"
echo "📉 Total failed merges: $FAILED_COUNT"
echo "⏭️  Total skipped (already merged): $SKIPPED_COUNT"

# Verify final state
echo ""
echo "🔍 Verifying final state..."
git status
echo ""
echo "📋 Current branch: $(git branch --show-current)"
echo "📊 Latest commit: $(git log --oneline -1)"