<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");const metrics = { timestamp: new Date().toISOString()," memory: process.memoryUsage()," uptime: process.uptime()," platform: process.platform," nodeVersion: process.version};/ Save metrics to file"fs.writeFileSync("performance-metrics.json", JSON.stringify(metrics, null, 2));"console.log(" Performance metrics collected and saved to performance-metrics.json");/ Display summary"console.log(`Memory Usage: ${Math.round(metrics.memory.heapUsed / 1024 / 1024)}MB`);"`console.log(`Uptime: ${Math.round(metrics.uptime)}s`);"`console.log(`Platform: ${metrics.platform}`);"`console.log(`Node Version: ${metrics.nodeVersion}`);'"`'"`
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
#!/usr/bin/env node;
/**
 * Simple Performance Monitor;
 * Collects basic performance metrics;
 */
<<<<<<< HEAD
const fs = require('fs')
fs.writeFileSync('performance-metrics.json')
console.log(' Performance metrics collected and saved to performance-metrics.json')
=======
<<<<<<< HEAD
<<<<<<< HEAD
const fs = require('fs')
fs.writeFileSync('performance-metrics.json')
console.log(' Performance metrics collected and saved to performance-metrics.json')
=======
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
console.log(' Performance metrics collected and saved to performance-metrics.json')
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
const fs = require('fs')
fs.writeFileSync('performance-metrics.json')
console.log(' Performance metrics collected and saved to performance-metrics.json')
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
