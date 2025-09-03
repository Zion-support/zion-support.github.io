#!/bin/bash

# Health Check Script for PM2 Automation System
# This script performs a comprehensive health check of the automation system

echo "🩺 PM2 Automation System Health Check"
echo "======================================"

# Check if PM2 is running
echo "🔍 Checking PM2 status..."
if command -v pm2 &> /dev/null; then
    echo "✅ PM2 is installed"
    
    if pm2 list | grep -q "online"; then
        echo "✅ PM2 processes are running"
        pm2 status
    else
        echo "❌ No PM2 processes are online"
        echo "💡 Try running: bash /workspace/scripts/pm2-start.sh"
    fi
else
    echo "❌ PM2 is not installed"
    echo "💡 Try running: npm install -g pm2"
fi

echo ""

# Check log files
echo "📄 Checking log files..."
LOG_DIR="/workspace/logs"
if [ -d "$LOG_DIR" ]; then
    echo "✅ Log directory exists"
    
    for log_file in "app.log" "error-monitor.log" "auto-fixer.log"; do
        if [ -f "$LOG_DIR/$log_file" ]; then
            size=$(ls -lh "$LOG_DIR/$log_file" | awk '{print $5}')
            echo "✅ $log_file exists (size: $size)"
        else
            echo "⚠️  $log_file not found"
        fi
    done
else
    echo "❌ Log directory not found"
    echo "💡 Try creating it: mkdir -p $LOG_DIR"
fi

echo ""

# Check error reports
echo "📊 Checking error reports..."
REPORT_DIR="/workspace/error-reports"
if [ -d "$REPORT_DIR" ]; then
    echo "✅ Error reports directory exists"
    
    if [ -f "$REPORT_DIR/current-errors.json" ]; then
        error_count=$(jq '.summary.total // 0' "$REPORT_DIR/current-errors.json" 2>/dev/null || echo "unknown")
        echo "📈 Current errors: $error_count"
    else
        echo "⚠️  No current error report found"
    fi
    
    if [ -f "$REPORT_DIR/auto-fix-report.json" ]; then
        fix_count=$(jq '.summary.successful // 0' "$REPORT_DIR/auto-fix-report.json" 2>/dev/null || echo "unknown")
        echo "🔧 Recent fixes applied: $fix_count"
    else
        echo "⚠️  No auto-fix report found"
    fi
else
    echo "❌ Error reports directory not found"
    echo "💡 Try creating it: mkdir -p $REPORT_DIR"
fi

echo ""

# Check project build status
echo "🏗️  Checking project build status..."
cd /workspace

if npm run build &> /dev/null; then
    echo "✅ Project builds successfully"
else
    echo "❌ Project build failed"
    echo "💡 Check the build logs for more details"
fi

echo ""

# Check linting status
echo "🔍 Checking linting status..."
if npm run lint &> /dev/null; then
    echo "✅ No linting errors"
else
    echo "⚠️  Linting errors found"
    echo "💡 Auto-fixer will attempt to resolve these"
fi

echo ""

# Check available disk space
echo "💾 Checking disk space..."
disk_usage=$(df -h /workspace | tail -1 | awk '{print $5}' | sed 's/%//')
if [ "$disk_usage" -lt 90 ]; then
    echo "✅ Disk space OK (${disk_usage}% used)"
else
    echo "⚠️  Disk space getting low (${disk_usage}% used)"
    echo "💡 Consider cleaning up old logs and reports"
fi

echo ""

# Memory usage check
echo "🧠 Checking memory usage..."
mem_usage=$(free | grep Mem | awk '{printf "%.0f", $3/$2 * 100.0}')
if [ "$mem_usage" -lt 90 ]; then
    echo "✅ Memory usage OK (${mem_usage}% used)"
else
    echo "⚠️  Memory usage high (${mem_usage}% used)"
fi

echo ""
echo "🏁 Health check completed!"
echo "💡 For more details, check individual log files in /workspace/logs/"