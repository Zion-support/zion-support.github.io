#!/bin/bash

# Error Automation Monitoring Script
# This script monitors the status of the error automation system

echo "🔍 Error Automation System Status"
echo "=================================="

# Check PM2 status
echo "📊 PM2 Processes:"
pm2 status

echo ""
echo "📋 Recent Logs:"
pm2 logs --lines 10

echo ""
echo "📄 Error Reports:"
if [ -f "error-analysis-report.json" ]; then
    ERROR_COUNT=$(node -e "const report = require('./error-analysis-report.json'); console.log(report.totalErrors || 0);")
    echo "  Current Errors: $ERROR_COUNT"
else
    echo "  No error report found"
fi

if [ -f "error-fix-report.json" ]; then
    FIXES_APPLIED=$(node -e "const report = require('./error-fix-report.json'); console.log(report.successfulFixes || 0);")
    echo "  Fixes Applied: $FIXES_APPLIED"
else
    echo "  No fix report found"
fi

if [ -f "automation-status.json" ]; then
    echo "  Automation Status: Active"
else
    echo "  Automation Status: Not found"
fi

echo ""
echo "📁 Log Files:"
ls -la logs/ 2>/dev/null || echo "  No logs directory found"

echo ""
echo "🔧 Available Commands:"
echo "  pm2 status                    - Check process status"
echo "  pm2 logs                      - View logs"
echo "  pm2 restart all               - Restart all processes"
echo "  pm2 stop all                  - Stop all processes"
echo "  ./stop-error-automation.sh    - Stop automation system"
echo "  ./restart-error-automation.sh - Restart automation system"