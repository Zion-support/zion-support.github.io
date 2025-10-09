#!/bin/bash

# Health check script
set -e

URL="http://localhost:3000"
TIMEOUT=10

echo "🏥 Running health check on $URL..."

# Check if the server is responding
if curl -f -s --max-time $TIMEOUT "$URL" > /dev/null; then
    echo "✅ Health check passed"
    exit 0
else
    echo "❌ Health check failed"
    exit 1
fi
