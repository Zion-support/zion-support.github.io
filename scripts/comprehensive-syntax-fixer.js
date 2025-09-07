#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, type = 'info') {
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = content;

      // Fix common JSX syntax issues
      fixed = this.fixJSXSyntax(fixed);
      
      // Fix TypeScript syntax issues
      fixed = this.fixTypeScriptSyntax(fixed);
      
      // Fix array syntax issues
      fixed = this.fixArraySyntax(fixed);
      
      // Fix function definition issues
      fixed = this.fixFunctionDefinitions(fixed);

      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed);
        this.fixedFiles.push(filePath);
        this.log(`Fixed syntax in ${filePath}`, 'success');
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'error');
      this.errors.push(`${filePath}: ${error.message}`);
      return false;
    }
  }

  fixJSXSyntax(content) {
    // Fix semicolons in JSX tags
    content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*);/g, '<$1');
    
    // Fix mismatched heading tags
    content = content.replace(/<h1([^>]*)>\s*([^<]+)<\/h2>/g, '<h2$1>$2</h2>');
    content = content.replace(/<h2([^>]*)>\s*([^<]+)<\/h1>/g, '<h2$1>$2</h2>');
    content = content.replace(/<h3([^>]*)>\s*([^<]+)<\/h1>/g, '<h3$1>$2</h3>');
    content = content.replace(/<h1([^>]*)>\s*([^<]+)<\/h3>/g, '<h3$1>$2</h3>');
    
    // Fix malformed JSX expressions
    content = content.replace(/\)<h/g, ')}\n      <h');
    
    return content;
  }

  fixTypeScriptSyntax(content) {
    // Fix missing semicolons in type definitions
    content = content.replace(/(\w+:\s*\w+)\s*}\s*(\w+:\s*\w+)/g, '$1;\n  $2');
    
    // Fix malformed function parameters
    content = content.replace(/(\w+:\s*\w+)\s*}\s*(\w+:\s*\w+)\s*}/g, '$1;\n  $2 }');
    
    return content;
  }

  fixArraySyntax(content) {
    // Fix malformed array syntax
    content = content.replace(/}\s*}\s*]/g, ']');
    content = content.replace(/}\s*[^}]\s*]/g, ']');
    
    // Fix array items with missing commas
    content = content.replace(/"([^"]+)"\s*}\s*"([^"]+)"\s*]/g, '"$1",\n                "$2"');
    
    return content;
  }

  fixFunctionDefinitions(content) {
    // Fix malformed function parameter lists
    content = content.replace(/(\w+:\s*\w+)\s*}\s*(\w+:\s*\w+)\s*}/g, '$1;\n  $2 }');
    
    // Fix missing commas in function parameters
    content = content.replace(/(\w+)\s*}\s*(\w+)/g, '$1,\n  $2');
    
    return content;
  }

  async getAllFiles() {
    const files = [];
    const extensions = ['.js', '.ts', '.tsx', '.jsx'];
    
    const scanDirectory = (dir) => {
      try {
        if (!fs.existsSync(dir)) return;
        
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        this.log(`Error scanning directory ${dir}: ${error.message}`, 'error');
      }
    };

    scanDirectory(path.join(this.projectRoot, 'app'));
    scanDirectory(path.join(this.projectRoot, 'components'));
    scanDirectory(path.join(this.projectRoot, 'pages'));
    scanDirectory(path.join(this.projectRoot, 'src'));
    
    return files;
  }

  async run() {
    this.log('Starting comprehensive syntax fixing...');
    
    const files = await this.getAllFiles();
    this.log(`Found ${files.length} files to check`);
    
    let fixedCount = 0;
    for (const file of files) {
      if (await this.fixFile(file)) {
        fixedCount++;
      }
    }
    
    this.log(`Fixed syntax in ${fixedCount} files`);
    
    if (this.errors.length > 0) {
      this.log(`Encountered ${this.errors.length} errors:`, 'error');
      this.errors.forEach(error => this.log(`  ${error}`, 'error'));
    }
    
    return this.errors.length === 0;
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const fixer = new ComprehensiveSyntaxFixer();
  fixer.run().then(success => {
    process.exit(success ? 0 : 1);
  });
}

export default ComprehensiveSyntaxFixer;