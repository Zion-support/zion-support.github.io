#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix specific syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix duplicate imports
    const lines = content.split('\n');
    const seenImports = new Set();
    const cleanedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Skip duplicate imports
      if (line.startsWith('import ') && seenImports.has(line)) {
        continue;
      }
      
      if (line.startsWith('import ')) {
        seenImports.add(line);
      }
      
      cleanedLines.push(lines[i]);
    }
    
    content = cleanedLines.join('\n');
    
    // Fix malformed JSX and syntax issues
    content = content.replace(/\}\s*\}\s*;\s*$/gm, '}');
    content = content.replace(/\}\s*;\s*$/gm, '}');
    content = content.replace(/\}\s*export/gm, '}\n\nexport');
    
    // Fix incomplete JSX tags
    content = content.replace(/<[^>]*$/gm, '');
    
    // Fix malformed closing tags
    content = content.replace(/<\/[^>]*$/gm, '');
    
    // Remove orphaned closing braces
    content = content.replace(/^\s*\}\s*$/gm, '');
    
    // Fix multiple closing braces at end
    content = content.replace(/\}\s*\}\s*$/gm, '}');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Remove trailing semicolons after closing braces
    content = content.replace(/\}\s*;\s*$/gm, '}');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix Navigation.tsx specifically
function fixNavigationFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove duplicate imports
    const lines = content.split('\n');
    const cleanedLines = [];
    const seenImports = new Set();
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line.startsWith('import ') && seenImports.has(line)) {
        continue;
      }
      
      if (line.startsWith('import ')) {
        seenImports.add(line);
      }
      
      cleanedLines.push(lines[i]);
    }
    
    content = cleanedLines.join('\n');
    
    // Fix the interface declaration
    content = content.replace(/interface NavigationProps \{\s*className\?\: string;\s*children\?\: React\.ReactNode;\}/gm, 
      'interface NavigationProps {\n  className?: string;\n  children?: React.ReactNode;\n}');
    
    // Fix malformed JSX
    content = content.replace(/<[^>]*$/gm, '');
    content = content.replace(/<\/[^>]*$/gm, '');
    
    // Remove orphaned braces and fix structure
    content = content.replace(/\}\s*\}\s*$/gm, '}');
    content = content.replace(/\}\s*;\s*$/gm, '}');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed Navigation.tsx`);
    return true;
  } catch (error) {
    console.error(`Error fixing Navigation.tsx:`, error.message);
    return false;
  }
}

async function main() {
  // Fix specific problematic files first
  const problematicFiles = [
    'app/components/Navigation.tsx',
    'app/ai-powered-devops/page.tsx',
    'app/ai-powered-email-analyzer/page.tsx',
    'app/micro-saas-services/ai-content-generator/page.tsx',
    'app/micro-saas-services/ai-email-assistant/page.tsx',
    'app/micro-saas-services/ai-lead-generation/page.tsx',
    'app/components/SEOOptimizer.tsx'
  ];
  
  for (const file of problematicFiles) {
    if (fs.existsSync(file)) {
      if (file === 'app/components/Navigation.tsx') {
        fixNavigationFile(file);
      } else {
        fixSyntaxErrors(file);
      }
    }
  }
  
  // Fix all other TypeScript files
  const patterns = ['app/**/*.tsx', 'app/**/*.ts', 'components/**/*.tsx', 'components/**/*.ts'];
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      if (!problematicFiles.includes(file) && fixSyntaxErrors(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nFixed syntax errors in ${totalFixed} additional files.`);
  console.log('Syntax error cleanup completed!');
}

main().catch(console.error);