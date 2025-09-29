#!/bin/bash

# Monitor merge operation progress
echo "📊 Merge Operation Progress Monitor"
echo "⏰ Started monitoring at: $(date)"
echo ""

# Function to show current status
show_status() {
    echo "🔄 Current Status Check - $(date)"
    echo "----------------------------------------"
    
    # Git status
    echo "📋 Git Status:"
    git status --porcelain || echo "   Clean working tree"
    echo ""
    
    # Branch count
    TOTAL_CURSOR_BRANCHES=$(git branch -r | grep "cursor/check-fix-push-and-merge-to-main" | wc -l)
    echo "📊 Branch Statistics:"
    echo "   Cursor branches remaining: $TOTAL_CURSOR_BRANCHES"
    echo ""
    
    # Recent commits
    echo "📝 Recent Commits (last 5):"
    git log --oneline -5
    echo ""
    
    # Process check
    echo "🔍 Running Processes:"
    MERGE_PROCESSES=$(ps aux | grep -E "(merge|cleanup)" | grep -v grep | wc -l)
    echo "   Merge/cleanup processes: $MERGE_PROCESSES"
    if [ $MERGE_PROCESSES -gt 0 ]; then
        ps aux | grep -E "(merge|cleanup)" | grep -v grep | head -3
    fi
    echo ""
    
    # Repository statistics
    echo "📈 Repository Statistics:"
    echo "   Total commits: $(git rev-list --count HEAD)"
    echo "   Total branches: $(git branch -r | wc -l)"
    echo "   Main branch commits: $(git rev-list --count main)"
    echo ""
    
    echo "----------------------------------------"
    echo ""
}

# Initial status
show_status

# Monitor loop (run every 30 seconds for 10 minutes)
echo "🔄 Starting continuous monitoring (every 30 seconds for 10 minutes)..."
echo ""

for i in {1..20}; do
    sleep 30
    show_status
    
    # Check if merge operation is still running
    if ! ps aux | grep -E "(final-merge|merge)" | grep -v grep | grep -q "bash"; then
        echo "🏁 Merge operation appears to have completed!"
        break
    fi
done

echo "📊 Final Status Summary:"
echo "⏰ Monitoring completed at: $(date)"
echo ""

# Final status check
show_status

echo "🎯 Progress monitoring completed!"