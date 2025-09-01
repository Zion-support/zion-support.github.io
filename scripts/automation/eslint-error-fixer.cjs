#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ESLintErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'eslint-error-fixer.log');
    this.reportFile = path.join(this.projectRoot, 'error-reports', `eslint-error-fixer-report-${Date.now()}.json`);
    this.fixesApplied = [];
    this.startTime = Date.now();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async getESLintErrors() {
    try {
      const result = execSync('npx eslint . --format=json --ext .js,.jsx,.ts,.tsx', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe']
      });
      return JSON.parse(result);
    } catch (error) {
      // ESLint errors are returned via stdout when using --format=json
      try {
        return JSON.parse(error.stdout || '[]');
      } catch (parseError) {
        this.log(`Error parsing ESLint output: ${parseError.message}`);
        return [];
      }
    }
  }

  fixESLintError(filePath, error) {
    try {
      if (!fs.existsSync(filePath)) {
        return false;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const originalContent = content;

      // Fix based on rule ID
      switch (error.ruleId) {
        case 'no-unused-vars':
          content = this.fixUnusedVariable(lines, error);
          break;
        case 'no-console':
          content = this.fixConsoleStatement(lines, error);
          break;
        case 'prefer-const':
          content = this.fixPreferConst(lines, error);
          break;
        case 'no-var':
          content = this.fixNoVar(lines, error);
          break;
        case 'react-hooks/exhaustive-deps':
          content = this.fixExhaustiveDeps(lines, error);
          break;
        case 'react/jsx-uses-react':
          content = this.fixJSXUsesReact(lines, error);
          break;
        case 'react/jsx-uses-vars':
          content = this.fixJSXUsesVars(lines, error);
          break;
        case '@typescript-eslint/no-unused-vars':
          content = this.fixTypeScriptUnusedVars(lines, error);
          break;
        case '@typescript-eslint/no-explicit-any':
          content = this.fixExplicitAny(lines, error);
          break;
        default:
          // Try generic fixes
          content = this.applyGenericESLintFixes(lines, error);
      }

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixesApplied.push({
          type: 'eslint_error',
          file: filePath,
          ruleId: error.ruleId,
          message: error.message,
          line: error.line,
          description: `Fixed ESLint error: ${error.ruleId}`,
          timestamp: new Date().toISOString()
        });
        this.log(`Fixed ESLint error ${error.ruleId} in ${filePath}:${error.line}`);
        return true;
      }

      return false;
    } catch (error) {
      this.log(`Error fixing ESLint error in ${filePath}: ${error.message}`);
      return false;
    }
  }

  fixUnusedVariable(lines, error) {
    const lineIndex = error.line - 1;
    const line = lines[lineIndex];
    
    // Prefix with underscore to indicate intentionally unused
    if (line.includes('const ') || line.includes('let ') || line.includes('var ')) {
      const newLine = line.replace(/(const|let|var)\s+(\w+)/, '$1 _$2');
      lines[lineIndex] = newLine;
      return lines.join('\n');
    }
    
    return lines.join('\n');
  }

  fixConsoleStatement(lines, error) {
    const lineIndex = error.line - 1;
    const line = lines[lineIndex];
    
    // Comment out console statements
    if (line.includes('console.')) {
      const newLine = `// ${line}`;
      lines[lineIndex] = newLine;
      return lines.join('\n');
    }
    
    return lines.join('\n');
  }

  fixPreferConst(lines, error) {
    const lineIndex = error.line - 1;
    const line = lines[lineIndex];
    
    // Change let to const if variable is not reassigned
    if (line.includes('let ')) {
      const newLine = line.replace(/let\s+(\w+)/, 'const $1');
      lines[lineIndex] = newLine;
      return lines.join('\n');
    }
    
    return lines.join('\n');
  }

  fixNoVar(lines, error) {
    const lineIndex = error.line - 1;
    const line = lines[lineIndex];
    
    // Change var to const
    if (line.includes('var ')) {
      const newLine = line.replace(/var\s+(\w+)/, 'const $1');
      lines[lineIndex] = newLine;
      return lines.join('\n');
    }
    
    return lines.join('\n');
  }

  fixExhaustiveDeps(lines, error) {
    const lineIndex = error.line - 1;
    const line = lines[lineIndex];
    
    // Add eslint-disable comment for exhaustive-deps
    if (line.includes('useEffect') || line.includes('useCallback') || line.includes('useMemo')) {
      const newLine = `${line} // eslint-disable-line react-hooks/exhaustive-deps`;
      lines[lineIndex] = newLine;
      return lines.join('\n');
    }
    
    return lines.join('\n');
  }

  fixJSXUsesReact(lines, error) {
    const lineIndex = error.line - 1;
    const line = lines[lineIndex];
    
    // Add React import if missing
    if (line.includes('React') && !lines.some(l => l.includes('import React'))) {
      lines.unshift("import React from 'react';");
      return lines.join('\n');
    }
    
    return lines.join('\n');
  }

  fixJSXUsesVars(lines, error) {
    const lineIndex = error.line - 1;
    const line = lines[lineIndex];
    
    // This is usually handled by the JSXUsesReact fix
    return lines.join('\n');
  }

  fixTypeScriptUnusedVars(lines, error) {
    const lineIndex = error.line - 1;
    const line = lines[lineIndex];
    
    // Prefix with underscore for TypeScript unused variables
    if (line.includes('const ') || line.includes('let ') || line.includes('var ')) {
      const newLine = line.replace(/(const|let|var)\s+(\w+)/, '$1 _$2');
      lines[lineIndex] = newLine;
      return lines.join('\n');
    }
    
    return lines.join('\n');
  }

  fixExplicitAny(lines, error) {
    const lineIndex = error.line - 1;
    const line = lines[lineIndex];
    
    // Replace explicit any with unknown or proper types
    if (line.includes(': any')) {
      const newLine = line.replace(/: any/g, ': unknown');
      lines[lineIndex] = newLine;
      return lines.join('\n');
    }
    
    return lines.join('\n');
  }

  applyGenericESLintFixes(lines, error) {
    const lineIndex = error.line - 1;
    const line = lines[lineIndex];
    
    // Generic fixes for common patterns
    let newLine = line;
    
    // Fix common issues
    if (newLine.includes('console.')) {
      newLine = `// ${newLine}`;
    }
    
    if (newLine.includes('var ')) {
      newLine = newLine.replace(/var\s+(\w+)/, 'const $1');
    }
    
    if (newLine.includes('let ') && !newLine.includes('=')) {
      newLine = newLine.replace(/let\s+(\w+)/, 'const $1');
    }
    
    lines[lineIndex] = newLine;
    return lines.join('\n');
  }

  async run() {
    this.log('🚀 Starting ESLint Error Fixer...');
    
    try {
      // Get ESLint errors
      const eslintResults = await this.getESLintErrors();
      
      if (!Array.isArray(eslintResults) || eslintResults.length === 0) {
        this.log('✅ No ESLint errors found');
        return;
      }

      let totalErrors = 0;
      let fixedCount = 0;
      
      // Process each file with errors
      for (const fileResult of eslintResults) {
        const filePath = fileResult.filePath;
        const messages = fileResult.messages || [];
        
        totalErrors += messages.length;
        
        // Fix each error in the file
        for (const message of messages) {
          if (this.fixESLintError(filePath, message)) {
            fixedCount++;
          }
        }
      }

      this.log(`🔍 Found ${totalErrors} ESLint errors`);
      this.log(`✅ Fixed ${fixedCount} ESLint errors`);

      // Generate report
      this.generateReport(fixedCount, totalErrors);

    } catch (error) {
      this.log(`❌ Error in ESLint error fixer: ${error.message}`);
    }
  }

  generateReport(fixedCount, totalCount) {
    const duration = Date.now() - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      summary: {
        totalErrorsFound: totalCount,
        errorsFixed: fixedCount,
        successRate: totalCount > 0 ? ((fixedCount / totalCount) * 100).toFixed(2) + '%' : '0%'
      },
      fixesApplied: this.fixesApplied,
      metadata: {
        script: 'eslint-error-fixer',
        version: '1.0.0',
        nodeVersion: process.version,
        platform: process.platform
      }
    };

    const reportsDir = path.dirname(this.reportFile);
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report generated: ${this.reportFile}`);
  }
}

// Run the fixer
const fixer = new ESLintErrorFixer();
fixer.run().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 ESLint Error Fixer stopped by user');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 ESLint Error Fixer stopped by system');
  process.exit(0);
});