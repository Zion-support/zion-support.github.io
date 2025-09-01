#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class ImportErrorFixer {
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
    const logMessage = `[${timestamp}] [${level}] [ImportErrorFixer] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logsDir, 'import-error-fixer.log');
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

  async fixImportErrors() {
    this.log('Starting import error fixing...');
    
    const tsFiles = glob.sync('src/**/*.{ts,tsx}', { cwd: this.projectRoot });
    
    for (const file of tsFiles) {
      const filePath = path.join(this.projectRoot, file);
      
      // Skip if it's a directory
      if (fs.statSync(filePath).isDirectory()) {
        continue;
      }
      
      const content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      let newContent = content;

      // Fix relative imports
      const importRegex = /import\s+.*\s+from\s+['"]([^'"]+)['"]/g;
      newContent = newContent.replace(importRegex, (match, importPath) => {
        if (importPath.startsWith('./') || importPath.startsWith('../')) {
          // Check if file exists
          const resolvedPath = path.resolve(path.dirname(filePath), importPath);
          if (!fs.existsSync(resolvedPath) && !fs.existsSync(resolvedPath + '.ts') && !fs.existsSync(resolvedPath + '.tsx')) {
            // Try to find the correct path
            const possibleExtensions = ['.ts', '.tsx', '.js', '.jsx'];
            for (const ext of possibleExtensions) {
              const testPath = resolvedPath + ext;
              if (fs.existsSync(testPath)) {
                const relativePath = path.relative(path.dirname(filePath), testPath);
                modified = true;
                return match.replace(importPath, relativePath.startsWith('.') ? relativePath : './' + relativePath);
              }
            }
            
            // Try to find files with similar names
            const dir = path.dirname(resolvedPath);
            const baseName = path.basename(resolvedPath);
            if (fs.existsSync(dir)) {
              const files = fs.readdirSync(dir);
              const similarFile = files.find(f => 
                f.toLowerCase().includes(baseName.toLowerCase()) && 
                (f.endsWith('.ts') || f.endsWith('.tsx') || f.endsWith('.js') || f.endsWith('.jsx'))
              );
              if (similarFile) {
                const relativePath = path.relative(path.dirname(filePath), path.join(dir, similarFile));
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
          type: 'import',
          file,
          description: 'Fixed import paths'
        });
        this.log(`Fixed import errors in ${file}`);
      }
    }
  }

  async fixMissingExports() {
    this.log('Checking for missing exports...');
    
    const tsFiles = glob.sync('src/**/*.{ts,tsx}', { cwd: this.projectRoot });
    
    for (const file of tsFiles) {
      const filePath = path.join(this.projectRoot, file);
      
      // Skip if it's a directory
      if (fs.statSync(filePath).isDirectory()) {
        continue;
      }
      
      const content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      let newContent = content;

      // Add default exports for components that don't have them
      if (file.endsWith('.tsx') && content.includes('export default') === false && content.includes('function') && content.includes('React')) {
        const functionMatch = content.match(/function\s+(\w+)/);
        if (functionMatch) {
          const componentName = functionMatch[1];
          if (componentName.charAt(0) === componentName.charAt(0).toUpperCase()) {
            newContent += `\n\nexport default ${componentName};`;
            modified = true;
          }
        }
      }

      if (modified) {
        fs.writeFileSync(filePath, newContent);
        this.fixesApplied.push({
          type: 'export',
          file,
          description: 'Added missing default export'
        });
        this.log(`Added missing export in ${file}`);
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
    
    this.log(`Import error fixing completed. Total fixes: ${report.summary.totalFixes}`);
    return report;
  }

  async run() {
    this.log('Starting Import Error Fixer...');
    
    try {
      await this.fixImportErrors();
      await this.fixMissingExports();
      
      const report = await this.generateReport();
      this.log('Import Error Fixer completed successfully');
      return report;
      
    } catch (error) {
      this.log(`Error in import error fixer: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const fixer = new ImportErrorFixer();
  fixer.run()
    .then(report => {
      console.log('Import Error Fixer completed successfully');
      process.exit(0);
    })
    .catch(error => {
      console.error('Import Error Fixer failed:', error);
      process.exit(1);
    });
}

module.exports = ImportErrorFixer;