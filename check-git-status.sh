#!/bin/bash

echo "=== Git Status Check ==="
echo "Current directory: $(pwd)"
echo "Git repository: $(git rev-parse --is-inside-work-tree 2>/dev/null || echo 'Not a git repo')"
echo "Current branch: $(git branch --show-current 2>/dev/null || echo 'Unknown')"
echo "Last commit: $(git log -1 --oneline 2>/dev/null || echo 'No commits')"
echo "Status:"
git status --short 2>/dev/null || echo "Cannot get git status"
echo "=== End Status Check ==="