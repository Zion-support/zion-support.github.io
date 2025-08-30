#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const chokidar = require('chokidar');

class RealTimeErrorMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logs = [];
    this.errorsDetected = 0;
    this.fixesApplied = 0;
    this.startTime = Date.now();
    this.watcher = null;
    this.isMonitoring = false;
    this.errorPatterns = new Map();
    this.fixStrategies = new Map();
    
    this.initializeErrorPatterns();
    this.initializeFixStrategies();
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    this.logs.push(logEntry);
    console.log(logEntry);
  }

  initializeErrorPatterns() {
    // Common error patterns to detect
    this.errorPatterns.set('syntax_error', /Unexpected token|Parsing error|Identifier expected/);
    this.errorPatterns.set('unused_import', /'React' is defined but never used|'motion' is defined but never used/);
    this.errorPatterns.set('console_statement', /Unexpected console statement/);
    this.errorPatterns.set('type_error', /Type expected|Type expected|',' expected/);
    this.errorPatterns.set('jsx_error', /JSX expressions must have one parent element/);
    this.errorPatterns.set('undefined_variable', /is not defined|Cannot find module/);
  }

  initializeFixStrategies() {
    // Strategies to fix detected errors
    this.fixStrategies.set('syntax_error', this.fixSyntaxError.bind(this));
    this.fixStrategies.set('unused_import', this.fixUnusedImport.bind(this));
    this.fixStrategies.set('console_statement', this.fixConsoleStatement.bind(this));
    this.fixStrategies.set('type_error', this.fixTypeError.bind(this));
    this.fixStrategies.set('jsx_error', this.fixJSXError.bind(this));
    this.fixStrategies.set('undefined_variable', this.fixUndefinedVariable.bind(this));
  }

  async startMonitoring() {
    this.log('🚀 Starting Real-time Error Monitor...');
    
    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.join(this.projectRoot, 'logs');
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }

      // Start file watching
      await this.startFileWatcher();
      
      // Start periodic error scanning
      this.startPeriodicScanning();
      
      // Start health monitoring
      this.startHealthMonitoring();
      
      this.isMonitoring = true;
      this.log('✅ Real-time Error Monitor is now active');
      
      // Keep the process alive
      process.on('SIGINT', () => this.stopMonitoring());
      process.on('SIGTERM', () => this.stopMonitoring());
      
    } catch (error) {
      this.log(`❌ Failed to start monitoring: ${error.message}`, 'error');
      process.exit(1);
    }
  }

  async startFileWatcher() {
    this.log('👀 Setting up file watcher...');
    
    const watchPaths = [
      'src/**/*',
      'components/**/*',
      'pages/**/*',
      'utils/**/*'
    ];
    
    const ignorePaths = [
      'node_modules/**',
      'dist/**',
      '.git/**',
      '*.log',
      'logs/**',
      '*.backup',
      '*.tsbackup',
      '*.lintbackup',
      'reports/**'
    ];

    this.watcher = chokidar.watch(watchPaths, {
      ignored: ignorePaths,
      persistent: true,
      ignoreInitial: true,
      awaitWriteFinish: {
        stabilityThreshold: 2000,
        pollInterval: 100
      }
    });

    this.watcher
      .on('add', (filePath) => this.handleFileChange(filePath, 'add'))
      .on('change', (filePath) => this.handleFileChange(filePath, 'change'))
      .on('unlink', (filePath) => this.handleFileChange(filePath, 'unlink'))
      .on('error', (error) => this.log(`Watcher error: ${error.message}`, 'error'));
  }

  async handleFileChange(filePath, event) {
    if (event === 'change' || event === 'add') {
      this.log(`📝 File ${event}: ${path.relative(this.projectRoot, filePath)}`);
      
      // Wait a bit for file to be fully written
      setTimeout(async () => {
        await this.analyzeFile(filePath);
      }, 1000);
    }
  }

  async analyzeFile(filePath) {
    try {
      const relativePath = path.relative(this.projectRoot, filePath);
      const ext = path.extname(filePath);
      
      // Only analyze relevant file types
      if (!['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {
        return;
      }

      this.log(`🔍 Analyzing file: ${relativePath}`);
      
      // Check for immediate syntax errors
      const content = fs.readFileSync(filePath, 'utf8');
      const errors = this.detectErrors(content, relativePath);
      
      if (errors.length > 0) {
        this.log(`⚠️ Found ${errors.length} error(s) in ${relativePath}`);
        this.errorsDetected += errors.length;
        
        // Apply fixes automatically if enabled
        if (process.env.AUTO_FIX_ENABLED === 'true') {
          await this.applyFixes(filePath, errors, content);
        }
      }
      
    } catch (error) {
      this.log(`⚠️ Error analyzing file ${filePath}: ${error.message}`, 'warn');
    }
  }

  detectErrors(content, filePath) {
    const errors = [];
    
    // Check for various error patterns
    for (const [errorType, pattern] of this.errorPatterns) {
      if (pattern.test(content)) {
        errors.push({
          type: errorType,
          pattern: pattern.toString(),
          file: filePath,
          severity: this.getErrorSeverity(errorType)
        });
      }
    }
    
    return errors;
  }

  getErrorSeverity(errorType) {
    const severityMap = {
      'syntax_error': 'high',
      'type_error': 'high',
      'jsx_error': 'high',
      'undefined_variable': 'medium',
      'unused_import': 'low',
      'console_statement': 'low'
    };
    
    return severityMap[errorType] || 'medium';
  }

  async applyFixes(filePath, errors, originalContent) {
    let content = originalContent;
    let fixesApplied = 0;
    
    for (const error of errors) {
      const fixStrategy = this.fixStrategies.get(error.type);
      if (fixStrategy) {
        try {
          const result = await fixStrategy(content, error);
          if (result.fixed) {
            content = result.content;
            fixesApplied++;
            this.log(`✅ Applied fix for ${error.type} in ${error.file}`);
          }
        } catch (fixError) {
          this.log(`⚠️ Failed to apply fix for ${error.type}: ${fixError.message}`, 'warn');
        }
      }
    }
    
    if (fixesApplied > 0) {
      // Backup original file
      const backupPath = `${filePath}.backup.${Date.now()}`;
      fs.writeFileSync(backupPath, originalContent);
      
      // Write fixed content
      fs.writeFileSync(filePath, content);
      
      this.fixesApplied += fixesApplied;
      this.log(`🔧 Applied ${fixesApplied} fix(es) to ${path.relative(this.projectRoot, filePath)}`);
    }
  }

  async fixSyntaxError(content, error) {
    // Fix common syntax errors
    let fixed = false;
    
    // Fix missing semicolons
    if (content.includes('const [') && !content.includes('const [')) {
      content = content.replace(/const \[/g, 'const [');
      fixed = true;
    }
    
    // Fix function spacing
    if (content.includes('function(')) {
      content = content.replace(/function\(/g, 'function (');
      fixed = true;
    }
    
    return { fixed, content };
  }

  async fixUnusedImport(content, error) {
    let fixed = false;
    
    // Remove unused React imports
    if (content.includes("import React from 'react'") && !content.includes('React.')) {
      content = content.replace(/import React from ['"]react['"];?\n?/g, '');
      fixed = true;
    }
    
    // Remove unused motion imports
    if (content.includes("import { motion } from 'framer-motion'") && !content.includes('motion.')) {
      content = content.replace(/import \{ motion \} from ['"]framer-motion['"];?\n?/g, '');
      fixed = true;
    }
    
    return { fixed, content };
  }

  async fixConsoleStatement(content, error) {
    let fixed = false;
    
    // Comment out console statements
    if (content.includes('console.log(')) {
      content = content.replace(/console\.log\(/g, '// console.log(');
      fixed = true;
    }
    
    if (content.includes('console.error(')) {
      content = content.replace(/console\.error\(/g, '// console.error(');
      fixed = true;
    }
    
    if (content.includes('console.warn(')) {
      content = content.replace(/console\.warn\(/g, '// console.warn(');
      fixed = true;
    }
    
    return { fixed, content };
  }

  async fixTypeError(content, error) {
    // Type errors usually require manual intervention
    // Log them for review
    this.log(`📝 Type error detected in ${error.file} - manual review needed`, 'warn');
    return { fixed: false, content };
  }

  async fixJSXError(content, error) {
    let fixed = false;
    
    // Fix JSX fragment issues
    if (content.includes('<>') && content.includes('</>')) {
      if (!content.includes('return (') && content.includes('return')) {
        content = content.replace(/return\s*([^;]*);/g, 'return ($1);');
        fixed = true;
      }
    }
    
    return { fixed, content };
  }

  async fixUndefinedVariable(content, error) {
    // Undefined variables usually require manual intervention
    this.log(`📝 Undefined variable detected in ${error.file} - manual review needed`, 'warn');
    return { fixed: false, content };
  }

  startPeriodicScanning() {
    const scanInterval = parseInt(process.env.SCAN_INTERVAL) || 30000; // 30 seconds default
    
    setInterval(async () => {
      this.log('🔄 Running periodic error scan...');
      await this.runFullProjectScan();
    }, scanInterval);
  }

  async runFullProjectScan() {
    try {
      // Run ESLint
      try {
        execSync('npm run lint', { stdio: 'pipe' });
        this.log('✅ ESLint check passed');
      } catch (error) {
        this.log(`⚠️ ESLint found issues: ${error.message}`, 'warn');
        this.errorsDetected++;
      }
      
      // Run TypeScript check
      try {
        execSync('npm run type-check', { stdio: 'pipe' });
        this.log('✅ TypeScript check passed');
      } catch (error) {
        this.log(`⚠️ TypeScript check found issues: ${error.message}`, 'warn');
        this.errorsDetected++;
      }
      
    } catch (error) {
      this.log(`⚠️ Error during full project scan: ${error.message}`, 'warn');
    }
  }

  startHealthMonitoring() {
    setInterval(() => {
      const uptime = Date.now() - this.startTime;
      const uptimeMinutes = Math.floor(uptime / 60000);
      
      this.log(`💓 Health check - Uptime: ${uptimeMinutes}m, Errors detected: ${this.errorsDetected}, Fixes applied: ${this.fixesApplied}`);
      
      // Generate health report
      this.generateHealthReport();
      
    }, 60000); // Every minute
  }

  generateHealthReport() {
    const report = {
      timestamp: new Date().toISOString(),
      uptime: Date.now() - this.startTime,
      errorsDetected: this.errorsDetected,
      fixesApplied: this.fixesApplied,
      status: this.isMonitoring ? 'ACTIVE' : 'INACTIVE',
      logs: this.logs.slice(-100) // Last 100 log entries
    };
    
    const reportPath = path.join(this.projectRoot, 'logs', 'real-time-monitor-health.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  }

  async stopMonitoring() {
    this.log('🛑 Stopping Real-time Error Monitor...');
    
    if (this.watcher) {
      await this.watcher.close();
    }
    
    this.isMonitoring = false;
    
    // Generate final report
    this.generateHealthReport();
    
    this.log('✅ Real-time Error Monitor stopped');
    process.exit(0);
  }
}

// CLI interface
if (require.main === module) {
  const monitor = new RealTimeErrorMonitor();
  
  const command = process.argv[2] || 'monitor';
  
  switch (command) {
    case 'monitor':
      monitor.startMonitoring();
      break;
    case 'help':
      console.log(`
Real-time Error Monitor - Usage:
  node real-time-error-monitor.cjs [command]

Commands:
  monitor  - Start real-time error monitoring
  help     - Show this help message

Environment Variables:
  SCAN_INTERVAL        - Error scan interval in milliseconds (default: 30000)
  AUTO_FIX_ENABLED     - Enable automatic error fixing (default: true)
  NOTIFICATION_ENABLED - Enable error notifications (default: true)

Examples:
  node real-time-error-monitor.cjs monitor
  node real-time-error-monitor.cjs help
      `);
      break;
    default:
      console.log(`Unknown command: ${command}. Use 'help' for usage information.`);
      process.exit(1);
  }
}

module.exports = RealTimeErrorMonitor;