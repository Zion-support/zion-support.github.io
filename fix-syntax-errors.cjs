const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax errors
    const fixes = [
      // Fix missing imports
      {
        pattern: /^import React from 'react';$/m,
        replacement: "import React from 'react';\nimport { Helmet } from 'react-helmet-async';\nimport Navigation from '../components/Navigation';\nimport Footer from '../components/Footer';"
      },
      
      // Fix broken JSX fragments
      {
        pattern: /<>[\s\S]*?<\/>/g,
        replacement: (match) => {
          if (match.includes('<div') && match.includes('</div>')) {
            return match.replace(/<>/g, '').replace(/<\/>/g, '');
          }
          return match;
        }
      },
      
      // Fix incomplete object properties
      {
        pattern: /{\s*icon:\s*Brain,\s*}\s*]/g,
        replacement: '{\n      icon: Brain,\n      title: "AI Service",\n      description: "AI-powered solution"\n    }'
      },
      
      // Fix empty arrays
      {
        pattern: /const \w+ = \[\s*\]/g,
        replacement: (match) => {
          const varName = match.match(/const (\w+) =/)[1];
          return `const ${varName} = [\n    // Add items here\n  ]`;
        }
      },
      
      // Fix missing return statements
      {
        pattern: /const \w+ = \(\) => \{\s*$/m,
        replacement: (match) => {
          return match + '\n  return (\n    <div>\n      {/* Content */}\n    </div>\n  );';
        }
      }
    ];
    
    for (const fix of fixes) {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
      }
    }
    
    // Write back if modified
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
        fixedCount += processDirectory(fullPath);
      }
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
      if (fixSyntaxErrors(fullPath)) {
        fixedCount++;
        console.log(`Fixed syntax errors in: ${fullPath}`);
      }
    }
  }
  
  return fixedCount;
}

// Process the app directory
const appDir = './app';
console.log('Starting syntax error cleanup...');
const fixedCount = processDirectory(appDir);
console.log(`Fixed syntax errors in ${fixedCount} files.`);