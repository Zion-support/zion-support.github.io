#!/bin/bash
echo "🔄 Restarting Error Automation System..."
pm2 restart ecosystem.error-automation.config.cjs
echo "✅ Error automation system restarted"
