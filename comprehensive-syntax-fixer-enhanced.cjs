#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting Comprehensive Syntax Fixer Enhanced...');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
    this.logFile = path.join(__dirname, 'automation-reports', 'syntax-fixer.log');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  // Fix common syntax errors in JavaScript/TypeScript files
  fixSyntaxErrors(content) {
    let fixed = content;

    // Fix object property syntax errors (e.g., "prop: value" -> "prop: value")
    fixed = fixed.replace(/(\w+):\s*e:\s*/g, '$1: ');
    fixed = fixed.replace(/(\w+):\s*s:\s*/g, '$1: ');
    fixed = fixed.replace(/(\w+):\s*t:\s*/g, '$1: ');
    fixed = fixed.replace(/(\w+):\s*d:\s*/g, '$1: ');
    fixed = fixed.replace(/(\w+):\s*p:\s*/g, '$1: ');
    fixed = fixed.replace(/(\w+):\s*r:\s*/g, '$1: ');
    fixed = fixed.replace(/(\w+):\s*n:\s*/g, '$1: ');
    fixed = fixed.replace(/(\w+):\s*g:\s*/g, '$1: ');
    fixed = fixed.replace(/(\w+):\s*l:\s*/g, '$1: ');
    fixed = fixed.replace(/(\w+):\s*h:\s*/g, '$1: ');
    fixed = fixed.replace(/(\w+):\s*o:\s*/g, '$1: ');
    fixed = fixed.replace(/(\w+):\s*i:\s*/g, '$1: ');
    fixed = fixed.replace(/(\w+):\s*u:\s*/g, '$1: ');
    fixed = fixed.replace(/(\w+):\s*w:\s*/g, '$1: ');
    fixed = fixed.replace(/(\w+):\s*x:\s*/g, '$1: ');
    fixed = fixed.replace(/(\w+):\s*y:\s*/g, '$1: ');
    fixed = fixed.replace(/(\w+):\s*z:\s*/g, '$1: ');

    // Fix array syntax errors
    fixed = fixed.replace(/\[\s*(\w+):\s*e:\s*([^\]]+)\]/g, '[$1: $2]');
    fixed = fixed.replace(/\[\s*(\w+):\s*s:\s*([^\]]+)\]/g, '[$1: $2]');

    // Fix function parameter syntax errors
    fixed = fixed.replace(/\(\s*(\w+):\s*e:\s*/g, '($1: ');
    fixed = fixed.replace(/\(\s*(\w+):\s*s:\s*/g, '($1: ');

    // Fix destructuring syntax errors
    fixed = fixed.replace(/\{\s*(\w+):\s*e:\s*([^}]+)\}/g, '{$1: $2}');
    fixed = fixed.replace(/\{\s*(\w+):\s*s:\s*([^}]+)\}/g, '{$1: $2}');

    // Fix template literal syntax errors
    fixed = fixed.replace(/`([^`]*)\$\{([^}]+):\s*e:\s*([^}]+)\}([^`]*)`/g, '`$1${$2: $3}$4`');
    fixed = fixed.replace(/`([^`]*)\$\{([^}]+):\s*s:\s*([^}]+)\}([^`]*)`/g, '`$1${$2: $3}$4`');

    // Fix common typos in property names
    const propertyFixes = {
      'nam: ': 'name:',
      'scrip: ': 'script:',
      'arg: ': 'args:',
      'cw: ': 'cwd:',
      'instance: ': 'instances:',
      'autorestar: ': 'autorestart:',
      'watc: ': 'watch:',
      'max_memory_restar: ': 'max_memory_restart:',
      'env:': 'env:',
      'NODE_ENV:': 'NODE_ENV:',
      'cron_restar: ': 'cron_restart:',
      'error_file:': 'error_file:',
      'out_fil: ': 'out_file:',
      'log_fil: ': 'log_file:',
      'tim: ': 'time:',
      'app: ': 'apps:',
      'di: ': 'dir:',
      'recursiv: ': 'recursive:',
      'encodin: ': 'encoding:',
      'stdi: ': 'stdio:',
      'succes: ': 'success:',
      'erro: ': 'error:',
      'desc:': 'desc:',
      'cm: ': 'cmd:',
      'timestam: ': 'timestamp:',
      'statu: ': 'status:',
      'script: ': 'scripts:',
      'lintin: ': 'linting:',
      'buil: ': 'build:',
      'automatio: ': 'automation:',
      'summar: ': 'summary:',
      'unsafe_mat: ': 'unsafe_math:',
      'unsafe_prot: ': 'unsafe_proto:',
      'unsafe_regex: ': 'unsafe_regexp:',
      'unsafe_undefine: ': 'unsafe_undefined:',
      'mangl: ': 'mangle:',
      'safari10:': 'safari10:',
      'propertie: ': 'properties:',
      'rege: ': 'regex:',
      'chunkSizeWarningLimi: ': 'chunkSizeWarningLimit:',
      'reportCompressedSiz: ': 'reportCompressedSize:',
      'emptyOutDi: ': 'emptyOutDir:',
      'assetsInlineLimi: ': 'assetsInlineLimit:',
      'optimizeDep: ': 'optimizeDeps:',
      'includ: ': 'include:',
      'exclud: ': 'exclude:',
      'esbuildOption: ': 'esbuildOptions:',
      'targe: ': 'target:',
      'cs: ': 'css:',
      'devSourcema: ': 'devSourcemap:',
      'esbuil: ': 'esbuild:',
      'js: ': 'jsx:',
      'serve: ': 'server:',
      'por: ': 'port:',
      'hos: ': 'host:',
      'ope: ': 'open:',
      'cor: ': 'cors:',
      'hm: ': 'hmr:',
      'overla: ': 'overlay:',
      'f: ': 'fs:',
      'allo: ': 'allow:',
      'previe: ': 'preview:',
      'defin: ': 'define:',
      '__DEV__:': '__DEV__:',
      '__PROD__:': '__PROD__:',
      'envPrefi: ': 'envPrefix:',
      'experimenta: ': 'experimental:',
      'j: ': 'js:',
      'relativ: ': 'relative:'
    };

    for (const [wrong, correct] of Object.entries(propertyFixes)) {
      fixed = fixed.replace(new RegExp(wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), correct);
    }

    return fixed;
  }

  // Fix JSX syntax errors
  fixJSXErrors(content) {
    let fixed = content;

    // Fix unclosed JSX tags
    const jsxTagRegex = /<(\w+)([^>]*?)(?<!\/)>/g;
    const matches = [...content.matchAll(jsxTagRegex)];
    
    for (const match of matches) {
      const fullTag = match[0];
      const tagName = match[1];
      const attributes = match[2];
      
      // Check if this is a self-closing tag
      if (attributes.includes('/>')) {
        continue;
      }
      
      // Find the closing tag
      const closingTagRegex = new RegExp(`</${tagName}>`, 'g');
      const closingMatches = [...content.matchAll(closingTagRegex)];
      
      if (closingMatches.length === 0) {
        // This tag is not closed, try to find where it should be closed
        const openTagIndex = match.index;
        const nextOpenTag = content.indexOf('<', openTagIndex + fullTag.length);
        const nextCloseTag = content.indexOf('>', openTagIndex + fullTag.length);
        
        if (nextCloseTag < nextOpenTag || nextOpenTag === -1) {
          // Add closing tag
          const insertIndex = nextCloseTag + 1;
          fixed = fixed.substring(0, insertIndex) + `</${tagName}>` + fixed.substring(insertIndex);
        }
      }
    }

    return fixed;
  }

  // Fix TypeScript specific errors
  fixTypeScriptErrors(content) {
    let fixed = content;

    // Fix interface property syntax
    fixed = fixed.replace(/interface\s+(\w+)\s*\{([^}]*)\}/g, (match, name, body) => {
      const fixedBody = body.replace(/(\w+):\s*e:\s*/g, '$1: ');
      return `interface ${name} {${fixedBody}}`;
    });

    // Fix type alias syntax
    fixed = fixed.replace(/type\s+(\w+)\s*=\s*\{([^}]*)\}/g, (match, name, body) => {
      const fixedBody = body.replace(/(\w+):\s*e:\s*/g, '$1: ');
      return `type ${name} = {${fixedBody}}`;
    });

    return fixed;
  }

  // Process a single file
  async processFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        this.log(`⚠️ File not found: ${filePath}`);
        return false;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = content;

      // Apply all fixes
      fixed = this.fixSyntaxErrors(fixed);
      fixed = this.fixJSXErrors(fixed);
      fixed = this.fixTypeScriptErrors(fixed);

      // Only write if content changed
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${filePath}`);
        return true;
      }

      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error processing ${filePath}: ${error.message}`);
      return false;
    }
  }

  // Find all relevant files
  findFiles() {
    const files = [];
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'];
    const ignoreDirs = ['node_modules', '.git', '.next', 'dist', 'build', 'out'];

    const scanDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);

          if (stat.isDirectory()) {
            if (!ignoreDirs.includes(item)) {
              scanDir(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        this.log(`⚠️ Error scanning directory ${dir}: ${error.message}`);
      }
    };

    scanDir(__dirname);
    return files;
  }

  // Run the fixer
  async run() {
    try {
      this.log('🔍 Scanning for files to fix...');
      const files = this.findFiles();
      this.log(`📁 Found ${files.length} files to process`);

      let fixedCount = 0;
      for (const file of files) {
        const wasFixed = await this.processFile(file);
        if (wasFixed) {
          fixedCount++;
        }
      }

      this.log(`🎉 Fixed ${fixedCount} files out of ${files.length} processed`);
      this.log(`❌ ${this.errors.length} errors encountered`);

      // Generate report
      const report = {
        timestamp: new Date().toISOString(),
        totalFiles: files.length,
        fixedFiles: fixedCount,
        errors: this.errors,
        fixedFileList: this.fixedFiles
      };

      const reportPath = path.join(__dirname, 'automation-reports', 'syntax-fixer-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`📊 Report saved to: ${reportPath}`);

      return { success: true, fixedCount, errorCount: this.errors.length };
    } catch (error) {
      this.log(`❌ Fatal error: ${error.message}`);
      return { success: false, error: error.message };
    }
  }
}

// Run the fixer
const fixer = new ComprehensiveSyntaxFixer();
fixer.run().then(result => {
  if (result.success) {
    console.log(`✅ Syntax fixer completed successfully! Fixed ${result.fixedCount} files.`);
    process.exit(0);
  } else {
    console.log(`❌ Syntax fixer failed: ${result.error}`);
    process.exit(1);
  }
}).catch(error => {
  console.error(`❌ Unexpected error: ${error.message}`);
  process.exit(1);
});