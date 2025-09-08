#!/usr/bin/env node

/**
 * Unused Import Cleaner - PM2 Automation Script
 * Automatically removes unused imports from TypeScript/React files
 * Runs every 30 minutes to keep code clean
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class UnusedImportCleaner {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'unused-import-cleaner-report.json');
    this.fixedFiles = [];
    this.errors = [];
    this.startTime = Date.now();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async scanForUnusedImports() {
    this.log('🔍 Scanning for unused imports...');
    
    try {
      // Get all TypeScript/React files
      const files = this.getAllSourceFiles();
      this.log(`Found ${files.length} source files to scan`);
      
      for (const file of files) {
        await this.processFile(file);
      }
      
      this.log(`✅ Completed scanning ${files.length} files`);
    } catch (error) {
      this.log(`❌ Error during scan: ${error.message}`);
      this.errors.push(error.message);
    }
  }

  getAllSourceFiles() {
    const sourceDirs = ['src', 'components', 'pages', 'utils', 'hooks', 'context'];
    const files = [];
    
    for (const dir of sourceDirs) {
      const fullPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullPath)) {
        this.walkDirectory(fullPath, files);
      }
    }
    
    return files.filter(file => 
      file.endsWith('.tsx') || 
      file.endsWith('.ts') || 
      file.endsWith('.jsx') || 
      file.endsWith('.js')
    );
  }

  walkDirectory(dir, files) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && !item.includes('node_modules')) {
        this.walkDirectory(fullPath, files);
      } else if (stat.isFile()) {
        files.push(fullPath);
      }
    }
  }

  async processFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Skip files that are too large or binary
      if (content.length > 1000000 || content.includes('\0')) {
        return;
      }
      
      let modified = false;
      let newContent = content;
      
      // Remove unused imports using regex patterns
      newContent = this.removeUnusedLucideImports(newContent);
      newContent = this.removeUnusedReactImports(newContent);
      newContent = this.removeUnusedTypeImports(newContent);
      newContent = this.removeUnusedUtilityImports(newContent);
      
      if (newContent !== originalContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        this.fixedFiles.push({
          file: path.relative(this.projectRoot, filePath),
          originalSize: originalContent.length,
          newSize: newContent.length,
          bytesSaved: originalContent.length - newContent.length
        });
        modified = true;
        this.log(`🧹 Cleaned ${path.relative(this.projectRoot, filePath)}`);
      }
      
    } catch (error) {
      this.log(`⚠️ Error processing ${filePath}: ${error.message}`);
      this.errors.push(`Error processing ${filePath}: ${error.message}`);
    }
  }

  removeUnusedLucideImports(content) {
    // Remove unused Lucide React icon imports
    const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    const lucideImports = content.match(lucideImportRegex);
    
    if (!lucideImports) return content;
    
    for (const importStatement of lucideImports) {
      const iconsMatch = importStatement.match(/{\s*([^}]+)\s*}/);
      if (iconsMatch) {
        const icons = iconsMatch[1].split(',').map(i => i.trim());
        const usedIcons = icons.filter(icon => {
          const iconName = icon.split(' as ')[0].trim();
          const regex = new RegExp(`\\b${iconName}\\b`, 'g');
          const matches = content.match(regex);
          return matches && matches.length > 1; // More than just the import
        });
        
        if (usedIcons.length === 0) {
          // Remove entire import if no icons are used
          content = content.replace(importStatement, '');
        } else if (usedIcons.length < icons.length) {
          // Replace with only used icons
          const newImport = `import { ${usedIcons.join(', ')} } from 'lucide-react';`;
          content = content.replace(importStatement, newImport);
        }
      }
    }
    
    return content;
  }

  removeUnusedReactImports(content) {
    // Remove unused React imports
    if (content.includes('import React') && !this.isReactComponent(content)) {
      content = content.replace(/import\s+React\s+from\s+['"]react['"];?\n?/g, '');
    }
    
    return content;
  }

  removeUnusedTypeImports(content) {
    // Remove unused type imports
    const typeImportRegex = /import\s+type\s+{\s*([^}]+)\s*}\s+from\s+['"][^'"]+['"];?\n?/g;
    const typeImports = content.match(typeImportRegex);
    
    if (!typeImports) return content;
    
    for (const importStatement of typeImports) {
      const typesMatch = importStatement.match(/{\s*([^}]+)\s*}/);
      if (typesMatch) {
        const types = typesMatch[1].split(',').map(t => t.trim());
        const usedTypes = types.filter(type => {
          const typeName = type.split(' as ')[0].trim();
          const regex = new RegExp(`\\b${typeName}\\b`, 'g');
          const matches = content.match(regex);
          return matches && matches.length > 1;
        });
        
        if (usedTypes.length === 0) {
          content = content.replace(importStatement, '');
        } else if (usedTypes.length < types.length) {
          const newImport = `import type { ${usedTypes.join(', ')} } from '${importStatement.match(/from\s+['"]([^'"]+)['"]/)[1]}';`;
          content = content.replace(importStatement, newImport);
        }
      }
    }
    
    return content;
  }

  removeUnusedUtilityImports(content) {
    // Remove unused utility imports
    const utilityImportRegex = /import\s+{\s*([^}]+)\s*}\s+from\s+['"][^'"]+['"];?\n?/g;
    const utilityImports = content.match(utilityImportRegex);
    
    if (!utilityImports) return content;
    
    for (const importStatement of utilityImports) {
      // Skip if it's a Lucide import (handled separately)
      if (importStatement.includes('lucide-react')) continue;
      
      const utilitiesMatch = importStatement.match(/{\s*([^}]+)\s*}/);
      if (utilitiesMatch) {
        const utilities = utilitiesMatch[1].split(',').map(u => u.trim());
        const usedUtilities = utilities.filter(utility => {
          const utilityName = utility.split(' as ')[0].trim();
          const regex = new RegExp(`\\b${utilityName}\\b`, 'g');
          const matches = content.match(regex);
          return matches && matches.length > 1;
        });
        
        if (usedUtilities.length === 0) {
          content = content.replace(importStatement, '');
        } else if (usedUtilities.length < utilities.length) {
          const sourceMatch = importStatement.match(/from\s+['"]([^'"]+)['"]/);
          if (sourceMatch) {
            const newImport = `import { ${usedUtilities.join(', ')} } from '${sourceMatch[1]}';`;
            content = content.replace(importStatement, newImport);
          }
        }
      }
    }
    
    return content;
  }

  isReactComponent(content) {
    // Check if this is a React component file
    return content.includes('function') || 
           content.includes('const') || 
           content.includes('class') ||
           content.includes('export default') ||
           content.includes('export {');
  }

  async runLinting() {
    this.log('🔧 Running ESLint auto-fix...');
    
    try {
      const result = execSync('npm run lint -- --fix', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log('✅ ESLint auto-fix completed');
      return result;
    } catch (error) {
      this.log(`⚠️ ESLint auto-fix had issues: ${error.message}`);
      this.errors.push(`ESLint error: ${error.message}`);
      return null;
    }
  }

  generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      filesProcessed: this.fixedFiles.length,
      totalBytesSaved: this.fixedFiles.reduce((sum, file) => sum + file.bytesSaved, 0),
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      summary: {
        totalFiles: this.fixedFiles.length,
        successfulFixes: this.fixedFiles.length,
        failedFixes: this.errors.length,
        efficiency: this.fixedFiles.length > 0 ? 
          `${((this.fixedFiles.length / (this.fixedFiles.length + this.errors.length)) * 100).toFixed(1)}%` : '0%'
      }
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report generated: ${this.reportFile}`);
    
    return report;
  }

  async run() {
    this.log('🚀 Starting Unused Import Cleaner...');
    
    try {
      await this.scanForUnusedImports();
      await this.runLinting();
      
      const report = this.generateReport();
      
      this.log(`✅ Unused Import Cleaner completed successfully!`);
      this.log(`📁 Files cleaned: ${report.filesProcessed}`);
      this.log(`💾 Bytes saved: ${report.totalBytesSaved}`);
      this.log(`⏱️ Duration: ${report.duration}`);
      
      if (report.errors.length > 0) {
        this.log(`⚠️ ${report.errors.length} errors encountered`);
      }
      
    } catch (error) {
      this.log(`❌ Fatal error: ${error.message}`);
      this.errors.push(`Fatal error: ${error.message}`);
      this.generateReport();
    }
  }
}

// Run the cleaner if this script is executed directly
if (require.main === module) {
  const cleaner = new UnusedImportCleaner();
  cleaner.run().catch(console.error);
}

module.exports = UnusedImportCleaner;