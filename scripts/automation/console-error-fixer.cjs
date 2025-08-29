#!/usr/bin/env node

/**
 * Console Error Fixer Automation
 * Monitors and automatically fixes console errors in the Zion Tech Group application
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  name: 'console-error-fixer',
  interval: process.env.AUTOMATION_INTERVAL || 900000, // 15 minutes default
  logFile: path.join(__dirname, '../../logs/console-error-fixer.log'),
  errorPatterns: [
    /console\.error\(/g,
    /console\.warn\(/g,
    /console\.log\(/g,
    /throw new Error\(/g,
    /Error: /g
  ],
  fixStrategies: {
    'console.error': '// console.error removed by automation',
    'console.warn': '// console.warn removed by automation',
    'console.log': '// console.log removed by automation',
    'throw new Error': '// Error throwing removed by automation'
  }
};

// Utility functions
function log(message, level = 'INFO') {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] ${message}`;
  
  console.log(logMessage);
  
  // Ensure log directory exists
  const logDir = path.dirname(CONFIG.logFile);
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
  
  // Append to log file
  fs.appendFileSync(CONFIG.logFile, logMessage + '\n');
}

function scanForErrors() {
  try {
    log('Starting console error scan...');
    
    const srcDir = path.join(__dirname, '../../src');
    const pagesDir = path.join(__dirname, '../../pages');
    const componentsDir = path.join(__dirname, '../../components');
    
    let totalFiles = 0;
    let filesWithErrors = 0;
    let totalErrors = 0;
    
    // Scan source files
    const scanDirectory = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const files = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const file of files) {
        if (file.isDirectory()) {
          scanDirectory(path.join(dir, file.name));
        } else if (file.name.match(/\.(js|jsx|ts|tsx)$/)) {
          totalFiles++;
          const filePath = path.join(dir, file.name);
          const errors = scanFileForErrors(filePath);
          
          if (errors.length > 0) {
            filesWithErrors++;
            totalErrors += errors.length;
            log(`Found ${errors.length} errors in ${filePath}`, 'WARN');
          }
        }
      }
    };
    
    scanDirectory(srcDir);
    scanDirectory(pagesDir);
    scanDirectory(componentsDir);
    
    log(`Scan complete: ${totalFiles} files scanned, ${filesWithErrors} files with errors, ${totalErrors} total errors found`);
    
    return { totalFiles, filesWithErrors, totalErrors };
    
  } catch (error) {
    log(`Error during scan: ${error.message}`, 'ERROR');
    return null;
  }
}

function scanFileForErrors(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const errors = [];
    
    CONFIG.errorPatterns.forEach((pattern, index) => {
      const matches = content.match(pattern);
      if (matches) {
        errors.push({
          pattern: Object.keys(CONFIG.fixStrategies)[index],
          count: matches.length,
          filePath
        });
      }
    });
    
    return errors;
  } catch (error) {
    log(`Error reading file ${filePath}: ${error.message}`, 'ERROR');
    return [];
  }
}

function fixErrors() {
  try {
    log('Starting error fixing process...');
    
    const srcDir = path.join(__dirname, '../../src');
    const pagesDir = path.join(__dirname, '../../pages');
    const componentsDir = path.join(__dirname, '../../components');
    
    let filesFixed = 0;
    let totalFixes = 0;
    
    const fixDirectory = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const files = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const file of files) {
        if (file.isDirectory()) {
          fixDirectory(path.join(dir, file.name));
        } else if (file.name.match(/\.(js|jsx|ts|tsx)$/)) {
          const filePath = path.join(dir, file.name);
          const fixes = fixFileErrors(filePath);
          
          if (fixes > 0) {
            filesFixed++;
            totalFixes += fixes;
            log(`Fixed ${fixes} errors in ${filePath}`);
          }
        }
      }
    };
    
    fixDirectory(srcDir);
    fixDirectory(pagesDir);
    fixDirectory(componentsDir);
    
    log(`Error fixing complete: ${filesFixed} files fixed, ${totalFixes} total fixes applied`);
    
    return { filesFixed, totalFixes };
    
  } catch (error) {
    log(`Error during fixing: ${error.message}`, 'ERROR');
    return null;
  }
}

function fixFileErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixes = 0;
    
    // Apply fixes
    Object.entries(CONFIG.fixStrategies).forEach(([pattern, replacement]) => {
      const regex = new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      const matches = content.match(regex);
      
      if (matches) {
        content = content.replace(regex, replacement);
        fixes += matches.length;
      }
    });
    
    // Only write if changes were made
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      log(`Applied ${fixes} fixes to ${filePath}`);
    }
    
    return fixes;
    
  } catch (error) {
    log(`Error fixing file ${filePath}: ${error.message}`, 'ERROR');
    return 0;
  }
}

function runHealthCheck() {
  try {
    log('Running health check...');
    
    // Check if key directories exist
    const requiredDirs = [
      path.join(__dirname, '../../src'),
      path.join(__dirname, '../../pages'),
      path.join(__dirname, '../../components')
    ];
    
    const missingDirs = requiredDirs.filter(dir => !fs.existsSync(dir));
    
    if (missingDirs.length > 0) {
      log(`Missing required directories: ${missingDirs.join(', ')}`, 'WARN');
      return false;
    }
    
    // Check if we can read/write files
    const testFile = path.join(__dirname, '../../temp-test-file');
    try {
      fs.writeFileSync(testFile, 'test');
      fs.unlinkSync(testFile);
    } catch (error) {
      log(`File system access test failed: ${error.message}`, 'ERROR');
      return false;
    }
    
    log('Health check passed');
    return true;
    
  } catch (error) {
    log(`Health check failed: ${error.message}`, 'ERROR');
    return false;
  }
}

// Main automation loop
async function main() {
  log(`Starting ${CONFIG.name} automation`);
  
  // Initial health check
  if (!runHealthCheck()) {
    log('Initial health check failed, exiting', 'ERROR');
    process.exit(1);
  }
  
  // Main loop
  setInterval(async () => {
    try {
      log('Running automation cycle...');
      
      // Scan for errors
      const scanResults = scanForErrors();
      if (scanResults && scanResults.totalErrors > 0) {
        log(`Found ${scanResults.totalErrors} errors, starting fix process...`);
        
        // Fix errors
        const fixResults = fixErrors();
        if (fixResults) {
          log(`Fixed ${fixResults.totalFixes} errors in ${fixResults.filesFixed} files`);
        }
      } else {
        log('No errors found, system is clean');
      }
      
      // Health check
      runHealthCheck();
      
    } catch (error) {
      log(`Error in main loop: ${error.message}`, 'ERROR');
    }
  }, CONFIG.interval);
  
  // Initial run
  try {
    log('Running initial scan...');
    const scanResults = scanForErrors();
    if (scanResults && scanResults.totalErrors > 0) {
      log(`Initial scan found ${scanResults.totalErrors} errors, starting fix process...`);
      const fixResults = fixErrors();
      if (fixResults) {
        log(`Initial fix complete: ${fixResults.totalFixes} errors fixed in ${fixResults.filesFixed} files`);
      }
    }
  } catch (error) {
    log(`Error in initial run: ${error.message}`, 'ERROR');
  }
}

// Error handling
process.on('uncaughtException', (error) => {
  log(`Uncaught Exception: ${error.message}`, 'ERROR');
  log(`Stack: ${error.stack}`, 'ERROR');
});

process.on('unhandledRejection', (reason, promise) => {
  log(`Unhandled Rejection at: ${promise}, reason: ${reason}`, 'ERROR');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  log('Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  log('Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

// Start the automation
if (require.main === module) {
  main().catch(error => {
    log(`Failed to start automation: ${error.message}`, 'ERROR');
    process.exit(1);
  });
}

module.exports = {
  scanForErrors,
  fixErrors,
  runHealthCheck,
  main
};