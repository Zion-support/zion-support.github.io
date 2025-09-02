#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Configuration;
const CONFIG = {
  // Directories to process;
  directories: [;
    'src/**/*.{js,jsx,ts,tsx}',
    'pages/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts,tsx}',
    'utils/**/*.{js,jsx,ts,tsx}',
    'hooks/**/*.{js,jsx,ts,tsx}',
    'services/**/*.{js,jsx,ts,tsx}';
  ],
  // Files to exclude;
  exclude: [;
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/.next/**';
  ],
  // Console methods to remove;
  consoleMethods: ['log', 'warn', 'info', 'debug'],
  // Keep console.error in production for debugging;
  keepConsoleError: true}
// Statistics;
let stats = {
  filesProcessed: 0,
  consoleStatementsRemoved: 0,
  filesModified: 0}
/**;
 * Remove console statements from a file;
 */;
function removeConsoleStatements(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let modifiedContent = content;
    let removedCount = 0;
    // Create regex patterns for different console methods;
    CONFIG.consoleMethods.forEach(method => {
      // Pattern to match console.method() calls;
      const patterns = [;
        // Simple console.method() calls;
        new RegExp(`console\\.${method}\\s*\\([^)]*\\)\\s*;?\\s*`, 'g'),
        // Multi-line console.method() calls;
        new RegExp(`console\\.${method}\\s*\\([\\s\\S]*?\\)\\s*;?\\s*`, 'g'),
        // Console.method() with template literals;
        new RegExp(`console\\.${method}\\s*\`[^\`]*\`\\s*;?\\s*`, 'g');
      ];
      patterns.forEach(pattern => {
        const matches = modifiedContent.match(pattern);
        if (matches) {
          removedCount += matches.length;
          modifiedContent = modifiedContent.replace(pattern, '')}
      })})
    // Remove empty lines that might be left behind;
    modifiedContent = modifiedContent.replace(/\n\s*\n\s*\n/g, '\n\n');
    // Write back if content was modified;
    if (modifiedContent !== content) {
      fs.writeFileSync(filePath, modifiedContent, 'utf8');
      stats.filesModified++;
      stats.consoleStatementsRemoved += removedCount;
      console.log(`✅ Modified: ${filePath} (removed ${removedCount} console statements)`)}
    stats.filesProcessed++;
    return removedCount > 0} catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false}
}
/**;
 * Check if file should be excluded;
 */;
function shouldExcludeFile(filePath) {
  return CONFIG.exclude.some(pattern => {
    const regex = new RegExp(pattern.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*'));
    return regex.test(filePath)})}
/**;
 * Main function;
 */;
async function main() {
  console.log('🚀 Starting console.log removal process...\n');
  // Get all files to process;
  let allFiles = [];
  for (const pattern of CONFIG.directories) {
    const files = await glob(pattern, {
      ignore: CONFIG.exclude,
      absolute: true})
    allFiles = allFiles.concat(files)}
  // Remove duplicates;
  allFiles = [...new Set(allFiles)];
  console.log(`📁 Found ${allFiles.length} files to process\n`);
  // Process each file;
  allFiles.forEach(filePath => {
    if (!shouldExcludeFile(filePath)) {
      removeConsoleStatements(filePath)}
  })
  // Print summary;
  console.log('\n📊 Summary:');
  console.log(`   Files processed: ${stats.filesProcessed}`);
  console.log(`   Files modified: ${stats.filesModified}`);
  console.log(`   Console statements removed: ${stats.consoleStatementsRemoved}`);
  if (stats.filesModified > 0) {
    console.log('\n✅ Console.log removal completed successfully!')} else {
    console.log('\nℹ️  No console statements found to remove.')}
}
// Run if called directly;
if (import.meta.url === `file://${process.argv[1]}`) {
  main()}
export { removeConsoleStatements, CONFIG }