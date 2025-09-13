#!/bin/bash

# Script to monitor merge progress
echo "🔍 Monitoring merge progress..."
echo "⏰ Current time: $(date)"
echo ""

# Check if merge process is running
echo "📊 Process Status:"
if ps aux | grep -q "ultimate-merge-all-prs.sh"; then
    echo "✅ Ultimate merge process is running"
    echo "🔄 Process details:"
    ps aux | grep "ultimate-merge-all-prs.sh" | grep -v grep
elif ps aux | grep -q "batch-merge-prs.sh"; then
    echo "✅ Batch merge process is running"
    echo "🔄 Process details:"
    ps aux | grep "batch-merge-prs.sh" | grep -v grep
else
    echo "❌ No merge process running"
fi

echo ""

# Check git status
echo "📊 Git Status:"
git status --porcelain

echo ""

# Check recent commits
echo "📊 Recent Commits (last 20):"
git log --oneline -20

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

# Check merged branches
echo "📊 Merged Branches:"
MERGED_BRANCHES=$(git branch --merged main | grep -E "(cursor|pr)" | wc -l)
echo "Merged PRs/Branches: $MERGED_BRANCHES"

# Calculate progress
if [ $TOTAL_BRANCHES -gt 0 ]; then
    PROGRESS=$((MERGED_BRANCHES * 100 / TOTAL_BRANCHES))
    echo "📈 Progress: $PROGRESS% ($MERGED_BRANCHES/$TOTAL_BRANCHES)"
fi

echo ""
echo "🎯 Merge progress check completed!"