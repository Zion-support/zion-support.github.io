#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Fixing critical ESLint errors...');

// Function to fix missing React imports
function fixReactImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if memo is used but not imported
    if (content.includes('memo(') && !content.includes("import React") && !content.includes("import { memo }")) {
      content = "import React, { memo } from 'react';\n" + content;
      modified = true;
    }
    
    // Check if ReactNode is used but not imported
    if (content.includes('ReactNode') && !content.includes("import React") && !content.includes("import { ReactNode }")) {
      content = "import React, { ReactNode } from 'react';\n" + content;
      modified = true;
    }
    
    // Check if both memo and ReactNode are used
    if (content.includes('memo(') && content.includes('ReactNode') && !content.includes("import React")) {
      content = "import React, { memo, ReactNode } from 'react';\n" + content;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed React imports in ${filePath}`);
    }
    
    return modified;
  } catch (error) {
    console.log(`❌ Error fixing React imports in ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix performance monitoring destructuring issues
function fixPerformanceMonitoring(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix destructuring in for...of loops
    content = content.replace(/for\s*\(\s*const\s*{\s*_entry\s*}\s*of\s*([^)]+)\)/g, 'for (const entry of $1)');
    
    // Fix destructuring in array methods
    content = content.replace(/\.map\s*\(\s*\(\s*{\s*_entry\s*}\s*\)\s*=>/g, '.map(({ entry }) =>');
    content = content.replace(/\.filter\s*\(\s*\(\s*{\s*_entry\s*}\s*\)\s*=>/g, '.filter(({ entry }) =>');
    content = content.replace(/\.forEach\s*\(\s*\(\s*{\s*_entry\s*}\s*\)\s*=>/g, '.forEach(({ entry }) =>');
    
    // Fix destructuring in function parameters
    content = content.replace(/\(\s*{\s*_entry\s*}\s*\)\s*=>/g, '({ entry }) =>');
    
    // Fix specific performance monitoring patterns
    content = content.replace(/const\s*{\s*_entry\s*}\s*=\s*performance\.getEntriesByType/g, 'const { entry } = performance.getEntriesByType');
    content = content.replace(/const\s*{\s*_entry\s*}\s*=\s*performance\.getEntries/g, 'const { entry } = performance.getEntries');
    
    // Fix setMemoryUsage usage
    if (content.includes('_setMemoryUsage')) {
      content = content.replace(/_setMemoryUsage/g, 'setMemoryUsage');
      modified = true;
    }
    
    // Fix start variable usage
    if (content.includes('_start')) {
      content = content.replace(/_start/g, 'start');
      modified = true;
    }
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed performance monitoring in ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.log(`❌ Error fixing performance monitoring in ${filePath}:`, error.message);
    return false;
  }
}

// Function to remove unused variables completely
function removeUnusedVariables(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused variable declarations
    content = content.replace(/const\s+_error\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s+_err\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s+_start\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s+_end\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s+_memoryUsage\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s+_setMemoryUsage\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s+_isOpen\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s+_setIsOpen\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s+_index\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s+_imgIndex\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s+_entry\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s+_fidEntry\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s+_clsEntry\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s+_registration\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s+_errorData\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s+_message\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s+_args\s*=\s*[^;]+;\s*/g, '');
    
    // Remove unused destructuring
    content = content.replace(/const\s*{\s*_error\s*}\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s*{\s*_err\s*}\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s*{\s*_entry\s*}\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s*{\s*_registration\s*}\s*=\s*[^;]+;\s*/g, '');
    content = content.replace(/const\s*{\s*_errorData\s*}\s*=\s*[^;]+;\s*/g, '');
    
    // Remove unused function parameters
    content = content.replace(/\(\s*_error\s*\)\s*=>/g, '() =>');
    content = content.replace(/\(\s*_err\s*\)\s*=>/g, '() =>');
    content = content.replace(/\(\s*_message\s*,\s*_args\s*\)\s*=>/g, '() =>');
    content = content.replace(/\(\s*_errorData\s*\)\s*=>/g, '() =>');
    content = content.replace(/\(\s*_entry\s*\)\s*=>/g, '() =>');
    content = content.replace(/\(\s*_registration\s*,\s*_error\s*\)\s*=>/g, '() =>');
    
    // Remove unused imports
    content = content.replace(/import\s*{\s*memo\s*}\s*from\s*'react';\s*/g, '');
    content = content.replace(/import\s*{\s*ReactNode\s*}\s*from\s*'react';\s*/g, '');
    
    // Remove unused Navigation imports
    content = content.replace(/import\s*{\s*Navigation\s*}\s*from\s*'[^']+';\s*/g, '');
    
    // Remove unused function declarations
    content = content.replace(/const\s+EcommerceanalyticsproPage\s*=\s*\(\)\s*=>\s*{[\s\S]*?};\s*export\s+default\s+EcommerceanalyticsproPage;\s*/g, '');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Removed unused variables from ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.log(`❌ Error removing unused variables from ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process critical files
function processCriticalFiles() {
  const criticalFiles = [
    'app/components/Footer.tsx',
    'app/components/Loading.tsx',
    'app/components/LoadingSpinner.tsx',
    'app/components/PerformanceDashboard.tsx',
    'app/components/SEOHead.tsx',
    'app/components/accessibility/AccessibilityControls.tsx',
    'app/components/PerformanceMonitoring.tsx',
    'app/components/PerformanceOptimizations.tsx',
    'app/components/PerformanceOptimizer.tsx',
    'app/components/consolidated/ConsolidatedPerformance.tsx',
    'app/hooks/useEnhancedPerformance.ts',
    'app/hooks/usePerformanceMetrics.ts',
    'app/layout.tsx',
    'app/utils/performance.ts',
    'app/utils/performanceMonitoring.ts'
  ];
  
  console.log(`📁 Processing ${criticalFiles.length} critical files`);
  
  let fixedCount = 0;
  
  for (const file of criticalFiles) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      console.log(`\n🔍 Processing ${file}...`);
      
      let fileModified = false;
      
      // Fix React imports
      if (fixReactImports(filePath)) {
        fileModified = true;
      }
      
      // Fix performance monitoring
      if (fixPerformanceMonitoring(filePath)) {
        fileModified = true;
      }
      
      // Remove unused variables
      if (removeUnusedVariables(filePath)) {
        fileModified = true;
      }
      
      if (fileModified) {
        fixedCount++;
      }
    }
  }
  
  console.log(`\n✅ Fixed ${fixedCount} critical files`);
  console.log('🎉 Critical error fixes completed!');
}

// Run the fixes
processCriticalFiles();