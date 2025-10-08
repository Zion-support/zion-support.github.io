#!/bin/bash
# Quick PR check - minimal operations

cd /workspace

echo "=== Quick PR Status Check ==="
echo "Date: $(date)"
echo ""

# 1. Check current branch
echo "Current branch:"
git branch --show-current 2>/dev/null || echo "Unknown"
echo ""

# 2. Check for local conflicts
echo "Checking for merge conflict markers..."
if grep -r "<<<<<<< HEAD" . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" 2>/dev/null | head -5; then
    echo "⚠️  Found conflict markers"
else
    echo "✅ No conflict markers found"
fi
echo ""

# 3. Fetch PR count only
echo "Fetching open PR count from GitHub..."
pr_count=$(curl -s -H "Authorization: token ghs_ZovMJhZd6dGsgC7nYrsvbqsBs3TETQ3WaUiC" \
  "https://api.github.com/repos/Zion-Holdings/zion.app/pulls?state=open&per_page=1" \
  | python3 -c "import sys, json; prs = json.load(sys.stdin); print(len(prs))" 2>/dev/null)

echo "Open PRs: ${pr_count:-'Unable to fetch'}"
echo ""

# 4. Check if we can access main
echo "Checking main branch status..."
git fetch origin main --dry-run 2>&1 | head -3 || echo "Cannot fetch main"
echo ""

echo "=== Check Complete ===="
echo "For full PR list, run: python3 /workspace/manage_all_prs.py"
