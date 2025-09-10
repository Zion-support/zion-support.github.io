#!/bin/bash

# Quick Start Enhanced PM2 Automation
# Simple script to get the enhanced automation system running

echo "🚀 Quick Start: Enhanced PM2 Automation System"
echo "================================================"
echo ""

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing now..."
    npm install -g pm2
    if [ $? -eq 0 ]; then
        echo "✅ PM2 installed successfully"
    else
        echo "❌ Failed to install PM2. Please install manually: npm install -g pm2"
        exit 1
    fi
else
    echo "✅ PM2 is already installed"
fi

# Check if ecosystem config exists
if [ ! -f "ecosystem-enhanced.config.cjs" ]; then
    echo "❌ Enhanced ecosystem config not found. Please ensure you're in the project root directory."
    exit 1
fi

echo "✅ Enhanced ecosystem config found"

# Create logs directory
mkdir -p logs
echo "✅ Logs directory created"

# Start the enhanced automation system
echo ""
echo "🚀 Starting Enhanced PM2 Automation System..."
echo ""

pm2 start ecosystem-enhanced.config.cjs

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Enhanced PM2 Automation System Started Successfully!"
    echo ""
    echo "📊 Quick Commands:"
    echo "  • pm2 status          - View all processes"
    echo "  • pm2 logs            - View all logs"
    echo "  • pm2 monit           - Real-time monitoring"
    echo "  • pm2 restart all     - Restart all processes"
    echo "  • pm2 stop all        - Stop all processes"
    echo ""
    echo "📁 Logs are available in: ./logs/"
    echo "📋 Reports are generated automatically"
    echo ""
    echo "🔍 To monitor in real-time, run: pm2 monit"
    echo "📖 For detailed documentation, see: ENHANCED_PM2_AUTOMATION_README.md"
    echo ""
    echo "✨ Your application is now being continuously monitored and optimized!"
    
    # Show current status
    echo ""
    echo "📊 Current Status:"
    pm2 status --no-daemon
    
else
    echo ""
    echo "❌ Failed to start Enhanced PM2 Automation System"
    echo "Check the error messages above for details"
    exit 1
fi