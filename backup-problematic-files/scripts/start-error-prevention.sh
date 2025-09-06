#!/bin/bash

# Error Prevention Automation Startup Script
# This script starts all PM2 processes for error prevention and monitoring

set -e

echo "🚀 Starting Error Prevention Automation System..."

# Create necessary directories
mkdir -p automation/logs
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

# Start error prevention services
echo "🔧 Starting error prevention services..."
pm2 start ecosystem.error-prevention.config.cjs

# Start additional monitoring services if they exist
if [ -f "ecosystem.config.cjs" ]; then
    echo "📊 Starting additional monitoring services..."
    pm2 start ecosystem.config.cjs
fi

# Set up log rotation
echo "📝 Setting up log rotation..."
pm2 install pm2-logrotate || true
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:workerInterval 60
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Show status
echo "📈 PM2 Status:"
pm2 status

echo "✅ Error Prevention Automation System started successfully!"
echo "📋 Available commands:"
echo "  pm2 status          - Check status of all processes"
echo "  pm2 logs            - View logs"
echo "  pm2 restart all     - Restart all processes"
echo "  pm2 stop all        - Stop all processes"
echo "  pm2 monit           - Open monitoring dashboard"