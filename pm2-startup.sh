#!/bin/bash

# PM2 Startup Script to replace GitHub Actions
# This script runs CI/CD tasks automatically

echo "🚀 Starting PM2 CI/CD Automation..."

# Ensure PM2 is installed
type pm2 >/dev/null 2>&1 || npm i -g pm2

# Start PM2 processes from ecosystem
if [ -f ecosystem.config.cjs ]; then
  pm2 start ecosystem.config.cjs || pm2 reload ecosystem.config.cjs
else
  echo "ecosystem.config.cjs not found; skipping"
fi

# Run initial CI pipeline (best-effort)
echo "🔍 Running initial CI pipeline..."
 npm run ci:install || true
 npm run ci:lint || true
 npm run ci:type-check || true
 npm run ci:build || true
 npm run ci:test || true

# Set up PM2 to start on system boot
pm2 save
pm2 startup -u $(whoami) --hp "$HOME" >/dev/null 2>&1 || true

# Set up monitoring
pm2 install pm2-logrotate || true
pm2 set pm2-logrotate:max_size 10M || true
pm2 set pm2-logrotate:retain 7 || true

echo "✅ PM2 CI/CD Automation started successfully!"
echo "📊 Monitor with: pm2 monit"
echo "📋 View logs with: pm2 logs"
echo "🔄 Restart with: pm2 reload ecosystem.config.cjs"