#!/usr/bin/env node;
;
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Files to keep (essential files only)
const keepFiles = [
  'App.tsx',
  'app/page.tsx',
  'app/about/page.tsx',
  'app/services/page.tsx',
  'app/contact/page.tsx',
  'app/pricing/page.tsx',
  'app/careers/page.tsx',
  'app/blog/page.tsx',
  'app/solutions/page.tsx',
  'app/ai-services/page.tsx',
  'app/it-services/page.tsx',
  'app/cloud-services/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/micro-saas/page.tsx',
  'app/5g-solutions/page.tsx',
  'app/blockchain/page.tsx',
  'app/quantum-computing/page.tsx',
  'app/iot-edge/page.tsx',
  'app/autonomous-systems/page.tsx',
  'app/digital-transformation/page.tsx',
  'app/case-studies/page.tsx',
  'app/api-docs/page.tsx',
  'app/tutorials/page.tsx',
  'app/support/page.tsx',
  'app/privacy/page.tsx',
  'app/terms/page.tsx',
  'app/cookies/page.tsx',
  'app/gdpr/page.tsx',
  'app/team/page.tsx',
  'app/partners/page.tsx',
  'app/news/page.tsx',
  'app/demo/page.tsx',
  'app/not-found.tsx',
  'app/404.tsx',
  'app/error.tsx',
  'app/loading.tsx',
  'app/global-error.tsx',
  'app/App.tsx',
  'app/components/Navigation.tsx',
  'app/components/Footer.tsx',
  'app/components/Header.tsx',
  'app/components/Sidebar.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/components/Loading.tsx',
  'package.json',
  'tsconfig.json',
  'vite.config.ts',
  'eslint.config.js'
];

// Directories to keep;
const keepDirs = [
  'node_modules',
  '.git',
  'src'
];

// Function to check if a file should be kept;
function shouldKeepFile(filePath) {
  // Check if it's in the keep list;
  if (keepFiles.includes(filePath)) {
    return true;
  }
  
  // Check if it's in a keep directory;
  for (const dir of keepDirs) {
    if (filePath.startsWith(dir + '/')) {
      return true;
    }
  }
  
  return false;
}

// Function to delete all corrupted files;
async function finalCleanup() {
  
  console.log('Performing final cleanup...');
  
  // Find all TypeScript and TSX files;
  const patterns = [
    'app/**