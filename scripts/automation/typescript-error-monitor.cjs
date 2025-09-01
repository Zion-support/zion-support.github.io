#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class TypeScriptErrorMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.srcDir = path.join(this.projectRoot, 'src');
    this.fixesApplied = [];
    this.errorsFound = [];
  }

  async run() {
    console.log('🔍 Starting TypeScript Error Monitor...');
    
    try {
      // Check for TypeScript errors
      const errors = await this.checkTypeScriptErrors();
      
      if (errors.length > 0) {
        console.log(`⚠️  Found ${errors.length} TypeScript errors`);
        
        // Fix common TypeScript errors
        await this.fixTypeScriptErrors(errors);
        
        // Generate report
        await this.generateReport();
      } else {
        console.log('✅ No TypeScript errors found');
      }
    } catch (error) {
      console.error('❌ TypeScript Error Monitor failed:', error);
    }
  }

  async checkTypeScriptErrors() {
    try {
      const result = execSync('npx tsc --noEmit --pretty false', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      return [];
    } catch (error) {
      const errorOutput = error.stdout || error.stderr || '';
      return this.parseTypeScriptErrors(errorOutput);
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      const match = line.match(/^([^(]+)\((\d+),(\d+)\): (.+)$/);
      if (match) {
        errors.push({
          file: match[1].trim(),
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          message: match[4].trim()
        });
      }
    }
    
    return errors;
  }

  async fixTypeScriptErrors(errors) {
    console.log('🔧 Fixing TypeScript errors...');
    
    for (const error of errors) {
      try {
        await this.fixSingleError(error);
      } catch (error) {
        console.warn(`Warning: Could not fix error in ${error.file}:`, error.message);
      }
    }
  }

  async fixSingleError(error) {
    const { file, line, message } = error;
    
    if (!file || !fs.existsSync(file)) return;
    
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    // Fix common TypeScript errors
    if (message.includes('Property \'default\' is missing')) {
      await this.fixMissingDefaultExport(file, content);
    } else if (message.includes('Cannot redeclare block-scoped variable')) {
      await this.fixDuplicateDeclaration(file, content, message);
    } else if (message.includes('Module \'') && message.includes('\' has no exported member')) {
      await this.fixImportError(file, content, message);
    } else if (message.includes('Type \'') && message.includes('\' is not assignable to type')) {
      await this.fixTypeMismatch(file, content, message);
    } else if (message.includes('Object is possibly \'undefined\'')) {
      await this.fixUndefinedCheck(file, content, line);
    }
  }

  async fixMissingDefaultExport(file, content) {
    const fileName = path.basename(file, path.extname(file));
    
    if (!this.hasDefaultExport(content)) {
      const fixedContent = this.addDefaultExport(content, fileName);
      fs.writeFileSync(file, fixedContent);
      
      this.fixesApplied.push({
        type: 'missing_default_export',
        file: path.relative(this.projectRoot, file),
        description: `Added missing default export for ${fileName}`
      });
    }
  }

  async fixDuplicateDeclaration(file, content, message) {
    const match = message.match(/Cannot redeclare block-scoped variable '(\w+)'/);
    if (!match) return;
    
    const variableName = match[1];
    const fixedContent = this.removeDuplicateDeclaration(content, variableName);
    
    if (fixedContent !== content) {
      fs.writeFileSync(file, fixedContent);
      
      this.fixesApplied.push({
        type: 'duplicate_declaration',
        file: path.relative(this.projectRoot, file),
        description: `Removed duplicate declaration of ${variableName}`
      });
    }
  }

  async fixImportError(file, content, message) {
    const match = message.match(/Module '([^']+)' has no exported member '([^']+)'/);
    if (!match) return;
    
    const [, modulePath, memberName] = match;
    const fixedContent = this.fixImportStatement(content, modulePath, memberName);
    
    if (fixedContent !== content) {
      fs.writeFileSync(file, fixedContent);
      
      this.fixesApplied.push({
        type: 'import_error',
        file: path.relative(this.projectRoot, file),
        description: `Fixed import error for ${memberName} from ${modulePath}`
      });
    }
  }

  async fixTypeMismatch(file, content, message) {
    // Fix common type mismatches
    let fixedContent = content;
    
    // Fix React.FC type issues
    fixedContent = fixedContent.replace(
      /const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\)\s*=>/g,
      'const $1 = () =>'
    );
    
    // Fix any type issues
    fixedContent = fixedContent.replace(
      /:\s*any\s*([,=])/g,
      '$1'
    );
    
    if (fixedContent !== content) {
      fs.writeFileSync(file, fixedContent);
      
      this.fixesApplied.push({
        type: 'type_mismatch',
        file: path.relative(this.projectRoot, file),
        description: 'Fixed type mismatch issues'
      });
    }
  }

  async fixUndefinedCheck(file, content, lineNumber) {
    const lines = content.split('\n');
    const lineIndex = lineNumber - 1;
    
    if (lineIndex >= 0 && lineIndex < lines.length) {
      const line = lines[lineIndex];
      
      // Add optional chaining or null check
      if (line.includes('.')) {
        const fixedLine = line.replace(/(\w+)\.(\w+)/g, '$1?.$2');
        lines[lineIndex] = fixedLine;
        
        const fixedContent = lines.join('\n');
        fs.writeFileSync(file, fixedContent);
        
        this.fixesApplied.push({
          type: 'undefined_check',
          file: path.relative(this.projectRoot, file),
          description: `Added undefined check at line ${lineNumber}`
        });
      }
    }
  }

  hasDefaultExport(content) {
    return /export\s+default/.test(content);
  }

  addDefaultExport(content, componentName) {
    if (content.trim().endsWith('export default ' + componentName + ';')) {
      return content;
    }
    return content + '\n\nexport default ' + componentName + ';';
  }

  removeDuplicateDeclaration(content, variableName) {
    const lines = content.split('\n');
    const declarations = [];
    
    lines.forEach((line, index) => {
      if (new RegExp(`(const|let|var)\\s+${variableName}\\s*=`).test(line)) {
        declarations.push(index);
      }
    });
    
    if (declarations.length > 1) {
      for (let i = declarations.length - 1; i > 0; i--) {
        lines.splice(declarations[i], 1);
      }
      return lines.join('\n');
    }
    
    return content;
  }

  fixImportStatement(content, modulePath, memberName) {
    // Try to fix by changing named import to default import
    const namedImportRegex = new RegExp(`import\\s*{\\s*${memberName}\\s*}\\s*from\\s*['"]${modulePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`, 'g');
    
    if (namedImportRegex.test(content)) {
      return content.replace(namedImportRegex, `import ${memberName} from '${modulePath}'`);
    }
    
    return content;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      fixesApplied: this.fixesApplied,
      errorsFound: this.errorsFound,
      summary: {
        totalFixes: this.fixesApplied.length,
        totalErrors: this.errorsFound.length
      }
    };
    
    const reportPath = path.join(this.projectRoot, 'error-reports', `typescript-error-monitor-${Date.now()}.json`);
    
    // Ensure reports directory exists
    const reportsDir = path.dirname(reportPath);
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Report generated: ${reportPath}`);
    console.log(`📈 Fixes applied: ${this.fixesApplied.length}`);
  }
}

// Run the monitor
const monitor = new TypeScriptErrorMonitor();
monitor.startTime = Date.now();
monitor.run().catch(console.error);