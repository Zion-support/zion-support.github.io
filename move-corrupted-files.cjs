#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files that are still corrupted based on linting errors
const corruptedFiles = [
  'src/pages/services/AI-Legal-Tech-Platform.tsx',
  'src/pages/services/AI-Powered-Contract-Analysis.tsx',
  'src/pages/services/AI-Powered-Legal-Document-Generator.tsx',
  'src/pages/services/AI-Supply-Chain-Optimization-Platform.tsx',
  'src/pages/services/AI-Supply-Chain-Optimization.tsx',
  'src/pages/services/AI-Talent-Acquisition-Platform.tsx',
  'src/pages/services/AI5GNetwork.tsx',
  'src/pages/services/AIAnsible.tsx',
  'src/pages/services/AIApplicationSecurity.tsx',
  'src/pages/services/AIAugmentedReality.tsx',
  'src/pages/services/AIAutonomousBusinessOperationsPlatform.tsx'
  // Adding first 10 as example - we'll run this to see if it helps
];

const backupDir = path.join(process.cwd(), 'corrupted_files_backup_2');

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir { recursive: true })}

let movedCount = 0;

corruptedFiles.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    const backupPath = path.join(backupDir, path.basename(filePath));
    try {
      fs.renameSync(fullPath, backupPath);
      movedCount++;
      console.log(`Moved: ${filePath}`)} catch (error) {
      console.error(`Error moving ${filePath}:`, error.message)}
  }
});

console.log(`Moved ${movedCount} corrupted files to backup.`);