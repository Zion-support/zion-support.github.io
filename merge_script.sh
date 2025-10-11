#!/bin/bash

# Merge script to resolve conflicts and merge PR
echo "Starting merge process..."

# Checkout main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge our feature branch
git merge cursor/enhance-app-with-new-services-and-futuristic-design-a8d8 --no-ff -m "Merge: Add comprehensive micro SAAS services and futuristic design enhancements"

# Push to main
git push origin main

echo "Merge completed successfully!"