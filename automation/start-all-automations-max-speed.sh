#!/bin/bash

##############################################################################
# START ALL AI AUTOMATIONS - MAXIMUM SPEED MODE
# This script starts all automation agents in continuous ultra-fast mode
##############################################################################

cd "$(dirname "$0")/.."

echo "🚀 Starting ALL AI Automations in MAXIMUM SPEED MODE..."
echo ""

# Ensure PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 not found. Installing..."
    npm install -g pm2
fi

# Ensure logs directory exists
mkdir -p automation/logs

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start all automations from ecosystem config
echo ""
echo "⚡ Starting all automations from ecosystem.config.cjs..."
pm2 start ecosystem.config.cjs

# Save PM2 configuration
pm2 save

# Show status
echo ""
echo "✅ All automations started!"
echo ""
pm2 status
echo ""
echo "📊 View logs with: pm2 logs"
echo "📊 View specific logs: pm2 logs <name>"
echo "🛑 Stop all with: pm2 stop all"
echo "🔄 Restart all with: pm2 restart all"
echo ""
echo "🚀 System is now running autonomously at MAXIMUM SPEED!"
echo ""
echo "Key automations running:"
echo "  ⚡ AI Speed Accelerator: Every 5 seconds"
echo "  ⚡ AI Ultra-Fast Runner: Every 1 second"
echo "  ⚡ AI Supreme Agent: Every 1 minute"
echo "  ⚡ AI Autonomous Developer: Every 2 minutes"
echo "  ⚡ AI Super Orchestrator: Every 5 minutes"
echo "  ⚡ AI Continuous Improvement: Every 1 minute"
echo "  ⚡ AI Build Fixer: Every 30 seconds"
echo "  ⚡ And many more..."
echo ""
