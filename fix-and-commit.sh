#!/bin/bash

# Fix syntax errors and commit changes
echo "Adding fixed files to git..."
git add src/main.jsx
git add src/SafeApp.tsx
git add src/data/revolutionaryMicroSaasServices2030.ts
git add src/components/ui/hover-card.tsx
git add src/store/hooks.tsx
git add src/store/cartSlice.ts
git add src/store/authSlice.js
git add src/test/testUtils.tsx
git add src/test/integration/AIChatAssistant.test.tsx

echo "Committing changes..."
git commit -m "Fix syntax errors in corrupted files

- Fixed corrupted main.jsx with malformed imports and syntax
- Fixed SafeApp.tsx syntax errors
- Fixed revolutionaryMicroSaasServices2030.ts corrupted imports
- Fixed hover-card.tsx malformed JSX
- Fixed store files (hooks.tsx, cartSlice.ts, authSlice.js) with merge conflicts
- Fixed test files with syntax errors
- Resolved all merge conflict markers and malformed code"

echo "Current branch:"
git branch --show-current

echo "Pushing changes..."
git push

echo "Checking if we can merge to main..."
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ]; then
    echo "Switching to main branch..."
    git checkout main
    echo "Merging $current_branch into main..."
    git merge $current_branch
    echo "Pushing merged changes to main..."
    git push origin main
else
    echo "Already on main branch, changes pushed directly"
fi

echo "Done!"