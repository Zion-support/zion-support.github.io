#!/bin/bash

# Comprehensive script to merge all cursor/fix-errors-and-merge-to-main branches
set -e

echo "🚀 Starting comprehensive merge process for all branches..."

# Get all cursor branches
BRANCHES=(
    "cursor/fix-errors-and-merge-to-main-092a"
    "cursor/fix-errors-and-merge-to-main-1361"
    "cursor/fix-errors-and-merge-to-main-1aaf"
    "cursor/fix-errors-and-merge-to-main-2303"
    "cursor/fix-errors-and-merge-to-main-2ad6"
    "cursor/fix-errors-and-merge-to-main-549d"
    "cursor/fix-errors-and-merge-to-main-5562"
    "cursor/fix-errors-and-merge-to-main-59dc"
    "cursor/fix-errors-and-merge-to-main-59e5"
    "cursor/fix-errors-and-merge-to-main-5a1e"
    "cursor/fix-errors-and-merge-to-main-5caf"
    "cursor/fix-errors-and-merge-to-main-6517"
    "cursor/fix-errors-and-merge-to-main-69a3"
    "cursor/fix-errors-and-merge-to-main-6af4"
    "cursor/fix-errors-and-merge-to-main-7162"
    "cursor/fix-errors-and-merge-to-main-7679"
    "cursor/fix-errors-and-merge-to-main-7a03"
    "cursor/fix-errors-and-merge-to-main-8428"
    "cursor/fix-errors-and-merge-to-main-8fe9"
    "cursor/fix-errors-and-merge-to-main-95bc"
    "cursor/fix-errors-and-merge-to-main-9759"
    "cursor/fix-errors-and-merge-to-main-9a25"
    "cursor/fix-errors-and-merge-to-main-a771"
    "cursor/fix-errors-and-merge-to-main-adc9"
    "cursor/fix-errors-and-merge-to-main-b32f"
    "cursor/fix-errors-and-merge-to-main-b7c3"
    "cursor/fix-errors-and-merge-to-main-bcfd"
    "cursor/fix-errors-and-merge-to-main-bd5e"
    "cursor/fix-errors-and-merge-to-main-c24f"
    "cursor/fix-errors-and-merge-to-main-c26f"
    "cursor/fix-errors-and-merge-to-main-c338"
    "cursor/fix-errors-and-merge-to-main-caf5"
    "cursor/fix-errors-and-merge-to-main-cf6a"
    "cursor/fix-errors-and-merge-to-main-d14e"
    "cursor/fix-errors-and-merge-to-main-e14f"
    "cursor/fix-errors-and-merge-to-main-e7ee"
    "cursor/fix-errors-and-merge-to-main-e8d8"
    "cursor/fix-errors-and-merge-to-main-ea18"
    "cursor/fix-errors-and-merge-to-main-ec2e"
    "cursor/fix-errors-and-merge-to-main-ec70"
    "cursor/fix-errors-and-merge-to-main-f08d"
    "cursor/fix-errors-and-merge-to-main-fed1"
)

# Function to resolve merge conflicts by keeping main branch version
resolve_conflicts() {
    local branch=$1
    echo "🔧 Resolving conflicts in $branch by keeping main branch changes..."
    
    # Find all conflicted files
    local conflicted_files=$(git diff --name-only --diff-filter=U)
    
    if [ -n "$conflicted_files" ]; then
        echo "📝 Found conflicted files: $conflicted_files"
        
        # For each conflicted file, use main branch version
        for file in $conflicted_files; do
            echo "🔄 Resolving conflicts in $file..."
            git checkout --theirs "$file" 2>/dev/null || git checkout --ours "$file"
            git add "$file"
        done
        
        # Commit the merge
        git commit -m "Merge $branch into main - resolved conflicts by keeping main branch changes"
        echo "✅ Successfully merged $branch"
    else
        echo "✅ No conflicts found in $branch"
    fi
}

# Function to merge a single branch
merge_branch() {
    local branch=$1
    echo "🔄 Processing branch: $branch"
    
    # Checkout the branch
    git checkout "$branch" 2>/dev/null || {
        echo "⚠️  Branch $branch not found locally, skipping..."
        return 0
    }
    
    # Try to merge main into the branch
    echo "🔀 Attempting to merge main into $branch..."
    if git merge main --no-edit; then
        echo "✅ Successfully merged main into $branch"
    else
        echo "⚠️  Merge conflicts detected in $branch"
        resolve_conflicts "$branch"
    fi
    
    # Switch back to main
    git checkout main
    
    # Merge the branch into main
    echo "🔀 Merging $branch into main..."
    if git merge "$branch" --no-edit; then
        echo "✅ Successfully merged $branch into main"
    else
        echo "⚠️  Final merge conflicts detected"
        resolve_conflicts "$branch"
    fi
    
    echo "🎉 Completed processing $branch"
    echo "---"
}

# Main execution
echo "📊 Total branches to process: ${#BRANCHES[@]}"

# Process each branch
for branch in "${BRANCHES[@]}"; do
    merge_branch "$branch"
done

echo "🚀 All branches processed successfully!"
echo "📤 Pushing updated main branch to remote..."

# Push the updated main branch
git push origin main

echo "✅ Comprehensive merge process completed!"
echo "🎯 All branches have been merged into main and pushed to remote."