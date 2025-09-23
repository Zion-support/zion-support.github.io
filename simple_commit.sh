#!/bin/bash
cd /workspace
<<<<<<< HEAD
git add .
git commit -m "Fix TypeScript types and SEO component compatibility"
git push
=======
git add -A
git commit -m "Resolve merge conflicts and integrate Q4 content" || echo "No changes to commit"
git push origin main || echo "Push failed"
>>>>>>> 05dc04f0e7f1fc291d5e5e0eaf190726209f1cc4
