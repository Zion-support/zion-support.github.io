#!/bin/bash

# Error Automation Startup Script
# Initializes PM2 automation system for error fixing

set -e

echo "🚀 Starting Error Automation System..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Navigate to project root
cd "$(dirname "$0")/.."

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p logs
mkdir -p automation-reports
mkdir -p error-reports

# Install dependencies if needed
echo "📦 Installing dependencies..."
npm install

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start the comprehensive error automation system
echo "🚀 Starting Comprehensive Error Automation..."
pm2 start ecosystem.config.cjs --only comprehensive-error-fixer,error-fixer-automation,console-error-fixer

# Start additional automation processes
echo "🚀 Starting additional automation processes..."
pm2 start ecosystem.config.cjs --ignore comprehensive-error-fixer,error-fixer-automation,console-error-fixer

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Setup PM2 startup script
echo "🔧 Setting up PM2 startup script..."
pm2 startup

# Display status
echo "📊 PM2 Status:"
pm2 status

echo "📋 PM2 Logs:"
pm2 logs --lines 10

echo "✅ Error Automation System started successfully!"
echo ""
echo "📊 Monitoring Commands:"
echo "  pm2 status                    - Check process status"
echo "  pm2 logs                      - View logs"
echo "  pm2 logs comprehensive-error-fixer - View error fixer logs"
echo "  pm2 restart all               - Restart all processes"
echo "  pm2 stop all                  - Stop all processes"
echo ""
echo "📁 Report Locations:"
echo "  automation-reports/           - Comprehensive automation reports"
echo "  error-reports/               - Error fixing reports"
echo "  logs/                        - Process logs"