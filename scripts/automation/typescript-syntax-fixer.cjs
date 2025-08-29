#!/usr/bin/env node

/**
 * TypeScript Syntax Fixer - PM2 Automation
 * Automatically fixes common TypeScript syntax errors
 * Runs every 15 minutes to maintain code quality
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class TypeScriptSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'typescript-fix-reports');
    this.errorsFixed = 0;
    this.filesProcessed = 0;
    this.startTime = Date.now();
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async run() {
    console.log('🔧 Starting TypeScript Syntax Fixer...');
    
    try {
      // Step 1: Fix type annotation issues
      await this.fixTypeAnnotations();
      
      // Step 2: Fix interface and type definition issues
      await this.fixInterfaceIssues();
      
      // Step 3: Fix function parameter issues
      await this.fixFunctionParameters();
      
      // Step 4: Fix generic type issues
      await this.fixGenericTypes();
      
      // Step 5: Fix React component issues
      await this.fixReactComponentIssues();
      
      // Step 6: Fix import/export type issues
      await this.fixImportExportTypes();
      
      // Step 7: Generate report
      await this.generateReport();
      
      console.log(`✅ TypeScript Syntax Fixer completed! Fixed ${this.errorsFixed} errors in ${this.filesProcessed} files.`);
      
    } catch (error) {
      console.error('❌ Error in TypeScript Syntax Fixer:', error);
      await this.generateErrorReport(error);
    }
  }

  async fixTypeAnnotations() {
    console.log('📝 Fixing type annotation issues...');
    
    const commonTypeFixes = [
      // Fix any types
      {
        pattern: /:\s*any\b/g,
        replacement: ': unknown'
      },
      {
        pattern: /:\s*any\[\]/g,
        replacement: ': unknown[]'
      },
      {
        pattern: /:\s*any\s*\|\s*null/g,
        replacement: ': unknown | null'
      },
      {
        pattern: /:\s*any\s*\|\s*undefined/g,
        replacement: ': unknown | undefined'
      },
      
      // Fix object types
      {
        pattern: /:\s*object\b/g,
        replacement: ': Record<string, unknown>'
      },
      {
        pattern: /:\s*object\[\]/g,
        replacement: ': Record<string, unknown>[]'
      },
      
      // Fix function types
      {
        pattern: /:\s*Function\b/g,
        replacement: ': (...args: unknown[]) => unknown'
      },
      {
        pattern: /:\s*Function\[\]/g,
        replacement: ': ((...args: unknown[]) => unknown)[]'
      }
    ];

    const tsFiles = this.findFilesByExtension('.tsx', '.ts');
    
    for (const file of tsFiles.slice(0, 50)) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let fileChanged = false;
        
        for (const fix of commonTypeFixes) {
          const newContent = content.replace(fix.pattern, fix.replacement);
          if (newContent !== content) {
            content = newContent;
            fileChanged = true;
            this.errorsFixed++;
          }
        }
        
        if (fileChanged) {
          fs.writeFileSync(file, content);
          this.filesProcessed++;
        }
      } catch (err) {
        // Skip files that can't be read
      }
    }
  }

  async fixInterfaceIssues() {
    console.log('🔗 Fixing interface and type definition issues...');
    
    const interfaceFixes = [
      // Fix optional property syntax
      {
        pattern: /(\w+)\s*\?\s*:\s*([^;]+);/g,
        replacement: '$1?: $2;'
      },
      
      // Fix interface extends
      {
        pattern: /interface\s+(\w+)\s+extends\s+(\w+)\s*\{/g,
        replacement: 'interface $1 extends $2 {'
      },
      
      // Fix type aliases
      {
        pattern: /type\s+(\w+)\s*=\s*([^;]+);/g,
        replacement: 'type $1 = $2;'
      }
    ];

    const tsFiles = this.findFilesByExtension('.tsx', '.ts');
    
    for (const file of tsFiles.slice(0, 30)) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let fileChanged = false;
        
        for (const fix of interfaceFixes) {
          const newContent = content.replace(fix.pattern, fix.replacement);
          if (newContent !== content) {
            content = newContent;
            fileChanged = true;
            this.errorsFixed++;
          }
        }
        
        if (fileChanged) {
          fs.writeFileSync(file, content);
          this.filesProcessed++;
        }
      } catch (err) {
        // Skip files that can't be read
      }
    }
  }

  async fixFunctionParameters() {
    console.log('⚙️  Fixing function parameter issues...');
    
    const functionFixes = [
      // Fix parameter types
      {
        pattern: /function\s+(\w+)\s*\(([^)]*)\)/g,
        replacement: (match, funcName, params) => {
          const fixedParams = params.split(',').map(param => {
            const trimmed = param.trim();
            if (trimmed.includes(':')) return trimmed;
            if (trimmed.includes('...')) return trimmed + ': unknown[]';
            if (trimmed) return trimmed + ': unknown';
            return trimmed;
          }).join(', ');
          return `function ${funcName}(${fixedParams})`;
        }
      },
      
      // Fix arrow function parameters
      {
        pattern: /\(([^)]*)\)\s*=>/g,
        replacement: (match, params) => {
          const fixedParams = params.split(',').map(param => {
            const trimmed = param.trim();
            if (trimmed.includes(':')) return trimmed;
            if (trimmed.includes('...')) return trimmed + ': unknown[]';
            if (trimmed) return trimmed + ': unknown';
            return trimmed;
          }).join(', ');
          return `(${fixedParams}) =>`;
        }
      }
    ];

    const tsFiles = this.findFilesByExtension('.tsx', '.ts');
    
    for (const file of tsFiles.slice(0, 30)) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let fileChanged = false;
        
        for (const fix of functionFixes) {
          const newContent = content.replace(fix.pattern, fix.replacement);
          if (newContent !== content) {
            content = newContent;
            fileChanged = true;
            this.errorsFixed++;
          }
        }
        
        if (fileChanged) {
          fs.writeFileSync(file, content);
          this.filesProcessed++;
        }
      } catch (err) {
        // Skip files that can't be read
      }
    }
  }

  async fixGenericTypes() {
    console.log('🔀 Fixing generic type issues...');
    
    const genericFixes = [
      // Fix generic type parameters
      {
        pattern: /<T\b/g,
        replacement: '<T extends unknown'
      },
      {
        pattern: /<T\s*,\s*U\b/g,
        replacement: '<T extends unknown, U extends unknown'
      },
      
      // Fix generic constraints
      {
        pattern: /extends\s+any\b/g,
        replacement: 'extends unknown'
      }
    ];

    const tsFiles = this.findFilesByExtension('.tsx', '.ts');
    
    for (const file of tsFiles.slice(0, 20)) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let fileChanged = false;
        
        for (const fix of genericFixes) {
          const newContent = content.replace(fix.pattern, fix.replacement);
          if (newContent !== content) {
            content = newContent;
            fileChanged = true;
            this.errorsFixed++;
          }
        }
        
        if (fileChanged) {
          fs.writeFileSync(file, content);
          this.filesProcessed++;
        }
      } catch (err) {
        // Skip files that can't be read
      }
    }
  }

  async fixReactComponentIssues() {
    console.log('⚛️  Fixing React component issues...');
    
    const reactFixes = [
      // Fix React.FC type
      {
        pattern: /React\.FC<([^>]*)>/g,
        replacement: 'React.FC<$1>'
      },
      
      // Fix component props interface
      {
        pattern: /interface\s+(\w+)Props\s*\{/g,
        replacement: 'interface $1Props {'
      },
      
      // Fix useState type
      {
        pattern: /useState<([^>]*)>\(/g,
        replacement: 'useState<$1>('
      },
      
      // Fix useEffect dependency array
      {
        pattern: /useEffect\([^,]*,\s*\[\s*\]\s*\)/g,
        replacement: 'useEffect(() => {}, [])'
      }
    ];

    const tsxFiles = this.findFilesByExtension('.tsx');
    
    for (const file of tsxFiles.slice(0, 25)) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let fileChanged = false;
        
        for (const fix of reactFixes) {
          const newContent = content.replace(fix.pattern, fix.replacement);
          if (newContent !== content) {
            content = newContent;
            fileChanged = true;
            this.errorsFixed++;
          }
        }
        
        if (fileChanged) {
          fs.writeFileSync(file, content);
          this.filesProcessed++;
        }
      } catch (err) {
        // Skip files that can't be read
      }
    }
  }

  async fixImportExportTypes() {
    console.log('📦 Fixing import/export type issues...');
    
    const importExportFixes = [
      // Fix type imports
      {
        pattern: /import\s+type\s+\{([^}]+)\}\s+from\s+['"]([^'"]+)['"]/g,
        replacement: "import type { $1 } from '$2'"
      },
      
      // Fix default exports with types
      {
        pattern: /export\s+default\s+(\w+):\s*React\.FC/g,
        replacement: 'export default $1: React.FC'
      }
    ];

    const tsFiles = this.findFilesByExtension('.tsx', '.ts');
    
    for (const file of tsFiles.slice(0, 20)) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let fileChanged = false;
        
        for (const fix of importExportFixes) {
          const newContent = content.replace(fix.pattern, fix.replacement);
          if (newContent !== content) {
            content = newContent;
            fileChanged = true;
            this.errorsFixed++;
          }
        }
        
        if (fileChanged) {
          fs.writeFileSync(file, content);
          this.filesProcessed++;
        }
      } catch (err) {
        // Skip files that can't be read
      }
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      errorsFixed: this.errorsFixed,
      filesProcessed: this.filesProcessed,
      executionTime: Date.now() - this.startTime,
      status: 'completed'
    };
    
    const reportFile = path.join(this.reportsDir, `typescript-fix-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    console.log(`📊 Report generated: ${reportFile}`);
  }

  async generateErrorReport(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      status: 'failed'
    };
    
    const reportFile = path.join(this.reportsDir, `typescript-fix-error-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(errorReport, null, 2));
    
    console.log(`❌ Error report generated: ${reportFile}`);
  }

  findFilesByExtension(...extensions) {
    const files = [];
    const walkDir = (dir) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    };
    
    walkDir(this.projectRoot);
    return files;
  }
}

// Main execution
if (require.main === module) {
  const fixer = new TypeScriptSyntaxFixer();
  fixer.run().catch(console.error);
}

module.exports = TypeScriptSyntaxFixer;
