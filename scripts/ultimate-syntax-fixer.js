#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class UltimateSyntaxFixer {
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

      // Fix all common syntax issues
      fixed = this.fixAllSyntaxIssues(fixed);
      
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

  fixAllSyntaxIssues(content) {
    // Fix import statements
    content = content.replace(/import\s+type\s*{\s*([^}]+),\s*from\s*'([^']+)';/g, "import type { $1 } from '$2';");
    content = content.replace(/import\s*{\s*([^}]+),\s*from\s*'([^']+)';/g, "import { $1 } from '$2';");
    content = content.replace(/import\s+([^,]+),\s*from\s*'([^']+)';/g, "import $1 from '$2';");
    
    // Fix JSX syntax issues
    content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*);/g, '<$1');
    content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*)\s*;\s*([^>]*?)>/g, '<$1 $2>');
    
    // Fix mismatched heading tags
    content = content.replace(/<h1([^>]*)>\s*([^<]+)<\/h2>/g, '<h2$1>$2</h2>');
    content = content.replace(/<h2([^>]*)>\s*([^<]+)<\/h1>/g, '<h2$1>$2</h2>');
    content = content.replace(/<h3([^>]*)>\s*([^<]+)<\/h1>/g, '<h3$1>$2</h3>');
    content = content.replace(/<h1([^>]*)>\s*([^<]+)<\/h3>/g, '<h3$1>$2</h3>');
    
    // Fix malformed JSX attributes
    content = content.replace(/strokeWidth={2,\s*d="/g, 'strokeWidth={2}\n                d="');
    content = content.replace(/onClick={([^}]+),\s*className="/g, 'onClick={$1}\n            className="');
    
    // Fix malformed array syntax
    content = content.replace(/}\s*}\s*]/g, ']');
    content = content.replace(/}\s*[^}]\s*]/g, ']');
    content = content.replace(/"([^"]+)"\s*}\s*"([^"]+)"\s*]/g, '"$1",\n                "$2"');
    
    // Fix function definitions
    content = content.replace(/(\w+:\s*\w+)\s*}\s*(\w+:\s*\w+)\s*}/g, '$1;\n  $2 }');
    content = content.replace(/(\w+:\s*\w+)\s*}\s*(\w+:\s*\w+)\s*}/g, '$1;\n  $2; }');
    
    // Fix JSX expressions
    content = content.replace(/\)<h/g, ')}\n      <h');
    content = content.replace(/\)<div/g, ')}\n      <div');
    
    // Fix malformed map functions
    content = content.replace(/key={([^}]+),\s*className="/g, 'key={$1} className="');
    content = content.replace(/key={([^}]+),\s*([^}]+)\s*}/g, 'key={$1} $2}');
    
    // Fix malformed JSX closing tags
    content = content.replace(/<\/li>\)\)<\/ul>/g, '</li>\n        ))}\n      </ul>');
    content = content.replace(/<\/li>\)\)<\/div>/g, '</li>\n        ))}\n      </div>');
    
    // Fix malformed conditional expressions
    content = content.replace(/popular;\s*\?/g, 'popular\n            ?');
    content = content.replace(/popular\s*;\s*\?/g, 'popular\n            ?');
    
    // Fix malformed template literals
    content = content.replace(/href="mailto:([^"]+)\?subject = ([^"]+),\s*Plan"/g, 'href={`mailto:$1?subject=$2 Plan`}');
    
    // Fix missing closing tags
    content = content.replace(/<path([^>]*?)\s*>/g, '<path$1 />');
    content = content.replace(/<svg([^>]*?)\s*>/g, '<svg$1>');
    
    // Fix malformed return statements
    content = content.replace(/return\s*\(<div/g, 'return (\n    <div');
    
    // Fix missing semicolons in type definitions
    content = content.replace(/(\w+:\s*\w+)\s*}\s*(\w+:\s*\w+)\s*}/g, '$1;\n  $2; }');
    
    // Fix malformed JSX attributes with line breaks
    content = content.replace(/(\w+)={([^}]+),\s*\n\s*([^}]+)}/g, '$1={$2}\n            $3');
    
    // Fix malformed array items
    content = content.replace(/"([^"]+)"\s*}\s*"([^"]+)"\s*]/g, '"$1",\n                "$2"');
    
    // Fix malformed function parameters
    content = content.replace(/(\w+)\s*}\s*(\w+)/g, '$1,\n  $2');
    
    // Fix malformed JSX expressions with parentheses
    content = content.replace(/\(<([a-zA-Z][a-zA-Z0-9]*)/g, '(\n          <$1');
    
    // Fix malformed closing parentheses
    content = content.replace(/\)<([a-zA-Z][a-zA-Z0-9]*)/g, ')\n      <$1');
    
    // Fix malformed JSX attributes with semicolons
    content = content.replace(/(\w+)={([^}]+);\s*([^}]+)}/g, '$1={$2}\n            $3');
    
    // Fix malformed array syntax with braces
    content = content.replace(/\[\s*"([^"]+)"\s*}\s*"([^"]+)"\s*\]/g, '[\n                "$1",\n                "$2"\n              ]');
    
    // Fix malformed function calls
    content = content.replace(/(\w+)\(([^)]+),\s*([^)]+)\)/g, '$1($2,\n  $3)');
    
    // Fix malformed JSX with semicolons
    content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*)\s*;\s*([^>]*?)>/g, '<$1 $2>');
    
    // Fix malformed template literals with line breaks
    content = content.replace(/`([^`]+),\s*\n\s*([^`]+)`/g, '`$1 $2`');
    
    // Fix malformed JSX attributes with commas
    content = content.replace(/(\w+)={([^}]+),\s*([^}]+)}/g, '$1={$2}\n            $3');
    
    // Fix malformed array syntax with commas
    content = content.replace(/\[\s*"([^"]+)"\s*,\s*"([^"]+)"\s*}\s*"([^"]+)"\s*\]/g, '[\n                "$1",\n                "$2",\n                "$3"\n              ]');
    
    // Fix malformed function definitions with commas
    content = content.replace(/(\w+:\s*\w+)\s*,\s*(\w+:\s*\w+)\s*}/g, '$1;\n  $2; }');
    
    // Fix malformed JSX with line breaks
    content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*)\s*\n\s*([^>]*?)>/g, '<$1 $2>');
    
    // Fix malformed array syntax with line breaks
    content = content.replace(/\[\s*"([^"]+)"\s*\n\s*"([^"]+)"\s*\]/g, '[\n                "$1",\n                "$2"\n              ]');
    
    // Fix malformed function calls with line breaks
    content = content.replace(/(\w+)\(\s*([^)]+)\s*\n\s*([^)]+)\s*\)/g, '$1($2,\n  $3)');
    
    // Fix malformed JSX attributes with line breaks and commas
    content = content.replace(/(\w+)={([^}]+)\s*,\s*\n\s*([^}]+)}/g, '$1={$2}\n            $3');
    
    // Fix malformed array syntax with line breaks and commas
    content = content.replace(/\[\s*"([^"]+)"\s*,\s*\n\s*"([^"]+)"\s*\]/g, '[\n                "$1",\n                "$2"\n              ]');
    
    // Fix malformed function definitions with line breaks and commas
    content = content.replace(/(\w+:\s*\w+)\s*,\s*\n\s*(\w+:\s*\w+)\s*}/g, '$1;\n  $2; }');
    
    // Fix malformed JSX with line breaks and semicolons
    content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*)\s*;\s*\n\s*([^>]*?)>/g, '<$1 $2>');
    
    // Fix malformed array syntax with line breaks and semicolons
    content = content.replace(/\[\s*"([^"]+)"\s*;\s*\n\s*"([^"]+)"\s*\]/g, '[\n                "$1",\n                "$2"\n              ]');
    
    // Fix malformed function calls with line breaks and semicolons
    content = content.replace(/(\w+)\(\s*([^)]+)\s*;\s*\n\s*([^)]+)\s*\)/g, '$1($2,\n  $3)');
    
    // Fix malformed JSX attributes with line breaks and semicolons
    content = content.replace(/(\w+)={([^}]+)\s*;\s*\n\s*([^}]+)}/g, '$1={$2}\n            $3');
    
    // Fix malformed array syntax with line breaks and semicolons
    content = content.replace(/\[\s*"([^"]+)"\s*;\s*\n\s*"([^"]+)"\s*\]/g, '[\n                "$1",\n                "$2"\n              ]');
    
    // Fix malformed function definitions with line breaks and semicolons
    content = content.replace(/(\w+:\s*\w+)\s*;\s*\n\s*(\w+:\s*\w+)\s*}/g, '$1;\n  $2; }');
    
    return content;
  }

  async getAllFiles() {
    const files = [];
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    
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
    this.log('Starting ultimate syntax fixing...');
    
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
  const fixer = new UltimateSyntaxFixer();
  fixer.run().then(success => {
    process.exit(success ? 0 : 1);
  });
}

export default UltimateSyntaxFixer;