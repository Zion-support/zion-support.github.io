#!/bin/bash

# Switch to main branch
git checkout main

# Merge the fix branch
git merge cursor/fix-errors-and-merge-to-main-35c1

# Push to main
git push origin main

echo "Successfully merged and pushed to main branch"