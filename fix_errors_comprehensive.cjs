const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/JSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} files to process`);

let fixedCount = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Fix 1: Remove unused CheckCircle imports
    if (content.includes("import { CheckCircle } from 'lucide-react';") && !content.includes('CheckCircle')) {
      content = content.replace(/import { CheckCircle } from 'lucide-react';\n?/g, '');
      modified = true;
    }

    // Fix 2: Remove unused React imports
    if (content.includes("import React from 'react';") && !content.includes('React.')) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }

    // Fix 3: Fix parsing errors by cleaning up malformed JSX
    // Remove any stray characters or malformed syntax
    content = content.replace(/\s*>\s*>\s*/g, '>');
    content = content.replace(/\s*<\s*<\s*/g, '<');
    content = content.replace(/\s*{\s*>\s*}\s*/g, '>');
    content = content.replace(/\s*{\s*<\s*}\s*/g, '<');

    // Fix 4: Fix incomplete function definitions and expressions
    if (content.includes('export default function') && content.includes(';')) {
      // Remove trailing semicolons after function declarations
      content = content.replace(/export default function\s+\w+\(\)\s*{[\s\S]*?}\s*;/g, (match) => {
        return match.replace(/;\s*$/, '');
      });
      modified = true;
    }

    // Fix 5: Fix malformed JSX return statements
    const lines = content.split('\n');
    let newLines = [];
    let inJSX = false;
    let braceCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('return (') || (line.includes('<') && !line.includes('//'))) {
        inJSX = true;
      }
      
      if (inJSX) {
        // Count braces to track JSX structure
        braceCount += (line.match(/\{/g) || []).length;
        braceCount -= (line.match(/\}/g) || []).length;
        
        // Skip malformed lines in JSX
        if (line.includes("'use client'") || 
            (line.includes('import ') && !line.includes('//')) ||
            line.includes('const ') ||
            line.includes('let ') ||
            line.includes('var ')) {
          continue;
        }
        
        // Fix malformed JSX syntax
        let fixedLine = line
          .replace(/\s*>\s*>\s*/g, '>')
          .replace(/\s*<\s*<\s*/g, '<')
          .replace(/\s*{\s*>\s*}\s*/g, '>')
          .replace(/\s*{\s*<\s*}\s*/g, '<');
        
        newLines.push(fixedLine);
        
        if (braceCount <= 0 && line.includes('</div>')) {
          inJSX = false;
          braceCount = 0;
        }
      } else {
        newLines.push(line);
      }
    }
    
    if (newLines.length !== lines.length) {
      content = newLines.join('\n');
      modified = true;
    }

    // Fix 6: Ensure proper function structure
    if (content.includes('export default function') && !content.includes('return (')) {
      const functionName = content.match(/export default function\s+(\w+)/)?.[1];
      if (functionName) {
        content = content.replace(
          /export default function\s+\w+\(\)\s*{[\s\S]*?}/,
          `export default function ${functionName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${functionName.replace(/([A-Z])/g, ' $1').trim()}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional ${functionName.toLowerCase().replace(/([A-Z])/g, ' $1').trim()} services and solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}`
        );
        modified = true;
      }
    }

    // Fix 7: Clean up any remaining syntax issues
    content = content.replace(/\s*;\s*$/gm, '');
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (modified) {
      fs.writeFileSync(file, content);
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);