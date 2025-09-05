#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧹 Starting cleanup automation...');

// Function to clean up temporary files
function cleanupTempFiles() {
  const tempDirs = [
    'temp_backup',
    'temp_broken_files',
    'temp_working',
    'corrupted_files_backup_2',
    'ai-optimization-backups',
    'optimization-reports',
    'test-generation-reports',
    'test-reports',
    'test-results',
    'security-reports'
  ];

  tempDirs.forEach(dir => {
    const dirPath = path.join(process.cwd(), dir);
    if (fs.existsSync(dirPath)) {
      try {
        fs.rmSync(dirPath, { recursive: true, force: true });
        console.log(`✅ Cleaned up: ${dir}`);
      } catch (error) {
        console.log(`⚠️  Could not clean up: ${dir} - ${error.message}`);
      }
    }
  });
}

// Function to clean up backup files
function cleanupBackupFiles() {
  const backupPatterns = [
    '**/*.backup',
    '**/*.bak',
    '**/*.disabled',
    '**/*.corrupted',
    '**/*.broken'
  ];

  function findAndDeleteBackups(dir) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .git
        if (item !== 'node_modules' && item !== '.git' && !item.startsWith('.')) {
          findAndDeleteBackups(itemPath);
        }
      } else {
        // Check if file matches backup patterns
        const isBackup = backupPatterns.some(pattern => {
          const regex = new RegExp(pattern.replace(/\*/g, '.*'));
          return regex.test(item);
        });
        
        if (isBackup) {
          try {
            fs.unlinkSync(itemPath);
            console.log(`✅ Deleted backup file: ${itemPath}`);
          } catch (error) {
            console.log(`⚠️  Could not delete: ${itemPath} - ${error.message}`);
          }
        }
      }
    });
  }

  findAndDeleteBackups(process.cwd());
}

// Function to clean up empty directories
function cleanupEmptyDirs() {
  function removeEmptyDirs(dir) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .git
        if (item !== 'node_modules' && item !== '.git' && !item.startsWith('.')) {
          removeEmptyDirs(itemPath);
          
          // Check if directory is empty after processing subdirectories
          try {
            const remainingItems = fs.readdirSync(itemPath);
            if (remainingItems.length === 0) {
              fs.rmdirSync(itemPath);
              console.log(`✅ Removed empty directory: ${itemPath}`);
            }
          } catch (error) {
            // Directory not empty or other error
          }
        }
      }
    });
  }

  removeEmptyDirs(process.cwd());
}

// Function to clean up duplicate files
function cleanupDuplicates() {
  const duplicateFiles = [
    'pages/sitemap.tsx.backup',
    'pages/status.tsx.backup',
    'pages/support.tsx.backup',
    'pages/talent.tsx.backup',
    'pages/team.tsx.backup',
    'pages/terms.tsx.backup',
    'pages/test.tsx.backup',
    'pages/training.tsx.backup',
    'pages/tutorials.tsx.backup',
    'pages/webinars.tsx.backup',
    'pages/white-papers.tsx.backup',
    'pages/help.tsx.backup',
    'pages/news.tsx.backup',
    'pages/partners.tsx.backup',
    'pages/pricing.tsx.backup',
    'pages/privacy.tsx.backup',
    'pages/services.tsx.backup',
    'pages/accessibility.tsx.backup',
    'pages/api-docs.tsx.backup',
    'pages/case-studies.tsx.backup',
    'pages/community.tsx.backup',
    'pages/compliance.tsx.backup',
    'pages/contact.tsx.backup',
    'pages/cookies.tsx.backup',
    'pages/digital-transformation.tsx.backup',
    'pages/faq.tsx.backup',
    'pages/guides.tsx.backup',
    'pages/newsletter.tsx.backup',
    'pages/index-test.tsx.backup'
  ];

  duplicateFiles.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
        console.log(`✅ Deleted duplicate: ${file}`);
      } catch (error) {
        console.log(`⚠️  Could not delete: ${file} - ${error.message}`);
      }
    }
  });
}

// Main cleanup function
function main() {
  console.log('🧹 Starting comprehensive cleanup...');
  
  cleanupTempFiles();
  cleanupBackupFiles();
  cleanupDuplicates();
  cleanupEmptyDirs();
  
  console.log('✅ Cleanup completed successfully!');
  console.log('📊 Summary:');
  console.log('  - Removed temporary files and directories');
  console.log('  - Cleaned up backup files');
  console.log('  - Removed duplicate files');
  console.log('  - Cleaned up empty directories');
}

// Run cleanup
main();