#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Common fixes for service pages
function fixServicePage(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Fix malformed metadata exports
  if (fixed.includes('title:') && !fixed.includes('export const metadata')) {
    // Find the title line and wrap it in metadata export
    const titleMatch = fixed.match(/title:\s*['"`]([^'"`]+)['"`]/);
    const descMatch = fixed.match(/description:\s*['"`]([^'"`]+)['"`]/);
    const keywordsMatch = fixed.match(/keywords:\s*['"`]([^'"`]+)['"`]/);
    
    if (titleMatch) {
      const title = titleMatch[1];
      const description = descMatch ? descMatch[1] : 'Professional services for your business needs.';
      const keywords = keywordsMatch ? keywordsMatch[1] : 'services, business, technology';
      
      // Remove the malformed metadata lines
      fixed = fixed.replace(/title:\s*['"`][^'"`]+['"`][,\s]*/g, '');
      fixed = fixed.replace(/description:\s*['"`][^'"`]+['"`][,\s]*/g, '');
      fixed = fixed.replace(/keywords:\s*['"`][^'"`]+['"`][,\s]*/g, '');
      
      // Add proper metadata export at the top
      const metadataExport = `export const metadata = {
  title: '${title}',
  description: '${description}',
  keywords: '${keywords}'
};

`;
      
      // Insert after imports
      const importEnd = fixed.lastIndexOf('import');
      if (importEnd !== -1) {
        const nextLine = fixed.indexOf('\n', importEnd);
        fixed = fixed.slice(0, nextLine + 1) + metadataExport + fixed.slice(nextLine + 1);
        changes++;
      }
    }
  }

  // Fix duplicate imports
  const importLines = fixed.split('\n').filter(line => line.trim().startsWith('import'));
  const uniqueImports = [...new Set(importLines)];
  if (importLines.length !== uniqueImports.length) {
    // Remove all import lines and add unique ones
    fixed = fixed.replace(/import\s+.*?from\s+['"`][^'"`]+['"`];?\s*\n/g, '');
    fixed = uniqueImports.join('\n') + '\n\n' + fixed;
    changes++;
  }

  // Fix extra closing braces
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  if (closeBraces > openBraces) {
    const extraBraces = closeBraces - openBraces;
    // Remove extra closing braces at the end
    for (let i = 0; i < extraBraces; i++) {
      fixed = fixed.replace(/\}\s*$/, '');
    }
    changes++;
  }

  // Fix merge conflict markers
  if (fixed.includes('<<<<<<<') || fixed.includes('=======') || fixed.includes('>>>>>>>')) {
    // Remove merge conflict markers and keep the HEAD version
    fixed = fixed.replace(/<<<<<<< HEAD\n?/g, '');
    fixed = fixed.replace(/=======.*?>>>>>>> [^\n]+\n?/gs, '');
    changes++;
  }

  // Fix malformed function declarations
  if (fixed.includes('export default function') && fixed.includes('return (')) {
    // Check if there are duplicate function declarations
    const functionMatches = fixed.match(/export default function/g);
    if (functionMatches && functionMatches.length > 1) {
      // Keep only the first function declaration
      const firstFunction = fixed.indexOf('export default function');
      const secondFunction = fixed.indexOf('export default function', firstFunction + 1);
      if (secondFunction !== -1) {
        fixed = fixed.slice(0, secondFunction);
        changes++;
      }
    }
  }

  // Fix JSX structure issues
  if (fixed.includes('</div>') && fixed.includes('function FeatureItem')) {
    // Move function declarations outside of JSX
    const functionMatch = fixed.match(/function FeatureItem\([^)]*\)\s*\{[^}]*\}/s);
    if (functionMatch) {
      const functionCode = functionMatch[0];
      fixed = fixed.replace(functionCode, '');
      // Add function before the main component
      const componentStart = fixed.indexOf('export default function');
      if (componentStart !== -1) {
        fixed = fixed.slice(0, componentStart) + functionCode + '\n\n' + fixed.slice(componentStart);
        changes++;
      }
    }
  }

  return { content: fixed, changes };
}

// Process all service pages
function processServicePages() {
  const servicesDir = path.join(__dirname, 'app', 'services');
  const files = [];
  
  function findServicePages(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        findServicePages(fullPath);
      } else if (item === 'page.tsx') {
        files.push(fullPath);
      }
    }
  }
  
  findServicePages(servicesDir);
  
  console.log(`Found ${files.length} service pages to process...`);
  
  let totalChanges = 0;
  let processedFiles = 0;
  
  for (const filePath of files) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const result = fixServicePage(content, filePath);
      
      if (result.changes > 0) {
        fs.writeFileSync(filePath, result.content);
        console.log(`Fixed ${result.changes} issues in ${path.relative(__dirname, filePath)}`);
        totalChanges += result.changes;
      }
      processedFiles++;
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }
  
  console.log(`\nProcessed ${processedFiles} files with ${totalChanges} total changes.`);
}

// Run the fixer
processServicePages();