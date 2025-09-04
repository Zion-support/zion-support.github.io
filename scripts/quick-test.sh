#!/bin/bash
echo "🧪 Running quick tests..."
npm run lint:check
npm run type-check
npm run test:smoke
echo "✅ Quick tests completed!"
