#!/bin/bash

# PM2 Automation Startup Script
# Replaces GitHub Actions workflows

echo "🚀 Starting PM2 Automation Services..."

# Create necessary directories
mkdir -p pm2-automation/logs
mkdir -p pm2-automation/reports

# Make scripts executable
chmod +x pm2-automation/ci-cd-automation.js
chmod +x pm2-automation/continuous-automation.js

# Start PM2 processes
echo "📦 Starting CI/CD Automation..."
pm2 start pm2-automation/ecosystem.config.js --only ci-cd-automation

echo "🔄 Starting Continuous Automation..."
pm2 start pm2-automation/ecosystem.config.js --only continuous-automation

# Save PM2 configuration
pm2 save

# Show status
echo "📊 PM2 Status:"
pm2 status

echo "✅ PM2 Automation services started successfully!"
echo "📝 View logs with: pm2 logs"
echo "📊 Monitor with: pm2 monit"
echo "🔄 Restart with: pm2 restart all"