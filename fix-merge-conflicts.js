#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Fixing merge conflicts and parsing errors...');

// Function to fix merge conflict markers
function fixMergeConflicts(content) {
  // Remove merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?  content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?  content = content.replace(/=======[\s\S]*?  content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======/g, '');
  
  return content;
}

// Function to fix specific parsing errors
function fixParsingErrors(content) {
  // Fix JSX fragment issues
  content = content.replace(/<>\s*$/, '<></>');
  
  // Fix missing semicolons
  content = content.replace(/(\w+)\s*$/, '$1;');
  
  // Fix missing closing braces
  if (content.includes('{') && !content.includes('}')) {
    content += '\n}';
  }
  
  return content;
}

// Function to fix specific problematic files
function fixSpecificFiles() {
  const problematicFiles = [
    '/workspace/app/components/AdvancedSEOOptimizer_new.tsx',
    '/workspace/app/components/NewsletterSignup.tsx',
    '/workspace/app/components/SEOHead.tsx',
    '/workspace/app/pages/AboutPage.tsx',
    '/workspace/app/pages/HomePage.tsx',
    '/workspace/app/root-layout.tsx',
    '/workspace/app/service-template.tsx',
    '/workspace/components/OptimizedImage.tsx'
  ];
  
  let fixedCount = 0;
  
  for (const filePath of problematicFiles) {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        content = fixMergeConflicts(content);
        content = fixParsingErrors(content);
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content);
          console.log(`✅ Fixed: ${filePath}`);
          fixedCount++;
        }
      } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
      }
    }
  }
  
  return fixedCount;
}

// Function to fix merge conflict files
function fixMergeConflictFiles() {
  const mergeConflictFiles = [
    '/workspace/app/hooks/useEnhancedPerformance.ts',
    '/workspace/app/hooks/useForm.ts',
    '/workspace/app/hooks/useIntersectionObserver.ts',
    '/workspace/app/hooks/useLazyLoading.ts',
    '/workspace/app/hooks/usePerformanceMonitor.ts',
    '/workspace/app/types/app.types.ts',
    '/workspace/app/types/global.d.ts',
    '/workspace/app/types/next.d.ts',
    '/workspace/app/utils/accessibilityUtils.ts',
    '/workspace/app/utils/apiClient.ts',
    '/workspace/app/utils/monitoring.ts',
    '/workspace/app/utils/performanceEnhancer.ts',
    '/workspace/app/utils/performanceMetrics.ts',
    '/workspace/app/utils/performanceMonitoring.ts',
    '/workspace/app/utils/performanceOptimizations.ts',
    '/workspace/app/utils/performanceUtils.ts',
    '/workspace/app/utils/securityHeaders.ts',
    '/workspace/app/utils/seoEnhancer.ts',
    '/workspace/app/utils/sitemapGenerator.ts',
    '/workspace/app/utils/testUtils.ts'
  ];
  
  let fixedCount = 0;
  
  for (const filePath of mergeConflictFiles) {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        content = fixMergeConflicts(content);
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content);
          console.log(`✅ Fixed merge conflicts: ${filePath}`);
          fixedCount++;
        }
      } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
      }
    }
  }
  
  return fixedCount;
}

// Main execution
async function main() {
  console.log('🔧 Fixing specific problematic files...');
  const specificFixed = fixSpecificFiles();
  
  console.log('🔧 Fixing merge conflict files...');
  const mergeFixed = fixMergeConflictFiles();
  
  console.log(`\n🎉 Fixed ${specificFixed + mergeFixed} files!`);
  
  // Run linter again to check results
  console.log('\n🔍 Running linter to check results...');
  try {
    execSync('npm run lint', { stdio: 'inherit' });
    console.log('✅ Linting passed!');
  } catch (error) {
    console.log('⚠️  Some linting issues may remain. Check the output above.');
  }
}

main().catch(console.error);