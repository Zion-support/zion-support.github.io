#!/bin/bash

echo "=== Git Status Check ==="
echo "Current directory: $(pwd)"
echo "Current branch: $(git branch --show-current)"
echo "Git status:"
git status --porcelain
echo ""
echo "Recent commits:"
git log --oneline -5
echo ""
echo "Remote branches with recent activity:"
git branch -r | grep "cursor/add-new-services" | head -3
echo ""
echo "=== End Status Check ==="