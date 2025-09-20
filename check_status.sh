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
