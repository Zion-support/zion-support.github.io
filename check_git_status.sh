#!/bin/bash
cd /workspace
echo "Current directory: $(pwd)"
echo "Git status:"
git status --porcelain
echo "Git branch:"
git branch --show-current
echo "Git log -1:"
git log --oneline -1
echo "Git remote status:"
git remote -v