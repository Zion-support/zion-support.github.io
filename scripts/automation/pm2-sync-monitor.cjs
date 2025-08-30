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
    PROCESS_ERRORS: 3 // Max consecutive errors
  }
};

// State management
let systemHealth = {
  status: 'unknown',
  lastCheck: null,
  uptime: 0,
  processCount: 0,
  errorCount: 0,
  performance: {
    cpu: 0,
    memory: 0,
    disk: 0
  },
  processes: [],
  issues: []
};

let metrics = [];
let startTime = Date.now();

// Utility functions
function log(message, level = 'INFO') {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level}] ${message}`);
}

function executeCommand(command, options = {}) {
  try {
    const result = execSync(command, {
      stdio: 'pipe',
      encoding: 'utf8',
      ...options
    });
    return { success: true, output: result };
  } catch (error) {
    return { success: false, error: error.message, output: error.stdout || error.stderr };
  }
}

// Health check functions
function checkPM2Status() {
  try {
    const result = executeCommand('pm2 jlist');
    if (!result.success) {
      return { status: 'error', message: 'Failed to get PM2 status' };
    }
    
    const processes = JSON.parse(result.output);
    const onlineProcesses = processes.filter(p => p.pm2_env.status === 'online');
    const erroredProcesses = processes.filter(p => p.pm2_env.status === 'errored');
    
    return {
      status: 'healthy',
      total: processes.length,
      online: onlineProcesses.length,
      errored: erroredProcesses.length,
      processes: processes.map(p => ({
        name: p.name,
        status: p.pm2_env.status,
        pm_id: p.pm_id,
        memory: p.monit.memory,
        cpu: p.monit.cpu
      }))
    };
  } catch (error) {
    return { status: 'error', message: error.message };
  }
}

function checkSystemResources() {
  try {
    // Check disk usage
    const diskResult = executeCommand('df .');
    if (diskResult.success) {
      const lines = diskResult.output.trim().split('\n');
      const diskInfo = lines[1].split(/\s+/);
      const diskUsage = parseInt(diskInfo[4].replace('%', ''));
      
      return {
        disk: diskUsage,
        diskStatus: diskUsage > CONFIG.PERFORMANCE_THRESHOLDS.DISK_HIGH ? 'warning' : 'healthy'
      };
    }
    
    return { disk: 0, diskStatus: 'unknown' };
  } catch (error) {
    return { disk: 0, diskStatus: 'error' };
  }
}

function checkGitStatus() {
  try {
    const statusResult = executeCommand('git status --porcelain');
    const branchResult = executeCommand('git branch --show-current');
    
    return {
      hasChanges: statusResult.success && statusResult.output.trim().length > 0,
      currentBranch: branchResult.success ? branchResult.output.trim() : 'unknown',
      status: 'healthy'
    };
  } catch (error) {
    return { hasChanges: false, currentBranch: 'unknown', status: 'error' };
  }
}

function checkBuildStatus() {
  try {
    const buildDir = fs.existsSync('dist') ? 'dist' : 
                    fs.existsSync('build') ? 'build' : 
                    fs.existsSync('.next') ? '.next' : null;
    
    if (!buildDir) {
      return { status: 'no-build', message: 'No build artifacts found' };
    }
    
    const buildTime = fs.statSync(buildDir).mtime;
    const buildAge = Date.now() - buildTime.getTime();
    
    return {
      status: 'healthy',
      buildDir,
      buildAge,
      buildAgeMinutes: Math.floor(buildAge / (1000 * 60))
    };
  } catch (error) {
    return { status: 'error', message: error.message };
  }
}

function checkDependencies() {
  try {
    if (!fs.existsSync('package.json')) {
      return { status: 'no-package', message: 'No package.json found' };
    }
    
    if (!fs.existsSync('node_modules')) {
      return { status: 'no-deps', message: 'Dependencies not installed' };
    }
    
    return { status: 'healthy' };
  } catch (error) {
    return { status: 'error', message: error.message };
  }
}

// Issue resolution functions
function attemptIssueResolution(issues) {
  log(`Attempting to resolve ${issues.length} issues...`);
  
  issues.forEach(issue => {
    try {
      switch (issue.type) {
        case 'process-error':
          log(`Restarting process: ${issue.details.name}`);
          executeCommand(`pm2 restart ${issue.details.name}`);
          break;
          
        case 'dependencies':
          log('Installing dependencies...');
          executeCommand('npm install');
          break;
          
        case 'security':
          log('Fixing security vulnerabilities...');
          executeCommand('npm audit fix');
          break;
          
        case 'uncommitted-changes':
          log('Committing uncommitted changes...');
          executeCommand('git add -A');
          executeCommand('git commit -m "Auto-commit: Uncommitted changes"');
          break;
          
        case 'no-build':
          log('Triggering build...');
          executeCommand('npm run build');
          break;
      }
    } catch (error) {
      log(`Failed to resolve issue "${issue.type}": ${error.message}`, 'ERROR');
    }
  });
}

// Performance monitoring
function collectPerformanceMetrics() {
  try {
    const pm2Status = checkPM2Status();
    const systemResources = checkSystemResources();
    
    const metric = {
      timestamp: Date.now(),
      pm2: pm2Status,
      system: systemResources,
      uptime: Date.now() - startTime
    };
    
    metrics.push(metric);
    
    // Clean up old metrics
    const cutoff = Date.now() - CONFIG.METRICS_RETENTION;
    metrics = metrics.filter(m => m.timestamp > cutoff);
    
  } catch (error) {
    log(`Failed to collect performance metrics: ${error.message}`, 'ERROR');
  }
}

// Main health check
function performHealthCheck() {
  log('Performing health check...');
  
  try {
    const pm2Status = checkPM2Status();
    const systemResources = checkSystemResources();
    const gitStatus = checkGitStatus();
    const buildStatus = checkBuildStatus();
    const dependenciesStatus = checkDependencies();
    
    // Collect issues
    const issues = [];
    
    if (pm2Status.status === 'error') {
      issues.push({ type: 'pm2-error', details: { message: pm2Status.message } });
    }
    
    if (pm2Status.errored > 0) {
      pm2Status.processes
        .filter(p => p.status === 'errored')
        .forEach(p => {
          issues.push({ type: 'process-error', details: { name: p.name, pm_id: p.pm_id } });
        });
    }
    
    if (systemResources.diskStatus === 'warning') {
      issues.push({ type: 'disk-warning', details: { usage: systemResources.disk } });
    }
    
    if (gitStatus.hasChanges) {
      issues.push({ type: 'uncommitted-changes', details: {} });
    }
    
    if (buildStatus.status === 'no-build') {
      issues.push({ type: 'no-build', details: {} });
    }
    
    if (dependenciesStatus.status === 'no-deps') {
      issues.push({ type: 'dependencies', details: {} });
    }
    
    // Update system health
    systemHealth = {
      status: issues.length === 0 ? 'healthy' : 'degraded',
      lastCheck: Date.now(),
      uptime: Date.now() - startTime,
      processCount: pm2Status.total || 0,
      errorCount: pm2Status.errored || 0,
      performance: {
        cpu: 0, // Would need more sophisticated monitoring for CPU
        memory: 0, // Would need more sophisticated monitoring for memory
        disk: systemResources.disk
      },
      processes: pm2Status.processes || [],
      issues
    };
    
    // Attempt to resolve issues
    if (issues.length > 0) {
      attemptIssueResolution(issues);
    }
    
    log(`Health check completed. Status: ${systemHealth.status}, Issues: ${issues.length}`);
    
  } catch (error) {
    log(`Health check failed: ${error.message}`, 'ERROR');
    systemHealth.status = 'error';
    systemHealth.lastCheck = Date.now();
  }
}

// HTTP server
function createHealthServer() {
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
    
    switch (req.url) {
      case '/health':
        res.writeHead(200);
        res.end(JSON.stringify({
          status: systemHealth.status,
          timestamp: new Date().toISOString(),
          uptime: systemHealth.uptime,
          lastCheck: systemHealth.lastCheck,
          processCount: systemHealth.processCount,
          errorCount: systemHealth.errorCount,
          issues: systemHealth.issues.length
        }, null, 2));
        break;
        
      case '/metrics':
        res.writeHead(200);
        res.end(JSON.stringify({
          systemHealth,
          metrics: metrics.slice(-10), // Last 10 metrics
          performance: {
            thresholds: CONFIG.PERFORMANCE_THRESHOLDS,
            current: systemHealth.performance
          }
        }, null, 2));
        break;
        
      case '/processes':
        res.writeHead(200);
        res.end(JSON.stringify({
          processes: systemHealth.processes,
          timestamp: new Date().toISOString()
        }, null, 2));
        break;
        
      default:
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not found' }));
    }
  });
  
  return server;
}

// Main monitoring loops
function startMonitoringLoops() {
  // Health check loop
  setInterval(performHealthCheck, CONFIG.MONITOR_INTERVAL);
  
  // Performance metrics collection
  setInterval(collectPerformanceMetrics, CONFIG.MONITOR_INTERVAL);
  
  // Initial health check
  setTimeout(performHealthCheck, 5000);
}

// Main function
function main() {
  log('Initializing PM2 Sync Monitor System...');
  
  try {
    // Create health check server
    const server = createHealthServer();
    
    // Start server
    server.listen(CONFIG.PORT, () => {
      log(`Monitor server listening on port ${CONFIG.PORT}`);
    });
    
    // Start monitoring loops
    startMonitoringLoops();
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      log('Shutting down PM2 Sync Monitor System...');
      server.close();
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      log('Shutting down PM2 Sync Monitor System...');
      server.close();
      process.exit(0);
    });
    
    log('PM2 Sync Monitor System initialized successfully');
    
  } catch (error) {
    log(`Failed to initialize system: ${error.message}`, 'ERROR');
    process.exit(1);
  }
}

// Start the system
if (require.main === module) {
  main();
}

module.exports = {
  main,
  performHealthCheck,
  checkPM2Status,
  checkSystemResources,
  checkGitStatus,
  checkBuildStatus,
  checkDependencies
};
