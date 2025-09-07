#!/usr/bin/env node;
#!/usr/bin/env node;
### Successful Operations
${report.results.success.map(item => `- ${item}`).join("\n")}
### Errors
${report.results.errors.map(item => `- ${item}`).join("\n")}
### Warnings
${report.results.warnings.map(item => `- ${item}`).join("\n")}
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
// console.log(' Zion Tech Group - Working Automation Suite')
