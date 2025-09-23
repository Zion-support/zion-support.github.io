#!/usr/bin/env node

/**
 * PM2 Sync Monitor System
 * 
 * This system provides:
 * - Health monitoring for PM2 processes
 * - System resource monitoring
 * - Automated issue resolution
 * - Performance metrics collection
 * - Health check endpoints
 */

const http = require('http');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  PORT: process.env.MONITOR_PORT || 3001,
  MONITOR_INTERVAL: parseInt(process.env.MONITOR_INTERVAL) || 60000, // 1 minute
  HEALTH_CHECK_INTERVAL: 30000, // 30 seconds
  METRICS_RETENTION: 24 * 60 * 60 * 1000, // 24 hours
  PERFORMANCE_THRESHOLDS: {
    CPU_HIGH: 80, // 80%
    MEMORY_HIGH: 85, // 85%
    DISK_HIGH: 90, // 90%
    PROCESS_ERRORS: 5 // Max consecutive errors
  }
};

// Global state
let healthChecks = 0;
let successfulChecks = 0;
let failedChecks = 0;
let errors = [];
let restarts = 0;
let startTime = Date.now();
let lastHealthCheck = Date.now();
let performanceMetrics = [];
let systemStatus = 'unknown';

// Utility functions
const log = (level, message, data = {}) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level,
    message,
    data,
    process: 'pm2-sync-monitor'
  };
  
  console.log(JSON.stringify(logEntry));
  
  if (level === 'ERROR') {
    console.error(JSON.stringify(logEntry));
  }
};

const executeCommand = (command, options = {}) => {
  try {
    const result = execSync(command, {
      stdio: 'pipe',
      encoding: 'utf8',
      cwd: process.cwd(),
      ...options
    });
    return { success: true, output: result };
  } catch (error) {
    return { 
      success: false, 
      error: error.message, 
      code: error.status,
      command 
    };
  }
};

const getPM2Status = () => {
  try {
    const result = executeCommand('pm2 jlist');
    if (result.success) {
      const processes = JSON.parse(result.output);
      return processes.map(proc => ({
        id: proc.pm_id,
        name: proc.name,
        status: proc.pm2_env.status,
        restarts: proc.pm2_env.restart_time,
        memory: proc.monit.memory,
        cpu: proc.monit.cpu,
        uptime: proc.pm2_env.pm_uptime
      }));
    }
    return [];
  } catch (error) {
    log('ERROR', 'Failed to get PM2 status', { error: error.message });
    return [];
  }
};

const getSystemMetrics = () => {
  try {
    // Disk usage
    const diskResult = executeCommand('df .');
    let diskUsage = 0;
    if (diskResult.success) {
      const lines = diskResult.output.split('\n');
      if (lines.length > 1) {
        const parts = lines[1].split(/\s+/);
        if (parts.length > 4) {
          diskUsage = parseInt(parts[4].replace('%', ''));
        }
      }
    }
    
    // Memory usage (simplified)
    const memResult = executeCommand('ps -o %mem -p $$ | tail -1');
    let memoryUsage = 0;
    if (memResult.success) {
      memoryUsage = parseFloat(memResult.output.trim()) || 0;
    }
    
    return {
      disk: diskUsage,
      memory: memoryUsage,
      timestamp: Date.now()
    };
  } catch (error) {
    log('ERROR', 'Failed to get system metrics', { error: error.message });
    return { disk: 0, memory: 0, timestamp: Date.now() };
  }
};

const checkSystemHealth = () => {
  try {
    const pm2Processes = getPM2Status();
    const systemMetrics = getSystemMetrics();
    
    // Check PM2 processes
    const erroredProcesses = pm2Processes.filter(p => p.status === 'errored');
    const stoppedProcesses = pm2Processes.filter(p => p.status === 'stopped');
    
    // Check system resources
    const diskHigh = systemMetrics.disk > CONFIG.PERFORMANCE_THRESHOLDS.DISK_HIGH;
    const memoryHigh = systemMetrics.memory > CONFIG.PERFORMANCE_THRESHOLDS.MEMORY_HIGH;
    
    // Determine overall health
    let healthStatus = 'healthy';
    let issues = [];
    
    if (erroredProcesses.length > 0) {
      healthStatus = 'unhealthy';
      issues.push(`PM2 processes errored: ${erroredProcesses.map(p => p.name).join(', ')}`);
    }
    
    if (stoppedProcesses.length > 0) {
      healthStatus = 'degraded';
      issues.push(`PM2 processes stopped: ${stoppedProcesses.map(p => p.name).join(', ')}`);
    }
    
    if (diskHigh) {
      healthStatus = 'degraded';
      issues.push(`Disk usage high: ${systemMetrics.disk}%`);
    }
    
    if (memoryHigh) {
      healthStatus = 'degraded';
      issues.push(`Memory usage high: ${systemMetrics.memory}%`);
    }
    
    // Update global status
    systemStatus = healthStatus;
    
    // Store metrics
    performanceMetrics.push({
      timestamp: Date.now(),
      pm2Processes: pm2Processes.length,
      erroredProcesses: erroredProcesses.length,
      stoppedProcesses: stoppedProcesses.length,
      diskUsage: systemMetrics.disk,
      memoryUsage: systemMetrics.memory,
      healthStatus
    });
    
    // Clean old metrics
    const cutoff = Date.now() - CONFIG.METRICS_RETENTION;
    performanceMetrics = performanceMetrics.filter(m => m.timestamp > cutoff);
    
    return {
      status: healthStatus,
      timestamp: new Date().toISOString(),
      healthChecks,
      successfulChecks,
      failedChecks,
      errors: errors.slice(-10), // Last 10 errors
      restarts,
      issues,
      metrics: {
        pm2Processes: pm2Processes.length,
        erroredProcesses: erroredProcesses.length,
        stoppedProcesses: stoppedProcesses.length,
        diskUsage: systemMetrics.disk,
        memoryUsage: systemMetrics.memory
      }
    };
    
  } catch (error) {
    log('ERROR', 'Health check failed', { error: error.message });
    failedChecks++;
    errors.push({
      timestamp: new Date().toISOString(),
      error: error.message
    });
    
    return {
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      healthChecks,
      successfulChecks,
      failedChecks,
      errors: errors.slice(-10),
      restarts,
      issues: [`Health check error: ${error.message}`]
    };
  }
};

