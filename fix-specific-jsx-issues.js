#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix specific JSX issues in page files
function fixSpecificJSXIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix 1: Fix malformed Helmet tags
    content = content.replace(
      /<Helmet><\/Helmet>\s*<title>([^<]+)<\/title>\s*<meta[^>]*\/>\s*<meta[^>]*\/>\s*<\/Helmet>/g,
      '<Helmet>\n        <title>$1</title>\n        <meta name="description" content="Advanced AI-powered analytics solution for modern businesses." />\n        <meta name="keywords" content="AI analytics, artificial intelligence, data analytics, AI solutions, intelligent automation" />\n      </Helmet>'
    );
    
    // Fix 2: Fix unclosed main tags
    content = content.replace(
      /<main([^>]*)><\/main>\s*<section([^>]*)><\/section>\s*<div([^>]*)><\/div>/g,
      '<main$1>\n        <section$2>\n          <div$3>\n            {/* Content goes here */}\n          </div>\n        </section>\n      </main>'
    );
    
    // Fix 3: Fix JSX fragments that are not properly closed
    const lines = content.split('\n');
    const fixedLines = [];
    let inFragment = false;
    let fragmentDepth = 0;
    let braceDepth = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Track brace depth
      braceDepth += (line.match(/\{/g) || []).length;
      braceDepth -= (line.match(/\}/g) || []).length;
      
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
      
      // If we're in a fragment and reach the end of the return statement, close it
      if (inFragment && (trimmedLine === ');' || trimmedLine === ')' || (trimmedLine === '}' && braceDepth <= 0))) {
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
    
    // Fix 4: Fix specific malformed JSX patterns
    const patterns = [
      // Fix empty self-closing tags that should have content
      {
        regex: /<main([^>]*)><\/main>\s*<section([^>]*)><\/section>\s*<div([^>]*)><\/div>/g,
        replacement: '<main$1>\n        <section$2>\n          <div$3>\n            {/* Content goes here */}\n          </div>\n        </section>\n      </main>'
      },
      // Fix malformed Helmet structure
      {
        regex: /<Helmet><\/Helmet>\s*<title>([^<]+)<\/title>\s*<meta[^>]*\/>\s*<meta[^>]*\/>\s*<\/Helmet>/g,
        replacement: '<Helmet>\n        <title>$1</title>\n        <meta name="description" content="Advanced AI-powered analytics solution for modern businesses." />\n        <meta name="keywords" content="AI analytics, artificial intelligence, data analytics, AI solutions, intelligent automation" />\n      </Helmet>'
      },
      // Fix unclosed JSX elements
      {
        regex: /<(\w+)([^>]*?)(?<!\/)>([^<]*?)(?=\n\s*<[^\/]|$)/g,
        replacement: (match, tagName, attributes, innerContent) => {
          if (!innerContent.includes(`</${tagName}>`) && !attributes.includes('/')) {
            return `<${tagName}${attributes}>${innerContent}</${tagName}>`;
          }
          return match;
        }
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
      console.log(`Fixed specific JSX issues in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing JSX issues in ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting specific JSX fixes...');

// Get all page files that are causing issues
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
  'app/ai-crm-assistant/page.tsx',
  'App.tsx'
];

let fixedCount = 0;
problematicFiles.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixSpecificJSXIssues(file)) {
      fixedCount++;
    }
  }
});

console.log(`Fixed specific JSX issues in ${fixedCount} files`);

// Also fix the App.tsx file specifically
if (fs.existsSync('App.tsx')) {
  try {
    let content = fs.readFileSync('App.tsx', 'utf8');
    
    // Fix the specific error on line 25
    const lines = content.split('\n');
    if (lines[24] && lines[24].includes(';')) {
      // Look for the problematic line and fix it
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(';') && !lines[i].trim().endsWith(';')) {
          lines[i] = lines[i].replace(/;.*$/, ';');
          break;
        }
      }
      content = lines.join('\n');
      fs.writeFileSync('App.tsx', content, 'utf8');
      console.log('Fixed App.tsx syntax error');
    }
  } catch (error) {
    console.error('Error fixing App.tsx:', error.message);
  }
}

console.log('Specific JSX fixes completed!');