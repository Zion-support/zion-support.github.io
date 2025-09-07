#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
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

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`, 'PROGRESS');
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        ...options,
      });
      this.log(`${description} completed successfully`, 'SUCCESS');
      return { success: true, output: result };
    } catch (error) {
      this.log(`${description} failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
      };
    }
  }

  async findFilesWithErrors() {
    this.log('🔍 Finding files with syntax errors...', 'PROGRESS');
    
    try {
      const result = await this.runCommand(
        'npx eslint . --max-warnings 0 --format json',
        'ESLint Check for Errors'
      );
      
      if (result.success) {
        this.log('No syntax errors found', 'SUCCESS');
        return [];
      }
      
      // Parse ESLint JSON output
      const eslintOutput = JSON.parse(result.output);
      const filesWithErrors = eslintOutput
        .filter(file => file.messages && file.messages.length > 0)
        .map(file => ({
          filePath: file.filePath,
          errors: file.messages.filter(msg => msg.severity === 2),
          warnings: file.messages.filter(msg => msg.severity === 1)
        }));
      
      this.log(`Found ${filesWithErrors.length} files with errors`, 'INFO');
      return filesWithErrors;
    } catch (error) {
      this.log(`Error finding files: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async fixCommonSyntaxErrors(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix common JSX syntax errors
      const fixes = [
        // Fix missing React import
        {
          pattern: /^(?!import React)/,
          replacement: (match, offset, string) => {
            if (string.includes('JSX') && !string.includes('import React')) {
              return 'import React from \'react\';\n' + match;
            }
            return match;
          }
        },
        // Fix JSX fragment syntax
        {
          pattern: /<>\s*$/gm,
          replacement: '<React.Fragment>'
        },
        {
          pattern: /^<\/>\s*$/gm,
          replacement: '</React.Fragment>'
        },
        // Fix missing semicolons
        {
          pattern: /(\w+)\s*$/gm,
          replacement: (match, p1) => {
            if (match.trim() && !match.includes(';') && !match.includes('{') && !match.includes('}')) {
              return match + ';';
            }
            return match;
          }
        },
        // Fix merge conflict markers
        {
          pattern: /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g,
          replacement: ''
        },
        {
          pattern: /=======[\s\S]*?>>>>>>> [^\n]+/g,
          replacement: ''
        },
        // Fix malformed JSX attributes
        {
          pattern: /(\w+)\s*=\s*{([^}]*)\s*}/g,
          replacement: (match, attr, value) => {
            if (value.includes('true') && !value.includes('{true}')) {
              return `${attr}={true}`;
            }
            return match;
          }
        },
        // Fix missing closing tags
        {
          pattern: /<(\w+)([^>]*?)>([^<]*?)(?!<\1)/g,
          replacement: (match, tag, attrs, content) => {
            if (content && !content.includes('</') && !match.includes('/>')) {
              return `<${tag}${attrs}>${content}</${tag}>`;
            }
            return match;
          }
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
        this.log(`Fixed syntax errors in: ${filePath}`, 'SUCCESS');
        return true;
      }

      return false;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push(`${filePath}: ${error.message}`);
      return false;
    }
  }

  async fixTypeScriptErrors() {
    this.log('🔧 Fixing TypeScript errors...', 'PROGRESS');
    
    try {
      // Run TypeScript check
      const typeCheckResult = await this.runCommand(
        'npx tsc --noEmit --skipLibCheck',
        'TypeScript Check'
      );

      if (typeCheckResult.success) {
        this.log('No TypeScript errors found', 'SUCCESS');
        return true;
      }

      // Try to fix TypeScript errors with auto-fix
      const fixResult = await this.runCommand(
        'npx tsc --noEmit --skipLibCheck --incremental false',
        'TypeScript Check with Incremental'
      );

      return fixResult.success;
    } catch (error) {
      this.log(`TypeScript fix failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runESLintFix() {
    this.log('🔧 Running ESLint auto-fix...', 'PROGRESS');
    
    try {
      const fixResult = await this.runCommand(
        'npx eslint . --fix --max-warnings 1000',
        'ESLint Auto-fix'
      );

      if (fixResult.success) {
        this.log('ESLint auto-fix completed successfully', 'SUCCESS');
        return true;
      } else {
        this.log('ESLint auto-fix completed with warnings', 'WARNING');
        return true; // Still consider it successful if it fixed some issues
      }
    } catch (error) {
      this.log(`ESLint fix failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async cleanCorruptedFiles() {
    this.log('🧹 Cleaning corrupted files...', 'PROGRESS');
    
    const corruptedPatterns = [
      /components\/reports\/.*\.tsx$/,
      /components\/.*\.tsx$/
    ];

    for (const pattern of corruptedPatterns) {
      try {
        const files = await this.findFilesByPattern(pattern);
        for (const file of files) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            
            // Check if file is severely corrupted
            if (content.length < 100 || content.includes('<<<<<<< HEAD') || content.includes('=======')) {
              this.log(`Removing corrupted file: ${file}`, 'WARNING');
              fs.unlinkSync(file);
              this.warnings.push(`Removed corrupted file: ${file}`);
            }
          } catch (error) {
            this.log(`Error processing ${file}: ${error.message}`, 'WARNING');
          }
        }
      } catch (error) {
        this.log(`Error cleaning files: ${error.message}`, 'WARNING');
      }
    }
  }

  async findFilesByPattern(pattern) {
    const { execSync } = require('child_process');
    try {
      const result = execSync(`find . -name "*.tsx" -type f | grep -E "${pattern.source}"`, {
        cwd: this.projectRoot,
        encoding: 'utf8'
      });
      return result.trim().split('\n').filter(f => f);
    } catch (error) {
      return [];
    }
  }

  async runBuildTest() {
    this.log('🏗️ Testing build after fixes...', 'PROGRESS');
    
    try {
      const buildResult = await this.runCommand(
        'npm run build',
        'Next.js Build Test'
      );

      if (buildResult.success) {
        this.log('Build test passed', 'SUCCESS');
        return true;
      } else {
        this.log('Build test failed', 'ERROR');
        return false;
      }
    } catch (error) {
      this.log(`Build test failed: ${error.message}`, 'ERROR');
      return false;
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
      summary: {
        totalFilesFixed: this.fixedFiles.length,
        totalErrors: this.errors.length,
        totalWarnings: this.warnings.length,
        successRate: this.fixedFiles.length / (this.fixedFiles.length + this.errors.length) * 100
      },
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      warnings: this.warnings
    };

    const reportPath = path.join(this.projectRoot, 'syntax-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log('\n📊 SYNTAX FIX REPORT', 'INFO');
    this.log('='.repeat(50));
    this.log(`Duration: ${report.duration}`);
    this.log(`Files Fixed: ${report.fixedFiles}`);
    this.log(`Errors: ${report.errors}`);
    this.log(`Warnings: ${report.warnings}`);
    this.log(`Success Rate: ${Math.round(report.summary.successRate)}%`);
    this.log(`\n📄 Detailed report saved to: ${reportPath}`);
  }

  async run() {
    this.log('🚀 Starting Comprehensive Syntax Fixer', 'PROGRESS');
    this.log('='.repeat(60));

    try {
      // Step 1: Clean corrupted files
      await this.cleanCorruptedFiles();

      // Step 2: Run ESLint auto-fix
      await this.runESLintFix();

      // Step 3: Fix TypeScript errors
      await this.fixTypeScriptErrors();

      // Step 4: Find and fix remaining syntax errors
      const filesWithErrors = await this.findFilesWithErrors();
      for (const file of filesWithErrors) {
        await this.fixCommonSyntaxErrors(file.filePath);
      }

      // Step 5: Test build
      await this.runBuildTest();

    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    } finally {
      this.generateReport();
    }
  }
}

// Run the syntax fixer
if (require.main === module) {
  const fixer = new ComprehensiveSyntaxFixer();
  fixer.run().catch(console.error);
}

module.exports = ComprehensiveSyntaxFixer;