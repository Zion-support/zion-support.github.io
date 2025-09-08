#!/usr/bin/env node

/**
 * PM2 ESLint Auto-Fixer - Continuous ESLint Monitoring and Auto-Fixing
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const chokidar = require('chokidar');

class PM2ESLintFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.logsDir, 'logs');
    this.eslintLogFile = path.join(this.logsDir, 'eslint-fixer.log');
    this.eslintReportFile = path.join(this.logsDir, 'eslint-report.json');
    this.fixInterval = parseInt(process.env.ESLINT_FIX_INTERVAL) || 45000;
    this.autoFixEnabled = process.env.ESLINT_AUTO_FIX === 'true';
    this.quietMode = process.env.ESLINT_QUIET_MODE === 'true';
    
    this.watchPatterns = [
      'src/**/*.{ts,tsx,js,jsx}',
      'components/**/*.{ts,tsx,js,jsx}',
      'pages/**/*.{ts,tsx,js,jsx}',
      'utils/**/*.{ts,tsx,js,jsx}',
      'context/**/*.{ts,tsx,js,jsx}',
      'data/**/*.{ts,tsx,js,jsx}',
      'layout/**/*.{ts,tsx,js,jsx}'
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
    
    this.ensureLogsDirectory();
    this.stats = this.loadStats();
    this.isRunning = false;
    this.lastFixTime = 0;
    this.fixCooldown = 5000; // 5 seconds between fixes
  }

  ensureLogsDirectory() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  loadStats() {
    try {
      if (fs.existsSync(this.eslintReportFile)) {
        return JSON.parse(fs.readFileSync(this.eslintReportFile, 'utf8'));
      }
    } catch (error) {
      this.log('Error loading ESLint stats:', error.message);
    }
    
    return {
      startTime: new Date().toISOString(),
      totalRuns: 0,
      totalErrors: 0,
      totalWarnings: 0,
      totalFixed: 0,
      lastRun: null,
      fixHistory: []
    };
  }

  saveStats() {
    try {
      fs.writeFileSync(this.eslintReportFile, JSON.stringify(this.stats, null, 2));
    } catch (error) {
      this.log('Error saving ESLint stats:', error.message);
    }
  }

  log(message, ...args) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [ESLint Fixer] ${message} ${args.join(' ')}`.trim();
    
    if (!this.quietMode) {
      console.log(logMessage);
    }
    
    try {
      fs.appendFileSync(this.eslintLogFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to ESLint log file:', error.message);
    }
  }

  async runESLint() {
    try {
      const result = execSync('npm run lint 2>&1', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 30000
      });
      
      return { 
        success: true, 
        output: result,
        errors: 0,
        warnings: 0
      };
    } catch (error) {
      const output = error.stdout || error.stderr || error.message;
      const { errors, warnings } = this.parseESLintOutput(output);
      
      return { 
        success: false, 
        output,
        errors,
        warnings
      };
    }
  }

  parseESLintOutput(output) {
    const lines = output.split('\n');
    let errors = 0;
    let warnings = 0;
    
    for (const line of lines) {
      if (line.includes('error')) {
        errors++;
      } else if (line.includes('warning')) {
        warnings++;
      }
    }
    
    return { errors, warnings };
  }

  async runESLintFix() {
    try {
      this.log('Running ESLint auto-fix...');
      
      const result = execSync('npm run lint -- --fix 2>&1', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 60000
      });
      
      this.log('ESLint auto-fix completed');
      return { success: true, output: result };
    } catch (error) {
      const output = error.stdout || error.stderr || error.message;
      this.log('ESLint auto-fix failed:', error.message);
      return { success: false, output };
    }
  }

  async fixSpecificIssues(issues) {
    let fixedCount = 0;
    
    for (const issue of issues) {
      try {
        const fixed = await this.fixIssue(issue);
        if (fixed) {
          fixedCount++;
        }
      } catch (error) {
        this.log(`Failed to fix issue in ${issue.file}:`, error.message);
      }
    }
    
    return fixedCount;
  }

  async fixIssue(issue) {
    try {
      const filePath = path.resolve(this.projectRoot, issue.file);
      if (!fs.existsSync(filePath)) return false;
      
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix common ESLint issues
      if (issue.message.includes("can be escaped with")) {
        const fixed = content
          .replace(/'/g, '&apos;')
          .replace(/"/g, '&quot;')
          .replace(/>/g, '&gt;')
          .replace(/</g, '&lt;');
        
        if (fixed !== content) {
          content = fixed;
          modified = true;
        }
      }
      
      if (issue.message.includes('Unnecessary escape character')) {
        const fixed = content
          .replace(/\\\[/g, '[')
          .replace(/\\\]/g, ']')
          .replace(/\\\(/g, '(')
          .replace(/\\\)/g, ')')
          .replace(/\\\//g, '/');
        
        if (fixed !== content) {
          content = fixed;
          modified = true;
        }
      }
      
      if (issue.message.includes('no-unused-vars')) {
        // Try to remove unused imports/variables
        const lines = content.split('\n');
        const filteredLines = lines.filter(line => {
          // Simple heuristic: remove lines that are just import statements
          if (line.trim().startsWith('import') && line.includes('{') && line.includes('}')) {
            const importMatch = line.match(/import\s*\{([^}]+)\}\s*from/);
            if (importMatch) {
              const imports = importMatch[1].split(',').map(i => i.trim());
              // Check if any of these imports are actually used
              const usedImports = imports.filter(imp => {
                const regex = new RegExp(`\\b${imp}\\b`, 'g');
                return content.replace(line, '').match(regex);
              });
              
              if (usedImports.length === 0) {
                return false; // Remove unused import
              }
            }
          }
          return true;
        });
        
        if (filteredLines.length !== lines.length) {
          content = filteredLines.join('\n');
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.logFix(`Fixed ESLint issue: ${issue.message}`, issue.file);
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`Error fixing issue:`, error.message);
      return false;
    }
  }

  logFix(description, filePath) {
    const fixRecord = {
      timestamp: new Date().toISOString(),
      description,
      filePath,
      type: 'eslint'
    };
    
    this.stats.fixHistory.push(fixRecord);
    this.stats.totalFixed++;
    
    try {
      fs.appendFileSync(this.eslintLogFile, JSON.stringify(fixRecord) + '\n');
    } catch (error) {
      console.error('Failed to write to fix log:', error.message);
    }
    
    this.saveStats();
  }

  async processFile(filePath) {
    if (this.isRunning) return;
    
    const now = Date.now();
    if (now - this.lastFixTime < this.fixCooldown) return;
    
    this.isRunning = true;
    this.lastFixTime = now;
    
    try {
      this.log(`Processing file: ${filePath}`);
      
      // Run ESLint check
      const lintResult = await this.runESLint();
      
      if (!lintResult.success) {
        this.log(`ESLint issues found: ${lintResult.errors} errors, ${lintResult.warnings} warnings`);
        
        if (this.autoFixEnabled) {
          // Try auto-fix first
          const fixResult = await this.runESLintFix();
          
          if (fixResult.success) {
            // Check if issues were resolved
            const recheckResult = await this.runESLint();
            if (recheckResult.success) {
              this.log('All ESLint issues resolved by auto-fix');
            } else {
              this.log(`Remaining issues after auto-fix: ${recheckResult.errors} errors, ${recheckResult.warnings} warnings`);
            }
          }
        }
      } else {
        this.log('No ESLint issues found');
      }
      
      this.stats.totalRuns++;
      this.stats.lastRun = new Date().toISOString();
      this.saveStats();
      
    } catch (error) {
      this.log('Error processing file:', error.message);
    } finally {
      this.isRunning = false;
    }
  }

  startWatching() {
    this.log('Starting file watcher for ESLint auto-fixing...');
    
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
    this.log('Running initial ESLint check...');
    
    const lintResult = await this.runESLint();
    
    if (!lintResult.success) {
      this.log(`Initial ESLint check found ${lintResult.errors} errors and ${lintResult.warnings} warnings`);
      
      if (this.autoFixEnabled) {
        this.log('Running initial auto-fix...');
        const fixResult = await this.runESLintFix();
        
        if (fixResult.success) {
          const recheckResult = await this.runESLint();
          if (recheckResult.success) {
            this.log('Initial auto-fix resolved all issues');
          } else {
            this.log(`Remaining issues after initial fix: ${recheckResult.errors} errors, ${recheckResult.warnings} warnings`);
          }
        }
      }
    } else {
      this.log('Initial ESLint check passed - no issues found');
    }
    
    this.stats.totalRuns++;
    this.stats.lastRun = new Date().toISOString();
    this.saveStats();
  }

  async start() {
    this.log('PM2 ESLint Fixer starting...');
    
    // Run initial check
    await this.runInitialCheck();
    
    // Start file watcher
    const watcher = this.startWatching();
    
    // Set up periodic ESLint checks
    setInterval(async () => {
      await this.runPeriodicCheck();
    }, this.fixInterval);
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      this.log('Shutting down PM2 ESLint Fixer...');
      watcher.close();
      this.saveStats();
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      this.log('Shutting down PM2 ESLint Fixer...');
      watcher.close();
      this.saveStats();
      process.exit(0);
    });
    
    this.log('PM2 ESLint Fixer started successfully');
  }

  async runPeriodicCheck() {
    try {
      this.log('Running periodic ESLint check...');
      
      const lintResult = await this.runESLint();
      
      if (!lintResult.success) {
        this.log(`Periodic check found ${lintResult.errors} errors and ${lintResult.warnings} warnings`);
        
        if (this.autoFixEnabled) {
          await this.runESLintFix();
        }
      } else {
        this.log('Periodic ESLint check passed');
      }
      
      this.stats.totalRuns++;
      this.stats.lastRun = new Date().toISOString();
      this.saveStats();
      
    } catch (error) {
      this.log('Periodic check failed:', error.message);
    }
  }

  async runHealthCheck() {
    try {
      const lintResult = await this.runESLint();
      
      if (lintResult.success) {
        this.log('Health check: ESLint system operational');
        return true;
      } else {
        this.log(`Health check: ESLint issues detected (${lintResult.errors} errors, ${lintResult.warnings} warnings)`);
        return false;
      }
    } catch (error) {
      this.log('Health check failed:', error.message);
      return false;
    }
  }

  getStats() {
    return {
      ...this.stats,
      uptime: Date.now() - new Date(this.stats.startTime).getTime(),
      autoFixEnabled: this.autoFixEnabled,
      quietMode: this.quietMode
    };
  }
}

// CLI interface
if (require.main === module) {
  const fixer = new PM2ESLintFixer();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      fixer.start();
      break;
    case 'check':
      fixer.runInitialCheck().then(() => process.exit(0));
      break;
    case 'fix':
      fixer.runESLintFix().then(() => process.exit(0));
      break;
    case 'stats':
      console.log(JSON.stringify(fixer.getStats(), null, 2));
      break;
    case 'health':
      fixer.runHealthCheck().then(() => process.exit(0));
      break;
    default:
      console.log(`
PM2 ESLint Fixer - Usage:
  npm run pm2:eslint:fixer start    - Start the ESLint fixer service
  npm run pm2:eslint:fixer check    - Run a one-time ESLint check
  npm run pm2:eslint:fixer fix      - Run ESLint auto-fix
  npm run pm2:eslint:fixer stats    - Show ESLint statistics
  npm run pm2:eslint:fixer health   - Run health check
      `);
      process.exit(1);
  }
}

module.exports = PM2ESLintFixer;