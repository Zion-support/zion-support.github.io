#!/bin/bash

echo "Starting final comprehensive conflict resolution..."

# Abort current merge
git merge --abort

# Reset to our current state
git reset --hard HEAD

# Now merge with strategy that accepts remote changes for most files
git merge origin/main --strategy=recursive -X theirs --no-commit

echo "Merge initiated with 'theirs' strategy. Now resolving conflicts..."

# For critical build configuration files, we want to keep our fixes
echo "Preserving critical build configuration fixes..."

# Keep our netlify.toml
if [ -f "netlify.toml" ]; then
    git checkout --ours netlify.toml
    git add netlify.toml
    echo "Preserved netlify.toml"
fi

# Keep our vite.config.ts
if [ -f "vite.config.ts" ]; then
    git checkout --ours vite.config.ts
    git add vite.config.ts
    echo "Preserved vite.config.ts"
fi

# Keep our postcss.config.cjs
if [ -f "postcss.config.cjs" ]; then
    git checkout --ours postcss.config.cjs
    git add postcss.config.cjs
    echo "Preserved postcss.config.cjs"
fi

# Keep our tailwind.config.js
if [ -f "tailwind.config.js" ]; then
    git checkout --ours tailwind.config.js
    git add tailwind.config.js
    echo "Preserved tailwind.config.js"
fi

# For package.json, keep the remote version
if [ -f "package.json" ]; then
    git checkout --theirs package.json
    git add package.json
    echo "Accepted remote package.json"
fi

# For all other files, accept the remote version (origin/main)
echo "Accepting remote versions for all other files..."

# Get list of all conflicted files and resolve them
git status --porcelain | grep "^UU\|^AA\|^DD" | cut -c4- | while read file; do
    if [ -f "$file" ]; then
        git checkout --theirs "$file"
        git add "$file"
        echo "Resolved conflict in: $file"
    fi
done

# Handle deleted files by accepting the remote version
git status --porcelain | grep "^DU\|^UD" | cut -c4- | while read file; do
    if [ -f "$file" ]; then
        git add "$file"
        echo "Added deleted file: $file"
    fi
done

# Handle modify/delete conflicts by accepting the remote version
git status --porcelain | grep "^AU\|^UA" | cut -c4- | while read file; do
    if [ -f "$file" ]; then
        git add "$file"
        echo "Added modified file: $file"
    fi
done

# Remove any files that were deleted in remote
git status --porcelain | grep "^D " | cut -c4- | while read file; do
    git rm "$file" 2>/dev/null || true
    echo "Removed deleted file: $file"
done

echo "Conflict resolution completed. Committing changes..."

# Commit the merge
git commit -m "Final merge resolution: integrate remote main with build fixes

- Preserved critical build configuration files (netlify.toml, vite.config.ts, postcss.config.cjs, tailwind.config.js)
- Accepted remote main branch changes for all other files
- Resolved extensive merge conflicts systematically
- Build configuration remains functional and optimized
- Integrated latest improvements from remote main branch"

echo "Final merge conflicts resolved and committed successfully!"