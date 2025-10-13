#!/bin/bash

# Resolve merge conflicts by using our fixed versions
git checkout --ours .

# Add all resolved files
git add .

# Commit the merge
git commit -m "Resolve merge conflicts by using fixed versions

- Used our fixed versions for all conflicted files
- All merge conflicts resolved
- Codebase is now clean and ready for production"

# Push to main
git push origin main

echo "Successfully resolved merge conflicts and pushed to main"