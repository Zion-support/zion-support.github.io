#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

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
        // Skip the ======= line
        i++;
        // Skip the conflicting content until >>>>>>> 
        while (i < lines.length && !lines[i].trim().startsWith('>>>>>>>')) {
          i++;
        }
        // Skip the         i++;
      } else {
        resolvedLines.push(line);
        i++;
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const sourceFiles = findSourceFiles(process.cwd());
let resolvedCount = 0;
let totalConflicts = 0;

for (const file of sourceFiles) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('<<<<<<< HEAD')) {
      totalConflicts++;
      if (resolveMergeConflicts(file)) {
        resolvedCount++;
      }
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`\nMerge conflict resolution complete!`);
console.log(`Files with conflicts: ${totalConflicts}`);
console.log(`Files resolved: ${resolvedCount}`);

// Run linting to check for any remaining issues
console.log('\nRunning linting to check for remaining issues...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('Linting passed!');
} catch (error) {
  console.log('Linting found issues, but merge conflicts should be resolved.');
}

// Run type checking
console.log('\nRunning type checking...');
try {
  execSync('npm run type-check', { stdio: 'inherit' });
  console.log('Type checking passed!');
} catch (error) {
  console.log('Type checking found issues, but merge conflicts should be resolved.');
}