#!/usr/bin/env node

/**
 * Security Audit Automation
 * Monitors and audits security aspects of the Zion Tech Group application
 */

const fs = require('fs');
const path = require('path');

const CONFIG = {
  name: 'security-audit',
  interval: process.env.AUTOMATION_INTERVAL || 7200000, // 2 hours default
  logFile: path.join(__dirname, '../../logs/security-audit.log')
};

function log(message, level = 'INFO') {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] ${message}`;
  console.log(logMessage);
  
  const logDir = path.dirname(CONFIG.logFile);
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
  fs.appendFileSync(CONFIG.logFile, logMessage + '\n');
}

function runSecurityAudit() {
  try {
    log('Starting security audit...');
    
    const srcDir = path.join(__dirname, '../../src');
    const pagesDir = path.join(__dirname, '../../pages');
    
    let totalFiles = 0;
    let securityIssues = 0;
    
    const auditDirectory = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const files = fs.readdirSync(dir, { withFileTypes: true });
      for (const file of files) {
        if (file.isDirectory()) {
          auditDirectory(path.join(dir, file.name));
        } else if (file.name.match(/\.(js|jsx|ts|tsx)$/)) {
          totalFiles++;
          const filePath = path.join(dir, file.name);
          const issues = auditFileSecurity(filePath);
          securityIssues += issues;
        }
      }
    };
    
    auditDirectory(srcDir);
    auditDirectory(pagesDir);
    
    log(`Security audit complete: ${totalFiles} files audited, ${securityIssues} security issues found`);
    return { totalFiles, securityIssues };
    
  } catch (error) {
    log(`Error during security audit: ${error.message}`, 'ERROR');
    return null;
  }
}

function auditFileSecurity(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let issues = 0;
    
    // Check for common security issues
    if (content.includes('eval(')) issues++;
    if (content.includes('innerHTML')) issues++;
    if (content.includes('document.write')) issues++;
    if (content.includes('localStorage')) issues++;
    if (content.includes('sessionStorage')) issues++;
    if (content.includes('XMLHttpRequest')) issues++;
    
    return issues;
  } catch (error) {
    return 0;
  }
}

function runHealthCheck() {
  try {
    const requiredDirs = [
      path.join(__dirname, '../../src'),
      path.join(__dirname, '../../pages')
    ];
    
    const missingDirs = requiredDirs.filter(dir => !fs.existsSync(dir));
    if (missingDirs.length > 0) {
      log(`Missing directories: ${missingDirs.join(', ')}`, 'WARN');
      return false;
    }
    
    log('Health check passed');
    return true;
  } catch (error) {
    log(`Health check failed: ${error.message}`, 'ERROR');
    return false;
  }
}

async function main() {
  log(`Starting ${CONFIG.name} automation`);
  
  if (!runHealthCheck()) {
    log('Health check failed, exiting', 'ERROR');
    process.exit(1);
  }
  
  setInterval(async () => {
    try {
      log('Running automation cycle...');
      const auditResults = runSecurityAudit();
      runHealthCheck();
    } catch (error) {
      log(`Error in main loop: ${error.message}`, 'ERROR');
    }
  }, CONFIG.interval);
  
  try {
    log('Running initial audit...');
    const auditResults = runSecurityAudit();
  } catch (error) {
    log(`Error in initial run: ${error.message}`, 'ERROR');
  }
}

process.on('uncaughtException', (error) => {
  log(`Uncaught Exception: ${error.message}`, 'ERROR');
});

process.on('unhandledRejection', (reason, promise) => {
  log(`Unhandled Rejection: ${reason}`, 'ERROR');
});

process.on('SIGTERM', () => {
  log('Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  log('Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

if (require.main === module) {
  main().catch(error => {
    log(`Failed to start automation: ${error.message}`, 'ERROR');
    process.exit(1);
  });
}

module.exports = { runSecurityAudit, runHealthCheck, main };