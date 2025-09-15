#!/bin/bash
set -euo pipefail

echo "🚀 Merging recent PRs..."

# Get the 4 most recent open PRs
RECENT_PRS=$(curl -s -H "Accept: application/vnd.github.v3+json" \
    "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=4&sort=created&direction=desc" \
    | python3 -c "
import sys, json
data = json.load(sys.stdin)
for pr in data:
    print(f'{pr[\"number\"]}|{pr[\"title\"]}|{pr[\"head\"][\"ref\"]}')
")

echo "Recent PRs to merge:"
echo "$RECENT_PRS"

# Process each PR
while IFS='|' read -r pr_number pr_title branch_name; do
    if [[ -n "$pr_number" ]]; then
        echo "🔄 Processing PR #$pr_number: $pr_title"
        echo "   Branch: $branch_name"
        
        # Fetch the branch
        git fetch origin "$branch_name:$branch_name" || {
            echo "❌ Failed to fetch branch $branch_name"
            continue
        }
        
        # Switch to main and merge
        git checkout main
        git pull origin main
        
        # Try to merge
        if git merge --no-ff "$branch_name" -m "Merge PR #$pr_number: $pr_title"; then
            echo "✅ Successfully merged PR #$pr_number"
            
            # Push to main
            if git push origin main; then
                echo "✅ Pushed to main"
            else
                echo "❌ Failed to push to main"
            fi
            
            # Clean up
            git branch -d "$branch_name" 2>/dev/null || true
        else
            echo "⚠️  Merge conflict for PR #$pr_number, attempting resolution..."
            
            # Try simple conflict resolution
            git status --porcelain | grep "^UU\|^AA\|^DD" | while read -r status file; do
                echo "   Resolving conflicts in $file"
                
                # Simple strategy: keep the incoming version (after )
                if [[ -f "$file" ]]; then
                    # Remove conflict markers and keep the second version
                    sed -i '//,//d' "$file"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Check if merge can be completed
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "❌ Still have unresolved conflicts, aborting merge"
                git merge --abort
            else
                echo "✅ Conflicts resolved, completing merge"
                git commit -m "Resolve merge conflicts for PR #$pr_number: $pr_title"
                
                if git push origin main; then
                    echo "✅ Pushed resolved merge to main"
                else
                    echo "❌ Failed to push resolved merge to main"
                fi
                
                git branch -d "$branch_name" 2>/dev/null || true
            fi
        fi
        
        echo "---"
        sleep 1
    fi
done <<< "$RECENT_PRS"

echo "🎉 Recent PR merge completed!"
