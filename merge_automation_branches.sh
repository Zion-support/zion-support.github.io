#!/bin/bash

# Fetch all remote branches
git fetch origin

# Get a list of unmerged automation branches
AUTOMATION_BRANCHES=$(git branch -r --no-merged main | grep "automation/" | head -n 50)

if [ -z "$AUTOMATION_BRANCHES" ]; then
    echo "No automation branches found to merge."
    exit 0
fi

echo "Attempting to merge the following automation branches (first 50):"
echo "$AUTOMATION_BRANCHES"

for branch in $AUTOMATION_BRANCHES; do
    echo "Merging $branch..."
    # Attempt to merge with 'theirs' strategy, allowing unrelated histories
    # Use --no-ff to ensure a merge commit is always created
    if git merge "$branch" --no-ff --allow-unrelated-histories -X theirs -m "Merge PR: $branch"; then
        echo "✓ Successfully merged $branch"
    else
        echo "⚠ Conflict in $branch, attempting to resolve..."
        # For modify/delete conflicts, prefer 'theirs' (incoming)
        git diff --name-only --diff-filter=D | xargs -r git add
        git diff --name-only --diff-filter=U | xargs -r git add
        # For add/add conflicts, prefer 'theirs' (incoming)
        git checkout --theirs .
        git add .
        if git commit -m "Merge PR: $branch - Resolved conflicts"; then
            echo "✓ Successfully merged $branch with conflict resolution"
        else
            echo "✗ Failed to resolve conflicts for $branch, aborting merge."
            git merge --abort
        fi
    fi
done

echo "Completed merging automation branches"