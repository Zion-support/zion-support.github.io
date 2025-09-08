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