#!/bin/bash
set -e

# Rollback script for Zion Tech Group
ENVIRONMENT=${1:-staging}

echo "🔄 Starting rollback for ${ENVIRONMENT} environment..."

# Get the previous version
PREVIOUS_VERSION=$(docker images --format "table {{.Tag}}" | grep ${ENVIRONMENT} | head -2 | tail -1)

if [ -z "${PREVIOUS_VERSION}" ]; then
    echo "❌ No previous version found for rollback"
    exit 1
fi

echo "📦 Rolling back to version: ${PREVIOUS_VERSION}"

# Deploy previous version
if [ "${ENVIRONMENT}" = "production" ]; then
    docker-compose -f docker-compose.prod.yml down
    docker tag ziontechgroup:${PREVIOUS_VERSION} ziontechgroup:production
    docker-compose -f docker-compose.prod.yml up -d
else
    docker-compose -f docker-compose.dev.yml down
    docker tag ziontechgroup:${PREVIOUS_VERSION} ziontechgroup:staging
    docker-compose -f docker-compose.dev.yml up -d
fi

# Wait for health check
echo "⏳ Waiting for health check..."
sleep 30

# Check if rollback is healthy
if curl -f http://localhost/api/health > /dev/null 2>&1; then
    echo "✅ Rollback successful!"
else
    echo "❌ Rollback failed health check"
    exit 1
fi

echo "🎉 Rollback completed successfully!"