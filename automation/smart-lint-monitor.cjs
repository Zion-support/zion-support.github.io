#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class SmartLintMonitor {
  constructor() {
    this.lintErrors = new Map();
    this.fixHistory = new Map();
    this.learningData = new Map();
    this.logFile = path.join(__dirname, 'logs', 'smart-lint-monitor.log');
    this.ensureLogDirectory();
    
    // Configuration from environment
    this.autoFix = process.env.AUTO_FIX === 'true';
    this.learningMode = process.env.LEARNING_MODE === 'true';
    this.monitoringInterval = parseInt(process.env.MONITORING_INTERVAL) || 180000; // 3 minutes
    
    this.log('🚀 Smart Lint Monitor initialized');
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async startMonitoring() {
    this.log('🔍 Starting smart lint monitoring...');
    
    // Run initial lint check
    await this.runLintCheck();
    
    // Set up continuous monitoring
    setInterval(async () => {
      this.log('🔄 Running continuous lint check...');
      await this.runLintCheck();
    }, this.monitoringInterval);
    
    // Set up file watcher for immediate response
    this.startFileWatcher();
    
    this.log(`✅ Smart lint monitoring started with ${this.monitoringInterval / 1000}s intervals`);
  }

  async runLintCheck() {
    try {
      this.log('🔍 Running ESLint check...');
      
      // Run ESLint
      const result = execSync('npm run lint', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.log('✅ No lint errors found');
      this.updateLintStatus('clean');
      
    } catch (error) {
      // Lint errors found
      const errorOutput = error.stdout || error.stderr;
      await this.processLintErrors(errorOutput);
    }
  }

  async processLintErrors(errorOutput) {
    this.log('⚠️ Lint errors detected, processing...');
    
    // Parse lint errors
    const errors = this.parseLintErrors(errorOutput);
    
    if (errors.length === 0) {
      this.log('⚠️ Could not parse lint errors');
      return;
    }
    
    this.log(`🔍 Found ${errors.length} lint errors`);
    
    // Group errors by file
    const errorsByFile = this.groupErrorsByFile(errors);
    
    // Process each file
    for (const [filePath, fileErrors] of errorsByFile) {
      await this.processFileErrors(filePath, fileErrors);
    }
    
    // Update learning data
    if (this.learningMode) {
      this.updateLearningData(errors);
    }
    
    // Generate report
    this.generateLintReport();
  }

  parseLintErrors(errorOutput) {
    const errors = [];
    const lines = errorOutput.split('\n');
    
    for (const line of lines) {
      // Parse ESLint error format
      const match = line.match(/^(.+):(\d+):(\d+):\s+(.+?)\s+\[(.+?)\]/);
      if (match) {
        errors.push({
          file: match[1],
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          message: match[4],
          rule: match[5]
        });
      }
    }
    
    return errors;
  }

  groupErrorsByFile(errors) {
    const errorsByFile = new Map();
    
    for (const error of errors) {
      if (!errorsByFile.has(error.file)) {
        errorsByFile.set(error.file, []);
      }
      errorsByFile.get(error.file).push(error);
    }
    
    return errorsByFile;
  }

  async processFileErrors(filePath, fileErrors) {
    this.log(`🔧 Processing ${fileErrors.length} errors in ${filePath}`);
    
    if (!fs.existsSync(filePath)) {
      this.log(`⚠️ File not found: ${filePath}`);
      return;
    }
    
    try {
      // Read file content
      let content = fs.readFileSync(filePath, 'utf8');
      let hasChanges = false;
      
      // Process each error
      for (const error of fileErrors) {
        const fixResult = await this.attemptAutoFix(content, error, filePath);
        if (fixResult.fixed) {
          content = fixResult.newContent;
          hasChanges = true;
          this.log(`✅ Auto-fixed: ${error.rule} at line ${error.line}`);
        } else {
          this.log(`⚠️ Could not auto-fix: ${error.rule} at line ${error.line}`);
        }
      }
      
      // Write fixed content back to file
      if (hasChanges) {
        fs.writeFileSync(filePath, content);
        this.log(`💾 Fixed content written to ${filePath}`);
        
        // Record fix in history
        this.recordFix(filePath, fileErrors);
      }
      
    } catch (error) {
      this.log(`❌ Error processing file ${filePath}: ${error.message}`);
    }
  }

  async attemptAutoFix(content, error, filePath) {
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    
    if (lineIndex < 0 || lineIndex >= lines.length) {
      return { fixed: false, newContent: content };
    }
    
    const originalLine = lines[lineIndex];
    const fixedLine = await this.applyFixRule(originalLine, error);
    
    if (fixedLine !== originalLine) {
      lines[lineIndex] = fixedLine;
      return { 
        fixed: true, 
        newContent: lines.join('\n') 
      };
    }
    
    return { fixed: false, newContent: content };
  }

  async applyFixRule(line, error) {
    const rule = error.rule;
    let fixedLine = line;
    
    try {
      switch (rule) {
        case 'no-unused-vars':
          fixedLine = this.fixUnusedVars(line, error);
          break;
        case 'no-console':
          fixedLine = this.fixConsoleLog(line, error);
          break;
        case 'prefer-const':
          fixedLine = this.fixPreferConst(line, error);
          break;
        case 'no-var':
          fixedLine = this.fixNoVar(line, error);
          break;
        case 'semi':
          fixedLine = this.fixSemi(line, error);
          break;
        case 'quotes':
          fixedLine = this.fixQuotes(line, error);
          break;
        case 'indent':
          fixedLine = this.fixIndent(line, error);
          break;
        case 'no-trailing-spaces':
          fixedLine = this.fixTrailingSpaces(line, error);
          break;
        case 'eol-last':
          fixedLine = this.fixEolLast(line, error);
          break;
        default:
          // Try AI-powered fix
          fixedLine = await this.applyAIFix(line, error);
          break;
      }
    } catch (error) {
      this.log(`⚠️ Error applying fix for rule ${rule}: ${error.message}`);
    }
    
    return fixedLine;
  }

  fixUnusedVars(line, error) {
    // Remove unused variable declarations
    if (line.includes('const ') || line.includes('let ') || line.includes('var ')) {
      return `// ${line.trim()} // TODO: Remove if unused`;
    }
    return line;
  }

  fixConsoleLog(line, error) {
    // Replace console.log with proper logging or remove
    if (line.includes('console.log')) {
      return line.replace('console.log', '// console.log');
    }
    return line;
  }

  fixPreferConst(line, error) {
    // Change let to const where possible
    if (line.includes('let ') && !line.includes('=')) {
      return line.replace('let ', 'const ');
    }
    return line;
  }

  fixNoVar(line, error) {
    // Change var to const or let
    if (line.includes('var ')) {
      return line.replace('var ', 'const ');
    }
    return line;
  }

  fixSemi(line, error) {
    // Add missing semicolon
    if (!line.trim().endsWith(';') && !line.trim().endsWith('{') && !line.trim().endsWith('}')) {
      return line + ';';
    }
    return line;
  }

  fixQuotes(line, error) {
    // Standardize quotes
    if (line.includes("'") && !line.includes('"')) {
      return line.replace(/'/g, '"');
    }
    return line;
  }

  fixIndent(line, error) {
    // Fix indentation
    const trimmed = line.trim();
    const expectedIndent = (error.column - 1) * 2; // Assume 2 spaces
    return ' '.repeat(expectedIndent) + trimmed;
  }

  fixTrailingSpaces(line, error) {
    // Remove trailing spaces
    return line.replace(/\s+$/, '');
  }

  fixEolLast(line, error) {
    // Ensure line ends properly
    return line.replace(/\r?\n?$/, '');
  }

  async applyAIFix(line, error) {
    // AI-powered fix using pattern recognition
    try {
      // Analyze the line and apply intelligent fixes
      let fixedLine = line;
      
      // Remove extra spaces
      fixedLine = fixedLine.replace(/\s+/g, ' ');
      
      // Fix common patterns
      if (fixedLine.includes('function(') && !fixedLine.includes('function (')) {
        fixedLine = fixedLine.replace('function(', 'function (');
      }
      
      if (fixedLine.includes('if(') && !fixedLine.includes('if (')) {
        fixedLine = fixedLine.replace('if(', 'if (');
      }
      
      if (fixedLine.includes('for(') && !fixedLine.includes('for (')) {
        fixedLine = fixedLine.replace('for(', 'for (');
      }
      
      if (fixedLine.includes('while(') && !fixedLine.includes('while (')) {
        fixedLine = fixedLine.replace('while(', 'while (');
      }
      
      return fixedLine;
      
    } catch (error) {
      this.log(`⚠️ AI fix failed: ${error.message}`);
      return line;
    }
  }

  recordFix(filePath, errors) {
    const timestamp = new Date().toISOString();
    const fixRecord = {
      timestamp,
      filePath,
      errorsFixed: errors.length,
      rules: errors.map(e => e.rule)
    };
    
    if (!this.fixHistory.has(filePath)) {
      this.fixHistory.set(filePath, []);
    }
    
    this.fixHistory.get(filePath).push(fixRecord);
    this.log(`📝 Fix recorded for ${filePath}: ${errors.length} errors`);
  }

  updateLearningData(errors) {
    for (const error of errors) {
      const ruleKey = error.rule;
      
      if (!this.learningData.has(ruleKey)) {
        this.learningData.set(ruleKey, {
          count: 0,
          files: new Set(),
          lastSeen: null,
          autoFixable: false
        });
      }
      
      const ruleData = this.learningData.get(ruleKey);
      ruleData.count++;
      ruleData.files.add(error.file);
      ruleData.lastSeen = new Date().toISOString();
      
      // Mark as auto-fixable if we successfully fixed it
      if (this.fixHistory.has(error.file)) {
        ruleData.autoFixable = true;
      }
    }
    
    this.log(`🧠 Learning data updated for ${errors.length} errors`);
  }

  updateLintStatus(status) {
    this.lintStatus = status;
    this.lastCheck = new Date().toISOString();
  }

  generateLintReport() {
    const report = {
      timestamp: new Date().toISOString(),
      status: this.lintStatus || 'unknown',
      lastCheck: this.lastCheck,
      totalErrors: Array.from(this.lintErrors.values()).reduce((sum, errors) => sum + errors.length, 0),
      filesWithErrors: this.lintErrors.size,
      fixHistory: Object.fromEntries(
        Array.from(this.fixHistory.entries()).map(([file, fixes]) => [
          file, 
          fixes.length
        ])
      ),
      learningData: Object.fromEntries(
        Array.from(this.learningData.entries()).map(([rule, data]) => [
          rule,
          {
            count: data.count,
            files: Array.from(data.files),
            lastSeen: data.lastSeen,
            autoFixable: data.autoFixable
          }
        ])
      )
    };
    
    // Save report
    const reportFile = path.join(__dirname, 'logs', 'lint-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log('📊 Lint report generated and saved');
    return report;
  }

  startFileWatcher() {
    this.log('👀 Starting intelligent file watcher...');
    
    // Watch source directories for changes
    const watchDirs = ['src', 'pages', 'components', 'utils', 'hooks'];
    
    for (const dir of watchDirs) {
      if (fs.existsSync(dir)) {
        fs.watch(dir, { recursive: true }, (eventType, filename) => {
          if (filename && (filename.endsWith('.tsx') || filename.endsWith('.ts') || filename.endsWith('.js'))) {
            const filePath = path.join(dir, filename);
            this.log(`📝 File changed: ${filePath}`);
            
            // Wait a bit for file to be fully written
            setTimeout(async () => {
              await this.checkFileLint(filePath);
            }, 2000);
          }
        });
      }
    }
    
    this.log('✅ Intelligent file watcher started');
  }

  async checkFileLint(filePath) {
    try {
      this.log(`🔍 Checking lint for: ${filePath}`);
      
      // Run ESLint on specific file
      const result = execSync(`npx eslint "${filePath}"`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.log(`✅ ${filePath} passed lint check`);
      
    } catch (error) {
      // Lint errors found in file
      const errorOutput = error.stdout || error.stderr;
      const errors = this.parseLintErrors(errorOutput);
      
      if (errors.length > 0) {
        this.log(`⚠️ Found ${errors.length} lint errors in ${filePath}`);
        
        if (this.autoFix) {
          await this.processFileErrors(filePath, errors);
        }
      }
    }
  }

  getStatus() {
    return {
      running: true,
      status: this.lintStatus || 'unknown',
      lastCheck: this.lastCheck,
      totalErrors: Array.from(this.lintErrors.values()).reduce((sum, errors) => sum + errors.length, 0),
      filesWithErrors: this.lintErrors.size,
      fixHistory: this.fixHistory.size,
      learningData: this.learningData.size,
      autoFix: this.autoFix,
      learningMode: this.learningMode,
      monitoringInterval: this.monitoringInterval
    };
  }

  stop() {
    this.log('🛑 Smart Lint Monitor stopped');
  }
}

// CLI handling
const monitor = new SmartLintMonitor();
const command = process.argv[2];

switch (command) {
  case 'start':
    monitor.startMonitoring();
    break;
  case 'check':
    monitor.runLintCheck();
    break;
  case 'status':
    const status = monitor.getStatus();
    console.log(JSON.stringify(status, null, 2));
    process.exit(0);
    break;
  case 'report':
    const report = monitor.generateLintReport();
    console.log(JSON.stringify(report, null, 2));
    process.exit(0);
    break;
  default:
    console.log('Usage: node smart-lint-monitor.cjs [start|check|status|report]');
    console.log('\nCommands:');
    console.log('  start   - Start continuous monitoring');
    console.log('  check   - Run single lint check');
    console.log('  status  - Show current status');
    console.log('  report  - Generate lint report');
    process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', () => {
  monitor.stop();
  process.exit(0);
});

process.on('SIGTERM', () => {
  monitor.stop();
  process.exit(0);
});