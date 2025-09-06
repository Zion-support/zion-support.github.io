#!/usr/bin/env node

/**
 * Project Cleanup Script
 * Removes redundant files and organizes project structure
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const cleanupConfig = {
  // Directories to clean up
  directoriesToRemove: [
    'pages_backup',
    'pages_backup_before_cleanup',
    'pages_backup_conflict',
    'pages_backup_conflicts',
    'pages.bak',
    'pages.blog.disabled',
    'pages.broken',
    'pages.corrupted.1756905863',
    'pages-disabled',
    'pages.disabled',
    'pages.disabled_auto',
    'pages.disabled.full',
    'pages.disabled_full',
    'pages_minimal',
    'pages.old',
    'pages-quarantine',
    'pages._quarantine',
    'src_backup',
    'src_backup_temp',
    'src.broken',
    'src.corrupted',
    'src.disabled',
    'src.pages.disabled',
    'lib_backup',
    'lib.broken',
    'components.disabled',
    'components.disabled_full',
    'hooks.disabled',
    'solutions.disabled',
    'zion-os.disabled',
    'temp_exclude',
    'temp_backup',
    'temp_working',
    'test_build',
    'tests.disabled',
    'corrupted-files-backup',
    'broken_files_backup',
    'automation_logs',
    'pm2-automation',
    'cypress_backup',
    'cypress.disabled',
    'api-backup',
    'api-disabled',
    'api.disabled',
    'api.disabled.temp',
    'data_backup',
    'data.disabled',
    'contracts.disabled',
    'apps.backup',
    'automation_backup',
    'recovered-branches',
    'backup-merge-conflicts',
    'backup-problematic-files'
  ],

  // File patterns to remove
  filePatternsToRemove: [
    '**/*.backup.*',
    '**/*.disabled.*',
    '**/*.broken.*',
    '**/*.corrupted.*',
    '**/*.old.*',
    '**/*.temp.*',
    '**/*.test.*',
    '**/*.spec.*',
    '**/temp_*',
    '**/backup_*',
    '**/disabled_*',
    '**/broken_*',
    '**/corrupted_*',
    '**/old_*',
    '**/test_*',
    '**/spec_*'
  ],

  // Specific files to remove
  filesToRemove: [
    'tsconfig.tsbuildinfo',
    'yarn.lock',
    'package-lock.json.backup',
    '.eslintrc.js.backup.*',
    '.eslintrc.json.backup.*',
    '.env.example.backup.*',
    '.gitignore.backup.*',
    '.npmrc.backup.*',
    'ecosystem.config.backup.*',
    'next.config.js.backup',
    'postcss.config.cjs.disabled',
    'postcss.config.js.disabled'
  ],

  // Log files to remove
  logFilesToRemove: [
    '**/*.log',
    '**/*.txt',
    '**/log-*.txt',
    '**/continue-merge-*.txt',
    '**/cursor-merge-*.txt',
    '**/streamlined-merge-*.txt',
    '**/master-automation-log.txt',
    '**/automation-health-report.txt',
    '**/lint_*.txt',
    '**/lint_output*.txt',
    '**/linkinator.*',
    '**/link-check.json',
    '**/broken-links.tsv',
    '**/hrefs*.txt',
    '**/internal-404s.txt',
    '**/missing-routes.txt',
    '**/all-layout-links.txt'
  ],

  // Report files to remove
  reportFilesToRemove: [
    '**/*-report.json',
    '**/*-summary.json',
    '**/*-analysis.json',
    '**/*-fix-report.json',
    '**/*-improvement-report.json',
    '**/*-optimization-report.json',
    '**/*-monitoring-report.json',
    '**/*-health-report.json',
    '**/*-security-report.json',
    '**/*-performance-report.json',
    '**/*-accessibility-report.json',
    '**/*-bundle-analysis-report.json',
    '**/*-deployment-report.json',
    '**/*-git-workflow-report.json',
    '**/*-automation-report.json',
    '**/*-comprehensive-report.json',
    '**/*-final-report.json',
    '**/*-ultimate-report.json'
  ]
};

function removeDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✓ Removed directory: ${dirPath}`);
      return true;
    } catch (error) {
      console.log(`✗ Failed to remove directory: ${dirPath} - ${error.message}`);
      return false;
    }
  }
  return true;
}

function removeFile(filePath) {
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`✓ Removed file: ${filePath}`);
      return true;
    } catch (error) {
      console.log(`✗ Failed to remove file: ${filePath} - ${error.message}`);
      return false;
    }
  }
  return true;
}

async function removeFilesByPattern(pattern) {
  const files = await glob(pattern, { cwd: process.cwd() });
  let removedCount = 0;
  
  files.forEach(file => {
    if (removeFile(file)) {
      removedCount++;
    }
  });
  
  return removedCount;
}

async function cleanupProject() {
  console.log('🧹 Starting project cleanup...\n');

  let totalRemoved = 0;

  // Remove directories
  console.log('📁 Removing redundant directories...');
  cleanupConfig.directoriesToRemove.forEach(dir => {
    if (removeDirectory(dir)) {
      totalRemoved++;
    }
  });

  // Remove specific files
  console.log('\n📄 Removing specific files...');
  cleanupConfig.filesToRemove.forEach(file => {
    if (removeFile(file)) {
      totalRemoved++;
    }
  });

  // Remove log files
  console.log('\n📋 Removing log files...');
  const logFilesRemoved = await removeFilesByPattern('**/*.log');
  const txtFilesRemoved = await removeFilesByPattern('**/*.txt');
  totalRemoved += logFilesRemoved + txtFilesRemoved;

  // Remove report files
  console.log('\n📊 Removing report files...');
  const reportFilesRemoved = await removeFilesByPattern('**/*-report.json');
  const summaryFilesRemoved = await removeFilesByPattern('**/*-summary.json');
  const analysisFilesRemoved = await removeFilesByPattern('**/*-analysis.json');
  totalRemoved += reportFilesRemoved + summaryFilesRemoved + analysisFilesRemoved;

  // Remove backup files
  console.log('\n💾 Removing backup files...');
  const backupFilesRemoved = await removeFilesByPattern('**/*.backup.*');
  const disabledFilesRemoved = await removeFilesByPattern('**/*.disabled.*');
  const brokenFilesRemoved = await removeFilesByPattern('**/*.broken.*');
  const corruptedFilesRemoved = await removeFilesByPattern('**/*.corrupted.*');
  const oldFilesRemoved = await removeFilesByPattern('**/*.old.*');
  const tempFilesRemoved = await removeFilesByPattern('**/*.temp.*');
  totalRemoved += backupFilesRemoved + disabledFilesRemoved + brokenFilesRemoved + 
                  corruptedFilesRemoved + oldFilesRemoved + tempFilesRemoved;

  console.log(`\n✅ Cleanup completed! Removed ${totalRemoved} items.`);
  console.log('\n📈 Project structure optimized for better performance and maintainability.');
}

// Run cleanup if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  cleanupProject().catch(console.error);
}

export { cleanupProject, cleanupConfig };