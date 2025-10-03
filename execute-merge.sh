#!/bin/bash

echo "🚀 Executing merge for AI 2027 breakthrough content..."

# Ensure we're on main
git checkout main

# Merge our feature branch
git merge cursor/create-and-deploy-new-content-568b --no-edit

# Push to main
git push origin main

echo "✅ Merge completed successfully!"