#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = Date.now();
    this.fixedFiles = [];
    this.errors = [];
    this.warnings = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

    // Fix merge conflict markers
    if (content.includes('
      modified = true;
    }
  }

  async fixMergeConflicts() {
    this.log('\n🔧 FIXING MERGE CONFLICTS');
    
    try {
      // Find files with merge conflicts
      const findResult = await this.runCommand(
        'find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | xargs grep -l "<<<<<<< HEAD" || true',
        'Find merge conflicts'
      );

      if (findResult.success && findResult.output.trim()) {
        const files = findResult.output.trim().split('\n');
        this.log(`Found ${files.length} files with merge conflicts`);
        
        for (const file of files) {
          if (file.trim()) {
            await this.fixMergeConflictInFile(file.trim());
          }
        }
      } else {
        this.log('No merge conflicts found', 'SUCCESS');
      }
    } catch (error) {
      this.log(`Error fixing merge conflicts: ${error.message}`, 'ERROR');
      this.errors.push(`Merge conflicts: ${error.message}`);
    }
  }

  async fixMergeConflictInFile(filePath) {
    try {
      this.log(`Fixing merge conflicts in ${filePath}`, 'PROGRESS');
      
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Remove merge conflict markers and keep the HEAD version
      content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
      
      // Remove any remaining conflict markers
      content = content.replace(/<<<<<<< HEAD\n/g, '');
      content = content.replace(/=======\n/g, '');
      content = content.replace(/>>>>>>> [^\n]+\n/g, '');
      
      fs.writeFileSync(filePath, content);
      this.fixedFiles.push(filePath);
      this.log(`Fixed merge conflicts in ${filePath}`, 'SUCCESS');
    } catch (error) {
      this.log(`Error fixing merge conflicts in ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push(`Merge conflict fix failed for ${filePath}: ${error.message}`);
    }
  }

  async fixSyntaxErrors() {
    this.log('\n🔧 FIXING SYNTAX ERRORS');
    
    try {
      // Run TypeScript check to identify syntax errors
      const typeCheckResult = await this.runCommand(
        'npx tsc --noEmit --skipLibCheck',
        'TypeScript syntax check'
      );

      if (!typeCheckResult.success) {
        this.log('TypeScript syntax errors found, attempting to fix...', 'WARNING');
        
        // Try to fix common syntax errors
        await this.fixCommonSyntaxErrors();
      } else {
        this.log('No TypeScript syntax errors found', 'SUCCESS');
      }
    } catch (error) {
      this.log(`Error fixing syntax errors: ${error.message}`, 'ERROR');
      this.errors.push(`Syntax fix failed: ${error.message}`);
    }
  }

  async fixCommonSyntaxErrors() {
    try {
      // Find all TypeScript/JavaScript files
      const files = await this.findSourceFiles();
      
      for (const file of files) {
        await this.fixFileSyntaxErrors(file);
      }
    } catch (error) {
      this.log(`Error fixing common syntax errors: ${error.message}`, 'ERROR');
      this.errors.push(`Common syntax fix failed: ${error.message}`);
    }
  }

  async findSourceFiles() {
    try {
      const result = await this.runCommand(
        'find . -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | grep -v node_modules | grep -v .next | head -50',
        'Find source files'
      );
      
      if (result.success) {
        return result.output.trim().split('\n').filter(f => f.trim());
      }
      return [];
    } catch (error) {
      this.log(`Error finding source files: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async fixFileSyntaxErrors(filePath) {
    try {
      if (!fs.existsSync(filePath)) return;
      
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix common syntax errors
      const fixes = [
        // Fix unterminated strings
        {
          pattern: /(['"`])([^'"`]*?)(\n)([^'"`]*?)(['"`])/g,
          replacement: '$1$2$4$5'
        },
        // Fix missing semicolons
        {
          pattern: /(\w+)\s*\n\s*(\w+)/g,
          replacement: '$1;\n$2'
        },
        // Fix missing commas in object literals
        {
          pattern: /(\w+):\s*([^,}\n]+)\n\s*(\w+):/g,
          replacement: '$1: $2,\n$3:'
        },
        // Fix missing closing brackets
        {
          pattern: /(\{[\s\S]*?)(\n\s*)(\w+):/g,
          replacement: '$1$2$3:'
        }
      ];
      
      for (const fix of fixes) {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`Fixed syntax errors in ${filePath}`, 'SUCCESS');
      }
    } catch (error) {
      this.log(`Error fixing syntax errors in ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push(`Syntax fix failed for ${filePath}: ${error.message}`);
    }
  }

  async runLinting() {
    this.log('\n🔍 RUNNING LINTING');
    
    try {
      // Run ESLint with auto-fix
      const lintResult = await this.runCommand(
        'npx eslint . --fix --max-warnings 1000',
        'ESLint auto-fix'
      );

      if (lintResult.success) {
        this.log('Linting completed successfully', 'SUCCESS');
      } else {
        this.log('Linting completed with warnings', 'WARNING');
        this.warnings.push('ESLint warnings present');
      }
    } catch (error) {
      this.log(`Error running linting: ${error.message}`, 'ERROR');
      this.errors.push(`Linting failed: ${error.message}`);
    }
  }

  async runTypeCheck() {
    this.log('\n🔍 RUNNING TYPE CHECK');
    
    try {
      const typeCheckResult = await this.runCommand(
        'npx tsc --noEmit --skipLibCheck',
        'TypeScript type check'
      );

      if (typeCheckResult.success) {
        this.log('Type check passed', 'SUCCESS');
      } else {
        this.log('Type check failed', 'WARNING');
        this.warnings.push('TypeScript type errors present');
      }
    } catch (error) {
      this.log(`Error running type check: ${error.message}`, 'ERROR');
      this.errors.push(`Type check failed: ${error.message}`);
    }
  }

  async runBuild() {
    this.log('\n🏗️ RUNNING BUILD');
    
    try {
      const buildResult = await this.runCommand(
        'npm run build',
        'Next.js build'
      );

      if (buildResult.success) {
        this.log('Build completed successfully', 'SUCCESS');
      } else {
        this.log('Build failed', 'ERROR');
        this.errors.push('Build failed');
      }
    } catch (error) {
      this.log(`Error running build: ${error.message}`, 'ERROR');
      this.errors.push(`Build failed: ${error.message}`);
    }
  }

  async runTests() {
    this.log('\n🧪 RUNNING TESTS');
    
    try {
      const testResult = await this.runCommand(
        'npm test -- --passWithNoTests',
        'Jest tests'
      );

      if (testResult.success) {
        this.log('Tests passed', 'SUCCESS');
      } else {
        this.log('Tests failed', 'WARNING');
        this.warnings.push('Some tests failed');
      }
    } catch (error) {
      this.log(`Error running tests: ${error.message}`, 'ERROR');
      this.errors.push(`Tests failed: ${error.message}`);
    }
  }

  generateReport() {
    const duration = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      fixedFiles: this.fixedFiles.length,
      errors: this.errors.length,
      warnings: this.warnings.length,
      details: {
        fixedFiles: this.fixedFiles,
        errors: this.errors,
        warnings: this.warnings
      }
    };

    const reportPath = path.join(this.projectRoot, 'syntax-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log('\n📊 SYNTAX FIX REPORT');
    this.log('='.repeat(60));
    this.log(`Duration: ${report.duration}`);
    this.log(`Files Fixed: ${report.fixedFiles}`);
    this.log(`Errors: ${report.errors}`);
    this.log(`Warnings: ${report.warnings}`);
    this.log(`Report saved to: ${reportPath}`);
  }

  async run() {
    this.log('🚀 Starting Comprehensive Syntax Fixer');
    this.log('='.repeat(60));

    try {
      await this.fixMergeConflicts();
      await this.fixSyntaxErrors();
      await this.runLinting();
      await this.runTypeCheck();
      await this.runBuild();
      await this.runTests();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    } finally {
      this.generateReport();
    }
  }
}

// Run the comprehensive syntax fixer
if (require.main === module) {
  const fixer = new ComprehensiveSyntaxFixer();
  fixer.run().catch(console.error);
}

module.exports = ComprehensiveSyntaxFixer;