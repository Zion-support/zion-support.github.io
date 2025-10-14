#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix specific syntax patterns
function fixSyntaxPatterns(content) {
  let fixed = content;
  
  // Fix unterminated string literals in imports
  fixed = fixed.replace(/import\s+.*?from\s+["']([^"']*?)(?=\s*["'])/g, (match, importPath) => {
    if (importPath.includes('"') || importPath.includes("'")) {
      const cleanPath = importPath.replace(/["']/g, '');
      return match.replace(importPath, `"${cleanPath}"`);
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
  
  // Fix JSX elements that are missing closing tags
  // Fix Helmet tags
  fixed = fixed.replace(/<Helmet>([^]*?)<\/Helmet>\s*<\/Helmet>/g, '<Helmet>$1</Helmet>');
  
  // Fix div tags that are missing closing tags
  fixed = fixed.replace(/<div([^>]*)>([^]*?)(?=\s*<\/div>|\s*<\/>|\s*$)/g, (match, attrs, content) => {
    if (!content.includes('</div>') && !content.includes('</>')) {
      return `<div${attrs}>${content}</div>`;
    }
    return match;
  });
  
  // Fix JSX fragments that are missing closing tags
  if (fixed.includes('<>') && !fixed.includes('</>')) {
    // Find the last closing brace and add fragment closing before it
    const lastBraceIndex = fixed.lastIndexOf('}');
    if (lastBraceIndex > 0) {
      const beforeBrace = fixed.slice(0, lastBraceIndex);
      const afterBrace = fixed.slice(lastBraceIndex);
      
      // Check if we need to add closing fragment
      if (beforeBrace.includes('<>') && !beforeBrace.includes('</>')) {
        fixed = beforeBrace + '</>\n  );' + afterBrace;
      }
    }
  }
  
  // Fix common JSX structure issues
  const lines = fixed.split('\n');
  const fixedLines = [];
  let inJSX = false;
  let braceCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Track JSX context
    if (trimmed.includes('return (') || trimmed.includes('return(')) {
      inJSX = true;
      braceCount = 0;
    }
    
    if (inJSX) {
      // Count braces to track JSX structure
      braceCount += (line.match(/\{/g) || []).length;
      braceCount -= (line.match(/\}/g) || []).length;
      
      // Fix common issues
      if (trimmed.includes('Identifier expected') || trimmed.includes('Unexpected token')) {
        // Skip malformed lines
        continue;
      }
      
      // Fix unterminated strings
      if (trimmed.includes('Unterminated string literal')) {
        continue;
      }
    }
    
    fixedLines.push(line);
  }
  
  return fixedLines.join('\n');
}

// Function to fix specific file types
function fixFileByType(content, filePath) {
  let fixed = content;
  
  // Fix page files
  if (filePath.includes('/page.tsx')) {
    // Ensure proper JSX structure
    if (fixed.includes('export default function') && !fixed.includes('return')) {
      // Add basic return structure
      const functionMatch = fixed.match(/export default function\s+(\w+)\s*\([^)]*\)\s*\{/);
      if (functionMatch) {
        const functionName = functionMatch[1];
        fixed = fixed.replace(
          /export default function\s+\w+\s*\([^)]*\)\s*\{/,
          `export default function ${functionName}() {\n  return (\n    <>\n      <div className="min-h-screen bg-white">\n        <div className="container mx-auto px-4 py-20">\n          <h1 className="text-4xl font-bold text-gray-900 mb-8">${functionName}</h1>\n          <p className="text-xl text-gray-600">This page is under development.</p>\n        </div>\n      </div>\n    </>\n  );`
        );
      }
    }
  }
  
  // Fix component files
  if (filePath.includes('/components/')) {
    // Fix common component issues
    if (fixed.includes('Unterminated string literal')) {
      // Try to fix the string
      fixed = fixed.replace(/import\s+.*?from\s+["']([^"']*?)(?=\s*["'])/g, (match, importPath) => {
        const cleanPath = importPath.replace(/["']/g, '');
        return match.replace(importPath, `"${cleanPath}"`);
      });
    }
  }
  
  return fixed;
}

// Main function to process files
async function fixAllFiles() {
  console.log('Starting comprehensive syntax fixes...');
  
  // Get all TypeScript and TSX files
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    try {
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Skip files that are too corrupted
      if (content.includes('Unterminated string literal') && content.length < 100) {
        console.log(`Skipping corrupted file: ${file}`);
        continue;
      }
      
      // Apply fixes
      let fixedContent = fixSyntaxPatterns(content);
      fixedContent = fixFileByType(fixedContent, file);
      
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
  
  console.log(`\nFixed ${fixedCount} files, ${errorCount} errors`);
}

// Run the fix
fixAllFiles().catch(console.error);