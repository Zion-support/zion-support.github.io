#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// List of critical files that need to be fixed
const criticalFiles = [
  'app/about/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/accessibility/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/ai-3d-generation/page.tsx',
  'app/ai-accounting-assistant/page.tsx',
  'app/ai-agricultural-intelligence-pro/page.tsx',
  'app/ai-analytics/page.tsx',
  'app/ai-analytics-dashboard/page.tsx',
  'app/ai-api-management/page.tsx',
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-blockchain-analytics/page.tsx',
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-code-security-auditor/page.tsx',
  'app/ai-computer-vision/page.tsx',
  'app/ai-content-generator/page.tsx',
  'app/ai-document-processor/page.tsx',
  'app/ai-drug-discovery-pro/page.tsx',
  'app/ai-ecommerce-solutions/page.tsx',
  'app/ai-email-assistant/page.tsx'
];

// Function to fix a specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove any remaining merge conflict markers
    const conflictRegex = /|
    if (conflictRegex.test(content)) {
      content = content.replace(conflictRegex, '');
      modified = true;
    }

    // Fix common JSX issues
    // Fix unclosed tags by ensuring proper structure
    const lines = content.split('\n');
    const fixedLines = [];
    let openTags = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Skip empty lines and comments
      if (!trimmedLine || trimmedLine.startsWith('//') || trimmedLine.startsWith('/*')) {
        fixedLines.push(line);
        continue;
      }
      
      // Check for opening tags
      const openTagMatch = trimmedLine.match(/<(\w+)([^>]*)>/);
      if (openTagMatch) {
        const tagName = openTagMatch[1];
        const attributes = openTagMatch[2];
        
        // Skip self-closing tags
        if (!attributes.includes('/>') && !['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName)) {
          openTags.push({ tag: tagName, line: i });
        }
        fixedLines.push(line);
        continue;
      }
      
      // Check for closing tags
      const closeTagMatch = trimmedLine.match(/<\/(\w+)>/);
      if (closeTagMatch) {
        const tagName = closeTagMatch[1];
        const lastOpenTag = openTags[openTags.length - 1];
        
        if (lastOpenTag && lastOpenTag.tag === tagName) {
          openTags.pop();
        } else {
          // This might be an extra closing tag, skip it
          console.log(`Skipping extra closing tag ${tagName} in ${filePath} at line ${i + 1}`);
          continue;
        }
        fixedLines.push(line);
        continue;
      }
      
      // Check for JSX expressions
      if (trimmedLine.includes('{') && trimmedLine.includes('}')) {
        // Ensure proper JSX syntax
        let fixedLine = line;
        
        // Fix broken JSX expressions
        fixedLine = fixedLine.replace(/\{\s*([^}]*?)\s*\}/g, '{$1}');
        
        // Fix missing semicolons in JSX
        if (fixedLine.includes(';') && !fixedLine.trim().endsWith(';')) {
          fixedLine = fixedLine.replace(/;\s*$/, '');
        }
        
        fixedLines.push(fixedLine);
        continue;
      }
      
      fixedLines.push(line);
    }
    
    // Add missing closing tags
    while (openTags.length > 0) {
      const { tag } = openTags.pop();
      fixedLines.push(`</${tag}>`);
      modified = true;
    }
    
    const newContent = fixedLines.join('\n');
    
    // Clean up extra whitespace
    const cleanedContent = newContent
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .replace(/^\s*\n/g, '')
      .replace(/\n\s*$/g, '');
    
    if (modified || cleanedContent !== content) {
      fs.writeFileSync(filePath, cleanedContent);
      console.log(`Fixed: ${filePath}`);
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
  console.log('Fixing critical files...');
  
  let fixedCount = 0;
  
  for (const file of criticalFiles) {
    const fullPath = path.join(process.cwd(), file);
    if (fs.existsSync(fullPath)) {
      if (fixFile(fullPath)) {
        fixedCount++;
      }
    } else {
      console.log(`File not found: ${file}`);
    }
  }
  
  console.log(`\nFixed ${fixedCount} critical files.`);
  
  // Run type check
  try {
    console.log('\nRunning type check...');
    execSync('pnpm run type-check', { stdio: 'inherit' });
    console.log('Type check passed!');
  } catch (error) {
    console.log('Type check still has errors, but critical files have been processed.');
  }
}

main();