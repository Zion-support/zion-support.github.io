const fs = require('fs');
const path = require('path');

function fixHelmetIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't contain react-helmet-async or react-router-dom
    if (!content.includes('react-helmet-async') && !content.includes('react-router-dom')) {
      return false;
    }
    
    let modified = false;
    
    // Fix react-helmet-async imports and usage
    if (content.includes('react-helmet-async')) {
      // Remove Helmet import
      content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];?\s*\n?/g, '');
      
      // Remove Helmet usage and replace with metadata export
      const helmetMatch = content.match(/<Helmet>\s*<title>([^<]+)<\/title>\s*<meta\s+name="description"\s+content="([^"]+)"\s*\/>\s*<\/Helmet>/s);
      if (helmetMatch) {
        const title = helmetMatch[1];
        const description = helmetMatch[2];
        
        // Add metadata import if not present
        if (!content.includes('import { Metadata }')) {
          content = content.replace(/import React from 'react';/, `import React from 'react';\nimport { Metadata } from 'next';`);
        }
        
        // Add metadata export
        const metadataExport = `export const metadata: Metadata = {\n  title: '${title}',\n  description: '${description}',\n};\n\n`;
        content = content.replace(/export default function/, metadataExport + 'export default function');
        
        // Remove Helmet JSX
        content = content.replace(/<Helmet>\s*<title>[^<]+<\/title>\s*<meta\s+name="description"\s+content="[^"]+"\s*\/>\s*<\/Helmet>\s*/s, '');
      }
      
      modified = true;
    }
    
    // Fix react-router-dom imports and usage
    if (content.includes('react-router-dom')) {
      // Replace Link import
      content = content.replace(/import\s*{\s*Link\s*}\s*from\s*['"]react-router-dom['"];?\s*\n?/g, "import Link from 'next/link';\n");
      
      modified = true;
    }
    
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

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixHelmetIssues(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Fix files in app directory
const appDir = './app';
console.log('Fixing helmet and router issues in app directory...');
const fixedCount = walkDirectory(appDir);
console.log(`Fixed ${fixedCount} files`);