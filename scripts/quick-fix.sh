#!/bin/bash
echo "🔧 Running quick fixes..."
npm run lint:fix
npm run type-check
npm run build
echo "✅ Quick fixes completed!"
