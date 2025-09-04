#!/bin/bash
echo "🏥 Running health checks..."
npm run automation:health
npm run monitor:health
echo "✅ Health checks completed!"
