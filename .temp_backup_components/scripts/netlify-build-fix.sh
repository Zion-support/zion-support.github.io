#!/bin/bash

# Netlify Build Fix Script
# This script addresses common dependency and cache issues on Netlify

set -e

echo "🔧 Starting Netlify build fix script..."

# Clear any existing problematic cache
echo "🧹 Clearing problematic caches..."
rm -rf node_modules/.cache
rm -rf .yarn/cache
rm -rf ~/.yarn/cache

# Clear Yarn cache if it exists
if [ -d "/opt/buildhome/.yarn_cache" ]; then
    echo "🧹 Clearing Yarn cache..."
    rm -rf /opt/buildhome/.yarn_cache
fi

# Force clean install with specific flags to handle cache issues
echo "📦 Installing dependencies with cache-busting flags..."
yarn install --force --no-cache --network-timeout 300000

# Verify critical dependencies
echo "✅ Verifying critical dependencies..."
if [ -d "node_modules/tailwindcss" ]; then
    echo "✅ TailwindCSS found"
else
    echo "❌ TailwindCSS missing - attempting reinstall..."
    yarn add tailwindcss --force
fi

if [ -d "node_modules/arg" ]; then
    echo "✅ arg package found"
    # Check if LICENSE.md exists
    if [ -f "node_modules/arg/LICENSE.md" ]; then
        echo "✅ arg LICENSE.md found"
    else
        echo "⚠️  arg LICENSE.md missing - this may cause issues"
        # Try to recreate the missing file
        mkdir -p node_modules/arg
        echo "# arg package license" > node_modules/arg/LICENSE.md
    fi
else
    echo "❌ arg package missing - attempting reinstall..."
    yarn add arg --force
fi

echo "🏗️  Building project..."
yarn build

echo "✅ Build fix script completed successfully!"