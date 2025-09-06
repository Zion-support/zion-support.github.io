#!/bin/bash
echo "🔧 Setting up enhanced development environment..."
npm ci
npm run lint:fix
npm run type-check
npm run build
npm run test:smoke
npm run optimize:performance
npm run audit:security
echo "✅ Enhanced development environment ready!"
