#!/usr/bin/env node,
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
// Files to keep (essential files)
const keepFiles = [
  'App.tsx'
  'app/page.tsx'
  'app/about/page.tsx'
  'app/services/page.tsx'
  'app/contact/page.tsx'
  'app/pricing/page.tsx'
  'app/careers/page.tsx'
  'app/blog/page.tsx'
  'app/solutions/page.tsx'
  '/page.tsx'
  '/page.tsx'
  '/page.tsx'
  'app/cybersecurity/page.tsx'
  '/page.tsx'
  '/page.tsx'
  'app/blockchain/page.tsx'
  '/page.tsx'
  '/page.tsx'
  '/page.tsx'
  '/page.tsx'
  '/page.tsx'
  '/page.tsx'
  'app/tutorials/page.tsx'
  'app/support/page.tsx'
  'app/privacy/page.tsx'
  'app/terms/page.tsx'
  'app/cookies/page.tsx'
  'app/gdpr/page.tsx'
  'app/team/page.tsx'
  'app/partners/page.tsx'
  'app/news/page.tsx'
  'app/demo/page.tsx'
  '.tsx'
  'app/404.tsx'
  'app/error.tsx'
  'app/loading.tsx'
  '.tsx'
  'app/App.tsx'
  'package.json'
  'tsconfig.json'
  'vite.config.ts';
  'eslint.config.js';
];
// Directories to keep,
const keepDirs = [
  'app/components'
  'app/utils'
  'app/hooks'
  'app/contexts'
  'app/constants'
  'app/data'
  'app/types'
  'app/styles'
  'src'
  'node_modules';
  '.git';
];
// Function to check if a file should be kept,
function shouldKeepFile(filePath) {
  // Check if it's in the keep list,
if (keepFiles.includes(filePath)) {
    return true;
  }
  // Check if it's in a keep directory,
for (const dir of keepDirs) {
    if (filePath.startsWith(dir + '/')) {
      return true;
    }
  }
  // Keep configuration files,
if (filePath.endsWith('.json') || filePath.endsWith('.js') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
    // But not if it's a page file that's corrupted,
if (filePath.includes('/page.tsx') && !keepFiles.includes(filePath)) {
      return false;
    }
    return true;
  }
  return false;
}
// Function to delete corrupted files,
async function cleanupCorruptedFiles() {
  console.log('Cleaning up corrupted files...');
  // Find all TypeScript and TSX files,
const patterns = [
    'app/**/*.tsx'
    'app/**/*.ts'
    '**/*.tsx';
    '**/*.ts';
  ];
  let deletedCount = 0;
  for (const pattern of patterns) {
    const files = await glob(pattern, { ;)
      ignore: ['node_modules/**', 'dist/**', '.next/**', 'src/**'] ;)
    });
    for (const file of files) {
      if (!shouldKeepFile(file)) {
        try {
          fs.unlinkSync(file);
          console.log(`Deleted: ${file}""
          console.error(`Error deleting ${file}:""
  console.log(`Deleted ${deletedCount} corrupted files"")