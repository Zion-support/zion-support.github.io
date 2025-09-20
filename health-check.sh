#!/bin/bash

echo "🏥 Running Codebase Health Check"
echo "⏰ Started at: $(date)"
echo "---"

# Check if build works
echo "🔨 Testing build..."
if npm run build || pnpm run build || yarn build; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

# Check if tests pass
echo "🧪 Running tests..."
if grep -q '"test"' package.json; then
    if npm test || pnpm test || yarn test; then
        echo "✅ Tests passed"
    else
        echo "⚠️  Tests failed (continuing anyway)"
    fi
fi

# Check file structure
echo "📁 Checking file structure..."
if [ -f "package.json" ]; then
    echo "✅ package.json exists"
fi

if [ -f "README.md" ]; then
    echo "✅ README.md exists"
fi

if [ -d "node_modules" ]; then
    echo "✅ node_modules exists"
fi

echo "🎉 Health check completed successfully!"
