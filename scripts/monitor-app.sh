#!/bin/bash
echo "📊 Monitoring application health..."
npm run health:check
npm run automation:health
npm run monitor:health
echo "✅ Monitoring completed!"
