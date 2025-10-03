#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Configuration
const COMPONENTS_DIR = './components';
const SRC_DIR = './src';
const KEEP_COMPONENTS = [
  'ErrorBoundary.tsx',
  'LoadingSpinner.tsx', 
  'SEO.tsx'
];

// Get all component files
function getAllComponentFiles() {
  try {
    const files = fs.readdirSync(COMPONENTS_DIR)
      .filter(file => file.endsWith('.tsx'))
      .filter(file => !KEEP_COMPONENTS.includes(file));
    return files;
  } catch (error) {
    console.error('Error reading components directory:', error.message);
    return [];
  }
}

// Search for component usage in source files
function searchComponentUsage(componentName) {
  const searchPaths = [
    SRC_DIR,
    './app',
    './pages',
    './src/pages'
  ];
  
  let found = false;
  
  for (const searchPath of searchPaths) {
    if (!fs.existsSync(searchPath)) continue;
    
    try {
      const result = execSync(
        `grep -r "import.*${componentName.replace('.tsx', '')}" "${searchPath}" 2>/dev/null || true`,
        { encoding: 'utf8' }
      );
      
      if (result.trim()) {
        found = true;
        break;
      }
    } catch (error) {
      // Continue searching other paths
    }
  }
  
  return found;
}

// Remove component file
function removeComponent(componentPath) {
  try {
    fs.unlinkSync(componentPath);
    console.log(`✅ Removed unused component: ${componentPath}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to remove ${componentPath}:`, error.message);
    return false;
  }
}

// Main cleanup function
async function cleanupUnusedComponents() {
  console.log('🔍 Scanning for unused components...\n');
  
  const componentFiles = getAllComponentFiles();
  console.log(`Found ${componentFiles.length} components to check\n`);
  
  let removedCount = 0;
  let keptCount = 0;
  
  for (const componentFile of componentFiles) {
    const componentPath = path.join(COMPONENTS_DIR, componentFile);
    const componentName = componentFile.replace('.tsx', '');
    
    console.log(`Checking: ${componentFile}...`);
    
    const isUsed = searchComponentUsage(componentName);
    
    if (!isUsed) {
      if (removeComponent(componentPath)) {
        removedCount++;
      }
    } else {
      console.log(`  📌 Kept (in use): ${componentFile}`);
      keptCount++;
    }
  }
  
  console.log(`\n📊 Cleanup Summary:`);
  console.log(`  ✅ Removed: ${removedCount} unused components`);
  console.log(`  📌 Kept: ${keptCount} components in use`);
  console.log(`  🎯 Total processed: ${componentFiles.length} components`);
  
  // Calculate space saved
  if (removedCount > 0) {
    try {
      const result = execSync('du -sh components/ 2>/dev/null', { encoding: 'utf8' });
      console.log(`\n💾 Current components directory size: ${result.trim()}`);
    } catch (error) {
      console.log('\n💾 Space optimization completed');
    }
  }
}

// Run the cleanup
cleanupUnusedComponents().catch(console.error);