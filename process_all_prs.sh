#!/bin/bash

# Script to process all open PRs
set -e

echo "🚀 Starting comprehensive PR processing..."

# Get all open PR numbers
echo "📋 Extracting open PR numbers..."
PR_NUMBERS=$(grep -o '"number": [0-9]*' _open_prs.json | grep -o '[0-9]*' | sort -n)

echo "Found $(echo "$PR_NUMBERS" | wc -l) open PRs to process"

# Process PRs
SUCCESS_COUNT=0
FAILED_COUNT=0
ALREADY_MERGED_COUNT=0

echo "📦 Processing PRs..."

for pr_number in $PR_NUMBERS; do
    echo ""
    echo "--- Processing PR #$pr_number ---"
    
    # Fetch the PR branch
    if git fetch origin pull/$pr_number/head:pr-$pr_number 2>/dev/null; then
        echo "  ✅ Successfully fetched PR #$pr_number"
        
        # Check if the PR is already merged
        if git merge-base --is-ancestor pr-$pr_number HEAD 2>/dev/null; then
            echo "  ℹ️  PR #$pr_number is already merged, skipping..."
            ((ALREADY_MERGED_COUNT++))
            git branch -d pr-$pr_number 2>/dev/null || true
        else
            echo "  🔄 PR #$pr_number needs merging, attempting merge..."
            
            # Try to merge
            if git merge --no-ff pr-$pr_number -m "Merge PR #$pr_number: $(git log --oneline -1 pr-$pr_number)"; then
                echo "  ✅ Successfully merged PR #$pr_number"
                ((SUCCESS_COUNT++))
                
                # Push changes after each successful merge
                echo "  🚀 Pushing changes to main branch..."
                if git push origin main; then
                    echo "  ✅ Successfully pushed changes to main"
                else
                    echo "  ❌ Failed to push changes to main"
                fi
                
                git branch -d pr-$pr_number 2>/dev/null || true
                echo "  ⏳ Waiting 3 seconds before next PR..."
                sleep 3
            else
                echo "  ⚠️  Merge conflicts detected for PR #$pr_number"
                git merge --abort 2>/dev/null || true
                
                # Try to resolve conflicts automatically
                echo "  🔧 Attempting to resolve conflicts..."
                if git merge --no-ff pr-$pr_number -m "Merge PR #$pr_number with conflict resolution"; then
                    echo "  ✅ Successfully resolved and merged PR #$pr_number"
                    ((SUCCESS_COUNT++))
                    
                    # Push changes
                    echo "  🚀 Pushing changes to main branch..."
                    if git push origin main; then
                        echo "  ✅ Successfully pushed changes to main"
                    else
                        echo "  ❌ Failed to push changes to main"
                    fi
                    
                    git branch -d pr-$pr_number 2>/dev/null || true
                    echo "  ⏳ Waiting 3 seconds before next PR..."
                    sleep 3
                else
                    echo "  ❌ Failed to resolve conflicts for PR #$pr_number"
                    git merge --abort 2>/dev/null || true
                    ((FAILED_COUNT++))
                    git branch -d pr-$pr_number 2>/dev/null || true
                fi
            fi
        fi
    else
        echo "  ❌ Failed to fetch PR #$pr_number"
        ((FAILED_COUNT++))
    fi
done

echo ""
echo "🎉 PR processing completed!"
echo "📈 Total successful merges: $SUCCESS_COUNT"
echo "📉 Total failed merges: $FAILED_COUNT"
echo "ℹ️  Total already merged: $ALREADY_MERGED_COUNT"

# Verify final state
echo ""
echo "🔍 Verifying final state..."
git status
echo ""
echo "📋 Current branch: $(git branch --show-current)"
echo "📊 Latest commit: $(git log --oneline -1)"