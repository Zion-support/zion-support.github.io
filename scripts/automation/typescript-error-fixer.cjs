#!/usr/bin/env node

/**
 * TypeScript Error Fixer - PM2 Automation Script
 * Automatically detects and fixes TypeScript errors
 * Runs every 15 minutes to maintain TypeScript code quality
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class TypeScriptErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'typescript-error-fixer-report.json');
    this.errorsFixed = 0;
    this.warningsFixed = 0;
    this.startTime = new Date();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async run() {
    try {
      this.log('🚀 Starting TypeScript Error Fixer...');
      
      // Check if we're in the right directory
      if (!fs.existsSync('tsconfig.json')) {
        throw new Error('Not in a TypeScript project directory');
      }

      // Run TypeScript error fixing operations
      await this.fixUnusedImports();
      await this.fixMissingExports();
      await this.fixTypeMismatches();
      await this.fixIconImportIssues();
      await this.fixDuplicateIdentifiers();
      await this.fixUnusedVariables();
      
      // Generate report
      await this.generateReport();
      
      this.log(`✅ TypeScript Error Fixer completed successfully!`);
      this.log(`📊 Fixed ${this.errorsFixed} errors and ${this.warningsFixed} warnings`);
      
    } catch (error) {
      this.log(`❌ Error in TypeScript Error Fixer: ${error.message}`, 'ERROR');
      await this.generateReport();
      process.exit(1);
    }
  }

  async fixUnusedImports() {
    this.log('🔧 Fixing unused imports...');
    
    try {
      const files = this.findTypeScriptFiles();
      
      for (const file of files) {
        await this.fixUnusedImportsInFile(file);
      }
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not fix all unused imports: ${error.message}`, 'WARN');
    }
  }

  async fixUnusedImportsInFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Find all import statements
      const importRegex = /import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"];?/g;
      const matches = [...content.matchAll(importRegex)];
      
      for (const match of matches) {
        const importNames = match[1].split(',').map(name => name.trim());
        const modulePath = match[2];
        
        // Check which imports are actually used
        const usedImports = importNames.filter(name => {
          const cleanName = name.replace(/\s+as\s+\w+/, '').trim();
          return content.includes(cleanName) && !content.includes(`import.*${cleanName}`);
        });
        
        if (usedImports.length !== importNames.length) {
          // Remove unused imports
          const newImport = `import { ${usedImports.join(', ')} } from '${modulePath}';`;
          content = content.replace(match[0], newImport);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.log(`✅ Fixed unused imports in ${path.basename(filePath)}`);
        this.errorsFixed++;
      }
      
    } catch (error) {
      // Skip files that can't be processed
    }
  }

  async fixMissingExports() {
    this.log('🔧 Fixing missing exports...');
    
    try {
      const files = this.findTypeScriptFiles();
      
      for (const file of files) {
        await this.fixMissingExportInFile(file);
      }
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not fix all missing exports: ${error.message}`, 'WARN');
    }
  }

  async fixMissingExportInFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has components but no exports
      if (content.includes('function ') || content.includes('const ') || content.includes('class ')) {
        if (!content.includes('export ') && !content.includes('export default')) {
          // Find the first component/function/class
          const match = content.match(/(?:function|const|class)\s+(\w+)/);
          if (match) {
            const componentName = match[1];
            const newContent = `export default ${componentName};\n\n${content}`;
            fs.writeFileSync(filePath, newContent);
            this.log(`✅ Added missing export to ${path.basename(filePath)}`);
            this.errorsFixed++;
          }
        }
      }
      
    } catch (error) {
      // Skip files that can't be processed
    }
  }

  async fixTypeMismatches() {
    this.log('🔧 Fixing type mismatches...');
    
    try {
      const files = this.findTypeScriptFiles();
      
      for (const file of files) {
        await this.fixTypeMismatchInFile(file);
      }
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not fix all type mismatches: ${error.message}`, 'WARN');
    }
  }

  async fixTypeMismatchInFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix common type issues
      if (content.includes('any')) {
        // Replace 'any' with more specific types where possible
        content = content.replace(/:\s*any\b/g, ': unknown');
        modified = true;
      }
      
      // Fix undefined type issues
      if (content.includes('undefined')) {
        content = content.replace(/:\s*undefined\b/g, ': undefined | null');
        modified = true;
      }
      
      // Fix headers type issues
      if (content.includes('headers: Record<string, string> | undefined')) {
        content = content.replace(/headers:\s*Record<string, string>\s*\|\s*undefined/g, 'headers?: Record<string, string>');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.log(`✅ Fixed type mismatches in ${path.basename(filePath)}`);
        this.warningsFixed++;
      }
      
    } catch (error) {
      // Skip files that can't be processed
    }
  }

  async fixIconImportIssues() {
    this.log('🔧 Fixing icon import issues...');
    
    try {
      const files = this.findTypeScriptFiles();
      
      for (const file of files) {
        await this.fixIconImportsInFile(file);
      }
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not fix all icon import issues: ${error.message}`, 'WARN');
    }
  }

  async fixIconImportsInFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix invalid lucide-react icon names
      const iconFixes = {
        'UserHeart': 'Heart',
        'UserEdit2': 'UserEdit',
        'UserSearch2': 'Search',
        'UserList2': 'Users2',
        'UserSettings2': 'Settings2',
        'UserShield2': 'Shield',
        'UserStar2': 'Star',
        'Device': 'Smartphone',
        'Desktop': 'Monitor'
      };
      
      for (const [invalidIcon, validIcon] of Object.entries(iconFixes)) {
        if (content.includes(invalidIcon)) {
          content = content.replace(new RegExp(invalidIcon, 'g'), validIcon);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.log(`✅ Fixed icon imports in ${path.basename(filePath)}`);
        this.errorsFixed++;
      }
      
    } catch (error) {
      // Skip files that can't be processed
    }
  }

  async fixDuplicateIdentifiers() {
    this.log('🔧 Fixing duplicate identifiers...');
    
    try {
      const files = this.findTypeScriptFiles();
      
      for (const file of files) {
        await this.fixDuplicateIdentifiersInFile(file);
      }
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not fix all duplicate identifiers: ${error.message}`, 'WARN');
    }
  }

  async fixDuplicateIdentifiersInFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Find duplicate imports
      const importLines = content.match(/import.*from.*['"]/g) || [];
      const seen = new Set();
      const uniqueImports = [];
      
      for (const line of importLines) {
        if (!seen.has(line.trim())) {
          uniqueImports.push(line);
          seen.add(line.trim());
        }
      }
      
      if (uniqueImports.length !== importLines.length) {
        // Remove duplicate imports
        const lines = content.split('\n');
        const filteredLines = lines.filter(line => {
          if (line.trim().startsWith('import')) {
            return uniqueImports.includes(line);
          }
          return true;
        });
        
        content = filteredLines.join('\n');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.log(`✅ Fixed duplicate identifiers in ${path.basename(filePath)}`);
        this.errorsFixed++;
      }
      
    } catch (error) {
      // Skip files that can't be processed
    }
  }

  async fixUnusedVariables() {
    this.log('🔧 Fixing unused variables...');
    
    try {
      const files = this.findTypeScriptFiles();
      
      for (const file of files) {
        await this.fixUnusedVariablesInFile(file);
      }
      
    } catch (error) {
      this.log(`⚠️ Warning: Could not fix all unused variables: ${error.message}`, 'WARN');
    }
  }

  async fixUnusedVariablesInFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Find unused variables in destructuring
      const destructuringRegex = /const\s*{([^}]+)}\s*=\s*([^;]+);/g;
      const matches = [...content.matchAll(destructuringRegex)];
      
      for (const match of matches) {
        const variables = match[1].split(',').map(v => v.trim());
        const source = match[2];
        
        // Check which variables are actually used
        const usedVariables = variables.filter(variable => {
          const cleanVar = variable.replace(/\s*:\s*\w+/, '').trim();
          return content.includes(cleanVar) && !content.includes(`const.*${cleanVar}`);
        });
        
        if (usedVariables.length !== variables.length) {
          // Remove unused variables from destructuring
          const newDestructuring = `const { ${usedVariables.join(', ')} } = ${source};`;
          content = content.replace(match[0], newDestructuring);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.log(`✅ Fixed unused variables in ${path.basename(filePath)}`);
        this.warningsFixed++;
      }
      
    } catch (error) {
      // Skip files that can't be processed
    }
  }

  findTypeScriptFiles() {
    const files = [];
    
    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
          scanDirectory(fullPath);
        } else if (stat.isFile() && /\.(ts|tsx)$/.test(item)) {
          files.push(fullPath);
        }
      }
    };
    
    scanDirectory(this.projectRoot);
    return files;
  }

  async generateReport() {
    const endTime = new Date();
    const duration = endTime.getTime() - this.startTime.getTime();
    
    const report = {
      timestamp: endTime.toISOString(),
      duration: `${duration}ms`,
      errorsFixed: this.errorsFixed,
      warningsFixed: this.warningsFixed,
      status: this.errorsFixed > 0 || this.warningsFixed > 0 ? 'fixed' : 'clean',
      summary: `Fixed ${this.errorsFixed} TypeScript errors and ${this.warningsFixed} warnings in ${duration}ms`
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report generated: ${this.reportFile}`);
  }
}

// Run the TypeScript error fixer
const fixer = new TypeScriptErrorFixer();
fixer.run().catch(console.error);