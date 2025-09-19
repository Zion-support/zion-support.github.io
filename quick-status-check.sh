#!/bin/bash

# Quick Status Check Script
# Checks current git status and verifies no conflicts

echo "🔍 Quick Status Check"
echo "===================="

# Check git status
echo "📊 Git Status:"
git status --short

# Check for merge conflicts
echo ""
echo "🔍 Checking for merge conflicts:"
CONFLICTS=$(grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" 2>/dev/null | wc -l)
if [ "$CONFLICTS" -eq 0 ]; then
    echo "✅ No merge conflicts found"
else
    echo "⚠️  Found $CONFLICTS merge conflicts"
fi

# Check unmerged branches
echo ""
echo "📋 Unmerged branches:"
UNMERGED=$(git branch -r --no-merged main | wc -l)
echo "   $UNMERGED unmerged branches"

# Check if we're on main branch
echo ""
echo "🌿 Current branch:"
git branch --show-current

# Check last commit
echo ""
echo "📝 Last commit:"
git log -1 --oneline

echo ""
echo "✅ Status check completed!"