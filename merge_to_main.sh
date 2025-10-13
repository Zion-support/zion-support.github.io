#!/bin/bash

# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge the feature branch
git merge cursor/fix-errors-and-merge-to-main-45e4 --no-ff -m "Merge cursor/fix-errors-and-merge-to-main-45e4: Complete error fixes and sitemap updates"

# Push to main
git push origin main

echo "Merge completed successfully!"