#!/bin/bash
set -e

echo "=== Merging latest PRs ==="
MERGED=()
CONFLICTED=()

# Get the 3 new PRs
NEW_PRS=(
    "refs/remotes/origin/pr/15651"
    "refs/remotes/origin/pr/15652"
    "refs/remotes/origin/pr/15660"
)

for pr in "${NEW_PRS[@]}"; do
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

echo "=== LATEST PRs SUMMARY ==="
echo "Merged: ${#MERGED[@]} PRs"
echo "Conflicted: ${#CONFLICTED[@]} PRs"
echo ""
echo "Merged PRs:"
printf "%s\n" "${MERGED[@]}"
echo ""
echo "Conflicted PRs:"
printf "%s\n" "${CONFLICTED[@]}"