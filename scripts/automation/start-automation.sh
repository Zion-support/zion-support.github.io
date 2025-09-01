#!/bin/bash

# PM2 Error Prevention & Code Quality Automation Startup Script
# This script starts all automation services with PM2

echo "🚀 Starting PM2 Error Prevention & Code Quality Automation..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Please install it first:"
    echo "   npm install -g pm2"
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the project root directory"
    exit 1
fi

# Create logs directory if it doesn't exist
mkdir -p logs

echo "📁 Creating logs directory..."

# Stop any existing automation services
echo "🛑 Stopping existing automation services..."
pm2 stop error-prevention code-quality-monitor auto-fix-scheduler 2>/dev/null || true
pm2 delete error-prevention code-quality-monitor auto-fix-scheduler 2>/dev/null || true

# Start all automation services
echo "🔧 Starting automation services..."

# Start Error Prevention
echo "📊 Starting Error Prevention Service..."
pm2 start scripts/automation/pm2-error-prevention.cjs --name error-prevention --max-memory-restart 1G

# Start Code Quality Monitor
echo "🔍 Starting Code Quality Monitor..."
pm2 start scripts/automation/code-quality-monitor.cjs --name code-quality-monitor --max-memory-restart 512M

# Start Auto-Fix Scheduler
echo "⏰ Starting Auto-Fix Scheduler..."
pm2 start scripts/automation/auto-fix-scheduler.cjs --name auto-fix-scheduler --max-memory-restart 256M

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Show status
echo ""
echo "✅ All automation services started successfully!"
echo ""
echo "📊 PM2 Status:"
pm2 list
echo ""
echo "📋 Available Commands:"
echo "  pm2 logs                    - View all logs"
echo "  pm2 logs error-prevention   - View error prevention logs"
echo "  pm2 logs code-quality-monitor - View quality monitor logs"
echo "  pm2 logs auto-fix-scheduler - View scheduler logs"
echo "  pm2 stop all               - Stop all services"
echo "  pm2 restart all            - Restart all services"
echo "  pm2 delete all             - Remove all services"
echo ""
echo "📚 For more information, see: scripts/automation/README.md"
echo ""
echo "🎉 Automation is now running! Your code will be continuously monitored and fixed."