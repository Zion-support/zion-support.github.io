#!/bin/bash

# Merge recent PRs and resolve conflicts efficiently
set -e

echo "🚀 Starting targeted merge of recent PRs..."
echo "⏰ Started at: $(date)"

# Ensure we're on main and up to date
echo "🔄 Updating main branch..."
git checkout main
git pull origin main

# Get recent branches (last 50)
echo "📊 Getting recent branches to merge..."
RECENT_BRANCHES=$(git branch -r | grep -E "(cursor|feat|fix|content)" | head -50 | sed 's/origin\///' | sort)

echo "📊 Found $(echo "$RECENT_BRANCHES" | wc -l) recent branches to process"

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_BRANCHES=0
CONFLICT_RESOLUTIONS=0

# Function to resolve conflicts
resolve_conflicts() {
    local file="$1"
    
    if [ ! -f "$file" ]; then
        return
    fi
    
    echo "🔧 Resolving conflicts in $file..."
    
    # Different strategies for different file types
    case "$file" in
        "package.json"|"package-lock.json")
            echo "📦 Package file - keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "next.config.js"|"tsconfig.json"|"tailwind.config.js"|"netlify.toml")
            echo "⚙️  Config file - keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "app/layout.tsx"|"app/page.tsx"|"src/App.tsx")
            echo "🏗️  Main app file - keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        *.tsx|*.ts|*.jsx|*.js)
            echo "💻 Component file - preferring incoming changes..."
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
            ;;
        *)
            echo "📄 Generic file - using intelligent merge..."
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
            ;;
    esac
    
    CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    echo "🔄 Attempting to merge $branch..."
    
    # Skip if already merged
    if git branch --merged main | grep -q "$branch"; then
        echo "⏭️  $branch already merged, skipping..."
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        return 0
    fi
    
    # Fetch the branch
    git fetch origin "$branch" 2>/dev/null || {
        echo "❌ Failed to fetch $branch"
        FAILED_MERGES=$((FAILED_MERGES + 1))
        return 1
    }
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file"
                fi
            done
            
            # Add and commit
            git add .
            if git commit -m "Resolve merge conflicts for $branch - $(date)"; then
                echo "✅ Successfully resolved conflicts and merged $branch"
                SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
                return 0
            else
                echo "❌ Failed to commit resolved conflicts for $branch"
                git merge --abort
                FAILED_MERGES=$((FAILED_MERGES + 1))
                return 1
            fi
        else
            echo "❌ No conflicted files found, aborting merge..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Process branches
CURRENT=0
for branch in $RECENT_BRANCHES; do
    CURRENT=$((CURRENT + 1))
    echo "📋 [$CURRENT/50] Processing: $branch"
    
    if merge_branch "$branch"; then
        echo "✅ Branch $branch processed successfully"
    else
        echo "❌ Failed to process branch $branch"
    fi
    
    echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved"
    echo "---"
    
    # Push every 10 successful merges
    if [ $((SUCCESSFUL_MERGES % 10)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        echo "💾 Pushing progress..."
        git push origin main
    fi
done

# Final push
echo "💾 Pushing final changes..."
git push origin main

# Summary
echo ""
echo "🎉 Merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
echo "⏰ Completed at: $(date)"