const attemptIssueResolution = async () => {
  try {
    const pm2Processes = getPM2Status();
    const erroredProcesses = pm2Processes.filter(p => p.status === 'errored');
    
    if (erroredProcesses.length > 0) {
      log('INFO', 'Attempting to resolve PM2 process errors...');
      
      for (const proc of erroredProcesses) {
        try {
          // Restart errored process
          const restartResult = executeCommand(`pm2 restart ${proc.id}`);
          if (restartResult.success) {
            log('INFO', `Restarted errored process: ${proc.name}`);
            restarts++;
          } else {
            log('ERROR', `Failed to restart process: ${proc.name}`, { error: restartResult.error });
          }
        } catch (error) {
          log('ERROR', `Error restarting process: ${proc.name}`, { error: error.message });
        }
      }
    }
    
    // Check for dependency issues
    const systemMetrics = getSystemMetrics();
    if (systemMetrics.disk > CONFIG.PERFORMANCE_THRESHOLDS.DISK_HIGH) {
      log('WARN', 'Disk usage high, attempting cleanup...');
      await cleanupSystem();
    }
    
  } catch (error) {
    log('ERROR', 'Error during issue resolution', { error: error.message });
  }
};

const cleanupSystem = async () => {
  try {
    // Clear PM2 logs
    const clearLogsResult = executeCommand('pm2 flush');
    if (clearLogsResult.success) {
      log('INFO', 'PM2 logs cleared');
    }
    
    // Clear npm cache
    const clearCacheResult = executeCommand('npm cache clean --force');
    if (clearCacheResult.success) {
      log('INFO', 'NPM cache cleared');
    }
    
    // Remove old build artifacts
    const buildDirs = ['dist', 'build', '.next', 'out'];
    for (const dir of buildDirs) {
      if (fs.existsSync(dir)) {
        const removeResult = executeCommand(`rm -rf ${dir}`);
        if (removeResult.success) {
          log('INFO', `Removed build directory: ${dir}`);
        }
      }
    }
    
  } catch (error) {
    log('ERROR', 'Error during system cleanup', { error: error.message });
  }
};

const getMetrics = () => {
  const now = Date.now();
  const uptime = now - startTime;
  
  // Calculate success rate
  const successRate = healthChecks > 0 ? (successfulChecks / healthChecks) * 100 : 0;
  
  // Calculate average metrics
  const avgMetrics = performanceMetrics.length > 0 ? {
    diskUsage: performanceMetrics.reduce((sum, m) => sum + m.diskUsage, 0) / performanceMetrics.length,
    memoryUsage: performanceMetrics.reduce((sum, m) => sum + m.memoryUsage, 0) / performanceMetrics.length,
    erroredProcesses: performanceMetrics.reduce((sum, m) => sum + m.erroredProcesses, 0) / performanceMetrics.length
  } : { diskUsage: 0, memoryUsage: 0, erroredProcesses: 0 };
  
  return {
    startTime,
    healthChecks,
    successfulChecks,
    failedChecks,
    errors: errors.slice(-50), // Last 50 errors
    restarts,
    lastHealthCheck,
    systemStatus,
    performance: {
      cpu: 0, // Simplified for now
      memory: avgMetrics.memoryUsage,
      disk: avgMetrics.diskUsage
    },
    uptime,
    successRate: Math.round(successRate * 100) / 100
  };
};

