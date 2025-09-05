const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class ComprehensiveSyntaxFixer {
  constructor() {
    this.logFile = path.join(__dirname, '..', 'automation', 'logs', 'syntax-fixer.log');
    this.fixedFiles = [];
    this.corruptedFiles = [];
    this.mergeConflictFiles = [];
    this.syntaxErrorFiles = [];
  }

  log(message) {
    const timestamp = new Date().toISOString();
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
    return content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>');
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
    fixed = fixed.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n/g, '$1\n');
    
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

module.exports = ComprehensiveSyntaxFixer;