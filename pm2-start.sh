#!/bin/bash

echo "🚀 Starting PM2 automation ecosystem..."

# Start all automation processes
pm2 start ecosystem.config.cjs

# Save PM2 configuration
pm2 save

# Setup PM2 to start on system boot
pm2 startup

echo "✅ PM2 automation ecosystem started successfully!"
echo "📊 Check status with: pm2 status"
echo "📋 View logs with: pm2 logs"
echo "🔄 Restart all with: pm2 restart all"
echo "⏹️  Stop all with: pm2 stop all"