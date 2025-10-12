#!/bin/bash

# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge the feature branch
git merge cursor/enhance-app-with-new-services-and-futuristic-design-a81a --no-ff -m "Merge: comprehensive app enhancements with futuristic design and real micro SAAS services"

# Push to main
git push origin main

echo "Merge completed successfully!"