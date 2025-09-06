#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } } function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } } function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } } function main() {  cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } }        } main();
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0;  } } } function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0;  } } } function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0;  } } } function main() {  cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; );  } } }        } main();
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } } function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } } function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } } function main() {  cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } }        } main();
#!/usr/bin/env node
<<<<<<< HEAD

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
/**
 * Repository cleanup script for Zion Tech Group
 * Removes disabled, backup, and unnecessary files
 */
const CLEANUP_PATTERNS = [// Disabled directories
  'src.disabled/**',
  'pages.disabled/**',
  'pages.disabled_auto/**',
  'components.disabled/**',
  'lib.disabled/**',
  'types.disabled/**',
  'hooks.disabled/**',
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
  for (const pattern of KEEP_PATTERNS) {
    if (glob.minimatch(filePath, pattern)) {
<<<<<<< HEAD
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
  for (const pattern of CLEANUP_PATTERNS) {
    if (glob.minimatch(filePath, pattern)) {
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

}
function cleanScripts() {
  const scriptsDir = 'scripts';
  if (!fs.existsSync(scriptsDir)) {
<<<<<<< HEAD
  

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
    // Keep important reports, remove temporary ones
    if (
      !file.includes('performance-report.json') &&
      !file.includes('quality-report.json') &&
      !file.includes('security-audit-report.json')
    ) {
      if (removeFile(file)) {
<<<<<<< HEAD
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
    


=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  for (const pattern of CLEANUP_PATTERNS) {
    const files = glob.sync(pattern, { "nodir": false });
    for (const file of files) {
      if (shouldRemoveFile(file)) {
        if (removeFile(file)) {
          totalRemoved++}
      }
    }
  }
  console.log("\n📊 Cleanup "Summary": ");
  console.log(`   Total items removed: ${totalRemoved}`);
  console.log('\n✨ Repository cleanup completed!');
  console.log('\n📝 Next "steps": ');
  console.log('   1. Run: npm install');
  console.log('   2. Run: npm run build');
  console.log('   3. Test the application');
  console.log('   4. Commit the changes')}
main();
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: 'true' }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: 'true' }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: 'true' }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: 'false' }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();


#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
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

main

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
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
