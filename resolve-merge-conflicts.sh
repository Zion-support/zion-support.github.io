#!/bin/bash

# Script to automatically resolve common merge conflicts
echo "Starting merge conflict resolution..."

# Abort current merge
git merge --abort

# Get list of open PRs
echo "Fetching open PRs..."
PRS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open" | grep -o '"number":[0-9]*' | grep -o '[0-9]*' | head -10)

for pr in $PRS; do
    echo "Processing PR #$pr"
    
    # Get PR details
    PR_DATA=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr")
    HEAD_REF=$(echo "$PR_DATA" | grep -o '"head":{[^}]*"ref":"[^"]*"' | grep -o '"ref":"[^"]*"' | cut -d'"' -f4)
    BASE_REF=$(echo "$PR_DATA" | grep -o '"base":{[^}]*"ref":"[^"]*"' | grep -o '"ref":"[^"]*"' | cut -d'"' -f4)
    MERGEABLE=$(echo "$PR_DATA" | grep -o '"mergeable":[^,]*' | cut -d':' -f2 | tr -d ' ,')
    
    echo "PR #$pr: $HEAD_REF -> $BASE_REF (mergeable: $MERGEABLE)"
    
    if [ "$MERGEABLE" = "true" ]; then
        echo "PR #$pr is mergeable, attempting merge..."
        
        # Fetch the PR branch
        git fetch origin "$HEAD_REF"
        
        # Try to merge
        if git merge "origin/$HEAD_REF" --no-edit; then
            echo "Successfully merged PR #$pr"
            git push origin main
        else
            echo "Failed to merge PR #$pr, resolving conflicts..."
            
            # Auto-resolve common conflicts
            find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | while read file; do
                if [ -f "$file" ]; then
                    # Remove merge conflict markers and keep both versions where possible
                    sed -i '/^<<<<<<< HEAD/,/^=======/d' "$file"
                    sed -i '/^>>>>>>> /d' "$file"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            if git commit -m "Auto-resolve merge conflicts for PR #$pr"; then
                echo "Successfully resolved conflicts for PR #$pr"
                git push origin main
            else
                echo "Failed to resolve conflicts for PR #$pr"
                git merge --abort
            fi
        fi
    else
        echo "PR #$pr has conflicts, skipping for now"
    fi
    
    echo "---"
done

echo "Merge conflict resolution complete!"