<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } } function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } } function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } } function main() {  cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } }        } main();
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0;  } } } function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0;  } } } function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0;  } } } function main() {  cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; );  } } }        } main();
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0;  } } } function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0;  } } } function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0;  } } } function main() {  cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; );  } } }        } main();
=======
<<<<<<< HEAD
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0;  } } } function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0;  } } } function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0;  } } } function main() {  cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; );  } } }        } main();
=======
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } } function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } } function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } } function main() {  cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } }        } main();
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } } function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } } function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } } function main() {  cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } }        } main();
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
#!/usr/bin/env node
<<<<<<< HEAD

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
import fs from 'fs';
import path from 'path';
=======

#!/usr/bin/env node;
import fs from 'fs';'
import path from 'path';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { glob } from 'glob';
/**
 * Repository cleanup script for Zion Tech Group;
 * Removes disabled, backup, and unnecessary files;
 */
const CLEANUP_PATTERNS = [// Disabled directories'
  'src.disabled/**','
  'pages.disabled/**','
  'pages.disabled_auto/**','
  'components.disabled/**','
  'lib.disabled/**','
  'types.disabled/**','
  'hooks.disabled/**','
  'contracts.disabled/**',
<<<<<<< HEAD

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  // Backup directories
  'automation_backup/**',
  'backup-pages/**',
  'pages.__backup/**',
  'pages_backup/**',
  'lib_backup/**',
  'broken_files_backup/**',
<<<<<<< HEAD

  // API backup
  'api-backup/**',

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
  // API backup
  'api-backup/**',
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  // Temporary files
  '**/*.backup',
  '**/*.disabled',
  '**/*.old',
  '**/*.bak',
  '**/*.tmp',
  '**/*.temp',
<<<<<<< HEAD

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  // Build artifacts that shouldn't be in repo
  '.next/**',
  'out/**',
  'dist/**',
  'build/**',
<<<<<<< HEAD

  // Log files
  '**/*.log',
  '**/logs/**',

  // Cache directories
  '.cache/**',
  'node_modules/.cache/**',

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
  // Log files
  '**/*.log',
  '**/logs/**',
  // Cache directories
  '.cache/**',
  'node_modules/.cache/**',
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  // IDE files
  '.vscode/**',
  '.idea/**',
  '*.swp',
  '*.swo',
  '*~',
<<<<<<< HEAD

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  // OS files
  '.DS_Store',
  'Thumbs.db',
  'desktop.ini',
];
<<<<<<< HEAD
const KEEP_PATTERNS = [
  // Keep important config files
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
const KEEP_PATTERNS = [// Keep important config files
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  'package.json',
  'package-lock.json',
  'yarn.lock',
  'next.config.js',
  'next.config.cjs',
  'next.config.mjs',
  'tsconfig.json',
  'tailwind.config.js',
  'postcss.config.js',
  'eslint.config.js',
<<<<<<< HEAD

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  // Keep documentation
  'README.md',
  'CHANGELOG.md',
  'LICENSE',
  'docs/**',
<<<<<<< HEAD

  // Keep scripts (but clean them)
  'scripts/**',

  // Keep automation (but clean backups)
  'automation/**',

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
  // Keep scripts (but clean them)
  'scripts/**',
  // Keep automation (but clean backups)
  'automation/**',
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  // Keep tests
  '__tests__/**',
  '**/*.test.*',
  '**/*.spec.*',
<<<<<<< HEAD

  // Keep public assets
  'public/**',

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
  // Keep public assets
  'public/**',
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  // Keep source code
  'pages/**',
  'components/**',
  'src/**',
  'lib/**',
  'utils/**',
  'hooks/**',
  'types/**',
  'api/**',
];
function shouldKeepFile(filePath) {
  // Check if file matches keep patterns
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  for (const pattern of KEEP_PATTERNS) {
    if (glob.minimatch(filePath, pattern)) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      return true}
  
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  
=======
  for (const pattern of KEEP_PATTERNS) {
    if (glob.minimatch(filePath, pattern)) {
      return true}
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
  for (const pattern of KEEP_PATTERNS) {
    if (glob.minimatch(filePath, pattern)) {
      return true}
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
  // Backup directories'
  'automation_backup/**','
  'backup-pages/**','
  'pages.__backup/**','
  'pages_backup/**','
  'lib_backup/**','
  'broken_files_backup/**',
  // API backup'
  'api-backup/**',
  // Temporary files'
  '**/*.backup','
  '**/*.disabled','
  '**/*.old','
  '**/*.bak','
  '**/*.tmp','
  '**/*.temp','
  // Build artifacts that shouldn't be in repo'
  '.next/**','
  'out/**','
  'dist/**','
  'build/**',
  // Log files'
  '**/*.log','
  '**/logs/**',
  // Cache directories'
  '.cache/**','
  'node_modules/.cache/**',
  // IDE files'
  '.vscode/**','
  '.idea/**','
  '*.swp','
  '*.swo','
  '*~',
  // OS files'
  '.DS_Store','
  'Thumbs.db','
  'desktop.ini',
];
const KEEP_PATTERNS = [// Keep important config files'
  'package.json','
  'package-lock.json','
  'yarn.lock','
  'next.config.js','
  'next.config.cjs','
  'next.config.mjs','
  'tsconfig.json','
  'tailwind.config.js','
  'postcss.config.js','
  'eslint.config.js',
  // Keep documentation'
  'README.md','
  'CHANGELOG.md','
  'LICENSE','
  'docs/**',
  // Keep scripts (but clean them)'
  'scripts/**',
  // Keep automation (but clean backups)'
  'automation/**',
  // Keep tests'
  '__tests__/**','
  '**/*.test.*','
  '**/*.spec.*',
  // Keep public assets'
  'public/**',
  // Keep source code'
  'pages/**','
  'components/**','
  'src/**','
  'lib/**','
  'utils/**','
  'hooks/**','
  'types/**','
  'api/**',
];
function shouldKeepFile(filePath) {}
  // Check if file matches keep patterns;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }
<<<<<<< HEAD
=======
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } } function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } } function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } } function main() {  cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } }        } main();#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0;  } } } function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0;  } } } function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0;  } } } function main() {  cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; );  } } }        } main();  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return false}
function shouldRemoveFile() { return null; }
  if (shouldKeepFile(filePath)) {}
    return false}
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      return true;
    }
  }

  return false;
}

