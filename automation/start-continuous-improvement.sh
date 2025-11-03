#!/bin/bash

##############################################################################
# AI Continuous Improvement Agent - Quick Start Script
##############################################################################

set -e

echo "🤖 AI Continuous Improvement Agent - Quick Start"
echo "=================================================="
echo ""

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
  echo "❌ Error: Node.js 18+ required (current: $(node --version))"
  exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Navigate to project root
cd "$(dirname "$0")/.."
echo "✅ Project root: $(pwd)"

# Create required directories
mkdir -p automation/reports automation/logs automation/data
echo "✅ Directories created"

# Display menu
echo ""
echo "Select mode:"
echo "1) Run once (single improvement cycle)"
echo "2) Run continuously (every 10 minutes)"
echo "3) Analysis only (no fixes)"
echo "4) Start with PM2 (background process)"
echo "5) View logs"
echo "6) View latest report"
echo ""
read -p "Enter choice [1-6]: " choice

case $choice in
  1)
    echo ""
    echo "🚀 Running single improvement cycle..."
    echo ""
    node automation/ai-continuous-improvement-agent.cjs run
    ;;
  
  2)
    echo ""
    echo "🔄 Starting continuous mode (Ctrl+C to stop)..."
    echo "ℹ️  The agent will run every 10 minutes"
    echo ""
    CONTINUOUS_MODE=true node automation/ai-continuous-improvement-agent.cjs continuous
    ;;
  
  3)
    echo ""
    echo "🔍 Running analysis only..."
    echo ""
    AUTO_COMMIT=false node automation/ai-continuous-improvement-agent.cjs analyze
    ;;
  
  4)
    echo ""
    echo "🚀 Starting with PM2..."
    echo ""
    
    # Check if PM2 is installed
    if ! command -v pm2 &> /dev/null; then
      echo "❌ PM2 not installed. Installing globally..."
      npm install -g pm2
    fi
    
    # Start with PM2
    pm2 start ecosystem.config.cjs --only ai-continuous-improvement
    
    echo ""
    echo "✅ Agent started in background"
    echo ""
    echo "Useful PM2 commands:"
    echo "  pm2 logs ai-continuous-improvement    - View logs"
    echo "  pm2 status                            - Check status"
    echo "  pm2 stop ai-continuous-improvement    - Stop agent"
    echo "  pm2 restart ai-continuous-improvement - Restart agent"
    echo "  pm2 monit                             - Monitor resources"
    ;;
  
  5)
    echo ""
    echo "📜 Viewing logs (Ctrl+C to stop)..."
    echo ""
    
    if command -v pm2 &> /dev/null && pm2 list | grep -q ai-continuous-improvement; then
      pm2 logs ai-continuous-improvement
    else
      tail -f automation/logs/ai-continuous-improvement.log
    fi
    ;;
  
  6)
    echo ""
    echo "📊 Latest Report"
    echo "================"
    echo ""
    
    if [ -f "automation/reports/acia-latest-report.json" ]; then
      # Check if jq is available
      if command -v jq &> /dev/null; then
        cat automation/reports/acia-latest-report.json | jq '.'
      else
        cat automation/reports/acia-latest-report.json
      fi
      
      echo ""
      echo "Full report: automation/reports/acia-latest-report.json"
    else
      echo "❌ No report found. Run the agent first."
    fi
    ;;
  
  *)
    echo "❌ Invalid choice"
    exit 1
    ;;
esac

echo ""
echo "✨ Done!"

