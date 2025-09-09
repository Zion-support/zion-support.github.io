#!/bin/bash

# Simple merge script
cd /workspace

echo "Current directory: $(pwd)"
echo "Git status:"
git status

echo "Current branch:"
git branch

echo "Available branches:"
git branch -r | head -10