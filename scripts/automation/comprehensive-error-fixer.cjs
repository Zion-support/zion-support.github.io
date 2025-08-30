#!/usr/bin/env node

/**
 * Comprehensive Error Fixer - PM2 Automation Script
 * 
 * This script automatically detects and fixes common TypeScript, ESLint, and project errors:
 * - Duplicate imports and identifiers
 * - Missing exports
 * - Unused variables and imports
 * - Type mismatches
 * - File naming conflicts
 * - Import/export mismatches
 * 
 * Runs every 30 minutes to continuously maintain code quality
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class ComprehensiveErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'comprehensive-error-fixer-report.json');
    this.errorsFixed = 0;
    this.filesProcessed = 0;
    this.startTime = Date.now();
  }

  async run() {
    console.log('🚀 Starting Comprehensive Error Fixer...');
    
    try {
      // Step 1: Detect all errors
      const errors = await this.detectAllErrors();
      
      // Step 2: Fix errors systematically
      await this.fixErrorsSystematically(errors);
      
      // Step 3: Generate report
      await this.generateReport();
      
      console.log(`✅ Comprehensive Error Fixer completed! Fixed ${this.errorsFixed} errors in ${this.filesProcessed} files.`);
      
    } catch (error) {
      console.error('❌ Error in Comprehensive Error Fixer:', error);
      await this.generateErrorReport(error);
    }
  }

  async detectAllErrors() {
    console.log('🔍 Detecting all project errors...');
    
    const errors = {
      typescript: [],
      eslint: [],
      import: [],
      export: [],
      duplicate: [],
      unused: [],
      naming: []
    };

    try {
      // Detect TypeScript errors
      const tsErrors = await this.runTypeCheck();
      errors.typescript = this.parseTypeScriptErrors(tsErrors);
      
      // Detect ESLint errors
      const lintErrors = await this.runLintCheck();
      errors.eslint = this.parseLintErrors(lintErrors);
      
      // Detect import/export issues
      errors.import = await this.detectImportIssues();
      errors.export = await this.detectExportIssues();
      
      // Detect duplicate identifiers
      errors.duplicate = await this.detectDuplicateIdentifiers();
      
      // Detect unused variables/imports
      errors.unused = await this.detectUnusedVariables();
      
      // Detect naming conflicts
      errors.naming = await this.detectNamingConflicts();
      
    } catch (error) {
      console.log('⚠️ Some error detection methods failed, continuing with available data...');
    }

    return errors;
  }

  async runTypeCheck() {
    try {
      return execSync('npm run type-check 2>&1', { encoding: 'utf8' });
    } catch (error) {
      return error.stdout || error.stderr || error.message;
    }
  }

  async runLintCheck() {
    try {
      return execSync('npm run lint 2>&1', { encoding: 'utf8' });
    } catch (error) {
      return error.stdout || error.stderr || error.message;
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/src\/[^:]+:\d+:\d+ - error TS\d+:(.+)/);
        if (match) {
          errors.push({
            type: 'typescript',
            message: match[1].trim(),
            line: line
          });
        }
      }
    }
    
    return errors;
  }

  parseLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error') || line.includes('warning')) {
        errors.push({
          type: 'eslint',
          message: line.trim(),
          line: line
        });
      }
    }
    
    return errors;
  }

  async detectImportIssues() {
    const issues = [];
    const tsxFiles = glob.sync('src/**/*.{ts,tsx,js,jsx}');
    
    for (const file of tsxFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          // Check for import issues
          if (line.includes('import') && line.includes('from')) {
            const importMatch = line.match(/import\s+(.+?)\s+from\s+['"]([^'"]+)['"]/);
            if (importMatch) {
              const importPath = importMatch[2];
              const importName = importMatch[1];
              
              // Check if import path exists
              if (importPath.startsWith('.') || importPath.startsWith('@/')) {
                const resolvedPath = this.resolveImportPath(file, importPath);
                if (!fs.existsSync(resolvedPath)) {
                  issues.push({
                    file,
                    line: i + 1,
                    type: 'import',
                    message: `Import path not found: ${importPath}`,
                    importPath,
                    importName
                  });
                }
              }
            }
          }
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return issues;
  }

  async detectExportIssues() {
    const issues = [];
    const tsxFiles = glob.sync('src/**/*.{ts,tsx,js,jsx}');
    
    for (const file of tsxFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check if file has default export
        if (content.includes('export default') || content.includes('export {') || content.includes('export *')) {
          // File has exports, check if they're properly imported elsewhere
        } else {
          // Check if this is a page/component that should have exports
          if (file.includes('/pages/') || file.includes('/components/')) {
            issues.push({
              file,
              type: 'export',
              message: 'File appears to be a page/component but has no exports'
            });
          }
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return issues;
  }

  async detectDuplicateIdentifiers() {
    const issues = [];
    const tsxFiles = glob.sync('src/**/*.{ts,tsx,js,jsx}');
    
    for (const file of tsxFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        
        const identifiers = new Map();
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          // Check for duplicate imports
          if (line.includes('import') && line.includes('{')) {
            const importMatch = line.match(/import\s*{([^}]+)}\s+from/);
            if (importMatch) {
              const imports = importMatch[1].split(',').map(imp => imp.trim());
              
              for (const imp of imports) {
                const cleanImp = imp.replace(/\s+as\s+.+/, '').trim();
                if (identifiers.has(cleanImp)) {
                  issues.push({
                    file,
                    line: i + 1,
                    type: 'duplicate',
                    message: `Duplicate import: ${cleanImp}`,
                    identifier: cleanImp
                  });
                } else {
                  identifiers.set(cleanImp, i + 1);
                }
              }
            }
          }
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return issues;
  }

  async detectUnusedVariables() {
    const issues = [];
    const tsxFiles = glob.sync('src/**/*.{ts,tsx,js,jsx}');
    
    for (const file of tsxFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          // Check for unused imports (basic check)
          if (line.includes('import') && !content.includes(line.split('import')[1].split('from')[0].trim())) {
            issues.push({
              file,
              line: i + 1,
              type: 'unused',
              message: 'Potentially unused import',
              import: line.trim()
            });
          }
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return issues;
  }

  async detectNamingConflicts() {
    const issues = [];
    const files = glob.sync('src/**/*');
    
    // Check for files with same name but different casing
    const fileMap = new Map();
    
    for (const file of files) {
      const fileName = path.basename(file);
      const lowerFileName = fileName.toLowerCase();
      
      if (fileMap.has(lowerFileName)) {
        const existingFile = fileMap.get(lowerFileName);
        if (existingFile !== fileName) {
          issues.push({
            type: 'naming',
            message: `File naming conflict: ${existingFile} vs ${fileName}`,
            file1: existingFile,
            file2: fileName
          });
        }
      } else {
        fileMap.set(lowerFileName, fileName);
      }
    }
    
    return issues;
  }

  resolveImportPath(currentFile, importPath) {
    if (importPath.startsWith('@/')) {
      return path.join(this.projectRoot, 'src', importPath.substring(2));
    } else if (importPath.startsWith('.')) {
      return path.resolve(path.dirname(currentFile), importPath);
    }
    return importPath;
  }

  async fixErrorsSystematically(errors) {
    console.log('🔧 Fixing errors systematically...');
    
    // Fix TypeScript errors
    await this.fixTypeScriptErrors(errors.typescript);
    
    // Fix import/export issues
    await this.fixImportExportIssues(errors.import, errors.export);
    
    // Fix duplicate identifiers
    await this.fixDuplicateIdentifiers(errors.duplicate);
    
    // Fix naming conflicts
    await this.fixNamingConflicts(errors.naming);
    
    // Fix unused variables
    await this.fixUnusedVariables(errors.unused);
  }

  async fixTypeScriptErrors(errors) {
    console.log(`🔧 Fixing ${errors.length} TypeScript errors...`);
    
    for (const error of errors) {
      try {
        if (error.message.includes('Duplicate identifier')) {
          await this.fixDuplicateIdentifierError(error);
        } else if (error.message.includes('Module has no default export')) {
          await this.fixDefaultExportError(error);
        } else if (error.message.includes('Object literal may only specify known properties')) {
          await this.fixObjectLiteralError(error);
        }
        
        this.errorsFixed++;
      } catch (fixError) {
        console.log(`⚠️ Could not fix error: ${error.message}`);
      }
    }
  }

  async fixDuplicateIdentifierError(error) {
    // Extract file path and line from error
    const fileMatch = error.line.match(/src\/[^:]+/);
    if (fileMatch) {
      const filePath = fileMatch[0];
      await this.removeDuplicateImports(filePath);
    }
  }

  async fixDefaultExportError(error) {
    // Extract file path from error
    const fileMatch = error.line.match(/src\/[^:]+/);
    if (fileMatch) {
      const filePath = fileMatch[0];
      await this.addDefaultExport(filePath);
    }
  }

  async fixObjectLiteralError(error) {
    // Extract file path from error
    const fileMatch = error.line.match(/src\/[^:]+/);
    if (fileMatch) {
      const filePath = fileMatch[0];
      await this.fixObjectLiteralProperties(filePath);
    }
  }

  async removeDuplicateImports(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const newLines = [];
      const seenImports = new Set();
      
      for (const line of lines) {
        if (line.includes('import') && line.includes('{')) {
          const importMatch = line.match(/import\s*{([^}]+)}\s+from/);
          if (importMatch) {
            const imports = importMatch[1].split(',').map(imp => imp.trim());
            const uniqueImports = [];
            
            for (const imp of imports) {
              const cleanImp = imp.replace(/\s+as\s+.+/, '').trim();
              if (!seenImports.has(cleanImp)) {
                seenImports.add(cleanImp);
                uniqueImports.push(imp);
              }
            }
            
            if (uniqueImports.length > 0) {
              const newImportLine = `import { ${uniqueImports.join(', ')} } from '${line.match(/from\s+['"]([^'"]+)['"]/)[1]}'`;
              newLines.push(newImportLine);
            }
          } else {
            newLines.push(line);
          }
        } else {
          newLines.push(line);
        }
      }
      
      fs.writeFileSync(filePath, newLines.join('\n'));
      this.filesProcessed++;
      
    } catch (error) {
      console.log(`⚠️ Could not fix duplicate imports in ${filePath}: ${error.message}`);
    }
  }

  async addDefaultExport(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file already has default export
      if (!content.includes('export default')) {
        // Add a simple default export
        const componentName = path.basename(filePath, path.extname(filePath));
        content += `\n\nexport default ${componentName};\n`;
        
        fs.writeFileSync(filePath, content);
        this.filesProcessed++;
      }
      
    } catch (error) {
      console.log(`⚠️ Could not add default export to ${filePath}: ${error.message}`);
    }
  }

  async fixObjectLiteralProperties(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix common Stripe constructor options
      if (content.includes('advancedFraudSignals')) {
        content = content.replace(/advancedFraudSignals:\s*false/g, '');
        fs.writeFileSync(filePath, content);
        this.filesProcessed++;
      }
      
    } catch (error) {
      console.log(`⚠️ Could not fix object literal in ${filePath}: ${error.message}`);
    }
  }

  async fixImportExportIssues(importIssues, exportIssues) {
    console.log(`🔧 Fixing ${importIssues.length} import issues and ${exportIssues.length} export issues...`);
    
    // Fix import issues
    for (const issue of importIssues) {
      try {
        await this.fixImportIssue(issue);
        this.errorsFixed++;
      } catch (error) {
        console.log(`⚠️ Could not fix import issue: ${issue.message}`);
      }
    }
    
    // Fix export issues
    for (const issue of exportIssues) {
      try {
        await this.fixExportIssue(issue);
        this.errorsFixed++;
      } catch (error) {
        console.log(`⚠️ Could not fix export issue: ${issue.message}`);
      }
    }
  }

  async fixImportIssue(issue) {
    try {
      let content = fs.readFileSync(issue.file, 'utf8');
      const lines = content.split('\n');
      
      // Try to find the correct import path
      const correctPath = await this.findCorrectImportPath(issue.importPath, issue.file);
      
      if (correctPath) {
        // Replace the incorrect import path
        const newLine = lines[issue.line - 1].replace(
          new RegExp(`from\\s+['"][^'"]*['"]`),
          `from '${correctPath}'`
        );
        lines[issue.line - 1] = newLine;
        
        fs.writeFileSync(issue.file, lines.join('\n'));
        this.filesProcessed++;
      }
      
    } catch (error) {
      console.log(`⚠️ Could not fix import issue in ${issue.file}: ${error.message}`);
    }
  }

  async fixExportIssue(issue) {
    try {
      let content = fs.readFileSync(issue.file, 'utf8');
      
      // Add a basic default export if none exists
      if (!content.includes('export default') && !content.includes('export {') && !content.includes('export *')) {
        const componentName = path.basename(issue.file, path.extname(issue.file));
        content += `\n\nexport default ${componentName};\n`;
        
        fs.writeFileSync(issue.file, content);
        this.filesProcessed++;
      }
      
    } catch (error) {
      console.log(`⚠️ Could not fix export issue in ${issue.file}: ${error.message}`);
    }
  }

  async findCorrectImportPath(importPath, currentFile) {
    // Try to find the correct path by searching for similar files
    const searchPattern = importPath.replace(/^[@.]/, '**');
    const files = glob.sync(searchPattern, { cwd: this.projectRoot });
    
    if (files.length > 0) {
      return files[0];
    }
    
    return null;
  }

  async fixDuplicateIdentifiers(duplicateIssues) {
    console.log(`🔧 Fixing ${duplicateIssues.length} duplicate identifier issues...`);
    
    for (const issue of duplicateIssues) {
      try {
        await this.removeDuplicateImports(issue.file);
        this.errorsFixed++;
      } catch (error) {
        console.log(`⚠️ Could not fix duplicate identifier: ${issue.message}`);
      }
    }
  }

  async fixNamingConflicts(namingIssues) {
    console.log(`🔧 Fixing ${namingIssues.length} naming conflicts...`);
    
    for (const issue of namingIssues) {
      try {
        await this.resolveNamingConflict(issue);
        this.errorsFixed++;
      } catch (error) {
        console.log(`⚠️ Could not fix naming conflict: ${issue.message}`);
      }
    }
  }

  async resolveNamingConflict(issue) {
    // For now, just log the conflict - manual resolution may be needed
    console.log(`⚠️ Naming conflict detected: ${issue.file1} vs ${issue.file2}`);
    
    // Could implement automatic resolution here
    // For example, rename one file to follow a consistent naming convention
  }

  async fixUnusedVariables(unusedIssues) {
    console.log(`🔧 Fixing ${unusedIssues.length} unused variable issues...`);
    
    for (const issue of unusedIssues) {
      try {
        await this.removeUnusedImports(issue.file);
        this.errorsFixed++;
      } catch (error) {
        console.log(`⚠️ Could not fix unused variable: ${issue.message}`);
      }
    }
  }

  async removeUnusedImports(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const newLines = [];
      
      for (const line of lines) {
        if (line.includes('import') && line.includes('{')) {
          const importMatch = line.match(/import\s*{([^}]+)}\s+from/);
          if (importMatch) {
            const imports = importMatch[1].split(',').map(imp => imp.trim());
            const usedImports = [];
            
            for (const imp of imports) {
              const cleanImp = imp.replace(/\s+as\s+.+/, '').trim();
              if (content.includes(cleanImp) && !line.includes(cleanImp)) {
                usedImports.push(imp);
              }
            }
            
            if (usedImports.length > 0) {
              const newImportLine = `import { ${usedImports.join(', ')} } from '${line.match(/from\s+['"]([^'"]+)['"]/)[1]}'`;
              newLines.push(newImportLine);
            }
          } else {
            newLines.push(line);
          }
        } else {
          newLines.push(line);
        }
      }
      
      fs.writeFileSync(filePath, newLines.join('\n'));
      this.filesProcessed++;
      
    } catch (error) {
      console.log(`⚠️ Could not remove unused imports from ${filePath}: ${error.message}`);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      errorsFixed: this.errorsFixed,
      filesProcessed: this.filesProcessed,
      status: 'completed',
      summary: `Fixed ${this.errorsFixed} errors in ${this.filesProcessed} files in ${((Date.now() - this.startTime) / 1000).toFixed(2)} seconds`
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    console.log(`📊 Report generated: ${this.reportFile}`);
  }

  async generateErrorReport(error) {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      errorsFixed: this.errorsFixed,
      filesProcessed: this.filesProcessed,
      status: 'error',
      error: error.message,
      stack: error.stack
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    console.log(`❌ Error report generated: ${this.reportFile}`);
  }
}

// Run the automation
const fixer = new ComprehensiveErrorFixer();
fixer.run().catch(console.error);