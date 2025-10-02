#!/bin/bash

echo "Minimal merge process starting..."

# Basic git operations
cd /workspace
git checkout main
git merge cursor/create-and-deploy-new-content-9875
git push origin main

echo "Merge completed!"