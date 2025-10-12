#!/bin/bash

# Merge remaining PRs
echo "Merging remaining open PRs..."

# List of remaining PR branches to merge
REMAINING_PR_BRANCHES=(
    "cursor/fix-errors-and-merge-to-main-4987"
    "cursor/fix-errors-and-merge-to-main-ece3"
    "cursor/fix-errors-and-merge-to-main-0e67"
    "cursor/fix-errors-and-merge-to-main-e9ed"
    "cursor/fix-errors-and-merge-to-main-65e3"
    "cursor/fix-errors-and-merge-to-main-2efe"
    "cursor/fix-errors-and-merge-to-main-1ce9"
    "cursor/fix-errors-and-merge-to-main-fdda"
    "cursor/fix-errors-and-merge-to-main-1839"
    "cursor/fix-errors-and-merge-to-main-0218"
    "cursor/fix-errors-and-merge-to-main-4ae3"
    "cursor/fix-broken-links-bd16"
    "cursor/fix-errors-and-merge-to-main-3135"
    "cursor/bc-55068a87-b241-4eb0-be98-1760f86759b6-550b"
    "cursor/bc-f02feaa1-11f4-4075-8e68-f1f9dc768e1b-4f5f"
    "cursor/fix-errors-and-merge-to-main-fd29"
    "cursor/fix-errors-and-merge-to-main-faf1"
    "cursor/fix-errors-and-merge-to-main-f5eb"
    "cursor/fix-errors-and-merge-to-main-dfae"
    "cursor/fix-errors-and-merge-to-main-f9be"
)

success_count=0
fail_count=0

for branch in "${REMAINING_PR_BRANCHES[@]}"; do
    echo ""
    echo "Processing branch: $branch"
    echo "=================================="
    
    # Fetch the branch
    echo "Fetching branch $branch..."
    if git fetch origin "$branch" 2>/dev/null; then
        echo "✅ Successfully fetched $branch"
    else
        echo "❌ Failed to fetch $branch (branch may not exist)"
        ((fail_count++))
        continue
    fi
    
    # Attempt to merge
    echo "Attempting to merge $branch..."
    if git merge "origin/$branch" --no-ff -m "Merge branch $branch" 2>/dev/null; then
        echo "✅ Successfully merged $branch"
        ((success_count++))
    else
        echo "⚠️  Merge failed for $branch, attempting conflict resolution..."
        
        # Try to resolve conflicts
        if python3 fix_merge_conflicts.py 2>/dev/null; then
            echo "✅ Conflicts resolved for $branch"
            if git add . && git commit -m "Merge branch $branch (conflicts resolved)" 2>/dev/null; then
                echo "✅ Successfully merged $branch with conflicts resolved"
                ((success_count++))
            else
                echo "❌ Failed to commit resolved conflicts for $branch"
                ((fail_count++))
            fi
        else
            echo "❌ Failed to resolve conflicts for $branch"
            ((fail_count++))
        fi
    fi
    
    echo "Waiting 1 second before next merge..."
    sleep 1
done

echo ""
echo "=================================="
echo "Remaining PRs merge completed!"
echo "✅ Successfully merged: $success_count"
echo "❌ Failed to merge: $fail_count"
echo "📊 Total processed: $((success_count + fail_count))"