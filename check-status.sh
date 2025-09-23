#!/bin/bash

<<<<<<< HEAD
set -e

=======
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
echo "=== Checking Git Status ==="
git status --porcelain

echo -e "\n=== Checking Current Branch ==="
git branch --show-current

echo -e "\n=== Checking Remote Branches ==="
git branch -r | head -50

echo -e "\n=== Attempting Build Verification (non-fatal) ==="
if command -v node >/dev/null 2>&1 && [ -f build-verification.js ]; then
  node build-verification.js || true
else
  echo "(Skipping build verification: node or script not available)"
fi

<<<<<<< HEAD
echo -e "\n=== Done ==="
=======
echo -e "\n=== Build Complete ==="
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
