#!/usr/bin/env node

<<<<<<< HEAD
const fs = require('fs'),
const path = require('path'),

// Function to find the best backup file for a given page
function findBestBackup(pagePath) {
  const dir = path.dirname(pagePath),
  const baseName = path.basename(pagePath, path.extname(pagePath)),
  const ext = path.extname(pagePath),
  
  // Look for backup files
  const backupPattern = new RegExp(`^${baseName}\\.tsx\\.backup\\.\\d+$`),
  const files = fs.readdirSync(dir).filter(file => backupPattern.test(file)),
=======
const _fs = require('fs');
const _path = require('path');

// Function to find the best backup file for a given page
function findBestBackup(_pagePath) {_const _dir = path.dirname(pagePath);
  const _baseName = path.basename(pagePath, _path.extname(pagePath));
  const _ext = path.extname(pagePath);
  
  // Look for backup files
  const _backupPattern = new RegExp(`^${baseName}\\.tsx\\.backup\\.\\d+$`);
  const _files = fs.readdirSync(dir).filter(file => backupPattern.test(file));
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  if (files.length === 0) return null,
  
  // Sort by timestamp (newest first) and find the first valid one
<<<<<<< HEAD
  files.sort((a, b) => {
    const timestampA = parseInt(a.match(/\.backup\.(\d+)$/)[1]),
    const timestampB = parseInt(b.match(/\.backup\.(\d+)$/)[1]),
    return timestampB - timestampA
  }),
  
  for (const backupFile of files) {
    const backupPath = path.join(dir, backupFile),
    try {
      const content = fs.readFileSync(backupPath, 'utf8'),
=======
  files.sort(_(a, _b) => {_const _timestampA = parseInt(a.match(/\.backup\.(\d+)$/)[1]);
    const _timestampB = parseInt(b.match(/\.backup\.(\d+)$/)[1]);
    return timestampB - timestampA;});
  
  for (const backupFile of files) {_const _backupPath = path.join(dir, _backupFile);
    try {
      const _content = fs.readFileSync(backupPath, _'utf8');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      // Check if this backup has proper content
      if (content.includes('export default') && 
          (content.includes('function') || content.includes('const') || content.includes('class')) &&
          content.includes('return') &&
          content.length > 100) {
<<<<<<< HEAD
        return backupPath
      }
    } catch (error) {
<<<<<<< HEAD
      // // // console.log(`Error reading backup ${backupPath}:`, error.message)
=======
      // console.log(`Error reading backup ${backupPath}:`, error.message);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
=======
        return backupPath;}
    } catch (error) {}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
  
  return null
}

// Function to restore a corrupted page
<<<<<<< HEAD
function restorePage(pagePath) {
  try {
    const currentContent = fs.readFileSync(pagePath, 'utf8'),
=======
function restorePage(_pagePath) {_try {
    const _currentContent = fs.readFileSync(pagePath, _'utf8');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Check if the page is corrupted
    const _isCorrupted = !currentContent.includes('export default') || 
                        currentContent.length < 100 ||
                        !currentContent.includes('return'),
    
    if (!isCorrupted) {
<<<<<<< HEAD
      return { restored: false, reason: 'Page is not corrupted' }
    }
    
    // Find backup
    const backupPath = findBestBackup(pagePath),
    if (!backupPath) {
      return { restored: false, reason: 'No valid backup found' }
    }
    
    // Read backup content
    let backupContent = fs.readFileSync(backupPath, 'utf8'),
    
    // Handle merge conflicts by taking the content after the conflict markers
    if (backupContent.includes('<<<<<<< HEAD')) {
      const parts = backupContent.split('======='),
      if (parts.length > 1) {
        // Take the content after the conflict resolution
        backupContent = parts[1].split('>>>>>>>')[0]
      }
=======
      return { restored: false, _reason: 'Page is not corrupted'};
    }
    
    // Find backup
    const _backupPath = findBestBackup(pagePath);
    if (!backupPath) {_return { restored: false, _reason: 'No valid backup found'};
    }
    
    // Read backup content
    let _backupContent = fs.readFileSync(backupPath, 'utf8');
    
    // Handle merge conflicts by taking the content after the conflict markers
    if (backupContent.includes('<<<<<<< HEAD')) {_const _parts = backupContent.split('=======');
      if (parts.length > 1) {
        // Take the content after the conflict resolution
        backupContent = parts[1].split('>>>>>>>')[0];}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    
    // Clean up the content
    backupContent = backupContent.trim(),
    
    // Ensure it has proper structure
<<<<<<< HEAD
    if (!backupContent.includes('export default')) {
      return { restored: false, reason: 'Backup content is also corrupted' }
    }
    
    // Create a backup of the current corrupted file
    const timestamp = Date.now(),
    const corruptedBackupPath = `${pagePath}.corrupted.${timestamp}`,
    fs.writeFileSync(corruptedBackupPath, currentContent),
=======
    if (!backupContent.includes('export default')) {_return { restored: false, _reason: 'Backup content is also corrupted'};
    }
    
    // Create a backup of the current corrupted file
    const _timestamp = Date.now();
    const _corruptedBackupPath = `${_pagePath}.corrupted.${_timestamp}`;
    fs.writeFileSync(corruptedBackupPath, currentContent);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    // Restore the page
    fs.writeFileSync(pagePath, backupContent),
    
<<<<<<< HEAD
    return { 
      restored: true, 
      backupUsed: backupPath,
      corruptedBackup: corruptedBackupPath
    }
    
  } catch (error) {
    return { restored: false, reason: `Error: ${error.message}` }
=======
    return {_restored: true, _backupUsed: backupPath, _corruptedBackup: corruptedBackupPath};
    
  } catch (error) {_return { restored: false, _reason: `Error: ${error.message}` };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}

// Function to scan and restore all corrupted pages
<<<<<<< HEAD
function restoreAllCorruptedPages() {
  const pagesDir = path.join(process.cwd(), 'pages'),
  const results = {
    total: 0,
    restored: 0,
    failed: 0,
    details: []
  },
  
  function scanDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true }),
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name),
      
      if (entry.isDirectory()) {
        if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== '.next') {
          scanDirectory(fullPath)
        }
      } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) {
        results.total++,
        
<<<<<<< HEAD
        // // // console.log(`\n🔍 Checking: ${fullPath}`),
        const result = restorePage(fullPath),
        
        if (result.restored) {
          results.restored++,
          // // // console.log(`✅ Restored: ${fullPath}`),
          // // // console.log(`   Used backup: ${result.backupUsed}`),
          // // // console.log(`   Corrupted backup: ${result.corruptedBackup}`)
        } else {
          results.failed++,
          // // // console.log(`❌ Failed: ${fullPath}`),
          // // // console.log(`   Reason: ${result.reason}`)
=======
        // console.log(`\n🔍 Checking: ${fullPath}`);
        const result = restorePage(fullPath);
        
        if (result.restored) {
          results.restored++;
          // console.log(`✅ Restored: ${fullPath}`);
          // console.log(`   Used backup: ${result.backupUsed}`);
          // console.log(`   Corrupted backup: ${result.corruptedBackup}`);
        } else {
          results.failed++;
          // console.log(`❌ Failed: ${fullPath}`);
          // console.log(`   Reason: ${result.reason}`);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        }
        
        results.details.push({
          file: fullPath,
          ...result
        })
=======
function restoreAllCorruptedPages() {_const _pagesDir = path.join(process.cwd(), _'pages');
  const _results = {
    total: 0, _restored: 0, _failed: 0, _details: []};
  
  function scanDirectory(_dir) {_const _entries = fs.readdirSync(dir, _{ withFileTypes: true});
    
    for (const entry of entries) {_const _fullPath = path.join(dir, _entry.name);
      
      if (entry.isDirectory()) {
        if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== '.next') {
          scanDirectory(fullPath);}
      } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) {_results.total++;
        
        
        const _result = restorePage(fullPath);
        
        if (result.restored) {
          results.restored++;} else {_results.failed++;}
        
        results.details.push({_file: fullPath, _...result});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }
    }
  }
  
<<<<<<< HEAD
<<<<<<< HEAD
  // // // console.log('🚀 Starting page restoration process...'),
  scanDirectory(pagesDir),
  
  // Generate summary
  // // // console.log('\n📊 Restoration Summary: '),
  // // // console.log(`   Total pages: ${results.total}`),
  // // // console.log(`   Restored: ${results.restored}`),
  // // // console.log(`   Failed: ${results.failed}`),
  // // // console.log(`   Success rate: ${((results.restored / results.total) * 100).toFixed(1)}%`),
  
  // Save detailed report
  const reportPath = path.join(process.cwd(), 'page-restoration-report.json'),
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2)),
  // // // console.log(`\n📄 Detailed report saved to: ${reportPath}`),
=======
  // console.log('🚀 Starting page restoration process...');
  scanDirectory(pagesDir);
  
  // Generate summary
  // console.log('\n📊 Restoration Summary:');
  // console.log(`   Total pages: ${results.total}`);
  // console.log(`   Restored: ${results.restored}`);
  // console.log(`   Failed: ${results.failed}`);
  // console.log(`   Success rate: ${((results.restored / results.total) * 100).toFixed(1)}%`);
=======
  
  scanDirectory(pagesDir);
  
  // Generate summary
  
  
  
  
   * 100).toFixed(1)}%`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Save detailed report
  const _reportPath = path.join(process.cwd(), 'page-restoration-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
<<<<<<< HEAD
  // console.log(`\n📄 Detailed report saved to: ${reportPath}`);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  return results
}

// Run the restoration if this script is executed directly
<<<<<<< HEAD
if (require.main === module) {
  restoreAllCorruptedPages()
}

module.exports = {
  restorePage,
  restoreAllCorruptedPages,
  findBestBackup
},
=======
if (require.main === module) {_restoreAllCorruptedPages();}

module.exports = {_restorePage, _restoreAllCorruptedPages, _findBestBackup};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
