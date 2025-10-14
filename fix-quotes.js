#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix over-escaped quotes
function fixOverEscapedQuotes(content) {
  // Fix over-escaped single quotes in imports and strings
  content = content.replace(/&apos;/g, "'");
  
  // Fix over-escaped double quotes
  content = content.replace(/&quot;/g, '"');
  
  // Fix over-escaped greater than and less than
  content = content.replace(/&gt;/g, '>');
  content = content.replace(/&lt;/g, '<');
  
  // Fix over-escaped ampersands
  content = content.replace(/&amp;/g, '&');
  
  return content;
}

// Function to fix common import issues
function fixImportIssues(content) {
  // Fix missing imports for common icons
  if (content.includes('Brain') || content.includes('Shield') || content.includes('Zap') || 
      content.includes('Users') || content.includes('Target') || content.includes('BarChart3') ||
      content.includes('ArrowRight') || content.includes('CheckCircle')) {
    
    // Check if lucide-react is already imported
    if (!content.includes('from "lucide-react"') && !content.includes("from 'lucide-react'")) {
      // Add import at the top
      const imports = [];
      if (content.includes('Brain')) imports.push('Brain');
      if (content.includes('Shield')) imports.push('Shield');
      if (content.includes('Zap')) imports.push('Zap');
      if (content.includes('Users')) imports.push('Users');
      if (content.includes('Target')) imports.push('Target');
      if (content.includes('BarChart3')) imports.push('BarChart3');
      if (content.includes('ArrowRight')) imports.push('ArrowRight');
      if (content.includes('CheckCircle')) imports.push('CheckCircle');
      
      if (imports.length > 0) {
        const importStatement = `import { ${imports.join(', ')} } from 'lucide-react';\n`;
        content = importStatement + content;
      }
    }
  }
  
  return content;
}

// Function to fix parsing errors
function fixParsingErrors(content) {
  // Fix common parsing issues
  content = content.replace(/import\s+&apos;([^&]+)&apos;/g, "import '$1'");
  content = content.replace(/import\s+&quot;([^"]+)&quot;/g, 'import "$1"');
  
  // Fix React import issues
  content = content.replace(/import\s+React\s+from\s+&apos;react&apos;/g, "import React from 'react'");
  
  // Fix JSX issues
  content = content.replace(/className=&apos;([^&]+)&apos;/g, "className='$1'");
  content = content.replace(/className=&quot;([^"]+)&quot;/g, 'className="$1"');
  
  return content;
}

// Main function to process files
async function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'api/**/*.js'
  ];
  
  let processedCount = 0;
  let errorCount = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      try {
        const filePath = path.resolve(file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if file has over-escaped quotes
        if (content.includes('&apos;') || content.includes('&quot;') || content.includes('&gt;') || content.includes('&lt;')) {
          console.log(`Fixing quotes in: ${file}`);
          content = fixOverEscapedQuotes(content);
        }
        
        // Fix import issues
        content = fixImportIssues(content);
        
        // Fix parsing errors
        content = fixParsingErrors(content);
        
        // Write back the fixed content
        fs.writeFileSync(filePath, content, 'utf8');
        processedCount++;
        
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
        errorCount++;
      }
    }
  }
  
  console.log(`\nProcessed ${processedCount} files`);
  if (errorCount > 0) {
    console.log(`Encountered ${errorCount} errors`);
  }
}

// Run the script
processFiles().catch(console.error);