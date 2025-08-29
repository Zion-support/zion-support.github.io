#!/usr/bin/env node

/**
 * Continuous Improvement Automation
 * Monitors and continuously improves the Zion Tech Group application
 */

const fs = require('fs');
const path = require('path');

const CONFIG = {
  name: 'continuous-improvement',
  interval: process.env.AUTOMATION_INTERVAL || 3600000, // 1 hour default
  logFile: path.join(__dirname, '../../logs/continuous-improvement.log')
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

function analyzeCodeQuality() {
  try {
    log('Analyzing code quality...');
    
    const srcDir = path.join(__dirname, '../../src');
    const pagesDir = path.join(__dirname, '../../pages');
    
    let totalFiles = 0;
    let qualityScore = 0;
    
    const analyzeDirectory = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const files = fs.readdirSync(dir, { withFileTypes: true });
      for (const file of files) {
        if (file.isDirectory()) {
          analyzeDirectory(path.join(dir, file.name));
        } else if (file.name.match(/\.(js|jsx|ts|tsx)$/)) {
          totalFiles++;
          const filePath = path.join(dir, file.name);
          const fileScore = analyzeFileQuality(filePath);
          qualityScore += fileScore;
        }
      }
    };
    
    analyzeDirectory(srcDir);
    analyzeDirectory(pagesDir);
    
    const averageScore = totalFiles > 0 ? qualityScore / totalFiles : 0;
    log(`Quality analysis complete: ${totalFiles} files analyzed, average quality score: ${averageScore.toFixed(2)}`);
    
    return { totalFiles, qualityScore: averageScore };
    
  } catch (error) {
    log(`Error during quality analysis: ${error.message}`, 'ERROR');
    return null;
  }
}

function analyzeFileQuality(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let score = 100;
    
    // Check for common quality issues
    if (content.includes('TODO')) score -= 10;
    if (content.includes('FIXME')) score -= 15;
    if (content.includes('console.log')) score -= 5;
    if (content.includes('debugger')) score -= 20;
    if (content.length > 1000) score -= 5;
    
    return Math.max(0, score);
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
      const qualityResults = analyzeCodeQuality();
      runHealthCheck();
    } catch (error) {
      log(`Error in main loop: ${error.message}`, 'ERROR');
    }
  }, CONFIG.interval);
  
  try {
    log('Running initial analysis...');
    const qualityResults = analyzeCodeQuality();
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

module.exports = { analyzeCodeQuality, runHealthCheck, main };