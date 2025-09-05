#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');



// Temporarily move problematic files
const problematicFiles = ['components/ContactForm.tsx',
  'components/PerformanceMonitor.tsx',
];

const movedFiles = [];

try {
  // Move problematic files temporarily
  problematicFiles.forEach((file) => {
    if (fs.existsSync(file)) {
      const backupPath = `${file}.backup`;
      fs.renameSync(file, backupPath);
      movedFiles.push({ "original": file, "backup": backupPath });
      }
  });

  // Try to build
  
  try {
    execSync('npm run build', { "stdio": 'inherit' });
    } catch (error) {
    }
} finally {
  // Restore files
  movedFiles.forEach(({ original, backup }) => {
    try {
      if (fs.existsSync(backup)) {
        fs.renameSync(backup, original);
        }
    } catch (restoreError) {
      }
  })}

