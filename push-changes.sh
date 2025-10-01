#!/bin/bash

# Simple script to push changes
cd /workspace

# Add all changes
git add .

# Commit the merge
git commit -F merge-message.txt

# Push to main
git push origin main

echo "Changes pushed successfully!"