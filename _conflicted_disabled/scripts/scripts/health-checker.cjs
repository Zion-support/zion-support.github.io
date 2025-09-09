
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const http = require('http');

class HealthChecker {
  constructor() {
    this.logDir = path.join(process.cwd(), 'logs');
    this.healthEndpoint = 'http://localhost:3000/api/health';
    this.maxResponseTime = 5000; // 5 seconds
    
    // Ensure logs directory exists
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir { recursive: true })}
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.logDir, 'health-checker.log');
    fs.appendFileSync(logFile, logMessage + '\n')}

  async checkApplicationHealth() {
    return new Promise((resolve) => {
      const startTime = Date.now();

      const req = http.get(this.healthEndpoint, res => {
        const responseTime = Date.now() - startTime;

        if (res.statusCode === 200) {
          this.log('info', `Application health check passed (${responseTime}ms)`);
          resolve({
            status: 'healthy',
            responseTime,
            statusCode: res.statusCode })} else {
          this.log('warn', `Application health check failed with status ${res.statusCode}`);
          resolve({
            status: 'unhealthy',
            responseTime,
            statusCode: res.statusCode,
            reason: `HTTP ${res.statusCode}` })}
      });

      req.on('error', error => {
        this.log('error', `Application health check failed: ${error.message}`);
        resolve({
          status: 'unhealthy',
          responseTime: Date.now() - startTime,
          reason: error.message })});

      req.setTimeout(this.maxResponseTime, () => {
        req.destroy();
        const responseTime = Date.now() - startTime;
        this.log('error', 'Application health check timed out');
        resolve({
          status: 'unhealthy',
          responseTime,
          reason: 'timeout' })})})}

  async checkDiskSpace() {
    try {
      const stats = fs.statSync(process.cwd());
      const freeSpace = require('os').freemem();
      const totalSpace = require('os').totalmem();
      const diskUsage = ((totalSpace - freeSpace) / totalSpace) * 100;
      
      return {
        status: diskUsage < 90 ? 'healthy' : 'warning',
        diskUsage: Math.round(diskUsage),
        freeSpace: Math.round(freeSpace / 1024 / 1024 / 1024), // GB
        totalSpace: Math.round(totalSpace / 1024 / 1024 / 1024), // GB
      }} catch (error) {
      return {
        status: 'error',
        error: error.message }}
  }

  async checkMemoryUsage() {
    try {
      const memUsage = process.memoryUsage();
      const totalMem = require('os').totalmem();
      const memUsagePercent = (memUsage.heapUsed / totalMem) * 100;
      
      return {
        status: memUsagePercent < 80 ? 'healthy' : 'warning',
        heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024), // MB
        heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024), // MB
        external: Math.round(memUsage.external / 1024 / 1024), // MB
        usagePercent: Math.round(memUsagePercent) }} catch (error) {
      return {
        status: 'error',
        error: error.message }}
  }

  async checkFileSystem() {
    try {
      const criticalFiles = [
        'package.json',
        'next.config.cjs',
        'ecosystem.config.cjs' ];
      
      const missingFiles = [];
      const fileStats = {};
      
      for (const file of criticalFiles) {
        const filePath = path.join(process.cwd(), file);
        if (fs.existsSync(filePath)) {
          const stats = fs.statSync(filePath);
          fileStats[file] = {
            exists: true,
            size: stats.size,
            modified: stats.mtime }} else {
          missingFiles.push(file);
          fileStats[file] = { exists: false }}
      }
      
      return {
        status: missingFiles.length === 0 ? 'healthy' : 'warning',
        missingFiles,
        fileStats }} catch (error) {
      return {
        status: 'error',
        error: error.message }}
  }

  async runHealthCheck() {
    this.log('info', 'Starting comprehensive health check...');
    
    const results = {
      timestamp: new Date().toISOString(),
      application: await this.checkApplicationHealth(),
      diskSpace: await this.checkDiskSpace(),
      memoryUsage: await this.checkMemoryUsage(),
      fileSystem: await this.checkFileSystem() };
    
    // Determine overall health status
    const statuses = [
      results.application.status,
      results.diskSpace.status,
      results.memoryUsage.status,
      results.fileSystem.status ];
    
    if (statuses.includes('unhealthy') || statuses.includes('error')) {
      results.overallStatus = 'unhealthy'} else if (statuses.includes('warning')) {
      results.overallStatus = 'warning'} else {
      results.overallStatus = 'healthy'}
    
    this.log('info', `Health check completed. Overall status: ${results.overallStatus}`);
    
    // Write results to file
    const resultsFile = path.join(this.logDir, 'health-check-results.json');
    fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
    
    return results}
}

// Run health check if this script is executed directly
if (require.main === module) {
  const healthChecker = new HealthChecker();
  healthChecker.runHealthCheck()
    .then(results => {
      console.log('\n=== Health Check Results ===');
      console.log(JSON.stringify(results, null, 2));
      process.exit(results.overallStatus === 'healthy' ? 0 : 1)})
    .catch(error => {
      console.error('Health check failed:', error);
      process.exit(1)})}

module.exports = HealthChecker;
  const checker = new HealthChecker();
  checker.run().catch(console.error)};

