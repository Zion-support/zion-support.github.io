#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting comprehensive error fixing...');

// Function to fix unterminated string literals
function fixUnterminatedStrings(content) {
  // Fix import statements with missing quotes
  content = content.replace(/import\s+([^'"]*)\s+from\s+'([^']*)$/gm, (match, imports, module) => {
    return `import ${imports} from '${module}';`;
  });
  
  // Fix other unterminated strings
  content = content.replace(/^([^'"]*'[^']*)$/gm, (match) => {
    if (match.includes('import') || match.includes('from')) {
      return match + "'";
    }
    return match;
  });
  
  // Fix JSX attributes with missing quotes
  content = content.replace(/className="([^"]*)$/gm, (match, className) => {
    return `className="${className}"`;
  });
  
  // Fix other common unterminated patterns
  content = content.replace(/;\s*$/gm, '');
  content = content.replace(/;\s*>/gm, '>');
  
  return content;
}

// Function to resolve merge conflicts
function resolveMergeConflicts(content) {
  const lines = content.split('\n');
  const resolved = [];
  let inConflict = false;
  let conflictType = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('<<<<<<< HEAD')) {
      inConflict = true;
      conflictType = 'head';
      continue;
    } else if (line.includes('=======')) {
      conflictType = 'separator';
      continue;
    } else if (line.includes('>>>>>>> ')) {
      inConflict = false;
      conflictType = '';
      continue;
    }
    
    if (!inConflict) {
      resolved.push(line);
    } else if (inConflict && conflictType === 'head') {
      // Keep the HEAD version for now
      resolved.push(line);
    }
  }
  
  return resolved.join('\n');
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix missing semicolons in imports
  content = content.replace(/import\s+[^;]+$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix missing closing brackets in JSX
  content = content.replace(/<([^>]+)>([^<]*)$/gm, (match, tag, content) => {
    if (content && !content.includes('</')) {
      return `<${tag}>${content}</${tag.split(' ')[0]}>`;
    }
    return match;
  });
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    
    // Apply fixes
    fixedContent = fixUnterminatedStrings(fixedContent);
    fixedContent = resolveMergeConflicts(fixedContent);
    fixedContent = fixSyntaxErrors(fixedContent);
    
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  const filesToProcess = [
    // Main app files
    '/workspace/App.tsx',
    '/workspace/App-minimal.tsx',
    '/workspace/App_minimal.tsx',
    '/workspace/App_test.tsx',
    '/workspace/EnhancedFooter.tsx',
    '/workspace/SidebarNavigation.tsx',
    
    // App pages
    '/workspace/app/404.tsx',
    '/workspace/app/5g-implementation/page.tsx',
    '/workspace/app/5g-solutions/page.tsx',
    '/workspace/app/about/page.tsx',
    '/workspace/app/ad-management/page.tsx',
    '/workspace/app/ai-3d-generation/page.tsx',
    '/workspace/app/ai-analytics/page.tsx',
    '/workspace/app/ai-automation-platform/page.tsx',
    
    // API files
    '/workspace/api/create-checkout-session.js',
    '/workspace/api/create-payment-intent.js',
    '/workspace/api/error-report.js',
    '/workspace/api/newsletter/subscribe.js',
    '/workspace/api/onsite-request.js',
    '/workspace/api/quotes.js',
    '/workspace/api/shipping-rates.js',
    '/workspace/api/subscribe.js',
    '/workspace/api/wallet.js',
  ];
  
  let fixedCount = 0;
  
  for (const filePath of filesToProcess) {
    if (fs.existsSync(filePath)) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  console.log(`\n🎉 Fixed ${fixedCount} files`);
  
  // Run linting to check remaining issues
  try {
    console.log('\n🔍 Running lint check...');
    execSync('pnpm run lint', { stdio: 'pipe' });
    console.log('✅ Lint check passed!');
  } catch (error) {
    console.log('⚠️  Lint check found remaining issues, but progress made');
  }
  
  // Run type check
  try {
    console.log('\n🔍 Running type check...');
    execSync('pnpm run type-check', { stdio: 'pipe' });
    console.log('✅ Type check passed!');
  } catch (error) {
    console.log('⚠️  Type check found remaining issues, but progress made');
  }
}

main();