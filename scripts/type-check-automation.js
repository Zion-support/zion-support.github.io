#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class TypeCheckAutomation {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.logFile = path.join(this.projectRoot, 'logs', 'type-check-automation.log');
    this.typeCheckReportFile = path.join(this.projectRoot, 'logs', 'type-check-report.json');
    this.fixedErrors = [];
    this.remainingErrors = [];
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Append to log file
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
      return { success: false, error: error.message, output: error.stdout || '' };
    }
  }

  async runTypeCheck() {
    this.log('🔍 Running TypeScript type checking...');
    
    const typeCheckResult = await this.runCommand('npm run type-check', { silent: true });
    
    if (typeCheckResult.success) {
      this.log('✅ No TypeScript errors found');
      return { success: true, errors: [] };
    }
    
    // Parse TypeScript output
    const errors = this.parseTypeCheckOutput(typeCheckResult.output);
    this.log(`Found ${errors.length} TypeScript errors`);
    
    return { success: false, errors };
  }

  parseTypeCheckOutput(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/([^:]+):(\d+):(\d+)\s*-\s*error\s+TS\d+:\s*(.+)/);
        if (match) {
          errors.push({
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4],
            category: this.categorizeError(match[4]),
            tsCode: this.extractTSCode(line)
          });
        }
      }
    }
    
    return errors;
  }

  extractTSCode(line) {
    const match = line.match(/error\s+(TS\d+):/);
    return match ? match[1] : null;
  }

  categorizeError(message) {
    if (message.includes('JSX expressions must have one parent element')) {
      return 'jsx-parent-element';
    } else if (message.includes('JSX element') && message.includes('has no corresponding closing tag')) {
      return 'jsx-closing-tags';
    } else if (message.includes('is not defined')) {
      return 'undefined-references';
    } else if (message.includes('Cannot find module')) {
      return 'module-not-found';
    } else if (message.includes('Type') && message.includes('is not assignable')) {
      return 'type-mismatch';
    } else if (message.includes('Property') && message.includes('does not exist')) {
      return 'property-access';
    } else if (message.includes('Expected') && message.includes('got')) {
      return 'syntax-error';
    } else {
      return 'other';
    }
  }

  async fixTypeErrors(errors) {
    this.log('🔧 Starting automatic TypeScript error fixing...');
    
    let fixedCount = 0;
    
    for (const error of errors) {
      try {
        if (await this.fixTypeError(error)) {
          fixedCount++;
          this.fixedErrors.push({
            ...error,
            fixMethod: 'automatic',
            timestamp: new Date().toISOString()
          });
        } else {
          this.remainingErrors.push({
            ...error,
            timestamp: new Date().toISOString()
          });
        }
      } catch (error) {
        this.log(`Failed to fix TypeScript error: ${error.message}`, 'ERROR');
        this.remainingErrors.push({
          ...error,
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return fixedCount;
  }

  async fixTypeError(error) {
    const filePath = path.join(this.projectRoot, error.file);
    
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    switch (error.category) {
      case 'jsx-parent-element':
        modified = this.fixJSXParentElement(content, error);
        break;
        
      case 'jsx-closing-tags':
        modified = this.fixJSXClosingTags(content, error);
        break;
        
      case 'undefined-references':
        modified = this.fixUndefinedReferences(content, error);
        break;
        
      case 'module-not-found':
        modified = this.fixModuleNotFound(content, error);
        break;
        
      case 'type-mismatch':
        modified = this.fixTypeMismatch(content, error);
        break;
        
      case 'property-access':
        modified = this.fixPropertyAccess(content, error);
        break;
        
      case 'syntax-error':
        modified = this.fixSyntaxError(content, error);
        break;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  }

  fixJSXParentElement(content, error) {
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    
    if (lineIndex >= 0 && lineIndex < lines.length) {
      // Find the start of JSX content and wrap it
      let jsxStart = -1;
      for (let i = lineIndex; i >= 0; i--) {
        if (lines[i].includes('<') && !lines[i].includes('import') && !lines[i].includes('export')) {
          jsxStart = i;
          break;
        }
      }
      
      if (jsxStart !== -1) {
        lines.splice(jsxStart, 0, '  <div>');
        // Find the end and add closing tag
        for (let i = jsxStart + 1; i < lines.length; i++) {
          if (lines[i].includes('return') || lines[i].includes('export')) {
            lines.splice(i, 0, '  </div>');
            break;
          }
        }
        return true;
      }
    }
    
    return false;
  }

  fixJSXClosingTags(content, error) {
    // This is a simplified approach - in practice, you'd need more sophisticated JSX parsing
    this.log(`JSX closing tag issue detected in ${error.file} at line ${error.line} - requires manual review`, 'WARN');
    return false;
  }

  fixUndefinedReferences(content, error) {
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    
    if (lineIndex >= 0 && lineIndex < lines.length) {
      const line = lines[lineIndex];
      
      // Check if it's a missing import
      if (line.includes('import') && line.includes('from')) {
        // Fix malformed import statements
        const fixedLine = line.replace(/import:\s*{([^}]+)},\s*from,\s*'([^']+)':\s*,/g, 
          "import { $1 } from '$2';");
        if (fixedLine !== line) {
          lines[lineIndex] = fixedLine;
          return true;
        }
      }
      
      // Check if it's a missing variable declaration
      if (line.includes('const') || line.includes('let') || line.includes('var')) {
        // Fix malformed variable declarations
        const fixedLine = line.replace(/const:\s*([^=]+)=/g, 'const $1 =');
        if (fixedLine !== line) {
          lines[lineIndex] = fixedLine;
          return true;
        }
      }
    }
    
    return false;
  }

  fixModuleNotFound(content, error) {
    // This would typically require installing the missing module
    // For now, we'll just log it for manual review
    this.log(`Module not found issue in ${error.file} - requires manual dependency installation`, 'WARN');
    return false;
  }

  fixTypeMismatch(content, error) {
    // This is a simplified approach - in practice, you'd need more sophisticated type analysis
    this.log(`Type mismatch issue in ${error.file} at line ${error.line} - requires manual review`, 'WARN');
    return false;
  }

  fixPropertyAccess(content, error) {
    // This is a simplified approach - in practice, you'd need more sophisticated type analysis
    this.log(`Property access issue in ${error.file} at line ${error.line} - requires manual review`, 'WARN');
    return false;
  }

  fixSyntaxError(content, error) {
    // This is a simplified approach - in practice, you'd need more sophisticated parsing
    this.log(`Syntax error in ${error.file} at line ${error.line} - requires manual review`, 'WARN');
    return false;
  }

  async runBuildCheck() {
    this.log('🔍 Running build check...');
    
    const buildResult = await this.runCommand('npm run build', { silent: true });
    
    if (buildResult.success) {
      this.log('✅ Build completed successfully');
      return true;
    } else {
      this.log('⚠️ Build failed - some TypeScript errors may remain', 'WARN');
      return false;
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalErrors: this.fixedErrors.length + this.remainingErrors.length,
        fixedErrors: this.fixedErrors.length,
        remainingErrors: this.remainingErrors.length,
        successRate: this.fixedErrors.length / (this.fixedErrors.length + this.remainingErrors.length) * 100
      },
      fixedErrors: this.fixedErrors,
      remainingErrors: this.remainingErrors,
      categories: this.analyzeCategories()
    };
    
    // Save report
    fs.writeFileSync(this.typeCheckReportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Type check report generated: ${this.fixedErrors.length} errors fixed, ${this.remainingErrors.length} remaining`);
    return report;
  }

  analyzeCategories() {
    const categories = {};
    
    [...this.fixedErrors, ...this.remainingErrors].forEach(error => {
      if (!categories[error.category]) {
        categories[error.category] = { total: 0, fixed: 0, remaining: 0 };
      }
      categories[error.category].total++;
      
      if (this.fixedErrors.some(fixed => fixed.file === error.file && fixed.line === error.line)) {
        categories[error.category].fixed++;
      } else {
        categories[error.category].remaining++;
      }
    });
    
    return categories;
  }

  async run() {
    this.log('🚀 Starting TypeScript Type Check Automation');
    
    try {
      // Run initial type checking
      const typeCheckResult = await this.runTypeCheck();
      
      if (typeCheckResult.success) {
        this.log('✅ No TypeScript errors found');
        return;
      }
      
      // Fix errors automatically
      const fixedCount = await this.fixTypeErrors(typeCheckResult.errors);
      this.log(`Fixed ${fixedCount} TypeScript errors automatically`);
      
      // Run build check to verify fixes
      const buildSuccess = await this.runBuildCheck();
      
      // Generate final report
      const report = await this.generateReport();
      
      this.log(`✅ Type check automation completed! Fixed ${fixedCount} out of ${typeCheckResult.errors.length} errors`);
      
      // If there are still errors, log them for manual review
      if (this.remainingErrors.length > 0) {
        this.log(`⚠️ ${this.remainingErrors.length} TypeScript errors require manual review:`, 'WARN');
        this.remainingErrors.forEach(error => {
          this.log(`  - ${error.file}:${error.line} - ${error.message}`, 'WARN');
        });
      }
      
      if (!buildSuccess) {
        this.log('⚠️ Build check failed - some TypeScript errors may still exist', 'WARN');
      }
      
    } catch (error) {
      this.log(`❌ Error in type check automation: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the type check automation
if (import.meta.url === `file://${process.argv[1]}`) {
  const automation = new TypeCheckAutomation();
  automation.run().catch(console.error);
}

export default TypeCheckAutomation;