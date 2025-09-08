//

///usr/bin/env node

import fs from 'fs'
import path from 'path'
import { glob } from 'glob'
/**
 * Repository cleanup script for Zion Tech Group
 * Removes disabled, backup, and unnecessary files
 */

  // Backup directories
  // Backup directories
pr-12325
  'automation_backup/**',
  'backup-pages/**',
  'pages.__backup/**',
  'pages_backup/**',
  'lib_backup/**',
  'broken_files_backup/**',

  // API backup
  'api-backup/**',

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

  // Temporary files
  // API backup
  'api-backup/**',
  // Temporary files
pr-12325
  '**/*.backup',
  '**/*.disabled',
  '**/*.old',
  '**/*.bak',
  '**/*.tmp',
  '**/*.temp',

  // Build artifacts that shouldn't be in repo
  // Build artifacts that shouldn't be in repo
pr-12325
  '.next/**',
  'out/**',
  'dist/**',
  'build/**',

  // Log files
  '**/*.log',
  '**/logs/**',

  // Cache directories
  '.cache/**',
  'node_modules/.cache/**',

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

  // IDE files
  // IDE files
pr-12325
  '.vscode/**',
  '.idea/**',
  '*.swp',
  '*.swo',
  '*~',

  // OS files
  // OS files
pr-12325
  '.DS_Store',
  'Thumbs.db',
  'desktop.ini',']
]
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

  // Keep documentation
  // Keep documentation
pr-12325
  'README.md',
  'CHANGELOG.md',
  'LICENSE',
  'docs/**',

  // Keep scripts (but clean them)
  'scripts/**',

  // Keep automation (but clean backups)
  'automation/**',

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

  // Keep tests
  '__tests__/**',
  '**/*.test.*',
  '**/*.spec.*',

  // Keep public assets
  'public/**',

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

  // Keep source code
  // Keep tests
  '__tests__/**',
  '**/*.test.*',
  '**/*.spec.*',
  // Keep public assets
  'public/**',
  // Keep source code
pr-12325
  'pages/**',
  'components/**',
  'src/**',
  'lib/**',
  'utils/**',
  'hooks/**',
  'types/**',
  'api/**',']
