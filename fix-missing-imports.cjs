#!/usr/bin/env node
/**
 * Fix Missing Lucide React Imports
 * Automatically finds and adds missing Lucide React icon imports
 */

const fs = require('fs');
const path = require('path');

class ImportFixer {
  constructor() {
    this.lucideIcons = new Set();
    this.fixedFiles = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  // Get all Lucide React icons from the file
  findLucideIcons(content) {
    const iconMatches = content.match(/icon:\s*([A-Z][a-zA-Z0-9]+)/g);
    if (!iconMatches) return [];

    return iconMatches.map(match => {
      const iconName = match.replace('icon:', '').trim();
      return iconName;
    });
  }

  // Get existing imports
  getExistingImports(content) {
    const importMatch = content.match(
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/
    );
    if (!importMatch) return [];

    return importMatch[1]
      .split(',')
      .map(imp => imp.trim())
      .filter(imp => imp.length > 0);
  }

  fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        return false;
      }

      let content = fs.readFileSync(filePath, 'utf8');

      // Skip if not a React component file
      if (!content.includes('lucide-react') && !content.includes('icon:')) {
        return true;
      }

      const iconsInFile = this.findLucideIcons(content);
      if (iconsInFile.length === 0) {
        return true; // No icons to fix
      }

      const existingImports = this.getExistingImports(content);
      const missingIcons = iconsInFile.filter(
        icon => !existingImports.includes(icon)
      );

      if (missingIcons.length === 0) {
        return true; // All icons already imported
      }

      this.log(
        `🔧 Fixing ${missingIcons.length} missing imports in ${filePath}`
      );

      // Add missing icons to existing import
      if (existingImports.length > 0) {
        const allIcons = [...existingImports, ...missingIcons].sort();
        const importStatement = `import { 
  ${allIcons.join(',\n  ')}
} from 'lucide-react';`;

        content = content.replace(
          /import\s*{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"];?/,
          importStatement
        );
      } else {
        // Create new import statement
        const importStatement = `import { 
  ${missingIcons.join(',\n  ')}
} from 'lucide-react';`;

        // Find the best place to insert the import
        const lines = content.split('\n');
        let insertIndex = 0;

        for (let i = 0; i < lines.length; i++) {
          if (lines[i].includes('import') && lines[i].includes('from')) {
            insertIndex = i + 1;
          }
        }

        lines.splice(insertIndex, 0, '', importStatement);
        content = lines.join('\n');
      }

      fs.writeFileSync(filePath, content);
      this.fixedFiles.push({ file: filePath, addedIcons: missingIcons });
      return true;
    } catch (error) {
      this.log(`❌ Failed to fix ${filePath}: ${error.message}`);
      return false;
    }
  }

  async fixAllFiles() {
    this.log('🚀 Starting import fixing...');

    // Find all React component files
    const filesToCheck = [
      'pages/components/Footer.tsx',
      'pages/components/Navigation.tsx',
      'pages/components/Layout.tsx',
    ];

    for (const file of filesToCheck) {
      this.fixFile(file);
    }

    // Also check all .tsx and .jsx files in pages directory
    const pagesDir = 'pages';
    if (fs.existsSync(pagesDir)) {
      const files = this.getAllFiles(pagesDir, ['.tsx', '.jsx']);
      for (const file of files) {
        this.fixFile(file);
      }
    }

    this.log('\n📊 Import Fixing Summary:');
    this.log(`- Files fixed: ${this.fixedFiles.length}`);

    this.fixedFiles.forEach(fix => {
      this.log(`  - ${fix.file}: Added ${fix.addedIcons.join(', ')}`);
    });

    return this.fixedFiles;
  }

  getAllFiles(dir, extensions) {
    let files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        files = files.concat(this.getAllFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }

    return files;
  }
}

// Run if called directly
if (require.main === module) {
  const fixer = new ImportFixer();
  fixer.fixAllFiles().catch(console.error);
}

module.exports = ImportFixer;
