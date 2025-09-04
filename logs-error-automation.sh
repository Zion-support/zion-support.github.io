#!/bin/bash
echo "📋 Error Automation System Logs:"
echo "================================"
pm2 logs ecosystem.error-automation.config.cjs --lines 50