function shouldRemoveFile(filePath) {
  // Don't remove files that should be kept
  if (shouldKeepFile(filePath)) {
    return false;
  }

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  // Check if file matches cleanup patterns
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  for (const pattern of CLEANUP_PATTERNS) {
    if (glob.minimatch(filePath, pattern)) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      return true}
  
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  
=======
  for (const pattern of CLEANUP_PATTERNS) {
    if (glob.minimatch(filePath, pattern)) {
      return true}
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
  for (const pattern of CLEANUP_PATTERNS) {
    if (glob.minimatch(filePath, pattern)) {
      return true}
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  }
  return false}
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      return true;
    }
  }

  return false;
}

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
      return true}
  
  for (const pattern of KEEP_PATTERNS) {
    if (glob.minimatch(filePath, pattern)) {
      return true}
  }
  return false}
function shouldRemoveFile(filePath) {
  // Don't remove files that should be kept
  if (shouldKeepFile(filePath)) {
    return false}
  // Check if file matches cleanup patterns
  for (const pattern of CLEANUP_PATTERNS) {
    if (glob.minimatch(filePath, pattern)) {
      return true}
  
  for (const pattern of CLEANUP_PATTERNS) {
    if (glob.minimatch(filePath, pattern)) {
      return true}
  }
  return false}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
function removeFile(filePath) {
  try {
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
<<<<<<< HEAD
      fs.rmSync(filePath, { recursive: true, force: true });
      console.log(`🗂️  Removed directory: ${filePath}`);
    } else {
      fs.unlinkSync(filePath);
      console.log(`📄 Removed file: ${filePath}`);
    }

    return true;
  } catch (error) {
    console.error(`❌ Error removing ${filePath}:`, error.message);
    return false;
  }
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

=======
      fs.rmSync(filePath, { "recursive": true, "force": true });
      console.log(`🗂️  Removed "directory": ${filePath}`)} else {
      fs.unlinkSync(filePath);
      console.log(`📄 Removed "file": ${filePath}`)}
    return true} catch (error) {
    console.error(`❌ Error removing ${filePath}:`, error.message);
    return false}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
}

