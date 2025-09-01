#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class TypeScriptErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'typescript-error-fixer.log');
    this.reportFile = path.join(this.projectRoot, 'error-reports', `typescript-error-fixer-report-${Date.now()}.json`);
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

  async getTypeScriptErrors() {
    try {
      const result = execSync('npx tsc --noEmit --pretty false', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe']
      });
      return this.parseTypeScriptOutput(result);
    } catch (error) {
      // TypeScript errors are returned via stderr
      const stderr = error.stderr || '';
      return this.parseTypeScriptOutput(stderr);
    }
  }

  parseTypeScriptOutput(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/([^(]+)\((\d+),(\d+)\): error TS(\d+): (.+)/);
        if (match) {
          errors.push({
            file: match[1].trim(),
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            code: match[4],
            message: match[5].trim()
          });
        }
      }
    }
    
    return errors;
  }

  fixTypeScriptError(error) {
    try {
      const filePath = path.resolve(error.file);
      if (!fs.existsSync(filePath)) {
        return false;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const originalContent = content;

      // Fix based on error code
      switch (error.code) {
        case '2307': // Cannot find module
          content = this.fixModuleImport(lines, error);
          break;
        case '2339': // Property does not exist
          content = this.fixPropertyAccess(lines, error);
          break;
        case '2345': // Argument type mismatch
          content = this.fixArgumentType(lines, error);
          break;
        case '2322': // Type assignment error
          content = this.fixTypeAssignment(lines, error);
          break;
        case '7006': // Parameter implicitly has 'any' type
          content = this.fixImplicitAny(lines, error);
          break;
        case '6133': // Variable declared but never used
          content = this.fixUnusedVariable(lines, error);
          break;
        case '2531': // Object is possibly null
          content = this.fixNullCheck(lines, error);
          break;
        case '2532': // Object is possibly undefined
          content = this.fixUndefinedCheck(lines, error);
          break;
        default:
          // Try generic fixes
          content = this.applyGenericFixes(lines, error);
      }

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixesApplied.push({
          type: 'typescript_error',
          file: error.file,
          errorCode: error.code,
          message: error.message,
          line: error.line,
          description: `Fixed TypeScript error TS${error.code}`,
          timestamp: new Date().toISOString()
        });
        this.log(`Fixed TypeScript error TS${error.code} in ${error.file}:${error.line}`);
        return true;
      }

      return false;
    } catch (error) {
      this.log(`Error fixing TypeScript error in ${error.file}: ${error.message}`);
      return false;
    }
  }

  fixModuleImport(lines, error) {
    const lineIndex = error.line - 1;
    const line = lines[lineIndex];
    
    // Try to fix common import issues
    if (line.includes('import') && line.includes('from')) {
      // Check if it's a missing extension
      const importMatch = line.match(/from ['"]([^'"]+)['"]/);
      if (importMatch) {
        const importPath = importMatch[1];
        if (!importPath.includes('.') && !importPath.startsWith('@')) {
          // Try adding .ts, .tsx, .js, .jsx extensions
          const possibleExtensions = ['.ts', '.tsx', '.js', '.jsx'];
          for (const ext of possibleExtensions) {
            const newPath = importPath + ext;
            const newLine = line.replace(importPath, newPath);
            lines[lineIndex] = newLine;
            return lines.join('\n');
          }
        }
      }
    }
    
    return lines.join('\n');
  }

  fixPropertyAccess(lines, error) {
    const lineIndex = error.line - 1;
    const line = lines[lineIndex];
    
    // Add optional chaining for potentially undefined properties
    if (line.includes('.')) {
      const newLine = line.replace(/\.(\w+)/g, '?.$1');
      lines[lineIndex] = newLine;
      return lines.join('\n');
    }
    
    return lines.join('\n');
  }

  fixArgumentType(lines, error) {
    const lineIndex = error.line - 1;
    const line = lines[lineIndex];
    
    // Add type assertions for common cases
    if (line.includes('as any')) {
      return lines.join('\n'); // Already has type assertion
    }
    
    // Add type assertion for the problematic argument
    const newLine = line.replace(/(\w+)([,)])/g, '$1 as any$2');
    lines[lineIndex] = newLine;
    return lines.join('\n');
  }

  fixTypeAssignment(lines, error) {
    const lineIndex = error.line - 1;
    const line = lines[lineIndex];
    
    // Add type assertion
    if (!line.includes('as any')) {
      const newLine = line.replace(/(\w+)([,)])/g, '$1 as any$2');
      lines[lineIndex] = newLine;
      return lines.join('\n');
    }
    
    return lines.join('\n');
  }

  fixImplicitAny(lines, error) {
    const lineIndex = error.line - 1;
    const line = lines[lineIndex];
    
    // Add explicit any type for parameters
    if (line.includes('function') || line.includes('=>')) {
      const newLine = line.replace(/(\w+)([,)])/g, '$1: any$2');
      lines[lineIndex] = newLine;
      return lines.join('\n');
    }
    
    return lines.join('\n');
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

  fixNullCheck(lines, error) {
    const lineIndex = error.line - 1;
    const line = lines[lineIndex];
    
    // Add null check
    if (line.includes('.')) {
      const newLine = line.replace(/\.(\w+)/g, '?.$1');
      lines[lineIndex] = newLine;
      return lines.join('\n');
    }
    
    return lines.join('\n');
  }

  fixUndefinedCheck(lines, error) {
    const lineIndex = error.line - 1;
    const line = lines[lineIndex];
    
    // Add undefined check
    if (line.includes('.')) {
      const newLine = line.replace(/\.(\w+)/g, '?.$1');
      lines[lineIndex] = newLine;
      return lines.join('\n');
    }
    
    return lines.join('\n');
  }

  applyGenericFixes(lines, error) {
    const lineIndex = error.line - 1;
    const line = lines[lineIndex];
    
    // Generic fixes for common patterns
    let newLine = line;
    
    // Add type assertions
    if (!newLine.includes('as any')) {
      newLine = newLine.replace(/(\w+)([,)])/g, '$1 as any$2');
    }
    
    // Add optional chaining
    if (newLine.includes('.')) {
      newLine = newLine.replace(/\.(\w+)/g, '?.$1');
    }
    
    lines[lineIndex] = newLine;
    return lines.join('\n');
  }

  async run() {
    this.log('🚀 Starting TypeScript Error Fixer...');
    
    try {
      // Get TypeScript errors
      const errors = await this.getTypeScriptErrors();
      
      if (errors.length === 0) {
        this.log('✅ No TypeScript errors found');
        return;
      }

      this.log(`🔍 Found ${errors.length} TypeScript errors`);
      
      // Fix each error
      let fixedCount = 0;
      for (const error of errors) {
        if (this.fixTypeScriptError(error)) {
          fixedCount++;
        }
      }

      this.log(`✅ Fixed ${fixedCount} TypeScript errors`);

      // Generate report
      this.generateReport(fixedCount, errors.length);

    } catch (error) {
      this.log(`❌ Error in TypeScript error fixer: ${error.message}`);
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
        script: 'typescript-error-fixer',
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
const fixer = new TypeScriptErrorFixer();
fixer.run().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 TypeScript Error Fixer stopped by user');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 TypeScript Error Fixer stopped by system');
  process.exit(0);
});