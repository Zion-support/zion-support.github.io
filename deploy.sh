#!/bin/bash
<<<<<<< HEAD
set -e

# Deployment script for Zion Tech Group
ENVIRONMENT=${1:-staging}
VERSION=${2:-latest}
=======

# Deployment script for production
set -e
>>>>>>> origin/merge-pr-12271

echo "🚀 Starting deployment to ${ENVIRONMENT} environment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

# Build the application
echo "📦 Building application..."
npm run build

# Build Docker image
echo "🐳 Building Docker image..."
docker build -t ziontechgroup:${VERSION} .

# Tag image for environment
docker tag ziontechgroup:${VERSION} ziontechgroup:${ENVIRONMENT}

# Deploy based on environment
if [ "${ENVIRONMENT}" = "production" ]; then
    echo "🚀 Deploying to production..."
    docker-compose -f docker-compose.prod.yml up -d
    
    # Wait for health check
    echo "⏳ Waiting for health check..."
    sleep 30
    
    # Check if deployment is healthy
    if curl -f http://localhost/api/health > /dev/null 2>&1; then
        echo "✅ Production deployment successful!"
    else
        echo "❌ Production deployment failed health check"
        exit 1
    fi
else
    echo "🚀 Deploying to staging..."
    docker-compose -f docker-compose.dev.yml up -d
    
    # Wait for health check
    echo "⏳ Waiting for health check..."
    sleep 15
    
    # Check if deployment is healthy
    if curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
        echo "✅ Staging deployment successful!"
    else
        echo "❌ Staging deployment failed health check"
        exit 1
    fi
fi

echo "🎉 Deployment completed successfully!"