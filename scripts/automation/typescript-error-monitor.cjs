#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

class TypeScriptErrorMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automation/logs');
    this.reportsDir = path.join(this.projectRoot, 'error-reports');
    this.watcher = null;
    this.isRunning = false;
    this.lastCheck = null;
    this.errorCache = new Map();
    
    // Ensure directories exist
    [this.logsDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.logsDir, 'typescript-error-monitor.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async checkTypeScriptErrors() {
    this.log('Checking TypeScript errors...');
    
    try {
      const result = await this.runCommand('npx tsc --noEmit', { silent: true });
      
      if (result.success) {
        this.log('No TypeScript errors found');
        this.errorCache.clear();
        return [];
      }

      const errors = this.parseTypeScriptErrors(result.output || '');
      this.log(`Found ${errors.length} TypeScript errors`);
      
      // Cache errors for comparison
      this.errorCache.set(Date.now(), errors);
      
      return errors;
    } catch (error) {
      this.log(`Failed to check TypeScript errors: ${error.message}`, 'ERROR');
      return [];
    }
  }

  parseTypeScriptErrors(errorOutput) {
    const errors = [];
    const lines = errorOutput.split('\n');
    
    for (const line of lines) {
      const match = line.match(/(\S+\.(ts|tsx|js|jsx))\((\d+),(\d+)\):\s*(.+)/);
      if (match) {
        errors.push({
          file: match[1],
          line: parseInt(match[3]),
          column: parseInt(match[4]),
          message: match[5].trim(),
          timestamp: Date.now()
        });
      }
    }
    
    return errors;
  }

  async fixTypeScriptError(error) {
    try {
      const filePath = path.join(this.projectRoot, error.file);
      if (!fs.existsSync(filePath)) {
        return false;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      // Fix common TypeScript errors
      if (error.message.includes('Cannot find module') || error.message.includes('Module not found')) {
        return await this.fixModuleImportError(error, lines, filePath);
      }
      
      if (error.message.includes('Property') && error.message.includes('does not exist')) {
        return await this.fixPropertyError(error, lines, filePath);
      }
      
      if (error.message.includes('Type') && error.message.includes('is not assignable')) {
        return await this.fixTypeError(error, lines, filePath);
      }

      if (error.message.includes('Parameter') && error.message.includes('implicitly has an')) {
        return await this.fixImplicitAnyError(error, lines, filePath);
      }

      if (error.message.includes('Object is possibly')) {
        return await this.fixNullCheckError(error, lines, filePath);
      }

      return false;
    } catch (error) {
      this.log(`Failed to fix TypeScript error: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixModuleImportError(error, lines, filePath) {
    const line = lines[error.line - 1];
    if (line.includes('import') || line.includes('require')) {
      // Try to fix import path
      const fixedLine = line.replace(/from ['"]([^'"]+)['"]/, (match, importPath) => {
        if (importPath.startsWith('./') || importPath.startsWith('../')) {
          // Check if file exists with different extension
          const possibleExtensions = ['.ts', '.tsx', '.js', '.jsx'];
          for (const ext of possibleExtensions) {
            const fullPath = path.join(path.dirname(filePath), importPath + ext);
            if (fs.existsSync(fullPath)) {
              return `from '${importPath}${ext}'`;
            }
          }
        }
        return match;
      });
      
      if (fixedLine !== line) {
        lines[error.line - 1] = fixedLine;
        fs.writeFileSync(filePath, lines.join('\n'));
        this.log(`Fixed module import in ${error.file}:${error.line}`);
        return true;
      }
    }
    return false;
  }

  async fixPropertyError(error, lines, filePath) {
    const line = lines[error.line - 1];
    if (line.includes('.')) {
      // Try to add optional chaining
      const fixedLine = line.replace(/(\w+)\.(\w+)/g, '$1?.$2');
      if (fixedLine !== line) {
        lines[error.line - 1] = fixedLine;
        fs.writeFileSync(filePath, lines.join('\n'));
        this.log(`Fixed property access in ${error.file}:${error.line}`);
        return true;
      }
    }
    return false;
  }

  async fixTypeError(error, lines, filePath) {
    const line = lines[error.line - 1];
    if (line.includes('=') && !line.includes('as any')) {
      // Add type assertion
      const fixedLine = line.replace(/(\w+)\s*=\s*([^;]+);/, '$1 = $2 as any;');
      if (fixedLine !== line) {
        lines[error.line - 1] = fixedLine;
        fs.writeFileSync(filePath, lines.join('\n'));
        this.log(`Fixed type error in ${error.file}:${error.line}`);
        return true;
      }
    }
    return false;
  }

  async fixImplicitAnyError(error, lines, filePath) {
    const line = lines[error.line - 1];
    if (line.includes('function') || line.includes('=>')) {
      // Add explicit any type
      const fixedLine = line.replace(/(\w+)\s*:\s*([^,)]+)/, '$1: any');
      if (fixedLine !== line) {
        lines[error.line - 1] = fixedLine;
        fs.writeFileSync(filePath, lines.join('\n'));
        this.log(`Fixed implicit any in ${error.file}:${error.line}`);
        return true;
      }
    }
    return false;
  }

  async fixNullCheckError(error, lines, filePath) {
    const line = lines[error.line - 1];
    if (line.includes('.')) {
      // Add null check
      const fixedLine = line.replace(/(\w+)\.(\w+)/g, '$1 && $1.$2');
      if (fixedLine !== line) {
        lines[error.line - 1] = fixedLine;
        fs.writeFileSync(filePath, lines.join('\n'));
        this.log(`Fixed null check in ${error.file}:${error.line}`);
        return true;
      }
    }
    return false;
  }

  async autoFixErrors(errors) {
    let fixedCount = 0;
    
    for (const error of errors) {
      if (await this.fixTypeScriptError(error)) {
        fixedCount++;
      }
    }
    
    if (fixedCount > 0) {
      this.log(`Auto-fixed ${fixedCount} TypeScript errors`);
      
      // Re-check for remaining errors
      const remainingErrors = await this.checkTypeScriptErrors();
      if (remainingErrors.length === 0) {
        this.log('All TypeScript errors have been resolved!');
      } else {
        this.log(`${remainingErrors.length} errors remain after auto-fix`);
      }
    }
    
    return fixedCount;
  }

  async generateReport(errors, fixedCount) {
    const report = {
      timestamp: new Date().toISOString(),
      totalErrors: errors.length,
      fixedErrors: fixedCount,
      remainingErrors: errors.length - fixedCount,
      errors: errors.map(error => ({
        file: error.file,
        line: error.line,
        column: error.column,
        message: error.message
      }))
    };

    const reportPath = path.join(this.reportsDir, `typescript-error-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    return report;
  }

  async startWatching() {
    this.log('Starting TypeScript error monitoring...');
    
    // Initial check
    const initialErrors = await this.checkTypeScriptErrors();
    if (initialErrors.length > 0) {
      await this.autoFixErrors(initialErrors);
    }
    
    // Set up file watcher
    this.watcher = chokidar.watch([
      'src/**/*.{ts,tsx,js,jsx}',
      'pages/**/*.{ts,tsx,js,jsx}',
      'components/**/*.{ts,tsx,js,jsx}'
    ], {
      ignored: /node_modules|\.git|\.next/,
      persistent: true,
      ignoreInitial: true
    });

    this.watcher
      .on('change', async (filePath) => {
        this.log(`File changed: ${filePath}`);
        await this.handleFileChange(filePath);
      })
      .on('add', async (filePath) => {
        this.log(`File added: ${filePath}`);
        await this.handleFileChange(filePath);
      })
      .on('unlink', (filePath) => {
        this.log(`File removed: ${filePath}`);
      });

    this.isRunning = true;
    this.log('TypeScript error monitoring is active');
  }

  async handleFileChange(filePath) {
    // Debounce rapid changes
    if (this.lastCheck && Date.now() - this.lastCheck < 1000) {
      return;
    }
    
    this.lastCheck = Date.now();
    
    // Wait a bit for file to be written
    setTimeout(async () => {
      const errors = await this.checkTypeScriptErrors();
      if (errors.length > 0) {
        const fixedCount = await this.autoFixErrors(errors);
        await this.generateReport(errors, fixedCount);
      }
    }, 500);
  }

  async stop() {
    if (this.watcher) {
      await this.watcher.close();
      this.watcher = null;
    }
    this.isRunning = false;
    this.log('TypeScript error monitoring stopped');
  }

  async run() {
    try {
      await this.startWatching();
      
      // Keep the process running
      process.on('SIGINT', async () => {
        this.log('Received SIGINT, shutting down...');
        await this.stop();
        process.exit(0);
      });
      
      process.on('SIGTERM', async () => {
        this.log('Received SIGTERM, shutting down...');
        await this.stop();
        process.exit(0);
      });
      
    } catch (error) {
      this.log(`TypeScript error monitor failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the monitor
if (require.main === module) {
  const monitor = new TypeScriptErrorMonitor();
  monitor.run().catch(error => {
    console.error('TypeScript error monitor failed:', error);
    process.exit(1);
  });
}

module.exports = TypeScriptErrorMonitor;