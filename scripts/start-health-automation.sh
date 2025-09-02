#!/bin/bash

# Project Health Automation Startup Script
# Launches all PM2 automation processes for project health monitoring

set -e

echo "🚀 Starting Project Health Automation System..."

# Ensure we're in the project root
cd "$(dirname "$0")/.."

# Create logs directory if it doesn't exist
mkdir -p logs

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start the main PM2 ecosystem
echo "📦 Starting PM2 ecosystem..."
pm2 start ecosystem.config.cjs

# Start the health automation processes
echo "🔧 Starting health automation processes..."

# Project Health Monitor (every 15 minutes)
echo "  - Starting Project Health Monitor..."
pm2 start ./scripts/automation/project-health-monitor.cjs --name "project-health-monitor" \
  --cron-restart "*/15 * * * *" \
  --max-memory-restart 1G \
  --log ./logs/project-health-monitor.log \
  --error ./logs/project-health-monitor-error.log

# TypeScript Syntax Fixer (every 10 minutes)
echo "  - Starting TypeScript Syntax Fixer..."
pm2 start ./scripts/automation/typescript-syntax-fixer.cjs --name "typescript-syntax-fixer" \
  --cron-restart "*/10 * * * *" \
  --max-memory-restart 1G \
  --log ./logs/typescript-syntax-fixer.log \
  --error ./logs/typescript-syntax-fixer-error.log

# Dependency Manager (every 2 hours)
echo "  - Starting Dependency Manager..."
pm2 start ./scripts/automation/dependency-manager.cjs --name "dependency-manager" \
  --cron-restart "0 */2 * * *" \
  --max-memory-restart 1G \
  --log ./logs/dependency-manager.log \
  --error ./logs/dependency-manager-error.log

# Project Health Dashboard (every 5 minutes)
echo "  - Starting Project Health Dashboard..."
pm2 start ./scripts/automation/project-health-dashboard.cjs --name "project-health-dashboard" \
  --cron-restart "*/5 * * * *" \
  --max-memory-restart 512M \
  --log ./logs/project-health-dashboard.log \
  --error ./logs/project-health-dashboard-error.log

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Show status
echo "📊 PM2 Status:"
pm2 list

echo ""
echo "✅ Project Health Automation System started successfully!"
echo ""
echo "📋 Available commands:"
echo "  pm2 list                    - Show all processes"
echo "  pm2 logs [process-name]     - Show logs for a process"
echo "  pm2 restart [process-name]  - Restart a process"
echo "  pm2 stop [process-name]     - Stop a process"
echo "  pm2 delete [process-name]   - Delete a process"
echo ""
echo "🌐 Health Dashboard available at: ./logs/health-dashboard/index.html"
echo "📁 Logs available in: ./logs/"
echo ""
echo "🔄 Processes will automatically restart based on their schedules:"
echo "  - Project Health Monitor: Every 15 minutes"
echo "  - TypeScript Syntax Fixer: Every 10 minutes"
echo "  - Dependency Manager: Every 2 hours"
echo "  - Health Dashboard: Every 5 minutes"
echo ""
echo "🚨 To stop all automations: pm2 stop all"
echo "🗑️  To remove all automations: pm2 delete all"
