#!/bin/bash

set -e

echo "🚀 Starting comprehensive branch merge process..."

# Ensure we're on main branch
echo "📋 Checking current branch..."
current_branch=$(git branch --show-current)
echo "Current branch: $current_branch"

if [ "$current_branch" != "main" ]; then
    echo "🔄 Switching to main branch..."
    git checkout main
fi

# Fetch latest changes
echo "📥 Fetching latest changes..."
git fetch origin
git pull origin main

# Get list of branches to merge (excluding main, HEAD, and temp branches)
echo "📊 Getting list of branches to merge..."
branches=$(git branch -r | grep -v "origin/main" | grep -v "origin/HEAD" | grep -v "cursor/fix-netlify-build-and-merge-to-main" | grep -v "temp-" | head -50)

total_branches=$(echo "$branches" | wc -l)
echo "Found $total_branches branches to process"

# Initialize counters
successful_merges=0
failed_merges=0
conflicts_resolved=0

# Create results file
results_file="/workspace/merge-results-$(date +%Y%m%d-%H%M%S).json"
echo "[" > "$results_file"

branch_count=0

for branch in $branches; do
    branch_count=$((branch_count + 1))
    echo ""
    echo "📊 Progress: $branch_count/$total_branches"
    echo "🚀 Processing: $branch"
    
    # Extract branch name without origin/
    local_branch=$(echo "$branch" | sed 's/origin\///')
    
    start_time=$(date -u +"%Y-%m-%dT%H:%M:%S.%3NZ")
    
    # Try to checkout the branch
    if git checkout -b "$local_branch" "$branch" 2>/dev/null; then
        echo "  ✅ Successfully checked out $local_branch"
        
        # Switch back to main
        git checkout main
        
        # Try to merge
        if git merge --no-ff "$local_branch" 2>/dev/null; then
            echo "  ✅ Successfully merged $branch"
            successful_merges=$((successful_merges + 1))
            conflicts_resolved=$((conflicts_resolved + 0))
            result="success"
            error=""
        else
            echo "  🔧 Merge conflicts detected, attempting resolution..."
            
            # Check if there are actual conflicts
            if git status --porcelain | grep -q "^UU\|^AA\|^DD"; then
                echo "  📝 Resolving conflicts automatically..."
                
                # Get list of conflicted files
                conflicted_files=$(git status --porcelain | grep "^UU\|^AA\|^DD" | awk '{print $2}')
                
                conflicts_in_this_merge=0
                
                for file in $conflicted_files; do
                    echo "    🔧 Resolving conflicts in $file"
                    
                    # Try to resolve by taking our version first, then theirs
                    if git checkout --ours "$file" 2>/dev/null; then
                        git add "$file"
                        conflicts_in_this_merge=$((conflicts_in_this_merge + 1))
                    elif git checkout --theirs "$file" 2>/dev/null; then
                        git add "$file"
                        conflicts_in_this_merge=$((conflicts_in_this_merge + 1))
                    else
                        echo "    ⚠️  Could not auto-resolve $file"
                    fi
                done
                
                # Try to commit the merge
                if git commit --no-edit 2>/dev/null; then
                    echo "  ✅ Successfully merged $branch with $conflicts_in_this_merge conflicts resolved"
                    successful_merges=$((successful_merges + 1))
                    conflicts_resolved=$((conflicts_resolved + conflicts_in_this_merge))
                    result="success"
                    error=""
                else
                    echo "  ❌ Failed to commit merge for $branch"
                    git merge --abort 2>/dev/null
                    failed_merges=$((failed_merges + 1))
                    result="failed"
                    error="Failed to commit merge"
                fi
            else
                echo "  ❌ Merge failed for $branch"
                git merge --abort 2>/dev/null
                failed_merges=$((failed_merges + 1))
                result="failed"
                error="Merge failed"
            fi
        fi
        
        # Clean up local branch
        git branch -d "$local_branch" 2>/dev/null || git branch -D "$local_branch" 2>/dev/null
        
    else
        echo "  ❌ Could not checkout $branch"
        failed_merges=$((failed_merges + 1))
        result="failed"
        error="Could not checkout branch"
    fi
    
    end_time=$(date -u +"%Y-%m-%dT%H:%M:%S.%3NZ")
    
    # Add result to JSON file
    if [ $branch_count -gt 1 ]; then
        echo "," >> "$results_file"
    fi
    
    cat >> "$results_file" << EOF
  {
    "name": "$branch",
    "result": "$result",
    "error": "$error",
    "startTime": "$start_time",
    "endTime": "$end_time"
  }
EOF
    
    # Small delay to prevent overwhelming the system
    sleep 1
done

# Close JSON array
echo "]" >> "$results_file"

# Generate summary
end_time=$(date -u +"%Y-%m-%dT%H:%M:%S.%3NZ")

echo ""
echo "📊 MERGE SUMMARY:"
echo "  Total Branches: $total_branches"
echo "  Successfully Merged: $successful_merges"
echo "  Failed: $failed_merges"
echo "  Conflicts Resolved: $conflicts_resolved"
echo "  Results saved to: $results_file"

# Create comprehensive summary
summary_file="/workspace/merge-summary-$(date +%Y%m%d-%H%M%S).json"
cat > "$summary_file" << EOF
{
  "summary": {
    "totalBranches": $total_branches,
    "successfullyMerged": $successful_merges,
    "failedBranches": $failed_merges,
    "conflictsResolved": $conflicts_resolved,
    "startTime": "$(date -u +"%Y-%m-%dT%H:%M:%S.%3NZ")",
    "endTime": "$end_time"
  },
  "resultsFile": "$results_file"
}
EOF

echo "  Summary saved to: $summary_file"

# Push changes if any were made
if [ $successful_merges -gt 0 ]; then
    echo ""
    echo "🚀 Pushing changes to remote..."
    git push origin main
    echo "✅ Changes pushed successfully!"
fi

echo ""
echo "✅ Comprehensive merge process completed!"