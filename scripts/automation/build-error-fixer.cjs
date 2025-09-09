#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class BuildErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.errorLog = [];
    this.fixedFiles = new Set();
    this.reportPath = path.join(this.projectRoot, 'error-reports', 'build-error-fixer-report.json');
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = { timestamp, type, message };
    this.errorLog.push(logEntry);
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
  }

  async ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
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

  async fixBuildErrors() {
    this.log('Fixing build errors...');
    
    // Fix common build errors
    const buildFixes = [
      {
        pattern: /\.js\.jsx$/g,
        replacement: '.jsx',
        description: 'Fix double .js.jsx extensions'
      },
      {
        pattern: /import\s+.*\s+from\s+['"]([^'"]+)\.js['"]/g,
        replacement: "import $1 from '$1'",
        description: 'Fix .js imports in TypeScript'
      },
      {
        pattern: /require\(['"]([^'"]+)\.js['"]\)/g,
        replacement: "require('$1')",
        description: 'Fix .js requires'
      },
      {
        pattern: /module\.exports\s*=/g,
        replacement: 'export default',
        description: 'Fix CommonJS exports'
      },
      {
        pattern: /const\s+(\w+)\s*=\s*require\(/g,
        replacement: 'import $1 from ',
        description: 'Fix CommonJS imports'
      }
    ];

    const allFiles = glob.sync('**/*.{js,jsx,ts,tsx}', { 
      cwd: this.projectRoot,
      ignore: ['node_modules/**', '.next/**', 'out/**', 'dist/**']
    });

    for (const file of allFiles) {
      const filePath = path.join(this.projectRoot, file);
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        for (const fix of buildFixes) {
          const newContent = content.replace(fix.pattern, fix.replacement);
          if (newContent !== content) {
            content = newContent;
            modified = true;
            this.log(`Applied build fix: ${fix.description} in ${file}`, 'info');
          }
        }

        if (modified) {
          fs.writeFileSync(filePath, content);
          this.fixedFiles.add(filePath);
        }
      } catch (error) {
        this.log(`Error fixing build errors in ${file}: ${error.message}`, 'error');
      }
    }
  }

  async fixNextJsErrors() {
    this.log('Fixing Next.js specific errors...');
    
    // Fix Next.js specific issues
    const nextjsFixes = [
      {
        pattern: /import\s+.*\s+from\s+['"]next\/image['"]/g,
        replacement: "import Image from 'next/image'",
        description: 'Fix Next.js Image import'
      },
      {
        pattern: /import\s+.*\s+from\s+['"]next\/link['"]/g,
        replacement: "import Link from 'next/link'",
        description: 'Fix Next.js Link import'
      },
      {
        pattern: /import\s+.*\s+from\s+['"]next\/head['"]/g,
        replacement: "import Head from 'next/head'",
        description: 'Fix Next.js Head import'
      }
    ];

    const nextjsFiles = glob.sync('**/*.{js,jsx,ts,tsx}', { 
      cwd: this.projectRoot,
      ignore: ['node_modules/**', '.next/**', 'out/**', 'dist/**']
    });

    for (const file of nextjsFiles) {
      const filePath = path.join(this.projectRoot, file);
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        for (const fix of nextjsFixes) {
          const newContent = content.replace(fix.pattern, fix.replacement);
          if (newContent !== content) {
            content = newContent;
            modified = true;
            this.log(`Applied Next.js fix: ${fix.description} in ${file}`, 'info');
          }
        }

        if (modified) {
          fs.writeFileSync(filePath, content);
          this.fixedFiles.add(filePath);
        }
      } catch (error) {
        this.log(`Error fixing Next.js errors in ${file}: ${error.message}`, 'error');
      }
    }
  }

  async fixReactErrors() {
    this.log('Fixing React specific errors...');
    
    // Fix React specific issues
    const reactFixes = [
      {
        pattern: /React\.createElement\(/g,
        replacement: 'React.createElement(',
        description: 'Fix React.createElement usage'
      },
      {
        pattern: /React\.Fragment/g,
        replacement: 'React.Fragment',
        description: 'Fix React.Fragment usage'
      },
      {
        pattern: /<>\s*<\/>/g,
        replacement: '<React.Fragment></React.Fragment>',
        description: 'Fix empty fragments'
      }
    ];

    const reactFiles = glob.sync('**/*.{jsx,tsx}', { 
      cwd: this.projectRoot,
      ignore: ['node_modules/**', '.next/**', 'out/**', 'dist/**']
    });

    for (const file of reactFiles) {
      const filePath = path.join(this.projectRoot, file);
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        for (const fix of reactFixes) {
          const newContent = content.replace(fix.pattern, fix.replacement);
          if (newContent !== content) {
            content = newContent;
            modified = true;
            this.log(`Applied React fix: ${fix.description} in ${file}`, 'info');
          }
        }

        if (modified) {
          fs.writeFileSync(filePath, content);
          this.fixedFiles.add(filePath);
        }
      } catch (error) {
        this.log(`Error fixing React errors in ${file}: ${error.message}`, 'error');
      }
    }
  }

  async runBuildCheck() {
    this.log('Running build check...');
    
    try {
      const buildResult = await this.runCommand('npm run build', { silent: true });
      if (buildResult.success) {
        this.log('Build check passed', 'success');
      } else {
        this.log(`Build check failed: ${buildResult.error}`, 'warning');
      }
    } catch (error) {
      this.log(`Error running build check: ${error.message}`, 'error');
    }
  }

  async generateReport() {
    await this.ensureDirectoryExists(path.dirname(this.reportPath));
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFilesFixed: this.fixedFiles.size,
        totalErrors: this.errorLog.length,
        successCount: this.errorLog.filter(log => log.type === 'success').length,
        errorCount: this.errorLog.filter(log => log.type === 'error').length,
        warningCount: this.errorLog.filter(log => log.type === 'warning').length
      },
      fixedFiles: Array.from(this.fixedFiles),
      errorLog: this.errorLog
    };

    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    this.log(`Report generated: ${this.reportPath}`, 'info');
  }

  async run() {
    this.log('Starting build error fixing process...');
    
    try {
      // Run all build error fixing steps
      await this.fixBuildErrors();
      await this.fixNextJsErrors();
      await this.fixReactErrors();
      await this.runBuildCheck();
      
      // Generate report
      await this.generateReport();
      
      this.log(`Build error fixing completed. Fixed ${this.fixedFiles.size} files.`, 'success');
      
    } catch (error) {
      this.log(`Error in build error fixing: ${error.message}`, 'error');
    }
  }
}

// Run the build error fixer
const buildErrorFixer = new BuildErrorFixer();
buildErrorFixer.run().catch(console.error);