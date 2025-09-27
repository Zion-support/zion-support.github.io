#!/bin/bash

# Efficient Merge Script for Large Number of Branches
# This script processes branches in optimized batches with conflict resolution

set -e

echo "🚀 Starting efficient merge process for all branches..."

# Function to get branches by priority
get_priority_branches() {
    echo "📋 Gathering branches by priority..."
    
    # Priority 1: Recent cursor branches (most likely to have conflicts)
    echo "🔍 Getting recent cursor branches..."
    local cursor_branches=($(git branch -r | grep "cursor/" | head -100 | sort -V))
    
    # Priority 2: Codex branches
    echo "🔍 Getting codex branches..."
    local codex_branches=($(git branch -r | grep "codex/" | head -100 | sort -V))
    
    # Priority 3: Chore branches
    echo "🔍 Getting chore branches..."
    local chore_branches=($(git branch -r | grep "chore/" | head -100 | sort -V))
    
    # Priority 4: Feature branches
    echo "🔍 Getting feature branches..."
    local feature_branches=($(git branch -r | grep "feature/" | head -50 | sort -V))
    
    # Combine all branches
    local all_branches=("${cursor_branches[@]}" "${codex_branches[@]}" "${chore_branches[@]}" "${feature_branches[@]}")
    
    # Remove duplicates and return
    printf '%s\n' "${all_branches[@]}" | sort -u
}

# Advanced conflict resolution
resolve_merge_conflict() {
    local file="$1"
    echo "🔧 Resolving conflict in: $file"
    
    # Determine resolution strategy based on file type
    case "$file" in
        *.json)
            # For JSON files, prefer main branch (usually more complete)
            git checkout --ours "$file"
            echo "✅ Kept main branch version for JSON: $file"
            ;;
        *.tsx|*.ts|*.jsx|*.js)
            # For TypeScript/JavaScript files, prefer main branch
            git checkout --ours "$file"
            echo "✅ Kept main branch version for TypeScript/JavaScript: $file"
            ;;
        *.css|*.scss)
            # For CSS files, prefer main branch
            git checkout --ours "$file"
            echo "✅ Kept main branch version for CSS: $file"
            ;;
        *.md)
            # For documentation, prefer main branch
            git checkout --ours "$file"
            echo "✅ Kept main branch version for documentation: $file"
            ;;
        package.json|package-lock.json|yarn.lock|pnpm-lock.yaml)
            # For package files, always prefer main branch
            git checkout --ours "$file"
            echo "✅ Kept main branch version for package file: $file"
            ;;
        *.config.*|tsconfig.json|next.config.js|tailwind.config.js)
            # For config files, prefer main branch
            git checkout --ours "$file"
            echo "✅ Kept main branch version for config: $file"
            ;;
        *)
            # Default: prefer main branch
            git checkout --ours "$file"
            echo "✅ Kept main branch version for: $file"
            ;;
    esac
}

# Function to merge a single branch
merge_single_branch() {
    local branch="$1"
    local branch_num="$2"
    local total="$3"
    
    echo ""
    echo "🔄 [$branch_num/$total] Processing: $branch"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch"; then
        echo "⚠️  Branch $branch does not exist, skipping..."
        return 1
    fi
    
    # Check if branch has new commits
    if ! git log --oneline "$branch" --not origin/main | head -1 > /dev/null 2>&1; then
        echo "⏭️  Branch has no new commits, skipping"
        return 0
    fi
    
    # Attempt merge
    if git merge "$branch" --no-edit --no-ff; then
        echo "✅ Successfully merged: $branch"
        return 0
    else
        echo "⚠️  Merge conflict in: $branch"
        
        # Get conflicted files
        local conflicted_files=$(git diff --name-only --diff-filter=U)
        
        if [ -n "$conflicted_files" ]; then
            echo "🔧 Resolving conflicts in $(echo $conflicted_files | wc -w) files..."
            
            # Resolve each conflicted file
            for file in $conflicted_files; do
                resolve_merge_conflict "$file"
            done
            
            # Stage resolved files
            git add .
            
            # Complete the merge
            if git commit --no-edit; then
                echo "✅ Successfully resolved conflicts and merged: $branch"
                return 0
            else
                echo "❌ Failed to commit resolved conflicts for: $branch"
                git merge --abort
                return 1
            fi
        else
            echo "❌ No conflicted files found but merge failed for: $branch"
            git merge --abort
            return 1
        fi
    fi
}

# Main execution
echo "📍 Ensuring we're on main branch..."
git checkout main
git pull origin main

# Get all branches to merge
ALL_BRANCHES=($(get_priority_branches))
TOTAL_BRANCHES=${#ALL_BRANCHES[@]}

echo "📊 Found $TOTAL_BRANCHES branches to process"

if [ $TOTAL_BRANCHES -eq 0 ]; then
    echo "✅ No branches found to merge!"
    exit 0
fi

# Process branches in optimized batches
BATCH_SIZE=25
BATCHES=$(( (TOTAL_BRANCHES + BATCH_SIZE - 1) / BATCH_SIZE ))

echo "📊 Processing $TOTAL_BRANCHES branches in $BATCHES batches of $BATCH_SIZE"

total_successful=0
total_failed=0
total_skipped=0

for ((batch=0; batch<BATCHES; batch++)); do
    echo ""
    echo "🔄 Processing Batch $((batch + 1))/$BATCHES"
    
    start_idx=$((batch * BATCH_SIZE))
    end_idx=$(((batch + 1) * BATCH_SIZE))
    
    if [ $end_idx -gt $TOTAL_BRANCHES ]; then
        end_idx=$TOTAL_BRANCHES
    fi
    
    batch_successful=0
    batch_failed=0
    batch_skipped=0
    
    for ((i=start_idx; i<end_idx; i++)); do
        branch="${ALL_BRANCHES[i]}"
        branch_num=$((i + 1))
        
        if merge_single_branch "$branch" "$branch_num" "$TOTAL_BRANCHES"; then
            ((batch_successful++))
            ((total_successful++))
        else
            ((batch_failed++))
            ((total_failed++))
        fi
        
        echo "📊 Progress: $branch_num/$TOTAL_BRANCHES branches processed"
    done
    
    echo "📊 Batch $((batch + 1)) Summary: ✅ $batch_successful successful, ❌ $batch_failed failed"
    
    # Push changes after each batch (if there were successful merges)
    if [ $batch_successful -gt 0 ]; then
        echo "🚀 Pushing batch $((batch + 1)) changes..."
        if git push origin main; then
            echo "✅ Batch $((batch + 1)) changes pushed successfully!"
        else
            echo "⚠️  Failed to push batch $((batch + 1)) changes, continuing..."
        fi
    fi
    
    # Brief pause between batches
    sleep 2
done

echo ""
echo "🎉 EFFICIENT MERGE PROCESS COMPLETED!"
echo "📊 Final Summary:"
echo "✅ Total Successful Merges: $total_successful"
echo "❌ Total Failed Merges: $total_failed"
echo "📈 Total Processed: $((total_successful + total_failed))"
echo "📋 Total Available: $TOTAL_BRANCHES"

# Final status check
echo ""
echo "🔍 Final repository status:"
git status

echo ""
echo "📈 Latest commits:"
git log --oneline -5

echo ""
echo "✅ Efficient merge process completed successfully!"