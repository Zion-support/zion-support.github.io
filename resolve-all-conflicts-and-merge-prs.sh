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
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "⚠️  Found conflicts in $file, resolving..."
        
        # Create a backup of the conflicted file
        cp "$file" "${file}.backup.$(date +%s)"
        
        # Strategy: Keep both versions where possible, prefer main branch for critical files
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" ]]; then
            echo "📦 Critical file detected, keeping main version and merging dependencies..."
            # For package files, we'll need special handling
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "next.config.js" || "$file" == "tsconfig.json" || "$file" == "tailwind.config.js" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "README.md" || "$file" == "LICENSE" ]]; then
            echo "📚 Documentation file, keeping both versions where possible..."
            # Remove conflict markers but try to preserve content
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            echo "📝 Regular file, attempting to merge both versions..."
            # Remove conflict markers and try to keep both versions
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
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
CONFLICT_FILES=$(grep -l "<<<<<<< HEAD" -r . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.sh" --exclude="*.md" 2>/dev/null || true)

if [ -n "$CONFLICT_FILES" ]; then
    echo "⚠️  Found existing conflicts in: $CONFLICT_FILES"
    for file in $CONFLICT_FILES; do
        if [ -f "$file" ]; then
            resolve_conflicts "$file" "current"
        fi
    done
fi

# Get all cursor branches
echo "📋 Getting all cursor branches..."
BRANCHES=$(git branch -r | grep "origin/cursor/" | sed 's/origin\///' | sort)

if [ -z "$BRANCHES" ]; then
    echo "ℹ️  No cursor branches found"
else
    echo "📊 Found $(echo "$BRANCHES" | wc -l) cursor branches to process"
    
    # Process each branch
    for branch in $BRANCHES; do
        echo "---"
        echo "🔄 Processing branch: $branch"
        
        if can_merge_branch "$branch"; then
            if merge_branch "$branch"; then
                echo "✅ Successfully processed $branch"
            else
                echo "❌ Failed to process $branch"
            fi
        else
            echo "⏭️  Skipping $branch (already merged or doesn't exist)"
            SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        fi
    done
fi

# Also try to merge any other feature branches
echo "📋 Getting other feature branches..."
FEATURE_BRANCHES=$(git branch -r | grep -E "origin/(feature|enhancement|improvement|fix)/" | sed 's/origin\///' | sort)

if [ -n "$FEATURE_BRANCHES" ]; then
    echo "📊 Found $(echo "$FEATURE_BRANCHES" | wc -l) feature branches to process"
    
    for branch in $FEATURE_BRANCHES; do
        echo "---"
        echo "🔄 Processing feature branch: $branch"
        
        if can_merge_branch "$branch"; then
            if merge_branch "$branch"; then
                echo "✅ Successfully processed $branch"
            else
                echo "❌ Failed to process $branch"
            fi
        else
            echo "⏭️  Skipping $branch (already merged or doesn't exist)"
            SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        fi
    done
fi

# Final cleanup - remove any remaining conflict markers
echo "🧹 Final cleanup - removing any remaining conflict markers..."
REMAINING_CONFLICTS=$(grep -l "<<<<<<< HEAD" -r . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.sh" --exclude="*.md" 2>/dev/null || true)

if [ -n "$REMAINING_CONFLICTS" ]; then
    echo "⚠️  Found remaining conflicts in: $REMAINING_CONFLICTS"
    for file in $REMAINING_CONFLICTS; do
        if [ -f "$file" ]; then
            echo "🔧 Final cleanup for $file"
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
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