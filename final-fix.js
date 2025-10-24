const fs = require('fs');
const path = require('path');

function fixFinalIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix 'use client' directive placement - move to top
    if (content.includes("'use client'") && !content.startsWith("'use client'")) {
      content = content.replace(/'use client'\s*\n/, '');
      content = "'use client'\n" + content;
    }
    
    // Fix missing commas in metadata objects
    // Pattern: description: 'value' keywords: -> description: 'value', keywords:
    content = content.replace(/(description:\s*'[^']+')\s*\n\s*(keywords:)/g, '$1,\n    $2');
    content = content.replace(/(keywords:\s*'[^']+')\s*\n\s*(openGraph:)/g, '$1,\n    $2');
    content = content.replace(/(openGraph:\s*\{)\s*\n\s*(title:)/g, '$1,\n      $2');
    content = content.replace(/(title:\s*'[^']+')\s*\n\s*(description:)/g, '$1,\n      $2');
    content = content.replace(/(description:\s*'[^']+')\s*\n\s*(type:)/g, '$1,\n      $2');
    content = content.replace(/(type:\s*'[^']+')\s*\n\s*(url:)/g, '$1,\n      $2');
    content = content.replace(/(url:\s*'[^']+')\s*\n\s*(\})/g, '$1\n    $2');
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+:\s*"[^"]+")\s*\n\s*(\w+:\s*"[^"]+")/g, '$1,\n    $2');
    content = content.replace(/(\w+:\s*'[^']+')\s*\n\s*(\w+:\s*'[^']+')/g, '$1,\n    $2');
    
    // Fix missing commas in features arrays
    content = content.replace(/\}\s*\{/g, '},\n    {');
    
    // Fix specific patterns
    content = content.replace(/(\w+:\s*"[^"]+")\s*\n\s*(\w+:\s*"[^"]+")/g, '$1,\n    $2');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixFinalIssues(filePath);
    }
  }
}

// Start fixing from the app directory
walkDirectory('./app');
console.log('Final fixing completed!');