#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class ErrorFixerAutomation {
  constructor() {
    this.workspacePath = process.cwd();
    this.logFile = path.join(this.workspacePath, 'automation/logs/error-fixer.log');
    this.ensureLogDirectory();
    this.errors = [];
    this.fixes = [];
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runLinting() {
    this.log('Running ESLint to identify errors...');
    try {
      const result = execSync('npm run lint 2>&1', { 
        cwd: this.workspacePath,
        encoding: 'utf8',
        maxBuffer: 1024 * 1024 * 10 // 10MB buffer
      });
      this.log('Linting completed successfully');
      return { success: true, output: result };
    } catch (error) {
      this.log(`Linting failed: ${error.message}`, 'ERROR');
      return { success: false, output: error.stdout || error.message };
    }
  }

  async runTypeCheck() {
    this.log('Running TypeScript type checking...');
    try {
      const result = execSync('npm run type-check 2>&1', { 
        cwd: this.workspacePath,
        encoding: 'utf8',
        maxBuffer: 1024 * 1024 * 10
      });
      this.log('Type checking completed successfully');
      return { success: true, output: result };
    } catch (error) {
      this.log(`Type checking failed: ${error.message}`, 'ERROR');
      return { success: false, output: error.stdout || error.message };
    }
  }

  async runBuild() {
    this.log('Running build process...');
    try {
      const result = execSync('npm run build 2>&1', { 
        cwd: this.workspacePath,
        encoding: 'utf8',
        maxBuffer: 1024 * 1024 * 20
      });
      this.log('Build completed successfully');
      return { success: true, output: result };
    } catch (error) {
      this.log(`Build failed: ${error.message}`, 'ERROR');
      return { success: false, output: error.stdout || error.message };
    }
  }

  parseLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error') && line.includes('.tsx') || line.includes('.ts') || line.includes('.js')) {
        const match = line.match(/^(.+?):(\d+):(\d+)\s+(.+)$/);
        if (match) {
          errors.push({
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4],
            type: 'lint'
          });
        }
      }
    }
    
    return errors;
  }

  async fixCommonErrors() {
    this.log('Starting automatic error fixes...');
    
    // Fix 1: Remove console.log statements
    await this.removeConsoleLogs();
    
    // Fix 2: Fix unescaped entities
    await this.fixUnescapedEntities();
    
    // Fix 3: Fix unused variables
    await this.fixUnusedVariables();
    
    // Fix 4: Fix merge conflict markers
    await this.fixMergeConflicts();
    
    // Fix 5: Fix syntax errors
    await this.fixSyntaxErrors();
  }

  async removeConsoleLogs() {
    this.log('Removing console.log statements...');
    try {
      const scriptPath = path.join(this.workspacePath, 'scripts/remove-console-logs.cjs');
      if (fs.existsSync(scriptPath)) {
        execSync(`node ${scriptPath}`, { cwd: this.workspacePath });
        this.log('Console logs removed successfully');
      }
    } catch (error) {
      this.log(`Failed to remove console logs: ${error.message}`, 'WARN');
    }
  }

  async fixUnescapedEntities() {
    this.log('Fixing unescaped entities...');
    const files = this.findSourceFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Fix apostrophes
        if (content.includes("'")) {
          content = content.replace(/'/g, '&apos;');
          modified = true;
        }
        
        // Fix quotes
        if (content.includes('"')) {
          content = content.replace(/"/g, '&quot;');
          modified = true;
        }
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.log(`Fixed unescaped entities in ${file}`);
        }
      } catch (error) {
        this.log(`Failed to fix unescaped entities in ${file}: ${error.message}`, 'WARN');
      }
    }
  }

  async fixUnusedVariables() {
    this.log('Fixing unused variables...');
    const files = this.findSourceFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Remove unused imports
        const lines = content.split('\n');
        const newLines = lines.filter(line => {
          if (line.includes('import') && line.includes('// unused')) {
            return false;
          }
          return true;
        });
        
        if (newLines.length !== lines.length) {
          content = newLines.join('\n');
          modified = true;
        }
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.log(`Fixed unused variables in ${file}`);
        }
      } catch (error) {
        this.log(`Failed to fix unused variables in ${file}: ${error.message}`, 'WARN');
      }
    }
  }

  async fixMergeConflicts() {
    this.log('Fixing merge conflicts...');
    const files = this.findSourceFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Remove merge conflict markers
        if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
          content = content
            .replace(/<<<<<<<.*?\n/g, '')
            .replace(/=======.*?\n/g, '')
            .replace(/>>>>>>>.*?\n/g, '');
          modified = true;
        }
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.log(`Fixed merge conflicts in ${file}`);
        }
      } catch (error) {
        this.log(`Failed to fix merge conflicts in ${file}: ${error.message}`, 'WARN');
      }
    }
  }

  async fixSyntaxErrors() {
    this.log('Fixing common syntax errors...');
    const files = this.findSourceFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Fix missing semicolons
        if (content.match(/[^;]\n\s*[a-zA-Z]/)) {
          content = content.replace(/([^;])\n\s*([a-zA-Z])/g, '$1;\n$2');
          modified = true;
        }
        
        // Fix missing commas in objects
        if (content.match(/}\s*{/)) {
          content = content.replace(/}\s*{/g, '}, {');
          modified = true;
        }
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.log(`Fixed syntax errors in ${file}`);
        }
      } catch (error) {
        this.log(`Failed to fix syntax errors in ${file}: ${error.message}`, 'WARN');
      }
    }
  }

  findSourceFiles() {
    const sourceFiles = [];
    const directories = ['pages', 'components', 'lib', 'utils', 'scripts'];
    
    for (const dir of directories) {
      const dirPath = path.join(this.workspacePath, dir);
      if (fs.existsSync(dirPath)) {
        this.findFilesRecursively(dirPath, sourceFiles);
      }
    }
    
    return sourceFiles.filter(file => 
      file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')
    );
  }

  findFilesRecursively(dir, files) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip disabled/corrupted directories
        if (!item.includes('disabled') && !item.includes('corrupted') && !item.includes('backup')) {
          this.findFilesRecursively(fullPath, files);
        }
      } else if (stat.isFile()) {
        files.push(fullPath);
      }
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      errorsFound: this.errors.length,
      fixesApplied: this.fixes.length,
      status: this.errors.length === 0 ? 'SUCCESS' : 'PARTIAL',
      details: {
        errors: this.errors,
        fixes: this.fixes
      }
    };
    
    const reportPath = path.join(this.workspacePath, 'automation/logs/error-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Error fix report generated: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('Starting Error Fixer Automation...');
    
    try {
      // Step 1: Run initial checks
      const lintResult = await this.runLinting();
      const typeResult = await this.runTypeCheck();
      const buildResult = await this.runBuild();
      
      // Step 2: Parse errors
      if (!lintResult.success) {
        this.errors = this.parseLintErrors(lintResult.output);
      }
      
      // Step 3: Apply fixes
      if (this.errors.length > 0) {
        await this.fixCommonErrors();
        
        // Step 4: Re-run checks
        this.log('Re-running checks after fixes...');
        const lintResult2 = await this.runLinting();
        const typeResult2 = await this.runTypeCheck();
        const buildResult2 = await this.runBuild();
        
        this.log(`Final status - Lint: ${lintResult2.success ? 'PASS' : 'FAIL'}, Type: ${typeResult2.success ? 'PASS' : 'FAIL'}, Build: ${buildResult2.success ? 'PASS' : 'FAIL'}`);
      }
      
      // Step 5: Generate report
      const report = await this.generateReport();
      
      this.log('Error Fixer Automation completed');
      return report;
      
    } catch (error) {
      this.log(`Error Fixer Automation failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const automation = new ErrorFixerAutomation();
  automation.run().catch(console.error);
}

module.exports = ErrorFixerAutomation;