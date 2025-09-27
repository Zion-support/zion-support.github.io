#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const filesToFix = [
  'pages/index.tsx',
  'pages/enhanced-home.tsx',
  'pages/faq.tsx'
];

function fixSyntaxErrors(content) {
  // Fix malformed variable names with commas
  content = content.replace(/, (\w+)/g, '$1');
  content = content.replace(/(\w+), (\w+), (\w+)/g, '$1$2$3');
  content = content.replace(/(\w+), (\w+)/g, '$1$2');
  
  // Fix malformed imports
  content = content.replace(/useCallbackuseMemouseRef/g, 'useCallback, useMemo, useRef');
  content = content.replace(/useStateuseEffect/g, 'useState, useEffect');
  content = content.replace(/motionuseInViewAnimatePresence/g, 'motion, useInView, AnimatePresence');
  
  // Fix malformed function calls
  content = content.replace(/useR, e, f/g, 'useRef');
  content = content.replace(/useInVi, e, w/g, 'useInView');
  content = content.replace(/setIsVisib, l, e/g, 'setIsVisible');
  content = content.replace(/setIsLoadi, n, g/g, 'setIsLoading');
  content = content.replace(/performanceMetri, c, s/g, 'performanceMetrics');
  content = content.replace(/setPerformanceMetri, c, s/g, 'setPerformanceMetrics');
  
  // Fix malformed objects and arrays
  content = content.replace(/li, s, t\.getEntri, e, s\(\)/g, 'list.getEntries()');
  content = content.replace(/entri, e, s\.forEa, c, h/g, 'entries.forEach');
  content = content.replace(/ent, r, y\./g, 'entry.');
  content = content.replace(/domContentLoadedEventE, n, d/g, 'domContentLoadedEventEnd');
  content = content.replace(/loadEventE, n, d/g, 'loadEventEnd');
  content = content.replace(/fetchStartdomContentLoaded/g, 'fetchStart, domContentLoaded');
  
  // Fix malformed strings
  content = content.replace(/`select-plan-\$\{tierId\}` "conversion'/g, "`select-plan-${tierId}`, 'conversion'");
  content = content.replace(/`read-blog-\$\{slug\}` "engagement'/g, "`read-blog-${slug}`, 'engagement'");
  content = content.replace(/console\.log\('Selected plan:"tierId\)/g, 'console.log("Selected plan:", tierId)');
  content = content.replace(/console\.log\('Read more:", slug\)/g, 'console.log("Read more:", slug)');
  
  // Fix malformed function definitions
  content = content.replace(/const handleSelectPlan\s*=\s*\(tierId:\s*string\)\s*=>\s*\{trackCli, ck/g, 'const handleSelectPlan = (tierId: string) => {\n\t\ttrackClick');
  content = content.replace(/const handleReadMore\s*=\s*\(slug:\s*string\)\s*=>\s*\{trackCli, ck/g, 'const handleReadMore = (slug: string) => {\n\t\ttrackClick');
  
  // Fix malformed comments
  content = content.replace(/\/\/ Performancemonitoringif/g, '// Performance monitoring\n\tif');
  content = content.replace(/\/\/ Analyticstracking/g, '// Analytics tracking');
  
  // Fix malformed className attributes
  content = content.replace(/className="([^"]*),([^"]*)"/g, 'className="$1$2"');
  
  // Fix malformed object properties
  content = content.replace(/(\w+):\s*"([^"]*),([^"]*)"/g, '$1: "$2$3"');
  
  // Fix missing semicolons and brackets
  content = content.replace(/\}\s*\{/g, '};\n\t{');
  content = content.replace(/(\w+)\s*\{/g, '$1 = {');
  
  // Fix malformed template literals
  content = content.replace(/`([^`]*),([^`]*)`/g, '`$1$2`');
  
  // Fix malformed destructuring
  content = content.replace(/const\s*\{([^}]*),([^}]*)\}\s*=\s*([^;]+);/g, 'const { $1$2 } = $3;');
  
  // Fix malformed array destructuring
  content = content.replace(/const\s*\[([^\]]*),([^\]]*)\]\s*=\s*([^;]+);/g, 'const [ $1$2 ] = $3;');
  
  return content;
}

async function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✅ Fixed syntax errors in ${filePath}`);
    } else {
      console.log(`ℹ️  No changes needed for ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
}

async function main() {
  console.log('🔧 Fixing syntax errors in files...\n');
  
  for (const file of filesToFix) {
    if (fs.existsSync(file)) {
      await fixFile(file);
    } else {
      console.log(`⚠️  File not found: ${file}`);
    }
  }
  
  console.log('\n✨ Syntax error fixing completed!');
}

main().catch(console.error);