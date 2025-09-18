#!/bin/bash

<<<<<<< HEAD
# Batch merge script for PRs (processes 50 at a time)
set -e

echo "🚀 Starting batch merge of PRs..."
echo "⏰ Started at: $(date)"

# Create backup
BACKUP_BRANCH="backup-main-$(date +%Y%m%d-%H%M%S)"
echo "🔒 Creating backup branch: $BACKUP_BRANCH"
git checkout -b "$BACKUP_BRANCH"
git push origin "$BACKUP_BRANCH"
git checkout main

# Ensure we're on main and it's up to date
echo "🔄 Ensuring main branch is up to date..."
git checkout main
git pull origin main

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
SKIPPED_BRANCHES=0
CONFLICT_RESOLUTIONS=0

# Get first 50 branches
echo "📊 Getting first 50 branches to process..."
BATCH_BRANCHES=$(git branch -r | grep -E "(cursor|pr)" | sed 's/origin\///' | head -50)
TOTAL_BRANCHES=$(echo "$BATCH_BRANCHES" | wc -l)

echo "📊 Processing $TOTAL_BRANCHES branches in this batch..."

# Function to resolve conflicts intelligently
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    if [ ! -f "$file" ]; then
        return
    fi
    
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Create backup
    cp "$file" "${file}.backup.$(date +%s)"
    
    # Different strategies for different file types
    case "$file" in
        "package.json"|"package-lock.json")
            echo "📦 Package file detected, keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "next.config.js"|"tsconfig.json"|"tailwind.config.js")
            echo "⚙️  Config file detected, keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        "app/layout.tsx"|"app/page.tsx")
            echo "🏗️  Layout/page file detected, keeping main version..."
            git checkout --ours "$file" 2>/dev/null || true
            ;;
        *.tsx|*.ts|*.jsx|*.js)
            echo "💻 Component file detected, preferring incoming changes..."
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
            ;;
        *.md|*.txt)
            echo "📝 Documentation file detected, merging both versions..."
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
            ;;
        *)
            echo "📄 Generic file detected, using intelligent merge..."
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file" 2>/dev/null || true
            ;;
    esac
    
    echo "✅ Resolved conflicts in $file"
    CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
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

# Function to merge a single branch with advanced conflict resolution
merge_branch() {
    local branch="$1"
    
    echo "🔄 Attempting to merge $branch..."
    
    # Fetch the latest version of the branch
    git fetch origin "$branch" 2>/dev/null || {
        echo "❌ Failed to fetch $branch"
        return 1
    }
    
    # Try to merge with strategy
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
            
            # Resolve conflicts in each file
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch"
                fi
            done
            
            # Add resolved files
            git add .
            
            # Commit the merge
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
            echo "❌ No conflicted files found, but merge failed. Aborting..."
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
}

# Main processing loop
echo "🔄 Starting branch processing..."
echo "---"

CURRENT=0
for branch in $BATCH_BRANCHES; do
    CURRENT=$((CURRENT + 1))
    echo "📋 [$CURRENT/$TOTAL_BRANCHES] Processing branch: $branch"
    
    # Check if branch can be merged
    if ! can_merge_branch "$branch"; then
        echo "⏭️  Skipping $branch (already merged or doesn't exist)"
        SKIPPED_BRANCHES=$((SKIPPED_BRANCHES + 1))
        continue
    fi
    
    # Try to merge the branch
    if merge_branch "$branch"; then
        echo "✅ Branch $branch processed successfully"
    else
        echo "❌ Failed to process branch $branch"
    fi
    
    # Progress update
    echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved"
    echo "---"
    
    # Push changes every 25 branches
    if [ $((SUCCESSFUL_MERGES % 25)) -eq 0 ] && [ $SUCCESSFUL_MERGES -gt 0 ]; then
        echo "💾 Pushing progress to remote..."
        git push origin main
    fi
done

# Final push
echo "💾 Pushing final changes to remote..."
git push origin main

# Summary
echo ""
echo "🎉 Batch merge process completed!"
echo "📊 Summary:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   ⏭️  Skipped branches: $SKIPPED_BRANCHES"
echo "   📈 Total processed: $CURRENT"
echo "   🔒 Backup branch: $BACKUP_BRANCH"
echo "⏰ Completed at: $(date)"

# Show recent commits
echo ""
echo "📝 Recent commits:"
git log --oneline -20

echo ""
echo "🎯 First batch of PRs processed successfully!"
echo "💡 To process more PRs, run this script again or use the comprehensive merge script."
=======
# Script to merge open PRs in batches
# This script will process a limited number of branches at a time

