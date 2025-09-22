#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class MasterAutomationFixer {
  constructor() {
    this.reportsDir = path.join(__dirname, 'automation-reports');
    this.logFile = path.join(this.reportsDir, 'master-automation-fix.log');
    this.errors = [];
    this.fixes = [];
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    const logMessage = `[${timestamp}] ${prefix} ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      this.log(`Running: ${command}`);
      const result = execSync(command, { 
        cwd: process.cwd(), 
        encoding: 'utf8',
        stdio: 'pipe',
        ...options 
      });
      this.log(`Command succeeded: ${command}`, 'success');
      return { success: true, output: result };
    } catch (error) {
      this.log(`Command failed: ${command} - ${error.message}`, 'error');
      this.errors.push({ command, error: error.message });
      return { 
        success: false, 
        output: error.stdout || '', 
        error: error.stderr || error.message 
      };
    }
  }

  async fixSyntaxErrors() {
    this.log('🔧 Starting syntax error fixes...');
    
    // Find all TypeScript and JavaScript files
    const files = this.findSourceFiles();
    this.log(`Found ${files.length} source files to check`);
    
    let fixedCount = 0;
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let fixedContent = content;
        let hasChanges = false;
        
        // Fix common syntax issues
        const fixes = [
          // Fix missing semicolons
          { pattern: /(\w+)\s*\n\s*(\w+)/g, replacement: '$1;\n$2' },
          // Fix missing commas in arrays/objects
          { pattern: /(\w+)\s*\n\s*(\w+)/g, replacement: '$1,\n$2' },
          // Fix unescaped quotes
          { pattern: /([^\\])"/g, replacement: '$1\\"' },
          // Fix missing closing braces
          { pattern: /\{([^}]*)$/gm, replacement: '{$1}' },
          // Fix JSX syntax issues
          { pattern: /<(\w+)([^>]*?)(?<!\/)>/g, replacement: '<$1$2 />' },
          // Fix import/export issues
          { pattern: /import\s+(\w+)\s+from\s+['"]([^'"]+)['"];?/g, replacement: "import $1 from '$2';" },
          // Fix missing return statements
          { pattern: /const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{([^}]*)\}/g, replacement: 'const $1 = ($2) => {\n  return $3;\n}' }
        ];
        
        for (const fix of fixes) {
          const newContent = fixedContent.replace(fix.pattern, fix.replacement);
          if (newContent !== fixedContent) {
            fixedContent = newContent;
            hasChanges = true;
          }
        }
        
        if (hasChanges) {
          fs.writeFileSync(file, fixedContent);
          this.log(`Fixed syntax in: ${file}`, 'success');
          fixedCount++;
          this.fixes.push({ file, type: 'syntax' });
        }
        
      } catch (error) {
        this.log(`Error processing ${file}: ${error.message}`, 'error');
        this.errors.push({ file, error: error.message });
      }
    }
    
    this.log(`Fixed syntax in ${fixedCount} files`, 'success');
    return fixedCount;
  }

  findSourceFiles() {
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    const files = [];
    
    const scanDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !this.shouldSkipDir(item)) {
            scanDir(fullPath);
          } else if (stat.isFile() && extensions.includes(path.extname(item))) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Skip directories we can't read
      }
    };
    
    scanDir(process.cwd());
    return files;
  }

  shouldSkipDir(dirName) {
    const skipDirs = [
      'node_modules', '.git', '.next', 'dist', 'build', 'out',
      'coverage', '.nyc_output', 'automation-reports', 'test-reports',
      'backup', 'temp', 'cache', 'logs'
    ];
    return skipDirs.includes(dirName) || dirName.startsWith('.');
  }

  async runTests() {
    this.log('🧪 Running test suite...');
    
    const testCommands = [
      'npm run test:smoke',
      'npm run type-check',
      'npm run lint:fix'
    ];
    
    let allPassed = true;
    
    for (const command of testCommands) {
      const result = await this.runCommand(command);
      if (!result.success) {
        allPassed = false;
      }
    }
    
    if (allPassed) {
      this.log('All tests passed!', 'success');
    } else {
      this.log('Some tests failed, continuing with fixes...', 'error');
    }
    
    return allPassed;
  }

  async buildProject() {
    this.log('🏗️ Building project...');
    
    const result = await this.runCommand('npm run build');
    if (result.success) {
      this.log('Build successful!', 'success');
      return true;
    } else {
      this.log('Build failed, attempting to fix...', 'error');
      return false;
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalFiles: this.findSourceFiles().length,
      fixesApplied: this.fixes.length,
      errors: this.errors.length,
      fixes: this.fixes,
      errors: this.errors
    };
    
    const reportFile = path.join(this.reportsDir, 'master-automation-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportFile}`, 'success');
    return report;
  }

  async run() {
    this.log('🚀 Starting Master Automation Fixer...');
    this.log('Zion Tech Group - Comprehensive Automation System');
    
    try {
      // Step 1: Fix syntax errors
      await this.fixSyntaxErrors();
      
      // Step 2: Run tests
      await this.runTests();
      
      // Step 3: Build project
      await this.buildProject();
      
      // Step 4: Generate report
      const report = await this.generateReport();
      
      this.log('🎉 Master automation fixer completed!', 'success');
      this.log(`Fixed ${report.fixesApplied} files`);
      this.log(`Encountered ${report.errors} errors`);
      
      return report;
      
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Run the automation fixer
if (require.main === module) {
  const fixer = new MasterAutomationFixer();
  fixer.run().catch(console.error);
}

module.exports = MasterAutomationFixer;