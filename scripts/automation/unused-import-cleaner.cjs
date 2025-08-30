#!/usr/bin/env node

/**
 * Unused Import Cleaner - Automatically removes unused imports and variables
 * Runs every hour to keep code clean and optimized
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class UnusedImportCleaner {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'unused-imports-cleanup-report.json');
    this.cleanedFiles = 0;
    this.removedImports = 0;
    this.removedVariables = 0;
    this.startTime = new Date();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async runUnusedImportCleanup() {
    try {
      this.log('Starting unused import cleanup process...');
      
      // Find all TypeScript/JavaScript files
      const sourceFiles = this.findSourceFiles();
      this.log(`Found ${sourceFiles.length} source files to analyze`);
      
      // Clean unused imports and variables
      for (const file of sourceFiles) {
        await this.cleanFileUnusedImports(file);
      }
      
      this.log(`Cleanup completed. Processed ${this.cleanedFiles} files`);
      this.log(`Removed ${this.removedImports} unused imports`);
      this.log(`Removed ${this.removedVariables} unused variables`);

    } catch (error) {
      this.log(`Error during unused import cleanup: ${error.message}`, 'ERROR');
    } finally {
      await this.generateReport();
    }
  }

  findSourceFiles() {
    const sourceFiles = [];
    
    const walkDir = (dir) => {
      const files = fs.readdirSync(dir);
      
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
          walkDir(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
          sourceFiles.push(filePath);
        }
      }
    };
    
    walkDir(path.join(this.projectRoot, 'src'));
    return sourceFiles;
  }

  async cleanFileUnusedImports(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Clean unused imports
      const importCleanup = await this.cleanUnusedImports(content, filePath);
      if (importCleanup.modified) {
        content = importCleanup.content;
        this.removedImports += importCleanup.removedCount;
        modified = true;
      }
      
      // Clean unused variables
      const variableCleanup = await this.cleanUnusedVariables(content, filePath);
      if (variableCleanup.modified) {
        content = variableCleanup.content;
        this.removedVariables += variableCleanup.removedCount;
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.cleanedFiles++;
        this.log(`Cleaned ${path.relative(this.projectRoot, filePath)}`);
      }
      
    } catch (error) {
      this.log(`Error cleaning file ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async cleanUnusedImports(content, filePath) {
    let modified = false;
    let removedCount = 0;
    
    try {
      // Find all import statements
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
      
      // Check which imports are actually used
      const usedImports = new Map();
      
      for (const [source, importSet] of imports) {
        const usedInSource = new Set();
        
        for (const imp of importSet) {
          // Check if the import is used in the content
          if (this.isImportUsed(content, imp)) {
            usedInSource.add(imp);
          }
        }
        
        if (usedInSource.size > 0) {
          usedImports.set(source, usedInSource);
        } else {
          removedCount += importSet.size;
        }
      }
      
      // Rebuild content with only used imports
      let newContent = content;
      
      // Remove all import statements
      newContent = newContent.replace(importRegex, () => {
        modified = true;
        return '';
      });
      
      // Add back only the used imports
      let newImports = '';
      for (const [source, importSet] of usedImports) {
        const importList = Array.from(importSet).join(', ');
        newImports += `import { ${importList} } from '${source}';\n`;
      }
      
      if (newImports) {
        newContent = newImports + '\n' + newContent;
      }
      
      return { modified, content: newContent, removedCount };
      
    } catch (error) {
      this.log(`Error cleaning unused imports in ${filePath}: ${error.message}`, 'ERROR');
      return { modified: false, content, removedCount: 0 };
    }
  }

  isImportUsed(content, importName) {
    // Handle different import patterns
    const patterns = [
      new RegExp(`\\b${importName}\\b`, 'g'), // Exact match
      new RegExp(`<${importName}`, 'g'), // JSX component
      new RegExp(`<${importName}\\s`, 'g'), // JSX component with props
      new RegExp(`\\.${importName}\\b`, 'g'), // Property access
      new RegExp(`\\[${importName}\\]`, 'g'), // Array access
      new RegExp(`\\(${importName}\\)`, 'g'), // Function call
      new RegExp(`typeof\\s+${importName}`, 'g'), // Typeof check
      new RegExp(`instanceof\\s+${importName}`, 'g'), // Instanceof check
    ];
    
    return patterns.some(pattern => pattern.test(content));
  }

  async cleanUnusedVariables(content, filePath) {
    let modified = false;
    let removedCount = 0;
    
    try {
      // Find variable declarations
      const variableRegex = /(?:const|let|var)\s+(\w+)(?:\s*[:=])/g;
      const variables = new Set();
      
      let match;
      while ((match = variableRegex.exec(content)) !== null) {
        const varName = match[1];
        variables.add(varName);
      }
      
      // Check which variables are actually used
      const unusedVariables = new Set();
      
      for (const varName of variables) {
        if (!this.isVariableUsed(content, varName)) {
          unusedVariables.add(varName);
        }
      }
      
      // Remove unused variable declarations
      if (unusedVariables.size > 0) {
        for (const varName of unusedVariables) {
          // Remove const/let/var declarations
          const declarationRegex = new RegExp(`(?:const|let|var)\\s+${varName}\\s*[:=][^;]*;?\\s*`, 'g');
          const newContent = content.replace(declarationRegex, '');
          
          if (newContent !== content) {
            content = newContent;
            modified = true;
            removedCount++;
          }
        }
      }
      
      return { modified, content, removedCount };
      
    } catch (error) {
      this.log(`Error cleaning unused variables in ${filePath}: ${error.message}`, 'ERROR');
      return { modified: false, content, removedCount: 0 };
    }
  }

  isVariableUsed(content, varName) {
    // Skip if it's a common React pattern
    if (varName === 'React' || varName === 'useState' || varName === 'useEffect') {
      return true;
    }
    
    // Check for usage patterns
    const patterns = [
      new RegExp(`\\b${varName}\\b`, 'g'), // Exact match
      new RegExp(`\\.${varName}\\b`, 'g'), // Property access
      new RegExp(`\\[${varName}\\]`, 'g'), // Array access
      new RegExp(`\\(${varName}\\)`, 'g'), // Function call
      new RegExp(`typeof\\s+${varName}`, 'g'), // Typeof check
      new RegExp(`instanceof\\s+${varName}`, 'g'), // Instanceof check
    ];
    
    // Count occurrences
    let totalOccurrences = 0;
    patterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        totalOccurrences += matches.length;
      }
    });
    
    // If more than 1 occurrence, it's likely used (1 would be just the declaration)
    return totalOccurrences > 1;
  }

  async cleanUnusedFunctions(content, filePath) {
    let modified = false;
    let removedCount = 0;
    
    try {
      // Find function declarations
      const functionRegex = /(?:function\s+(\w+)|const\s+(\w+)\s*=\s*(?:async\s*)?\(|const\s+(\w+)\s*=\s*(?:async\s*)?function)/g;
      const functions = new Set();
      
      let match;
      while ((match = functionRegex.exec(content)) !== null) {
        const funcName = match[1] || match[2] || match[3];
        if (funcName) {
          functions.add(funcName);
        }
      }
      
      // Check which functions are actually used
      for (const funcName of functions) {
        if (!this.isFunctionUsed(content, funcName)) {
          // Remove unused function
          const functionBlockRegex = new RegExp(`(?:function\\s+${funcName}\\s*\\([^)]*\\)\\s*{[^}]*}|const\\s+${funcName}\\s*=\\s*(?:async\\s*)?\\([^)]*\\)\\s*=>\\s*{[^}]*}|const\\s+${funcName}\\s*=\\s*(?:async\\s*)?function\\s*\\([^)]*\\)\\s*{[^}]*})`, 'gs');
          
          const newContent = content.replace(functionBlockRegex, '');
          if (newContent !== content) {
            content = newContent;
            modified = true;
            removedCount++;
          }
        }
      }
      
      return { modified, content, removedCount };
      
    } catch (error) {
      this.log(`Error cleaning unused functions in ${filePath}: ${error.message}`, 'ERROR');
      return { modified: false, content, removedCount: 0 };
    }
  }

  isFunctionUsed(content, funcName) {
    // Check for function calls
    const callPattern = new RegExp(`\\b${funcName}\\s*\\(`, 'g');
    const matches = content.match(callPattern);
    
    // If more than 1 occurrence, it's likely used (1 would be just the declaration)
    return matches && matches.length > 1;
  }

  async generateReport() {
    const endTime = new Date();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: endTime.toISOString(),
      duration: duration.getTime(),
      cleanedFiles: this.cleanedFiles,
      removedImports: this.removedImports,
      removedVariables: this.removedVariables,
      totalRemoved: this.removedImports + this.removedVariables,
      success: this.cleanedFiles > 0,
      details: {
        startTime: this.startTime.toISOString(),
        endTime: endTime.toISOString(),
        projectRoot: this.projectRoot
      }
    };
    
    // Save report
    fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));
    
    // Log summary
    this.log('=== Unused Import Cleanup Report ===');
    this.log(`Files processed: ${this.cleanedFiles}`);
    this.log(`Unused imports removed: ${this.removedImports}`);
    this.log(`Unused variables removed: ${this.removedVariables}`);
    this.log(`Total items removed: ${report.totalRemoved}`);
    this.log(`Duration: ${duration.getTime()}ms`);
    this.log(`Report saved to: ${this.logFile}`);
    
    return report;
  }
}

// Main execution
if (require.main === module) {
  const cleaner = new UnusedImportCleaner();
  cleaner.runUnusedImportCleanup().catch(console.error);
}

module.exports = UnusedImportCleaner;