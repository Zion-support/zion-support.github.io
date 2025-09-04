#!/bin/bash
echo "🐳 Building Docker image..."
docker build -t ziontechgroup-app .
echo "🚀 Running Docker container..."
docker run -p 3000:3000 ziontechgroup-app
echo "✅ Docker deployment completed"
