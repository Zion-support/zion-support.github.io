#!/bin/bash
# Deployment check script
echo "🚀 Running deployment checks..."

# Type check
echo "🔍 Running type check..."
npm run type-check

# Lint check
echo "🔍 Running lint check..."
npm run lint

# Build check
echo "🔨 Running build check..."
npm run build

# Security audit
echo "🔒 Running security audit..."
npm audit --audit-level=moderate

echo "✅ All deployment checks passed!"
