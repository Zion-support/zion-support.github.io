<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
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
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
#!/usr/bin/env node;
/**
 * Simple Performance Monitor;
 * Collects basic performance metrics;
 */
<<<<<<< HEAD
<<<<<<< HEAD
=======
const fs = require('fs')
fs.writeFileSync('performance-metrics.json')
console.log(' Performance metrics collected and saved to performance-metrics.json')const fs = require('fs')
fs.writeFileSync('performance-metrics.json')
console.log(' Performance metrics collected and saved to performance-metrics.json')
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
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
<<<<<<< HEAD
=======
const fs = require('fs')
fs.writeFileSync('performance-metrics.json')
console.log(' Performance metrics collected and saved to performance-metrics.json')const fs = require('fs')
fs.writeFileSync('performance-metrics.json')
console.log(' Performance metrics collected and saved to performance-metrics.json')
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
