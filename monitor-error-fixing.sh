#!/bin/bash

echo "🔍 Monitoring Enhanced Error Fixing Automation..."
echo ""

echo "PM2 Status:"
pm2 status
echo ""

echo "Recent Error Fixing Logs:"
pm2 logs enhanced-error-fixing-automation --lines 20
echo ""

echo "Error Reports Directory:"
ls -la error-reports/ | tail -5
echo ""

echo "Recent Fixes Applied:"
if [ -f "error-reports/$(ls -t error-reports/ | head -1)" ]; then
    jq '.fixesApplied | length' "error-reports/$(ls -t error-reports/ | head -1)" 2>/dev/null || echo "No recent fixes found"
fi

echo ""
echo "Current TypeScript Error Count:"
npm run type-check 2>&1 | grep -c "error TS" || echo "0"

echo ""
echo "System Health Check Complete! 🎉"