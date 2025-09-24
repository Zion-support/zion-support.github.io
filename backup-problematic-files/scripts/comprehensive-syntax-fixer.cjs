


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    const logMessage = `[${timestamp}] ${message}\n`;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, options = {}) {
    try {
      const { stdout, stderr } = await execAsync(command, { 
        cwd: process.cwd(), 
        timeout: 30000, 
        ...options 
      });
      return { success: true, stdout, stderr };
    } catch (error) {
      this.log(`Command failed: ${command} - ${error.message}`);
      return { 
        success: false, 
        stdout: error.stdout || "", 
        stderr: error.stderr || error.message 
      };
    }
  }

  // Check if file has merge conflicts
  hasMergeConflicts(content) {
  }

  // Check if file has syntax errors
  hasSyntaxErrors(content) {
    // Check for common syntax error patterns
    const syntaxErrorPatterns = [
      /,\s*"/,  // Comma followed by quote
      /;\s*"/,  // Semicolon followed by quote
      /:\s*"/,  // Colon followed by quote
      /\(\s*"/, // Opening parenthesis followed by quote
      /\[\s*"/, // Opening bracket followed by quote
      /{\s*"/,  // Opening brace followed by quote
      />>>>>/,  // Git merge markers
      /<<<<<</, // Git merge markers
      /======/, // Git merge markers
    ];

    return syntaxErrorPatterns.some(pattern => pattern.test(content));
  }

  // Fix common syntax errors
  fixSyntaxErrors(content) {
    let fixed = content;
    // Fix merge conflicts by keeping the HEAD version

    fixed = fixed.replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n    


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

    // Fix common syntax patterns
    fixed = fixed.replace(/,\s*"/g, ',\n  "');
    fixed = fixed.replace(/;\s*"/g, ';\n  "');
    fixed = fixed.replace(/:\s*"/g, ':\n  "');
    fixed = fixed.replace(/\(\s*"/g, '(\n  "');
    fixed = fixed.replace(/\[\s*"/g, '[\n  "');
    fixed = fixed.replace(/{\s*"/g, '{\n  "');

    // Fix unterminated strings
    fixed = fixed.replace(/"([^"]*?)\n/g, '"$1"\n');
    // Fix missing semicolons
    fixed = fixed.replace(/([^;}])\n\s*}/g, '$1;\n}');
    return fixed;
  }

  // Process a single file
  async processFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');


      if (this.hasMergeConflicts(content)) {
        this.mergeConflictFiles.push(filePath);
        this.log(`Found merge conflicts in: ${filePath}`);
      }

      if (this.hasSyntaxErrors(content)) {
        this.syntaxErrorFiles.push(filePath);
        this.log(`Found syntax errors in: ${filePath}`);

        const fixedContent = this.fixSyntaxErrors(content);
        if (fixedContent !== content) {
          fs.writeFileSync(filePath, fixedContent);
          this.fixedFiles.push(filePath);
          this.log(`Fixed syntax errors in: ${filePath}`);
        }
      }


      return true;
    } catch (error) {
      this.corruptedFiles.push(filePath);
      this.log(`Error processing file ${filePath}: ${error.message}`);
      return false;
    }
  }


  // Get all files to process
  async getAllFiles() {
    const files = [];
    const directories = [
      'pages',
      'src',
      'components',
      'lib',
      'hooks',
      'utils',
      'types',
      'services',
      'store',
      'context',
      'data',
      'config',
      'routes',
      'layout',
      'integrations',
      'tests'
    ];


    for (const dir of directories) {
      if (fs.existsSync(dir)) {
        const dirFiles = await this.getFilesInDirectory(dir);
        files.push(...dirFiles);
      }
    }

    return files;
  }
  // Get files in directory recursively
  async getFilesInDirectory(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        const subFiles = await this.getFilesInDirectory(fullPath);
        files.push(...subFiles);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
        files.push(fullPath);
      }
    }

    return files;
  }

  // Clean up corrupted directories
  async cleanCorruptedDirectories() {
    const corruptedDirs = [
      'pages.disabled',
      'pages.disabled_auto',
      'pages.corrupted.1756905863',
      'pages.disabled.full',
      'pages.broken',
      'pages.blog.disabled',
      'pages._archive_corrupted',
      'pages._quarantine',
      'pages-disabled',
      'pages-quarantine',
      'pages.__backup',
      'src.pages.disabled',
      'temp_broken_files',
      'temp-backup',
      'temp_working'
    ];


    for (const dir of corruptedDirs) {
      if (fs.existsSync(dir)) {
        try {
          await this.runCommand(`rm -rf ${dir}`);
          this.log(`Removed corrupted directory: ${dir}`);
        } catch (error) {
          this.log(`Failed to remove directory ${dir}: ${error.message}`);
#!/usr/bin/env node
const fs = require('fs')
const path = require('path')


class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd()
    this.fixedFiles = []
    this.errors = []
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`)
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8')
      let originalContent = content;


      // Fix common syntax errors
      const fixes = [
        // Remove extra semicolons after braces
        { pattern: /{\s*;/g, replacement: '{' },
        { pattern: /}\s*;/g, replacement: '}' },
        { pattern: /\[\s*;/g, replacement: '[' },
        { pattern: /\]\s*;/g, replacement: ']' },
        { pattern: /\(\s*;/g, replacement: '(' },
        { pattern: /\)\s*;/g, replacement: ')' },

        // Fix trailing commas and semicolons
        { pattern: /,\s*;/g, replacement: ',' },
        { pattern: /;\s*,/g, replacement: ';' },
        // Fix merge conflict markers


>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting Comprehensive Syntax Fixer...');

class ComprehensiveSyntaxFixer {}
  constructor() {}
    this.fixedFiles = [];
    this.errors = [];
    this.processedFiles = 0;
  };
  async fixAll() {}
    try {}
      console.log('📁 Scanning for files with syntax errors...');

      // Get all JS/JSX/TS/TSX files;
      const files = this.getAllFiles('.', ['.js', '.jsx', '.ts', '.tsx']);
      console.log(`Found ${files.length} files to process`);

      for (const file of files) {}
        try {}
          this.processedFiles++;
          if (this.fixFile(file)) {}
            this.fixedFiles.push(file);
          };
        } catch (error) {}
          this.errors.push({ file, error: error.message }
});
          console.error(`❌ Error processing ${file}: ${error.message}`);
        };
      };
      this.generateReport();
      console.log(`✅ Fixed ${this.fixedFiles.length} files out of ${this.processedFiles} processed`);


    } catch (error) {}
      console.error('❌ Comprehensive fix failed:', error);
    };
  };
  getAllFiles(dir, extensions) {}
    const files = [];


    if (!fs.existsSync(dir)) {}
      return files;
    };
    const items = fs.readdirSync(dir);

    for (const item of items) {}
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {}
        // Skip node_modules, .next, dist, etc.
        if (!['node_modules', '.next', 'dist', 'build', 'coverage', '.git'].includes(item)) {}
          files.push(...this.getAllFiles(fullPath, extensions));
        };
      } else if (stat.isFile()) {}
        const ext = path.extname(fullPath);
        if (extensions.includes(ext)) {}
          files.push(fullPath);
        };
      };
    };
    return files;
  };
  fixFile(filePath) {}
    try {}
      const content = fs.readFileSync(filePath, 'utf8');
      let fixedContent = content;
      let hasChanges = false;


      // Fix common syntax errors;
      const fixes = []
        // Fix missing semicolons;
        { pattern: /(\w+)\s*$/gm, replacement: '$1;' },

        // Fix missing closing braces;
        { pattern: /(\w+)\s*{\s*$/gm, replacement: '$1 {\n  // TODO: Implement\n}' },
        // Fix unterminated strings;
        { pattern: /(['"])([^'"]*?)\s*$/gm, replacement: '$1$2$1' },
        // Fix merge conflict markers;
        { pattern: /}
        { pattern: /}

        // Fix duplicate imports;
        { pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*['"][^'"]+['"];\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"][^'"]+['"];/g, 
          replacement: (match, p1, p2) => {}
            const imports1 = p1.split(',').map(i => i.trim());
            const imports2 = p2.split(',').map(i => i.trim());
            const uniqueImports = [...new Set([...imports1, ...imports2])];
            return `import { ${uniqueImports.join(', ')} } from 'lucide-react';`;`
          };
        },


        // Fix missing closing tags;
        { pattern: /<(\w+)[^>]*>[\s\S]*?$/gm, replacement: (match, tag) => {}
          if (!match.includes(`</${tag}>`)) {`}
            return match + `\n</${tag}>`;`
          };
          return match;
        }},


        // Fix extra content after closing tags;
        { pattern: /<\/\w+>\s*[^<\s][^<]*$/gm, replacement: (match) => {}
          const lines = match.split('\n');
          const lastTagIndex = lines.findIndex(line => line.includes('</'));
          if (lastTagIndex >= 0) {}
            return lines.slice(0, lastTagIndex + 1).join('\n');
          };
          return match;
        }},


        // Fix duplicate function declarations;
        { pattern: /export\s+default\s+function\s+\w+[\s\S]*?}\s*export\s+default\s+function\s+\w+/g, 
          replacement: (match) => {}
            const parts = match.split('export default function');
            return 'export default function' + parts[1];
          };
        },

        // Fix missing commas in objects;
        { pattern: /(\w+)\s*:\s*([^,}\n]+)\s*\n\s*(\w+)\s*:/g, replacement: '$1: $2,\n  $3:' },
        // Fix missing closing parentheses;
        { pattern: /\([^)]*$/gm, replacement: (match) => match + ')' },
        // Fix missing closing brackets;
        { pattern: /\[[^\]]*$/gm, replacement: (match) => match + ']' },
        // Fix missing closing quotes;
        { pattern: /(['"])[^'"]*$/gm, replacement: (match) => match + match[0] };
      ];

      for (const fix of fixes) {}
        const newContent = fixedContent.replace(fix.pattern, fix.replacement);
        if (newContent !== fixedContent) {}
          fixedContent = newContent;
          hasChanges = true;
        };
      };
      if (hasChanges) {}
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`✅ Fixed: ${filePath}`);
        return true;
      };
      return false;
    } catch (error) {}
      console.error(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;
    };
  };
  generateReport() {}
    const report = {}
      timestamp: new Date().toISOString(),
      processedFiles: this.processedFiles,
      fixedFiles: this.fixedFiles.length,
      errors: this.errors.length,
      fixedFileList: this.fixedFiles,
      errorList: this.errors;
    };


    const reportPath = 'syntax-fix-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Report saved to ${reportPath}`);
  };
};
// Run if called directly;
if (require.main === module) {}
  const fixer = new ComprehensiveSyntaxFixer();
  fixer.fixAll().then(() => {}
    console.log('🎉 Comprehensive syntax fixing completed!');
    process.exit(0);
  }
});
};
module.exports = ComprehensiveSyntaxFixer;