#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unclosed JSX tags and malformed syntax
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      const originalLine = line;
      
      // Fix malformed JSX expressions
      line = line.replace(/\{\s*>\s*\}/g, '>');
      line = line.replace(/\{\s*\}\s*\}/g, '}');
      line = line.replace(/\{\s*>\s*\}/g, '>');
      
      // Fix unclosed JSX tags - look for patterns like <button> without </button>
      if (line.includes('<button') && !line.includes('</button>') && !line.includes('/>')) {
        // Check if next line has closing tag
        if (i + 1 < lines.length && lines[i + 1].trim().startsWith('</button>')) {
          // Keep as is
          // Try to fix inline button
          line = line.replace(/<button([^>]*)>([^<]*)<\/button>/, '<button$1>$2</button>');
          if (!line.includes('</button>') && !line.includes('/>')) {
            line = line.replace(/<button([^>]*)>([^<]*)$/, '<button$1>$2</button>');
      
      // Fix unclosed div tags
      if (line.includes('<div') && !line.includes('</div>') && !line.includes('/>')) {
        if (i + 1 < lines.length && lines[i + 1].trim().startsWith('</div>')) {
          // Keep as is
          line = line.replace(/<div([^>]*)>([^<]*)$/, '<div$1>$2</div>');
      
      // Fix unclosed h2 tags
      if (line.includes('<h2') && !line.includes('</h2>')) {
        line = line.replace(/<h2([^>]*)>([^<]*)$/, '<h2$1>$2</h2>');
      
      // Fix unclosed p tags
      if (line.includes('<p') && !line.includes('</p>')) {
        line = line.replace(/<p([^>]*)>([^<]*)$/, '<p$1>$2</p>');
      
      // Fix unclosed span tags
      if (line.includes('<span') && !line.includes('</span>') && !line.includes('/>')) {
        line = line.replace(/<span([^>]*)>([^<]*)$/, '<span$1>$2</span>');
      
      // Fix unclosed section tags
      if (line.includes('<section') && !line.includes('</section>')) {
        line = line.replace(/<section([^>]*)>([^<]*)$/, '<section$1>$2</section>');
      
      // Fix unclosed h3 tags
      if (line.includes('<h3') && !line.includes('</h3>')) {
        line = line.replace(/<h3([^>]*)>([^<]*)$/, '<h3$1>$2</h3>');
      
      // Fix malformed JSX expressions with unexpected tokens
      line = line.replace(/\{\s*>\s*\}/g, '>');
      line = line.replace(/\{\s*\}\s*\}/g, '}');
      line = line.replace(/\{\s*>\s*\}/g, '>');
      
      // Fix React.Fragment issues
      if (line.includes('<React.Fragment') && !line.includes('</React.Fragment>')) {
        line = line.replace(/<React\.Fragment([^>]*)>([^<]*)$/, '<React.Fragment$1>$2</React.Fragment>');
      
      // Fix main tag issues
      if (line.includes('<main') && !line.includes('</main>')) {
        line = line.replace(/<main([^>]*)>([^<]*)$/, '<main$1>$2</main>');
      
      // Fix ul/li tag issues
      if (line.includes('<ul') && !line.includes('</ul>')) {
        line = line.replace(/<ul([^>]*)>([^<]*)$/, '<ul$1>$2</ul>');
      if (line.includes('<li') && !line.includes('</li>')) {
        line = line.replace(/<li([^>]*)>([^<]*)$/, '<li$1>$2</li>');
      
      // Remove lines with only merge conflict markers or malformed syntax
      if (line.trim().match(/^[<>{}]+$/) || line.trim().match(/^[<>{}]*[<>{}]+$/)) {
        continue; // Skip malformed lines
      
      // Fix lines that start with unexpected characters
      if (line.trim().match(/^[<>{}]+/) && !line.trim().match(/^<[a-zA-Z]/)) {
        continue; // Skip lines that start with malformed characters
      
      if (line !== originalLine) {
        modified = true;
      
      fixedLines.push(line);
    
    if (modified) {
      const fixedContent = fixedLines.join('\n');
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      return true;
    
    return false;
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;


// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
        files.push(fullPath);
  
  traverse(dir);
  return files;


// Main execution
console.log('Starting syntax error cleanup...');

const sourceFiles = findSourceFiles('/workspace');
console.log(`Found ${sourceFiles.length} source files`);

let fixedCount = 0;
let errorCount = 0;

for (const file of sourceFiles) {
  try {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
      console.log(`Fixed: ${file}`);
    console.error(`Failed to fix ${file}:`, error.message);
    errorCount++;


console.log(`\nSyntax cleanup complete:`);
console.log(`- Files processed: ${sourceFiles.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);