#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
class PerformanceMonitor {
  constructor() {
    this.metrics = {
      "timestamp": new Date().toISOString(),
      "memory": process.memoryUsage(),
      "uptime": process.uptime(),
      "cpu": process.cpuUsage()
    }}
  collectMetrics() {
    this.metrics = {
      "timestamp": new Date().toISOString(),
      "memory": process.memoryUsage(),
      "uptime": process.uptime(),
      "cpu": process.cpuUsage()
    };
    const reportPath = path.join(process.cwd(), 'performance-metrics.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.metrics, null, 2));
    }
}
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.collectMetrics()}
module.exports = PerformanceMonitor;
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");class PerformanceMonitor { constructor() { this.metrics = { timestamp: new Date().toISOString()," memory: process.memoryUsage()," uptime: process.uptime()," cpu: process.cpuUsage() }} collectMetrics() { this.metrics = {" timestamp: new Date().toISOString()," memory: process.memoryUsage()," uptime: process.uptime()," cpu: process.cpuUsage() }; " const reportPath = path.join(process.cwd(), "performance-metrics.json"); fs.writeFileSync(reportPath, JSON.stringify(this.metrics, null, 2));" console.log(" Performance metrics collected and saved")}}if (require.main === module) { const monitor = new PerformanceMonitor(); monitor.collectMetrics()}module.exports = PerformanceMonitor;"""
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
    const reportPath = path.join(process.cwd(), 'performance-metrics.json'
    console.log(' Performance metrics collected and saved')
    console.log(' Performance metrics collected and saved')
