@echo off
echo Starting merge resolution process...

cd /d C:\workspace

echo Step 1: Checking git status...
git status

echo Step 2: Adding all changes...
git add .

echo Step 3: Committing changes...
git commit -m "Add comprehensive AI content and promotional components"

echo Step 4: Fetching latest changes...
git fetch origin

echo Step 5: Attempting to merge main...
git merge origin/main

echo Step 6: Pushing current branch...
git push origin cursor/create-and-deploy-new-content-6e3b

echo Step 7: Switching to main...
git checkout main

echo Step 8: Pulling latest main...
git pull origin main

echo Step 9: Merging content branch...
git merge cursor/create-and-deploy-new-content-6e3b

echo Step 10: Pushing main...
git push origin main

echo Merge process completed successfully!
pause