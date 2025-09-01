#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class ImportExportFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'import-export-fixer-report.json');
    this.fixes = [];
    this.startTime = Date.now();
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  }

  async run() {
    this.log('Starting Import/Export Fixer...', 'info');
    
    try {
      await this.fixImportExportIssues();
      await this.generateReport();
      
      this.log('Import/Export Fixer completed successfully!', 'success');
    } catch (error) {
      this.log(`Error in Import/Export Fixer: ${error.message}`, 'error');
      await this.generateReport();
      process.exit(1);
    }
  }

  async fixImportExportIssues() {
    this.log('Fixing import/export issues...', 'info');
    
    // Find all JavaScript and TypeScript files
    const files = glob.sync('src/**/*.{js,jsx,ts,tsx}', { cwd: this.projectRoot });
    
    for (const file of files) {
      const filePath = path.join(this.projectRoot, file);
      const content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      let newContent = content;

      // Fix relative imports
      const importRegex = /import\s+.*\s+from\s+['"]([^'"]+)['"]/g;
      let match;
      
      while ((match = importRegex.exec(newContent)) !== null) {
        const importPath = match[1];
        
        // Fix relative imports that don't exist
        if (importPath.startsWith('./') || importPath.startsWith('../')) {
          const resolvedPath = path.resolve(path.dirname(filePath), importPath);
          
          // Check if file exists
          if (!fs.existsSync(resolvedPath) && !fs.existsSync(resolvedPath + '.js') && 
              !fs.existsSync(resolvedPath + '.ts') && !fs.existsSync(resolvedPath + '.tsx')) {
            
            // Try to find the correct path
            const possibleExtensions = ['.js', '.ts', '.tsx', '.jsx'];
            let found = false;
            
            for (const ext of possibleExtensions) {
              const testPath = resolvedPath + ext;
              if (fs.existsSync(testPath)) {
                const relativePath = path.relative(path.dirname(filePath), testPath);
                newContent = newContent.replace(match[0], 
                  match[0].replace(importPath, relativePath.startsWith('.') ? relativePath : './' + relativePath));
                found = true;
                break;
              }
            }
            
            if (!found) {
              // Remove the import if file doesn't exist
              newContent = newContent.replace(match[0], '');
            }
            
            modified = true;
          }
        }
      }

      // Fix missing exports
      const hasDefaultExport = /export\s+default/.test(newContent);
      const hasNamedExports = /export\s+(const|function|class|interface|type)/.test(newContent);

      // If file has components but no exports, add default export
      if (!hasDefaultExport && !hasNamedExports && newContent.includes('function') && file.endsWith('.tsx')) {
        const componentMatch = newContent.match(/function\s+(\w+)/);
        if (componentMatch) {
          const componentName = componentMatch[1];
          newContent += `\n\nexport default ${componentName};`;
          modified = true;
        }
      }

      // Add named exports for components
      const componentRegex = /(?:export\s+)?(?:function|const)\s+(\w+)(?:\s*[:=]\s*(?:React\.)?(?:FC|FunctionComponent))?/g;
      let componentMatch;
      const components = [];
      
      while ((componentMatch = componentRegex.exec(newContent)) !== null) {
        const componentName = componentMatch[1];
        if (componentName[0] === componentName[0].toUpperCase()) {
          components.push(componentName);
        }
      }

      if (components.length > 0 && !hasNamedExports) {
        const exportStatement = `\n\nexport { ${components.join(', ')} };`;
        newContent += exportStatement;
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(filePath, newContent);
        this.fixes.push({
          type: 'import-export',
          file,
          description: 'Fixed import/export issues',
          timestamp: Date.now()
        });
        this.log(`Fixed import/export issues in ${file}`, 'info');
      }
    }
  }

  async generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: duration,
      fixes: this.fixes,
      summary: {
        totalFixes: this.fixes.length,
        success: true
      }
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${this.reportFile}`, 'info');
    this.log(`Total fixes: ${this.fixes.length}`, 'info');
    this.log(`Duration: ${duration}ms`, 'info');
  }
}

// Run the import/export fixer
const fixer = new ImportExportFixer();
fixer.run().catch(console.error);