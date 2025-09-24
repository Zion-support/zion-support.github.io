@echo off
echo Starting merge resolution process...

cd /workspace

echo Checking git status...
git status

echo Adding all changes...
git add .

echo Committing changes...
git commit -m "Add comprehensive AI content and promotional components"

echo Fetching latest changes...
git fetch origin

echo Attempting to merge main...
git merge origin/main

echo Pushing current branch...
git push origin cursor/create-and-deploy-new-content-6e3b

echo Switching to main...
git checkout main

echo Pulling latest main...
git pull origin main

echo Merging content branch...
git merge cursor/create-and-deploy-new-content-6e3b

echo Pushing main...
git push origin main

echo Merge process completed!
pause