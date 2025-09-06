#!/bin/bash

# Error Prevention System Startup Script
# This script starts all PM2 processes for error prevention and monitoring

set -e

echo "🚀 Starting Error Prevention System..."

# Ensure we're in the workspace directory
cd /workspace

# Create necessary directories
mkdir -p automation/logs
mkdir -p logs

# Install PM2 if not already installed
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2..."
    npm install -g pm2
fi

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all || true
pm2 delete all || true

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Start the error prevention system
echo "🔧 Starting Error Prevention System..."
pm2 start ecosystem.error-prevention.cjs --update-env

# Start the main application
echo "🌐 Starting Main Application..."
pm2 start ecosystem.intelligent.cjs --update-env

# Save PM2 configuration
pm2 save

# Setup PM2 startup
pm2 startup || true

# Show status
echo "📊 PM2 Status:"
pm2 status

# Show logs
echo "📋 Recent logs:"
pm2 logs --lines 50

echo "✅ Error Prevention System started successfully!"
echo "🔍 Monitor with: pm2 status"
echo "📋 View logs with: pm2 logs"
echo "🛑 Stop with: pm2 stop all"