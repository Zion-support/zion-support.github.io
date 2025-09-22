const fs = require('fs');
const path = require('path');

function fixAppSyntax() {
  console.log('🔧 Starting comprehensive app syntax fix...');
  
  const appDir = '/workspace/app';
  let fixedFiles = 0;
  let totalFiles = 0;
  
  function processDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        processDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        totalFiles++;
        try {
          let content = fs.readFileSync(fullPath, 'utf8');
          let originalContent = content;
          
          // Fix common syntax issues
          content = fixSyntaxIssues(content);
          
          if (content !== originalContent) {
            fs.writeFileSync(fullPath, content);
            console.log(`✅ Fixed: ${fullPath}`);
            fixedFiles++;
          }
        } catch (error) {
          console.log(`❌ Error processing ${fullPath}: ${error.message}`);
        }
      }
    }
  }
  
  function fixSyntaxIssues(content) {
    // Remove duplicate metadata exports
    const metadataRegex = /export const metadata[\s\S]*?};/g;
    const metadataMatches = content.match(metadataRegex);
    if (metadataMatches && metadataMatches.length > 1) {
      content = content.replace(metadataRegex, metadataMatches[0]);
    }
    
    // Fix duplicate function exports
    const functionRegex = /export default function[\s\S]*?}(?=\s*export default function)/g;
    content = content.replace(functionRegex, '');
    
    // Fix missing React imports
    if (!content.includes('import React') && (content.includes('export default function') || content.includes('<div'))) {
      content = "import React from 'react';\n\n" + content;
    }
    
    // Fix metadata type annotations
    content = content.replace(
      /export const metadata = \{/g,
      "import { Metadata } from 'next';\n\nexport const metadata: Metadata = {"
    );
    
    // Fix malformed imports
    content = content.replace(/from '@heroicons \/ react \/ 24 \/ outline'/g, "from '@heroicons/react/24/outline'");
    
    // Fix stray semicolons and syntax errors
    content = content.replace(/;\s*}/g, '}');
    content = content.replace(/;\s*export/g, ';\n\nexport');
    
    // Fix malformed object literals
    content = content.replace(/\}:\s*\{\}/g, '}');
    
    // Remove stray text outside of JSX
    content = content.replace(/^(?!import|export|'use client'|const|let|var|function|\/\/|\/\*|\*\/|\s*$).*$/gm, '');
    
    // Fix incomplete JSX closing tags
    content = content.replace(/;\s*$/, '');
    
    // Clean up multiple newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    
    return content;
  }
  
  try {
    processDirectory(appDir);
    console.log(`\n📊 Summary:`);
    console.log(`  Total files processed: ${totalFiles}`);
    console.log(`  Files fixed: ${fixedFiles}`);
    console.log(`  Files unchanged: ${totalFiles - fixedFiles}`);
    console.log('\n✅ App syntax fix completed!');
  } catch (error) {
    console.error('❌ Error during syntax fix:', error.message);
  }
}

fixAppSyntax();