#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

      modified = true;
    }

    // Fix unterminated strings and template literals
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      let originalLine = line;

      // Fix unterminated double quotes
      if (line.includes('"') && !line.match(/".*"/)) {
        line = line.replace(/"([^"]*)$/, '"$1"');
      }

      // Fix unterminated template literals
      if (line.includes('`') && !line.match(/`.*`/)) {
        line = line.replace(/`([^`]*)$/, '`$1`');
      }

      // Fix unterminated single quotes
      if (line.includes("'") && !line.match(/'[^']*'/)) {
        line = line.replace(/'([^']*)$/, "'$1'");
      }

      // Fix common syntax errors
      if (line.includes('Property or signature expected')) {
        line = line.replace(/Property or signature expected.*/, '');
      }

      if (line.includes('Identifier expected')) {
        line = line.replace(/Identifier expected.*/, '');
      }

      if (line.includes('Declaration or statement expected')) {
        line = line.replace(/Declaration or statement expected.*/, '');
      }

      if (line.includes('Expression expected')) {
        line = line.replace(/Expression expected.*/, '');
      }

      if (line.includes('Property assignment expected')) {
        line = line.replace(/Property assignment expected.*/, '');
      }

      if (line.includes('Property destructuring pattern expected')) {
        line = line.replace(/Property destructuring pattern expected.*/, '');
      }

      if (line.includes('Unterminated string literal')) {
        line = line.replace(/Unterminated string literal.*/, '');
      }

      if (line.includes('Unterminated regular expression literal')) {
        line = line.replace(/Unterminated regular expression literal.*/, '');
      }

      if (line.includes('JSX expressions must have one parent element')) {
        line = line.replace(/JSX expressions must have one parent element.*/, '');
      }

      if (line.includes('Unexpected keyword or identifier')) {
        line = line.replace(/Unexpected keyword or identifier.*/, '');
      }

      if (line.includes('catch or finally expected')) {
        line = line.replace(/catch or finally expected.*/, '');
      }

      if (line.includes('Expected corresponding JSX closing tag')) {
        line = line.replace(/Expected corresponding JSX closing tag.*/, '');
      }

      if (line.includes('Unexpected token')) {
        line = line.replace(/Unexpected token.*/, '');
      }

      if (line.includes('Expression or comma expected')) {
        line = line.replace(/Expression or comma expected.*/, '');
      }

      if (line.includes('case or default expected')) {
        line = line.replace(/case or default expected.*/, '');
      }

      if (line.includes('Merge conflict marker encountered')) {
        line = line.replace(/Merge conflict marker encountered.*/, '');
      }

      if (line !== originalLine) {
        lines[i] = line;
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, lines.join('\n'));
      return true;
    }
  } catch (error) {
    console.log(`  ❌ Error fixing ${filePath}: ${error.message}`);
  }
  return false;
}

// Function to fix specific file types
function fixFile(filePath) {
  const ext = path.extname(filePath);
  if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
    return fixFileContent(filePath);
  }
  return false;
}

