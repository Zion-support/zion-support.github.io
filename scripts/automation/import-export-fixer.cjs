#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class ImportExportFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.automationInterval = parseInt(process.env.AUTOMATION_INTERVAL) || 2700000; // 45 minutes default
    this.fixesApplied = 0;
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] [ImportExportFixer] ${message}`);
  }

  async run() {
    this.log('Starting import/export fixing automation...');
    
    try {
      await this.fixImportExportIssues();
      this.log(`Import/export fixing completed. Applied ${this.fixesApplied} fixes.`);
    } catch (error) {
      this.log(`Error during import/export fixing: ${error.message}`);
    }
  }

  async fixImportExportIssues() {
    this.log('Fixing import/export issues...');
    
    const files = glob.sync('**/*.{js,jsx,ts,tsx}', { 
      ignore: ['node_modules/**', '.git/**', 'dist/**', 'build/**', 'out/**'] 
    });
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let modified = false;
        let newContent = content;
        
        // Fix default export issues
        if (content.includes('export default') && !content.includes('export {')) {
          const exportMatch = content.match(/export default\s+(\w+)/);
          if (exportMatch) {
            const componentName = exportMatch[1];
            if (!content.includes(`export { ${componentName} }`)) {
              newContent = content.replace(
                `export default ${componentName}`,
                `export { ${componentName} }\nexport default ${componentName}`
              );
              modified = true;
            }
          }
        }
        
        // Fix React import issues
        if (content.includes('React.') && !content.includes("import React")) {
          newContent = "import React from 'react';\n" + newContent;
          modified = true;
        }
        
        if (modified) {
          fs.writeFileSync(file, newContent);
          this.fixesApplied++;
        }
      } catch (error) {
        this.log(`Error fixing import/export in ${file}: ${error.message}`);
      }
    }
  }
}

const fixer = new ImportExportFixer();
fixer.run().catch(console.error);