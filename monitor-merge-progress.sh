#!/bin/bash

# Monitor merge progress script
echo "📊 MERGE PROGRESS MONITOR"
echo "⏰ Checked at: $(date)"
echo "=================================="

# Check if any merge scripts are running
echo "🔄 Active Processes:"
if pgrep -f "complete-merge-solution" > /dev/null; then
    echo "✅ Complete merge solution is RUNNING"
else
    echo "⏹️ Complete merge solution is NOT RUNNING"
fi

if pgrep -f "master-merge-script" > /dev/null; then
    echo "✅ Master merge script is RUNNING"
else
    echo "⏹️ Master merge script is NOT RUNNING"
fi

if pgrep -f "resolve-all-conflicts" > /dev/null; then
    echo "✅ Conflict resolution script is RUNNING"
else
    echo "⏹️ Conflict resolution script is NOT RUNNING"
fi

echo ""

# Check remaining branches
echo "📋 Branch Status:"
REMAINING_BRANCHES=$(git branch -r | grep "cursor/" | wc -l 2>/dev/null || echo "Unknown")
echo "🔢 Remaining cursor branches: $REMAINING_BRANCHES"

# Check git status
echo ""
echo "📊 Git Repository Status:"
if git status --porcelain > /dev/null 2>&1; then
    UNCOMMITTED=$(git status --porcelain | wc -l)
    echo "📝 Uncommitted changes: $UNCOMMITTED"
    
    if [ "$UNCOMMITTED" -gt 0 ]; then
        echo "⚠️ There are uncommitted changes"
        git status --porcelain | head -5
    else
        echo "✅ Working tree is clean"
    fi
else
    echo "❌ Git status unavailable"
fi

# Check recent commits
echo ""
echo "📝 Recent Activity:"
if git log --oneline -5 > /dev/null 2>&1; then
    git log --oneline -5
else
    echo "❌ Git log unavailable"
fi

# Check build status
echo ""
echo "🔨 Build Status:"
if command -v npm > /dev/null 2>&1; then
    if npm run build > /dev/null 2>&1; then
        echo "✅ Build successful"
    else
        echo "❌ Build failed"
    fi
else
    echo "⚠️ npm not available"
fi

# Check for specific files
echo ""
echo "📁 Key Files Status:"
for file in "open_prs.txt" "src/App.tsx" "src/App.css" "package.json" "netlify.toml"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
    fi
done

# Check backup branches
echo ""
echo "🔒 Backup Branches:"
git branch -r | grep "backup" | head -5 || echo "No backup branches found"

echo ""
echo "=================================="
echo "🎯 Status check completed!"
echo "📊 Next steps:"
echo "   1. Run complete-merge-solution.sh if no processes are running"
echo "   2. Monitor progress with this script"
echo "   3. Check build status regularly"
echo "   4. Verify all features work correctly"