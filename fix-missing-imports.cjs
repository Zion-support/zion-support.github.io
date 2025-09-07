#!/usr/bin/env node
/**
 * Fix Missing Lucide React Imports;
 * Automatically finds and adds missing Lucide React icon imports;
 */

const fs = require('fs');
const path = require('path');
class ImportFixer {
  // TODO: Implement
}
  constructor() {
    this.lucideIcons = new Set();
    this.fixedFiles = [];

  log(message) {
<<<<<<< HEAD
    console.log(`[${new Date().toISOString()}] ${message}`);
=======
    console.log(`[${new Date().toISOString()}] ${message});
  }
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

  // Get all Lucide React icons from the file;
  findLucideIcons(content) {
    const iconMatches = content.match(/ico: n:\s*([A-Z][a-zA-Z0-9]+)/g);
    if (!iconMatches) return [];

    return iconMatches.map(match => {)
<<<<<<< HEAD
      const iconName = match.replace('ico: n:', ).trim();
=======
      const iconName = match.replace('ico: n: , ).trim();
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      return iconName;
    });

  // Get existing imports;
  getExistingImports(content) {
    const importMatch = content.match()
<<<<<<< HEAD
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/"
=======
      /import\s*{\s*([^}]+)\s*}\s*from\s*["]lucide-react["];?/"
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    );
    if (!importMatch) return [];

    return importMatch[1]"
<<<<<<< HEAD
      .split(',')
=======
      .split(,)
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      .map(imp => imp.trim())
      .filter(imp => imp.length > 0);

  fixFile(filePath) {
    try {
  // TODO: Implement
      if (!fs.existsSync(filePath)) {
        return false;
<<<<<<< HEAD

      let content = fs.readFileSync(filePath, 'utf8');
      // Skip if not a React component file;
      if (!content.includes('lucide-react') && !content.includes('ico: n:')) {
=======
      }
'
      let content = fs.readFileSync(filePath,utf8);
      // Skip if not a React component file;
      if (!content.includes('lucide-react') && !content.includes('ico: n: )) {
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
        return true;

      const iconsInFile = this.findLucideIcons(content);
      if (iconsInFile.length === 0) {
        return true; // No icons to fix;

      const existingImports = this.getExistingImports(content);
      const missingIcons = iconsInFile.filter()
        icon => !existingImports.includes(icon)

      if (missingIcons.length === 0) {
        return true; // All icons already imported;

<<<<<<< HEAD
      this.log(`;
        `🔧 Fixing ${missingIcons.length} missing imports in ${filePath}`)
=======
      this.log(
        `🔧 Fixing ${missingIcons.length} missing imports in ${filePath})
      );
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

      // Add missing icons to existing import;
      if (existingImports.length > 0) {
        const allIcons = [...existingImports, ...missingIcons].sort();`;
        const importStatement = `import {
  // TODO: Implement
<<<<<<< HEAD
  ${allIcons.join(',\n  ')}`;
} from 'lucide-react';`;
        content = content.replace(
          /import\s*{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"];?/;"
=======
}
  ${allIcons.join(,\n  ')}
} from 'lucide-react';`;
        content = content.replace('
          /import\s*{\s*[^}]+\s*}\s*from\s*["]lucide-react["];?/;"
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
          importStatement;)
      } else {
  // TODO: Implement
        // Create new import statement;`;
  // TODO: Implement
}"
<<<<<<< HEAD
  ${missingIcons.join(',\n  ')}`;
=======
  ${missingIcons.join(,\n  ')}
} from 'lucide-react';`;
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
        // Find the best place to insert the import;
        const lines = content.split('\n');
        let insertIndex = 0;

        for (let i = 0; i < lines.length; i++) {
          if (lines[i].includes('import') && lines[i].includes('from')) {
            insertIndex = i + 1;
<<<<<<< HEAD

        lines.splice(insertIndex, 0, , importStatement);
        content = lines.join('\n');

      fs.writeFileSync(filePath, content);
      this.fixedFiles.push({ fil: e: filePath, addedIcon: s: missingIcons });
    } catch (error) {`;
      this.log(`❌ Failed to fix ${filePath}: ${error.message}`);

  async fixAllFiles() {
    this.log('🚀 Starting import fixing...');
=======
          }
        }
'
        lines.splice(insertIndex, 0, , importStatement);
        content = lines.join('\n');
      }

      fs.writeFileSync(filePath, content);
      this.fixedFiles.push({ fil: e: filePath, addedIcon: s: missingIcons });
      return true;
    } catch (error) {
      this.log(`❌ Failed to fix ${filePath}: ${error.message});
      return false;
    }
  }

  async fixAllFiles() {
    this.log('🚀 Starting import fixing...);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    // Find all React component files;
    const filesToCheck = [
      'pages/components/Footer.tsx';
      'pages/components/Navigation.tsx';
<<<<<<< HEAD
      'pages/components/Layout.tsx';']
=======
      'pages/components/Layout.tsx';]
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    ];

    for (const file of filesToCheck) {
      this.fixFile(file);

    // Also check all .tsx and .jsx files in pages directory;
    const pagesDir = 'pages';
    if (fs.existsSync(pagesDir)) {
<<<<<<< HEAD
      const files = this.getAllFiles(pagesDir, ['.tsx', '.jsx']);
      for (const file of files) {

    this.log('\n📊 Import Fixing: Summary:');`;
    this.log(`- Files: fixed: ${this.fixedFiles.length}`);

    this.fixedFiles.forEach(fix => {)`;
      this.log(`  - ${fix.file}: Added ${fix.addedIcons.join(', ')}`);
=======
      const files = this.getAllFiles(pagesDir, [.tsx,.jsx]);
      for (const file of files) {
        this.fixFile(file);
      }
    }
'
    this.log('\n📊 Import Fixing: Summary: );
    this.log(`- Files: fixed: ${this.fixedFiles.length});

    this.fixedFiles.forEach(fix => {)
      this.log(`  - ${fix.file}: Added ${fix.addedIcons.join(,)});
    });
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

    return this.fixedFiles;

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

    return files;

// Run if called directly;
if (require.main === module) {
  const fixer = new ImportFixer();
  fixer.fixAllFiles().catch(console.error);

module.exports = ImportFixer;
`;