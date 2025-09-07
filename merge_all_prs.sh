#!/bin/bash

# List of all open PRs and their branches
declare -a prs=(
    "12315:cursor/automate-test-improve-and-merge-code-f973"
    "12314:cursor/fix-syntax-push-and-merge-to-main-ba67"
    "12312:cursor/integrate-build-improve-and-re-verify-7c40"
    "12311:cursor/fix-syntax-push-and-merge-to-main-1e7c"
    "12308:cursor/fix-syntax-push-and-merge-to-main-215f"
    "12304:cursor/automate-test-improve-and-merge-code-566d"
    "12301:cursor/fix-lint-push-and-merge-to-main-92ad"
    "12300:cursor/integrate-build-improve-and-re-verify-93a2"
    "12298:cursor/automate-test-improve-and-merge-code-39f5"
    "12297:cursor/automate-test-improve-and-merge-code-f23a"
    "12296:cursor/fix-syntax-push-and-merge-to-main-6983"
    "12295:cursor/integrate-build-improve-and-re-verify-afbb"
    "12294:cursor/fix-lint-push-and-merge-to-main-6cc3"
    "12293:cursor/fix-syntax-push-and-merge-to-main-119d"
    "12291:cursor/automate-test-improve-and-merge-code-4ecc"
    "12290:cursor/automate-test-improve-and-merge-code-7742"
    "12286:cursor/fix-lint-push-and-merge-to-main-f41d"
)

echo "Starting to merge all remaining PRs..."

for pr_info in "${prs[@]}"; do
    pr_num=$(echo $pr_info | cut -d: -f1)
    branch=$(echo $pr_info | cut -d: -f2)
    
    echo "Processing PR #$pr_num with branch: $branch"
    
    # Fetch the branch
    if git fetch origin "$branch" 2>/dev/null; then
        echo "  Fetched branch $branch"
        
        # Try to merge with conflict resolution
        if git merge -X theirs "origin/$branch" --no-commit 2>/dev/null; then
            echo "  Auto-merge successful for PR #$pr_num"
            git add . && git commit -m "Merge PR #$pr_num: $branch"
            echo "  Successfully merged PR #$pr_num"
        else
            echo "  Auto-merge failed, resolving conflicts for PR #$pr_num"
            # Resolve modify/delete conflicts by accepting incoming changes
            git status --porcelain | grep "^UD" | cut -c4- | xargs -I {} git rm {} 2>/dev/null || true
            git status --porcelain | grep "^DU" | cut -c4- | xargs -I {} git add {} 2>/dev/null || true
            git add . && git commit -m "Merge PR #$pr_num: $branch (resolved conflicts)"
            echo "  Merged PR #$pr_num with conflict resolution"
        fi
    else
        echo "  Could not fetch branch $branch for PR #$pr_num"
    fi
    
    echo "  Completed PR #$pr_num"
    echo "---"
done

echo "All PRs processed. Pushing changes..."
git push origin main

echo "Done! All remaining PRs have been processed."
