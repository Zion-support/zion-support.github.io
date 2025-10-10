#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get list of files with TypeScript errors
function getProblematicFiles() {
  try {
    const output = execSync('pnpm run type-check 2>&1', { encoding: 'utf8' });
    const lines = output.split('\n');
    const files = new Set();
    
    lines.forEach(line => {
      const match = line.match(/^([^(]+\.tsx)\(/);
      if (match) {
        files.add(match[1]);
      }
    });
    
    return Array.from(files);
  } catch (error) {
    console.error('Error getting problematic files:', error.message);
    return [];
  }
}

// Fix JSX syntax errors in a file
function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common JSX issues
    const fixes = [
      // Fix missing React Fragment wrapper
      {
        pattern: /return\s*\(\s*<Helmet>/,
        replacement: 'return (\n    <>\n      <Helmet>'
      },
      {
        pattern: /return\s*\(\s*<div className="min-h-screen/,
        replacement: 'return (\n    <>\n      <div className="min-h-screen'
      },
      {
        pattern: /return\s*\(\s*<main/,
        replacement: 'return (\n    <>\n      <main'
      },
      {
        pattern: /return\s*\(\s*<section/,
        replacement: 'return (\n    <>\n      <section'
      },
      
      // Fix missing closing tags
      {
        pattern: /<\/Helmet>\s*<div className="min-h-screen/,
        replacement: '</Helmet>\n      <div className="min-h-screen'
      },
      
      // Fix missing closing fragment
      {
        pattern: /^\s*\);\s*$/m,
        replacement: '    </>\n  );'
      },
      
      // Fix malformed div tags
      {
        pattern: /<div className="container mx-auto"><\/div>/g,
        replacement: '<div className="container mx-auto">'
      },
      {
        pattern: /<div className="text-center mb-16"><\/div>/g,
        replacement: '<div className="text-center mb-16">'
      },
      
      // Fix missing opening tags
      {
        pattern: /^\s*<h1/gm,
        replacement: '            <h1'
      },
      {
        pattern: /^\s*<h2/gm,
        replacement: '            <h2'
      },
      {
        pattern: /^\s*<p/gm,
        replacement: '            <p'
      },
      
      // Fix duplicate sections
      {
        pattern: /\/\* Features Section \*\/\s*<section[^>]*>[\s\S]*?<\/section>\s*\/\* Features Section \*\/\s*<section[^>]*>/g,
        replacement: '/* Features Section */\n        <section className="py-20 px-4">'
      }
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('Starting JSX error fixes...');
  
  const problematicFiles = getProblematicFiles();
  console.log(`Found ${problematicFiles.length} files with errors`);
  
  let fixedCount = 0;
  problematicFiles.forEach(file => {
    if (fs.existsSync(file)) {
      if (fixJSXFile(file)) {
        fixedCount++;
      }
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
  
  // Run type check again to see remaining errors
  console.log('\nRunning type check to verify fixes...');
  try {
    execSync('pnpm run type-check', { stdio: 'inherit' });
    console.log('All TypeScript errors fixed!');
  } catch (error) {
    console.log('Some errors remain, continuing with fixes...');
  }
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixJSXFile, getProblematicFiles };