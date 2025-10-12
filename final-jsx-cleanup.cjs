#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix remaining JSX structure issues
function fixJSXStructure(content) {
  let fixed = content;
  
  // Fix missing closing tags for div elements
  fixed = fixed
    .replace(/<div([^>]*)>\s*$/gm, '<div$1></div>')
    .replace(/<p([^>]*)>\s*$/gm, '<p$1></p>')
    .replace(/<section([^>]*)>\s*$/gm, '<section$1></section>')
    .replace(/<h([1-6])([^>]*)>\s*$/gm, '<h$1$2></h$1>');
  
  // Fix malformed JSX structure
  fixed = fixed
    // Fix self-closing tags that should be closed
    .replace(/<([A-Z][a-zA-Z]*)([^>]*)\s*\/>\s*$/gm, '<$1$2></$1>')
    // Fix missing closing tags for custom components
    .replace(/<FuturisticButton([^>]*)>\s*$/gm, '<FuturisticButton$1></FuturisticButton>')
    .replace(/<FuturisticCard([^>]*)>\s*$/gm, '<FuturisticCard$1></FuturisticCard>')
    .replace(/<FuturisticBackground([^>]*)>\s*$/gm, '<FuturisticBackground$1></FuturisticBackground>');
  
  // Fix duplicate content and malformed structure
  fixed = fixed
    // Remove duplicate closing tags
    .replace(/(<\/[^>]+>)\s*\1/g, '$1')
    // Fix missing opening tags
    .replace(/<\/div>\s*<div([^>]*)>\s*$/gm, '<div$1></div>')
    // Fix malformed JSX expressions
    .replace(/(<[^>]+>)\s*([^<]+)\s*$/gm, (match, tag, content) => {
      if (content.trim() && !content.includes('<')) {
        const tagName = tag.match(/<(\w+)/)[1];
        return `${tag}${content}</${tagName}>`;
      }
      return match;
    });
  
  // Clean up extra whitespace
  fixed = fixed
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .replace(/^\s+$/gm, '');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXStructure(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✓ Fixed JSX structure in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('Starting final JSX cleanup...');
  
  // Focus on the most critical files
  const criticalFiles = [
    'app/ai-smart-scheduler/page.tsx',
    'app/ai-supply-chain-optimizer/page.tsx',
    'app/ai-translation-service/page.tsx',
    'app/blockchain-web3/page.tsx',
    'app/cloud-infrastructure-management/page.tsx',
    'app/cloud-migration-pro/page.tsx'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  criticalFiles.forEach(file => {
    if (fs.existsSync(file)) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  });
  
  console.log(`\nFinal JSX cleanup complete!`);
  console.log(`Total files processed: ${totalFiles}`);
  console.log(`Files with JSX structure fixed: ${fixedFiles}`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { fixJSXStructure, processFile };