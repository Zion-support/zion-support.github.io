#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class FileExtensionFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automation/logs');
    this.fixesApplied = [];
    this.startTime = Date.now();
    
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [FileExtensionFixer] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logsDir, 'file-extension-fixer.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, output: error.stdout || error.stderr || error.message };
    }
  }

  async fixFileExtensions() {
    this.log('Starting file extension fixes...');
    
    // Fix JSX files with wrong extensions
    const jsFiles = glob.sync('src/**/*.js', { cwd: this.projectRoot });
    
    for (const file of jsFiles) {
      const filePath = path.join(this.projectRoot, file);
      
      // Skip if it's a directory
      if (fs.statSync(filePath).isDirectory()) {
        continue;
      }
      
      const content = fs.readFileSync(filePath, 'utf8');
      
      if (content.includes('jsx') || content.includes('React') || content.includes('<')) {
        const newPath = filePath.replace('.js', '.jsx');
        if (!fs.existsSync(newPath)) {
          fs.renameSync(filePath, newPath);
          this.fixesApplied.push({
            type: 'extension',
            file: file.replace('.js', '.jsx'),
            description: 'Changed .js to .jsx for JSX content'
          });
          this.log(`Fixed file extension: ${file} -> ${file.replace('.js', '.jsx')}`);
        }
      }
    }

    // Fix TypeScript files with wrong extensions
    const jsxFiles = glob.sync('src/**/*.jsx', { cwd: this.projectRoot });
    
    for (const file of jsxFiles) {
      const filePath = path.join(this.projectRoot, file);
      
      // Skip if it's a directory
      if (fs.statSync(filePath).isDirectory()) {
        continue;
      }
      
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file contains TypeScript syntax
      if (content.includes(': ') && (content.includes('interface') || content.includes('type ') || content.includes(': string') || content.includes(': number'))) {
        const newPath = filePath.replace('.jsx', '.tsx');
        if (!fs.existsSync(newPath)) {
          fs.renameSync(filePath, newPath);
          this.fixesApplied.push({
            type: 'extension',
            file: file.replace('.jsx', '.tsx'),
            description: 'Changed .jsx to .tsx for TypeScript content'
          });
          this.log(`Fixed file extension: ${file} -> ${file.replace('.jsx', '.tsx')}`);
        }
      }
    }
  }

  async fixImportStatements() {
    this.log('Fixing import statements for renamed files...');
    
    const allFiles = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: this.projectRoot });
    
    for (const file of allFiles) {
      const filePath = path.join(this.projectRoot, file);
      
      // Skip if it's a directory
      if (fs.statSync(filePath).isDirectory()) {
        continue;
      }
      
      const content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      let newContent = content;

      // Update import statements to use correct extensions
      const importRegex = /import\s+.*\s+from\s+['"]([^'"]+)['"]/g;
      newContent = newContent.replace(importRegex, (match, importPath) => {
        if (importPath.startsWith('./') || importPath.startsWith('../')) {
          const resolvedPath = path.resolve(path.dirname(filePath), importPath);
          
          // Check if the imported file was renamed
          const possibleExtensions = ['.ts', '.tsx', '.js', '.jsx'];
          for (const ext of possibleExtensions) {
            const testPath = resolvedPath + ext;
            if (fs.existsSync(testPath)) {
              const relativePath = path.relative(path.dirname(filePath), testPath);
              if (relativePath !== importPath) {
                modified = true;
                return match.replace(importPath, relativePath.startsWith('.') ? relativePath : './' + relativePath);
              }
            }
          }
        }
        return match;
      });

      if (modified) {
        fs.writeFileSync(filePath, newContent);
        this.fixesApplied.push({
          type: 'import_update',
          file,
          description: 'Updated import statements for renamed files'
        });
        this.log(`Updated import statements in ${file}`);
      }
    }
  }

  async generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      fixesApplied: this.fixesApplied,
      summary: {
        totalFixes: this.fixesApplied.length,
        success: true
      }
    };
    
    this.log(`File extension fixing completed. Total fixes: ${report.summary.totalFixes}`);
    return report;
  }

  async run() {
    this.log('Starting File Extension Fixer...');
    
    try {
      await this.fixFileExtensions();
      await this.fixImportStatements();
      
      const report = await this.generateReport();
      this.log('File Extension Fixer completed successfully');
      return report;
      
    } catch (error) {
      this.log(`Error in file extension fixer: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const fixer = new FileExtensionFixer();
  fixer.run()
    .then(report => {
      console.log('File Extension Fixer completed successfully');
      process.exit(0);
    })
    .catch(error => {
      console.error('File Extension Fixer failed:', error);
      process.exit(1);
    });
}

module.exports = FileExtensionFixer;