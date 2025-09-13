#!/bin/bash
set -e

echo "=== Auto-merging clean PRs ==="
MERGED=()
CONFLICTED=()

# Get the 50 most recent PRs
PRS=$(git for-each-ref --sort=-committerdate --format="%(refname)" refs/remotes/origin/pr | head -n 50)

for pr in $PRS; do
    echo "Trying $pr"
    if git merge --no-ff --no-edit "$pr" 2>/dev/null; then
        echo "✓ Merged $pr"
        MERGED+=("$pr")
    else
        echo "✗ Conflict on $pr"
        git merge --abort 2>/dev/null || true
        CONFLICTED+=("$pr")
    fi
done

echo "=== SUMMARY ==="
echo "Merged: ${#MERGED[@]} PRs"
echo "Conflicted: ${#CONFLICTED[@]} PRs"
echo ""
echo "Merged PRs:"
printf "%s\n" "${MERGED[@]}"
echo ""
echo "Conflicted PRs:"
printf "%s\n" "${CONFLICTED[@]}"