#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const conflictedFiles = [
  'pages/about.tsx',
  'pages/dashboard.tsx', 
  'pages/enhanced-home.tsx',
  'pages/faq.tsx',
  'pages/services.tsx',
  'src/components/AccessibilityAuditor.tsx',
  'src/components/AdvancedPerformanceOptimizer.tsx',
  'src/components/AnalyticsDashboard.tsx',
  'src/components/EnhancedSearch.tsx',
  'src/components/PerformanceOptimizer.tsx',
  'src/components/Testimonials.tsx',
  'src/components/UserManagement.tsx',
  'src/components/WebVitals.tsx',
  'src/hooks/useAnalytics.ts'
];

function resolveConflicts(filePath) {
  console.log(`Resolving conflicts in ${filePath}...`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`File ${filePath} does not exist, skipping...`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove conflict markers and keep the HEAD version (our merged changes)
  content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1');
  
  // Clean up any remaining conflict markers
  content = content.replace(/<<<<<<< HEAD\n/g, '');
  content = content.replace(/=======\n/g, '');
  content = content.replace(/>>>>>>> [a-f0-9]+\n/g, '');
  
  // Fix common syntax issues
  content = content.replace(/\}\s*\)\s*;?\s*$/, '  )\n}');
  content = content.replace(/trackClick\(`([^`]+)`,\s*'([^']+)'\)\s*\}\s*;/, 'trackClick(`$1`, "$2");\n  };');
  content = content.replace(/return\s*\(\s*<div[^>]*>\s*Tab content not found\s*<\/div>\s*\)\s*;\s*\}/, 'return <div>Tab content not found</div>;\n  }');
  
  // Ensure proper closing
  if (!content.trim().endsWith('}')) {
    content = content.trim() + '\n}';
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`✓ Resolved conflicts in ${filePath}`);
}

// Resolve conflicts in all files
conflictedFiles.forEach(resolveConflicts);

console.log('All conflicts resolved!');