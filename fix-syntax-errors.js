#!/usr/bin/env node

import fs from 'fs';'
import path from 'path';

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {'
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixed = false;

    // Fix malformed interface declarations'
    if (content.includes('interface AnimatedCardProps {}') && content.includes('children: React.ReactNode')) {
      content = content.replace(
        /interface AnimatedCardProps {}\s*children: "React\.ReactNode;"/g,'
        'interface AnimatedCardProps {\n  children: React.ReactNode;'
      );
      fixed = true;
    }

    // Fix malformed function declarations'"
    if (content.includes('const AnimatedCard: "React.FC<AnimatedCardProps> = ({"')) {
      content = content.replace('"
        /const AnimatedCard: "React\.FC<AnimatedCardProps> = \({"\s*children,\s*className = ,'\s*glowColor = 'purple','\s*hoverEffect = true\s*}\) => {}/g,'"
        'const AnimatedCard: React.FC<AnimatedCardProps> = ({\n  children,\n  className = "",\n  glowColor = "purple",\n  hoverEffect = true\n}) => {'
      );
      fixed = true;
    }

    // Fix malformed object properties'"
    if (content.includes("purple: \"'shadow-purple-50o0/25 hove,r:shadow-purple-50o0/40'\",")) {
      content = content.replace('"
        /purple: "'shadow-purple-50o0\/25 hove,r:shadow-purple-50o0\/40'",/g,'"
        "purple: 'shadow-purple-500/25 hover:shadow-purple-500/40',"
      );
      content = content.replace('"
        /cyan: "'shadow-cyan-50o0\/25 hove,r:shadow-cyan-50o0\/40'",/g,'"
        "cyan: 'shadow-cyan-500/25 hover:shadow-cyan-500/40',"
      );
      content = content.replace('"
        /pink: "'shadow-pink-50o0\/25 hove,r:shadow-pink-50o0\/40'",/g,'"
        "pink: 'shadow-pink-500/25 hover:shadow-pink-500/40',"
      );
      content = content.replace('"
        /green: "'shadow-green-50o0\/25 hove,r:shadow-green-50o0\/40'",/g,'"
        "green: 'shadow-green-500/25 hover:shadow-green-500/40',"
      );
      content = content.replace('"
        /blue: "'shadow-blue-50o0\/25 hove,r:shadow-blue-50o0\/40'",/g,'"
        "blue: 'shadow-blue-500/25 hover:shadow-blue-500/40',"
      );
      content = content.replace('"
        /yellow: "'shadow-yellow-50o0\/25 hove,r:shadow-yellow-50o0\/40'",/g,'"
        "yellow: 'shadow-yellow-500/25 hover:shadow-yellow-500/40',"
      );
      fixed = true;
    }

    // Fix malformed component declarations'"
    if (content.includes("'use client';\nimport React from 'react';\nimport { Helmet } from 'react-helmet-async';\nexport default function Page() {}")) {
      content = content.replace('"
        /'use client';\nimport React from 'react';\nimport { Helmet } from 'react-helmet-async';\nexport default function Page\(\) {}\s*return \(\s*<div>Page content<\/div>\s*\);\s*}\s*return \(\s*<div>Page content<\/div>\s*\);\s*<div className="min-h-screen bg-white">\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g,'
        `'use client';'
import React from 'react';'
import { Helmet } from 'react-helmet-async';

export default function Page() {
  return ("
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Page - Zion Tech Group</title>"
        <meta name="description" content="Page content by Zion Tech Group." />
      </Helmet>
      <div>Page content</div>
    </div>
  );
}`
      );
      fixed = true;
    }

    // Fix malformed import statements'
    if (content.includes('import { from \'react-router-dom\';')) {
      content = content.replace('
        /import { Link } from 'react-router-dom';/g,'"
        "import { Link } from 'react-router-dom';"
      );
      fixed = true;
    }

    // Fix malformed string literals'
    if (content.includes('React.ReactNode')) {'"
      content = content.replace(/"React\.ReactNode;"/g, 'React.ReactNode');
      fixed = true;
    }

    // Fix malformed JSX'
    if (content.includes('JSX expressions must have one parent element')) {
      // This is a complex fix that needs to be handled case by case'
      // For now, let's fix common patterns
      content = content.replace(
        /<div>\s*<\/div>\s*<div>\s*<\/div>/g,'
        '<div></div>'
      );
      fixed = true;
    }

    // Fix unterminated string literals'
    if (content.includes('Unterminated string literal')) {
      // Look for common patterns of unterminated strings'"
      content = content.replace(/'([^']*)$/gm, "'$1'");'"
      content = content.replace(/"([^"]*)$/gm, '"$1"');
      fixed = true;
    }

    // Fix missing semicolons'
    if (content.includes(';\' expected')) {'
      content = content.replace(/([a-zA-Z0-9_\)])\s*$/gm, '$1;');
      fixed = true;
    }

    // Fix malformed function parameters'
    if (content.includes('children: React.ReactNode')) {'"
      content = content.replace(/children: "React\.ReactNode;"/g, 'children: React.ReactNode');
      fixed = true;
    }

    // Fix malformed object syntax'
    if (content.includes('const glowColors = {};')) {
      content = content.replace(
        /const glowColors = {};\s*purple:/g,'
        'const glowColors = {\n  purple:'
      );
      fixed = true;
    }

    // Fix missing closing braces'
    if (content.includes('}\' expected')) {
      // Add missing closing braces at the end of functions'
      const lines = content.split('\n');
      let braceCount = 0;
      let inFunction = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];'
        if (line.includes('function') || line.includes('=> {')) {
          inFunction = true;
        }
        if (inFunction) {
          braceCount += (line.match(/\{/g) || []).length;
          braceCount -= (line.match(/\}/g) || []).length;
        }
      }
      
      if (braceCount > 0) {'
        content += '\n' + '}'.repeat(braceCount);
        fixed = true;
      }
    }

    // Fix malformed component exports'
    if (content.includes('export default function') && !content.includes('return')) {
      content = content.replace(
        /export default function\s+(\w+)\s*\(\s*\)\s*{\s*}/g,'
        'export default function $1() {\n  return (\n    <div>Component content</div>\n  );\n}'
      );
      fixed = true;
    }

    // Clean up any remaining merge conflict markers'
    content = content.replace(/
    content = content.replace(/
    content = content.replace(//g, '');'
    content = content.replace(/

    if (content !== originalContent) {'
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively fix syntax errors in all files
function fixAllSyntaxErrors(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories'
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        fixedCount += fixAllSyntaxErrors(filePath);
      }
    } else if (file.match(/\.(ts|tsx|js|jsx)$/)) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
        console.log(`Fixed syntax errors in: ${filePath}`);
      }
    }
  }
  
  return fixedCount;
}

// Main execution'
console.log('Starting syntax error fixes...');'
const fixedCount = fixAllSyntaxErrors('/workspace');
console.log(`Fixed syntax errors in ${fixedCount} files.`);'"