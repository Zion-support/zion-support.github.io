#!/bin/bash

echo "Resolving merge conflicts..."

# Add all resolved files
git add .

# Commit the resolved conflicts
git commit -m "fix: resolve merge conflicts in Header, FeatureCard, and other components"

# Check status
git status

echo "Merge conflicts resolved and committed!"
echo "Now you can proceed with merging to main branch."