#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const FIX_INTERVAL = parseInt(process.env.FIX_INTERVAL) || 300000; // 5 minutes
const LOG_FILE = path.join(__dirname, '../logs/auto-fixer.log');
const ERROR_REPORT_FILE = path.join(__dirname, '../error-reports/current-errors.json');
const FIX_REPORT_FILE = path.join(__dirname, '../error-reports/auto-fix-report.json');

class AutoFixer {
  constructor() {
    this.fixHistory = [];
    this.lastRun = new Date();
    this.runCount = 0;
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logMessage);
    
    try {
      fs.appendFileSync(LOG_FILE, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async loadCurrentErrors() {
    try {
      if (fs.existsSync(ERROR_REPORT_FILE)) {
        const content = fs.readFileSync(ERROR_REPORT_FILE, 'utf8');
        return JSON.parse(content);
      }
    } catch (error) {
      this.log(`Failed to load error report: ${error.message}`, 'ERROR');
    }
    return null;
  }

  async fixESLintErrors() {
    const fixes = [];
    
    try {
      // Try to auto-fix ESLint errors
      const result = execSync('npx eslint . --fix', {
        cwd: '/workspace',
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      fixes.push({
        type: 'eslint',
        action: 'auto-fix',
        success: true,
        message: 'ESLint auto-fix completed',
        timestamp: new Date().toISOString()
      });
      
      this.log('✅ ESLint auto-fix completed');
    } catch (error) {
      fixes.push({
        type: 'eslint',
        action: 'auto-fix',
        success: false,
        message: error.message,
        timestamp: new Date().toISOString()
      });
      
      this.log(`❌ ESLint auto-fix failed: ${error.message}`, 'WARNING');
    }
    
    return fixes;
  }

  async fixCommonTypeScriptErrors() {
    const fixes = [];
    
    try {
      // Common TypeScript fixes
      const commonFixes = [
        {
          pattern: /export\s*$/gm,
          replacement: 'export default {};',
          description: 'Fix incomplete export statements'
        },
        {
          pattern: /:\s*;/g,
          replacement: ': any;',
          description: 'Fix empty type annotations'
        },
        {
          pattern: /\{\s*\}/g,
          replacement: '{ [key: string]: any }',
          description: 'Fix empty object types'
        },
        {
          pattern: /\[\s*\]/g,
          replacement: '[]',
          description: 'Fix empty array brackets'
        }
      ];

      const srcDir = path.join('/workspace', 'src');
      const files = this.getTypeScriptFiles(srcDir);

      for (const filePath of files) {
        let content = fs.readFileSync(filePath, 'utf8');
        let fileModified = false;

        for (const fix of commonFixes) {
          if (fix.pattern.test(content)) {
            content = content.replace(fix.pattern, fix.replacement);
            fileModified = true;
            
            fixes.push({
              type: 'typescript',
              action: 'pattern-fix',
              file: filePath,
              description: fix.description,
              success: true,
              timestamp: new Date().toISOString()
            });
          }
        }

        if (fileModified) {
          fs.writeFileSync(filePath, content);
          this.log(`✅ Fixed TypeScript issues in: ${filePath}`);
        }
      }

    } catch (error) {
      fixes.push({
        type: 'typescript',
        action: 'pattern-fix',
        success: false,
        message: error.message,
        timestamp: new Date().toISOString()
      });
      
      this.log(`❌ TypeScript auto-fix failed: ${error.message}`, 'ERROR');
    }
    
    return fixes;
  }

  getTypeScriptFiles(dir) {
    const files = [];
    
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          files.push(...this.getTypeScriptFiles(fullPath));
        } else if (stat.isFile() && (item.endsWith('.ts') || item.endsWith('.tsx'))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      this.log(`Error reading directory ${dir}: ${error.message}`, 'WARNING');
    }
    
    return files;
  }

  async fixDependencyIssues() {
    const fixes = [];
    
    try {
      // Try to install missing dependencies
      execSync('npm install --legacy-peer-deps', {
        cwd: '/workspace',
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      fixes.push({
        type: 'dependencies',
        action: 'install',
        success: true,
        message: 'Dependencies installed successfully',
        timestamp: new Date().toISOString()
      });
      
      this.log('✅ Dependencies installation completed');
    } catch (error) {
      fixes.push({
        type: 'dependencies',
        action: 'install',
        success: false,
        message: error.message,
        timestamp: new Date().toISOString()
      });
      
      this.log(`❌ Dependencies installation failed: ${error.message}`, 'WARNING');
    }
    
    return fixes;
  }

  async fixBuildIssues() {
    const fixes = [];
    
    try {
      // Clean and rebuild
      execSync('rm -rf dist node_modules/.vite', {
        cwd: '/workspace',
        stdio: 'pipe'
      });
      
      execSync('npm run build', {
        cwd: '/workspace',
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      fixes.push({
        type: 'build',
        action: 'clean-rebuild',
        success: true,
        message: 'Clean rebuild completed successfully',
        timestamp: new Date().toISOString()
      });
      
      this.log('✅ Clean rebuild completed');
    } catch (error) {
      fixes.push({
        type: 'build',
        action: 'clean-rebuild',
        success: false,
        message: error.message,
        timestamp: new Date().toISOString()
      });
      
      this.log(`❌ Clean rebuild failed: ${error.message}`, 'WARNING');
    }
    
    return fixes;
  }

  async saveFixes(fixes) {
    const report = {
      timestamp: new Date().toISOString(),
      runCount: this.runCount,
      fixes: fixes,
      summary: {
        total: fixes.length,
        successful: fixes.filter(f => f.success).length,
        failed: fixes.filter(f => !f.success).length
      }
    };

    try {
      const dir = path.dirname(FIX_REPORT_FILE);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(FIX_REPORT_FILE, JSON.stringify(report, null, 2));
      this.log(`Auto-fix report saved: ${report.summary.successful}/${report.summary.total} fixes successful`);
    } catch (error) {
      this.log(`Failed to save fix report: ${error.message}`, 'ERROR');
    }
  }

  async runAutoFix() {
    this.runCount++;
    this.lastRun = new Date();
    
    this.log(`🔧 Starting auto-fix run #${this.runCount}`);
    
    const errorReport = await this.loadCurrentErrors();
    if (!errorReport || errorReport.summary.total === 0) {
      this.log('No errors found, skipping auto-fix');
      return;
    }

    this.log(`Found ${errorReport.summary.total} errors to fix`);
    
    const allFixes = [];
    
    // Run different types of fixes
    const fixers = [
      { name: 'ESLint', fn: () => this.fixESLintErrors() },
      { name: 'TypeScript', fn: () => this.fixCommonTypeScriptErrors() },
      { name: 'Dependencies', fn: () => this.fixDependencyIssues() },
      { name: 'Build', fn: () => this.fixBuildIssues() }
    ];

    for (const fixer of fixers) {
      try {
        this.log(`Running ${fixer.name} fixes...`);
        const fixes = await fixer.fn();
        allFixes.push(...fixes);
      } catch (error) {
        this.log(`${fixer.name} fixer failed: ${error.message}`, 'ERROR');
        allFixes.push({
          type: fixer.name.toLowerCase(),
          action: 'auto-fix',
          success: false,
          message: error.message,
          timestamp: new Date().toISOString()
        });
      }
    }

    await this.saveFixes(allFixes);
    
    const successful = allFixes.filter(f => f.success).length;
    this.log(`🏁 Auto-fix completed: ${successful}/${allFixes.length} fixes successful`);
  }

  start() {
    this.log('🚀 Auto-Fixer started');
    this.log(`Fix interval: ${FIX_INTERVAL}ms`);
    
    // Run initial fix after a short delay
    setTimeout(() => {
      this.runAutoFix();
    }, 10000); // 10 seconds delay
    
    // Set up periodic fixes
    setInterval(() => {
      this.runAutoFix();
    }, FIX_INTERVAL);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Auto-Fixer shutting down...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Auto-Fixer terminated...');
  process.exit(0);
});

// Start the auto-fixer
const fixer = new AutoFixer();
fixer.start();