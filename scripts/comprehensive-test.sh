#!/bin/bash
echo "🧪 Running comprehensive tests..."
npm run lint:check
npm run type-check
npm run build
npm run test:smoke
npm run optimize:performance
npm run audit:security
npm run automation:seo
npm run automation:accessibility
echo "✅ Comprehensive tests completed!"
