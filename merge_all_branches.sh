#!/bin/bash

# Comprehensive branch merging script for Zion Holdings repository
# This script will systematically merge all feature branches into main

set -e  # Exit on any error

echo "🚀 Starting comprehensive branch merge process..."
echo "=================================================="

# Get all remote branches (excluding main and HEAD)
BRANCHES=$(git branch -r | grep -v "origin/main" | grep -v "origin/HEAD" | grep -v "origin/cursor/" | sed 's/origin\///' | head -50)

# Counter for tracking progress
total_branches=$(echo "$BRANCHES" | wc -l)
current=0
successful_merges=0
failed_merges=0

echo "📊 Found $total_branches branches to process"
echo ""

# Process each branch
for branch in $BRANCHES; do
    current=$((current + 1))
    echo "[$current/$total_branches] 🔄 Processing branch: $branch"
    
    # Create a temporary branch for testing the merge
    temp_branch="temp-merge-$branch"
    
    # Clean up any existing temp branch
    git branch -D "$temp_branch" 2>/dev/null || true
    
    # Create and checkout temp branch
    if git checkout -b "$temp_branch" "origin/$branch" 2>/dev/null; then
        echo "  ✅ Created temp branch: $temp_branch"
        
        # Attempt to merge main into the temp branch
        if git merge main --no-edit 2>/dev/null; then
            echo "  ✅ Merge successful: $branch"
            successful_merges=$((successful_merges + 1))
            
            # Push the merged branch
            if git push origin "$temp_branch" 2>/dev/null; then
                echo "  ✅ Pushed merged branch: $temp_branch"
                
                # Switch to main and merge
                git checkout main
                if git merge "$temp_branch" --no-edit 2>/dev/null; then
                    echo "  ✅ Merged into main: $branch"
                else
                    echo "  ⚠️  Already up to date in main: $branch"
                fi
                
                # Push main
                git push origin main
                echo "  ✅ Pushed main branch"
            else
                echo "  ❌ Failed to push merged branch: $branch"
                failed_merges=$((failed_merges + 1))
            fi
        else
            echo "  ❌ Merge conflict detected: $branch"
            failed_merges=$((failed_merges + 1))
        fi
        
        # Clean up temp branch
        git checkout main
        git branch -D "$temp_branch" 2>/dev/null || true
        
    else
        echo "  ❌ Failed to create temp branch: $branch"
        failed_merges=$((failed_merges + 1))
    fi
    
    echo ""
done

echo "=================================================="
echo "📈 Merge Summary:"
echo "  Total branches processed: $total_branches"
echo "  Successful merges: $successful_merges"
echo "  Failed merges: $failed_merges"
echo "  Success rate: $(( (successful_merges * 100) / total_branches ))%"
echo "=================================================="

if [ $failed_merges -eq 0 ]; then
    echo "🎉 All branches merged successfully!"
    exit 0
else
    echo "⚠️  Some branches had issues. Check the output above for details."
    exit 1
fi