#!/usr/bin/env node

/**
 * TypeScript Error Fixer - Automatically fixes TypeScript syntax and import issues
 * Runs every 30 minutes to keep TypeScript compilation clean
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class TypeScriptErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'typescript-fixes-report.json');
    this.fixableErrors = 0;
    this.fixedErrors = 0;
    this.totalErrors = 0;
    this.startTime = new Date();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async runTypeScriptFix() {
    try {
      this.log('Starting TypeScript error fix process...');
      
      // First, run type check to see current errors
      const currentErrors = await this.getCurrentTypeScriptErrors();
      this.totalErrors = currentErrors;
      
      if (currentErrors === 0) {
        this.log('No TypeScript errors found. Code is clean!');
        return;
      }

      this.log(`Found ${currentErrors} TypeScript errors. Attempting to fix...`);

      // Fix common TypeScript issues
      await this.fixCommonTypeScriptIssues();
      
      // Run type check again to see improvement
      const remainingErrors = await this.getCurrentTypeScriptErrors();
      this.fixedErrors = currentErrors - remainingErrors;
      
      this.log(`Fixed ${this.fixedErrors} TypeScript errors`);
      this.log(`Remaining errors: ${remainingErrors}`);

    } catch (error) {
      this.log(`Error during TypeScript fix: ${error.message}`, 'ERROR');
    } finally {
      await this.generateReport();
    }
  }

  async getCurrentTypeScriptErrors() {
    try {
      const result = execSync('npm run type-check 2>&1', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Count errors from output
      const errorLines = result.split('\n').filter(line => 
        line.includes('error TS') || line.includes('Error TS')
      );
      
      return errorLines.length;
    } catch (error) {
      // If type-check fails, extract error count from stderr
      const stderr = error.stderr || error.stdout || '';
      const errorMatches = stderr.match(/(\d+)\s+errors?/);
      return errorMatches ? parseInt(errorMatches[1]) : 0;
    }
  }

  async fixCommonTypeScriptIssues() {
    this.log('Fixing common TypeScript issues...');
    
    try {
      // Fix missing exports
      await this.fixMissingExports();
      
      // Fix import/export issues
      await this.fixImportExportIssues();
      
      // Fix type annotation issues
      await this.fixTypeAnnotationIssues();
      
      // Fix duplicate identifier issues
      await this.fixDuplicateIdentifiers();
      
      // Fix module resolution issues
      await this.fixModuleResolutionIssues();
      
    } catch (error) {
      this.log(`Error fixing TypeScript issues: ${error.message}`, 'ERROR');
    }
  }

  async fixMissingExports() {
    this.log('Fixing missing exports...');
    
    try {
      const tsxFiles = this.findTSXFiles();
      
      for (const file of tsxFiles) {
        await this.fixFileMissingExports(file);
      }
    } catch (error) {
      this.log(`Error fixing missing exports: ${error.message}`, 'ERROR');
    }
  }

  findTSXFiles() {
    const tsxFiles = [];
    
    const walkDir = (dir) => {
      const files = fs.readdirSync(dir);
      
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
          walkDir(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          tsxFiles.push(filePath);
        }
      }
    };
    
    walkDir(path.join(this.projectRoot, 'src'));
    return tsxFiles;
  }

  async fixFileMissingExports(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Check if file has any exports
      if (!content.includes('export default') && !content.includes('export {')) {
        // Check if it's a React component
        if (content.includes('React') || content.includes('react')) {
          const componentName = path.basename(filePath, path.extname(filePath));
          const defaultExport = `\n\nexport default ${componentName};\n`;
          
          fs.appendFileSync(filePath, defaultExport);
          this.log(`Added default export to ${path.relative(this.projectRoot, filePath)}`);
          modified = true;
        }
      }
      
      return modified;
    } catch (error) {
      this.log(`Error fixing file ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixImportExportIssues() {
    this.log('Fixing import/export issues...');
    
    try {
      const tsxFiles = this.findTSXFiles();
      
      for (const file of tsxFiles) {
        await this.fixFileImportExportIssues(file);
      }
    } catch (error) {
      this.log(`Error fixing import/export issues: ${error.message}`, 'ERROR');
    }
  }

  async fixFileImportExportIssues(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix default import issues
      if (content.includes('import') && content.includes('from')) {
        // Fix missing default exports for imported components
        const importMatches = content.match(/import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g);
        
        if (importMatches) {
          for (const importMatch of importMatches) {
            const componentName = importMatch.match(/import\s+(\w+)/)[1];
            
            // Check if this component is used in JSX
            if (content.includes(`<${componentName}`) || content.includes(`<${componentName} `)) {
              // Ensure the component is exported
              if (!content.includes(`export default ${componentName}`) && !content.includes(`export { ${componentName} }`)) {
                const exportStatement = `\nexport { ${componentName} };\n`;
                fs.appendFileSync(filePath, exportStatement);
                this.log(`Added export for ${componentName} in ${path.relative(this.projectRoot, filePath)}`);
                modified = true;
              }
            }
          }
        }
      }
      
      return modified;
    } catch (error) {
      this.log(`Error fixing import/export issues in ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixTypeAnnotationIssues() {
    this.log('Fixing type annotation issues...');
    
    try {
      const tsxFiles = this.findTSXFiles();
      
      for (const file of tsxFiles) {
        await this.fixFileTypeAnnotationIssues(file);
      }
    } catch (error) {
      this.log(`Error fixing type annotation issues: ${error.message}`, 'ERROR');
    }
  }

  async fixFileTypeAnnotationIssues(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix any types
      if (content.includes(': any')) {
        content = content.replace(/: any/g, ': unknown');
        modified = true;
      }
      
      // Fix function parameter types
      const functionParamRegex = /function\s+\w+\s*\(([^)]*)\)/g;
      let match;
      while ((match = functionParamRegex.exec(content)) !== null) {
        const params = match[1];
        if (params && !params.includes(':')) {
          // Add basic types for untyped parameters
          const newParams = params.split(',').map(param => {
            const trimmed = param.trim();
            if (trimmed && !trimmed.includes(':')) {
              return `${trimmed}: unknown`;
            }
            return trimmed;
          }).join(', ');
          
          content = content.replace(match[0], match[0].replace(params, newParams));
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.log(`Fixed type annotations in ${path.relative(this.projectRoot, filePath)}`);
      }
      
      return modified;
    } catch (error) {
      this.log(`Error fixing type annotations in ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixDuplicateIdentifiers() {
    this.log('Fixing duplicate identifier issues...');
    
    try {
      const tsxFiles = this.findTSXFiles();
      
      for (const file of tsxFiles) {
        await this.fixFileDuplicateIdentifiers(file);
      }
    } catch (error) {
      this.log(`Error fixing duplicate identifiers: ${error.message}`, 'ERROR');
    }
  }

  async fixFileDuplicateIdentifiers(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Find duplicate imports from the same module
      const importRegex = /import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/g;
      const imports = new Map();
      
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        const source = match[2];
        const importsList = match[1].split(',').map(imp => imp.trim());
        
        if (!imports.has(source)) {
          imports.set(source, new Set());
        }
        
        importsList.forEach(imp => imports.get(source).add(imp));
      }
      
      // Rebuild import statements without duplicates
      let newImports = '';
      for (const [source, importSet] of imports) {
        const importList = Array.from(importSet).join(', ');
        newImports += `import { ${importList} } from '${source}';\n`;
      }
      
      // Replace all imports with deduplicated ones
      const newContent = content.replace(importRegex, () => {
        modified = true;
        return '';
      });
      
      if (modified) {
        const finalContent = newImports + '\n' + newContent;
        fs.writeFileSync(filePath, finalContent, 'utf8');
        this.log(`Fixed duplicate identifiers in ${path.relative(this.projectRoot, filePath)}`);
      }
      
      return modified;
    } catch (error) {
      this.log(`Error fixing duplicate identifiers in ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixModuleResolutionIssues() {
    this.log('Fixing module resolution issues...');
    
    try {
      // Check tsconfig.json for proper module resolution
      const tsconfigPath = path.join(this.projectRoot, 'tsconfig.json');
      
      if (fs.existsSync(tsconfigPath)) {
        let tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
        let modified = false;
        
        // Ensure proper module resolution settings
        if (!tsconfig.compilerOptions) {
          tsconfig.compilerOptions = {};
          modified = true;
        }
        
        if (!tsconfig.compilerOptions.moduleResolution) {
          tsconfig.compilerOptions.moduleResolution = 'node';
          modified = true;
        }
        
        if (!tsconfig.compilerOptions.allowSyntheticDefaultImports) {
          tsconfig.compilerOptions.allowSyntheticDefaultImports = true;
          modified = true;
        }
        
        if (!tsconfig.compilerOptions.esModuleInterop) {
          tsconfig.compilerOptions.esModuleInterop = true;
          modified = true;
        }
        
        if (modified) {
          fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
          this.log('Updated tsconfig.json with proper module resolution settings');
        }
      }
      
    } catch (error) {
      this.log(`Error fixing module resolution issues: ${error.message}`, 'ERROR');
    }
  }

  async generateReport() {
    const endTime = new Date();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: endTime.toISOString(),
      duration: duration,
      totalErrors: this.totalErrors,
      fixedErrors: this.fixedErrors,
      remainingErrors: this.totalErrors - this.fixedErrors,
      success: this.fixedErrors > 0,
      details: {
        startTime: this.startTime.toISOString(),
        endTime: endTime.toISOString(),
        projectRoot: this.projectRoot
      }
    };
    
    // Save report
    fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));
    
    // Log summary
    this.log('=== TypeScript Error Fix Report ===');
    this.log(`Total errors found: ${this.totalErrors}`);
    this.log(`Errors fixed: ${this.fixedErrors}`);
    this.log(`Remaining errors: ${report.remainingErrors}`);
    this.log(`Duration: ${duration}ms`);
    this.log(`Report saved to: ${this.logFile}`);
    
    return report;
  }
}

// Main execution
if (require.main === module) {
  const fixer = new TypeScriptErrorFixer();
  fixer.runTypeScriptFix().catch(console.error);
}

module.exports = TypeScriptErrorFixer;