<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======

=======
<<<<<<< HEAD

=======
}
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
}
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
function cleanScripts() {
<<<<<<< HEAD
=======
  for (const pattern of CLEANUP_PATTERNS) {
    if (glob.minimatch(filePath, pattern)) {
      return true}  function cleanScripts() {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const scriptsDir = 'scripts';
  if (!fs.existsSync(scriptsDir)) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    return}
  const scriptFiles = glob.sync('scripts/**/*', { "nodir": true });
  let cleanedCount = 0;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
<<<<<<< HEAD
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  for (const file of scriptFiles) {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    return;
  }

  const scriptFiles = glob.sync('scripts/**/*', { nodir: true });
  let cleanedCount = 0;
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

=======
    return}
  const scriptFiles = glob.sync('scripts/**/*', { "nodir": true });
  let cleanedCount = 0;
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  for (const file of scriptFiles) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    // Remove temporary fix scripts
    if (
      file.includes('fix-') ||
      file.includes('resolve-') ||
      file.includes('final-') ||
      file.includes('comprehensive-') ||
      file.includes('aggressive-') ||
      file.includes('targeted-')
    ) {
      if (removeFile(file)) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        cleanedCount++}
<<<<<<< HEAD
<<<<<<< HEAD
  
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }
=======
  // Check if file matches cleanup patterns;
  }
  return false}
function removeFile(filePath) {}
  try {}
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {}
      fs.rmSync(filePath, { "recursive": true, "force": true });"
      console.log(`🗂️  Removed "directory": ${filePath}`)} else {}
      fs.unlinkSync(filePath);"`
      console.log(`📄 Removed "file": ${filePath}`)}
    return true} catch (error) {}`
    console.error(`❌ Error removing ${filePath}:`, error.message);
    return false}

function cleanScripts() { return null; }
  if (!fs.existsSync(scriptsDir)) {}
    return}'"
  const scriptFiles = glob.sync('scripts/**/*', { "nodir": true });
  let cleanedCount = 0;

    }
  }`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)}
function cleanRootFiles() { return null; }
  const rootFiles = glob.sync('*', { "nodir": true });
  let cleanedCount = 0;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
<<<<<<< HEAD
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  for (const file of rootFiles) {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
        cleanedCount++;
      }
    }
  }

  console.log(`🧹 Cleaned ${cleanedCount} temporary script files`);
}

function cleanRootFiles() {
  const rootFiles = glob.sync('*', { nodir: true });
  let cleanedCount = 0;
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

=======
        cleanedCount++}
    }
  }
  console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)}
