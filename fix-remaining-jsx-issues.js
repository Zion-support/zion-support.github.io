#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix JSX expressions that need parent elements
function fixJSXParentElements(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix 1: Fix JSX expressions that need one parent element
    const multipleRootPattern = /^(\s*)(<[^>]+>.*?<\/[^>]+>)\s*\n\s*(<[^>]+>.*?<\/[^>]+>)/gm;
    content = content.replace(multipleRootPattern, (match, indent, firstElement, secondElement) => {
      modified = true;
      return `${indent}<>\n${indent}  ${firstElement}\n${indent}  ${secondElement}\n${indent}</>`;
    });
    
    // Fix 2: Fix unclosed JSX elements
    const unclosedTagPattern = /<(\w+)([^>]*?)(?<!\/)>([^<]*?)(?=\n\s*<[^\/]|$)/g;
    content = content.replace(unclosedTagPattern, (match, tagName, attributes, innerContent) => {
      if (!innerContent.includes(`</${tagName}>`) && !attributes.includes('/')) {
        modified = true;
        return `<${tagName}${attributes}>${innerContent}</${tagName}>`;
      }
      return match;
    });
    
    // Fix 3: Fix specific malformed patterns
    const patterns = [
      // Fix empty self-closing tags that should have content
      {
        regex: /<(\w+)([^>]*)><\/\1>\s*([^<]+)\s*<\/\1>/g,
        replacement: '<$1$2>\n                $3\n              </$1>'
      },
      // Fix malformed button elements
      {
        regex: /<button([^>]*)><\/button>\s*([^<]+)\s*<\/button>/g,
        replacement: '<button$1>\n                  $2\n                </button>'
      },
      // Fix malformed heading elements
      {
        regex: /<h([1-6])([^>]*)><\/h[1-6]>\s*([^<]+)\s*<\/h[1-6]>/g,
        replacement: '<h$1$2>\n                $3\n              </h$1>'
      },
      // Fix malformed paragraph elements
      {
        regex: /<p([^>]*)><\/p>\s*([^<]+)\s*<\/p>/g,
        replacement: '<p$1>\n                $2\n              </p>'
      }
    ];
    
    patterns.forEach(pattern => {
      const newContent = content.replace(pattern.regex, pattern.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Fix 4: Fix JSX fragments
    const lines = content.split('\n');
    const fixedLines = [];
    let inFragment = false;
    let fragmentDepth = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Check for opening fragment
      if (trimmedLine === '<>' || trimmedLine.startsWith('<>')) {
        inFragment = true;
        fragmentDepth++;
        fixedLines.push(line);
        continue;
      }
      
      // Check for closing fragment
      if (trimmedLine === '</>' || trimmedLine.endsWith('</>')) {
        if (inFragment) {
          fragmentDepth--;
          if (fragmentDepth === 0) {
            inFragment = false;
          }
        }
        fixedLines.push(line);
        continue;
      }
      
      // If we're in a fragment and reach the end of the component, close it
      if (inFragment && (trimmedLine === ');' || trimmedLine === ')' || trimmedLine === '}')) {
        // Add closing fragment before the closing
        for (let j = 0; j < fragmentDepth; j++) {
          const indent = line.match(/^(\s*)/)[1];
          fixedLines.push(indent + '</>');
        }
        inFragment = false;
        fragmentDepth = 0;
        fixedLines.push(line);
        modified = true;
        continue;
      }
      
      fixedLines.push(line);
    }
    
    // If we still have unclosed fragments at the end, close them
    if (inFragment) {
      for (let j = 0; j < fragmentDepth; j++) {
        fixedLines.push('  </>');
      }
      modified = true;
    }
    
    if (modified) {
      content = fixedLines.join('\n');
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX parent elements in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing JSX parent elements in ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting remaining JSX fixes...');

// Get all files that still have JSX issues
const problematicFiles = [
  'app/analytics-tools/page.tsx',
  'app/api-docs/page.tsx',
  'app/ar-vr-platform/page.tsx',
  'app/backup-recovery/page.tsx',
  'app/blockchain-integration-services/page.tsx',
  'app/blockchain/page.tsx',
  'app/blog/page.tsx',
  'app/business-apps/page.tsx',
  'app/business-intelligence/page.tsx',
  'app/careers/page.tsx',
  'app/case-studies/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-migration-services/page.tsx',
  'app/cloud-migration/page.tsx',
  'app/cloud-security/page.tsx',
  'app/cloud-services/page.tsx'
];

let fixedCount = 0;
problematicFiles.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixJSXParentElements(file)) {
      fixedCount++;
    }
  }
});

console.log(`Fixed JSX parent elements in ${fixedCount} files`);

// Also run a comprehensive fix for all remaining page files
console.log('Running comprehensive fix for all remaining page files...');
try {
  const { execSync } = require('child_process');
  const result = execSync('find app -name "page.tsx" | head -50', { 
    encoding: 'utf8',
    cwd: process.cwd()
  });
  const allPageFiles = result.trim().split('\n').filter(f => f.length > 0);
  
  allPageFiles.forEach(file => {
    if (fs.existsSync(file)) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Fix the most common malformed patterns
        const commonPatterns = [
          // Fix empty tags with content outside
          {
            regex: /<(\w+)([^>]*)><\/\1>\s*([^<]+)\s*<\/\1>/g,
            replacement: '<$1$2>\n                $3\n              </$1>'
          },
          // Fix malformed button elements
          {
            regex: /<button([^>]*)><\/button>\s*([^<]+)\s*<\/button>/g,
            replacement: '<button$1>\n                  $2\n                </button>'
          },
          // Fix malformed heading elements
          {
            regex: /<h([1-6])([^>]*)><\/h[1-6]>\s*([^<]+)\s*<\/h[1-6]>/g,
            replacement: '<h$1$2>\n                $3\n              </h$1>'
          },
          // Fix multiple root elements
          {
            regex: /^(\s*)(<[^>]+>.*?<\/[^>]+>)\s*\n\s*(<[^>]+>.*?<\/[^>]+>)/gm,
            replacement: (match, indent, first, second) => {
              return `${indent}<>\n${indent}  ${first}\n${indent}  ${second}\n${indent}</>`;
            }
          }
        ];
        
        commonPatterns.forEach(pattern => {
          const newContent = content.replace(pattern.regex, pattern.replacement);
          if (newContent !== content) {
            content = newContent;
            modified = true;
          }
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

console.log('Remaining JSX fixes completed!');