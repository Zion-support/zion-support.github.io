#!/bin/bash

# Script to merge important branches systematically
# This script will merge branches that contain important improvements

# set -e  # Commented out to allow script to continue on errors

echo "Starting systematic branch merge process..."

# Function to safely merge a branch
merge_branch() {
    local branch_name="$1"
    local description="$2"
    
    echo "Attempting to merge: $branch_name - $description"
    
    # Check if branch exists
    if ! git show-ref --verify --quiet "refs/remotes/origin/$branch_name"; then
        echo "Branch $branch_name does not exist, skipping..."
        return 0
    fi
    
    # Try to merge
    if git merge "origin/$branch_name" --no-edit 2>/dev/null; then
        echo "✅ Successfully merged: $branch_name"
        return 0
    else
        echo "❌ Merge conflict in: $branch_name"
        # Abort the merge
        git merge --abort 2>/dev/null || true
        return 1
    fi
}

# List of important branches to merge (prioritized)
important_branches=(
    "chore/seo-a11y-security-csp:SEO, accessibility, and security improvements"
    "chore/perf-a11y-optimizations:Performance and accessibility optimizations"
    "chore/netlify-build-fix:Netlify build fixes"
    "chore/seo-perf-tweaks:SEO and performance tweaks"
    "chore/security-cache-headers:Security and caching headers"
    "chore/seo-accessibility-improvements:SEO and accessibility improvements"
    "chore/site-optimizations:Site optimizations"
    "chore/repo-hardening-and-build-fixes:Repository hardening and build fixes"
)

# Merge each important branch
successful_merges=0
failed_merges=0

for branch_info in "${important_branches[@]}"; do
    branch_name="${branch_info%%:*}"
    description="${branch_info##*:}"
    
    if merge_branch "$branch_name" "$description"; then
        ((successful_merges++))
    else
        ((failed_merges++))
    fi
    
    echo "---"
done

echo "Merge Summary:"
echo "✅ Successful merges: $successful_merges"
echo "❌ Failed merges: $failed_merges"

# Commit the successful merges
if [ $successful_merges -gt 0 ]; then
    git add .
    git commit -m "feat: Merge important improvements from multiple branches

Successfully merged $successful_merges branches with improvements:
- SEO, accessibility, and security enhancements
- Performance optimizations
- Build fixes and hardening
- Site optimizations

Failed to merge $failed_merges branches due to conflicts."
    
    echo "✅ Committed successful merges"
fi

echo "Branch merge process completed!"