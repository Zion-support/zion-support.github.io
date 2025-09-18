#!/bin/bash

# Script to process all open PRs and resolve conflicts
set -e

echo "🚀 Starting to process all open PRs..."
echo "⏰ Started at: $(date)"

# Ensure we're on main and up to date
echo "🔄 Updating main branch..."
git checkout main
git pull origin main

# Read PR numbers
PR_NUMBERS=$(cat open_pr_numbers.txt)
TOTAL_PRS=$(wc -l < open_pr_numbers.txt)
PROCESSED=0
SUCCESSFUL=0
FAILED=0

echo "📊 Found $TOTAL_PRS open PRs to process"

for pr_number in $PR_NUMBERS; do
    PROCESSED=$((PROCESSED + 1))
    echo ""
    echo "🔄 Processing PR #$pr_number ($PROCESSED/$TOTAL_PRS)..."
    
    # Get PR branch name
    PR_BRANCH=$(git branch -r | grep "origin/.*pr.*$pr_number" | head -1 | sed 's/origin\///' | xargs)
    
    if [ -z "$PR_BRANCH" ]; then
        echo "⚠️  No branch found for PR #$pr_number, skipping..."
        continue
    fi
    
    echo "📝 Found branch: $PR_BRANCH"
    
    # Try to merge the PR
    if git merge "origin/$PR_BRANCH" --no-ff -m "Merge PR #$pr_number: $PR_BRANCH" 2>/dev/null; then
        echo "✅ Successfully merged PR #$pr_number"
        SUCCESSFUL=$((SUCCESSFUL + 1))
    else
        echo "⚠️  Merge conflict detected for PR #$pr_number"
        
        # Try to resolve conflicts automatically
        if resolve_conflicts_auto; then
            echo "✅ Resolved conflicts for PR #$pr_number"
            git add .
            git commit -m "Resolve conflicts for PR #$pr_number"
            SUCCESSFUL=$((SUCCESSFUL + 1))
        else
            echo "❌ Failed to resolve conflicts for PR #$pr_number"
            git merge --abort
            FAILED=$((FAILED + 1))
        fi
    fi
done

echo ""
echo "📊 Processing Summary:"
echo "   Total PRs: $TOTAL_PRS"
echo "   Processed: $PROCESSED"
echo "   Successful: $SUCCESSFUL"
echo "   Failed: $FAILED"

# Push all changes
echo "🚀 Pushing all changes to main..."
git push origin main

echo "✅ Completed processing all PRs at $(date)"