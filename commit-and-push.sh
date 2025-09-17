#!/bin/bash

echo "🚀 Starting commit and push process..."

# Add all changes
git add .

# Commit the changes
git commit -m "Resolve merge conflicts and update main branch"

# Push to main branch
git push origin main

echo "✅ Commit and push completed!"