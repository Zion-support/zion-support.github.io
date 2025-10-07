#!/bin/bash

# Error Prevention Automation Monitoring Script

echo "🔍 Error Prevention Automation Status"
echo "
# Show PM2 status
pm2 status

echo ""
echo "📊 Recent Logs"
echo "
# Show recent logs for each process
for process in error-prevention-orchestrator typescript-error-fixer linting-error-fixer scheduled-error-prevention file-corruption-monitor syntax-error-quick-fixer jsx-syntax-fixer import-statement-fixer error-prevention-dashboard; do
    echo ""
    echo "📝 $process logs:"
    pm2 logs $process --lines 5 2>/dev/null || echo "  No logs available"
done

echo ""
echo "📁 Reports Directory:"
ls -la reports/ 2>/dev/null || echo "  No reports directory found"

echo ""
echo "📁 Logs Directory:"
ls -la logs/ 2>/dev/null || echo "  No logs directory found"

echo ""
echo "💡 Quick Commands:"
echo "  ./manage-error-prevention.sh status    - Check status"
echo "  ./manage-error-prevention.sh logs      - View logs"
echo "  ./manage-error-prevention.sh monit     - Open monitoring"
echo "  pm2 monit                              - PM2 dashboard"