// HTTP server for health checks and metrics
const createServer = () => {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
      res.writeHead(200);
      res.end();
      return;
    }
    
    try {
      if (req.url === '/health') {
        const health = checkSystemHealth();
        res.writeHead(200);
        res.end(JSON.stringify(health, null, 2));
        
        // Update counters
        healthChecks++;
        if (health.status === 'healthy') {
          successfulChecks++;
        } else {
          failedChecks++;
        }
        
      } else if (req.url === '/metrics') {
        const metrics = getMetrics();
        res.writeHead(200);
        res.end(JSON.stringify(metrics, null, 2));
        
      } else if (req.url === '/status') {
        const status = {
          status: systemStatus,
          timestamp: new Date().toISOString(),
          uptime: Date.now() - startTime,
          processes: getPM2Status()
        };
        res.writeHead(200);
        res.end(JSON.stringify(status, null, 2));
        
      } else if (req.url === '/restart' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        
        req.on('end', () => {
          try {
            const { processName } = JSON.parse(body);
            if (processName) {
              const restartResult = executeCommand(`pm2 restart ${processName}`);
              if (restartResult.success) {
                res.writeHead(200);
                res.end(JSON.stringify({ success: true, message: `Process ${processName} restarted` }));
                restarts++;
              } else {
                res.writeHead(500);
                res.end(JSON.stringify({ success: false, error: restartResult.error }));
              }
            } else {
              res.writeHead(400);
              res.end(JSON.stringify({ success: false, error: 'Process name required' }));
            }
          } catch (error) {
            res.writeHead(400);
            res.end(JSON.stringify({ success: false, error: 'Invalid JSON' }));
          }
        });
        
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not Found' }));
      }
      
    } catch (error) {
      log('ERROR', 'HTTP server error', { error: error.message, url: req.url });
      res.writeHead(500);
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
  });
  
  return server;
};

// Monitoring loops
const startMonitoringLoops = () => {
  // Health check loop
  setInterval(() => {
    try {
      const health = checkSystemHealth();
      lastHealthCheck = Date.now();
      
      if (health.status !== 'healthy') {
        log('WARN', 'System health degraded', { status: health.status, issues: health.issues });
        
        // Attempt resolution
        attemptIssueResolution();
      }
      
    } catch (error) {
      log('ERROR', 'Error in health check loop', { error: error.message });
    }
  }, CONFIG.HEALTH_CHECK_INTERVAL);
  
  // Performance monitoring loop
  setInterval(() => {
    try {
      const metrics = getSystemMetrics();
      const pm2Processes = getPM2Status();
      
      // Check for performance issues
      if (metrics.disk > CONFIG.PERFORMANCE_THRESHOLDS.DISK_HIGH) {
        log('WARN', 'Disk usage high', { usage: metrics.disk });
      }
      
      if (metrics.memory > CONFIG.PERFORMANCE_THRESHOLDS.MEMORY_HIGH) {
        log('WARN', 'Memory usage high', { usage: metrics.memory });
      }
      
      // Check for process issues
      const erroredCount = pm2Processes.filter(p => p.status === 'errored').length;
      if (erroredCount > CONFIG.PERFORMANCE_THRESHOLDS.PROCESS_ERRORS) {
        log('ERROR', 'Too many errored processes', { count: erroredCount });
        attemptIssueResolution();
      }
      
    } catch (error) {
      log('ERROR', 'Error in performance monitoring loop', { error: error.message });
    }
  }, CONFIG.MONITOR_INTERVAL);
  
  // Data cleanup loop
  setInterval(() => {
    try {
      const cutoff = Date.now() - CONFIG.METRICS_RETENTION;
      performanceMetrics = performanceMetrics.filter(m => m.timestamp > cutoff);
      errors = errors.filter(e => new Date(e.timestamp).getTime() > cutoff);
      
      log('INFO', 'Cleaned up old data', { 
        metricsRetained: performanceMetrics.length,
        errorsRetained: errors.length 
      });
      
    } catch (error) {
      log('ERROR', 'Error in data cleanup loop', { error: error.message });
    }
  }, CONFIG.METRICS_RETENTION / 2); // Run cleanup twice per retention period
};

// Main execution
const main = async () => {
  try {
    log('INFO', 'Initializing PM2 Sync Monitor System...');
    
    // Create HTTP server
    const server = createServer();
    
    // Start server
    server.listen(CONFIG.PORT, () => {
      log('INFO', `Monitor server listening on port ${CONFIG.PORT}`);
    });
    
    // Start monitoring loops
    startMonitoringLoops();
    
    // Perform initial health check
    const initialHealth = checkSystemHealth();
    log('INFO', 'Initial health check completed', { status: initialHealth.status });
    
    log('INFO', 'PM2 Sync Monitor System initialized successfully');
    
    // Graceful shutdown
    process.on('SIGTERM', () => {
      log('INFO', 'Received SIGTERM, shutting down gracefully...');
      server.close(() => {
        log('INFO', 'Server closed');
        process.exit(0);
      });
    });
    
    process.on('SIGINT', () => {
      log('INFO', 'Received SIGINT, shutting down gracefully...');
      server.close(() => {
        log('INFO', 'Server closed');
        process.exit(0);
      });
    });
    
  } catch (error) {
    log('ERROR', 'Failed to initialize monitor system', { error: error.message });
    process.exit(1);
  }
};

// Start the system
if (require.main === module) {
  main().catch(error => {
    log('ERROR', 'Monitor system startup failed', { error: error.message });
    process.exit(1);
  });
}

module.exports = {
  main,
  checkSystemHealth,
  getMetrics,
  getPM2Status,
  attemptIssueResolution
};
