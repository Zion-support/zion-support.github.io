#!/bin/bash

echo "🚀 Setting up Continuous Automation Cron Jobs..."

# Create automation directories
mkdir -p automation/logs
mkdir -p automation/reports
mkdir -p automation/cron

# Create cron job file
cat > automation/cron/automation.cron << 'EOF'
# Zion Tech Group - Continuous Automation Cron Jobs

# Every 5 minutes - Health checks
*/5 * * * * cd /Users/miami2/zion-app-clone && pm2 status >> automation/logs/pm2-status.log 2>&1

# Every 15 minutes - Error prevention
*/15 * * * * cd /Users/miami2/zion-app-clone && node scripts/automation/automation-orchestrator.cjs >> automation/logs/automation.log 2>&1

# Every hour - Performance monitoring
0 * * * * cd /Users/miami2/zion-app-clone && node scripts/linkedin_automation.js >> automation/logs/marketing.log 2>&1

# Every 6 hours - Security audit
0 */6 * * * cd /Users/miami2/zion-app-clone && npm audit >> automation/logs/security.log 2>&1

# Daily at 2 AM - Comprehensive automation
0 2 * * * cd /Users/miami2/zion-app-clone && node scripts/automation/comprehensive-continuous-automation.cjs >> automation/logs/comprehensive.log 2>&1
EOF

# Install cron jobs
echo "📅 Installing cron jobs..."
crontab automation/cron/automation.cron

echo "✅ Cron jobs installed successfully!"
echo "📊 Current cron jobs:"
crontab -l | grep zion-app-clone

echo ""
echo "🎯 Continuous automation is now set up!"
echo "   - Health checks every 5 minutes"
echo "   - Error prevention every 15 minutes"
echo "   - Marketing automation every hour"
echo "   - Security audit every 6 hours"
echo "   - Comprehensive automation daily at 2 AM"
