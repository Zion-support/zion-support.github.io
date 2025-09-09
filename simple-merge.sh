#!/bin/bash
git checkout main
git pull origin main
git merge cursor/prepare-git-repository-for-build-c571
git push origin main