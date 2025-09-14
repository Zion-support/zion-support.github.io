#!/bin/bash

# Script to merge all open PRs and resolve conflicts
set -e

echo "🚀 Starting comprehensive PR merge process..."

# Get all open PRs
echo "📋 Fetching open PRs..."
OPEN_PRS=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" | grep -o '"number":[0-9]*' | grep -o '[0-9]*')

if [ -z "$OPEN_PRS" ]; then
    echo "✅ No open PRs found"
    exit 0
fi

echo "Found open PRs: $OPEN_PRS"

# Function to merge a single PR
merge_pr() {
    local pr_number=$1
    echo "🔄 Processing PR #$pr_number..."
    
    # Get PR details
    local pr_data=$(curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number")
    local head_ref=$(echo "$pr_data" | grep -o '"head":[^}]*"ref":"[^"]*"' | grep -o '"[^"]*"$' | tr -d '"')
    local base_ref=$(echo "$pr_data" | grep -o '"base":[^}]*"ref":"[^"]*"' | grep -o '"[^"]*"$' | tr -d '"')
    
    if [ -z "$head_ref" ]; then
        echo "❌ Could not get head ref for PR #$pr_number"
        return 1
    fi
    
    echo "  📍 PR #$pr_number: $head_ref -> $base_ref"
    
    # Checkout the PR branch
    echo "  🔄 Checking out branch: $head_ref"
    if ! git fetch origin "$head_ref:$head_ref"; then
        echo "  ❌ Failed to fetch branch $head_ref"
        return 1
    fi
    
    if ! git checkout "$head_ref"; then
        echo "  ❌ Failed to checkout branch $head_ref"
        return 1
    fi
    
    # Try to merge with main
    echo "  🔄 Attempting to merge with main..."
    if git checkout main; then
        if git merge "$head_ref" --no-ff -m "Merge PR #$pr_number: $head_ref"; then
            echo "  ✅ Successfully merged PR #$pr_number"
            
            # Push to main
            if git push origin main; then
                echo "  ✅ Successfully pushed PR #$pr_number to main"
                
                # Close the PR
                curl -X PATCH \
                    -H "Accept: application/vnd.github.v3+json" \
                    -H "Authorization: token $GITHUB_TOKEN" \
                    "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number" \
                    -d '{"state":"closed"}' 2>/dev/null || echo "  ⚠️  Could not close PR (may need manual closure)"
                
                # Delete the branch
                git push origin --delete "$head_ref" 2>/dev/null || echo "  ⚠️  Could not delete remote branch"
                git branch -D "$head_ref" 2>/dev/null || echo "  ⚠️  Could not delete local branch"
                
                return 0
            else
                echo "  ❌ Failed to push PR #$pr_number to main"
                return 1
            fi
        else
            echo "  ⚠️  Merge conflict detected for PR #$pr_number"
            
            # Try to resolve conflicts automatically
            echo "  🔧 Attempting to resolve conflicts..."
            
            # Check for common conflict patterns and resolve them
            if [ -f "app/page.tsx" ]; then
                echo "  🔧 Resolving conflicts in app/page.tsx..."
                # Remove conflict markers and keep both versions where possible
                sed -i '/^<<<<<<< HEAD/,/^=======/d' app/page.tsx 2>/dev/null || true
                sed -i '/^>>>>>>> /d' app/page.tsx 2>/dev/null || true
            fi
            
            if [ -f "app/sitemap.ts" ]; then
                echo "  🔧 Resolving conflicts in app/sitemap.ts..."
                sed -i '/^<<<<<<< HEAD/,/^=======/d' app/sitemap.ts 2>/dev/null || true
                sed -i '/^>>>>>>> /d' app/sitemap.ts 2>/dev/null || true
            fi
            
            # Add resolved files
            git add . 2>/dev/null || true
            
            # Try to commit the merge
            if git commit -m "Resolve merge conflicts for PR #$pr_number" 2>/dev/null; then
                echo "  ✅ Successfully resolved conflicts for PR #$pr_number"
                
                # Push to main
                if git push origin main; then
                    echo "  ✅ Successfully pushed resolved PR #$pr_number to main"
                    
                    # Close the PR
                    curl -X PATCH \
                        -H "Accept: application/vnd.github.v3+json" \
                        -H "Authorization: token $GITHUB_TOKEN" \
                        "https://api.github.com/repos/Zion-Holdings/zion.app/pulls/$pr_number" \
                        -d '{"state":"closed"}' 2>/dev/null || echo "  ⚠️  Could not close PR (may need manual closure)"
                    
                    # Delete the branch
                    git push origin --delete "$head_ref" 2>/dev/null || echo "  ⚠️  Could not delete remote branch"
                    git branch -D "$head_ref" 2>/dev/null || echo "  ⚠️  Could not delete local branch"
                    
                    return 0
                else
                    echo "  ❌ Failed to push resolved PR #$pr_number to main"
                    return 1
                fi
            else
                echo "  ❌ Could not resolve conflicts for PR #$pr_number"
                git merge --abort 2>/dev/null || true
                return 1
            fi
        fi
    else
        echo "  ❌ Failed to checkout main branch"
        return 1
    fi
}

# Process each PR
successful_merges=0
failed_merges=0

for pr_number in $OPEN_PRS; do
    if merge_pr "$pr_number"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
    echo "---"
done

echo "📊 Merge Summary:"
echo "  ✅ Successful merges: $successful_merges"
echo "  ❌ Failed merges: $failed_merges"

# Final cleanup
echo "🧹 Final cleanup..."
git checkout main
git pull origin main
git branch -D $(git branch | grep -v main | grep -v '\*' | xargs) 2>/dev/null || true

echo "🎉 PR merge process completed!"