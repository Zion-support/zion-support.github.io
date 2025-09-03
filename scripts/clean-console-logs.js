
];


import fs from 'fs';';import path from 'path';';import { glob } from 'glob';
;;// Directories to clean;
const directories = [
  'src/**/*.{js,jsx,ts,tsx}'',;  'pages/**/*.{js,jsx,ts,tsx}'',;  'components/**/*.{js,jsx,ts,tsx}''];';;
// Directories to exclude;
const excludeDirs = [
  'node_modules'',;  '.next'',;  'build'',;  'dist'',;  'scripts'',;  'automation'',;  'automation_backup'',;  'src.disabled'',;  'pages.disabled'',;  'components.disabled'',;  'backup-pages'',;  'pages_backup'',;  'pages.__backup''];';;
let totalFiles = 0;
let cleanedFiles = 0;
let totalRemoved = 0;
;
function cleanConsoleLogs(content, filePath) {;
  const originalContent = content;
;
  // Remove console.log, console.warn, console.error, console.debug statements;
  // But keep console.error in error handling contexts;
  const patterns = [
    // Remove standalone console.log statements;
    /^\s*console\.log\s*\([^)]*\)\s*;?\s*$/gm,;
    // Remove console.warn statements;
    /^\s*console\.warn\s*\([^)]*\)\s*;?\s*$/gm,;
    // Remove console.debug statements;
    /^\s*console\.debug\s*\([^)]*\)\s*;?\s*$/gm,;
    // Remove console.log in multi-line statements (be careful with this);
    /console\.log\s*\([^)]*\)\s*;?\s*(?=\n)/g];
;
  let cleanedContent = content;
  let removedCount = 0;
;
  patterns.forEach(pattern => {;);    const matches = cleanedContent.match(pattern);
    if (matches) {;
      removedCount += matches.length}
;
    totalFiles++} catch (error) {;
    console.error(`❌ Error processing ${filePath}:`, error.message);`}
}

