#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Get all files with remaining metadata issues
const files = execSync("find /workspace/app -name '*.tsx' -o -name '*.ts' | xargs grep -l 'export const metadata'", { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

console.log(`Found ${files.length} files with remaining metadata issues`);

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Extract metadata information
    const metadataMatch = content.match(/export const metadata = \{([\s\S]*?)\};/);
    let metadata = {};
    
    if (metadataMatch) {
      try {
        // Parse the metadata object (this is a simple parser)
        const metadataStr = metadataMatch[1];
        const titleMatch = metadataStr.match(/title:\s*['"`]([^'"`]+)['"`]/);
        const descMatch = metadataStr.match(/description:\s*['"`]([^'"`]+)['"`]/);
        const typeMatch = metadataStr.match(/type:\s*['"`]([^'"`]+)['"`]/);
        const urlMatch = metadataStr.match(/url:\s*['"`]([^'"`]+)['"`]/);
        
        if (titleMatch) metadata.title = titleMatch[1];
        if (descMatch) metadata.description = descMatch[1];
        if (typeMatch) metadata.type = typeMatch[1];
        if (urlMatch) metadata.url = urlMatch[1];
      } catch (e) {
        // If parsing fails, use defaults
        metadata = {
          title: 'Zion Tech Group',
          description: 'Advanced AI and IT Solutions'
        };
      }
    }
    
    // Remove the metadata export
    content = content.replace(/export const metadata = \{[\s\S]*?\};/g, '');
    
    // Add React import if not present
    if (!content.includes("import React from 'react';")) {
      content = content.replace(/import { Link } from 'react-router-dom';/, "import React from 'react';\nimport { Link } from 'react-router-dom';");
    }
    
    // Add Helmet import if not present
    if (!content.includes("react-helmet-async")) {
      content = content.replace(/import React from 'react';/, "import React from 'react';\nimport { Helmet } from 'react-helmet-async';");
    }
    
    // Convert function declaration to arrow function
    content = content.replace(/export default function (\w+)\(\) \{/, 'const $1: React.FC = () => {');
    
    // Add Helmet component at the beginning of the return statement
    const returnMatch = content.match(/(\s+)return \(\s*<([^>]+)>/);
    if (returnMatch) {
      const indent = returnMatch[1];
      const firstTag = returnMatch[2];
      
      const helmetComponent = `${indent}return (\n${indent}  <>\n${indent}    <Helmet>\n${indent}      <title>${metadata.title || 'Zion Tech Group'}</title>\n${indent}      <meta name="description" content="${metadata.description || 'Advanced AI and IT Solutions'}" />\n${indent}      ${metadata.type ? `<meta property="og:type" content="${metadata.type}" />` : ''}\n${indent}      ${metadata.url ? `<meta property="og:url" content="${metadata.url}" />` : ''}\n${indent}    </Helmet>\n${indent}    <${firstTag}>`;
      
      content = content.replace(/(\s+)return \(\s*<([^>]+)>/, helmetComponent);
    }
    
    // Close the component properly
    content = content.replace(/^\s*}\s*$/, '  );\n};\n\nexport default Page;');
    
    // Fix any remaining syntax issues
    content = content.replace(/\n\nexport default function/g, '\n\nconst Page: React.FC = () => {');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`✓ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Process all files
let fixedCount = 0;
files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} out of ${files.length} files`);