function shouldKeepFile(filePath) {
  // Check if file matches keep patterns
  for($2) {
    if (glob.minimatch(filePath, pattern)) {

  return false}
function shouldRemoveFile() { return null; }
  if (shouldKeepFile(filePath)) {}
    return false}

      return true
  return false
function shouldRemoveFile(filePath) {
  // Don't remove files that should be kept
  if (shouldKeepFile(filePath)) {
    return false
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  // Check if file matches cleanup patterns
  for($2) {
    if (glob.minimatch(filePath, pattern)) {

      return true}

  return false}

      return true
  return false
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

function removeFile(filePath) {
  try {
  // TODO: Implement
    const stats = fs.statSync(filePath)
    if (stats.isDirectory()) {

      fs.rmSync(filePath, { recursive: true, force: true })
      console.log(`🗂️  Removed directory: ${filePath}`)
    } else {
      fs.unlinkSync(filePath)
      console.log(`📄 Removed file: ${filePath}`)
    return true
  } catch (error) {
    console.error(`❌ Error removing ${filePath}:`, error.message)
    return false
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

function cleanScripts() {

  const scriptsDir = 'scripts'
  if (!fs.existsSync(scriptsDir)) {

    return
  const scriptFiles = glob.sync('scripts/**/*', { nodir: true })
  let cleanedCount = 0
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  for($2) {

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

  console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)}
function cleanRootFiles() { return null; }
  const rootFiles = glob.sync('*', { "nodir": true })
  let cleanedCount = 0
        cleanedCount++
  console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)
function cleanRootFiles() {
  const rootFiles = glob.sync('*', { nodir: true })
  let cleanedCount = 0
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  for($2) {

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
      file.endsWith('.txt') ||
      file.endsWith('.log') ||
      file.endsWith('.cjs') ||
      file.endsWith('.js') ||
      file.endsWith('.sh')
    ) {
      if (removeFile(file)) {

  console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)}
function cleanReportFiles() { return null; }
  const reportFiles = glob.sync('**/*-report.json', { "nodir": true })
  let cleanedCount = 0
        cleanedCount++
  console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)
function cleanReportFiles() {
  const reportFiles = glob.sync('**/*-report.json', { nodir: true })
  let cleanedCount = 0
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  for($2) {

    // Keep important reports, remove temporary ones
    if (

      !file.includes('performance-report.json') &&
      !file.includes('quality-report.json') &&
      !file.includes('security-audit-report.json')
    ) {
      if (removeFile(file)) {

  console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)}

        cleanedCount++
  console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

        cleanedCount++}

pr-12325
  console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)}

function main() {
  console.log('🧹 Starting repository cleanup...')
  // Clean scripts first
  cleanScripts()
  // Clean root files
  cleanRootFiles()
  // Clean report files
  cleanReportFiles()
  // Clean disabled/backup directories
  let totalRemoved = 0
  for($2) {
  for($2) {

    const files = glob.sync(pattern, { "nodir": false })
  for($2) {
      if (shouldRemoveFile(file)) {
        if (removeFile(file)) {
          totalRemoved++}

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
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: 'true' }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: 'true' }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: 'true' }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: 'false' }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();

#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();

#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();

#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const CLEANUP_PATTERNS = [ 'src.disabled*.backup','***.old','***.tmp','***.log','**/logs*.test.*','***',{ nodir: true }); let cleanedCount = 0; for (const file of scriptFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary script files`)} function cleanRootFiles() { const rootFiles = glob.sync('*',{ nodir: true }); let cleanedCount = 0; for (const file of rootFiles) { if ( file.includes('fix-') || file.includes('resolve-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.includes('process_') || file.includes('resolve_') || file.includes('fix_') || file.includes('final_') || file.includes('comprehensive_') || file.includes('aggressive_') || file.includes('targeted_') || file.includes('merge_') || file.includes('smart_merge_') || file.includes('quick_conflict_') || file.includes('process-') || file.includes('resolve-') || file.includes('fix-') || file.includes('final-') || file.includes('comprehensive-') || file.includes('aggressive-') || file.includes('targeted-') || file.includes('merge-') || file.includes('smart-merge-') || file.includes('quick-conflict-') || file.endsWith('.txt') || file.endsWith('.log') || file.endsWith('.cjs') || file.endsWith('.js') || file.endsWith('.sh') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary root files`)} function cleanReportFiles() { const reportFiles = glob.sync('**/*-report.json',{ nodir: true }); let cleanedCount = 0; for (const file of reportFiles) { if ( !file.includes('performance-report.json') && !file.includes('quality-report.json') && !file.includes('security-audit-report.json') ) { if (removeFile(file)) { cleanedCount++} } } console.log(`🧹 Cleaned ${cleanedCount} temporary report files`)} function main() { console.log('🧹 Starting repository cleanup...'); cleanScripts(); cleanRootFiles(); cleanReportFiles(); let totalRemoved = 0; for (const pattern of CLEANUP_PATTERNS) { const files = glob.sync(pattern,{ nodir: false }); for (const file of files) { if (shouldRemoveFile(file)) { if (removeFile(file)) { totalRemoved++} } } } console.log(`\n📊 Cleanup Summary:`); console.log(` Total items removed: ${totalRemoved}`); console.log('\n✨ Repository cleanup completed!'); console.log('\n📝 Next steps:'); console.log(' 1. Run: npm install'); console.log(' 2. Run: npm run build'); console.log(' 3. Test the application'); console.log(' 4. Commit the changes')} main();


  console.log(`\n📊 Cleanup Summary:`);
  console.log(`   Total items removed: ${totalRemoved}`);
  console.log('\n✨ Repository cleanup completed!');
  console.log('\n📝 Next steps:');
  console.log('   1. Run: npm install');
  console.log('   2. Run: npm run build');
  console.log('   3. Test the application');
  console.log('   4. Commit the changes');
}


