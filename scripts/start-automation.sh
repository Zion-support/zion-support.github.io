#!/bin/bash

# Start PM2 Automation System
# This script starts all automation processes using PM2

echo "Starting PM2 Automation System..."

# Ensure PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Create logs directory
mkdir -p automation/logs

# Start PM2 processes
echo "Starting PM2 processes..."
pm2 start ecosystem.config.cjs --update-env

# Save PM2 configuration
pm2 save

# Set up PM2 to start on system boot
pm2 startup

echo "PM2 Automation System started successfully!"
echo "Use 'pm2 status' to check process status"
echo "Use 'pm2 logs' to view logs"
echo "Use 'pm2 stop ecosystem.config.cjs' to stop all processes"