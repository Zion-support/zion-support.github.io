#!/bin/bash

set -e

echo "=== Repository Status ==="
git status --porcelain -b

echo -e "\n=== Current Branch ==="
git branch --show-current

echo -e "\n=== Remote Branches ==="
git branch -r | sed -n '1,20p'

echo -e "\n✅ Status check complete."
