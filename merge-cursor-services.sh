#!/bin/bash

# Merge cursor branches with services and improvements

echo "Starting cursor services merge process..."

# Function to safely merge a branch
merge_cursor_branch() {
    local branch_name="$1"
    local description="$2"
    
    echo "Attempting to merge: $branch_name - $description"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/$branch_name"; then
        echo "Branch $branch_name does not exist, skipping..."
        return 0
    fi
    
    # Try to merge
    if git merge "$branch_name" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged: $branch_name"
        return 0
    else
        echo "❌ Merge conflict in: $branch_name"
        # Abort the merge
        git merge --abort 2>/dev/null || true
        return 1
    fi
}

# List of cursor branches to merge
cursor_branches=(
    "origin/cursor/add-2030q1-services-ui-8deb1aee36d:2030 Q1 services UI"
    "origin/cursor/add-and-advertise-new-services-then-build-0357:New services and build"
    "origin/cursor/add-and-advertise-new-services-then-build-03b6:New services and build v2"
    "origin/cursor/add-and-advertise-new-services-then-build-06aa:New services and build v3"
    "origin/cursor/add-and-advertise-new-services-then-build-0756:New services and build v4"
    "origin/cursor/add-and-advertise-new-services-then-build-0c04:New services and build v5"
    "origin/cursor/add-and-advertise-new-services-then-build-0cca:New services and build v6"
    "origin/cursor/add-and-advertise-new-services-then-build-174e:New services and build v7"
    "origin/cursor/add-and-advertise-new-services-then-build-17cc:New services and build v8"
    "origin/cursor/add-and-advertise-new-services-then-build-192f:New services and build v9"
    "origin/cursor/add-and-advertise-new-services-then-build-1d5b:New services and build v10"
)

successful_merges=0
failed_merges=0

for branch_info in "${cursor_branches[@]}"; do
    branch_name="${branch_info%%:*}"
    description="${branch_info##*:}"
    
    if merge_cursor_branch "$branch_name" "$description"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
    
    echo "---"
done

echo "Cursor Services Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"

# Commit the successful merges
if [ $successful_merges -gt 0 ]; then
    git add .
    if ! git diff --cached --quiet; then
        git commit -m "feat: Merge cursor branches with new services and improvements

Successfully merged $successful_merges cursor branches including:
- 2030 Q1 services UI
- New services and advertising features
- Build improvements
- Service enhancements

Failed to merge $failed_merges branches due to conflicts."
        
        echo "✅ Committed cursor services merges"
    fi
fi

echo "Cursor services merge process completed!"