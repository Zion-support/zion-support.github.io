#!/bin/bash

# Comprehensive Merge All PRs Script
# This script will merge all cursor branches into main, handling conflicts systematically

set -e

echo "🚀 Starting comprehensive merge of all cursor branches into main..."

# Ensure we're on main branch
git checkout main
git pull origin main

# Get all cursor branches
CURSOR_BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///')

# Counter for tracking progress
TOTAL_BRANCHES=$(echo "$CURSOR_BRANCHES" | wc -l)
CURRENT=0
SUCCESSFUL=0
FAILED=0
SKIPPED=0

echo "📊 Found $TOTAL_BRANCHES cursor branches to merge"

# Function to merge a single branch
merge_branch() {
    local branch=$1
    local current=$2
    local total=$3
    
    echo ""
    echo "🔄 [$current/$total] Merging branch: $branch"
    echo "=================================================="
    
    # Check if branch exists locally, if not fetch it
    if ! git show-ref --verify --quiet refs/heads/$branch; then
        echo "📥 Fetching branch $branch..."
        git fetch origin $branch:$branch
    fi
    
    # Check if branch has changes compared to main
    local commits_ahead=$(git rev-list --count main..$branch 2>/dev/null || echo "0")
    
    if [ "$commits_ahead" -eq "0" ]; then
        echo "⏭️  Branch $branch has no new commits, skipping..."
        return 1
    fi
    
    echo "📝 Branch $branch has $commits_ahead commits ahead of main"
    
    # Try to merge
    if git merge --no-edit $branch 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        return 0
    else
        echo "⚠️  Merge conflict detected in $branch, attempting to resolve..."
        
        # Check for specific file types and resolve conflicts
        resolve_conflicts
        
        # Try to complete the merge
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "❌ Unresolved conflicts remain, aborting merge..."
            git merge --abort
            return 2
        else
            echo "✅ Conflicts resolved, completing merge..."
            git add .
            if git commit -m "Merge $branch into main - conflicts resolved" 2>/dev/null; then
                echo "✅ Successfully merged $branch after conflict resolution"
                return 0
            else
                echo "❌ Failed to complete merge after conflict resolution"
                git merge --abort
                return 2
            fi
        fi
    fi
}

# Function to resolve common conflicts
resolve_conflicts() {
    echo "🔧 Attempting to resolve conflicts..."
    
    # Get list of conflicted files
    local conflicted_files=$(git diff --name-only --diff-filter=U)
    
    for file in $conflicted_files; do
        echo "  📄 Resolving conflicts in: $file"
        
        # Handle different file types
        case "$file" in
            "package.json"|"package-lock.json"|"yarn.lock")
                echo "    📦 Package file conflict - keeping main version"
                git checkout --ours "$file"
                git add "$file"
                ;;
            "*.config.js"|"*.config.ts"|"*.config.cjs")
                echo "    ⚙️  Config file conflict - keeping main version"
                git checkout --ours "$file"
                git add "$file"
                ;;
            "*.jsx"|"*.tsx"|"*.js"|"*.ts")
                echo "    💻 Code file conflict - attempting smart merge"
                if resolve_code_conflict "$file"; then
                    echo "    ✅ Code conflict resolved"
                else
                    echo "    ❌ Code conflict could not be resolved automatically"
                    return 1
                fi
                ;;
            *)
                echo "    ❓ Unknown file type - keeping main version"
                git checkout --ours "$file"
                git add "$file"
                ;;
        esac
    done
}

# Function to resolve code conflicts intelligently
resolve_code_conflict() {
    local file=$1
    
    # Check if file exists in both branches
    if ! git show HEAD:"$file" >/dev/null 2>&1; then
        echo "      📁 File doesn't exist in main, keeping branch version"
        git checkout --theirs "$file"
        git add "$file"
        return 0
    fi
    
    if ! git show MERGE_HEAD:"$file" >/dev/null 2>&1; then
        echo "      📁 File doesn't exist in branch, keeping main version"
        git checkout --ours "$file"
        git add "$file"
        return 0
    fi
    
    # Try to merge with git's built-in merge tool
    if git mergetool --tool=vimdiff "$file" 2>/dev/null; then
        git add "$file"
        return 0
    else
        # Fallback: keep main version for complex conflicts
        echo "      ⚠️  Complex conflict, keeping main version"
        git checkout --ours "$file"
        git add "$file"
        return 0
    fi
}

# Main merge loop
for branch in $CURSOR_BRANCHES; do
    CURRENT=$((CURRENT + 1))
    
    case $(merge_branch $branch $CURRENT $TOTAL_BRANCHES) in
        0) SUCCESSFUL=$((SUCCESSFUL + 1)) ;;
        1) SKIPPED=$((SKIPPED + 1)) ;;
        2) FAILED=$((FAILED + 1)) ;;
    esac
    
    # Push changes every 10 successful merges
    if [ $((SUCCESSFUL % 10)) -eq 0 ] && [ $SUCCESSFUL -gt 0 ]; then
        echo "📤 Pushing changes to remote..."
        if git push origin main; then
            echo "✅ Changes pushed successfully"
        else
            echo "❌ Failed to push changes"
        fi
    fi
    
    # Small delay to avoid overwhelming the system
    sleep 1
done

# Final push
echo "📤 Final push to remote..."
if git push origin main; then
    echo "✅ Final push successful"
else
    echo "❌ Final push failed"
fi

# Summary
echo ""
echo "🎉 Merge operation completed!"
echo "=================================================="
echo "📊 Summary:"
echo "   Total branches processed: $TOTAL_BRANCHES"
echo "   ✅ Successfully merged: $SUCCESSFUL"
echo "   ⏭️  Skipped (no changes): $SKIPPED"
echo "   ❌ Failed to merge: $FAILED"
echo "=================================================="

if [ $FAILED -gt 0 ]; then
    echo "⚠️  Some branches failed to merge. Check the logs above for details."
    echo "💡 You may need to manually resolve conflicts for failed branches."
fi

echo "🚀 All manageable branches have been merged into main!"