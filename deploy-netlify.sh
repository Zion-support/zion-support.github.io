#!/bin/bash
echo "🚀 Deploying to Netlify..."
npm run build
netlify deploy --prod --dir=.next
echo "✅ Deployment to Netlify completed"
