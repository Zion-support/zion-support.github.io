#!/bin/bash

# Monitor PR Merge Progress
echo "📊 PR Merge Progress Monitor"
echo "============================"

cd /workspace

# Function to check progress
check_progress() {
    echo ""
    echo "🕐 $(date)"
    echo "📋 Current Status:"
    
    # Check if log files exist and show progress
    if [ -f "pr-merge-log.txt" ]; then
        echo "📝 Comprehensive Merger Log:"
        echo "  Last 5 entries:"
        tail -5 pr-merge-log.txt | sed 's/^/    /'
        
        # Count processed branches
        PROCESSED=$(grep "Processing branch:" pr-merge-log.txt | wc -l)
        SUCCESS=$(grep "Successfully merged.*into main" pr-merge-log.txt | wc -l)
        FAILED=$(grep "Failed to process" pr-merge-log.txt | wc -l)
        
        echo "  📊 Progress:"
        echo "    Processed: $PROCESSED"
        echo "    Success: $SUCCESS"
        echo "    Failed: $FAILED"
        if [ $PROCESSED -gt 0 ]; then
            echo "    Success Rate: $(( (SUCCESS * 100) / PROCESSED ))%"
        fi
    fi
    
    # Check if report file exists
    if [ -f "comprehensive-pr-merge-report.json" ]; then
        echo "📊 Comprehensive Report Available"
        echo "  Total Branches: $(jq -r '.summary.totalBranches' comprehensive-pr-merge-report.json 2>/dev/null || echo 'N/A')"
        echo "  Successfully Merged: $(jq -r '.summary.successfullyMerged' comprehensive-pr-merge-report.json 2>/dev/null || echo 'N/A')"
        echo "  Conflicts Resolved: $(jq -r '.summary.conflictsResolved' comprehensive-pr-merge-report.json 2>/dev/null || echo 'N/A')"
    fi
    
    # Check git status
    echo "🔍 Git Status:"
    git status --short | head -10 | sed 's/^/  /'
    
    # Check remaining branches
    REMAINING=$(git branch -r | grep -v "origin/main" | grep -v "backup" | grep -v "aggressive-merge" | wc -l)
    echo "📈 Remaining Branches: $REMAINING"
    
    # Check if build is working
    echo "🔨 Build Status:"
    if npm run build >/dev/null 2>&1; then
        echo "  ✅ Build is working"
    else
        echo "  ⚠️  Build has issues"
    fi
    
    echo "=========================================="
}

# Monitor for 30 minutes, checking every 2 minutes
for i in {1..15}; do
    check_progress
    if [ $i -lt 15 ]; then
        echo "⏳ Waiting 2 minutes for next check..."
        sleep 120
    fi
done

echo ""
echo "🏁 Monitoring completed after 30 minutes"