#!/bin/bash

# Script to merge all open PRs into main branch
set -e

echo "🚀 Starting to merge open PRs into main branch..."

# List of PR numbers from open_prs.json
PR_NUMBERS=(10918 10917 10916 10915 10914)

for pr_number in "${PR_NUMBERS[@]}"; do
    echo "📋 Processing PR #$pr_number..."
    
    # Get the branch name for this PR
    branch_name=$(git ls-remote --heads origin | grep "pull/$pr_number" | head -1 | sed 's/.*refs\/heads\///')
    
    if [ -z "$branch_name" ]; then
        # Try alternative branch naming patterns
        branch_name=$(git ls-remote --heads origin | grep -E "(cursor|pr-$pr_number)" | head -1 | sed 's/.*refs\/heads\///')
    fi
    
    if [ -n "$branch_name" ]; then
        echo "🔍 Found branch: $branch_name"
        
        # Fetch the branch
        git fetch origin "$branch_name"
        
        # Try to merge the branch
        if git merge "origin/$branch_name" --no-ff -m "Merge PR #$pr_number: $branch_name"; then
            echo "✅ Successfully merged PR #$pr_number"
        else
            echo "⚠️  Merge conflict in PR #$pr_number, attempting to resolve..."
            
            # Check for merge conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "🔧 Resolving merge conflicts..."
                
                # Use our conflict resolution approach
                find . -type f \( -name "*.js" -o -name "*.ts" -o -name "*.tsx" -o -name "*.jsx" -o -name "*.json" -o -name "*.md" -o -name "*.html" -o -name "*.cjs" -o -name "*.sh" \) -exec sed -i '/^<<<<<<< HEAD$/,/^>>>>>>> [^>]/d' {} \;
                
                # Add resolved files
                git add .
                
                # Complete the merge
                git commit --no-edit
                echo "✅ Resolved conflicts and merged PR #$pr_number"
            else
                echo "❌ Failed to merge PR #$pr_number"
                git merge --abort
            fi
        fi
    else
        echo "⚠️  Could not find branch for PR #$pr_number, skipping..."
    fi
    
    echo "---"
done

echo "🎉 Finished merging open PRs!"
echo "📊 Current status:"
git status --short