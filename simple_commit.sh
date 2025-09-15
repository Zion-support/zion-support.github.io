#!/bin/bash
cd /workspace
git add -A
git commit -m "Resolve merge conflicts and integrate Q4 content" || echo "No changes to commit"
git push origin main || echo "Push failed"