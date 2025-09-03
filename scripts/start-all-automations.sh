#!/bin/bash

# Start All PM2 Automations Script
# This script starts all PM2 automation processes for the Zion Tech Group project

echo "🚀 Starting All PM2 Automations for Zion Tech Group..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2 globally..."
    npm install -g pm2
fi

# Create logs directory if it doesn't exist
mkdir -p logs

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start all automations using ecosystem config
echo "🚀 Starting all automations from ecosystem.config.cjs..."
pm2 start ecosystem.config.cjs

# Wait a moment for processes to start
sleep 3

# Show status
echo "📊 PM2 Process Status:"
pm2 list

# Show logs directory
echo "📁 Logs are being written to:"
echo "   - ./logs/ (main logs directory)"
echo "   - ./logs/health-dashboard/ (health dashboard)"
echo "   - ./logs/ai-improvements.json (AI code quality improvements)"
echo "   - ./logs/performance-optimizations.json (performance optimizations)"
echo "   - ./logs/test-results.json (test automation results)"

# Show monitoring options
echo ""
echo "🔍 Monitoring Commands:"
echo "   pm2 monit                    - Real-time monitoring"
echo "   pm2 logs                     - View all logs"
echo "   pm2 logs [process-name]      - View specific process logs"
echo "   pm2 restart [process-name]   - Restart specific process"
echo "   pm2 stop all                 - Stop all automations"
echo "   pm2 delete all               - Remove all automations"

# Show automation schedules
echo ""
echo "⏰ Automation Schedules:"
echo "   Project Health Monitor:      Every 15 minutes"
echo "   TypeScript Syntax Fixer:     Every 10 minutes"
echo "   Dependency Manager:          Every 2 hours"
echo "   Project Health Dashboard:    Every 5 minutes"
echo "   AI Code Quality Enhancer:    Every 20 minutes"
echo "   Performance Optimizer:       Every 4 hours"
echo "   Smart Testing Automation:    Every 6 hours"

# Show health dashboard location
echo ""
echo "🌐 Health Dashboard:"
echo "   Open ./logs/health-dashboard/index.html in your browser"
echo "   Dashboard updates every 5 minutes"

echo ""
echo "✅ All PM2 automations started successfully!"
echo "🎯 Your project is now under intelligent automation management!"