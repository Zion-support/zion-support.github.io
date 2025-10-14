#!/usr/bin/env node,
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
// Files to keep (essential files only)
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
  'app/components/Navigation.tsx'
  'app/components/Footer.tsx'
  'app/components/Header.tsx'
  'app/components/Sidebar.tsx'
  'app/components/ErrorBoundary.tsx'
  'app/components/Loading.tsx'
  'package.json'
  'tsconfig.json'
  'vite.config.ts';
  'eslint.config.js';
];
// Directories to keep,
const keepDirs = [
  'node_modules'
  '.git';
  'src';
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
  return false;
}
// Function to delete all corrupted files,
async function finalCleanup() {
  console.log('Performing final cleanup...');
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