#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix JSX syntax errors
function fixJSXSyntax(content) {
  let fixed = content;
  
  // Fix missing closing braces in JSX
  fixed = fixed.replace(/(<div[^>]*className="[^"]*"[^>]*)\s*$/gm, '$1>');
  fixed = fixed.replace(/(<main[^>]*className="[^"]*"[^>]*)\s*$/gm, '$1>');
  fixed = fixed.replace(/(<section[^>]*className="[^"]*"[^>]*)\s*$/gm, '$1>');
  
  // Fix missing closing parentheses in function calls
  fixed = fixed.replace(/(\w+)\s*$/gm, (match, func) => {
    if (func.match(/^(div|section|main|header|footer|button|span|h1|h2|h3|p)$/)) {
      return match;
    }
    return match;
  });
  
  // Fix missing semicolons
  fixed = fixed.replace(/(\w+)\s*\n\s*const/g, '$1;\n  const');
  fixed = fixed.replace(/(\w+)\s*\n\s*return/g, '$1;\n  return');
  
  // Fix missing commas in object properties
  fixed = fixed.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
  
  // Fix malformed icon properties
  fixed = fixed.replace(/ico,\s*n:/g, 'icon:');
  
  // Fix missing closing tags
  fixed = fixed.replace(/(<[^>]+>)\s*$/gm, (match) => {
    if (match.includes('className=') && !match.includes('>')) {
      return match + '>';
    }
    return match;
  });
  
  return fixed;
}

// Function to fix merge conflicts more comprehensively
function fixMergeConflicts(content) {
  let fixed = content;
  
  // Remove merge conflict markers and keep HEAD version
  fixed = fixed
    .replace(/\n([\s\S]*?)\n([\s\S]*?)    .replace(/\n([\s\S]*?)  
  // Remove duplicate Helmet tags
  fixed = fixed.replace(/<Helmet>[\s\S]*?<\/Helmet>\s*<Helmet>[\s\S]*?<\/Helmet>/g, (match) => {
    const firstHelmet = match.match(/<Helmet>[\s\S]*?<\/Helmet>/)[0];
    return firstHelmet;
  });
  
  // Remove duplicate Navigation components
  fixed = fixed.replace(/<Navigation \/>\s*<Navigation \/>/g, '<Navigation />');
  
  return fixed;
}

// Function to fix specific file issues
function fixSpecificFile(filePath, content) {
  let fixed = content;
  
  // Fix App_minimal.tsx
  if (filePath.includes('App_minimal.tsx')) {
    fixed = fixed.replace(/export default App\s*<\/Footer>\s*<\/Route>\s*<\/Navigation>/g, 'export default App');
  }
  
  // Fix 5g-implementation/page.tsx
  if (filePath.includes('5g-implementation/page.tsx')) {
    // Fix the malformed JSX structure
    fixed = fixed.replace(
      /<div className="min-h-screen bg-gray-50"\s*<Helmet>/g,
      '<div className="min-h-screen bg-gray-50">\n      <Helmet>'
    );
    
    // Remove duplicate Helmet and Navigation
    fixed = fixed.replace(
      /<Helmet>[\s\S]*?<\/Helmet>\s*<Navigation \/>\s*<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\s*<Helmet>[\s\S]*?<\/Helmet>\s*<Navigation \/>/g,
      '<Helmet>\n        <title>5G Implementation - Zion Tech Group</title>\n        <meta name="description" content="Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems." />\n        <meta name="keywords" content="5G implementation, network infrastructure, ultra-low latency, high-speed connectivity, IoT, smart cities, edge computing" />\n      </Helmet>\n      <Navigation />'
    );
  }
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    let fixed = content;
    let hasChanges = false;
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      fixed = fixMergeConflicts(fixed);
      hasChanges = true;
    }
    
    // Fix syntax errors
    if (content.includes('ico, n:') || content.includes('},\n    {') || content.includes('<div className=') && !content.includes('>')) {
      console.log(`Fixing syntax errors in: ${filePath}`);
      fixed = fixJSXSyntax(fixed);
      hasChanges = true;
    }
    
    // Fix specific file issues
    fixed = fixSpecificFile(filePath, fixed);
    
    if (hasChanges || fixed !== content) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✓ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  console.log('Starting comprehensive merge conflict and syntax error fixes...\n');
  
  // Find all TypeScript and TSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '*.tsx',
    '*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }
  
  console.log(`\nCompleted! Processed ${totalFiles} files, fixed ${fixedFiles} files.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixMergeConflicts, fixJSXSyntax, processFile };