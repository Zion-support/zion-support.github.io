#!/bin/bash

echo "Setting up cron jobs for PM2 automation processes..."

# Add cron jobs for PM2 processes
# Link checker - Daily at 2 AM
(crontab -l 2>/dev/null; echo "0 2 * * * cd /workspace && pm2 restart link-checker") | crontab -

# Continuous improvement - Weekly on Monday at 2 AM
(crontab -l 2>/dev/null; echo "0 2 * * 1 cd /workspace && pm2 restart continuous-improvement") | crontab -

# Build monitor - Every 6 hours
(crontab -l 2>/dev/null; echo "0 */6 * * * cd /workspace && pm2 restart build-monitor") | crontab -

# Security audit - Weekly on Sunday at 3 AM
(crontab -l 2>/dev/null; echo "0 3 * * 0 cd /workspace && pm2 restart security-audit") | crontab -

echo "Cron jobs have been set up successfully!"
echo "Current cron jobs:"
crontab -l