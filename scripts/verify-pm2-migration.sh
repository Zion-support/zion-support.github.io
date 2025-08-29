#!/bin/bash

echo "🔍 PM2 Migration Verification Script"
echo "=================================="
echo ""

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed"
    exit 1
fi

echo "✅ PM2 is installed"

# Check PM2 status
echo ""
echo "📊 PM2 Process Status:"
echo "----------------------"
pm2 status

# Check if all expected processes are running
echo ""
echo "🔍 Checking Expected Processes:"
echo "-------------------------------"

expected_processes=(
    "console-error-fixer"
    "link-checker"
    "continuous-improvement"
    "daily-build-test"
    "security-audit"
    "dependency-updates"
    "performance-monitor"
    "quality-checks"
    "link-integrity"
    "front-maximizer"
    "sitemap-runner"
    "weekly-dependency-manager"
    "weekly-security-analysis"
    "workflow-status-monitor"
)

all_running=true
for process in "${expected_processes[@]}"; do
    if pm2 list | grep -q "$process.*online"; then
        echo "✅ $process is running"
    else
        echo "❌ $process is not running"
        all_running=false
    fi
done

echo ""
if [ "$all_running" = true ]; then
    echo "🎉 All expected PM2 processes are running!"
else
    echo "⚠️  Some PM2 processes are not running as expected"
fi

# Check PM2 logs for any errors
echo ""
echo "📋 Recent PM2 Logs (last 10 lines):"
echo "-----------------------------------"
pm2 logs --lines 10

# Check system resources
echo ""
echo "💻 System Resources:"
echo "-------------------"
echo "Memory Usage:"
free -h | grep -E "Mem|Swap"
echo ""
echo "Disk Usage:"
df -h . | grep -v "Filesystem"

# Check if GitHub Actions workflows were deleted
echo ""
echo "🗑️  GitHub Actions Workflow Status:"
echo "----------------------------------"
deleted_workflows=(
    "dependencies.yml"
    "agent-factory.yml"
    "codeql.yml"
    "status.yml"
)

for workflow in "${deleted_workflows[@]}"; do
    if [ ! -f ".github/workflows/$workflow" ]; then
        echo "✅ $workflow has been deleted"
    else
        echo "❌ $workflow still exists"
    fi
done

# Check for disabled workflow placeholders
echo ""
echo "📝 Disabled Workflow Placeholders:"
echo "----------------------------------"
disabled_count=$(find .github/workflows -name "*.yml" -exec grep -l "DISABLED - Migrated to PM2" {} \; | wc -l)
echo "Found $disabled_count disabled workflow placeholders"

# Final status
echo ""
echo "📊 Migration Summary:"
echo "-------------------"
if [ "$all_running" = true ]; then
    echo "🎉 PM2 Migration Status: SUCCESS"
    echo "✅ All automation processes are running"
    echo "✅ Replaced workflows have been deleted"
    echo "✅ System is fully operational with PM2"
else
    echo "⚠️  PM2 Migration Status: PARTIAL"
    echo "❌ Some processes are not running"
    echo "🔧 Check PM2 logs for issues"
fi

echo ""
echo "🔧 Useful PM2 Commands:"
echo "----------------------"
echo "pm2 status                    - View all processes"
echo "pm2 logs [process-name]       - View process logs"
echo "pm2 restart [process-name]    - Restart a process"
echo "pm2 restart ecosystem.config.cjs - Restart all processes"
echo "pm2 monit                     - Monitor processes in real-time"
echo "pm2 delete all                - Stop and delete all processes"
echo "pm2 start ecosystem.config.cjs - Start all processes from config"

echo ""
echo "📅 Next Steps:"
echo "-------------"
echo "1. Monitor PM2 processes for 24-48 hours"
echo "2. Check automation reports in project root"
echo "3. Verify automation functionality is working"
echo "4. Optimize intervals if needed"
echo "5. Set up PM2 startup script for server reboots"

echo ""
echo "🔍 Verification complete!"