#!/bin/bash

echo "=== Git Repository Status Check ==="
echo "Current directory: $(pwd)"
echo "Date: $(date)"
echo ""

echo "=== Current Branch ==="
git branch --show-current 2>/dev/null || echo "Unable to determine current branch"
echo ""

echo "=== Git Status ==="
git status --porcelain 2>/dev/null || echo "Unable to check git status"
echo ""

echo "=== Recent Commits ==="
git log --oneline -3 2>/dev/null || echo "Unable to check commit history"
echo ""

echo "=== Remote Branches ==="
git branch -r 2>/dev/null | head -10 || echo "Unable to check remote branches"
echo ""

echo "=== End Status Check ==="