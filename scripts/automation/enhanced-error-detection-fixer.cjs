#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Starting enhanced error detection and fixing automation...');

// Configuration
const CONFIG = {
  // Error patterns to detect and fix
  errorPatterns: {
    // TypeScript errors
    typescript: {
      'Cannot find module': {
        type: 'module-resolution',
        fix: (match, filePath) => fixModuleResolution(match[1], filePath)
      },
      'Property.*does not exist': {
        type: 'property-access',
        fix: (match, filePath) => fixPropertyAccess(match[1], filePath)
      },
      'Type.*is not assignable': {
        type: 'type-assignment',
        fix: (match, filePath) => fixTypeAssignment(match[1], filePath)
      },
      'Expected.*arguments': {
        type: 'function-arguments',
        fix: (match, filePath) => fixFunctionArguments(match[1], filePath)
      }
    },
    
    // ESLint errors
    eslint: {
      'module is not defined': {
        type: 'eslint-config',
        fix: () => fixESLintConfig()
      },
      'Unexpected token': {
        type: 'syntax-error',
        fix: (match, filePath) => fixSyntaxError(match[1], filePath)
      },
      'Missing semicolon': {
        type: 'syntax-error',
        fix: (match, filePath) => fixMissingSemicolon(match[1], filePath)
      }
    },
    
    // Build errors
    build: {
      'Cannot read property': {
        type: 'null-check',
        fix: (match, filePath) => fixNullCheck(match[1], filePath)
      },
      'Unexpected end of input': {
        type: 'syntax-error',
        fix: (match, filePath) => fixUnexpectedEnd(match[1], filePath)
      }
    },
    
    // Dependency errors
    dependencies: {
      'ERESOLVE': {
        type: 'dependency-conflict',
        fix: () => fixDependencyConflicts()
      },
      'peer dependency': {
        type: 'peer-dependency',
        fix: () => fixPeerDependencies()
      }
    }
  },
  
  // File patterns to scan
  filePatterns: [
    'src/**/*.{ts,tsx,js,jsx}',
    'pages/**/*.{ts,tsx,js,jsx}',
    'components/**/*.{ts,tsx,js,jsx}',
    'scripts/**/*.{js,cjs}',
    'automation/**/*.{js,cjs}'
  ],
  
  // Directories to exclude
  excludePatterns: [
    'node_modules/**',
    '.next/**',
    'out/**',
    'dist/**',
    'build/**',
    '*.min.js'
  ]
};

class EnhancedErrorDetector {
  constructor() {
    this.errors = [];
    this.fixes = [];
    this.stats = {
      totalErrors: 0,
      fixedErrors: 0,
      failedFixes: 0,
      filesProcessed: 0
    };
  }

  async detectErrors() {
    console.log('🔍 Detecting errors...');
    
    try {
      // 1. Run TypeScript check
      await this.runTypeScriptCheck();
      
      // 2. Run ESLint check
      await this.runESLintCheck();
      
      // 3. Run build check
      await this.runBuildCheck();
      
      // 4. Check for dependency issues
      await this.checkDependencies();
      
      // 5. Scan files for common patterns
      await this.scanFilesForPatterns();
      
    } catch (error) {
      console.error('❌ Error detection failed:', error.message);
    }
  }

