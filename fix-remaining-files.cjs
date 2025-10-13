#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of remaining problematic files
const remainingFiles = [
  '/workspace/app/types/gtag.d.ts',
  '/workspace/vite.config.ts'
];

// Function to create a clean gtag types
function createCleanGtagTypes() {
  return `// Google Analytics gtag types
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export {};`;
}

// Function to create a clean vite config
function createCleanViteConfig() {
  return `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 4173,
    open: true,
  },
});`;
}

// Main execution
console.log('🔧 Fixing remaining files...');

let fixedCount = 0;
let errorCount = 0;

for (const filePath of remainingFiles) {
  try {
    if (fs.existsSync(filePath)) {
      let content = '';
      
      if (filePath.includes('gtag.d.ts')) {
        content = createCleanGtagTypes();
      } else if (filePath.includes('vite.config.ts')) {
        content = createCleanViteConfig();
      }
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`✗ Error fixing ${filePath}:`, error.message);
    errorCount++;
  }
}

console.log(`\n✅ Fixed ${fixedCount} remaining files`);
if (errorCount > 0) {
  console.log(`❌ Failed to fix ${errorCount} files`);
}

console.log('\n🎉 Remaining files fix complete!');