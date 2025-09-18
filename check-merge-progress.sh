#!/bin/bash

# Script to check merge progress
echo "🔍 Checking merge progress..."
echo "⏰ Current time: $(date)"
echo ""

# Check if merge process is running
echo "📊 Process Status:"
if ps aux | grep -q "merge-prs-batch.sh"; then
    echo "✅ Merge process is running"
    echo "🔄 Process details:"
    ps aux | grep "merge-prs-batch.sh" | grep -v grep
else
    echo "❌ No merge process running"
fi

echo ""

# Check git status
echo "📊 Git Status:"
git status --porcelain

echo ""

# Check recent commits
echo "📊 Recent Commits:"
git log --oneline -10

echo ""

# Check for any conflicts
echo "📊 Conflict Status:"
CONFLICTS=$(git diff --name-only --diff-filter=U 2>/dev/null || echo "")
if [ -n "$CONFLICTS" ]; then
    echo "⚠️  Found conflicts in:"
    echo "$CONFLICTS"
else
    echo "✅ No conflicts found"
fi

echo ""

# Check branch status
echo "📊 Branch Status:"
echo "Current branch: $(git branch --show-current)"
echo "Remote status: $(git status -sb | head -1)"

echo ""

# Check total branches
echo "📊 Total Branches:"
TOTAL_BRANCHES=$(git branch -r | grep -E "(cursor|pr)" | wc -l)
echo "Total PRs/Branches: $TOTAL_BRANCHES"

echo ""
echo "🎯 Merge progress check completed!"