const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const chokidar = require('chokidar');

class EnhancedErrorMonitor {
  constructor() {
    this.watchPaths = [
      './components',
      './pages',
      './lib',
      './utils',
      './hooks',
      './app'
    ];
    this.errorPatterns = [
      /error/i,
      /failed/i,
      /exception/i,
      /undefined/i,
      /null/i,
      /syntax error/i,
      /parsing error/i,
      /type error/i
    ];
    this.fixableErrors = new Map();
    this.logFile = './automation/logs/error-monitor.log';
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async startMonitoring() {
    this.log('INFO', 'Starting enhanced error monitoring...');
    
    // Start file watcher
    this.startFileWatcher();
    
    // Start periodic checks
    this.startPeriodicChecks();
    
    // Start error fixing automation
    this.startErrorFixing();
  }

  startFileWatcher() {
    const watcher = chokidar.watch(this.watchPaths, {
      ignored: /(^|[\/\\])\../, // ignore dotfiles
      persistent: true,
      ignoreInitial: true
    });

    watcher.on('change', (filePath) => {
      this.log('INFO', `File changed: ${filePath}`);
      this.checkFileForErrors(filePath);
    });

    watcher.on('add', (filePath) => {
      this.log('INFO', `File added: ${filePath}`);
      this.checkFileForErrors(filePath);
    });

    this.log('SUCCESS', 'File watcher started');
  }

  async checkFileForErrors(filePath) {
    try {
      if (!filePath.endsWith('.ts') && !filePath.endsWith('.tsx') && 
          !filePath.endsWith('.js') && !filePath.endsWith('.jsx')) {
        return;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      const errors = this.detectErrors(content, filePath);
      
      if (errors.length > 0) {
        this.log('ERROR', `Found ${errors.length} errors in ${filePath}`);
        this.fixableErrors.set(filePath, errors);
        await this.attemptAutoFix(filePath, errors);
      }
    } catch (error) {
      this.log('ERROR', `Error checking file ${filePath}: ${error.message}`);
    }
  }

  detectErrors(content, filePath) {
    const errors = [];
    
    // Check for syntax errors
      errors.push({
        type: 'merge_conflict',
        message: 'Merge conflict markers detected',
      });
    }

    // Check for common syntax errors
    const syntaxPatterns = [
      { pattern: /;\s*;/, message: 'Double semicolon detected' },
      { pattern: /,\s*,/, message: 'Double comma detected' },
      { pattern: /{\s*{/, message: 'Double opening brace detected' },
      { pattern: /}\s*}/, message: 'Double closing brace detected' },
      { pattern: /\(\s*\)\s*{/, message: 'Empty function parameters' },
      { pattern: /import\s+.*\s+from\s+['"]\s*['"]/, message: 'Empty import path' }
    ];

    syntaxPatterns.forEach(({ pattern, message }) => {
      const matches = content.match(pattern);
      if (matches) {
        errors.push({
          type: 'syntax',
          message,
          line: this.findLineNumber(content, matches[0])
        });
      }
    });

    // Check for TypeScript errors
    if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
      const tsErrors = this.detectTypeScriptErrors(content);
      errors.push(...tsErrors);
    }

    return errors;
  }

  detectTypeScriptErrors(content) {
    const errors = [];
    
    // Check for missing type annotations
    const functionPattern = /function\s+\w+\s*\([^)]*\)\s*{/g;
    let match;
    while ((match = functionPattern.exec(content)) !== null) {
      if (!match[0].includes(':')) {
        errors.push({
          type: 'typescript',
          message: 'Function missing return type annotation',
          line: this.findLineNumber(content, match[0])
        });
      }
    }

    // Check for any types
    const anyPattern = /:\s*any\b/g;
    while ((match = anyPattern.exec(content)) !== null) {
      errors.push({
        type: 'typescript',
        message: 'Avoid using "any" type',
        line: this.findLineNumber(content, match[0])
      });
    }

    return errors;
  }

  findLineNumber(content, searchString) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(searchString)) {
        return i + 1;
      }
    }
    return 1;
  }

  async attemptAutoFix(filePath, errors) {
    this.log('INFO', `Attempting to fix ${errors.length} errors in ${filePath}`);
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = false;

      for (const error of errors) {
        switch (error.type) {
          case 'merge_conflict':
            content = this.fixMergeConflicts(content);
            fixed = true;
            break;
          case 'syntax':
            content = this.fixSyntaxErrors(content, error);
            fixed = true;
            break;
          case 'typescript':
            content = this.fixTypeScriptErrors(content, error);
            fixed = true;
            break;
        }
      }

      if (fixed) {
        fs.writeFileSync(filePath, content);
        this.log('SUCCESS', `Fixed errors in ${filePath}`);
        this.fixableErrors.delete(filePath);
      }
    } catch (error) {
      this.log('ERROR', `Failed to fix errors in ${filePath}: ${error.message}`);
    }
  }

  fixMergeConflicts(content) {
    // Remove merge conflict markers and keep the latest version
    return content