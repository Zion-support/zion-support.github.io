#!/bin/bash

# Error Monitoring Startup Script
echo "Starting Error Monitoring System..."

# Create logs directory
mkdir -p logs

# Make scripts executable
chmod +x scripts/*.js

# Start PM2 processes
echo "Starting PM2 error monitoring processes..."
pm2 start ecosystem.error-monitor.cjs

# Show status
echo "PM2 Status:"
pm2 status

# Show logs
echo "Recent logs:"
pm2 logs --lines 10

echo "Error monitoring system started successfully!"
echo "To view logs: pm2 logs"
echo "To stop: pm2 stop all"
echo "To restart: pm2 restart all"