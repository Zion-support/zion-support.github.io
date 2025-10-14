#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Essential components to keep
const keepComponents = [
  'app/components/Navigation.tsx',
  'app/components/Footer.tsx',
  'app/components/Header.tsx',
  'app/components/Sidebar.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/components/Loading.tsx'
];

// Function to check if a component should be kept
function shouldKeepComponent(filePath) {
  return keepComponents.includes(filePath);
}

// Function to delete corrupted components
async function cleanupCorruptedComponents() {
  console.log('Cleaning up corrupted components...');
  
  // Find all component files
  const files = await glob('app/components/**/*.tsx', { 
    ignore: ['node_modules/**', 'dist/**', '.next/**'] 
  });
  
  let deletedCount = 0;
  
  for (const file of files) {
    if (!shouldKeepComponent(file)) {
      try {
        fs.unlinkSync(file);
        console.log(`Deleted: ${file}`);
        deletedCount++;
      } catch (error) {
        console.error(`Error deleting ${file}:`, error.message);
      }
    }
  }
  
  console.log(`Deleted ${deletedCount} corrupted components`);
}

// Main execution
async function main() {
  await cleanupCorruptedComponents();
  console.log('Component cleanup completed!');
}

main().catch(console.error);