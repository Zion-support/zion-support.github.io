#!/bin/bash

# Script to resolve merge conflicts systematically
# Keep our PM2 automation improvements, accept main branch for others

echo "Resolving merge conflicts..."

# Keep our PM2 automation files
git checkout --ours ecosystem.config.js
git checkout --ours pm2-automation.sh
git checkout --ours eslint.config.cjs

# For most other files, accept the main branch version
git status --porcelain | grep "^UU\|^AA\|^DD" | while read line; do
    file=$(echo "$line" | cut -c4-)
    
    # Skip our important files
    if [[ "$file" == "ecosystem.config.js" || "$file" == "pm2-automation.sh" || "$file" == "eslint.config.cjs" ]]; then
        echo "Keeping our version of $file"
        continue
    fi
    
    # Accept main branch version for most files
    echo "Accepting main branch version of $file"
    git checkout --theirs "$file"
done

echo "Adding resolved files..."
git add .

echo "Committing merge resolution..."
git commit -m "Resolve merge conflicts - keep PM2 automation improvements"

echo "Pushing resolved changes..."
git push origin HEAD