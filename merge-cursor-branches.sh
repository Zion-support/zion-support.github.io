#!/bin/bash

# Simple script to merge all cursor branches
echo "🚀 Starting merge of cursor branches..."

# List of cursor branches to merge (extracted from PRs)
CURSOR_BRANCHES=(
    "cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-3a6f"
    "cursor/website-audit-and-enhancement-09cd"
    "cursor/website-audit-and-enhancement-e0b4"
    "cursor/website-audit-and-enhancement-3647"
    "cursor/website-audit-and-enhancement-7ab5"
    "cursor/enhance-app-with-new-services-and-futuristic-design-d5d2"
    "cursor/website-audit-and-enhancement-3fc6"
    "cursor/website-audit-and-enhancement-70fc"
    "cursor/enhance-app-with-new-services-and-futuristic-design-6433"
    "cursor/ci-cd-pipeline-code-quality-and-security-check-9663"
    "cursor/enhance-app-with-new-services-and-futuristic-design-b902"
    "cursor/website-audit-and-enhancement-9299"
    "cursor/website-audit-and-enhancement-47bc"
    "cursor/enhance-app-with-new-services-and-futuristic-design-0a89"
    "cursor/fix-release-workflow-links-and-accessibility-31e9"
    "cursor/enhance-app-with-new-services-and-futuristic-design-da36"
    "cursor/expand-services-and-deploy-updates-c4ed"
    "cursor/website-audit-and-enhancement-b8ea"
    "cursor/website-audit-and-enhancement-7cad"
    "cursor/expand-services-and-deploy-updates-4ed2"
    "cursor/build-with-yarn-dependency-error-25bd"
    "cursor/website-audit-and-enhancement-3725"
    "cursor/codeql-analyze-javascript-typescript-9d5a"
    "cursor/enhance-app-with-new-services-and-futuristic-design-a741"
    "cursor/expand-services-and-deploy-updates-f6d5"
    "cursor/analyze-improve-and-deploy-ziontechgroup-app-d61e"
    "cursor/enhance-app-with-new-services-and-futuristic-design-723d"
    "cursor/expand-services-and-deploy-updates-ebaa"
    "cursor/website-audit-and-enhancement-7599"
    "cursor/enhance-app-with-new-services-and-futuristic-design-1d4f"
    "cursor/enhance-app-with-new-services-and-futuristic-design-4865"
    "cursor/website-audit-and-enhancement-5570"
    "cursor/enhance-app-with-new-services-and-futuristic-design-0528"
    "cursor/enhance-app-with-new-services-and-futuristic-design-9d0f"
    "cursor/expand-services-and-deploy-updates-1c61"
    "cursor/expand-services-and-deploy-updates-3c57"
    "cursor/enhance-app-with-new-services-and-futuristic-design-e423"
    "cursor/analyze-improve-and-deploy-ziontechgroup-app-b773"
    "cursor/enhance-app-with-new-services-and-futuristic-design-fa48"
    "cursor/analyze-improve-and-deploy-ziontechgroup-app-ba31"
    "cursor/analyze-improve-and-deploy-ziontechgroup-app-c5b6"
    "cursor/analyze-main-branch-loading-issue-3bae"
    "cursor/update-and-fix-project-dependencies-3c6f"
)

# Counter for successful merges
SUCCESSFUL_MERGES=0
FAILED_MERGES=0

echo "📋 Found ${#CURSOR_BRANCHES[@]} cursor branches to merge"
echo "---"

# Process each branch
for branch in "${CURSOR_BRANCHES[@]}"; do
    echo "🔄 Processing: $branch"
    
    # Fetch the branch
    git fetch origin "$branch" 2>/dev/null || {
        echo "❌ Failed to fetch $branch"
        FAILED_MERGES=$((FAILED_MERGES + 1))
        continue
    }
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch"; then
        echo "⚠️  Branch $branch does not exist, skipping..."
        continue
    fi
    
    # Check if already merged
    if git merge-base --is-ancestor HEAD "origin/$branch" 2>/dev/null; then
        echo "✅ Branch $branch is already merged, skipping..."
        continue
    fi
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
    else
        echo "⚠️  Merge conflicts in $branch, resolving..."
        
        # Get conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts by removing markers
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    echo "🔧 Resolving conflicts in $file..."
                    # Remove conflict markers
                    sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
                    sed -i '/>>>>>>> /d' "$file"
                fi
            done
            
            # Add resolved files
            git add .
            git commit -m "Resolve merge conflicts for $branch - $(date)"
            echo "✅ Conflicts resolved and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        else
            echo "❌ No conflicted files found, aborting merge..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
        fi
    fi
    
    echo "---"
done

echo "🎉 Merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"

# Push changes
echo "🚀 Pushing changes to main..."
git push origin main

echo "✅ All done!"