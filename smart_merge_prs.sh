#!/bin/bash

# Smart PR merge script that handles one PR at a time
set -e

echo "🚀 Starting smart PR merge process..."
echo "⏰ Started at: $(date)"
echo "---"

# Initialize counters
SUCCESSFUL_MERGES=0
FAILED_MERGES=0
CONFLICT_RESOLUTIONS=0
SKIPPED_PRS=0

# Function to resolve merge conflicts
resolve_conflicts() {
    local file="$1"
    local branch="$2"
    
    echo "🔧 Resolving conflicts in $file for branch $branch..."
    
    # Check if file has merge conflicts
    if grep -q "<<<<<<< HEAD" "$file"; then
        echo "⚠️  Found conflicts in $file, resolving..."
        
        # Strategy: Keep both versions where possible, prefer main branch for critical files
        if [[ "$file" == "package.json" || "$file" == "package-lock.json" || "$file" == "yarn.lock" ]]; then
            echo "📦 Critical file detected, keeping main version..."
            # For package files, keep main version
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        elif [[ "$file" == "tsconfig.json" || "$file" == "vite.config.ts" || "$file" == "tailwind.config.ts" ]]; then
            echo "⚙️  Config file detected, keeping main version..."
            # For config files, keep main version
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        else
            echo "📝 Regular file, attempting to merge both versions..."
            # For regular files, try to merge both versions
            sed -i '/<<<<<<< HEAD/,/=======/d' "$file"
            sed -i '/>>>>>>> /d' "$file"
        fi
        
        echo "✅ Resolved conflicts in $file"
    else
        echo "✅ No conflicts found in $file"
    fi
}

# Function to merge a single PR
merge_single_pr() {
    local pr_number="$1"
    local branch_name="$2"
    
    echo "📋 Processing PR #$pr_number: $branch_name"
    
    # Fetch the branch
    echo "🔄 Fetching branch $branch_name..."
    git fetch origin "$branch_name"
    
    # Check if branch is already up to date
    if git merge-base --is-ancestor HEAD "origin/$branch_name" 2>/dev/null; then
        echo "⏭️  Branch $branch_name is already up to date, skipping..."
        SKIPPED_PRS=$((SKIPPED_PRS + 1))
        return 0
    fi
    
    # Attempt to merge
    echo "🔄 Attempting to merge $branch_name (PR #$pr_number)..."
    
    if git merge "origin/$branch_name" --no-edit; then
        echo "✅ Successfully merged $branch_name"
        SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
        
        # Push immediately after successful merge
        echo "💾 Pushing changes to remote..."
        if git push origin main; then
            echo "✅ Successfully pushed to remote"
        else
            echo "⚠️  Push failed, will need to pull first"
            return 1
        fi
    else
        echo "⚠️  Merge conflicts detected in $branch_name, resolving..."
        
        # Get list of conflicted files
        CONFLICTED_FILES=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$CONFLICTED_FILES" ]; then
            echo "📋 Conflicted files: $CONFLICTED_FILES"
            
            # Resolve conflicts in each file
            for file in $CONFLICTED_FILES; do
                if [ -f "$file" ]; then
                    resolve_conflicts "$file" "$branch_name"
                fi
            done
            
            # Add all resolved files
            echo "📝 Adding resolved files..."
            git add .
            
            # Commit the merge
            echo "💾 Committing merge resolution..."
            git commit -m "Resolve merge conflicts for PR #$pr_number: $branch_name - $(date)"
            
            echo "✅ Successfully resolved conflicts and merged $branch_name"
            SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
            CONFLICT_RESOLUTIONS=$((CONFLICT_RESOLUTIONS + 1))
            
            # Push immediately after successful conflict resolution
            echo "💾 Pushing changes to remote..."
            if git push origin main; then
                echo "✅ Successfully pushed to remote"
            else
                echo "⚠️  Push failed, will need to pull first"
                return 1
            fi
        else
            echo "❌ No conflicted files found but merge failed"
            git merge --abort
            FAILED_MERGES=$((FAILED_MERGES + 1))
            return 1
        fi
    fi
    
    return 0
}

# Get list of open PRs from GitHub
echo "🔄 Fetching open PRs from GitHub..."
curl -s "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=100" > prs.json

# Extract PR numbers and branch names
echo "📋 Starting PR processing..."
echo "---"

# Process PRs one by one
PR_COUNT=0

# Use awk to parse the JSON and extract PR number and branch name
awk '
/"number":/ {
    number = $2
    gsub(/,/, "", number)
    pr_number = number
}
/"ref":/ && !/compare_url/ {
    ref = substr($0, index($0, ":") + 3)
    gsub(/,$/, "", ref)
    gsub(/\"/, "", ref)
    if (ref != "ref" && ref != "href" && ref != "archive_url" && ref != "git_refs_url" && ref != "main") {
        printf "%s:%s\n", pr_number, ref
    }
}
' prs.json | while IFS=: read -r PR_NUMBER BRANCH_NAME; do
    if [ -n "$PR_NUMBER" ] && [ -n "$BRANCH_NAME" ]; then
        PR_COUNT=$((PR_COUNT + 1))
        
        echo "📋 Processing PR #$PR_NUMBER: $BRANCH_NAME"
        
        # Try to merge this PR
        if merge_single_pr "$PR_NUMBER" "$BRANCH_NAME"; then
            echo "✅ PR #$PR_NUMBER processed successfully"
        else
            echo "❌ PR #$PR_NUMBER failed to merge"
            FAILED_MERGES=$((FAILED_MERGES + 1))
        fi
        
        echo "📊 Progress: $SUCCESSFUL_MERGES successful, $FAILED_MERGES failed, $CONFLICT_RESOLUTIONS conflicts resolved, $SKIPPED_PRS skipped"
        echo "---"
        
        # If we've processed 10 PRs, take a break and push
        if [ $SUCCESSFUL_MERGES -gt 0 ] && [ $((SUCCESSFUL_MERGES % 10)) -eq 0 ]; then
            echo "🔄 Taking a break after $SUCCESSFUL_MERGES successful merges..."
            echo "💾 Ensuring all changes are pushed..."
            git push origin main
            echo "---"
        fi
    fi
done

echo ""
echo "🎉 PR merge process completed!"
echo "📊 Final Results:"
echo "   ✅ Successful merges: $SUCCESSFUL_MERGES"
echo "   ❌ Failed merges: $FAILED_MERGES"
echo "   🔧 Conflicts resolved: $CONFLICT_RESOLUTIONS"
echo "   ⏭️  Skipped PRs: $SKIPPED_PRS"
echo "   📋 Total PRs processed: $PR_COUNT"
echo ""
echo "⏰ Completed at: $(date)"