#!/bin/bash
echo "🚀 Deploying application..."
npm run build
npm run test:smoke
# Add deployment commands here
echo "✅ Deployment completed!"
