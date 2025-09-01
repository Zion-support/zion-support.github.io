#!/usr/bin/env node

/**
 * PM2 Error Prevention Automation
 * Automatically prevents and fixes common errors before they become problems
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PM2ErrorPrevention {
  constructor() {
    this.projectRoot = process.cwd();
    this.config = {
      checkInterval: 5 * 60 * 1000, // 5 minutes
      maxErrors: 100,
      autoFix: true,
      backupBeforeFix: true
    };
  }

  async start() {
    console.log('🚀 Starting PM2 Error Prevention Automation...');
    
    // Set up monitoring
    this.setupMonitoring();
    
    // Start the prevention loop
    this.startPreventionLoop();
  }

  setupMonitoring() {
    // Create PM2 ecosystem configuration for error prevention
    const ecosystemConfig = {
      name: 'error-prevention',
      script: 'scripts/automation/pm2-error-prevention.cjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PM2_ERROR_PREVENTION: 'true'
      }
    };

    // Write PM2 ecosystem config
    const ecosystemPath = path.join(this.projectRoot, 'ecosystem-error-prevention.config.cjs');
    fs.writeFileSync(ecosystemPath, `module.exports = ${JSON.stringify(ecosystemConfig, null, 2)};`);
    
    console.log('✅ PM2 ecosystem configuration created');
  }

  startPreventionLoop() {
    setInterval(async () => {
      try {
        await this.runPreventionChecks();
      } catch (error) {
        console.error('❌ Error in prevention loop:', error);
      }
    }, this.config.checkInterval);
  }

  async runPreventionChecks() {
    console.log('🔍 Running error prevention checks...');
    
    // Check 1: TypeScript errors
    await this.checkTypeScriptErrors();
    
    // Check 2: Import issues
    await this.checkImportIssues();
    
    // Check 3: Syntax issues
    await this.checkSyntaxIssues();
    
    // Check 4: Unused imports
    await this.checkUnusedImports();
    
    console.log('✅ Prevention checks completed');
  }

  async checkTypeScriptErrors() {
    try {
      const result = execSync('npm run type-check', { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      if (result.includes('error TS')) {
        const errorCount = (result.match(/error TS/g) || []).length;
        console.log(`⚠️  Found ${errorCount} TypeScript errors`);
        
        if (this.config.autoFix && errorCount > this.config.maxErrors) {
          await this.autoFixTypeScriptErrors();
        }
      } else {
        console.log('✅ No TypeScript errors found');
      }
    } catch (error) {
      // TypeScript check failed, which means there are errors
      const errorOutput = error.stdout || error.stderr || '';
      const errorCount = (errorOutput.match(/error TS/g) || []).length;
      console.log(`⚠️  Found ${errorCount} TypeScript errors`);
      
      if (this.config.autoFix && errorCount > this.config.maxErrors) {
        await this.autoFixTypeScriptErrors();
      }
    }
  }

  async checkImportIssues() {
    const sourceFiles = await this.getSourceFiles();
    let importIssues = 0;
    
    for (const filePath of sourceFiles) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for .ts extensions in imports
      if (content.includes('.ts"') || content.includes(".ts'")) {
        importIssues++;
      }
      
      // Check for duplicate imports
      const importLines = content.match(/import.*from/g) || [];
      const uniqueImports = new Set(importLines);
      if (importLines.length !== uniqueImports.size) {
        importIssues++;
      }
    }
    
    if (importIssues > 0) {
      console.log(`⚠️  Found ${importIssues} import issues`);
      
      if (this.config.autoFix) {
        await this.autoFixImportIssues();
      }
    } else {
      console.log('✅ No import issues found');
    }
  }

  async checkSyntaxIssues() {
    const sourceFiles = await this.getSourceFiles();
    let syntaxIssues = 0;
    
    for (const filePath of sourceFiles) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for malformed any types
      if (content.includes('any"')) {
        syntaxIssues++;
      }
      
      // Check for malformed JSX
      if (content.includes('<\\w+"')) {
        syntaxIssues++;
      }
      
      // Check for malformed object properties
      if (content.includes('\\w+"\\w+":')) {
        syntaxIssues++;
      }
    }
    
    if (syntaxIssues > 0) {
      console.log(`⚠️  Found ${syntaxIssues} syntax issues`);
      
      if (this.config.autoFix) {
        await this.autoFixSyntaxIssues();
      }
    } else {
      console.log('✅ No syntax issues found');
    }
  }

  async checkUnusedImports() {
    try {
      // Run ESLint to check for unused imports
      const result = execSync('npm run lint -- --quiet', { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const unusedImportCount = (result.match(/unused/g) || []).length;
      
      if (unusedImportCount > 0) {
        console.log(`⚠️  Found ${unusedImportCount} unused imports`);
        
        if (this.config.autoFix) {
          await this.autoFixUnusedImports();
        }
      } else {
        console.log('✅ No unused imports found');
      }
    } catch (error) {
      // Linting failed, which might mean there are issues
      console.log('⚠️  Linting check failed, may indicate issues');
    }
  }

  async autoFixTypeScriptErrors() {
    console.log('🔧 Auto-fixing TypeScript errors...');
    
    try {
      // Run the comprehensive error fixer
      execSync('node scripts/automation/comprehensive-error-fixer.cjs', {
        cwd: this.projectRoot,
        stdio: 'inherit'
      });
      
      console.log('✅ TypeScript errors auto-fixed');
    } catch (error) {
      console.error('❌ Failed to auto-fix TypeScript errors:', error);
    }
  }

  async autoFixImportIssues() {
    console.log('🔧 Auto-fixing import issues...');
    
    try {
      // Run the import fixer
      execSync('node scripts/automation/fix-imports.cjs', {
        cwd: this.projectRoot,
        stdio: 'inherit'
      });
      
      console.log('✅ Import issues auto-fixed');
    } catch (error) {
      console.error('❌ Failed to auto-fix import issues:', error);
    }
  }

  async autoFixSyntaxIssues() {
    console.log('🔧 Auto-fixing syntax issues...');
    
    try {
      // Run the syntax fixer
      execSync('node scripts/automation/fix-syntax.cjs', {
        cwd: this.projectRoot,
        stdio: 'inherit'
      });
      
      console.log('✅ Syntax issues auto-fixed');
    } catch (error) {
      console.error('❌ Failed to auto-fix syntax issues:', error);
    }
  }

  async autoFixUnusedImports() {
    console.log('🔧 Auto-fixing unused imports...');
    
    try {
      // Run ESLint auto-fix
      execSync('npm run lint -- --fix', {
        cwd: this.projectRoot,
        stdio: 'inherit'
      });
      
      console.log('✅ Unused imports auto-fixed');
    } catch (error) {
      console.error('❌ Failed to auto-fix unused imports:', error);
    }
  }

  async getSourceFiles() {
    const sourceFiles = [];
    
    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDirectory(fullPath);
        } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
          sourceFiles.push(fullPath);
        }
      }
    };
    
    scanDirectory(path.join(this.projectRoot, 'src'));
    return sourceFiles;
  }

  // PM2 lifecycle methods
  onStart() {
    console.log('🚀 PM2 Error Prevention started');
  }

  onStop() {
    console.log('🛑 PM2 Error Prevention stopped');
  }

  onRestart() {
    console.log('🔄 PM2 Error Prevention restarted');
  }
}

// Create instance and start
const errorPrevention = new PM2ErrorPrevention();

// Handle PM2 signals
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the automation
errorPrevention.start();