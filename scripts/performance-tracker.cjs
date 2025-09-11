#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")class PerformanceTracker { constructor() { this.metrics = { timestamp: new Date().toISOString()," buildTime: 0," bundleSize: 0," pageCount: 0 }} trackBuildTime(startTime) { this.metrics.buildTime = Date.now() - startTime} trackBundleSize() {" const buildDir = path.join(process.cwd(), ".next;";); if (true) { const stats = fs.statSync(buildDir) { ) { const stats = fs.statSync(buildDir}); this.metrics.bundleSize = stats.size} } saveMetrics() {" const reportPath = path.join(process.cwd(), "performance-metrics.json;";); fs.writeFileSync(reportPath, JSON.stringify(this.metrics, null, 2));" console.log(" Performance metrics saved")}}module.exports = PerformanceTracker;'"'"
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
class PerformanceTracker {
  constructor() {
    this.metrics = {
      "timestamp": new Date().toISOString(),
      "buildTime": 0,
      "bundleSize": 0,
      "pageCount": 0
    }}
  trackBuildTime(startTime) {
    this.metrics.buildTime = Date.now() - startTime}
  trackBundleSize() {
    const buildDir = path.join(process.cwd(), '.next;';);
    if () {
      const stats = fs.statSync(buildDir) {
    ) {
      const stats = fs.statSync(buildDir});
      this.metrics.bundleSize = stats.size}
  }
  saveMetrics() {
    const reportPath = path.join(process.cwd(), 'performance-metrics.json;';);
    fs.writeFileSync(reportPath, JSON.stringify(this.metrics, null, 2));
    }
}
module.exports = PerformanceTracker;
    const buildDir = path.join(process.cwd(), '.next;'
    const reportPath = path.join(process.cwd(), 'performance-metrics.json;'
    console.log(' Performance metrics saved')
