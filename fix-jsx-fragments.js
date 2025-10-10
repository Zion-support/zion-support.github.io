#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix JSX fragment issues
function fixJSXFragments(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix 1: Fix unclosed JSX fragments
    const lines = content.split('\n');
    const fixedLines = [];
    let inFragment = false;
    let fragmentDepth = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Check for opening fragment
      if (trimmedLine === '<>' || trimmedLine.startsWith('<>')) {
        inFragment = true;
        fragmentDepth++;
        fixedLines.push(line);
        continue;
      }
      
      // Check for closing fragment
      if (trimmedLine === '</>' || trimmedLine.endsWith('</>')) {
        if (inFragment) {
          fragmentDepth--;
          if (fragmentDepth === 0) {
            inFragment = false;
          }
        }
        fixedLines.push(line);
        continue;
      }
      
      // If we're in a fragment and reach the end of the function/component, close it
      if (inFragment && (trimmedLine === '}' || trimmedLine === ');' || trimmedLine === ');')) {
        // Add closing fragment before the closing brace
        for (let j = 0; j < fragmentDepth; j++) {
          fixedLines.push('  '.repeat(fixedLines[fixedLines.length - 1].match(/^(\s*)/)[1].length) + '</>');
        }
        inFragment = false;
        fragmentDepth = 0;
        fixedLines.push(line);
        modified = true;
        continue;
      }
      
      fixedLines.push(line);
    }
    
    // If we still have unclosed fragments at the end, close them
    if (inFragment) {
      for (let j = 0; j < fragmentDepth; j++) {
        fixedLines.push('</>');
      }
      modified = true;
    }
    
    if (modified) {
      content = fixedLines.join('\n');
    }
    
    // Fix 2: Fix specific JSX fragment patterns
    const fragmentPatterns = [
      // Pattern: <> content without closing
      {
        regex: /<>\s*([\s\S]*?)(?=\n\s*[a-zA-Z_$]|\n\s*export|\n\s*function|\n\s*const|\n\s*let|\n\s*var|\n\s*}\s*$)/g,
        replacement: (match, content) => {
          if (!content.includes('</>')) {
            return `<>${content}</>`;
          }
          return match;
        }
      },
      // Pattern: Multiple root elements without fragment
      {
        regex: /^(\s*)(<[^>]+>.*?<\/[^>]+>)\s*\n\s*(<[^>]+>.*?<\/[^>]+>)/gm,
        replacement: (match, indent, first, second) => {
          return `${indent}<>\n${indent}  ${first}\n${indent}  ${second}\n${indent}</>`;
        }
      }
    ];
    
    fragmentPatterns.forEach(pattern => {
      const newContent = content.replace(pattern.regex, pattern.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Fix 3: Fix specific problematic patterns in page files
    if (filePath.includes('/page.tsx')) {
      // Look for the common pattern where there's a return statement with unclosed fragments
      const returnPattern = /return\s*\(\s*<>\s*([\s\S]*?)(?=\n\s*\)\s*;?\s*$)/g;
      content = content.replace(returnPattern, (match, content) => {
        if (!content.includes('</>')) {
          modified = true;
          return `return (\n    <>\n      ${content}\n    </>\n  )`;
        }
        return match;
      });
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX fragments in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing JSX fragments in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all page files with JSX fragment issues
function findProblematicFiles() {
  const problematicFiles = [];
  
  // Find all page.tsx files
  try {
    const result = require('child_process').execSync('find app -name "page.tsx"', { 
      encoding: 'utf8',
      cwd: process.cwd()
    });
    const files = result.trim().split('\n').filter(f => f.length > 0);
    problematicFiles.push(...files);
  } catch (error) {
    console.error('Error finding page files:', error.message);
  }
  
  // Add specific problematic files
  const specificFiles = [
    'App.tsx',
    'app/components/AnimatedCounter.tsx',
    'app/components/ContactForm.tsx',
    'app/components/EnhancedAccessibilityEnhancer.tsx',
    'app/components/EnhancedErrorBoundary.tsx',
    'app/components/EnhancedHero.tsx',
    'app/components/EnhancedLoading.tsx',
    'app/components/EnhancedLoadingSkeleton.tsx',
    'app/components/EnhancedPerformanceMonitor.tsx',
    'app/components/EnhancedSEO.tsx',
    'app/components/EnhancedSEOOptimizer.tsx',
    'app/components/EnhancedServicesShowcase.tsx',
    'app/components/FuturisticHero.tsx',
    'app/components/FuturisticServiceCard.tsx',
    'app/components/GlobalErrorBoundary.tsx',
    'app/components/LazyImage.tsx',
    'app/components/OptimizedImage.tsx',
    'app/components/OptimizedLoadingSpinner.tsx',
    'app/components/PWAInstaller.tsx',
    'app/components/PerformanceEnhancer.tsx',
    'app/components/PerformanceMonitor.tsx',
    'app/components/SEOEnhancer.tsx',
    'app/components/ServiceCardSkeleton.tsx',
    'app/components/SystemMonitor.tsx'
  ];
  
  problematicFiles.push(...specificFiles);
  
  return problematicFiles.filter(f => fs.existsSync(f));
}

// Main execution
console.log('Starting JSX fragment fixes...');

const problematicFiles = findProblematicFiles();
console.log(`Found ${problematicFiles.length} files to fix`);

let fixedCount = 0;
problematicFiles.forEach(file => {
  if (fixJSXFragments(file)) {
    fixedCount++;
  }
});

console.log(`Fixed JSX fragments in ${fixedCount} files`);

// Also run a comprehensive cleanup for the most problematic files
const criticalFiles = [
  'app/ai-analytics/page.tsx',
  'app/ai-api-management/page.tsx',
  'app/ai-api-manager/page.tsx',
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-blockchain-analytics/page.tsx',
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-climate-solutions-pro/page.tsx',
  'app/ai-cloud-infrastructure/page.tsx',
  'app/ai-code-assistant/page.tsx',
  'app/ai-code-security-auditor/page.tsx',
  'app/ai-computer-vision/page.tsx',
  'app/ai-content-delivery-network/page.tsx'
];

console.log('Applying critical fixes to problematic page files...');
criticalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // Look for the specific pattern around line 42 where the error occurs
      const lines = content.split('\n');
      let modified = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // If we find an opening fragment around line 42, ensure it has a closing
        if (i > 35 && i < 50 && line.trim() === '<>') {
          // Look ahead to see if there's a closing fragment
          let foundClosing = false;
          for (let j = i + 1; j < Math.min(i + 20, lines.length); j++) {
            if (lines[j].trim() === '</>') {
              foundClosing = true;
              break;
            }
          }
          
          if (!foundClosing) {
            // Add closing fragment before the next major section
            for (let j = i + 1; j < lines.length; j++) {
              if (lines[j].trim().startsWith('export') || lines[j].trim().startsWith('function') || lines[j].trim() === '}') {
                lines.splice(j, 0, '  </>');
                modified = true;
                break;
              }
            }
          }
        }
      }
      
      if (modified) {
        content = lines.join('\n');
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Applied critical fixes to: ${file}`);
      }
    } catch (error) {
      console.error(`Error applying critical fixes to ${file}:`, error.message);
    }
  }
});

console.log('JSX fragment fixes completed!');