#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixComponentFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix missing function declarations
    if (content.includes('return (') && !content.includes('function ') && !content.includes('=>')) {
      const lines = content.split('\n');
      const fixedLines = [];
      let inReturn = false;
      let braceCount = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.trim().startsWith('return (')) {
          inReturn = true;
          braceCount = 1;
          fixedLines.push('const Component = () => {');
          fixedLines.push('  ' + line);
        } else if (inReturn) {
          if (line.includes('{')) braceCount++;
          if (line.includes('}')) braceCount--;
          
          fixedLines.push('  ' + line);
          
          if (braceCount === 0) {
            fixedLines.push('};');
            fixedLines.push('');
            fixedLines.push('export default Component;');
            inReturn = false;
          }
        } else {
          fixedLines.push(line);
        }
      }
      
      content = fixedLines.join('\n');
      fixed = true;
    }
    
    // Fix duplicate variable declarations
    const duplicateVars = ['isItServicesOpen', 'AnalyticsProvider', 'isAiServicesOpen'];
    for (const varName of duplicateVars) {
      const regex = new RegExp(`const\\s+${varName}\\s*=`, 'g');
      const matches = content.match(regex);
      if (matches && matches.length > 1) {
        // Keep only the first declaration
        const lines = content.split('\n');
        let foundFirst = false;
        const fixedLines = lines.filter(line => {
          if (line.includes(`const ${varName} =`) && !foundFirst) {
            foundFirst = true;
            return true;
          } else if (line.includes(`const ${varName} =`) && foundFirst) {
            return false;
          }
          return true;
        });
        content = fixedLines.join('\n');
        fixed = true;
      }
    }
    
    // Fix missing function wrapper for static methods
    if (content.includes('static getDerivedStateFromError') && !content.includes('class ')) {
      content = content.replace(
        /static getDerivedStateFromError/g,
        'class ErrorBoundary extends React.Component {\n  static getDerivedStateFromError'
      );
      fixed = true;
    }
    
    // Fix missing interface declarations
    if (content.includes('interface Props {') && !content.includes('import React')) {
      content = 'import React from \'react\';\n\n' + content;
      fixed = true;
    }
    
    // Fix export statements in wrong places
    if (content.includes('export default') && content.includes('const Component')) {
      const lines = content.split('\n');
      const fixedLines = [];
      let foundExport = false;
      
      for (const line of lines) {
        if (line.includes('export default') && !foundExport) {
          foundExport = true;
          // Skip this line, we'll add it at the end
        } else {
          fixedLines.push(line);
        }
      }
      
      // Add export at the end
      fixedLines.push('');
      fixedLines.push('export default Component;');
      content = fixedLines.join('\n');
      fixed = true;
    }
    
    // Fix JSX syntax errors
    if (content.includes('Adjacent JSX elements must be wrapped')) {
      // This is a complex fix, let's wrap the JSX in a fragment
      content = content.replace(
        /return\s*\(\s*<div/g,
        'return (\n    <>\n      <div'
      );
      content = content.replace(
        /<\/div>\s*\)\s*;?\s*$/,
        '</div>\n    </>\n  );'
      );
      fixed = true;
    }
    
    // Fix parameter name clashes
    if (content.includes('className = \'\',')) {
      content = content.replace(
        /className,\s*icon,\s*className = \'\',/g,
        'className = \'\',\n  icon,'
      );
      fixed = true;
    }
    
    // Fix missing imports
    if (content.includes('useState') && !content.includes('import { useState }')) {
      content = content.replace(
        /import React from 'react';/g,
        "import React, { useState } from 'react';"
      );
      fixed = true;
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed component: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findComponentFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findComponentFiles(appDir);

console.log(`Found ${files.length} component files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (fixComponentFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} component files.`);

// Create missing pages that are referenced but don't exist
const missingPages = [
  'app/zion-ai-email-analyzer/page.tsx',
  'app/zion-ai-crm-pro/page.tsx',
  'app/zion-ai-marketing-automation-pro/page.tsx',
  'app/zion-ai-project-manager-pro/page.tsx'
];

for (const pagePath of missingPages) {
  const fullPath = path.join(__dirname, pagePath);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(fullPath)) {
    // Create directory if it doesn't exist
    fs.mkdirSync(dir, { recursive: true });
    
    // Create basic page component
    const pageName = path.basename(dir).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const componentName = pageName.replace(/\s+/g, '');
    
    const pageContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${componentName}Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${pageName.toLowerCase()} services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            ${pageName}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional ${pageName.toLowerCase()} services designed to help your business grow and succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ${componentName}Page;
`;
    
    fs.writeFileSync(fullPath, pageContent);
    console.log(`Created missing page: ${pagePath}`);
  }
}

console.log('Comprehensive fix completed!');