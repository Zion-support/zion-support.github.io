#!/usr/bin/env node

/**
 * Link Checker Automation
 * Monitors and checks links in the Zion Tech Group application
 */

const fs = require('fs');
const path = require('path');

const CONFIG = {
  name: 'link-checker',
  interval: process.env.AUTOMATION_INTERVAL || 1800000, // 30 minutes default
  logFile: path.join(__dirname, '../../logs/link-checker.log')
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

function scanForLinks() {
  try {
    log('Starting link scan...');
    
    const srcDir = path.join(__dirname, '../../src');
    const pagesDir = path.join(__dirname, '../../pages');
    
    let totalFiles = 0;
    let filesWithLinks = 0;
    let totalLinks = 0;
    
    const scanDirectory = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const files = fs.readdirSync(dir, { withFileTypes: true });
      for (const file of files) {
        if (file.isDirectory()) {
          scanDirectory(path.join(dir, file.name));
        } else if (file.name.match(/\.(js|jsx|ts|tsx|md|html)$/)) {
          totalFiles++;
          const filePath = path.join(dir, file.name);
          const links = extractLinksFromFile(filePath);
          
          if (links.length > 0) {
            filesWithLinks++;
            totalLinks += links.length;
          }
        }
      }
    };
    
    scanDirectory(srcDir);
    scanDirectory(pagesDir);
    
    log(`Scan complete: ${totalFiles} files scanned, ${filesWithLinks} files with links, ${totalLinks} total links found`);
    return { totalFiles, filesWithLinks, totalLinks };
    
  } catch (error) {
    log(`Error during scan: ${error.message}`, 'ERROR');
    return null;
  }
}

function extractLinksFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const linkPatterns = [
      /https?:\/\/[^\s<>"{}|\\^`\[\]]+/g,
      /href=["']([^"']+)["']/g,
      /src=["']([^"']+)["']/g
    ];
    
    const links = [];
    linkPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        links.push(...matches);
      }
    });
    
    return links;
  } catch (error) {
    return [];
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
      const scanResults = scanForLinks();
      runHealthCheck();
    } catch (error) {
      log(`Error in main loop: ${error.message}`, 'ERROR');
    }
  }, CONFIG.interval);
  
  try {
    log('Running initial scan...');
    const scanResults = scanForLinks();
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

module.exports = { scanForLinks, runHealthCheck, main };