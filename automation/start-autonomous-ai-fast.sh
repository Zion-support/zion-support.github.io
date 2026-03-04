#!/bin/bash

# Ultra-Fast AI Autonomous Developer Startup Script
# Starts all AI agents in continuous mode at maximum speed

cd "$(dirname "$0")/.."

echo "🚀 Starting AI Autonomous Developer System at MAXIMUM SPEED..."

# Set environment variables for maximum speed
export CONTINUOUS_MODE=true
export INTERVAL_MINUTES=5
export MAX_CHANGES_PER_RUN=20
export MAX_CONCURRENT_AGENTS=5
export AUTO_COMMIT=true
export AUTO_PUSH=true
export FAST_MODE=true
export PARALLEL_ANALYSIS=true

# Start AI Autonomous Developer (runs continuously)
echo "🤖 Starting AI Autonomous Developer..."
pm2 start ecosystem.config.cjs --only ai-autonomous-developer

# Start AI Super Orchestrator (coordinates all agents)
echo "🎯 Starting AI Super Orchestrator..."
pm2 start ecosystem.config.cjs --only ai-super-orchestrator

# Start Continuous Improvement Agent
echo "⚡ Starting Continuous Improvement Agent..."
pm2 start ecosystem.config.cjs --only ai-continuous-improvement

# Start Build Fixer Agent
echo "🔧 Starting Build Fixer Agent..."
pm2 start ecosystem.config.cjs --only ai-build-fixer || echo "Build fixer not configured"

# Show status
echo ""
echo "✅ All AI agents started!"
echo ""
pm2 status
echo ""
echo "📊 View logs with: pm2 logs"
echo "🛑 Stop all with: pm2 stop all"
echo ""
echo "🚀 System is now running autonomously at MAXIMUM SPEED!"
echo "   - AI Autonomous Developer: Every 2 minutes"
echo "   - AI Super Orchestrator: Every 5 minutes"
echo "   - Continuous Improvement: Every 1 minute"
echo "   - Build Fixer Agent: Every 30 seconds"
echo ""

