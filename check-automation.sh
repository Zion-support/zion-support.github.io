#!/bin/bash
echo "PM2 Automation System Status:"
pm2 status
echo ""
echo "Recent Error Reports:"
ls -la error-reports/ | tail -5
