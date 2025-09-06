#!/bin/bash
echo "🚀 Deploying Zion Tech Group Application..."

# Build the application
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "✅ Build successful"
  
  # Start the application
  npm run start &
  
  echo "🎉 Application deployed successfully!"
else
  echo "❌ Build failed"
  exit 1
fi
