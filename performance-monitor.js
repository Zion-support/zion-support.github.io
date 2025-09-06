const fs = require('fs');
const report = { timestamp: new Date().toISOString(), bundleSize: 0, memoryUsage: process.memoryUsage().heapUsed / 1024 / 1024 };
fs.writeFileSync('performance-report.json', JSON.stringify(report, null, 2));
console.log('Performance report generated');