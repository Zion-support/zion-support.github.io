#!/bin/bash
set -e

echo "Completing rebase process..."

# Add the resolved jest.config.cjs
git add jest.config.cjs

# Continue the rebase
git rebase --continue

# Push to main
git push origin main

echo "Rebase completed successfully!"