#!/bin/bash

echo "📊 QUICK STATUS CHECK"
echo "⏰ Checked at: $(date)"
echo ""

# Check if merge process is running
if pgrep -f "final-merge-execution" > /dev/null; then
    echo "✅ Final merge execution is RUNNING"
else
    echo "⏹️ Final merge execution has COMPLETED or NOT RUNNING"
fi

# Check remaining branches (if git is available)
if command -v git > /dev/null 2>&1; then
    REMAINING=$(git branch -r | grep "cursor/" | wc -l 2>/dev/null || echo "Unknown")
    echo "📋 Remaining cursor branches: $REMAINING"
    
    # Check git status
    STATUS=$(git status --porcelain 2>/dev/null | wc -l || echo "Unknown")
    echo "📝 Uncommitted changes: $STATUS"
else
    echo "⚠️ Git not available for status check"
fi

echo ""
echo "🎯 Status check completed!"