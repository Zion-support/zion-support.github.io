#!/bin/bash
echo "🔧 Setting up development environment..."
npm ci
npm run lint:fix
npm run type-check
npm run build
npm run test:smoke
echo "✅ Development environment ready!"
