const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class TypeCheckAutomation {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'type-check-automation.log');
    this.setupLogging();
  }

  setupLogging() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runTypeCheck() {
    try {
      this.log('Running TypeScript type check...');
      const result = execSync('npm run type-check', {
        cwd: process.cwd(),
        stdio: 'pipe',
        encoding: 'utf8'
      });
      this.log('TypeScript check passed');
      return { success: true, output: result };
    } catch (error) {
      this.log(`TypeScript errors found: ${error.message}`);
      return { success: false, output: error.stdout || error.message };
    }
  }

  async fixTypeErrors() {
    try {
      this.log('Attempting to fix TypeScript errors...');
      
      // Find and fix common TypeScript issues
      const files = this.findTypeScriptFiles();
      this.log(`Found ${files.length} TypeScript files to process`);
      
      let fixedCount = 0;
      for (const file of files) {
        try {
          const fixed = await this.fixFileTypeErrors(file);
          if (fixed) {
            fixedCount++;
            this.log(`Fixed: ${file}`);
          }
        } catch (error) {
          this.log(`Error fixing ${file}: ${error.message}`);
        }
      }
      
      this.log(`Fixed ${fixedCount} files`);
      return fixedCount > 0;
    } catch (error) {
      this.log(`Type error fixing failed: ${error.message}`);
      return false;
    }
  }

  findTypeScriptFiles() {
    const sourceDirs = ['pages', 'components', 'lib', 'scripts', 'automation', '__tests__'];
    const files = [];
    
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        this.findFilesRecursive(dir, files);
      }
    }
    
    return files.filter(file => 
      file.endsWith('.ts') || 
      file.endsWith('.tsx')
    );
  }

  findFilesRecursive(dir, files) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.findFilesRecursive(fullPath, files);
      } else {
        files.push(fullPath);
      }
    }
  }

  async fixFileTypeErrors(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Fix common TypeScript issues
      content = this.fixCommonTypeIssues(content);
      
      // Fix import issues
      content = this.fixImportIssues(content);
      
      // Fix JSX issues
      if (filePath.endsWith('.tsx')) {
        content = this.fixJSXIssues(content);
      }
      
      // Fix interface issues
      content = this.fixInterfaceIssues(content);
      
      // Fix function issues
      content = this.fixFunctionIssues(content);
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`Error processing ${filePath}: ${error.message}`);
      return false;
    }
  }

  fixCommonTypeIssues(content) {
    let fixed = content
      // Fix missing semicolons
      .replace(/([^;}])\n/g, '$1;\n')
      .replace(/;\s*;\s*/g, ';')
      // Fix missing commas
      .replace(/([^,}])\s*\n\s*}/g, '$1,\n}')
      // Fix string literal issues
      .replace(/'([^']*)'/g, '"$1"')
      // Fix array syntax
      .replace(/\[\s*\]/g, '[]')
      // Fix object syntax
      .replace(/{\s*}/g, '{}')
      // Fix function syntax
      .replace(/function\s*\(\s*\)/g, 'function()')
      .replace(/\(\s*\)\s*=>/g, '() =>')
      // Fix type annotations
      .replace(/:\s*any\s*/g, ': any')
      .replace(/:\s*string\s*/g, ': string')
      .replace(/:\s*number\s*/g, ': number')
      .replace(/:\s*boolean\s*/g, ': boolean')
      // Fix generic syntax
      .replace(/<\s*>\s*/g, '<>')
      // Fix interface syntax
      .replace(/interface\s+(\w+)\s*{\s*}/g, 'interface $1 {\n  // Add properties here\n}')
      // Fix class syntax
      .replace(/class\s+(\w+)\s*{\s*}/g, 'class $1 {\n  // Add methods here\n}')
      // Fix export syntax
      .replace(/export\s+default\s+/g, 'export default ')
      .replace(/export\s+{\s*}\s*/g, 'export {}')
      // Fix import syntax
      .replace(/import\s+{\s*}\s*from/g, 'import {} from')
      // Fix JSX syntax
      .replace(/<(\w+)\s*\/\s*\/\s*\/\s*>/g, '<$1 />')
      .replace(/<(\w+)\s*\/\s*>/g, '<$1 />')
      // Fix spacing
      .replace(/\s+/g, ' ')
      .replace(/\n\s*\n/g, '\n\n')
      .replace(/^\s+|\s+$/g, '');
    
    return fixed;
  }

  fixImportIssues(content) {
    return content
      .replace(/import\s+{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g, 'import { $1 } from "$2"')
      .replace(/import\s+(\w+)\s*from\s*['"]([^'"]+)['"]/g, 'import $1 from "$2"')
      .replace(/import\s+['"]([^'"]+)['"]/g, 'import "$1"')
      .replace(/from\s*['"]([^'"]+)['"]\s*;/g, 'from "$1";');
  }

  fixJSXIssues(content) {
    return content
      .replace(/<(\w+)\s*\/\s*\/\s*\/\s*>/g, '<$1 />')
      .replace(/<(\w+)\s*\/\s*>/g, '<$1 />')
      .replace(/<(\w+)\s*>\s*<\/\1>/g, '<$1 />')
      .replace(/<(\w+)\s*([^>]*)\s*>\s*<\/\1>/g, '<$1 $2 />');
  }

  fixInterfaceIssues(content) {
    return content
      .replace(/interface\s+(\w+)\s*{\s*}/g, 'interface $1 {\n  // Add properties here\n}')
      .replace(/interface\s+(\w+)\s*{\s*([^}]+)\s*}/g, 'interface $1 {\n  $2\n}')
      .replace(/:\s*string\s*;/g, ': string;')
      .replace(/:\s*number\s*;/g, ': number;')
      .replace(/:\s*boolean\s*;/g, ': boolean;')
      .replace(/:\s*any\s*;/g, ': any;');
  }

  fixFunctionIssues(content) {
    return content
      .replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*}/g, 'function $1() {\n  // Add implementation here\n}')
      .replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*}/g, 'const $1 = () => {\n  // Add implementation here\n}')
      .replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*}/g, 'const $1 = () => {\n  // Add implementation here\n}');
  }

  async start() {
    this.log('Type Check Automation started');
    
    // Run initial type check
    const status = await this.runTypeCheck();
    if (!status.success) {
      this.log('TypeScript errors found, attempting to fix...');
      const fixed = await this.fixTypeErrors();
      
      if (fixed) {
        // Re-run type check
        const recheck = await this.runTypeCheck();
        if (recheck.success) {
          this.log('TypeScript errors successfully fixed');
        } else {
          this.log('Some TypeScript errors remain');
        }
      }
    } else {
      this.log('No TypeScript errors found');
    }
    
    // Set up periodic checks every 3 hours
    setInterval(async () => {
      await this.runTypeCheck();
    }, 3 * 60 * 60 * 1000);
  }
}

// Start the type check automation
const automation = new TypeCheckAutomation();
automation.start().catch(console.error);

module.exports = TypeCheckAutomation;