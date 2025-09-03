#!/bin/bash
# Docker deployment script for Zion Tech Group

echo "🚀 Starting Docker deployment..."

# Build Docker image
docker build -t ziontechgroup .

# Run Docker container
docker run -p 3000:3000 -d ziontechgroup

echo "✅ Docker deployment completed"
echo "🌐 Application available at http://localhost:3000"
