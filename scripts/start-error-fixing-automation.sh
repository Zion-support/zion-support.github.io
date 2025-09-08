#!/bin/bash

# Error Fixing Automation Startup Script
# Launches all PM2 error fixing automations and monitors their status

set -e

echo "🚀 Starting Error Fixing Automation System..."
echo "=============================================="

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Navigate to project root
cd "$(dirname "$0")/.."

echo "📁 Project root: $(pwd)"

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start the error fixing automation system
echo "🚀 Starting Error Fixing Automation System..."

# Start the main ecosystem
echo "📦 Starting PM2 ecosystem..."
pm2 start ecosystem.config.cjs

# Wait for processes to start
echo "⏳ Waiting for processes to start..."
sleep 5

# Show status
echo "📊 PM2 Status:"
pm2 status

# Show logs for error fixing automations
echo ""
echo "📋 Error Fixing Automation Logs:"
echo "================================="

# Show logs for each error fixing automation
echo ""
echo "🔍 Error Monitoring Dashboard:"
pm2 logs error-monitoring-dashboard --lines 5

echo ""
echo "🚨 Comprehensive Error Fixer:"
pm2 logs comprehensive-error-fixer --lines 5

echo ""
echo "🔧 TypeScript Error Fixer:"
pm2 logs typescript-error-fixer --lines 5

echo ""
echo "🎨 Lucide React Icon Fixer:"
pm2 logs lucide-react-icon-fixer --lines 5

# Create monitoring script
cat > scripts/monitor-error-fixing.sh << 'EOF'
#!/bin/bash

# Error Fixing Automation Monitor
# Monitors the status of all error fixing automations

echo "📊 Error Fixing Automation Status Monitor"
echo "========================================"
echo ""

# Show PM2 status
echo "🔄 PM2 Process Status:"
pm2 status

echo ""
echo "📋 Recent Logs:"
echo "================"

# Show recent logs for each automation
echo ""
echo "🔍 Error Monitoring Dashboard (last 10 lines):"
pm2 logs error-monitoring-dashboard --lines 10 --nostream

echo ""
echo "🚨 Comprehensive Error Fixer (last 10 lines):"
pm2 logs comprehensive-error-fixer --lines 10 --nostream

echo ""
echo "🔧 TypeScript Error Fixer (last 10 lines):"
pm2 logs typescript-error-fixer --lines 10 --nostream

echo ""
echo "🎨 Lucide React Icon Fixer (last 10 lines):"
pm2 logs lucide-react-icon-fixer --lines 10 --nostream

echo ""
echo "📊 Reports Directory:"
echo "====================="
if [ -d "reports" ]; then
    ls -la reports/ | head -20
else
    echo "No reports directory found"
fi

echo ""
echo "💡 Quick Commands:"
echo "=================="
echo "pm2 status                    - Show all process status"
echo "pm2 logs [process-name]       - Show logs for specific process"
echo "pm2 restart [process-name]    - Restart specific process"
echo "pm2 stop all                  - Stop all processes"
echo "pm2 delete all                - Delete all processes"
echo "npm run type-check            - Run TypeScript check manually"
echo "npm run lint                  - Run ESLint check manually"
echo "npm run build                 - Run build check manually"
EOF

chmod +x scripts/monitor-error-fixing.sh

echo ""
echo "✅ Error Fixing Automation System Started Successfully!"
echo ""
echo "📋 Available Commands:"
echo "======================"
echo "pm2 status                    - Show all process status"
echo "pm2 logs [process-name]       - Show logs for specific process"
echo "pm2 restart [process-name]    - Restart specific process"
echo "pm2 stop all                  - Stop all processes"
echo "pm2 delete all                - Delete all processes"
echo "scripts/monitor-error-fixing.sh - Monitor automation status"
echo ""
echo "📊 Automation Schedule:"
echo "======================="
echo "Error Monitoring Dashboard    - Every 5 minutes"
echo "TypeScript Error Fixer       - Every 10 minutes"
echo "Comprehensive Error Fixer    - Every 15 minutes"
echo "Lucide React Icon Fixer      - Every 20 minutes"
echo ""
echo "🔍 Monitor the system with: ./scripts/monitor-error-fixing.sh"
echo ""
echo "🚀 System is now running and will automatically fix errors!"