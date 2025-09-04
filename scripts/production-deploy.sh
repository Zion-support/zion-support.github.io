#!/bin/bash
echo "🚀 Deploying to production..."
npm ci --production
npm run build
npm run test:smoke
npm run audit:security
echo "✅ Production deployment completed!"
