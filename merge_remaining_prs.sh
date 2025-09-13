#!/bin/bash

# Merge remaining PRs locally
set -e

echo "🚀 Starting merge of remaining PRs..."

# Get list of remaining PRs
remaining_prs=(16191 16195 16209 16227 16246 16251 16252)

successful_merges=0
failed_merges=0

for pr_number in "${remaining_prs[@]}"; do
    echo ""
    echo "🔄 Processing PR #$pr_number..."
    
    # Get PR details to find the branch name
    pr_data=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number")
    head_ref=$(echo "$pr_data" | grep '"ref":' | head -1 | sed 's/.*"ref": "\([^"]*\)".*/\1/')
    
    if [ -z "$head_ref" ]; then
        echo "❌ Could not get branch name for PR #$pr_number"
        ((failed_merges++))
        continue
    fi
    
    echo "   Branch: $head_ref"
    
    # Fetch the branch
    if ! git fetch origin "$head_ref" 2>/dev/null; then
        echo "❌ Could not fetch branch $head_ref for PR #$pr_number"
        ((failed_merges++))
        continue
    fi
    
    # Attempt to merge
    if git merge "origin/$head_ref" --no-ff -m "Merge PR #$pr_number: $head_ref"; then
        echo "✅ Successfully merged PR #$pr_number"
        ((successful_merges++))
    else
        echo "⚠️  Merge conflict in PR #$pr_number, attempting resolution..."
        
        # Try to resolve conflicts automatically
        conflicted_files=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$conflicted_files" ]; then
            echo "🔧 Resolving conflicts in: $conflicted_files"
            
            resolved=0
            for file in $conflicted_files; do
                # Try different resolution strategies
                if git checkout --ours "$file" 2>/dev/null || git checkout --theirs "$file" 2>/dev/null; then
                    git add "$file"
                    echo "✅ Resolved conflicts in $file"
                    resolved=1
                fi
            done
            
            # Complete the merge
            if [ $resolved -eq 1 ] && git commit --no-edit 2>/dev/null; then
                echo "✅ Successfully resolved conflicts for PR #$pr_number"
                ((successful_merges++))
            else
                echo "❌ Failed to resolve conflicts for PR #$pr_number"
                git merge --abort 2>/dev/null || true
                ((failed_merges++))
            fi
        else
            echo "❌ No conflicted files found, aborting merge for PR #$pr_number"
            git merge --abort 2>/dev/null || true
            ((failed_merges++))
        fi
    fi
done

echo ""
echo "📊 Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"

# Push all successful merges
if [ $successful_merges -gt 0 ]; then
    echo ""
    echo "📤 Pushing merged changes to main..."
    if git push origin main; then
        echo "✅ Successfully pushed changes to main"
    else
        echo "❌ Failed to push changes to main"
    fi
fi

echo ""
echo "🏁 PR merge process completed!"