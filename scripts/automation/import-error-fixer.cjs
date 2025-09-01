#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class ImportErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixesApplied = [];
    this.startTime = Date.now();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [INFO] ${message}`);
  }

  async run() {
    this.log('Starting import error fixing process...');
    
    const files = glob.sync('src/**/*.{js,jsx,ts,tsx}', { cwd: this.projectRoot });
    let totalFixes = 0;
    
    for (const file of files) {
      const filePath = path.join(this.projectRoot, file);
      const content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      let newContent = content;

      // Fix relative imports
      const importRegex = /import\s+.*\s+from\s+['"]([^'"]+)['"]/g;
      newContent = newContent.replace(importRegex, (match, importPath) => {
        if (importPath.startsWith('./') || importPath.startsWith('../')) {
          const resolvedPath = path.resolve(path.dirname(filePath), importPath);
          if (!fs.existsSync(resolvedPath) && !fs.existsSync(resolvedPath + '.js') && !fs.existsSync(resolvedPath + '.tsx')) {
            // Try to find the correct path
            const possibleExtensions = ['.js', '.jsx', '.ts', '.tsx'];
            for (const ext of possibleExtensions) {
              const testPath = resolvedPath + ext;
              if (fs.existsSync(testPath)) {
                const relativePath = path.relative(path.dirname(filePath), testPath);
                return match.replace(importPath, relativePath);
              }
            }
          }
        }
        return match;
      });

      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent);
        modified = true;
        totalFixes++;
      }
    }
    
    this.log(`Import error fixing completed. Applied ${totalFixes} fixes.`);
    return { success: true, fixesApplied: totalFixes };
  }
}

if (require.main === module) {
  const fixer = new ImportErrorFixer();
  fixer.run().catch(console.error);
}

module.exports = ImportErrorFixer;