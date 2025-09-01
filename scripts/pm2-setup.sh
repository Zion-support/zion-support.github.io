#!/bin/bash

# PM2 Setup Script
# This script sets up PM2 to replace GitHub Actions workflows

echo "🚀 Setting up PM2 to replace GitHub Actions..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2 globally..."
    npm install -g pm2
fi

# Start the application with PM2
echo "🔄 Starting application with PM2..."
pm2 start ecosystem.config.js

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Setup PM2 to start on system boot
echo "🔧 Setting up PM2 startup script..."
pm2 startup

# Start the cron jobs
echo "⏰ Starting scheduled tasks..."
pm2 start ecosystem.config.js --only cron

# Save the new configuration
pm2 save

echo "✅ PM2 setup complete!"
echo "📊 Check status with: pm2 status"
echo "📝 View logs with: pm2 logs"
echo "🔄 Restart with: pm2 restart all"