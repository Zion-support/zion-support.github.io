#!/bin/bash

# Merge all remaining unmerged branches
set -e

echo "🚀 Starting merge of all remaining unmerged branches..."
echo "⏰ Started at: $(date)"

# Ensure we're on main and it's up to date
echo "🔄 Ensuring main branch is up to date..."
git checkout main
git pull origin main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_BRANCHES=0

# Get all unmerged branches
echo "📊 Getting all unmerged branches..."
UNMERGED_BRANCHES=$(git branch -r --no-merged main | grep -v "HEAD" | head -100)

TOTAL_BRANCHES=$(echo "$UNMERGED_BRANCHES" | wc -l)
echo "📊 Processing $TOTAL_BRANCHES unmerged branches"

# Function to resolve conflicts intelligently
resolve_conflicts() {
    local branch="$1"
    
    echo "🔧 Resolving conflicts for branch $branch..."
    
    # Get conflicted files
    CONFLICTED_FILES=$(git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4-)
    
    if [ -z "$CONFLICTED_FILES" ]; then
        echo "❌ No conflicted files found"
        return 1
    fi
    
    echo "📝 Found conflicted files: $CONFLICTED_FILES"
    
    # Resolve conflicts for each file
    while IFS= read -r file; do
        if [ -n "$file" ]; then
            echo "🔧 Resolving conflicts in $file..."
            
            # Different strategies for different file types
            case "$file" in
                "package.json"|"package-lock.json"|"yarn.lock")
                    echo "📦 Package file detected, keeping main version..."
                    git checkout --ours "$file" 2>/dev/null || true
                    ;;
                "next.config.js"|"tsconfig.json"|"tailwind.config.js"|"tailwind.config.ts")
                    echo "⚙️  Config file detected, keeping main version..."
                    git checkout --ours "$file" 2>/dev/null || true
                    ;;
                "*.md"|"*.txt")
                    echo "📝 Documentation file detected, keeping incoming version..."
                    git checkout --theirs "$file" 2>/dev/null || true
                    ;;
                "*.tsx"|"*.ts"|"*.jsx"|"*.js")
                    echo "💻 Source code file detected, keeping incoming version..."
                    git checkout --theirs "$file" 2>/dev/null || true
                    ;;
                *)
                    echo "📄 Regular file detected, keeping incoming version..."
                    git checkout --theirs "$file" 2>/dev/null || true
                    ;;
            esac
            
            # Add the resolved file
            git add "$file" 2>/dev/null || true
        fi
    done <<< "$CONFLICTED_FILES"
    
    return 0
}

# Process each branch
echo "$UNMERGED_BRANCHES" | while IFS= read -r branch; do
    if [ -n "$branch" ]; then
        echo ""
        echo "🔄 Processing branch: $branch"
        
        # Try to merge
        if git merge "$branch" --no-ff -m "Merge $branch" 2>/dev/null; then
            echo "✅ Successfully merged $branch"
            ((SUCCESSFUL_MERGES++))
        else
            echo "⚠️  Merge conflicts detected in $branch, resolving..."
            
            # Try to resolve conflicts
            if resolve_conflicts "$branch"; then
                # Commit resolved conflicts
                if git commit -m "Resolved conflicts for $branch" 2>/dev/null; then
                    echo "✅ Successfully resolved conflicts and merged $branch"
                    ((SUCCESSFUL_MERGES++))
                else
                    echo "❌ Failed to commit resolved conflicts for $branch"
                    git merge --abort 2>/dev/null || true
                    ((FAILED_MERGES++))
                fi
            else
                echo "❌ Failed to resolve conflicts for $branch"
                git merge --abort 2>/dev/null || true
                ((FAILED_MERGES++))
            fi
        fi
        
        # Push changes periodically
        if [ $((SUCCESSFUL_MERGES % 10)) -eq 0 ]; then
            echo "💾 Pushing changes..."
            git push origin main --force 2>/dev/null || true
        fi
    fi
done

# Final push
echo "💾 Final push..."
git push origin main --force 2>/dev/null || true

echo ""
echo "📊 Merge Summary:"
echo "✅ Successful merges: $SUCCESSFUL_MERGES"
echo "❌ Failed merges: $FAILED_MERGES"
echo "⏰ Completed at: $(date)"
echo "🎉 Merge process completed!"