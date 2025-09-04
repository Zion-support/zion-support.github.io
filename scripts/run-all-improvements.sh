#!/usr/bin/env bash
set -euo pipefail

echo "🚀 Running comprehensive app improvements..."

# Run all improvement scripts
echo "1. Performance optimization..."
npm run optimize:performance

echo "2. Health monitoring..."
npm run monitor:health

echo "3. Security audit..."
npm run audit:security

echo "4. UX optimization..."
npm run optimize:ux

echo "✅ All improvements completed!"