function cleanRootFiles() {
  const rootFiles = glob.sync('*', { "nodir": true });
  let cleanedCount = 0;
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  for (const file of rootFiles) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    // Remove temporary files in root
    if (
      file.includes('fix-') ||
      file.includes('resolve-') ||
      file.includes('final-') ||
      file.includes('comprehensive-') ||
      file.includes('aggressive-') ||
      file.includes('targeted-') ||
      file.includes('merge-') ||
      file.includes('smart-merge-') ||
      file.includes('quick-conflict-') ||
      file.includes('process_') ||
      file.includes('resolve_') ||
      file.includes('fix_') ||
      file.includes('final_') ||
      file.includes('comprehensive_') ||
      file.includes('aggressive_') ||
      file.includes('targeted_') ||
      file.includes('merge_') ||
      file.includes('smart_merge_') ||
      file.includes('quick_conflict_') ||
      file.includes('process-') ||
      file.includes('resolve-') ||
      file.includes('fix-') ||
      file.includes('final-') ||
      file.includes('comprehensive-') ||
      file.includes('aggressive-') ||
      file.includes('targeted-') ||
      file.includes('merge-') ||
      file.includes('smart-merge-') ||
      file.includes('quick-conflict-') ||
      file.endsWith('.txt') ||
      file.endsWith('.log') ||
      file.endsWith('.cjs') ||
      file.endsWith('.js') ||
      file.endsWith('.sh')
    ) {
      if (removeFile(file)) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        cleanedCount++}
<<<<<<< HEAD
<<<<<<< HEAD
  
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }
=======

    }
  }`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)}
function cleanReportFiles() { return null; }
  const reportFiles = glob.sync('**/*-report.json', { "nodir": true });
  let cleanedCount = 0;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
<<<<<<< HEAD
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  for (const file of reportFiles) {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
        cleanedCount++;
      }
    }
  }

  console.log(`🧹 Cleaned ${cleanedCount} temporary root files`);
}

function cleanReportFiles() {
  const reportFiles = glob.sync('**/*-report.json', { nodir: true });
  let cleanedCount = 0;
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

=======
        cleanedCount++}
    }
  }
  console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)}
function cleanReportFiles() {
  const reportFiles = glob.sync('**/*-report.json', { "nodir": true });
  let cleanedCount = 0;
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  for (const file of reportFiles) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    // Keep important reports, remove temporary ones
    if (
      !file.includes('performance-report.json') &&
      !file.includes('quality-report.json') &&
      !file.includes('security-audit-report.json')
    ) {
      if (removeFile(file)) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        cleanedCount++}
<<<<<<< HEAD
<<<<<<< HEAD
  
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }
  console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)}
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        cleanedCount++;
      }
    }
  }

  console.log(`🧹 Cleaned ${cleanedCount} temporary report files`);
}

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
        cleanedCount++}
    }
  }
  console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
function main() {
  console.log('🧹 Starting repository cleanup...');
  // Clean scripts first
  cleanScripts();
  // Clean root files
  cleanRootFiles();
  // Clean report files
  cleanReportFiles();
  // Clean disabled/backup directories
  let totalRemoved = 0;
<<<<<<< HEAD
  );
<<<<<<< HEAD

=======
<<<<<<< HEAD
  );
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
<<<<<<< HEAD
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  for (const pattern of CLEANUP_PATTERNS) {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  for (const pattern of CLEANUP_PATTERNS) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    const files = glob.sync(pattern, { "nodir": false });
    for (const file of files) {
      if (shouldRemoveFile(file)) {
        if (removeFile(file)) {
          totalRemoved++}
<<<<<<< HEAD
<<<<<<< HEAD
  );
    
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======

    }
  }`
  console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)}
function main() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
  }"
  console.log("\n📊 Cleanup "Summary": ");`
  console.log(`   Total items removed: ${totalRemoved}`);'
  console.log('\n✨ Repository cleanup completed!');'"
  console.log('\n📝 Next "steps": ');'
  console.log('   1. Run: npm install');'
  console.log('   2. Run: npm run build');'
  console.log('   3. Test the application');'
  console.log('   4. Commit the changes')}
main();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: 'true' }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: 'true' }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: 'true' }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: 'false' }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();
=======
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: 'true' }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: 'true' }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: 'true' }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: 'false' }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();


<<<<<<< HEAD
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: 'true' }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: 'true' }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: 'true' }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; );  } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; );  } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; );  } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; );  } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; );  } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();
origin/cursor/integrate-build-improve-and-re-verify-c7b5
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: 'true' }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: 'true' }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: 'true' }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: 'false' }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

main

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  for (const pattern of CLEANUP_PATTERNS) {
    const files = glob.sync(pattern, { nodir: false });
    for (const file of files) {
      if (shouldRemoveFile(file)) {
        if (removeFile(file)) {
          totalRemoved++;
        }
      }
    }
  }

  console.log(`\n📊 Cleanup Summary:`);
  console.log(`   Total items removed: ${totalRemoved}`);
  console.log('\n✨ Repository cleanup completed!');
  console.log('\n📝 Next steps:');
  console.log('   1. Run: npm install');
  console.log('   2. Run: npm run build');
  console.log('   3. Test the application');
  console.log('   4. Commit the changes');
}

main();
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


'`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: 'true' }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: 'true' }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: 'true' }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; );  } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();'`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; );  } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();'`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; );  } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();'`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; );  } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();'`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0;  } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; );  } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
=

'`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: 'true' }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: 'true' }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: 'true' }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: 'false' }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();'`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
