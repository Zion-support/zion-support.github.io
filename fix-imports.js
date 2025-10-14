#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix import statements
function fixImportStatements(content) {
  let fixed = content;
  
  // Fix unterminated string literals in imports
  fixed = fixed.replace(/import\s+.*?from\s+["']([^"']*?)(?=\s*["'])/g, (match, importPath) => {
    const cleanPath = importPath.replace(/["']/g, '');
    return match.replace(importPath, `"${cleanPath}"`);
  });
  
  // Fix missing semicolons after imports
  fixed = fixed.replace(/import\s+.*?from\s+["'][^"']*["']\s*(?=\n)/g, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix unterminated string literals in JSX attributes
  fixed = fixed.replace(/="([^"]*?)(?=\s*\/?>)/g, (match, content) => {
    if (content.includes('"') && !content.endsWith('"')) {
      const cleanContent = content.replace(/"/g, '&quot;');
      return `="${cleanContent}"`;
    }
    return match;
  });
  
  return fixed;
}

// Function to fix JSX structure issues
function fixJSXStructure(content) {
  let fixed = content;
  
  // Fix JSX fragments
  if (fixed.includes('<>') && !fixed.includes('</>')) {
    const lastBraceIndex = fixed.lastIndexOf('}');
    if (lastBraceIndex > 0) {
      fixed = fixed.slice(0, lastBraceIndex) + '</>\n  );' + fixed.slice(lastBraceIndex + 1);
    }
  }
  
  // Fix missing closing tags
  fixed = fixed.replace(/<Helmet>([^]*?)<\/Helmet>\s*<\/Helmet>/g, '<Helmet>$1</Helmet>');
  fixed = fixed.replace(/<div([^>]*)>([^]*?)(?=\s*<\/div>|\s*<\/>|\s*$)/g, (match, attrs, content) => {
    if (!content.includes('</div>') && !content.includes('</>')) {
      return `<div${attrs}>${content}</div>`;
    }
    return match;
  });
  
  return fixed;
}

// Function to completely rewrite corrupted files
function rewriteCorruptedFile(content, filePath) {
  const fileName = path.basename(filePath, path.extname(filePath));
  const isPage = filePath.includes('/page.tsx');
  const isComponent = filePath.includes('/components/');
  
  if (isPage) {
    return `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function ${fileName.charAt(0).toUpperCase() + fileName.slice(1)}Page() {
  return (
    <>
      <Helmet>
        <title>${fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - Zion Tech Group</title>
        <meta name="description" content="${fileName.replace(/-/g, ' ')} services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">${fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our ${fileName.replace(/-/g, ' ')} services.
          </p>
        </div>
      </div>
    </>
  );
}`;
  }
  
  if (isComponent) {
    return `'use client';
import React from "react";

interface ${fileName}Props {
  className?: string;
}

const ${fileName}: React.FC<${fileName}Props> = ({ className = "" }) => {
  return (
    <div className={\`${fileName.toLowerCase()} \${className}\`}>
      <h2>${fileName.replace(/([A-Z])/g, ' $1').trim()}</h2>
      <p>This component is under development.</p>
    </div>
  );
};

export default ${fileName};`;
  }
  
  return content;
}

// Function to check if file is too corrupted
function isTooCorrupted(content) {
  const corruptionIndicators = [
    'Unterminated string literal',
    'Declaration or statement expected',
    'Unexpected keyword or identifier',
    'Expression expected',
    'JSX expressions must have one parent element'
  ];
  
  const corruptionCount = corruptionIndicators.reduce((count, indicator) => {
    return count + (content.includes(indicator) ? 1 : 0);
  }, 0);
  
  return corruptionCount > 2 || content.length < 100;
}

// Main function to process files
async function fixAllFiles() {
  console.log('Fixing import statements and JSX structure...');
  
  // Get all TypeScript and TSX files
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });
  
  let fixedCount = 0;
  let rewrittenCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    try {
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Skip if file is too corrupted
      if (isTooCorrupted(content)) {
        const newContent = rewriteCorruptedFile(content, filePath);
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Rewritten: ${file}`);
        rewrittenCount++;
        continue;
      }
      
      // Try to fix the content
      let fixedContent = fixImportStatements(content);
      fixedContent = fixJSXStructure(fixedContent);
      
      // Only write if content changed
      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error fixing ${file}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} files, rewritten ${rewrittenCount} files, ${errorCount} errors`);
}

// Run the fix
fixAllFiles().catch(console.error);