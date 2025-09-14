#!/bin/bash

# Script to merge remaining open PRs that aren't already merged
set -e

echo "🚀 Starting targeted PR merge process..."

# Get all open PR numbers
echo "📋 Extracting open PR numbers..."
PR_NUMBERS=$(grep -o '"number": [0-9]*' _open_prs.json | grep -o '[0-9]*' | sort -n)

echo "Found $(echo "$PR_NUMBERS" | wc -l) open PRs to check"

# Function to check if PR needs merging
check_pr() {
    local pr_number=$1
    local branch_name="pr-$pr_number"
    
    echo "🔍 Checking PR #$pr_number..."
    
    # Fetch the PR branch
    if git fetch origin pull/$pr_number/head:$branch_name 2>/dev/null; then
        echo "  ✅ Successfully fetched PR #$pr_number"
        
        # Check if the PR is already merged
        if git merge-base --is-ancestor $branch_name HEAD 2>/dev/null; then
            echo "  ℹ️  PR #$pr_number is already merged, skipping..."
            git branch -d $branch_name 2>/dev/null || true
            return 2  # Already merged
        else
            echo "  🔄 PR #$pr_number needs merging"
            return 1  # Needs merging
        fi
    else
        echo "  ❌ Failed to fetch PR #$pr_number"
        return 0  # Failed to fetch
    fi
}

# Function to merge a PR
merge_pr() {
    local pr_number=$1
    local branch_name="pr-$pr_number"
    
    echo "🔄 Merging PR #$pr_number..."
    
    # Try to merge
    if git merge --no-ff $branch_name -m "Merge PR #$pr_number: $(git log --oneline -1 $branch_name)"; then
        echo "  ✅ Successfully merged PR #$pr_number"
        git branch -d $branch_name 2>/dev/null || true
        return 0
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

# Process PRs
SUCCESS_COUNT=0
FAILED_COUNT=0
ALREADY_MERGED_COUNT=0
NEEDS_MERGE_COUNT=0

echo "📦 Checking and processing PRs..."

for pr_number in $PR_NUMBERS; do
    echo ""
    echo "--- Processing PR #$pr_number ---"
    
    check_pr $pr_number
    result=$?
    
    case $result in
        0)
            ((FAILED_COUNT++))
            echo "❌ PR #$pr_number failed to fetch"
            ;;
        1)
            ((NEEDS_MERGE_COUNT++))
            echo "🔄 PR #$pr_number needs merging, attempting merge..."
            if merge_pr $pr_number; then
                ((SUCCESS_COUNT++))
                echo "✅ PR #$pr_number merged successfully"
                
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
                echo "❌ PR #$pr_number failed to merge"
            fi
            ;;
        2)
            ((ALREADY_MERGED_COUNT++))
            echo "ℹ️  PR #$pr_number already merged"
            ;;
    esac
done

echo ""
echo "🎉 PR merge process completed!"
echo "📈 Total successful merges: $SUCCESS_COUNT"
echo "📉 Total failed merges: $FAILED_COUNT"
echo "ℹ️  Total already merged: $ALREADY_MERGED_COUNT"
echo "🔄 Total that needed merging: $NEEDS_MERGE_COUNT"

# Verify final state
echo ""
echo "🔍 Verifying final state..."
git status
echo ""
echo "📋 Current branch: $(git branch --show-current)"
echo "📊 Latest commit: $(git log --oneline -1)"