#!/bin/bash

# Quick Status Check Script
# Checks current git status and verifies no conflicts

echo "🔍 Quick Status Check"
echo "===================="

# Check git status
echo "📊 Git Status:"
git status --short

# Check for merge conflicts
echo ""
echo "🔍 Checking for merge conflicts:"
