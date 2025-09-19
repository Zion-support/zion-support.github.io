#!/bin/bash
cd /workspace
git add App.tsx
git commit -m "Resolve merge conflicts in App.tsx"
git checkout main
git merge test-merge
git push origin main