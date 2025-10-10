#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix JSX fragments in page files
function fixPageJSXFragments(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Look for the specific pattern that's causing issues
    // Usually around line 42 where there's an opening fragment without closing
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Check if this is around line 42 and has an opening fragment
      if (i > 35 && i < 50 && trimmedLine === '<>') {
        // Look ahead to find where this fragment should be closed
        let foundClosing = false;
        let depth = 1;
        
        for (let j = i + 1; j < lines.length; j++) {
          const nextLine = lines[j].trim();
          
          if (nextLine === '<>') {
            depth++;
          } else if (nextLine === '</>') {
            depth--;
            if (depth === 0) {
              foundClosing = true;
              break;
            }
          } else if (nextLine.startsWith('export') || nextLine.startsWith('function') || nextLine === '}') {
            // We've reached the end of the component without closing the fragment
            break;
          }
        }
        
        if (!foundClosing) {
          // Find the end of the return statement and add closing fragment
          for (let j = i + 1; j < lines.length; j++) {
            const nextLine = lines[j].trim();
            if (nextLine === ');' || nextLine === ')' || (nextLine === '}' && j > i + 5)) {
              // Insert closing fragment before this line
              const indent = lines[j].match(/^(\s*)/)[1];
              lines.splice(j, 0, indent + '</>');
              modified = true;
              break;
            }
          }
        }
      }
      
      fixedLines.push(line);
    }
    
    if (modified) {
      content = fixedLines.join('\n');
    }
    
    // Also fix common patterns
    const patterns = [
      // Fix unclosed fragments in return statements
      {
        regex: /return\s*\(\s*<>\s*([\s\S]*?)(?=\n\s*\)\s*;?\s*$)/g,
        replacement: (match, content) => {
          if (!content.includes('</>')) {
            return `return (\n    <>\n      ${content}\n    </>\n  )`;
          }
          return match;
        }
      },
      // Fix malformed JSX structure
      {
        regex: /<>\s*<Helmet><\/Helmet>\s*<title>([^<]+)<\/title>\s*<meta[^>]*\/>\s*<meta[^>]*\/>\s*<\/Helmet>/g,
        replacement: '<>\n      <Helmet>\n        <title>$1</title>\n        <meta name="description" content="Advanced AI-powered analytics solution for modern businesses." />\n        <meta name="keywords" content="AI analytics, artificial intelligence, data analytics, AI solutions, intelligent automation" />\n      </Helmet>'
      }
    ];
    
    patterns.forEach(pattern => {
      const newContent = content.replace(pattern.regex, pattern.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX fragments in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing JSX fragments in ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting page JSX fragment fixes...');

const problematicFiles = [
  'app/ai-analytics/page.tsx',
  'app/ai-api-management/page.tsx',
  'app/ai-api-manager/page.tsx',
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-blockchain-analytics/page.tsx',
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-climate-solutions-pro/page.tsx',
  'app/ai-cloud-infrastructure/page.tsx',
  'app/ai-code-assistant/page.tsx',
  'app/ai-code-security-auditor/page.tsx',
  'app/ai-computer-vision/page.tsx',
  'app/ai-content-delivery-network/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-content-studio/page.tsx',
  'app/ai-content-writer/page.tsx',
  'app/ai-crm-assistant/page.tsx'
];

let fixedCount = 0;
problematicFiles.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixPageJSXFragments(file)) {
      fixedCount++;
    }
  }
});

console.log(`Fixed JSX fragments in ${fixedCount} files`);

// Also run a comprehensive fix for all page files
console.log('Running comprehensive fix for all page files...');
try {
  const result = require('child_process').execSync('find app -name "page.tsx" | head -20', { 
    encoding: 'utf8',
    cwd: process.cwd()
  });
  const allPageFiles = result.trim().split('\n').filter(f => f.length > 0);
  
  allPageFiles.forEach(file => {
    if (fs.existsSync(file)) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Fix the most common pattern: unclosed fragments in return statements
        const returnPattern = /return\s*\(\s*<>\s*([\s\S]*?)(?=\n\s*\)\s*;?\s*$)/g;
        content = content.replace(returnPattern, (match, innerContent) => {
          if (!innerContent.includes('</>')) {
            modified = true;
            return `return (\n    <>\n      ${innerContent}\n    </>\n  )`;
          }
          return match;
        });
        
        if (modified) {
          fs.writeFileSync(file, content, 'utf8');
          console.log(`Applied comprehensive fix to: ${file}`);
        }
      } catch (error) {
        console.error(`Error applying comprehensive fix to ${file}:`, error.message);
      }
    }
  });
} catch (error) {
  console.error('Error finding page files:', error.message);
}

console.log('Page JSX fragment fixes completed!');