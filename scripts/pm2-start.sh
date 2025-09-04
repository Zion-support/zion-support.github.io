#!/bin/bash

# PM2 Automation Startup Script
# This script starts the complete PM2 automation system for error monitoring and fixing

set -e

echo "🚀 Starting PM2 Automation System..."

# Ensure PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2..."
    npm install -g pm2
fi

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p /workspace/logs
mkdir -p /workspace/error-reports

# Make scripts executable
chmod +x /workspace/scripts/error-monitor.js
chmod +x /workspace/scripts/auto-fixer.js

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all || true
pm2 delete all || true

# Start the ecosystem
echo "🌟 Starting PM2 ecosystem..."
pm2 start /workspace/ecosystem.config.cjs --env production

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Setup PM2 startup script (for auto-start on reboot)
echo "⚙️ Setting up PM2 startup..."
pm2 startup || echo "Note: PM2 startup setup may require manual configuration"

# Display status
echo "📊 PM2 Status:"
pm2 status

echo "✅ PM2 Automation System started successfully!"
echo ""
echo "📝 Available commands:"
echo "  pm2 status                 - Show all processes status"
echo "  pm2 logs                   - Show all logs"
echo "  pm2 logs error-monitor     - Show error monitor logs"
echo "  pm2 logs auto-fixer        - Show auto-fixer logs"
echo "  pm2 restart all            - Restart all processes"
echo "  pm2 stop all               - Stop all processes"
echo "  pm2 delete all             - Delete all processes"
echo ""
echo "📂 Log files are available in /workspace/logs/"
echo "📋 Error reports are available in /workspace/error-reports/"