#!/bin/bash

echo "=== Repository Status Check ==="

# Check git status
echo "Git status:"
git status --short

echo ""
echo "Current branch:"
git branch --show-current

echo ""
echo "Recent commits:"
git log --oneline -5

echo ""
echo "Merge conflicts remaining:"
find src -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null | wc -l

echo ""
echo "Build test:"
npm run build:netlify

echo ""
echo "Status check completed!"