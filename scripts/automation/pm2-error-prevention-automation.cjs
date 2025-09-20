#!/usr/bin/env node

/**
 * PM2 Error Prevention Automation
 * Continuously monitors and fixes common project errors
 * Runs every 5 minutes to prevent build failures
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class PM2ErrorPrevention {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, "logs", "pm2-error-prevention.log");
    this.errorLogFile = path.join(this.projectRoot, "logs", "pm2-error-prevention-error.log");
    this.ensureLogDirectory();
    this.errorCount = 0;
    this.fixCount = 0;
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  logError(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [ERROR] ${message}`;
    console.error(logMessage);
    
    try {
      fs.appendFileSync(this.errorLogFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to error log file:', error.message);
    }
  }

  async checkForMergeConflicts() {
    this.log("🔍 Checking for merge conflicts...");
    
    try {
      const files = this.getAllFiles(this.projectRoot, ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs']);
      let conflictCount = 0;
      
      for (const file of files) {
        if (file.includes('node_modules')) continue;
        
        try {
          const content = fs.readFileSync(file, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
            this.log(`⚠️  Merge conflict found in: ${file}`);
            conflictCount++;
            this.errorCount++;
          }
        } catch (error) {
          // File might be binary or unreadable
        }
      }
      
      if (conflictCount === 0) {
        this.log("✅ No merge conflicts found");
      } else {
        this.log(`❌ Found ${conflictCount} files with merge conflicts`);
      }
      
      return conflictCount === 0;
    } catch (error) {
      this.logError(`Failed to check for merge conflicts: ${error.message}`);
      return false;
    }
  }

  async checkForSyntaxErrors() {
    this.log("🔍 Checking for syntax errors...");
    
    try {
      // Try to build the project
      execSync('npm run build', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      
      this.log("✅ No syntax errors found");
      return true;
    } catch (error) {
      this.logError(`Syntax errors found: ${error.message}`);
      this.errorCount++;
      return false;
    }
  }

  async checkDependencies() {
    this.log("🔍 Checking dependencies...");
    
    try {
      // Check if node_modules exists
      if (!fs.existsSync(path.join(this.projectRoot, 'node_modules'))) {
        this.log("⚠️  node_modules not found, installing dependencies...");
        execSync('npm install', { 
          cwd: this.projectRoot, 
          stdio: 'inherit' 
        });
        this.fixCount++;
      }
      
      // Check for outdated packages
      try {
        execSync('npm outdated', { 
          cwd: this.projectRoot, 
          stdio: 'pipe' 
        });
        this.log("✅ Dependencies are up to date");
      } catch (error) {
        this.log("⚠️  Some dependencies are outdated");
      }
      
      return true;
    } catch (error) {
      this.logError(`Dependency check failed: ${error.message}`);
      return false;
    }
  }

  getAllFiles(dir, extensions) {
    const files = [];
    
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          files.push(...this.getAllFiles(fullPath, extensions));
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Directory doesn't exist or can't be read
    }
    
    return files;
  }

  async run() {
    this.log("🚀 Starting PM2 Error Prevention...");
    
    try {
      // Check for merge conflicts
      const noConflicts = await this.checkForMergeConflicts();
      
      // Check for syntax errors
      const noSyntaxErrors = await this.checkForSyntaxErrors();
      
      // Check dependencies
      const depsOk = await this.checkDependencies();
      
      if (noConflicts && noSyntaxErrors && depsOk) {
        this.log("🎉 All checks passed - no errors found!");
      } else {
        this.log(`⚠️  Found ${this.errorCount} issues, fixed ${this.fixCount}`);
      }
      
    } catch (error) {
      this.logError(`PM2 Error Prevention failed: ${error.message}`);
    }
  }
}

// Run the error prevention
if (require.main === module) {
  const prevention = new PM2ErrorPrevention();
  prevention.run().catch(console.error);
}

module.exports = PM2ErrorPrevention;