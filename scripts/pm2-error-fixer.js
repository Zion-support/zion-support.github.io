#!/usr/bin/env node

/**
 * PM2 Error Fixer - Automated Error Detection and Resolution
 * This script runs continuously to monitor and fix common project errors
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const chokidar = require('chokidar');

class PM2ErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.errorLogFile = path.join(this.logsDir, 'error-fixer.log');
    this.fixLogFile = path.join(this.logsDir, 'fixes-applied.log');
    this.statsFile = path.join(this.logsDir, 'error-fixer-stats.json');
    this.watchPatterns = [
      'src/**/*.{ts,tsx,js,jsx}',
      'components/**/*.{ts,tsx,js,jsx}',
      'pages/**/*.{ts,tsx,js,jsx}',
      'utils/**/*.{ts,tsx,js,jsx}',
      'context/**/*.{ts,tsx,js,jsx}',
      'data/**/*.{ts,tsx,js,jsx}',
      'layout/**/*.{ts,tsx,js,jsx}',
      '*.{json,js,cjs,ts}'
    ];
    this.ignorePatterns = [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.git/**',
      'logs/**',
      '*.log',
      '*.min.js',
      '*.bundle.js'
    ];
    
    this.stats = this.loadStats();
    this.isRunning = false;
    this.fixQueue = [];
    this.lastFixTime = 0;
    this.fixCooldown = 5000; // 5 seconds between fixes
    
    this.ensureLogsDirectory();
  }

  ensureLogsDirectory() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  loadStats() {
    try {
      if (fs.existsSync(this.statsFile)) {
        return JSON.parse(fs.readFileSync(this.statsFile, 'utf8'));
      }
    } catch (error) {
      this.log('Error loading stats file:', error.message);
    }
    
    return {
      startTime: new Date().toISOString(),
      totalErrorsFixed: 0,
      totalFilesProcessed: 0,
      lastRun: null,
      errorTypes: {},
      fixHistory: []
    };
  }

  saveStats() {
    try {
      fs.writeFileSync(this.statsFile, JSON.stringify(this.stats, null, 2));
    } catch (error) {
      this.log('Error saving stats:', error.message);
    }
  }

  log(message, ...args) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message} ${args.join(' ')}`.trim();
    
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.errorLogFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  logFix(description, filePath, errorType) {
    const fixRecord = {
      timestamp: new Date().toISOString(),
      description,
      filePath,
      errorType
    };
    
    this.stats.fixHistory.push(fixRecord);
    this.stats.totalErrorsFixed++;
    
    try {
      fs.appendFileSync(this.fixLogFile, JSON.stringify(fixRecord) + '\n');
    } catch (error) {
      console.error('Failed to write to fix log:', error.message);
    }
    
    this.saveStats();
  }

  async runTypeCheck() {
    try {
      const result = execSync('npm run type-check 2>&1', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 30000
      });
      return { success: true, output: result };
    } catch (error) {
      return { 
        success: false, 
        output: error.stdout || error.stderr || error.message,
        exitCode: error.status
      };
    }
  }

  async runLint() {
    try {
      const result = execSync('npm run lint 2>&1', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 30000
      });
      return { success: true, output: result };
    } catch (error) {
      return { 
        success: false, 
        output: error.stdout || error.stderr || error.message,
        exitCode: error.status
      };
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // Match TypeScript compiler output format: src/file.ts(line,col): error TS1234: message
      const match = line.match(/src\/(.+?)\((\d+),(\d+)\):\s*error\s+TS(\d+):\s*(.+)/);
      if (match) {
        const [, file, lineNum, col, code, message] = match;
        let fullMessage = message.trim();
        
        // Check if the message continues on the next line
        if (i + 1 < lines.length && !lines[i + 1].includes('src/') && !lines[i + 1].includes('error TS')) {
          fullMessage += ' ' + lines[i + 1].trim();
        }
        
        // Check for additional continuation lines
        let j = i + 2;
        while (j < lines.length && !lines[j].includes('src/') && !lines[j].includes('error TS') && lines[j].trim() !== '') {
          fullMessage += ' ' + lines[j].trim();
          j++;
        }
        
        // Clean up the message (remove trailing $ and normalize whitespace)
        fullMessage = fullMessage.replace(/\$\s*$/, '').replace(/\s+/g, ' ').trim();
        
        errors.push({
          file: `src/${file}`,
          line: parseInt(lineNum),
          column: parseInt(col),
          code: `TS${code}`,
          message: fullMessage,
          type: 'typescript'
        });
      }
    }
    
    return errors;
  }

  parseESLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      const match = line.match(/(.+):(\d+):(\d+)\s+error\s+(.+)/);
      if (match) {
        errors.push({
          file: match[1],
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          message: match[4].trim(),
          type: 'eslint'
        });
      }
    }
    
    return errors;
  }

  async fixTypeScriptErrors(errors) {
    let fixedCount = 0;
    
    for (const error of errors) {
      if (this.shouldSkipFix(error)) continue;
      
      try {
        const fixed = await this.fixTypeScriptError(error);
        if (fixed) {
          fixedCount++;
          this.logFix(`Fixed TypeScript error: ${error.message}`, error.file, 'typescript');
        }
      } catch (fixError) {
        this.log(`Failed to fix TypeScript error in ${error.file}:`, fixError.message);
      }
    }
    
    return fixedCount;
  }

  async fixESLintErrors(errors) {
    let fixedCount = 0;
    
    for (const error of errors) {
      if (this.shouldSkipFix(error)) continue;
      
      try {
        const fixed = await this.fixESLintError(error);
        if (fixed) {
          fixedCount++;
          this.logFix(`Fixed ESLint error: ${error.message}`, error.file, 'eslint');
        }
      } catch (fixError) {
        this.log(`Failed to fix ESLint error in ${error.file}:`, fixError.message);
      }
    }
    
    return fixedCount;
  }

  shouldSkipFix(error) {
    // Skip certain error types that are too complex to auto-fix
    const skipPatterns = [
      /TS17008/, // JSX element has no corresponding closing tag
      /TS17002/, // Expected corresponding JSX closing tag
      /TS1128/,  // Declaration or statement expected
      /TS1109/,  // Expression expected
      /TS1131/,  // Property or signature expected
      /TS1434/,  // Unexpected keyword or identifier
      /TS1381/,  // Unexpected token
      /TS1382/   // Unexpected token
    ];
    
    return skipPatterns.some(pattern => 
      error.code ? pattern.test(error.code) : pattern.test(error.message)
    );
  }

  async fixTypeScriptError(error) {
    try {
      const filePath = path.resolve(this.projectRoot, error.file);
      if (!fs.existsSync(filePath)) return false;
      
      let content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      this.log(`Attempting to fix error in ${error.file}: ${error.message}`);
      
      // Fix common TypeScript syntax errors
      // Fix malformed type annotations with 'any' prefix
      if (error.message.includes('anykeyof')) {
        // Fix malformed type annotations like "anykeyof ContactFormData"
        const fixed = content.replace(/anykeyof\s+/g, 'keyof ');
        if (fixed !== content) {
          this.log(`Fixed anykeyof in ${error.file}`);
          fs.writeFileSync(filePath, fixed);
          return true;
        }
      }
      
      if (error.message.includes('any"') || error.message.includes("any'")) {
        // Fix malformed type annotations like "any"string"
        const fixed = content.replace(/any["']/g, '');
        if (fixed !== content) {
          fs.writeFileSync(filePath, fixed);
          return true;
        }
      }
      
      if (error.message.includes('any0.') || error.message.includes('any0')) {
        // Fix malformed type annotations like "any0.8"
        const fixed = content.replace(/any(\d+\.?\d*)/g, '$1');
        if (fixed !== content) {
          fs.writeFileSync(filePath, fixed);
          return true;
        }
      }
      
      if (error.message.includes('any()')) {
        // Fix malformed function types like "any() => void"
        const fixed = content.replace(/any\(\)/g, '()');
        if (fixed !== content) {
          fs.writeFileSync(filePath, fixed);
          return true;
        }
      }
      
      if (error.message.includes('any{')) {
        // Fix malformed object types like "any{ name, value }"
        const fixed = content.replace(/any\{/g, '{');
        if (fixed !== content) {
          fs.writeFileSync(filePath, fixed);
          return true;
        }
      }
      
      if (error.message.includes('any;')) {
        // Fix malformed type annotations like "any;"
        const fixed = content.replace(/any;/g, ';');
        if (fixed !== content) {
          fs.writeFileSync(filePath, fixed);
          return true;
        }
      }
      
      if (error.message.includes('any,')) {
        // Fix malformed type annotations like "any,"
        const fixed = content.replace(/any,/g, ',');
        if (fixed !== content) {
          fs.writeFileSync(filePath, fixed);
          return true;
        }
      }
      
      if (error.message.includes('any:')) {
        // Fix malformed type annotations like "any:"
        const fixed = content.replace(/any:/g, ':');
        if (fixed !== content) {
          fs.writeFileSync(filePath, fixed);
          return true;
        }
      }
      
      // Fix additional malformed type annotations
      if (error.message.includes('anystring')) {
        // Fix malformed type annotations like "anystring"
        const fixed = content.replace(/anystring/g, 'string');
        if (fixed !== content) {
          fs.writeFileSync(filePath, fixed);
          return true;
        }
      }
      
      if (error.message.includes('any{')) {
        // Fix malformed type annotations like "any{"
        const fixed = content.replace(/any\{/g, '{');
        if (fixed !== content) {
          fs.writeFileSync(filePath, fixed);
          return true;
        }
      }
      
      if (error.message.includes('any}')) {
        // Fix malformed type annotations like "any}"
        const fixed = content.replace(/any\}/g, '}');
        if (fixed !== content) {
          fs.writeFileSync(filePath, fixed);
          return true;
        }
      }
      
      // Fix malformed interface property definitions
      if (error.message.includes('Property or signature expected')) {
        // Look for lines with malformed property definitions
        const lines = content.split('\n');
        let modified = false;
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          if (line.includes('?: {;')) {
            // Fix malformed optional property with semicolon
            lines[i] = line.replace(/\?:\s*\{;/g, '?: {');
            modified = true;
          }
          if (line.includes('?: {')) {
            // Fix missing space before opening brace
            lines[i] = line.replace(/\?:\s*\{/g, '?: {');
            modified = true;
          }
        }
        
        if (modified) {
          const fixed = lines.join('\n');
          fs.writeFileSync(filePath, fixed);
          return true;
        }
      }
      
      // Fix malformed type annotations with 'any' prefix
      if (error.message.includes('anystring')) {
        const fixed = content.replace(/anystring/g, 'string');
        if (fixed !== content) {
          fs.writeFileSync(filePath, fixed);
          return true;
        }
      }
      
      if (error.message.includes("any'") || error.message.includes('any"')) {
        const fixed = content.replace(/any['"]/g, '');
        if (fixed !== content) {
          fs.writeFileSync(filePath, fixed);
          return true;
        }
      }
      
      return false;
    } catch (error) {
      this.log(`Error fixing TypeScript error:`, error.message);
      return false;
    }
  }

  async fixESLintError(error) {
    try {
      const filePath = path.resolve(this.projectRoot, error.file);
      if (!fs.existsSync(filePath)) return false;
      
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix unescaped entities
      if (error.message.includes("can be escaped with")) {
        const fixed = content
          .replace(/'/g, '&apos;')
          .replace(/"/g, '&quot;')
          .replace(/>/g, '&gt;')
          .replace(/</g, '&lt;');
        
        if (fixed !== content) {
          fs.writeFileSync(filePath, fixed);
          return true;
        }
      }
      
      // Fix duplicate keys
      if (error.message.includes('Duplicate key')) {
        // This requires manual intervention, log it
        this.log(`Duplicate key error detected in ${error.file}, requires manual fix`);
        return false;
      }
      
      // Fix unnecessary escape characters
      if (error.message.includes('Unnecessary escape character')) {
        const fixed = content
          .replace(/\\\[/g, '[')
          .replace(/\\\]/g, ']')
          .replace(/\\\(/g, '(')
          .replace(/\\\)/g, ')')
          .replace(/\\\//g, '/');
        
        if (fixed !== content) {
          fs.writeFileSync(filePath, fixed);
          return true;
        }
      }
      
      return false;
    } catch (error) {
      this.log(`Error fixing ESLint error:`, error.message);
      return false;
    }
  }

  async runAutoFix() {
    try {
      // Run ESLint auto-fix
      const lintFixResult = execSync('npm run lint -- --fix 2>&1', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 30000
      });
      
      this.log('ESLint auto-fix completed');
      return true;
    } catch (error) {
      this.log('ESLint auto-fix failed:', error.message);
      return false;
    }
  }

  async processFile(filePath) {
    if (this.isRunning) return;
    
    const now = Date.now();
    if (now - this.lastFixTime < this.fixCooldown) return;
    
    this.isRunning = true;
    this.lastFixTime = now;
    
    try {
      this.log(`Processing file: ${filePath}`);
      
      // Run auto-fix first
      await this.runAutoFix();
      
      // Check for remaining errors
      const typeCheckResult = await this.runTypeCheck();
      const lintResult = await this.runLint();
      
      let totalFixed = 0;
      
      if (!typeCheckResult.success) {
        const tsErrors = this.parseTypeScriptErrors(typeCheckResult.output);
        const tsFixed = await this.fixTypeScriptErrors(tsErrors);
        totalFixed += tsFixed;
        this.log(`Fixed ${tsFixed} TypeScript errors`);
      }
      
      if (!lintResult.success) {
        const lintErrors = this.parseESLintErrors(lintResult.output);
        const lintFixed = await this.fixESLintErrors(lintErrors);
        totalFixed += lintFixed;
        this.log(`Fixed ${lintFixed} ESLint errors`);
      }
      
      if (totalFixed > 0) {
        this.log(`Total errors fixed: ${totalFixed}`);
        this.stats.totalFilesProcessed++;
        this.saveStats();
      }
      
    } catch (error) {
      this.log('Error processing file:', error.message);
    } finally {
      this.isRunning = false;
    }
  }

  startWatching() {
    this.log('Starting file watcher for automatic error fixing...');
    
    const watcher = chokidar.watch(this.watchPatterns, {
      ignored: this.ignorePatterns,
      persistent: true,
      ignoreInitial: true,
      awaitWriteFinish: {
        stabilityThreshold: 1000,
        pollInterval: 100
      }
    });
    
    watcher
      .on('change', (filePath) => {
        this.log(`File changed: ${filePath}`);
        this.processFile(filePath);
      })
      .on('add', (filePath) => {
        this.log(`File added: ${filePath}`);
        this.processFile(filePath);
      })
      .on('error', (error) => {
        this.log('Watcher error:', error.message);
      });
    
    this.log('File watcher started successfully');
    return watcher;
  }

  async runInitialCheck() {
    this.log('Running initial error check...');
    
    const typeCheckResult = await this.runTypeCheck();
    const lintResult = await this.runLint();
    
    let totalFixed = 0;
    
          if (!typeCheckResult.success) {
        this.log('TypeScript errors found, attempting to fix...');
        const tsErrors = this.parseTypeScriptErrors(typeCheckResult.output);
        this.log(`Parsed ${tsErrors.length} TypeScript errors`);
        if (tsErrors.length > 0) {
          this.log('Sample errors:', tsErrors.slice(0, 3).map(e => `${e.file}:${e.line} - ${e.message}`));
        }
        const tsFixed = await this.fixTypeScriptErrors(tsErrors);
        totalFixed += tsFixed;
        this.log(`Fixed ${tsFixed} TypeScript errors`);
      }
    
    if (!lintResult.success) {
      this.log('ESLint errors found, attempting to fix...');
      const lintErrors = this.parseESLintErrors(lintResult.output);
      const lintFixed = await this.fixESLintErrors(lintErrors);
      totalFixed += lintFixed;
      this.log(`Fixed ${lintFixed} ESLint errors`);
    }
    
    if (totalFixed > 0) {
      this.log(`Initial fix completed. Total errors fixed: ${totalFixed}`);
    } else {
      this.log('No errors found or all errors were fixed');
    }
    
    this.stats.lastRun = new Date().toISOString();
    this.saveStats();
  }

  async start() {
    this.log('PM2 Error Fixer starting...');
    
    // Run initial check
    await this.runInitialCheck();
    
    // Start file watcher
    const watcher = this.startWatching();
    
    // Set up periodic health checks
    setInterval(async () => {
      await this.runHealthCheck();
    }, 300000); // Every 5 minutes
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      this.log('Shutting down PM2 Error Fixer...');
      watcher.close();
      this.saveStats();
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      this.log('Shutting down PM2 Error Fixer...');
      watcher.close();
      this.saveStats();
      process.exit(0);
    });
    
    this.log('PM2 Error Fixer started successfully');
  }

  async runHealthCheck() {
    try {
      const typeCheckResult = await this.runTypeCheck();
      const lintResult = await this.runLint();
      
      if (typeCheckResult.success && lintResult.success) {
        this.log('Health check: All systems operational');
      } else {
        this.log('Health check: Errors detected, running fix cycle...');
        await this.runAutoFix();
      }
    } catch (error) {
      this.log('Health check failed:', error.message);
    }
  }

  getStats() {
    return {
      ...this.stats,
      uptime: Date.now() - new Date(this.stats.startTime).getTime(),
      isRunning: this.isRunning
    };
  }
}

// CLI interface
if (require.main === module) {
  const fixer = new PM2ErrorFixer();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      fixer.start();
      break;
    case 'check':
      fixer.runInitialCheck().then(() => process.exit(0));
      break;
    case 'stats':
      console.log(JSON.stringify(fixer.getStats(), null, 2));
      break;
    case 'health':
      fixer.runHealthCheck().then(() => process.exit(0));
      break;
    default:
      console.log(`
PM2 Error Fixer - Usage:
  npm run pm2:error:fixer start    - Start the error fixer service
  npm run pm2:error:fixer check    - Run a one-time error check and fix
  npm run pm2:error:fixer stats    - Show statistics
  npm run pm2:error:fixer health   - Run health check
      `);
      process.exit(1);
  }
}

module.exports = PM2ErrorFixer;