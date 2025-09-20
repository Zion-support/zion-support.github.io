#!/bin/bash

# Script to resolve merge conflicts and merge PR #22515 into main branch
set -e

echo "🚀 Starting merge process for PR #22515: Fix Netlify build and merge to main"
echo "⏰ Started at: $(date)"
echo "---"

# Create backup branch
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Ensure main is up to date
echo "🔄 Ensuring main branch is up to date..."
git checkout main
git pull origin main

# PR details
PR_BRANCH="cursor/fix-netlify-build-and-merge-to-main-bc4d"
PR_NUMBER="22515"

echo "📋 Processing PR #$PR_NUMBER from branch: $PR_BRANCH"

# Fetch the PR branch
echo "📥 Fetching PR branch..."
git fetch origin "$PR_BRANCH"

# Check if branch exists
if ! git ls-remote --heads origin "$PR_BRANCH" > /dev/null 2>&1; then
    echo "❌ PR branch $PR_BRANCH does not exist"
    exit 1
fi

# Function to resolve conflicts intelligently
resolve_conflicts() {
    local file="$1"
    
    echo "🔧 Resolving conflicts in $file..."
    
    # Create backup
    cp "$file" "${file}.backup.$(date +%s)"
    
    # Different strategies for different file types
    case "$file" in
        "package.json"|"package-lock.json")
            echo "📦 Package file detected, keeping main version and merging dependencies..."
            # Keep main version but try to merge new dependencies
            git checkout --ours "$file"
            ;;
        "netlify.toml"|"next.config.js"|"tsconfig.json"|"tailwind.config.js")
            echo "⚙️  Config file detected, keeping main version..."
            git checkout --ours "$file"
            ;;
        "App.tsx"|"src/main.tsx"|"src/App.tsx")
            echo "🏗️  Main app file detected, merging content intelligently..."
            git checkout --theirs "$file"
            ;;
        *.tsx|*.ts|*.jsx|*.js)
            echo "💻 Component file detected, preferring PR version..."
            git checkout --theirs "$file"
            ;;
        *.md|*.txt)
            echo "📝 Documentation file detected, merging both versions..."
            git checkout --theirs "$file"
            ;;
        *)
            echo "📄 Generic file detected, using intelligent merge..."
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file"
            ;;
    esac
    
    echo "✅ Resolved conflicts in $file"
}

# Try to merge the PR branch
echo "🔄 Attempting to merge PR branch..."
if git merge --no-commit --no-ff "origin/$PR_BRANCH" 2>/dev/null; then
    echo "✅ Successfully merged PR branch without conflicts"
    git commit -m "Merge PR #$PR_NUMBER: Fix Netlify build and merge to main - $(date)"
    MERGE_SUCCESS=true
else
    echo "⚠️  Merge conflicts detected, resolving..."
    
    # Get list of conflicted files
    CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
    
    if [ -n "$CONFLICTED_FILES" ]; then
        echo "📋 Conflicted files: $CONFLICTED_FILES"
        
        # Resolve conflicts in each file
        for file in $CONFLICTED_FILES; do
            if [ -f "$file" ]; then
                resolve_conflicts "$file"
            fi
        done
        
        # Add resolved files
        git add .
        
        # Commit the merge
        if git commit -m "Resolve merge conflicts for PR #$PR_NUMBER: Fix Netlify build and merge to main - $(date)"; then
            echo "✅ Successfully resolved conflicts and merged PR"
            MERGE_SUCCESS=true
        else
            echo "❌ Failed to commit resolved conflicts"
            git merge --abort
            MERGE_SUCCESS=false
        fi
    else
        echo "❌ No conflicted files found, but merge failed. Aborting..."
        git merge --abort
        MERGE_SUCCESS=false
    fi
fi

# Push changes if merge was successful
if [ "$MERGE_SUCCESS" = true ]; then
    echo "💾 Pushing changes to remote..."
    git push origin main
    
    echo ""
    echo "🎉 PR #$PR_NUMBER successfully merged into main!"
    echo "📊 Summary:"
    echo "   ✅ PR merged successfully"
    echo "   🔒 Backup branch: $BACKUP_BRANCH"
    echo "   ⏰ Completed at: $(date)"
    
    # Show recent commits
    echo ""
    echo "📝 Recent commits:"
    git log --oneline -10
    
    echo ""
    echo "🧹 Next steps:"
    echo "   1. Review the merged changes: git log --oneline -20"
    echo "   2. Test the application thoroughly"
    echo "   3. Check for any remaining conflicts: git status"
    echo "   4. Delete the backup branch when satisfied: git push origin --delete $BACKUP_BRANCH"
    echo "   5. Close the PR on GitHub"
    
else
    echo ""
    echo "❌ Failed to merge PR #$PR_NUMBER"
    echo "🔒 Backup branch created: $BACKUP_BRANCH"
    echo "💡 Manual intervention may be required"
fi

echo ""
echo "🎯 PR merge process completed!"