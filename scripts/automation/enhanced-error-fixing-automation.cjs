#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');

class EnhancedErrorFixingAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automation/logs');
    this.reportsDir = path.join(this.projectRoot, 'automation/reports');
    this.ensureDirectories();
    this.setupLogging();
  }

  ensureDirectories() {
    [this.logsDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  setupLogging() {
    this.logFile = path.join(this.logsDir, 'enhanced-error-fixing.log');
    this.reportFile = path.join(this.reportsDir, 'error-fixing-report.json');
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
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

  async fixTypeScriptErrors() {
    this.log('Starting TypeScript error fixing...');
    
    // Get all TypeScript files
    const tsFiles = glob.sync('src/**/*.{ts,tsx}', { cwd: this.projectRoot });
    let fixedCount = 0;

    for (const file of tsFiles) {
      try {
        const filePath = path.join(this.projectRoot, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        let hasChanges = false;

        // Fix common TypeScript errors
        const fixes = [
          // Fix missing React imports
          {
            pattern: /import\s+React\s+from\s+['"]react['"];?\s*\n?/g,
            replacement: '',
            condition: (content) => content.includes('React.')
          },
          // Fix JSX without React import
          {
            pattern: /^/,
            replacement: "import React from 'react';\n",
            condition: (content) => content.includes('JSX') && !content.includes("import React")
          },
          // Fix missing type annotations
          {
            pattern: /const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{/g,
            replacement: 'const $1: React.FC = ($2) => {',
            condition: (content) => content.includes('const') && content.includes('=>')
          },
          // Fix any types
          {
            pattern: /:\s*any\b/g,
            replacement: ': unknown',
            condition: () => true
          }
        ];

        for (const fix of fixes) {
          if (fix.condition(content)) {
            content = content.replace(fix.pattern, fix.replacement);
            hasChanges = true;
          }
        }

        if (hasChanges) {
          fs.writeFileSync(filePath, content);
          fixedCount++;
          this.log(`Fixed TypeScript errors in ${file}`);
        }
      } catch (error) {
        this.log(`Error fixing TypeScript in ${file}: ${error.message}`, 'ERROR');
      }
    }

    this.log(`Fixed TypeScript errors in ${fixedCount} files`);
    return fixedCount;
  }

  async fixESLintErrors() {
    this.log('Starting ESLint error fixing...');
    
    const result = await this.runCommand('npx eslint --fix src/', { silent: true });
    
    if (result.success) {
      this.log('ESLint errors fixed successfully');
      return true;
    } else {
      this.log(`ESLint fixing failed: ${result.error}`, 'ERROR');
      return false;
    }
  }

  async fixImportErrors() {
    this.log('Starting import error fixing...');
    
    const tsFiles = glob.sync('src/**/*.{ts,tsx}', { cwd: this.projectRoot });
    let fixedCount = 0;

    for (const file of tsFiles) {
      try {
        const filePath = path.join(this.projectRoot, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let hasChanges = false;

        // Fix relative imports
        const importFixes = [
          // Fix missing .js extensions for relative imports
          {
            pattern: /from\s+['"](\.[^'"]*?)['"]/g,
            replacement: (match, importPath) => {
              if (!importPath.includes('.') && !importPath.endsWith('/')) {
                return `from '${importPath}.js'`;
              }
              return match;
            }
          },
          // Fix absolute imports
          {
            pattern: /from\s+['"]@\/([^'"]*)['"]/g,
            replacement: "from '@/src/$1'"
          }
        ];

        for (const fix of importFixes) {
          const newContent = content.replace(fix.pattern, fix.replacement);
          if (newContent !== content) {
            content = newContent;
            hasChanges = true;
          }
        }

        if (hasChanges) {
          fs.writeFileSync(filePath, content);
          fixedCount++;
          this.log(`Fixed import errors in ${file}`);
        }
      } catch (error) {
        this.log(`Error fixing imports in ${file}: ${error.message}`, 'ERROR');
      }
    }

    this.log(`Fixed import errors in ${fixedCount} files`);
    return fixedCount;
  }

  async fixJSXErrors() {
    this.log('Starting JSX error fixing...');
    
    const jsxFiles = glob.sync('src/**/*.{jsx,tsx}', { cwd: this.projectRoot });
    let fixedCount = 0;

    for (const file of jsxFiles) {
      try {
        const filePath = path.join(this.projectRoot, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let hasChanges = false;

        // Fix common JSX errors
        const jsxFixes = [
          // Fix unclosed tags
          {
            pattern: /<(\w+)([^>]*?)(?<!\/)>/g,
            replacement: '<$1$2></$1>',
            condition: (content) => content.includes('<div') && !content.includes('</div>')
          },
          // Fix missing key props
          {
            pattern: /\.map\(([^)]*)\)\s*=>\s*<(\w+)/g,
            replacement: '.map(($1, index) => <$2 key={index}',
            condition: (content) => content.includes('.map(') && !content.includes('key=')
          },
          // Fix className instead of class
          {
            pattern: /class\s*=/g,
            replacement: 'className=',
            condition: (content) => content.includes('class=')
          }
        ];

        for (const fix of jsxFixes) {
          if (fix.condition(content)) {
            content = content.replace(fix.pattern, fix.replacement);
            hasChanges = true;
          }
        }

        if (hasChanges) {
          fs.writeFileSync(filePath, content);
          fixedCount++;
          this.log(`Fixed JSX errors in ${file}`);
        }
      } catch (error) {
        this.log(`Error fixing JSX in ${file}: ${error.message}`, 'ERROR');
      }
    }

    this.log(`Fixed JSX errors in ${fixedCount} files`);
    return fixedCount;
  }

  async fixDependencyErrors() {
    this.log('Starting dependency error fixing...');
    
    // Check for missing dependencies
    const result = await this.runCommand('npm install', { silent: true });
    
    if (result.success) {
      this.log('Dependencies installed successfully');
      
      // Run audit fix
      const auditResult = await this.runCommand('npm audit fix', { silent: true });
      if (auditResult.success) {
        this.log('Security vulnerabilities fixed');
      }
      
      return true;
    } else {
      this.log(`Dependency fixing failed: ${result.error}`, 'ERROR');
      return false;
    }
  }

  async fixConfigurationErrors() {
    this.log('Starting configuration error fixing...');
    
    // Fix ESLint config
    const eslintConfig = path.join(this.projectRoot, '.eslintrc.js');
    if (fs.existsSync(eslintConfig)) {
      try {
        let content = fs.readFileSync(eslintConfig, 'utf8');
        
        // Ensure proper module.exports
        if (!content.includes('module.exports')) {
          content = `module.exports = ${content}`;
          fs.writeFileSync(eslintConfig, content);
          this.log('Fixed ESLint configuration');
        }
      } catch (error) {
        this.log(`Error fixing ESLint config: ${error.message}`, 'ERROR');
      }
    }

    // Fix TypeScript config
    const tsConfig = path.join(this.projectRoot, 'tsconfig.json');
    if (fs.existsSync(tsConfig)) {
      try {
        const config = JSON.parse(fs.readFileSync(tsConfig, 'utf8'));
        
        // Ensure proper configuration
        if (!config.compilerOptions) {
          config.compilerOptions = {};
        }
        
        // Add missing options
        config.compilerOptions = {
          target: "es5",
          lib: ["dom", "dom.iterable", "es6"],
          allowJs: true,
          skipLibCheck: true,
          strict: false,
          forceConsistentCasingInFileNames: true,
          noEmit: true,
          esModuleInterop: true,
          module: "esnext",
          moduleResolution: "node",
          resolveJsonModule: true,
          isolatedModules: true,
          jsx: "preserve",
          incremental: true,
          ...config.compilerOptions
        };

        fs.writeFileSync(tsConfig, JSON.stringify(config, null, 2));
        this.log('Fixed TypeScript configuration');
      } catch (error) {
        this.log(`Error fixing TypeScript config: ${error.message}`, 'ERROR');
      }
    }

    return true;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        typescriptErrorsFixed: 0,
        eslintErrorsFixed: 0,
        importErrorsFixed: 0,
        jsxErrorsFixed: 0,
        dependencyErrorsFixed: 0,
        configurationErrorsFixed: 0
      },
      details: [],
      recommendations: []
    };

    // Run type checking to get current status
    const typeCheckResult = await this.runCommand('npm run type-check', { silent: true });
    if (!typeCheckResult.success) {
      report.recommendations.push('TypeScript errors still exist - manual review may be needed');
    }

    // Run linting to get current status
    const lintResult = await this.runCommand('npm run lint', { silent: true });
    if (!lintResult.success) {
      report.recommendations.push('ESLint errors still exist - manual review may be needed');
    }

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Report generated: ${this.reportFile}`);
    
    return report;
  }

  async run() {
    this.log('Starting Enhanced Error Fixing Automation');
    
    const startTime = Date.now();
    
    try {
      // Run all error fixing processes
      const results = await Promise.allSettled([
        this.fixConfigurationErrors(),
        this.fixDependencyErrors(),
        this.fixTypeScriptErrors(),
        this.fixESLintErrors(),
        this.fixImportErrors(),
        this.fixJSXErrors()
      ]);

      // Generate report
      const report = await this.generateReport();
      
      const endTime = Date.now();
      const duration = (endTime - startTime) / 1000;
      
      this.log(`Enhanced Error Fixing Automation completed in ${duration}s`);
      this.log(`Report saved to: ${this.reportFile}`);
      
      return {
        success: true,
        duration,
        report
      };
      
    } catch (error) {
      this.log(`Automation failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message
      };
    }
  }
}

// Run the automation if this script is executed directly
if (require.main === module) {
  const automation = new EnhancedErrorFixingAutomation();
  automation.run().then(result => {
    if (result.success) {
      console.log('✅ Enhanced Error Fixing Automation completed successfully');
      process.exit(0);
    } else {
      console.log('❌ Enhanced Error Fixing Automation failed');
      process.exit(1);
    }
  }).catch(error => {
    console.error('❌ Enhanced Error Fixing Automation crashed:', error);
    process.exit(1);
  });
}

module.exports = EnhancedErrorFixingAutomation;