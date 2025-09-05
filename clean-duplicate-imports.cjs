#!/usr/bin/env node;
/**;
 * Clean Duplicate Imports;
 * Removes duplicate imports from files;
 */;
;
const fs = require('fs');
const path = require('path');
;
class ImportCleaner {;
  constructor() {;
    this.cleanedFiles = [];
  }
;
  log(message) {;
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
;
  cleanFile(filePath) {;
    try {;
      if (!fs.existsSync(filePath)) {;
        return false;
      }
;
      let content = fs.readFileSync(filePath, 'utf8');
;
      // Find lucide-react import;
      const importMatch = content.match(;
        /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/;
      );
      if (!importMatch) {;
        return true; // No lucide-react import;
      }
;
      const importContent = importMatch[1];
      const imports = importContent;
        .split(',');
        .map(imp => imp.trim());
        .filter(imp => imp.length > 0);
;
      // Remove duplicates while preserving order;
      const uniqueImports = [];
      const seen = new Set();
;
      for (const imp of imports) {;
        // Extract the base name (before 'as');
        const baseName = imp.split(' as ')[0].trim();
        if (!seen.has(baseName)) {;
          uniqueImports.push(imp);
          seen.add(baseName);
        }
      }
;
      // Create new import statement;
      const newImportStatement = `import { ;
  ${uniqueImports.join(',\n  ')}
} from 'lucide-react';`;
<<<<<<< HEAD
;
      // Replace the old import;
      content = content.replace(;
        /import\s*{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"];?/,;
        newImportStatement;
=======

      // Replace the old import
      content = content.replace(
        /import\s*{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"];?/,
        newImportStatement
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
      );
;
      fs.writeFileSync(filePath, content);
      this.cleanedFiles.push(filePath);
      this.log(`✅ Cleaned imports in ${filePath}`);
      return true;
    } catch (error) {;
      this.log(`❌ Failed to clean ${filePath} ${error.message}`);
      return false;
    }
  }
;
  async cleanAllFiles() {;
    this.log('🚀 Starting import cleaning...');
<<<<<<< HEAD
;
    const filesToClean = [;
      'pages/components/Navigation.tsx',;
      'pages/it-services.tsx',;
      'pages/components/Footer.tsx',;
=======

    const filesToClean = [
<<<<<<< HEAD
      'pages/components/Navigation.tsx';
      'pages/it-services.tsx';
      'pages/components/Footer.tsx';
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
=======
      'pages/components/Navigation.tsx',
      'pages/it-services.tsx',
      'pages/components/Footer.tsx',
>>>>>>> dd4771918e1828cabc889a89f71cd19694beb220
    ];
;
    for (const file of filesToClean) {;
      this.cleanFile(file);
    }
;
    this.log(`\n📊 Cleaned ${this.cleanedFiles.length} files`);
    return this.cleanedFiles;
  }
}
;
// Run if called directly;
if (require.main === module) {;
  const cleaner = new ImportCleaner();
  cleaner.cleanAllFiles().catch(console.error);
}
;
module.exports = ImportCleaner;
