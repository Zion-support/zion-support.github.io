#!/bin/bash
cd /workspace
<<<<<<< HEAD
git add -A
git commit -m "Resolve merge conflicts and integrate Q4 content" || echo "No changes to commit"
git push origin main || echo "Push failed"
=======
git add .
git commit -m "Fix TypeScript types and SEO component compatibility"
git push
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
