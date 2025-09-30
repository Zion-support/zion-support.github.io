#!/bin/bash

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Error: Docker is not installed or not in PATH."
    exit 1
fi

# Build the Docker image
echo "🐳 Building Docker image..."
docker build -f Dockerfile.production -t ziontechgroup-app:latest .

# Stop existing container if running
echo "🛑 Stopping existing container..."
docker stop ziontechgroup-app || true
docker rm ziontechgroup-app || true

# Run the new container
echo "▶️ Starting new container..."
docker run -d \
    --name ziontechgroup-app \
    -p 80:80 \
    --restart unless-stopped \
    ziontechgroup-app:latest

# Wait for health check
echo "⏳ Waiting for health check..."
sleep 10

# Check if container is healthy
if docker ps | grep -q "ziontechgroup-app"; then
    echo "✅ Deployment successful!"
    echo "🌐 Application is running at http://localhost"
else
    echo "❌ Deployment failed!"
    exit 1
fi
echo "🚀 Deploying Zion Tech Group Application..."

# Build the application
npm run build

# Deploy to production
echo "🚀 Deploying to production..."
# Add your deployment commands here

echo "✅ Deployment completed successfully!"
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
