#!/bin/bash
# Netlify deployment script for Zion Tech Group

echo "🚀 Starting Netlify deployment..."

# Install dependencies
npm install

# Build the application
npm run build

# Deploy to Netlify
if [ -f "netlify.toml" ]; then
    echo "📄 Found netlify.toml, deploying..."
    netlify deploy --prod
else
    echo "⚠️ No netlify.toml found, creating basic configuration..."
    cat > netlify.toml << EOF
[build]
  publish = ".next"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
EOF
    netlify deploy --prod
fi

echo "✅ Netlify deployment completed"
