#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Configuration
const BACKUP_DIRS = [
  './backup',
  './backup-problematic-files',
  './components.disabled',
  './components.disabled_full',
  './lib.disabled',
  './hooks.disabled',
  './data.disabled',
  './contracts.disabled',
  './cypress.disabled'
];

const BACKUP_FILES = [
  './next.config.js.disabled',
  './next.config.mjs.disabled',
  './next.config.ts.disabled',
  './babel.config.js.disabled',
  './.husky/pre-push.disabled'
];

// Get directory size
function getDirectorySize(dirPath) {
  try {
    const result = execSync(`du -sh "${dirPath}" 2>/dev/null || echo "0  ${dirPath}"`, { encoding: 'utf8' });
    return result.trim().split('\t')[0] || '0';
  } catch (error) {
    return '0';
  }
}

// Remove directory
function removeDirectory(dirPath) {
  try {
    if (fs.existsSync(dirPath)) {
      execSync(`rm -rf "${dirPath}"`, { encoding: 'utf8' });
      console.log(`✅ Removed directory: ${dirPath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Failed to remove directory ${dirPath}:`, error.message);
    return false;
  }
}

// Remove file
function removeFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`✅ Removed file: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Failed to remove file ${filePath}:`, error.message);
    return false;
  }
}

// Main cleanup function
async function cleanupBackupFiles() {
  console.log('🧹 Starting cleanup of backup and disabled files...\n');
  
  let totalSizeSaved = 0;
  let removedCount = 0;
  
  // Remove backup directories
  console.log('📁 Removing backup directories:');
  for (const dir of BACKUP_DIRS) {
    const size = getDirectorySize(dir);
    console.log(`  ${dir} (${size})`);
    
    if (removeDirectory(dir)) {
      removedCount++;
      // Convert size to approximate bytes for total calculation
      const sizeBytes = parseFloat(size.replace(/[^\d.]/g, ''));
      if (size.includes('M')) totalSizeSaved += sizeBytes * 1024 * 1024;
      else if (size.includes('K')) totalSizeSaved += sizeBytes * 1024;
      else totalSizeSaved += sizeBytes;
    }
  }
  
  console.log('\n📄 Removing backup files:');
  for (const file of BACKUP_FILES) {
    if (removeFile(file)) {
      removedCount++;
    }
  }
  
  console.log(`\n📊 Cleanup Summary:`);
  console.log(`  ✅ Removed: ${removedCount} backup files/directories`);
  console.log(`  💾 Approximate space saved: ~${(totalSizeSaved / 1024 / 1024).toFixed(1)}MB`);
  
  // Calculate current workspace size
  try {
    const result = execSync('du -sh . 2>/dev/null', { encoding: 'utf8' });
    console.log(`  📏 Current workspace size: ${result.trim().split('\t')[0]}`);
  } catch (error) {
    console.log('  📏 Workspace size calculation completed');
  }
}

// Run the cleanup
cleanupBackupFiles().catch(console.error);