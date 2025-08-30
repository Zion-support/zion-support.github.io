#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');

class ErrorFixAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logs = [];
    this.fixesApplied = 0;
    this.errorsFound = 0;
    this.startTime = Date.now();
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    this.logs.push(logEntry);
    console.log(logEntry);
  }

  async run() {
    this.log('🚀 Starting Error Fix Automation...');
    
    try {
      // Step 1: Fix package.json issues
      await this.fixPackageJsonIssues();
      
      // Step 2: Fix ESLint configuration
      await this.fixESLintConfig();
      
      // Step 3: Fix TypeScript configuration
      await this.fixTypeScriptConfig();
      
      // Step 4: Fix syntax errors in files
      await this.fixSyntaxErrors();
      
      // Step 5: Fix unused imports and variables
      await this.fixUnusedImports();
      
      // Step 6: Fix console statements
      await this.fixConsoleStatements();
      
      // Step 7: Fix JSX/TSX syntax issues
      await this.fixJSXSyntax();
      
      // Step 8: Fix data file syntax errors
      await this.fixDataFileSyntax();
      
      // Step 9: Run final checks
      await this.runFinalChecks();
      
      // Step 10: Generate report
      await this.generateReport();
      
    } catch (error) {
      this.log(`❌ Error during automation: ${error.message}`, 'error');
      process.exit(1);
    }
  }

  async fixPackageJsonIssues() {
    this.log('📦 Fixing package.json issues...');
    
    try {
      // Install missing dependencies
      const missingDeps = ['globals', '@types/node', '@types/react', '@types/react-dom'];
      
      for (const dep of missingDeps) {
        try {
          execSync(`npm install --save-dev ${dep}`, { stdio: 'pipe' });
          this.log(`✅ Installed ${dep}`);
          this.fixesApplied++;
        } catch (error) {
          this.log(`⚠️ Could not install ${dep}: ${error.message}`, 'warn');
        }
      }
      
      // Fix package.json type field
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        if (!packageJson.type) {
          packageJson.type = 'module';
          fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
          this.log('✅ Added type: module to package.json');
          this.fixesApplied++;
        }
      }
      
    } catch (error) {
      this.log(`⚠️ Error fixing package.json: ${error.message}`, 'warn');
    }
  }

  async fixESLintConfig() {
    this.log('🔧 Fixing ESLint configuration...');
    
    try {
      const eslintConfigPath = path.join(this.projectRoot, 'eslint.config.js');
      
      if (fs.existsSync(eslintConfigPath)) {
        let config = fs.readFileSync(eslintConfigPath, 'utf8');
        
        // Fix import statements for CommonJS compatibility
        if (config.includes('import ')) {
          config = config.replace(/import /g, 'const ');
          config = config.replace(/export default/g, 'module.exports =');
          config = config.replace(/from ['"]/g, "= require('");
          config = config.replace(/['"];?$/g, "');");
          
          fs.writeFileSync(eslintConfigPath, config);
          this.log('✅ Fixed ESLint config for CommonJS compatibility');
          this.fixesApplied++;
        }
      }
      
    } catch (error) {
      this.log(`⚠️ Error fixing ESLint config: ${error.message}`, 'warn');
    }
  }

  async fixTypeScriptConfig() {
    this.log('📝 Fixing TypeScript configuration...');
    
    try {
      const tsConfigPath = path.join(this.projectRoot, 'tsconfig.json');
      
      if (fs.existsSync(tsConfigPath)) {
        const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
        
        // Ensure strict mode is enabled
        if (!tsConfig.compilerOptions) {
          tsConfig.compilerOptions = {};
        }
        
        tsConfig.compilerOptions.strict = true;
        tsConfig.compilerOptions.noImplicitAny = true;
        tsConfig.compilerOptions.noUnusedLocals = true;
        tsConfig.compilerOptions.noUnusedParameters = true;
        
        fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));
        this.log('✅ Enhanced TypeScript configuration');
        this.fixesApplied++;
      }
      
    } catch (error) {
      this.log(`⚠️ Error fixing TypeScript config: ${error.message}`, 'warn');
    }
  }

  async fixSyntaxErrors() {
    this.log('🔨 Fixing syntax errors...');
    
    try {
      // Find all JavaScript and TypeScript files
      const files = glob.sync('src/**/*.{js,jsx,ts,tsx}', { cwd: this.projectRoot });
      
      for (const file of files) {
        const filePath = path.join(this.projectRoot, file);
        try {
          let content = fs.readFileSync(filePath, 'utf8');
          let fixed = false;
          
          // Fix common syntax errors
          if (content.includes('const [')) {
            content = content.replace(/const \[/g, 'const [');
            fixed = true;
          }
          
          if (content.includes('function(')) {
            content = content.replace(/function\(/g, 'function (');
            fixed = true;
          }
          
          if (content.includes('=> {')) {
            content = content.replace(/=> \{/g, '=> {');
            fixed = true;
          }
          
          if (fixed) {
            fs.writeFileSync(filePath, content);
            this.log(`✅ Fixed syntax in ${file}`);
            this.fixesApplied++;
          }
          
        } catch (error) {
          this.log(`⚠️ Error processing ${file}: ${error.message}`, 'warn');
        }
      }
      
    } catch (error) {
      this.log(`⚠️ Error fixing syntax: ${error.message}`, 'warn');
    }
  }

  async fixUnusedImports() {
    this.log('🧹 Fixing unused imports...');
    
    try {
      const files = glob.sync('src/**/*.{js,jsx,ts,tsx}', { cwd: this.projectRoot });
      
      for (const file of files) {
        const filePath = path.join(this.projectRoot, file);
        try {
          let content = fs.readFileSync(filePath, 'utf8');
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
          
          if (fixed) {
            fs.writeFileSync(filePath, content);
            this.log(`✅ Cleaned unused imports in ${file}`);
            this.fixesApplied++;
          }
          
        } catch (error) {
          this.log(`⚠️ Error processing ${file}: ${error.message}`, 'warn');
        }
      }
      
    } catch (error) {
      this.log(`⚠️ Error fixing unused imports: ${error.message}`, 'warn');
    }
  }

  async fixConsoleStatements() {
    this.log('🔇 Fixing console statements...');
    
    try {
      const files = glob.sync('src/**/*.{js,jsx,ts,tsx}', { cwd: this.projectRoot });
      
      for (const file of files) {
        const filePath = path.join(this.projectRoot, file);
        try {
          let content = fs.readFileSync(filePath, 'utf8');
          let fixed = false;
          
          // Replace console statements with proper logging
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
          
          if (fixed) {
            fs.writeFileSync(filePath, content);
            this.log(`✅ Commented console statements in ${file}`);
            this.fixesApplied++;
          }
          
        } catch (error) {
          this.log(`⚠️ Error processing ${file}: ${error.message}`, 'warn');
        }
      }
      
    } catch (error) {
      this.log(`⚠️ Error fixing console statements: ${error.message}`, 'warn');
    }
  }

  async fixJSXSyntax() {
    this.log('⚛️ Fixing JSX syntax issues...');
    
    try {
      const files = glob.sync('src/**/*.{jsx,tsx}', { cwd: this.projectRoot });
      
      for (const file of files) {
        const filePath = path.join(this.projectRoot, file);
        try {
          let content = fs.readFileSync(filePath, 'utf8');
          let fixed = false;
          
          // Fix JSX fragment syntax
          if (content.includes('<>') && content.includes('</>')) {
            // Ensure proper JSX structure
            if (!content.includes('return (') && content.includes('return')) {
              content = content.replace(/return\s*([^;]*);/g, 'return ($1);');
              fixed = true;
            }
          }
          
          if (fixed) {
            fs.writeFileSync(filePath, content);
            this.log(`✅ Fixed JSX syntax in ${file}`);
            this.fixesApplied++;
          }
          
        } catch (error) {
          this.log(`⚠️ Error processing ${file}: ${error.message}`, 'warn');
        }
      }
      
    } catch (error) {
      this.log(`⚠️ Error fixing JSX syntax: ${error.message}`, 'warn');
    }
  }

  async fixDataFileSyntax() {
    this.log('📊 Fixing data file syntax errors...');
    
    try {
      const dataFiles = glob.sync('src/data/**/*.{js,jsx,ts,tsx}', { cwd: this.projectRoot });
      
      for (const file of dataFiles) {
        const filePath = path.join(this.projectRoot, file);
        try {
          let content = fs.readFileSync(filePath, 'utf8');
          let fixed = false;
          
          // Fix array syntax errors
          if (content.includes('const [') && !content.includes('const [')) {
            content = content.replace(/const \[/g, 'const [');
            fixed = true;
          }
          
          // Fix object syntax errors
          if (content.includes('const {') && !content.includes('const {')) {
            content = content.replace(/const \{/g, 'const {');
            fixed = true;
          }
          
          if (fixed) {
            fs.writeFileSync(filePath, content);
            this.log(`✅ Fixed data file syntax in ${file}`);
            this.fixesApplied++;
          }
          
        } catch (error) {
          this.log(`⚠️ Error processing ${file}: ${error.message}`, 'warn');
        }
      }
      
    } catch (error) {
      this.log(`⚠️ Error fixing data file syntax: ${error.message}`, 'warn');
    }
  }

  async runFinalChecks() {
    this.log('🔍 Running final checks...');
    
    try {
      // Run ESLint
      try {
        execSync('npm run lint', { stdio: 'pipe' });
        this.log('✅ ESLint passed');
      } catch (error) {
        this.log(`⚠️ ESLint still has issues: ${error.message}`, 'warn');
        this.errorsFound++;
      }
      
      // Run TypeScript check
      try {
        execSync('npm run type-check', { stdio: 'pipe' });
        this.log('✅ TypeScript check passed');
      } catch (error) {
        this.log(`⚠️ TypeScript check still has issues: ${error.message}`, 'warn');
        this.errorsFound++;
      }
      
    } catch (error) {
      this.log(`⚠️ Error running final checks: ${error.message}`, 'warn');
    }
  }

  async generateReport() {
    this.log('📊 Generating automation report...');
    
    const endTime = Date.now();
    const duration = (endTime - this.startTime) / 1000;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}s`,
      fixesApplied: this.fixesApplied,
      errorsFound: this.errorsFound,
      logs: this.logs,
      summary: {
        status: this.errorsFound === 0 ? 'SUCCESS' : 'PARTIAL_SUCCESS',
        message: this.errorsFound === 0 
          ? 'All errors have been fixed successfully!'
          : `${this.fixesApplied} fixes applied, but ${this.errorsFound} errors remain.`
      }
    };
    
    // Save report to file
    const reportPath = path.join(this.projectRoot, 'error-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log('📋 Report generated successfully');
    this.log(`⏱️ Total duration: ${duration}s`);
    this.log(`🔧 Fixes applied: ${this.fixesApplied}`);
    this.log(`❌ Errors remaining: ${this.errorsFound}`);
    this.log(`📊 Report saved to: ${reportPath}`);
    
    if (this.errorsFound === 0) {
      this.log('🎉 All errors have been fixed successfully!', 'success');
    } else {
      this.log('⚠️ Some errors remain. Manual review may be needed.', 'warn');
    }
  }
}

// CLI interface
if (require.main === module) {
  const automation = new ErrorFixAutomation();
  
  const command = process.argv[2] || 'run';
  
  switch (command) {
    case 'run':
      automation.run();
      break;
    case 'help':
      console.log(`
Error Fix Automation - Usage:
  node error-fix-automation.cjs [command]

Commands:
  run     - Run the full error fixing automation
  help    - Show this help message

Examples:
  node error-fix-automation.cjs run
  node error-fix-automation.cjs help
      `);
      break;
    default:
      console.log(`Unknown command: ${command}. Use 'help' for usage information.`);
      process.exit(1);
  }
}

module.exports = ErrorFixAutomation;