#!/bin/bash
echo "Checking git status..."
git status --porcelain
echo "Checking current branch..."
git branch --show-current
echo "Checking for merge conflicts..."
git diff --name-only --diff-filter=U