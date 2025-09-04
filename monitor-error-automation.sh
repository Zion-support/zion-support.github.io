#!/bin/bash
echo "🔍 Error Automation System Status:"
echo "=================================="
pm2 status
echo ""
echo "📊 Recent Logs:"
echo "==============="
pm2 logs --lines 20
echo ""
echo "📈 Error Fixing Statistics:"
echo "==========================="
if [ -f "master-error-coordinator-report.json" ]; then
    cat master-error-coordinator-report.json | jq '.summary' 2>/dev/null || echo "No statistics available yet"
else
    echo "No statistics available yet"
fi
