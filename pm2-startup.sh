#!/bin/bash

# PM2 Startup Script to replace GitHub Actions
# This script runs CI/CD tasks automatically

echo "🚀 Starting PM2 CI/CD Automation..."

# Start PM2 daemon
pm2 start ecosystem.config.js

# Run initial CI pipeline
echo "🔍 Running initial CI pipeline..."
pm2 exec bolt-app npm run ci:full

# Set up PM2 to start on system boot
pm2 startup

# Save PM2 configuration
pm2 save

# Set up monitoring
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7

echo "✅ PM2 CI/CD Automation started successfully!"
echo "📊 Monitor with: pm2 monit"
echo "📋 View logs with: pm2 logs"
echo "🔄 Restart with: pm2 restart bolt-app"