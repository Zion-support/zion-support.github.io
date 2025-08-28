#!/bin/bash

echo "🚀 Starting PM2 automation system..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Start the main application
echo "📱 Starting main application..."
pm2 start ecosystem.config.js --only zion-app

# Start the backend server if it exists
if [ -d "./server" ]; then
    echo "🔧 Starting backend server..."
    pm2 start ecosystem.config.js --only zion-backend
fi

# Start all automation processes
echo "🤖 Starting automation processes..."
pm2 start ecosystem.config.js --only automation

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Show status
echo "📊 PM2 Status:"
pm2 status

echo "✅ PM2 automation system started successfully!"
echo "📝 Use 'pm2 logs' to view logs"
echo "📝 Use 'pm2 restart all' to restart all processes"
echo "📝 Use 'pm2 stop all' to stop all processes"
