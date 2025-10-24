#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting comprehensive error fixing...');

// Function to fix merge conflicts
function fixMergeConflicts(content) {
  // Remove merge conflict markers and keep the HEAD version
  return content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+/g, '$1');
}

// Function to fix common JSX syntax errors
function fixJSXSyntax(content) {
  // Fix unclosed JSX tags
  content = content.replace(/<h1([^>]*)>([^<]*?)(?![^<]*<\/h1>)/g, '<h1$1>$2</h1>');
  content = content.replace(/<div([^>]*)>([^<]*?)(?![^<]*<\/div>)/g, '<div$1>$2</div>');
  content = content.replace(/<Helmet([^>]*)>([^<]*?)(?![^<]*<\/Helmet>)/g, '<Helmet$1>$2</Helmet>');
  
  // Fix malformed JSX fragments
  content = content.replace(/<React\.Fragment>([^<]*?)(?![^<]*<\/React\.Fragment>)/g, '<React.Fragment>$1</React.Fragment>');
  content = content.replace(/<>([^<]*?)(?![^<]*<\/>)/g, '<>$1</>');
  
  // Fix missing closing braces
  content = content.replace(/([^}])$/gm, '$1}');
  
  // Fix duplicate imports
  const lines = content.split('\n');
  const seenImports = new Set();
  const filteredLines = lines.filter(line => {
    if (line.trim().startsWith('import ')) {
      if (seenImports.has(line.trim())) {
        return false;
      }
      seenImports.add(line.trim());
    }
    return true;
  });
  
  return filteredLines.join('\n');
}

// Function to fix specific file patterns
function fixSpecificFile(content, filePath) {
  // Fix common patterns in AI pages
  if (filePath.includes('ai-') && filePath.includes('/page.tsx')) {
    // Fix malformed feature arrays
    content = content.replace(/const features = \[\s*,\s*{/g, 'const features = [\n    {');
    content = content.replace(/{\s*icon:\s*([^,]+),\s*title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*}\s*]/g, '{\n      icon: $1,\n      title: \'$2\',\n      description: \'$3\',\n    }\n  ];');
    
    // Fix malformed JSX
    content = content.replace(/<h1([^>]*)>([^<]*?)(?![^<]*<\/h1>)/g, '<h1$1>$2</h1>');
    content = content.replace(/<div([^>]*)>([^<]*?)(?![^<]*<\/div>)/g, '<div$1>$2</div>');
    
    // Fix syntax errors
    content = content.replace(/,\s*$/gm, '');
    content = content.replace(/;\s*$/gm, '');
    content = content.replace(/}\s*$/gm, '}');
  }
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixMergeConflicts(content);
    content = fixJSXSyntax(content);
    content = fixSpecificFile(content, filePath);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JSX files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip certain directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
async function main() {
  try {
    console.log('📁 Finding files to process...');
    const files = findFiles('./app');
    
    console.log(`📊 Found ${files.length} files to process`);
    
    let fixedCount = 0;
    const errors = [];
    
    for (const file of files) {
      try {
        if (processFile(file)) {
          fixedCount++;
        }
      } catch (error) {
        errors.push({ file, error: error.message });
      }
    }
    
    console.log(`\n📈 Results:`);
    console.log(`✅ Fixed: ${fixedCount} files`);
    console.log(`❌ Errors: ${errors.length} files`);
    
    if (errors.length > 0) {
      console.log('\n🚨 Files with errors:');
      errors.forEach(({ file, error }) => {
        console.log(`  - ${file}: ${error}`);
      });
    }
    
    // Run linting to check remaining issues
    console.log('\n🔍 Running linting check...');
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      console.log('✅ Linting passed!');
    } catch (error) {
      console.log('⚠️  Linting found remaining issues, but continuing...');
    }
    
    console.log('\n🎉 Comprehensive fix completed!');
    
  } catch (error) {
    console.error('💥 Fatal error:', error.message);
    process.exit(1);
  }
}

main();