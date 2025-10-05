#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/JSX files that have incorrect lucide-react imports
const files = glob.sync('**/*.{ts,tsx,js,jsx}', {
  ignore: [
    'node_modules/**',
    'dist/**',
    'build/**',
    '.git/**',
    '**/backup-problematic-files/**',
    '**/corrupted-files-backup/**',
    '**/corrupted_backup/**',
    '**/corrupted_files_backup_2/**',
    '**/automation_backup/**',
    '**/ai-optimization-backups/**',
    '**/automation_logs/**',
    '**/all-automations-reports/**',
    '**/accessibility-reports/**',
    '**/performance-reports/**',
    '**/optimization-reports/**',
    '**/monitoring-reports/**',
    '**/maintenance-reports/**',
    '**/log-analysis-reports/**',
    '**/intelligent-deployment-reports/**',
    '**/improvement-reports/**',
    '**/intelligence-reports/**',
    '**/factories/**',
    '**/error-prevention-reports/**',
    '**/build-reports/**',
    '**/linting-error-fixer-report.json',
    '**/merge-conflict-resolver-report.json',
    '**/master-automation-report.json',
    '**/final-automation-report.json',
    '**/final-comprehensive-report.json',
    '**/final-comprehensive-automation-report.json',
    '**/AUTOMATION_*.md',
    '**/ALL_*.md',
    '**/APP_*.md',
    '**/ADMIN_*.md',
    '**/automation_logs.txt',
    '**/create-working-pages.cjs',
    '**/fix-lucide-imports*.cjs',
    '**/fix-imports.cjs',
    '**/fix_files.cjs',
    '**/fix_lucide_imports*.py',
    '**/fix_lucide_default_imports.py',
    '**/fix-imports.cjs',
    '**/fix_files.cjs',
    '**/fix_lucide_imports_final.py',
    '**/fix-lucide-imports.js',
    '**/fix_lucide_imports_v2.py',
    '**/implement-improvements.sh',
    '**/lint-fixes*.patch',
    '**/ERROR_FIXES_AND_AUTOMATION_SUMMARY.md'
  ]
});

let fixedFiles = 0;
let totalFiles = 0;

console.log(`Found ${files.length} files to check...`);

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check if file has incorrect lucide-react imports (both named and default import patterns)
    const hasIncorrectImports = /import\s+.*\s+from\s+['"]lucide-react['"];/.test(content);
    
    if (hasIncorrectImports) {
      totalFiles++;
      console.log(`Fixing ${file}...`);
      
      // Extract all the icon names that are incorrectly imported
      const iconMatches = content.match(/import\s+(\w+)\s+from\s+['"]lucide-react['"];/g);
      const namedImportMatches = content.match(/import\s+\{\s*([^}]+)\s*\}\s+from\s+['"]lucide-react['"];/g);
      
      let iconNames = [];
      
      if (iconMatches && iconMatches.length > 0) {
        // Get all icon names from default imports
        iconNames = iconMatches.map(match => {
          const nameMatch = match.match(/import\s+(\w+)\s+from/);
          return nameMatch ? nameMatch[1] : null;
        }).filter(Boolean);
      }
      
      if (namedImportMatches && namedImportMatches.length > 0) {
        // Get all icon names from named imports
        namedImportMatches.forEach(match => {
          const namesMatch = match.match(/import\s+\{\s*([^}]+)\s*\}\s+from/);
          if (namesMatch) {
            const names = namesMatch[1].split(',').map(name => name.trim()).filter(Boolean);
            iconNames = iconNames.concat(names);
          }
        });
      }
      
      if (iconNames.length > 0) {
        // Remove all incorrect imports
        let newContent = content.replace(/import\s+.*\s+from\s+['"]lucide-react['"];\n?/g, '');
        
        // Add correct import at the top (after other imports)
        const importLines = newContent.split('\n');
        let insertIndex = 0;
        
        // Find the last import statement
        for (let i = 0; i < importLines.length; i++) {
          if (importLines[i].startsWith('import ')) {
            insertIndex = i + 1;
          }
        }
        
        // Create individual default imports for each icon (this is the correct way for lucide-react)
        const correctImports = iconNames.map(iconName => `import ${iconName} from 'lucide-react';`).join('\n');
        importLines.splice(insertIndex, 0, correctImports);
        
        newContent = importLines.join('\n');
        
        // Write the fixed content back
        fs.writeFileSync(file, newContent, 'utf8');
        fixedFiles++;
        console.log(`✓ Fixed ${file} - imported: ${iconNames.join(', ')}`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\nFixed ${fixedFiles} out of ${totalFiles} files with incorrect lucide-react imports.`);