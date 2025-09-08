<<<<<<< HEAD
<<<<<<< HEAD
=======
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");const metrics = { timestamp: new Date().toISOString()," memory: process.memoryUsage()," uptime: process.uptime()," platform: process.platform," nodeVersion: process.version};/ Save metrics to file"fs.writeFileSync("performance-metrics.json", JSON.stringify(metrics, null, 2));"console.log(" Performance metrics collected and saved to performance-metrics.json");/ Display summary"console.log(`Memory Usage: ${Math.round(metrics.memory.heapUsed / 1024 / 1024)}MB`);"`console.log(`Uptime: ${Math.round(metrics.uptime)}s`);"`console.log(`Platform: ${metrics.platform}`);"`console.log(`Node Version: ${metrics.nodeVersion}`);'"`'"`
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
=======
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");const metrics = { timestamp: new Date().toISOString()," memory: process.memoryUsage()," uptime: process.uptime()," platform: process.platform," nodeVersion: process.version};/ Save metrics to file"fs.writeFileSync("performance-metrics.json", JSON.stringify(metrics, null, 2));"console.log(" Performance metrics collected and saved to performance-metrics.json");/ Display summary"console.log(`Memory Usage: ${Math.round(metrics.memory.heapUsed / 1024 / 1024)}MB`);"`console.log(`Uptime: ${Math.round(metrics.uptime)}s`);"`console.log(`Platform: ${metrics.platform}`);"`console.log(`Node Version: ${metrics.nodeVersion}`);'"`'"`
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
#!/usr/bin/env node;
/**
 * Simple Performance Monitor;
 * Collects basic performance metrics;
 */
<<<<<<< HEAD
<<<<<<< HEAD
const fs = require('fs')
fs.writeFileSync('performance-metrics.json')
console.log(' Performance metrics collected and saved to performance-metrics.json')
=======
=======
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
const fs = require('fs');
const metrics = {
  "timestamp": new Date().toISOString(),
  "memory": process.memoryUsage(),
  "uptime": process.uptime(),
  "platform": process.platform,
  "nodeVersion": process.version
};
// Save metrics to file
fs.writeFileSync('performance-metrics.json', JSON.stringify(metrics, null, 2));
// Display summary
}MB`);
}s`);
const fs = require('fs')
fs.writeFileSync('performance-metrics.json')
<<<<<<< HEAD
console.log(' Performance metrics collected and saved to performance-metrics.json')
>>>>>>> 174fce51876ed4c24ba1d6792b97a808cc5820d5
=======
console.log(' Performance metrics collected and saved to performance-metrics.json')
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
