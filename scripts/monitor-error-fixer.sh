#!/bin/bash

echo "🔧 Console Error Fixer Monitor for Zion App"
echo "=========================================="

# Check if PM2 is running
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Please install PM2 first."
    exit 1
fi

# Function to show error fixer status
show_status() {
    echo ""
    echo "📊 Console Error Fixer Status:"
    echo "=============================="
    pm2 show console-error-fixer 2>/dev/null || echo "❌ Console error fixer not running"
    
    echo ""
    echo "📋 Recent Error Fixer Logs:"
    echo "============================"
    pm2 logs console-error-fixer --lines 20 2>/dev/null || echo "❌ No logs available"
}

# Function to show error reports
show_reports() {
    echo ""
    echo "📄 Error Fix Reports:"
    echo "====================="
    
    if [ -f "console-error-fix-report.json" ]; then
        echo "📊 Latest Report:"
        cat console-error-fix-report.json | jq '.' 2>/dev/null || cat console-error-fix-report.json
    else
        echo "ℹ️  No error fix reports found yet"
    fi
    
    # Check for older reports
    if ls console-error-fix-report-*.json 1> /dev/null 2>&1; then
        echo ""
        echo "📚 Historical Reports:"
        ls -la console-error-fix-report-*.json | head -10
    fi
}

# Function to show current errors
show_current_errors() {
    echo ""
    echo "🔍 Current Error Scan:"
    echo "======================"
    
    # Run a quick error scan
    echo "🔍 Running quick error scan..."
    npm run lint 2>&1 | head -20 || echo "⚠️  Lint scan failed"
    
    echo ""
    echo "🔍 Running TypeScript check..."
    npm run type-check 2>&1 | head -20 || echo "⚠️  TypeScript check failed"
}

# Function to manually trigger error fixer
trigger_fix() {
    echo ""
    echo "🔧 Manually Triggering Error Fixer:"
    echo "==================================="
    
    if pm2 show console-error-fixer >/dev/null 2>&1; then
        echo "🔄 Restarting console error fixer..."
        pm2 restart console-error-fixer
        
        echo "⏳ Waiting for fixer to complete..."
        sleep 30
        
        echo "📊 Updated Status:"
        pm2 show console-error-fixer
    else
        echo "❌ Console error fixer is not running"
    fi
}

# Function to show automation overview
show_overview() {
    echo ""
    echo "🤖 PM2 Automation Overview:"
    echo "==========================="
    pm2 status
    
    echo ""
    echo "📈 Process Memory Usage:"
    pm2 monit --no-daemon &
    MONIT_PID=$!
    sleep 5
    kill $MONIT_PID 2>/dev/null
}

# Main menu
while true; do
    echo ""
    echo "🔧 Console Error Fixer Monitor Menu:"
    echo "===================================="
    echo "1. Show Error Fixer Status"
    echo "2. Show Error Reports"
    echo "3. Show Current Errors"
    echo "4. Manually Trigger Fixer"
    echo "5. Show Automation Overview"
    echo "6. Exit"
    echo ""
    read -p "Select an option (1-6): " choice
    
    case $choice in
        1)
            show_status
            ;;
        2)
            show_reports
            ;;
        3)
            show_current_errors
            ;;
        4)
            trigger_fix
            ;;
        5)
            show_overview
            ;;
        6)
            echo "👋 Exiting monitor..."
            exit 0
            ;;
        *)
            echo "❌ Invalid option. Please select 1-6."
            ;;
    esac
    
    echo ""
    read -p "Press Enter to continue..."
done
