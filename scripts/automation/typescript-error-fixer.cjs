#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class TypeScriptErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.fixesApplied = [];
    this.setupLogging();
  }

  setupLogging() {
    this.logger = {
      info: (msg) => this.log('INFO', msg),
      warn: (msg) => this.log('WARN', msg),
      error: (msg) => this.log('ERROR', msg),
      success: (msg) => this.log('SUCCESS', msg)
    };
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logEntry);
    
    // Write to log file
    const logFile = path.join(this.logsDir, 'typescript-error-fixer.log');
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
    fs.appendFileSync(logFile, logEntry + '\n');
  }

  async fixAllTypeScriptErrors() {
    this.logger.info('Starting TypeScript error fixing process...');
    
    try {
      // Get current TypeScript errors
      const errors = await this.getTypeScriptErrors();
      
      if (errors.length === 0) {
        this.logger.success('No TypeScript errors found!');
        return;
      }
      
      this.logger.info(`Found ${errors.length} TypeScript errors to fix`);
      
      // Group errors by file
      const errorsByFile = this.groupErrorsByFile(errors);
      
      // Fix errors in each file
      for (const [filePath, fileErrors] of errorsByFile) {
        await this.fixErrorsInFile(filePath, fileErrors);
      }
      
      // Verify fixes
      await this.verifyFixes();
      
      this.logger.success(`TypeScript error fixing completed. Applied ${this.fixesApplied.length} fixes.`);
      
    } catch (error) {
      this.logger.error(`Error during TypeScript fixing: ${error.message}`);
    }
  }

  async getTypeScriptErrors() {
    try {
      const result = execSync('npm run type-check', { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return [];
    } catch (error) {
      const output = error.stdout?.toString() || error.stderr?.toString() || '';
      return this.parseTypeScriptErrors(output);
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      const match = line.match(/([^:]+):(\d+):(\d+)\s*-\s*error\s+TS\d+:\s*(.+)/);
      if (match) {
        errors.push({
          file: match[1].trim(),
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          message: match[4].trim(),
          fullLine: line
        });
      }
    }
    
    return errors;
  }

  groupErrorsByFile(errors) {
    const grouped = new Map();
    
    for (const error of errors) {
      if (!grouped.has(error.file)) {
        grouped.set(error.file, []);
      }
      grouped.get(error.file).push(error);
    }
    
    return grouped;
  }

  async fixErrorsInFile(filePath, errors) {
    try {
      if (!fs.existsSync(filePath)) {
        this.logger.warn(`File not found: ${filePath}`);
        return;
      }
      
      let content = fs.readFileSync(filePath, 'utf8');
      let fixed = false;
      
      // Sort errors by line number (descending) to avoid line number shifts
      errors.sort((a, b) => b.line - a.line);
      
      for (const error of errors) {
        const fixResult = await this.fixError(content, error);
        if (fixResult.fixed) {
          content = fixResult.content;
          fixed = true;
          this.fixesApplied.push({
            file: filePath,
            error: error.message,
            fix: fixResult.description
          });
        }
      }
      
      if (fixed) {
        // Create backup
        const backupPath = filePath + '.tsbackup';
        fs.writeFileSync(backupPath, fs.readFileSync(filePath, 'utf8'));
        
        // Write fixed content
        fs.writeFileSync(filePath, content);
        this.logger.success(`Fixed errors in ${filePath}`);
      }
      
    } catch (error) {
      this.logger.error(`Failed to fix errors in ${filePath}: ${error.message}`);
    }
  }

  async fixError(content, error) {
    const lines = content.split('\n');
    const lineIndex = error.line - 1;
    
    if (lineIndex < 0 || lineIndex >= lines.length) {
      return { fixed: false, content, description: 'Line out of range' };
    }
    
    const line = lines[lineIndex];
    const errorMessage = error.message.toLowerCase();
    
    // Fix common TypeScript errors
    if (errorMessage.includes('type expected')) {
      return this.fixTypeExpected(lines, lineIndex, error);
    } else if (errorMessage.includes('identifier expected')) {
      return this.fixIdentifierExpected(lines, lineIndex, error);
    } else if (errorMessage.includes('parameter declaration expected')) {
      return this.fixParameterDeclarationExpected(lines, lineIndex, error);
    } else if (errorMessage.includes('unexpected token')) {
      return this.fixUnexpectedToken(lines, lineIndex, error);
    } else if (errorMessage.includes('jsx expressions must have one parent element')) {
      return this.fixJSXParentElement(lines, lineIndex, error);
    } else if (errorMessage.includes('expected corresponding jsx closing tag')) {
      return this.fixJSXClosingTag(lines, lineIndex, error);
    }
    
    return { fixed: false, content, description: 'No fix available for this error' };
  }

  fixTypeExpected(lines, lineIndex, error) {
    const line = lines[lineIndex];
    let fixed = false;
    let newLine = line;
    
    // Fix missing type annotations in function parameters
    const functionParamMatch = line.match(/function\s+\w+\s*\(([^)]*)\)/);
    if (functionParamMatch) {
      const params = functionParamMatch[1];
      if (params && !params.includes(':')) {
        const newParams = params.split(',').map(p => p.trim()).map(p => p + ': any').join(', ');
        newLine = line.replace(functionParamMatch[0], line.replace(params, newParams));
        fixed = true;
      }
    }
    
    // Fix missing type annotations in arrow functions
    const arrowFunctionMatch = line.match(/(\w+)\s*:\s*([^=]+)=>/);
    if (arrowFunctionMatch && !arrowFunctionMatch[2].includes(':')) {
      const paramName = arrowFunctionMatch[1];
      newLine = line.replace(arrowFunctionMatch[0], `${paramName}: any =>`);
      fixed = true;
    }
    
    // Fix missing return type annotations
    const functionMatch = line.match(/function\s+\w+\s*\([^)]*\)\s*\{/);
    if (functionMatch && !line.includes(':')) {
      newLine = line.replace('{', ': any {');
      fixed = true;
    }
    
    if (fixed) {
      lines[lineIndex] = newLine;
      return {
        fixed: true,
        content: lines.join('\n'),
        description: 'Added missing type annotations'
      };
    }
    
    return { fixed: false, content: lines.join('\n'), description: 'Could not fix type expected error' };
  }

  fixIdentifierExpected(lines, lineIndex, error) {
    const line = lines[lineIndex];
    let fixed = false;
    let newLine = line;
    
    // Fix missing function names
    if (line.trim().startsWith('function(')) {
      newLine = line.replace('function(', 'function anonymous(');
      fixed = true;
    }
    
    // Fix missing variable names
    if (line.trim().startsWith('const ') && line.includes('=') && !line.match(/const\s+\w+/)) {
      newLine = line.replace('const ', 'const unnamed_');
      fixed = true;
    }
    
    // Fix missing interface names
    if (line.trim().startsWith('interface ')) {
      const interfaceMatch = line.match(/interface\s+(\w+)/);
      if (!interfaceMatch) {
        newLine = line.replace('interface ', 'interface UnnamedInterface ');
        fixed = true;
      }
    }
    
    if (fixed) {
      lines[lineIndex] = newLine;
      return {
        fixed: true,
        content: lines.join('\n'),
        description: 'Added missing identifiers'
      };
    }
    
    return { fixed: false, content: lines.join('\n'), description: 'Could not fix identifier expected error' };
  }

  fixParameterDeclarationExpected(lines, lineIndex, error) {
    const line = lines[lineIndex];
    let fixed = false;
    let newLine = line;
    
    // Fix malformed function parameters
    if (line.includes('function') && line.includes('(') && line.includes(')')) {
      // Check if parameters are malformed
      const paramMatch = line.match(/function\s+\w+\s*\(([^)]*)\)/);
      if (paramMatch) {
        const params = paramMatch[1];
        if (params.includes('=') || params.includes(';')) {
          // Clean up malformed parameters
          const cleanParams = params.replace(/[=;]/g, '').trim();
          if (cleanParams) {
            newLine = line.replace(params, cleanParams);
          } else {
            newLine = line.replace(params, '');
          }
          fixed = true;
        }
      }
    }
    
    if (fixed) {
      lines[lineIndex] = newLine;
      return {
        fixed: true,
        content: lines.join('\n'),
        description: 'Fixed parameter declarations'
      };
    }
    
    return { fixed: false, content: lines.join('\n'), description: 'Could not fix parameter declaration error' };
  }

  fixUnexpectedToken(lines, lineIndex, error) {
    const line = lines[lineIndex];
    let fixed = false;
    let newLine = line;
    
    // Fix unexpected tokens in JSX
    if (line.includes('<>') && !line.includes('</>')) {
      // Find the closing JSX fragment
      let depth = 0;
      for (let i = lineIndex; i < lines.length; i++) {
        const currentLine = lines[i];
        if (currentLine.includes('<>')) depth++;
        if (currentLine.includes('</>')) depth--;
        if (depth === 0) break;
      }
      
      if (depth > 0) {
        // Add missing closing fragment
        const lastLine = lines[lines.length - 1];
        if (!lastLine.includes('</>')) {
          lines.push('</>');
          fixed = true;
        }
      }
    }
    
    // Fix unexpected tokens in object literals
    if (line.includes('{') && line.includes('}')) {
      // Check for malformed object properties
      const objectMatch = line.match(/\{([^}]*)\}/);
      if (objectMatch) {
        const props = objectMatch[1];
        if (props.includes('=') && !props.includes(':')) {
          // Convert to proper object syntax
          const fixedProps = props.split(',').map(p => {
            const [key, value] = p.split('=');
            return `${key.trim()}: ${value?.trim() || 'undefined'}`;
          }).join(', ');
          
          newLine = line.replace(props, fixedProps);
          fixed = true;
        }
      }
    }
    
    if (fixed) {
      lines[lineIndex] = newLine;
      return {
        fixed: true,
        content: lines.join('\n'),
        description: 'Fixed unexpected tokens'
      };
    }
    
    return { fixed: false, content: lines.join('\n'), description: 'Could not fix unexpected token error' };
  }

  fixJSXParentElement(lines, lineIndex, error) {
    // This is a complex fix that requires analyzing the entire JSX structure
    let fixed = false;
    let content = lines.join('\n');
    
    // Find JSX content and wrap it in a parent element
    const jsxMatch = content.match(/(<[^>]+>[\s\S]*<\/[^>]+>)/);
    if (jsxMatch) {
      const jsxContent = jsxMatch[1];
      const wrappedContent = `<div>\n${jsxContent}\n</div>`;
      content = content.replace(jsxContent, wrappedContent);
      fixed = true;
    }
    
    if (fixed) {
      return {
        fixed: true,
        content,
        description: 'Wrapped JSX in parent element'
      };
    }
    
    return { fixed: false, content: lines.join('\n'), description: 'Could not fix JSX parent element error' };
  }

  fixJSXClosingTag(lines, lineIndex, error) {
    let fixed = false;
    let content = lines.join('\n');
    
    // Find unclosed JSX tags and add closing tags
    const openTags = content.match(/<(\w+)[^>]*>/g) || [];
    const closeTags = content.match(/<\/(\w+)>/g) || [];
    
    if (openTags.length > closeTags.length) {
      // Add missing close tags
      const missingTags = openTags.slice(closeTags.length).reverse();
      for (const tag of missingTags) {
        const tagName = tag.match(/<(\w+)/)?.[1];
        if (tagName) {
          content += `\n</${tagName}>`;
          fixed = true;
        }
      }
    }
    
    if (fixed) {
      return {
        fixed: true,
        content,
        description: 'Added missing JSX closing tags'
      };
    }
    
    return { fixed: false, content: lines.join('\n'), description: 'Could not fix JSX closing tag error' };
  }

  async verifyFixes() {
    this.logger.info('Verifying fixes...');
    
    try {
      const remainingErrors = await this.getTypeScriptErrors();
      
      if (remainingErrors.length === 0) {
        this.logger.success('All TypeScript errors have been fixed!');
      } else {
        this.logger.warn(`${remainingErrors.length} TypeScript errors remain`);
        this.logger.info('Remaining errors:');
        remainingErrors.forEach(error => {
          this.logger.info(`  ${error.file}:${error.line} - ${error.message}`);
        });
      }
      
    } catch (error) {
      this.logger.error(`Error during verification: ${error.message}`);
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalFixes: this.fixesApplied.length,
      fixesByFile: {},
      summary: {
        syntaxErrors: 0,
        typeErrors: 0,
        jsxErrors: 0
      }
    };
    
    // Group fixes by file
    for (const fix of this.fixesApplied) {
      if (!report.fixesByFile[fix.file]) {
        report.fixesByFile[fix.file] = [];
      }
      report.fixesByFile[fix.file].push(fix);
      
      // Categorize fixes
      if (fix.fix.includes('type')) report.summary.typeErrors++;
      else if (fix.fix.includes('JSX')) report.summary.jsxErrors++;
      else report.summary.syntaxErrors++;
    }
    
    return report;
  }

  async run() {
    const command = process.argv[2] || 'fix';
    
    switch (command) {
      case 'fix':
        await this.fixAllTypeScriptErrors();
        break;
      case 'report':
        const report = this.generateReport();
        console.log(JSON.stringify(report, null, 2));
        break;
      case 'status':
        const errors = await this.getTypeScriptErrors();
        console.log(`Current TypeScript errors: ${errors.length}`);
        break;
      default:
        console.log('Usage: node typescript-error-fixer.cjs [fix|report|status]');
        process.exit(1);
    }
  }
}

// CLI interface
if (require.main === module) {
  const fixer = new TypeScriptErrorFixer();
  fixer.run().catch(error => {
    console.error('Error:', error.message);
    process.exit(1);
  });
}

module.exports = TypeScriptErrorFixer;