// Get all files with syntax errors
const files = execSync('find src -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

let fixedCount = 0;
let totalFiles = files.length;

console.log(`Found ${totalFiles} files to check`);

for (const file of files) {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
}

console.log(`\n✅ Fixed ${fixedCount} files out of ${totalFiles}`);
console.log('🎯 Comprehensive syntax fixing complete!');


class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = 0;
    this.totalErrors = 0;
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async fixAllSyntaxErrors() {
    this.log('🔧 Starting comprehensive syntax error fixing...');
    
    try {
      // Get all TypeScript and JavaScript files
      const files = this.getAllCodeFiles();
      this.log(`Found ${files.length} files to check`);
      
      for (const file of files) {
        await this.fixFileSyntax(file);
      }
      
      this.log(`✅ Fixed syntax errors in ${this.fixedFiles} files`);
      this.log(`📊 Total errors fixed: ${this.totalErrors}`);
      
    } catch (error) {
      this.log(`❌ Error during syntax fixing: ${error.message}`);
      throw error;
;
function fixSyntaxErrors(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    ;
    // Fix common syntax errors;
    content = content.replace(/([\s\S]*?);
    content = content.replace(//g, '');
    content = content.replace(/;
    ;
    // Fix shebang issues;
    if (content.includes('#!/usr/bin/env node') && !content.startsWith('#!/usr/bin/env node')) {;
      content = content.replace(/.*#!/usr\/bin\/env node.*\n/g, '#!/usr/bin/env node\n');
    }
    ;
    // Fix missing commas in object literals;
    content = content.replace(/(\w+)\s*(\w+)\s*:/g, '$1:$2:');
    content = content.replace(/(\w+):\s*(\w+)\s*:/g, '$1:$2:');
    ;
    // Fix missing semicolons;
    content = content.replace(/(\w+)\s*(\w+)\s*}/g, '$1; $2}');
    content = content.replace(/(\w+)\s*(\w+)\s*]/g, '$1; $2]');
    ;
    // Fix unterminated strings;
    content = content.replace(/(['"`])([^'"`]*?)(\n)/g, '$1$2$1$3');
    ;
    // Fix missing quotes in object keys;
    content = content.replace(/(\w+):/g, '"$1":');
    ;
    // Fix missing commas between array elements;
    content = content.replace(/(\w+)\s*(\w+)\s*]/g, '$1, $2]');
    ;
    // Clean up extra whitespace;
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    ;
    if (content !== originalContent) {;
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors:in:${filePath}`);
      return true;
    }
    ;
    return false;
  } catch (error) {;
    console.error(`Error processing ${filePath} `, error.message);
    return false;
  }
}
;
function findFilesWithErrors(dir) {;
  const files = [];
  const extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'];
  ;
  function traverse(currentDir) {;
    const items = fs.readdirSync(currentDir);
    ;
    for (const item of items) {;
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      ;
      if (stat.isDirectory()) {;
        if (!['node_modules', '.git', '.next', 'dist', 'build', 'backup-merge-conflicts'].includes(item)) {;
          traverse(fullPath);
        }
      } else if (stat.isFile()) {;
        const ext = path.extname(fullPath);
        if (extensions.includes(ext)) {;
          files.push(fullPath);
        }
      }
    }

    return files;
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      let fixed = false;

      // Fix common syntax issues

      // 1. Fix missing semicolons after imports
      content = content.replace(/import\s+[^;]+$/gm, match => {
        if (!match.endsWith(';')) {
          fixed = true;
          return match + ';';
        }
        return match;
      });

      // 2. Fix malformed import statements
      content = content.replace(
        /import\s+{[^}]*}\s+from\s+['"][^'"]*['"]\s*$/gm,
        match => {
          if (!match.endsWith(';')) {
            fixed = true;
            return match + ';';
          }
          return match;
        }
      );

      // 3. Fix unterminated string literals
      content = content.replace(/['"][^'"]*$/gm, match => {
        if (match.length > 1 && !match.endsWith('"') && !match.endsWith("'")) {
          fixed = true;
          return match + '"';
        }
        return match;
      });

      // 4. Fix missing commas in arrays and objects
      content = content.replace(/([^,}])\s*\n\s*([}\]])/g, '$1,\n$2');

      // 5. Fix missing semicolons after variable declarations
      content = content.replace(/const\s+\w+\s*=\s*[^;]+$/gm, match => {
        if (
          !match.endsWith(';') &&
          !match.includes('{') &&
          !match.includes('(')
        ) {
          fixed = true;
          return match + ';';
        }
        return match;
      });

      // 6. Fix export statements
      content = content.replace(
        /export\s+default\s+function\s+\w+\(\)\s*{$/gm,
        match => {
          if (!match.endsWith('{')) {
            fixed = true;
            return match + ' {';
          }
          return match;
        }
      );

      // 7. Fix malformed JSX/TSX
      content = content.replace(
        /<(\w+)\s*([^>]*)\s*>/g,
        (match, tag, attrs) => {
          if (
            attrs &&
            attrs.trim() &&
            !attrs.endsWith('"') &&
            !attrs.endsWith("'")
          ) {
            fixed = true;
            return `<${tag} ${attrs.trim()}" >`;
          }
          return match;
        }
      );

      // 8. Fix missing closing braces
      const openBraces = (content.match(/\{/g) || []).length;
      const closeBraces = (content.match(/\}/g) || []).length;
      if (openBraces > closeBraces) {
        const missingBraces = openBraces - closeBraces;
        content += '\n' + '}'.repeat(missingBraces);
        fixed = true;
      }

      // 9. Fix malformed template literals
      content = content.replace(/`[^`]*$/gm, match => {
        if (!match.endsWith('`')) {
          fixed = true;
          return match + '`';
        }
        return match;
      });

      // 10. Fix missing semicolons after return statements
      content = content.replace(/return\s+[^;]+$/gm, match => {
        if (
          !match.endsWith(';') &&
          !match.includes('{') &&
          !match.includes('(')
        ) {
          fixed = true;
          return match + ';';
        }
        return match;
      });

      if (fixed && content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`Fixed: ${filePath}`);
        return true;
      }

      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  async run() {
    this.log('🔧 Starting comprehensive syntax fixing...');

    // Get all TypeScript and JavaScript files
    const files = this.getAllFiles(path.join(this.projectRoot, 'src'));

    this.log(`Found ${files.length} files to check`);

    let fixedCount = 0;
    for (const file of files) {
      if (this.fixFile(file)) {
        fixedCount++;
      }
    }

    this.log(`✅ Fixed ${fixedCount} files`);

    if (this.errors.length > 0) {
      this.log(`❌ ${this.errors.length} errors encountered`);
      this.errors.forEach(err => {
        this.log(`  - ${err.file}: ${err.error}`);
      });
    }

    // Try to run linting to see if we fixed the issues
    try {
      this.log('🔍 Running linting to check fixes...');
      execSync('npm run lint', { cwd: this.projectRoot, stdio: 'pipe' });
      this.log('✅ Linting passed!');
    } catch (error) {
      this.log('⚠️  Linting still has issues, but some files were fixed');
    }

    this.log('🎉 Comprehensive syntax fixing completed!');
  }
}



