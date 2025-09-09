#!/bin/bash

# PM2 Automation Startup Script
# This script starts all PM2 automation processes

echo "🚀 Starting PM2 Automation System..."

# Make all scripts executable
echo "📝 Making scripts executable..."
chmod +x scripts/pm2/*.js

# Create logs directory if it doesn't exist
echo "📁 Creating logs directory..."
mkdir -p logs

# Start the PM2 ecosystem
echo "🔄 Starting PM2 ecosystem..."
pm2 start ecosystem.config.js

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Setup PM2 to start on system boot
echo "🔧 Setting up PM2 startup..."
pm2 startup

# Show PM2 status
echo "📊 PM2 Status:"
pm2 list

# Show PM2 logs
echo "📋 PM2 Logs:"
pm2 logs --lines 10

echo "✅ PM2 Automation System started successfully!"
echo ""
echo "📋 Available automations:"
echo "  - CI/CD Pipeline (every 6 hours)"
echo "  - Continuous Improvement (weekly on Monday at 2 AM)"
echo "  - Dependency Management (weekly on Monday at 2 AM)"
echo "  - Link Checker (daily at 2 AM)"
echo "  - Code Quality (every 4 hours)"
echo "  - Performance Monitor (every 2 hours)"
echo "  - Security Audit (daily at 3 AM)"
echo "  - Build Automation (every 8 hours)"
echo ""
echo "🔍 Monitor with: pm2 monit"
echo "📋 View logs with: pm2 logs"
echo "🔄 Restart with: pm2 restart all"
echo "⏹️  Stop with: pm2 stop all"