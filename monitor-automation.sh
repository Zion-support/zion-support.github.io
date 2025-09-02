#!/bin/bash

echo "🔍 Error Automation System Monitor"
echo "=================================="

echo ""
echo "📊 PM2 Status:"
pm2 status

echo ""
echo "📈 Recent Logs (last 10 lines):"
pm2 logs --lines 10

echo ""
echo "📋 Error Reports:"
if [ -f "automation/reports/error-report.json" ]; then
    echo "✅ Error Report: automation/reports/error-report.json"
    echo "   Last updated: $(stat -c %y automation/reports/error-report.json)"
else
    echo "❌ No error report found"
fi

if [ -f "automation/reports/coordination-report.json" ]; then
    echo "✅ Coordination Report: automation/reports/coordination-report.json"
    echo "   Last updated: $(stat -c %y automation/reports/coordination-report.json)"
else
    echo "❌ No coordination report found"
fi

if [ -f "automation/reports/health-report.json" ]; then
    echo "✅ Health Report: automation/reports/health-report.json"
    echo "   Last updated: $(stat -c %y automation/reports/health-report.json)"
else
    echo "❌ No health report found"
fi

echo ""
echo "🛠️  Quick Commands:"
echo "  pm2 status                    - Show all processes"
echo "  pm2 logs                      - Show all logs"
echo "  pm2 restart all               - Restart all processes"
echo "  pm2 stop all                  - Stop all processes"
echo "  pm2 delete all                - Delete all processes"
echo "  node scripts/automation/project-error-automation.cjs  - Run manual error check"
echo "  node scripts/automation/master-error-coordinator.cjs  - Run manual coordination"
echo ""
echo "🔄 The system will automatically:"
echo "  • Check for errors every 5-30 minutes"
echo "  • Fix TypeScript errors every 20 minutes"
echo "  • Fix linting errors every 25 minutes"
echo "  • Fix syntax errors every 10 minutes"
echo "  • Coordinate all processes every 15 minutes"
echo ""
echo "📊 Reports are saved in: automation/reports/"
echo "📝 Logs are saved in: automation/logs/"