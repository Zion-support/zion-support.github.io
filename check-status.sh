#!/bin/bash

set -e

echo "=== Checking Git Status ==="
git status --porcelain

echo -e "\n=== Current Branch ==="
git branch --show-current

echo -e "\n=== Remote Branches (summary) ==="
git branch -r | head -20

echo -e "\n=== Detected Packages ==="
mapfile -t PACKAGE_JSONS < <(find . -maxdepth 3 -name package.json -not -path "*/node_modules/*")
for pkg in "${PACKAGE_JSONS[@]}"; do
  pkg_dir=$(dirname "$pkg")
  echo "- $pkg_dir"
done

echo -e "\n=== Running Checks Per Package ==="
for pkg in "${PACKAGE_JSONS[@]}"; do
  pkg_dir=$(dirname "$pkg")
  echo -e "\n--- Package: $pkg_dir ---"
  pushd "$pkg_dir" >/dev/null

  if [ -f yarn.lock ]; then
    pkg_mgr="yarn"
    if command -v yarn >/dev/null 2>&1; then
      yarn install --frozen-lockfile --ignore-engines --non-interactive || yarn install --ignore-engines --non-interactive
    else
      pkg_mgr="npm"
      npm ci || npm install
    fi
  else
    if [ -f package-lock.json ]; then
      npm ci || npm install
    else
      npm install || true
    fi
    pkg_mgr="npm"
  fi

  if npm run | grep -q "lint"; then
    echo "Running lint..."
    npm run lint || true
  fi

  if npm run | grep -q "typecheck"; then
    echo "Running typecheck..."
    npm run typecheck || true
  fi

  if npm run | grep -q "build"; then
    echo "Running build..."
    npm run build || true
  fi

  popd >/dev/null
done

echo -e "\n=== Checks Complete ==="
