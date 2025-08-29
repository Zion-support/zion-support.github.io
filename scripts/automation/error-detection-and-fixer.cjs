#!/usr/bin/env node

/**
 * Comprehensive Error Detection and Fixer
 * Automatically detects and fixes common TypeScript and code quality issues
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { glob } = require('glob');

class ErrorDetectionAndFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'error-reports');
    this.fixesDir = path.join(this.projectRoot, 'applied-fixes');
    this.errors = [];
    this.fixes = [];
    this.stats = {
      filesProcessed: 0,
      errorsFound: 0,
      errorsFixed: 0,
      filesFixed: 0
    };
  }

  async initialize() {
    // Create directories if they don't exist
    [this.reportsDir, this.fixesDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    console.log('🚀 Error Detection and Fixer initialized');
    console.log(`📁 Project root: ${this.projectRoot}`);
  }

  async runFullAnalysis() {
    console.log('\n🔍 Starting comprehensive error analysis...');
    
    try {
      // 1. TypeScript compilation check
      await this.runTypeScriptCheck();
      
      // 2. ESLint analysis
      await this.runESLintAnalysis();
      
      // 3. Duplicate file detection
      await this.detectDuplicateFiles();
      
      // 4. Import/export issues
      await this.detectImportExportIssues();
      
      // 5. Unused imports and variables
      await this.detectUnusedCode();
      
      // 6. Generate comprehensive report
      await this.generateReport();
      
      // 7. Apply automatic fixes
      await this.applyAutomaticFixes();
      
    } catch (error) {
      console.error('❌ Error during analysis:', error.message);
    }
  }

  async runTypeScriptCheck() {
    console.log('\n📝 Running TypeScript compilation check...');
    
    try {
      const result = execSync('npm run type-check 2>&1', { 
        encoding: 'utf8',
        cwd: this.projectRoot 
      });
      
      // Parse TypeScript errors
      const errorLines = result.split('\n').filter(line => 
        line.includes('error TS') || line.includes('Found') || line.includes('Errors')
      );
      
      this.errors.push({
        type: 'typescript',
        count: errorLines.length,
        details: errorLines
      });
      
      this.stats.errorsFound += errorLines.length;
      console.log(`📊 Found ${errorLines.length} TypeScript errors`);
      
    } catch (error) {
      // TypeScript check failed, which means there are errors
      const output = error.stdout || error.stderr || '';
      const errorLines = output.split('\n').filter(line => 
        line.includes('error TS') || line.includes('Found') || line.includes('Errors')
      );
      
      this.errors.push({
        type: 'typescript',
        count: errorLines.length,
        details: errorLines
      });
      
      this.stats.errorsFound += errorLines.length;
      console.log(`📊 Found ${errorLines.length} TypeScript errors`);
    }
  }

  async runESLintAnalysis() {
    console.log('\n🔍 Running ESLint analysis...');
    
    try {
      const result = execSync('npm run lint 2>&1', { 
        encoding: 'utf8',
        cwd: this.projectRoot 
      });
      
      const errorLines = result.split('\n').filter(line => 
        line.includes('error') || line.includes('warning')
      );
      
      this.errors.push({
        type: 'eslint',
        count: errorLines.length,
        details: errorLines
      });
      
      this.stats.errorsFound += errorLines.length;
      console.log(`📊 Found ${errorLines.length} ESLint issues`);
      
    } catch (error) {
      // ESLint failed, which means there are errors
      const output = error.stdout || error.stderr || '';
      const errorLines = output.split('\n').filter(line => 
        line.includes('error') || line.includes('warning')
      );
      
      this.errors.push({
        type: 'eslint',
        count: errorLines.length,
        details: errorLines
      });
      
      this.stats.errorsFound += errorLines.length;
      console.log(`📊 Found ${errorLines.length} ESLint issues`);
    }
  }

  async detectDuplicateFiles() {
    console.log('\n🔍 Detecting duplicate files...');
    
    const allFiles = await glob('src/**/*.{ts,tsx,js,jsx}', { 
      cwd: this.projectRoot,
      ignore: ['node_modules/**', 'dist/**', 'build/**']
    });
    
    const fileMap = new Map();
    const duplicates = [];
    
    allFiles.forEach(file => {
      const baseName = path.basename(file, path.extname(file));
      const ext = path.extname(file);
      const key = `${baseName}${ext}`;
      
      if (fileMap.has(key)) {
        duplicates.push({
          original: fileMap.get(key),
          duplicate: file,
          type: 'duplicate_file'
        });
      } else {
        fileMap.set(key, file);
      }
    });
    
    this.errors.push({
      type: 'duplicate_files',
      count: duplicates.length,
      details: duplicates
    });
    
    this.stats.errorsFound += duplicates.length;
    console.log(`📊 Found ${duplicates.length} duplicate files`);
  }

  async detectImportExportIssues() {
    console.log('\n🔍 Detecting import/export issues...');
    
    const allFiles = await glob('src/**/*.{ts,tsx,js,jsx}', { 
      cwd: this.projectRoot,
      ignore: ['node_modules/**', 'dist/**', 'build/**']
    });
    
    const importIssues = [];
    
    for (const file of allFiles) {
      try {
        const content = fs.readFileSync(path.join(this.projectRoot, file), 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          // Check for import statements that might fail
          if (line.includes('import') && line.includes('from')) {
            const match = line.match(/from\s+["']([^"']+)["']/);
            if (match) {
              const importPath = match[1];
              
              // Check for relative imports that might not exist
              if (importPath.startsWith('.')) {
                const importFile = path.resolve(path.dirname(file), importPath);
                if (!fs.existsSync(importFile) && !fs.existsSync(importFile + '.ts') && 
                    !fs.existsSync(importFile + '.tsx') && !fs.existsSync(importFile + '.js') && 
                    !fs.existsSync(importFile + '.jsx')) {
                  importIssues.push({
                    file,
                    line: index + 1,
                    issue: `Import path not found: ${importPath}`,
                    type: 'import_not_found'
                  });
                }
              }
            }
          }
        });
      } catch (error) {
        // File read error
      }
    }
    
    this.errors.push({
      type: 'import_export',
      count: importIssues.length,
      details: importIssues
    });
    
    this.stats.errorsFound += importIssues.length;
    console.log(`📊 Found ${importIssues.length} import/export issues`);
  }

  async detectUnusedCode() {
    console.log('\n🔍 Detecting unused code...');
    
    const allFiles = await glob('src/**/*.{ts,tsx,js,jsx}', { 
      cwd: this.projectRoot,
      ignore: ['node_modules/**', 'dist/**', 'build/**']
    });
    
    const unusedIssues = [];
    
    for (const file of allFiles) {
      try {
        const content = fs.readFileSync(path.join(this.projectRoot, file), 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          // Check for unused imports
          if (line.includes('import') && line.includes('{')) {
            const match = line.match(/import\s*{([^}]+)}\s*from/);
            if (match) {
              const imports = match[1].split(',').map(imp => imp.trim());
              imports.forEach(imp => {
                const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
                if (cleanImp && !content.includes(cleanImp) && !content.includes(cleanImp + ':')) {
                  unusedIssues.push({
                    file,
                    line: index + 1,
                    issue: `Unused import: ${cleanImp}`,
                    type: 'unused_import'
                  });
                }
              });
            }
          }
        });
      } catch (error) {
        // File read error
      }
    }
    
    this.errors.push({
      type: 'unused_code',
      count: unusedIssues.length,
      details: unusedIssues
    });
    
    this.stats.errorsFound += unusedIssues.length;
    console.log(`📊 Found ${unusedIssues.length} unused code issues`);
  }

  async applyAutomaticFixes() {
    console.log('\n🔧 Applying automatic fixes...');
    
    let fixesApplied = 0;
    
    // Fix 1: Remove duplicate files
    const duplicateErrors = this.errors.find(e => e.type === 'duplicate_files');
    if (duplicateErrors && duplicateErrors.details.length > 0) {
      for (const duplicate of duplicateErrors.details) {
        try {
          // Keep the one with proper casing, remove the other
          const shouldRemove = duplicate.duplicate;
          if (fs.existsSync(path.join(this.projectRoot, shouldRemove))) {
            fs.unlinkSync(path.join(this.projectRoot, shouldRemove));
            console.log(`🗑️  Removed duplicate file: ${shouldRemove}`);
            fixesApplied++;
          }
        } catch (error) {
          console.error(`❌ Failed to remove duplicate: ${error.message}`);
        }
      }
    }
    
    // Fix 2: Remove unused imports
    const unusedErrors = this.errors.find(e => e.type === 'unused_code');
    if (unusedErrors && unusedErrors.details.length > 0) {
      for (const issue of unusedErrors.details) {
        if (issue.type === 'unused_import') {
          try {
            const filePath = path.join(this.projectRoot, issue.file);
            let content = fs.readFileSync(filePath, 'utf8');
            const lines = content.split('\n');
            
            // Remove the specific unused import line
            if (lines[issue.line - 1].includes(issue.issue.split(': ')[1])) {
              lines.splice(issue.line - 1, 1);
              content = lines.join('\n');
              fs.writeFileSync(filePath, content);
              console.log(`🧹 Removed unused import in ${issue.file}:${issue.line}`);
              fixesApplied++;
            }
          } catch (error) {
            console.error(`❌ Failed to fix unused import: ${error.message}`);
          }
        }
      }
    }
    
    this.stats.errorsFixed = fixesApplied;
    console.log(`🔧 Applied ${fixesApplied} automatic fixes`);
  }

  async generateReport() {
    console.log('\n📊 Generating comprehensive error report...');
    
    const timestamp = new Date().toISOString();
    const report = {
      timestamp,
      summary: {
        totalErrors: this.stats.errorsFound,
        errorsFixed: this.stats.errorsFixed,
        filesProcessed: this.stats.filesProcessed,
        filesFixed: this.stats.filesFixed
      },
      errors: this.errors,
      recommendations: this.generateRecommendations()
    };
    
    const reportPath = path.join(this.reportsDir, `error-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📄 Report saved to: ${reportPath}`);
    
    // Also save a summary report
    const summaryPath = path.join(this.reportsDir, 'latest-error-summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify({
      lastUpdated: timestamp,
      totalErrors: this.stats.errorsFound,
      errorsFixed: this.stats.errorsFixed,
      errorTypes: this.errors.map(e => ({ type: e.type, count: e.count }))
    }, null, 2));
    
    console.log(`📋 Summary saved to: ${summaryPath}`);
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.stats.errorsFound > 1000) {
      recommendations.push({
        priority: 'HIGH',
        action: 'Run systematic error fixing in batches',
        description: 'Too many errors to fix at once. Focus on critical files first.'
      });
    }
    
    const duplicateErrors = this.errors.find(e => e.type === 'duplicate_files');
    if (duplicateErrors && duplicateErrors.count > 0) {
      recommendations.push({
        priority: 'HIGH',
        action: 'Remove duplicate files',
        description: `Found ${duplicateErrors.count} duplicate files causing conflicts.`
      });
    }
    
    const importErrors = this.errors.find(e => e.type === 'import_export');
    if (importErrors && importErrors.count > 0) {
      recommendations.push({
        priority: 'MEDIUM',
        action: 'Fix import/export issues',
        description: `Found ${importErrors.count} import/export issues.`
      });
    }
    
    const unusedErrors = this.errors.find(e => e.type === 'unused_code');
    if (unusedErrors && unusedErrors.count > 0) {
      recommendations.push({
        priority: 'LOW',
        action: 'Clean up unused code',
        description: `Found ${unusedErrors.count} unused imports/variables.`
      });
    }
    
    return recommendations;
  }

  async run() {
    await this.initialize();
    await this.runFullAnalysis();
    
    console.log('\n🎯 Error Detection and Fixer completed!');
    console.log(`📊 Total errors found: ${this.stats.errorsFound}`);
    console.log(`🔧 Errors fixed: ${this.stats.errorsFixed}`);
    console.log(`📁 Reports saved to: ${this.reportsDir}`);
  }
}

// Run if called directly
if (require.main === module) {
  const fixer = new ErrorDetectionAndFixer();
  fixer.run().catch(console.error);
}

module.exports = ErrorDetectionAndFixer;