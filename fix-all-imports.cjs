#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/JSX files that have incorrect imports
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
    '**/fix-*.cjs',
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
    
    // Check if file has incorrect imports
    const hasIncorrectImports = /import\s+.*\s+from\s+['"]lucide-react['"];/.test(content) || 
                               /import\s+\{\s*Link\s*\}\s+from\s+['"]next\/link['"];/.test(content);
    
    if (hasIncorrectImports) {
      totalFiles++;
      console.log(`Fixing ${file}...`);
      
      let newContent = content;
      
      // Fix lucide-react imports - convert named imports to default imports
      const lucideMatches = newContent.match(/import\s+\{\s*([^}]+)\s*\}\s+from\s+['"]lucide-react['"];/g);
      if (lucideMatches && lucideMatches.length > 0) {
        lucideMatches.forEach(match => {
          const namesMatch = match.match(/import\s+\{\s*([^}]+)\s*\}\s+from/);
          if (namesMatch) {
            const names = namesMatch[1].split(',').map(name => name.trim()).filter(Boolean);
            const defaultImports = names.map(name => `import ${name} from 'lucide-react';`).join('\n');
            newContent = newContent.replace(match, defaultImports);
          }
        });
      }
      
      // Fix Next.js Link imports - convert named import to default import
      newContent = newContent.replace(
        /import\s+\{\s*Link\s*\}\s+from\s+['"]next\/link['"];/g,
        "import Link from 'next/link';"
      );
      
      // Write the fixed content back
      fs.writeFileSync(file, newContent, 'utf8');
      fixedFiles++;
      console.log(`✓ Fixed ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\nFixed ${fixedFiles} out of ${totalFiles} files with incorrect imports.`);