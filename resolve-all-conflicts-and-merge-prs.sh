#!/bin/bash

# Comprehensive script to resolve all merge conflicts and merge open PRs
set -e

echo "🚀 Starting comprehensive merge conflict resolution and PR merging..."
echo "⏰ Started at: $(date)"
echo "---"

# Create a backup branch
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_BRANCHES=0

# Function to resolve conflicts in a file
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
    if grep -q "        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/        elif [[ "$file" == "README.md" || "$file" == "LICENSE" ]]; then
            echo "📚 Documentation file, keeping both versions where possible..."
            # Remove conflict markers but try to preserve content
            sed -i '/        else
            echo "📝 Regular file, attempting to merge both versions..."
            # Remove conflict markers and try to keep both versions
            sed -i '/        fi
        
        echo "✅ Resolved conflicts in $file"
        CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
    fi
}

# Function to check if a branch can be merged
can_merge_branch() {
    local branch="$1"
    
    # Skip if branch doesn't exist
    if ! git ls-remote --heads origin "$branch" > /dev/null 2>&1; then
        return 1
    fi
    
    # Skip if branch is already merged
    if git branch --merged main | grep -q "$branch"; then
        return 1
    fi
    
    return 0
}

# Function to merge a single branch
merge_branch() {
    local branch="$1"
    
    echo "🔄 Attempting to merge $branch..."
    
    # Fetch the latest version of the branch
    git fetch origin "$branch"
    
    # Try to merge
    if git merge --no-commit --no-ff "origin/$branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        git commit -m "Merge $branch into main - $(date)"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        return 0
    else
        echo "⚠️  Merge conflicts detected in $branch, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
            git commit -m "Resolve merge conflicts for $branch - $(date)"
            
            echo "✅ Successfully resolved conflicts and merged $branch"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            return 0
        else
            echo "❌ No conflicted files found, but merge failed"
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# First, resolve any existing conflicts in the current working directory
echo "🔍 Checking for existing merge conflicts..."
CONFLICT_FILES=$(grep -l "        fi
    done
fi

# Commit any final changes
if ! git diff --quiet; then
    echo "💾 Committing final cleanup changes..."
    git add .
    git commit -m "Final cleanup - resolve remaining conflicts - $(date)"
fi

# Push changes to main
echo "🚀 Pushing changes to main..."
git push origin main

# Summary
echo "---"
echo "📊 Merge Summary:"
echo "✅ Successful merges: $SUCCESSFUL_MERGES"
echo "❌ Failed merges: $FAILED_MERGES"
echo "🔧 Conflict resolutions: $CONFLICT_RESOLUTIONS"
echo "⏭️  Skipped branches: $SKIPPED_BRANCHES"
echo "⏰ Completed at: $(date)"

if [ $FAILED_MERGES -eq 0 ]; then
    echo "🎉 All merges completed successfully!"
else
    echo "⚠️  Some merges failed. Check the logs above for details."
fi

echo "---"
echo "🔒 Backup branch created: $BACKUP_BRANCH"
echo "📤 Changes pushed to main branch"
echo "✅ Script completed!"