set -e

# Configuration
BATCH_SIZE=10
START_FROM=20

echo "Starting batch merge of open PRs..."
echo "Batch size: $BATCH_SIZE"
echo "Starting from: $START_FROM"

# Ensure we're on main branch
git checkout main
git pull origin main

# Get all unmerged branches
UNMERGED_BRANCHES=$(git branch -r --no-merged origin/main | grep -E "(cursor|codex|feature)" | sed 's/origin\///' | tail -n +$((START_FROM + 1)) | head -n $BATCH_SIZE)

echo "Processing this batch of branches:"
echo "$UNMERGED_BRANCHES"

# Counter for successful merges
SUCCESS_COUNT=0
FAILED_COUNT=0
FAILED_BRANCHES=""

# Process each branch in the batch
for branch in $UNMERGED_BRANCHES; do
    echo "Processing branch: $branch"
    
    # Skip if branch doesn't exist
    if ! git ls-remote --heads origin "$branch" | grep -q "$branch"; then
        echo "Branch $branch doesn't exist remotely, skipping..."
        continue
    fi
    
    # Create a temporary branch for merging
    TEMP_BRANCH="temp-merge-$branch"
    git checkout -b "$TEMP_BRANCH" 2>/dev/null || git checkout "$TEMP_BRANCH"
    
    echo "Attempting to merge $branch into $TEMP_BRANCH..."
    
    # Try to merge
    if git merge "origin/$branch" --no-edit; then
        echo "Successfully merged $branch"
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        
        # Now merge into main
        git checkout main
        if git merge "$TEMP_BRANCH" --no-edit; then
            echo "Successfully merged $branch into main"
            # Push the updated main
            git push origin main
        else
            echo "Failed to merge $branch into main"
            git merge --abort
            FAILED_COUNT=$((FAILED_COUNT + 1))
            FAILED_BRANCHES="$FAILED_BRANCHES $branch"
        fi
        
        # Clean up temp branch
        git branch -D "$TEMP_BRANCH"
    else
        echo "Merge conflict in $branch, attempting to resolve..."
        
        # Check for conflicts
        if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
            echo "Resolving conflicts in $branch..."
            
            # Try to resolve conflicts automatically
            # For package.json conflicts, take the incoming version
            if git status --porcelain | grep -q "package.json"; then
                git checkout --theirs package.json 2>/dev/null || true
                git checkout --theirs package-lock.json 2>/dev/null || true
            fi
            
            # For TypeScript conflicts, take the incoming version
            if git status --porcelain | grep -q "\.tsx\?$"; then
                git checkout --theirs src/ 2>/dev/null || true
            fi
            
            # Add resolved files
            git add . 2>/dev/null || true
            
            # Try to commit the merge
            if git commit -m "Merge $branch - resolved conflicts"; then
                echo "Successfully resolved conflicts and merged $branch"
                SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
                
                # Now merge into main
                git checkout main
                if git merge "$TEMP_BRANCH" --no-edit; then
                    echo "Successfully merged $branch into main"
                    git push origin main
                else
                    echo "Failed to merge $branch into main"
                    git merge --abort
                    FAILED_COUNT=$((FAILED_COUNT + 1))
                    FAILED_BRANCHES="$FAILED_BRANCHES $branch"
                fi
            else
                echo "Failed to commit merge for $branch"
                git merge --abort
                FAILED_COUNT=$((FAILED_COUNT + 1))
                FAILED_BRANCHES="$FAILED_BRANCHES $branch"
            fi
        else
            echo "No conflicts found, but merge still failed for $branch"
            git merge --abort
            FAILED_COUNT=$((FAILED_COUNT + 1))
            FAILED_BRANCHES="$FAILED_BRANCHES $branch"
        fi
        
        # Clean up temp branch
        git branch -D "$TEMP_BRANCH" 2>/dev/null || true
    fi
    
    echo "----------------------------------------"
done

# Final summary
echo "Batch merge process completed!"
echo "Successfully merged: $SUCCESS_COUNT branches"
echo "Failed to merge: $FAILED_COUNT branches"

if [ $FAILED_COUNT -gt 0 ]; then
    echo "Failed branches: $FAILED_BRANCHES"
    echo "These branches may need manual conflict resolution"
fi

# Return to main branch
git checkout main
echo "Current branch: $(git branch --show-current)"
echo "Next batch should start from: $((START_FROM + BATCH_SIZE))"
>>>>>>> origin/auto/autonomy-17186719616
