#!/bin/bash

# Intelligent PM2 Automation Startup Script
# This script starts all intelligent automation processes

echo "🚀 Starting Intelligent PM2 Automation System..."

# Create logs directory if it doesn't exist
mkdir -p logs

# Install PM2 if not already installed
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2..."
    npm install -g pm2
fi

# Setup PM2 log rotation
echo "📝 Setting up PM2 log rotation..."
pm2 install pm2-logrotate || true
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
pm2 set pm2-logrotate:workerInterval 60
pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all || true
pm2 delete all || true

# Start the intelligent automation system
echo "🎯 Starting Intelligent Automation System..."
pm2 start ecosystem.intelligent.config.cjs --update-env

# Show status
echo "📊 PM2 Status:"
pm2 status

# Show logs
echo "📋 Recent logs:"
pm2 logs --lines 20

echo "✅ Intelligent PM2 Automation System started successfully!"
echo "🔍 Monitor with: pm2 monit"
echo "📋 View logs with: pm2 logs"
echo "🛑 Stop with: pm2 stop all"
echo "🔄 Restart with: pm2 restart all"