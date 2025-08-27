#!/bin/bash

echo "=== Checking Git Status ==="
git status --porcelain

echo -e "\n=== Checking Current Branch ==="
git branch --show-current

echo -e "\n=== Checking Remote Branches ==="
git branch -r

echo -e "\n=== Attempting to Build Project ==="
npm run build

echo -e "\n=== Build Complete ==="