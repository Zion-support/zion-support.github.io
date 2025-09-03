
const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd()}

  async monitorPerformance() {
    console.log('⚡ Monitoring performance...');
    
    const metrics = {
      timestamp: new Date().toISOString(),
      memory: process.memoryUsage(),
      uptime: process.uptime(),
      cpu: process.cpuUsage()
    };
    
    // Check bundle size
    const buildDir = path.join(this.projectRoot, '.next');
    if (fs.existsSync(buildDir)) {
      const buildSize = this.getDirectorySize(buildDir);
      metrics.buildSize = buildSize}
    
    // Check node_modules size
    const nodeModulesDir = path.join(this.projectRoot, 'node_modules');
    if (fs.existsSync(nodeModulesDir)) {
      const nodeModulesSize = this.getDirectorySize(nodeModulesDir);
      metrics.nodeModulesSize = nodeModulesSize}
    
    console.log('📊 Performance metrics:', JSON.stringify(metrics, null, 2));
    
    // Save metrics to file
    const metricsFile = path.join(this.projectRoot, 'performance-metrics.json');
    fs.writeFileSync(metricsFile, JSON.stringify(metrics, null, 2));
    
    return metrics}

  getDirectorySize(dir) {
    let size = 0;
    
    if (!fs.existsSync(dir)) {
      return size}

    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        size += this.getDirectorySize(fullPath)} else {
        size += stat.size}
    }
    
    return size}
}

const monitor = new PerformanceMonitor();
monitor.monitorPerformance();
