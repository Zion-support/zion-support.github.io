#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ImportExportFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'import-export-fixer.log');
    this.reportFile = path.join(this.projectRoot, 'error-reports', `import-export-fixer-report-${Date.now()}.json`);
    this.fixesApplied = [];
    this.startTime = Date.now();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  findFilesToFix() {
    const files = [];
    this.scanDirectory(this.projectRoot, files);
    return files;
  }

  scanDirectory(dir, files, depth = 0) {
    if (depth > 10) return;
    
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          if (!['node_modules', '.git', 'dist', 'build', 'out', 'logs', 'error-reports'].includes(item)) {
            this.scanDirectory(fullPath, files, depth + 1);
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item).toLowerCase();
          if (['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {
            const relativePath = path.relative(this.projectRoot, fullPath);
            files.push(relativePath);
          }
        }
      }
    } catch (error) {
      this.log(`Error scanning directory ${dir}: ${error.message}`);
    }
  }

  fixImportExportIssues(filePath) {
    try {
      const fullPath = path.resolve(filePath);
      if (!fs.existsSync(fullPath)) {
        return false;
      }

      let content = fs.readFileSync(fullPath, 'utf8');
      const originalContent = content;
      let fixed = false;

      // Fix common import issues
      content = this.fixImportIssues(content, filePath);
      
      // Fix common export issues
      content = this.fixExportIssues(content, filePath);
      
      // Fix module resolution issues
      content = this.fixModuleResolution(content, filePath);

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        this.fixesApplied.push({
          type: 'import_export_fix',
          file: filePath,
          description: 'Fixed import/export issues',
          timestamp: new Date().toISOString()
        });
        this.log(`Fixed import/export issues in: ${filePath}`);
        fixed = true;
      }

      return fixed;
    } catch (error) {
      this.log(`Error fixing import/export issues in ${filePath}: ${error.message}`);
      return false;
    }
  }

  fixImportIssues(content, filePath) {
    const lines = content.split('\n');
    let modified = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Fix missing file extensions in imports
      if (line.includes('import') && line.includes('from') && line.includes("'")) {
        const importMatch = line.match(/from\s+['"]([^'"]+)['"]/);
        if (importMatch) {
          const importPath = importMatch[1];
          
          // Skip node_modules and absolute paths
          if (!importPath.startsWith('.') && !importPath.startsWith('@') && !importPath.startsWith('/')) {
            continue;
          }
          
          // Add missing extensions for relative imports
          if (importPath.startsWith('.') && !importPath.includes('.')) {
            const possibleExtensions = ['.ts', '.tsx', '.js', '.jsx'];
            for (const ext of possibleExtensions) {
              const newPath = importPath + ext;
              const newLine = line.replace(importPath, newPath);
              lines[i] = newLine;
              modified = true;
              break;
            }
          }
        }
      }
      
      // Fix React imports
      if (line.includes('import React') && !line.includes('from')) {
        lines[i] = "import React from 'react';";
        modified = true;
      }
      
      // Fix duplicate imports
      if (line.includes('import') && line.includes('from')) {
        const importMatch = line.match(/import\s+(.+?)\s+from\s+['"]([^'"]+)['"]/);
        if (importMatch) {
          const imports = importMatch[1];
          const source = importMatch[2];
          
          // Check for duplicate imports from the same source
          const existingImports = lines.filter(l => 
            l.includes(`from '${source}'`) || l.includes(`from "${source}"`)
          );
          
          if (existingImports.length > 1) {
            // Merge duplicate imports
            const allImports = existingImports.map(l => {
              const match = l.match(/import\s+(.+?)\s+from/);
              return match ? match[1] : '';
            }).filter(Boolean);
            
            const uniqueImports = [...new Set(allImports)];
            const newImportLine = `import { ${uniqueImports.join(', ')} } from '${source}';`;
            
            // Replace all duplicate imports with the merged one
            for (let j = 0; j < lines.length; j++) {
              if (lines[j].includes(`from '${source}'`) || lines[j].includes(`from "${source}"`)) {
                if (j === i) {
                  lines[j] = newImportLine;
                } else {
                  lines[j] = '';
                }
                modified = true;
              }
            }
          }
        }
      }
    }

    return modified ? lines.join('\n') : content;
  }

  fixExportIssues(content, filePath) {
    const lines = content.split('\n');
    let modified = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Fix default export syntax
      if (line.includes('export default') && line.includes(';')) {
        // Ensure proper default export syntax
        if (!line.match(/export\s+default\s+\w+\s*;?$/)) {
          const exportMatch = line.match(/export\s+default\s+(.+?)\s*;?$/);
          if (exportMatch) {
            const exportName = exportMatch[1].trim();
            lines[i] = `export default ${exportName};`;
            modified = true;
          }
        }
      }
      
      // Fix named exports
      if (line.includes('export') && line.includes('{') && line.includes('}')) {
        // Ensure proper named export syntax
        if (!line.match(/export\s+\{[^}]+\}\s*;?$/)) {
          const exportMatch = line.match(/export\s+\{([^}]+)\}/);
          if (exportMatch) {
            const exports = exportMatch[1].split(',').map(e => e.trim()).filter(Boolean);
            const cleanExports = exports.join(', ');
            lines[i] = `export { ${cleanExports} };`;
            modified = true;
          }
        }
      }
      
      // Fix function exports
      if (line.includes('export function') || line.includes('export const')) {
        // Ensure proper function export syntax
        if (!line.endsWith(';') && !line.includes('{')) {
          lines[i] = line + ';';
          modified = true;
        }
      }
    }

    return modified ? lines.join('\n') : content;
  }

  fixModuleResolution(content, filePath) {
    const lines = content.split('\n');
    let modified = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Fix relative path imports
      if (line.includes('import') && line.includes('from') && line.includes('./')) {
        const importMatch = line.match(/from\s+['"]([^'"]+)['"]/);
        if (importMatch) {
          const importPath = importMatch[1];
          
          if (importPath.startsWith('./')) {
            // Resolve relative path
            const dir = path.dirname(filePath);
            const resolvedPath = path.resolve(dir, importPath);
            const relativePath = path.relative(this.projectRoot, resolvedPath);
            
            // Check if file exists with different extension
            const possibleExtensions = ['.ts', '.tsx', '.js', '.jsx'];
            for (const ext of possibleExtensions) {
              const testPath = resolvedPath + ext;
              if (fs.existsSync(testPath)) {
                const newRelativePath = path.relative(dir, testPath).replace(/\\/g, '/');
                const newLine = line.replace(importPath, newRelativePath);
                lines[i] = newLine;
                modified = true;
                break;
              }
            }
          }
        }
      }
    }

    return modified ? lines.join('\n') : content;
  }

  async run() {
    this.log('🚀 Starting Import/Export Fixer...');
    
    try {
      // Find files to fix
      const files = this.findFilesToFix();
      
      if (files.length === 0) {
        this.log('✅ No files to process');
        return;
      }

      this.log(`🔍 Found ${files.length} files to check`);
      
      // Fix each file
      let fixedCount = 0;
      for (const file of files) {
        if (this.fixImportExportIssues(file)) {
          fixedCount++;
        }
      }

      this.log(`✅ Fixed import/export issues in ${fixedCount} files`);

      // Generate report
      this.generateReport(fixedCount, files.length);

    } catch (error) {
      this.log(`❌ Error in import/export fixer: ${error.message}`);
    }
  }

  generateReport(fixedCount, totalCount) {
    const duration = Date.now() - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      summary: {
        totalFilesChecked: totalCount,
        filesFixed: fixedCount,
        successRate: totalCount > 0 ? ((fixedCount / totalCount) * 100).toFixed(2) + '%' : '0%'
      },
      fixesApplied: this.fixesApplied,
      metadata: {
        script: 'import-export-fixer',
        version: '1.0.0',
        nodeVersion: process.version,
        platform: process.platform
      }
    };

    const reportsDir = path.dirname(this.reportFile);
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report generated: ${this.reportFile}`);
  }
}

// Run the fixer
const fixer = new ImportExportFixer();
fixer.run().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Import/Export Fixer stopped by user');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Import/Export Fixer stopped by system');
  process.exit(0);
});