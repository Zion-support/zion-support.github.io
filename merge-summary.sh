#!/bin/bash

echo "=== ZION.APP BRANCH MERGE PROGRESS SUMMARY ==="
echo ""

# Count total unmerged branches
echo "Checking total unmerged branches..."
TOTAL_UNMERGED=$(git branch -r --no-merged origin/main | wc -l)
echo "Total unmerged branches: $TOTAL_UNMERGED"

# Count branches we've already merged
echo ""
echo "=== BRANCHES SUCCESSFULLY MERGED ==="
git log --oneline --grep="Merge.*into main" | head -30

echo ""
echo "=== CURRENT STATUS ==="
echo "Current branch: $(git branch --show-current)"
echo "Commits ahead of origin/main: $(git rev-list --count origin/main..HEAD)"
echo "Last commit: $(git log -1 --oneline)"

echo ""
echo "=== NEXT STEPS ==="
echo "1. Continue merging more branches in batches"
echo "2. Focus on content and link-fix branches first"
echo "3. Handle complex automation branches separately"
echo "4. Push changes regularly to avoid conflicts"

echo ""
echo "=== RECOMMENDED NEXT BATCHES ==="
echo "- More update-content-and-fix-links branches"
echo "- Website audit and enhancement branches"
echo "- Service expansion branches"
echo "- UI/UX improvement branches"

echo ""
echo "=== MERGE STRATEGY ==="
echo "- Use automated conflict resolution (accept incoming changes)"
echo "- Merge in small batches (10 branches at a time)"
echo "- Push after each successful batch"
echo "- Monitor for any build issues"