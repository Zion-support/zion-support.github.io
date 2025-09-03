#!/usr/bin/env node
const fs = require('fs');

const metrics = {
  timestamp: new Date().toISOString(),
  memory: process.memoryUsage(),
  uptime: process.uptime()
};

fs.writeFileSync('performance-metrics.json', JSON.stringify(metrics, null, 2));
console.log('📊 Performance metrics saved');