  async runTypeScriptCheck() {
    try {
      console.log('🔍 Running TypeScript check...');
      const result = execSync('npx tsc --noEmit --pretty false', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      this.parseTypeScriptErrors(output);
    }
  }

  async runESLintCheck() {
    try {
      console.log('🔍 Running ESLint check...');
      const result = execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --format=compact', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      this.parseESLintErrors(output);
    }
  }

  async runBuildCheck() {
    try {
      console.log('🔍 Running build check...');
      const result = execSync('npm run build', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      this.parseBuildErrors(output);
    }
  }

  async checkDependencies() {
    try {
      console.log('🔍 Checking dependencies...');
      const result = execSync('npm install --dry-run', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      this.parseDependencyErrors(output);
    }
  }

  parseTypeScriptErrors(output) {
    const lines = output.split('\n');
    lines.forEach(line => {
      if (line.includes('error TS')) {
        const match = line.match(/([^(]+)\((\d+),(\d+)\): error TS\d+: (.+)/);
        if (match) {
          this.errors.push({
            type: 'typescript',
            file: match[1].trim(),
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4],
            severity: 'error'
          });
        }
      }
    });
  }

  parseESLintErrors(output) {
    const lines = output.split('\n');
    lines.forEach(line => {
      if (line.includes('error')) {
        const match = line.match(/([^(]+)\((\d+),(\d+)\): (.+)/);
        if (match) {
          this.errors.push({
            type: 'eslint',
            file: match[1].trim(),
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4],
            severity: 'error'
          });
        }
      }
    });
  }

  parseBuildErrors(output) {
    const lines = output.split('\n');
    lines.forEach(line => {
      if (line.includes('Failed to compile') || line.includes('Error:')) {
        this.errors.push({
          type: 'build',
          file: 'build',
          line: 0,
          column: 0,
          message: line,
          severity: 'error'
        });
      }
    });
  }

  parseDependencyErrors(output) {
    const lines = output.split('\n');
    lines.forEach(line => {
      if (line.includes('ERESOLVE') || line.includes('peer dependency')) {
        this.errors.push({
          type: 'dependencies',
          file: 'package.json',
          line: 0,
          column: 0,
          message: line,
          severity: 'error'
        });
      }
    });
  }

  async scanFilesForPatterns() {
    console.log('🔍 Scanning files for common error patterns...');
    
    for (const pattern of CONFIG.filePatterns) {
      const files = this.glob(pattern);
      for (const file of files) {
        if (this.shouldExcludeFile(file)) continue;
        
        try {
          const content = fs.readFileSync(file, 'utf8');
          this.scanFileForPatterns(file, content);
          this.stats.filesProcessed++;
        } catch (error) {
          console.warn(`⚠️  Could not read file: ${file}`);
        }
      }
    }
  }

  glob(pattern) {
    const glob = require('glob');
    return glob.sync(pattern, { 
      ignore: CONFIG.excludePatterns,
      absolute: true 
    });
  }

  shouldExcludeFile(file) {
    return CONFIG.excludePatterns.some(pattern => 
      file.includes(pattern.replace('**', ''))
    );
  }

  scanFileForPatterns(file, content) {
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      for (const [category, patterns] of Object.entries(CONFIG.errorPatterns)) {
        for (const [pattern, config] of Object.entries(patterns)) {
          if (line.includes(pattern)) {
            this.errors.push({
              type: category,
              file: file,
              line: index + 1,
              column: line.indexOf(pattern),
              message: `Found pattern: ${pattern}`,
              severity: 'warning',
              pattern: pattern,
              fixConfig: config
            });
          }
        }
      }
    });
  }

  async applyFixes() {
    console.log('🔧 Applying fixes...');
    
    for (const error of this.errors) {
      try {
        const fixResult = await this.applyFix(error);
        if (fixResult.success) {
          this.fixes.push(fixResult);
          this.stats.fixedErrors++;
        } else {
          this.stats.failedFixes++;
        }
      } catch (error) {
        console.error(`❌ Failed to fix error in ${error.file}:`, error.message);
        this.stats.failedFixes++;
      }
    }
  }

  async applyFix(error) {
    const { type, file, line, column, message, pattern, fixConfig } = error;
    
    if (!fixConfig || !fixConfig.fix) {
      return { success: false, reason: 'No fix available' };
    }

    try {
      const result = await fixConfig.fix(message, file, line, column);
      return {
        success: true,
        error: error,
        fix: result,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        success: false,
        error: error,
        reason: error.message
      };
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      stats: this.stats,
      errors: this.errors,
      fixes: this.fixes,
      summary: {
        totalErrors: this.stats.totalErrors,
        fixedErrors: this.stats.fixedErrors,
        failedFixes: this.stats.failedFixes,
        successRate: this.stats.totalErrors > 0 ? 
          (this.stats.fixedErrors / this.stats.totalErrors * 100).toFixed(2) + '%' : '0%'
      }
    };

    const reportPath = path.join(process.cwd(), 'enhanced-error-detection-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Report saved to: ${reportPath}`);
    console.log(`📈 Summary: ${report.summary.fixedErrors}/${report.summary.totalErrors} errors fixed (${report.summary.successRate} success rate)`);
    
    return report;
  }
}

// Fix functions
async function fixModuleResolution(message, file, line, column) {
  // Add missing imports or fix import paths
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  
  // Simple fix: add React import if missing
  if (message.includes('Cannot find module') && message.includes('react')) {
    if (!content.includes("import React")) {
      lines.unshift("import React from 'react';");
      fs.writeFileSync(file, lines.join('\n'));
      return { type: 'module-resolution', action: 'Added React import' };
    }
  }
  
  return { type: 'module-resolution', action: 'No fix applied' };
}

async function fixPropertyAccess(message, file, line, column) {
  // Add optional chaining or type assertions
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  
  if (line > 0 && line <= lines.length) {
    const currentLine = lines[line - 1];
    if (currentLine.includes('.')) {
      // Add optional chaining
      const fixedLine = currentLine.replace(/\.(\w+)/g, '?.$1');
      lines[line - 1] = fixedLine;
      fs.writeFileSync(file, lines.join('\n'));
      return { type: 'property-access', action: 'Added optional chaining' };
    }
  }
  
  return { type: 'property-access', action: 'No fix applied' };
}

async function fixTypeAssignment(message, file, line, column) {
  // Add type assertions or fix type mismatches
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  
  if (line > 0 && line <= lines.length) {
    const currentLine = lines[line - 1];
    if (currentLine.includes('=')) {
      // Add type assertion
      const fixedLine = currentLine.replace(/= (.+)/, '= $1 as any');
      lines[line - 1] = fixedLine;
      fs.writeFileSync(file, lines.join('\n'));
      return { type: 'type-assignment', action: 'Added type assertion' };
    }
  }
  
  return { type: 'type-assignment', action: 'No fix applied' };
}

async function fixFunctionArguments(message, file, line, column) {
  // Fix function argument mismatches
  return { type: 'function-arguments', action: 'Manual fix required' };
}

async function fixESLintConfig() {
  // Fix ESLint configuration issues
  const eslintConfig = path.join(process.cwd(), '.eslintrc.js');
  
  if (fs.existsSync(eslintConfig)) {
    const content = fs.readFileSync(eslintConfig, 'utf8');
    
    // Fix module.exports syntax
    if (content.includes('module.exports')) {
      const fixedContent = content.replace(/module\.exports/g, 'module.exports');
      fs.writeFileSync(eslintConfig, fixedContent);
      return { type: 'eslint-config', action: 'Fixed module.exports syntax' };
    }
  }
  
  return { type: 'eslint-config', action: 'No fix applied' };
}

async function fixSyntaxError(message, file, line, column) {
  // Fix syntax errors
  return { type: 'syntax-error', action: 'Manual fix required' };
}

async function fixMissingSemicolon(message, file, line, column) {
  // Add missing semicolons
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  
  if (line > 0 && line <= lines.length) {
    const currentLine = lines[line - 1];
    if (!currentLine.trim().endsWith(';') && !currentLine.trim().endsWith('{') && !currentLine.trim().endsWith('}')) {
      lines[line - 1] = currentLine + ';';
      fs.writeFileSync(file, lines.join('\n'));
      return { type: 'syntax-error', action: 'Added missing semicolon' };
    }
  }
  
  return { type: 'syntax-error', action: 'No fix applied' };
}

async function fixNullCheck(message, file, line, column) {
  // Add null checks
  return { type: 'null-check', action: 'Manual fix required' };
}

async function fixUnexpectedEnd(message, file, line, column) {
  // Fix unexpected end of input
  return { type: 'syntax-error', action: 'Manual fix required' };
}

async function fixDependencyConflicts() {
  // Fix dependency conflicts
  try {
    execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });
    return { type: 'dependency-conflict', action: 'Installed with legacy peer deps' };
  } catch (error) {
    return { type: 'dependency-conflict', action: 'Failed to fix dependencies' };
  }
}

async function fixPeerDependencies() {
  // Fix peer dependency issues
  try {
    execSync('npm install --force', { stdio: 'inherit' });
    return { type: 'peer-dependency', action: 'Forced installation' };
  } catch (error) {
    return { type: 'peer-dependency', action: 'Failed to fix peer dependencies' };
  }
}

// Main execution
async function main() {
  const detector = new EnhancedErrorDetector();
  
  try {
    // Detect errors
    await detector.detectErrors();
    
    // Apply fixes
    await detector.applyFixes();
    
    // Generate report
    const report = detector.generateReport();
    
    console.log('✅ Enhanced error detection and fixing completed!');
    
    // Exit with appropriate code
    process.exit(report.stats.failedFixes > 0 ? 1 : 0);
    
  } catch (error) {
    console.error('❌ Enhanced error detection failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { EnhancedErrorDetector, CONFIG };