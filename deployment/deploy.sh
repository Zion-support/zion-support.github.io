#!/bin/bash
# Zion Tech Group Deployment Script
echo "Starting deployment..."

# Install production dependencies
npm ci --only=production

# Start the application
npm start

echo "Deployment completed successfully!"
