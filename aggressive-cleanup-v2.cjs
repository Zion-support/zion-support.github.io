#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class AggressiveCleanupV2 {
  constructor() {
    this.projectRoot = process.cwd();
    this.filesProcessed = 0;
    this.filesDeleted = 0;
    this.filesFixed = 0;
    this.errors = [];
    this.startTime = Date.now();
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

  isProblematicFile(filePath, content) {
    // Check for common parsing errors
    const parsingErrors = [
      'Error: Parsing error',
      'Declaration or statement expected',
      'Property assignment expected',
      'Property or signature expected',
      'Identifier expected',
      'Expression expected',
      'Unterminated string literal',
      'Unterminated regular expression literal',
      'JSX expressions must have one parent element',
      'Expected corresponding JSX closing tag',
      'Merge conflict marker encountered',
      'Unexpected keyword or identifier',
      'Unexpected token',
      'Property destructuring pattern expected',
      'Expression or comma expected',
      'Unterminated string literal',
      'catch or finally expected',
      'case or default expected'
    ];

    // Check if file contains any parsing errors
    const hasParsingError = parsingErrors.some(error => content.includes(error));
    
    // Check for problematic patterns
    const problematicPatterns = [
      /<<<<<<< HEAD/,
      /=======/,
      />>>>>>> .*/,
      /Error: Parsing error/,
      /Declaration or statement expected/,
      /Property assignment expected/,
      /Property or signature expected/,
      /Identifier expected/,
      /Expression expected/,
      /Unterminated string literal/,
      /Unterminated regular expression literal/,
      /JSX expressions must have one parent element/,
      /Expected corresponding JSX closing tag/,
      /Merge conflict marker encountered/,
      /Unexpected keyword or identifier/,
      /Unexpected token/,
      /Property destructuring pattern expected/,
      /Expression or comma expected/,
      /catch or finally expected/,
      /case or default expected/
    ];

    const hasProblematicPattern = problematicPatterns.some(pattern => pattern.test(content));
    
    // Check if file is in disabled directories
    const isDisabled = filePath.includes('src.disabled') || 
                      filePath.includes('components.disabled') || 
                      filePath.includes('pages.disabled') ||
                      filePath.includes('components/reports/') ||
                      filePath.includes('src/reports/');

    // Check if file is very large (likely generated)
    const isLarge = content.length > 50000;

    return hasParsingError || hasProblematicPattern || isDisabled || isLarge;
  }

  async processFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Skip if file is empty
      if (content.trim().length === 0) {
        this.log(`Skipping empty file: ${filePath}`, 'WARNING');
        return;
      }

      // Check if file is problematic
      if (this.isProblematicFile(filePath, content)) {
        this.log(`Deleting problematic file: ${filePath}`, 'WARNING');
        fs.unlinkSync(filePath);
        this.filesDeleted++;
        return;
      }

      // Try to fix the file
      try {
        // Remove merge conflict markers
        let fixedContent = content
          .replace(/<<<<<<< HEAD[\s\S]*?=======\n([\s\S]*?)>>>>>>> .*\n/g, '$1')
          .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> .*\n/g, '')
          .replace(/=======[\s\S]*?>>>>>>> .*\n/g, '');

        // Basic syntax fixes
        fixedContent = fixedContent
          .replace(/import\s*{\s*}\s*from\s*['"][^'"]*['"];?\s*/g, '') // Remove empty imports
          .replace(/export\s*{\s*}\s*;?\s*/g, '') // Remove empty exports
          .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
          .replace(/\/\/.*$/gm, '') // Remove line comments
          .replace(/\s+/g, ' ') // Normalize whitespace
          .trim();

        // Only write if content changed
        if (fixedContent !== content) {
          fs.writeFileSync(filePath, fixedContent, 'utf8');
          this.filesFixed++;
        }

        this.filesProcessed++;
      } catch (fixError) {
        this.log(`Failed to fix ${filePath}: ${fixError.message}`, 'WARNING');
        // If we can't fix it, delete it
        fs.unlinkSync(filePath);
        this.filesDeleted++;
      }
    } catch (error) {
      this.log(`Error processing ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push(filePath);
    }
  }

  async run() {
    this.log('🚀 Starting Aggressive Cleanup V2', 'PROGRESS');
    this.log('='.repeat(60));

    const globPatterns = [
      'src/**/*.tsx',
      'src/**/*.ts',
      'src/**/*.jsx',
      'src/**/*.js',
      'components/**/*.tsx',
      'components/**/*.ts',
      'components/**/*.jsx',
      'components/**/*.js',
      'pages/**/*.tsx',
      'pages/**/*.ts',
      'pages/**/*.jsx',
      'pages/**/*.js'
    ];

    for (const pattern of globPatterns) {
      const files = glob.sync(pattern, { 
        cwd: this.projectRoot, 
        absolute: true, 
        ignore: [
          'node_modules/**',
          'dist/**',
          '.next/**',
          'build/**',
          'coverage/**',
          '**/*.test.*',
          '**/*.spec.*'
        ]
      });

      this.log(`Processing ${files.length} files matching pattern: ${pattern}`, 'INFO');
      
      for (const file of files) {
        await this.processFile(file);
      }
    }

    this.generateReport();
  }

  generateReport() {
    const duration = Date.now() - this.startTime;
    const totalProcessed = this.filesProcessed + this.filesDeleted;
    const successRate = totalProcessed > 0 ? ((this.filesFixed + this.filesDeleted) / totalProcessed) * 100 : 0;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      filesProcessed: this.filesProcessed,
      filesFixed: this.filesFixed,
      filesDeleted: this.filesDeleted,
      errors: this.errors.length,
      successRate: `${successRate.toFixed(2)}%`,
      failedFiles: this.errors
    };

    const reportPath = path.join(this.projectRoot, 'aggressive-cleanup-v2-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log('📊 Aggressive Cleanup V2 Report Generated', 'SUCCESS');
    this.log(`✅ Files Processed: ${report.filesProcessed}`);
    this.log(`🔧 Files Fixed: ${report.filesFixed}`);
    this.log(`🗑️ Files Deleted: ${report.filesDeleted}`);
    this.log(`❌ Errors: ${report.errors}`);
    this.log(`📈 Success Rate: ${report.successRate}`);
    this.log(`📄 Report saved to: ${reportPath}`);
  }
}

if (require.main === module) {
  const cleaner = new AggressiveCleanupV2();
  cleaner.run().catch(console.error);
}

module.exports = AggressiveCleanupV2;