#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/JavaScript files in the app directory
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: __dirname });

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if file uses Helmet
  if (content.includes('react-helmet-async') || content.includes('<Helmet')) {
    console.log(`Fixing Helmet usage in ${file}`);
    
    // Replace Helmet import with Metadata
    content = content.replace(
      /import\s+{\s*Helmet\s*}\s+from\s+['"]react-helmet-async['"];?\s*/g,
      ''
    );
    
    // Add Metadata import if not present
    if (!content.includes('import { Metadata }')) {
      content = content.replace(
        /(import\s+React\s+from\s+['"]react['"];?)/,
        '$1\nimport { Metadata } from \'next\';'
      );
    }
    
    // Extract title, description, and keywords from Helmet
    const titleMatch = content.match(/<title>([^<]+)<\/title>/);
    const descMatch = content.match(/<meta\s+name="description"\s+content="([^"]+)"\s*\/?>/);
    const keywordsMatch = content.match(/<meta\s+name="keywords"\s+content="([^"]+)"\s*\/?>/);
    
    if (titleMatch || descMatch || keywordsMatch) {
      // Create metadata object
      let metadata = 'export const metadata: Metadata = {\n';
      if (titleMatch) {
        metadata += `  title: '${titleMatch[1].trim()}',\n`;
      }
      if (descMatch) {
        metadata += `  description: '${descMatch[1].trim()}',\n`;
      }
      if (keywordsMatch) {
        metadata += `  keywords: '${keywordsMatch[1].trim()}',\n`;
      }
      metadata += '};\n';
      
      // Add metadata export after imports
      const importEnd = content.lastIndexOf('import');
      const nextLine = content.indexOf('\n', importEnd) + 1;
      content = content.slice(0, nextLine) + '\n' + metadata + content.slice(nextLine);
    }
    
    // Remove Helmet JSX
    content = content.replace(/<Helmet[^>]*>[\s\S]*?<\/Helmet>/g, '');
    content = content.replace(/<Helmet[^>]*\/>/g, '');
    
    // Clean up empty fragments
    content = content.replace(/<>\s*<\/>/g, '');
    content = content.replace(/<>\s*(\s*<)/g, '$1');
    content = content.replace(/(>\s*)\s*<\/>/g, '$1');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file}`);
  }
});

console.log('Helmet fixing complete!');