#!/bin/bash

# Merge new content to main branch
echo "Switching to main branch..."
git checkout main

echo "Pulling latest changes..."
git pull origin main

echo "Merging feature branch..."
git merge cursor/create-and-deploy-new-content-ae57

echo "Pushing to main..."
git push origin main

echo "Merge completed successfully!"