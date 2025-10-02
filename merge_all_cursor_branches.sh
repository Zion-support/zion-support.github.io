#!/bin/bash

# Comprehensive script to merge all cursor branches into main
set -e

echo "🚀 Starting comprehensive merge of all cursor branches..."
echo "📅 $(date)"
echo ""

# Ensure we're on main and up to date
git checkout main
git pull origin main --no-edit

# Get all cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/create-and-deploy-new-content" | sed 's/origin\///' | sort -u)

total_branches=$(echo "$CURSOR_BRANCHES" | wc -l)
successful_merges=0
failed_merges=0
already_merged=0
conflict_resolved=0

echo "📋 Found $total_branches cursor branches to process..."
echo ""

for branch in $CURSOR_BRANCHES; do
    branch_name="origin/$branch"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📋 Processing: $branch_name"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch_name"; then
        echo "⚠️  Branch $branch_name does not exist, skipping..."
        ((failed_merges++))
        continue
    fi
    
    # Check if already merged
    if git merge-base --is-ancestor "$branch_name" HEAD 2>/dev/null; then
        echo "ℹ️  Already merged: $branch_name"
        ((already_merged++))
        continue
    fi
    
    # Try to merge
    echo "🔄 Attempting merge..."
    if git merge "$branch_name" --no-edit --no-ff -m "Merge $branch into main" 2>&1; then
        echo "✅ Successfully merged: $branch_name"
        ((successful_merges++))
    else
        echo "⚠️  Merge conflict detected, attempting auto-resolution..."
        
        # Auto-resolve common conflicts by keeping ours
        conflicts=false
        
        # Check for conflicts in common files
        if git status --porcelain | grep -q "^UU"; then
            echo "🔧 Resolving conflicts..."
            
            # Resolve Home.tsx conflicts (keep ours - main)
            if git status --porcelain | grep -q "src/pages/Home.tsx"; then
                echo "  - Resolving src/pages/Home.tsx (keeping current main version)"
                git checkout --ours src/pages/Home.tsx
                git add src/pages/Home.tsx
            fi
            
            # Resolve router conflicts (keep ours)
            if git status --porcelain | grep -q "src/router.tsx"; then
                echo "  - Resolving src/router.tsx (keeping current main version)"
                git checkout --ours src/router.tsx
                git add src/router.tsx
            fi
            
            # Resolve app/page.tsx conflicts (keep ours)
            if git status --porcelain | grep -q "app/page.tsx"; then
                echo "  - Resolving app/page.tsx (keeping current main version)"
                git checkout --ours app/page.tsx
                git add app/page.tsx
            fi
            
            # Resolve package.json conflicts (keep ours)
            if git status --porcelain | grep -q "package.json"; then
                echo "  - Resolving package.json (keeping current main version)"
                git checkout --ours package.json
                git add package.json
            fi
            
            # Resolve package-lock.json conflicts (keep ours)
            if git status --porcelain | grep -q "package-lock.json"; then
                echo "  - Resolving package-lock.json (keeping current main version)"
                git checkout --ours package-lock.json
                git add package-lock.json
            fi
            
            # Resolve pnpm-lock.yaml conflicts (keep ours)
            if git status --porcelain | grep -q "pnpm-lock.yaml"; then
                echo "  - Resolving pnpm-lock.yaml (keeping current main version)"
                git checkout --ours pnpm-lock.yaml
                git add pnpm-lock.yaml
            fi
            
            # For any remaining conflicts, add all files that were changed
            # This accepts incoming changes for new files
            for file in $(git diff --name-only --diff-filter=U); do
                if [[ ! "$file" =~ (Home\.tsx|router\.tsx|page\.tsx|package.*json|pnpm-lock\.yaml)$ ]]; then
                    echo "  - Adding new/modified file: $file"
                    git add "$file"
                fi
            done
            
            # Try to commit the merge
            if git commit -m "Merge $branch into main with auto-conflict resolution" --no-edit 2>&1; then
                echo "✅ Conflicts resolved and merged: $branch_name"
                ((successful_merges++))
                ((conflict_resolved++))
            else
                # Check if already committed (no changes to commit)
                if git diff-index --quiet HEAD --; then
                    echo "✅ Already merged (no changes): $branch_name"
                    ((already_merged++))
                else
                    echo "❌ Could not resolve conflicts for: $branch_name, aborting merge"
                    git merge --abort
                    ((failed_merges++))
                fi
            fi
        else
            # No conflicts in tracked files, just commit
            if git commit -m "Merge $branch into main" --no-edit 2>&1; then
                echo "✅ Merged successfully: $branch_name"
                ((successful_merges++))
            else
                echo "❌ Failed to merge: $branch_name"
                git merge --abort
                ((failed_merges++))
            fi
        fi
    fi
    
    echo ""
done

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 MERGE SUMMARY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📁 Total branches processed: $total_branches"
echo "✅ Successful merges: $successful_merges"
echo "🔧 Conflicts auto-resolved: $conflict_resolved"
echo "ℹ️  Already merged: $already_merged"
echo "❌ Failed merges: $failed_merges"
echo ""

if [ $successful_merges -gt 0 ]; then
    echo "🚀 Pushing merged changes to origin/main..."
    if git push origin main; then
        echo "✅ Successfully pushed all merges to remote!"
    else
        echo "⚠️  Failed to push. You may need to pull and resolve conflicts."
        echo "Run: git pull origin main --no-edit && git push origin main"
    fi
else
    echo "ℹ️  No new merges to push."
fi

echo ""
echo "🎉 Merge process completed at $(date)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
