    const logMessage = `[${timestamp}] ${message}\n`;
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
        { pattern: /^<<<<<<< .*$/gm, replacement: '' },
        
        // Fix malformed object literals
        { pattern: /{\s*;\s*name:/g, replacement: '{ name:' },
        { pattern: /{\s*;\s*script:/g, replacement: '{ script:' },
        { pattern: /{\s*;\s*args:/g, replacement: '{ args:' },
        
        // Fix malformed arrays
        { pattern: /\[\s*;\s*"/g, replacement: '[ "' },
        { pattern: /"\s*;\s*\]/g, replacement: '" ]' },
        
        // Fix function declarations
        { pattern: /function\s*\(\s*\)\s*{\s*;/g, replacement: 'function() {' },
        { pattern: /constructor\s*\(\s*\)\s*{\s*;/g, replacement: 'constructor() {' },
        
        // Fix class declarations
        { pattern: /class\s+\w+\s*{\s*;/g, replacement: (match) => match.replace('{', '{') },
        
        // Fix variable declarations
        { pattern: /this\.\w+\s*=\s*{\s*;/g, replacement: (match) => match.replace('{', '{') },
        { pattern: /this\.\w+\s*=\s*\[\s*;/g, replacement: (match) => match.replace('[', '[') },
        
        // Fix method declarations
        { pattern: /\w+\s*\(\s*[^)]*\)\s*{\s*;/g, replacement: (match) => match.replace('{', '{') },
        
        // Fix require statements
        { pattern: /require\s*\(\s*"\$1"\s*\)/g, replacement: 'require("fs")' },
        
        // Fix malformed strings
        { pattern: /&apos;s\s*""\s*>/g, replacement: "&apos;s>" },
        
        // Fix trailing semicolons in object properties
        { pattern: /:\s*'[^']*',\s*;/g, replacement: (match) => match.replace(',', ',') },
        { pattern: /:\s*"[^"]*",\s*;/g, replacement: (match) => match.replace(',', ',') },
        { pattern: /:\s*\d+,\s*;/g, replacement: (match) => match.replace(',', ',') },
        { pattern: /:\s*(true|false),\s*;/g, replacement: (match) => match.replace(',', ',') },
        
        // Fix malformed module.exports
        { pattern: /module\.exports\s*=\s*{\s*;\s*apps:/g, replacement: 'module.exports = {\n  apps:' },
        
        // Clean up extra whitespace and newlines
        { pattern: /\n\s*\n\s*\n/g, replacement: '\n\n' },
        { pattern: /^\s*;\s*$/gm, replacement: '' },
      ]

      // Apply all fixes
      fixes.forEach(fix => {
        if (typeof fix.replacement === 'function') {
          content = content.replace(fix.pattern, fix.replacement)
        } else {
          content = content.replace(fix.pattern, fix.replacement)
        }
      })

      // Additional specific fixes for common patterns
      content = this.fixSpecificPatterns(content)

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8')
        this.fixedFiles.push(filePath)
        this.log(`✅ Fixed syntax errors in: ${filePath}`)
        return true;
      }

      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message })
      this.log(`❌ Error fixing ${filePath}: ${error.message}`)
      return false;
    }
  }

  fixSpecificPatterns(content) {
    // Fix specific malformed patterns
    const specificFixes = [
      // Fix ecosystem.config.cjs structure
      {
        pattern: /module\.exports\s*=\s*{\s*apps:\s*\[\s*{\s*name:\s*'[^']*',\s*script:\s*'[^']*',\s*args:\s*'[^']*',\s*cwd:\s*'[^']*',\s*instances:\s*\d+,\s*autorestart:\s*(true|false),\s*watch:\s*(true|false),\s*max_memory_restart:\s*'[^']*',\s*env:\s*{\s*NODE_ENV:\s*'[^']*',\s*PORT:\s*\d+\s*}\s*}\s*}/s,
        replacement: (match) => {
          return match
            .replace(/,\s*;/g, ',')
            .replace(/{\s*;/g, '{')
            .replace(/}\s*;/g, '}')
            .replace(/\[\s*;/g, '[')
            .replace(/\]\s*;/g, ']')
        }
      }
    ]

    specificFixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement)
    })

    return content;
  }

  async fixAllScripts() {
    this.log('🔧 Starting comprehensive syntax fixing...')
    
    const scriptDirs = ['scripts', 'automation']
    const extensions = ['.js', '.cjs', '.mjs', '.ts']
    
    for (const dir of scriptDirs) {
      const dirPath = path.join(this.projectRoot, dir)
      if (fs.existsSync(dirPath)) {
        await this.fixDirectory(dirPath, extensions)
      }
    }

    // Fix root config files
    const configFiles = ['ecosystem.config.cjs', 'package.json']
    for (const file of configFiles) {
      const filePath = path.join(this.projectRoot, file)
      if (fs.existsSync(filePath)) {
        this.fixFile(filePath)
      }
    }

    this.log(`✅ Fixed ${this.fixedFiles.length} files`)
    if (this.errors.length > 0) {
      this.log(`❌ ${this.errors.length} errors encountered`)
      this.errors.forEach(error => {
        this.log(`  - ${error.file}: ${error.error}`)
      })
    }

    return {
      fixedFiles: this.fixedFiles,
      errors: this.errors
    }
  }

  async fixDirectory(dirPath, extensions) {
    const files = fs.readdirSync(dirPath)
    
    for (const file of files) {
      const filePath = path.join(dirPath, file)
      const stat = fs.statSync(filePath)
      
      if (stat.isDirectory()) {
        await this.fixDirectory(filePath, extensions)
      } else if (stat.isFile()) {
        const ext = path.extname(file)
        if (extensions.includes(ext)) {
          this.fixFile(filePath)
        }
      }
    }
  }

  // Run TypeScript compiler to check for errors
  async runTypeCheck() {
    this.log('Running TypeScript type check...');
    const result = await this.runCommand('npx tsc --noEmit');
    if (result.success) {
      this.log('TypeScript type check passed');
      return true;
    } else {
      this.log(`TypeScript type check failed: ${result.stderr}`);
      return false;
    }
  }

  // Run ESLint to check for linting errors
  async runLintCheck() {
    this.log('Running ESLint check...');
    const result = await this.runCommand('npx eslint . --max-warnings 0');
    if (result.success) {
      this.log('ESLint check passed');
      return true;
    } else {
      this.log(`ESLint check failed: ${result.stderr}`);
      return false;
    }
  }

  // Generate report
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFilesProcessed: this.fixedFiles.length + this.corruptedFiles.length + this.mergeConflictFiles.length + this.syntaxErrorFiles.length,
        fixedFiles: this.fixedFiles.length,
        corruptedFiles: this.corruptedFiles.length,
        mergeConflictFiles: this.mergeConflictFiles.length,
        syntaxErrorFiles: this.syntaxErrorFiles.length
      },
      details: {
        fixedFiles: this.fixedFiles,
        corruptedFiles: this.corruptedFiles,
        mergeConflictFiles: this.mergeConflictFiles,
        syntaxErrorFiles: this.syntaxErrorFiles
      }
    };

    const reportFile = path.join(__dirname, '..', 'automation', 'logs', 'syntax-fixer-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Report saved to ${reportFile}`);
    return report;
  }

  // Main execution method
  async run() {
    this.log('Starting comprehensive syntax fixing...');
    
    // Ensure logs directory exists
    const logsDir = path.join(__dirname, '..', 'automation', 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    // Clean up corrupted directories
    await this.cleanCorruptedDirectories();

    // Get all files to process
    const files = await this.getAllFiles();
    this.log(`Found ${files.length} files to process`);

    // Process each file
    for (const file of files) {
      await this.processFile(file);
    }

    // Run type check
    await this.runTypeCheck();

    // Run lint check
    await this.runLintCheck();

    // Generate report
    const report = this.generateReport();
    
    this.log('Comprehensive syntax fixing completed');
    this.log(`Fixed ${report.summary.fixedFiles} files`);
    this.log(`Found ${report.summary.corruptedFiles} corrupted files`);
    this.log(`Found ${report.summary.mergeConflictFiles} files with merge conflicts`);
    this.log(`Found ${report.summary.syntaxErrorFiles} files with syntax errors`);

    return report;
  }
}

// Handle command line arguments
if (require.main === module) {
  const fixer = new ComprehensiveSyntaxFixer();
  const command = process.argv[2];

  switch (command) {
    case "run":
      fixer.run().catch(error => {
        console.error("Syntax fixing failed: ", error);
        process.exit(1);
      });
      break;
    case "report":
      fixer.generateReport();
      break;
    default:
      console.log("Usage: node comprehensive-syntax-fixer.cjs [run|report]");
      process.exit(1);
  }
}

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