#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');

// Health check configuration
const config = {
  port: process.env.PORT || 3000,
  host: 'localhost',
  timeout: 5000,
  healthCheckPath: '/health',
  logFile: path.join(__dirname, '../logs/health-check.log')
};

// Log function
function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  
  // Console output
  console.log(logMessage.trim());
  
  // File output
  try {
    fs.appendFileSync(config.logFile, logMessage);
  } catch (error) {
    console.error('Failed to write to log file:', error.message);
  }
}

// Health check function
function performHealthCheck() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: config.host,
      port: config.port,
      path: config.healthCheckPath,
      method: 'GET',
      timeout: config.timeout
    };

    const req = http.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          log(`✅ Health check passed - Status: ${res.statusCode}`);
          resolve({ status: 'healthy', statusCode: res.statusCode });
        } else {
          log(`⚠️  Health check warning - Status: ${res.statusCode}`);
          resolve({ status: 'warning', statusCode: res.statusCode });
        }
      });
    });

    req.on('error', (error) => {
      log(`❌ Health check failed - Error: ${error.message}`);
      reject({ status: 'unhealthy', error: error.message });
    });

    req.on('timeout', () => {
      req.destroy();
      log(`⏰ Health check timeout after ${config.timeout}ms`);
      reject({ status: 'timeout', error: 'Request timeout' });
    });

    req.end();
  });
}

// Main execution
async function main() {
  try {
    log('🏥 Starting health check...');
    
    const result = await performHealthCheck();
    
    if (result.status === 'healthy') {
      log('✅ Application is healthy');
      process.exit(0);
    } else if (result.status === 'warning') {
      log('⚠️  Application has warnings but is operational');
      process.exit(0);
    } else {
      log('❌ Application is unhealthy');
      process.exit(1);
    }
  } catch (error) {
    log(`💥 Health check error: ${error.error || error.message}`);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { performHealthCheck, log };