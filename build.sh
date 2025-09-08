#!/usr/bin/env bash
set -euo pipefail

echo "[build.sh] Starting Netlify build"

echo "[build.sh] Node: $(node -v || echo 'not found')"
echo "[build.sh] NPM:  $(npm -v || echo 'not found')"

if command -v python3 >/dev/null 2>&1; then
  echo "[build.sh] Python: $(python3 --version)"
else
  echo "[build.sh] Python not found in PATH"
fi

# Ensure mise doesn't try to compile Python from source if present in image
export MISE_SETTINGS="python.compile=false"
export MISE_PYTHON_COMPILE="false"

if [ -f requirements.txt ]; then
  echo "[build.sh] Installing Python dependencies"
  python3 -m pip install --upgrade pip
  python3 -m pip install -r requirements.txt
else
  echo "[build.sh] No requirements.txt found, skipping Python deps"
fi

echo "[build.sh] Installing Node dependencies"
npm ci

echo "[build.sh] Running build"
npm run build

echo "[build.sh] Build complete"

#!/bin/bash
set -e

echo "Starting build process..."

# Check Python version
echo "Checking Python version..."
python3 --version || python --version

# Install Python dependencies
echo "Installing Python dependencies..."
pip3 install -r requirements.txt || pip install -r requirements.txt

# Install Node.js dependencies
echo "Installing Node.js dependencies..."
npm ci

# Build the project
echo "Building the project..."
npm run build

echo "Build completed successfully!"