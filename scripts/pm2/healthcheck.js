#!/usr/bin/env node

/**
 * PM2 Health Check Script
 * Checks if the application is running and healthy
 */

const fs = require('fs');
const http = require('http');

class HealthChecker {
  constructor() {
    this.port = process.env.PORT || 4173;
    this.host = process.env.HOST || '127.0.0.1';
    this.timeout = 5000;
  }

  async checkBuildExists() {
    const buildDirs = ['dist', 'build', 'out', '.next'];
    
    for (const dir of buildDirs) {
      if (fs.existsSync(dir)) {
        return { exists: true, directory: dir };
      }
    }
    
    return { exists: false, directory: null };
  }

  async pingApplication() {
    return new Promise((resolve) => {
      const req = http.request({
        host: this.host,
        port: this.port,
        path: '/',
        timeout: this.timeout
      }, (res) => {
        resolve({
          healthy: res.statusCode && res.statusCode < 500,
          statusCode: res.statusCode
        });
      });
      
      req.on('error', (error) => {
        resolve({
          healthy: false,
          error: error.message
        });
      });
      
      req.on('timeout', () => {
        req.destroy();
        resolve({
          healthy: false,
          error: 'Request timeout'
        });
      });
      
      req.end();
    });
  }

  async runHealthCheck() {
    console.log('Running health check...');
    
    // Check if build exists
    const buildCheck = await this.checkBuildExists();
    if (!buildCheck.exists) {
      console.log('Build directory not found, checking if app is running...');
    } else {
      console.log(`Build found in: ${buildCheck.directory}`);
    }
    
    // Try to ping the application
    const pingResult = await this.pingApplication();
    
    if (pingResult.healthy) {
      console.log(`✅ Application is healthy (status: ${pingResult.statusCode})`);
      return true;
    } else {
      console.log(`❌ Application health check failed: ${pingResult.error || 'Unknown error'}`);
      return false;
    }
  }
}

// Run health check if this script is executed directly
if (require.main === module) {
  const checker = new HealthChecker();
  checker.runHealthCheck().then(healthy => {
    if (!healthy) {
      process.exit(1);
    }
  }).catch(error => {
    console.error('Health check error:', error);
    process.exit(1);
  });
}

module.exports = HealthChecker;