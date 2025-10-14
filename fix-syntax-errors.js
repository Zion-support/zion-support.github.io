#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common JSX syntax errors
function fixJSXSyntax(content) {
  let fixed = content;
  
  // Fix duplicate closing tags (like </Helmet></Helmet>)
  fixed = fixed.replace(/(<\/[^>]+>)\s*\1/g, '$1');
  
  // Fix missing closing tags for JSX fragments
  // Look for unclosed fragments that should be closed
  const fragmentMatches = fixed.match(/<>[^]*?(?=<[^/]|$)/g);
  if (fragmentMatches) {
    fragmentMatches.forEach(match => {
      if (!match.includes('</>')) {
        // Count opening and closing tags to see if fragment is properly closed
        const openTags = (match.match(/<[^/][^>]*>/g) || []).length;
        const closeTags = (match.match(/<\/[^>]+>/g) || []).length;
        
        // If there's an imbalance, try to fix it
        if (openTags > closeTags) {
          // This is a complex case, we'll handle it differently
        }
      }
    });
  }
  
  // Fix unterminated string literals in JSX attributes
  fixed = fixed.replace(/="([^"]*?)(?=\s*\/?>)/g, (match, content) => {
    if (!content.includes('"') && !content.includes("'")) {
      return match;
    }
    // Fix quotes inside attributes
    const fixedContent = content.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return `="${fixedContent}"`;
  });
  
  // Fix common JSX structure issues
  // Remove extra closing tags that don't have matching opening tags
  const lines = fixed.split('\n');
  const fixedLines = [];
  const tagStack = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Skip empty lines
    if (!trimmed) {
      fixedLines.push(line);
      continue;
    }
    
    // Check for opening tags
    const openTagMatch = trimmed.match(/<([a-zA-Z][a-zA-Z0-9-]*)[^>]*>/);
    if (openTagMatch && !trimmed.includes('/>')) {
      const tagName = openTagMatch[1];
      if (tagName !== 'Helmet' && tagName !== 'div' && tagName !== 'section' && tagName !== 'li') {
        // Only track certain tags
        tagStack.push(tagName);
      }
    }
    
    // Check for closing tags
    const closeTagMatch = trimmed.match(/<\/([a-zA-Z][a-zA-Z0-9-]*)>/);
    if (closeTagMatch) {
      const tagName = closeTagMatch[1];
      const lastOpenTag = tagStack[tagStack.length - 1];
      
      if (lastOpenTag === tagName) {
        tagStack.pop();
      } else if (tagName === 'Helmet' || tagName === 'div' || tagName === 'section' || tagName === 'li') {
        // These are likely valid closing tags
      } else if (tagStack.length === 0) {
        // This closing tag doesn't have a matching opening tag, remove it
        continue;
      }
    }
    
    fixedLines.push(line);
  }
  
  return fixedLines.join('\n');
}

// Function to fix specific file patterns
function fixSpecificFile(content, filePath) {
  let fixed = content;
  
  // Fix common patterns in page files
  if (filePath.includes('/page.tsx')) {
    // Fix duplicate Helmet closing tags
    fixed = fixed.replace(/<\/Helmet>\s*<\/Helmet>/g, '</Helmet>');
    
    // Fix missing closing tags for fragments
    if (fixed.includes('<>') && !fixed.includes('</>')) {
      // Add closing fragment tag at the end before the last closing brace
      const lastBraceIndex = fixed.lastIndexOf('}');
      if (lastBraceIndex > 0) {
        fixed = fixed.slice(0, lastBraceIndex) + '</>\n  );' + fixed.slice(lastBraceIndex + 1);
      }
    }
  }
  
  // Fix component files
  if (filePath.includes('/components/')) {
    // Fix unterminated string literals
    fixed = fixed.replace(/import\s+.*?from\s+["']([^"']*?)(?=\s*["'])/g, (match, importPath) => {
      if (importPath.includes('"') || importPath.includes("'")) {
        const fixedPath = importPath.replace(/"/g, '\\"').replace(/'/g, "\\'");
        return match.replace(importPath, fixedPath);
      }
      return match;
    });
  }
  
  return fixed;
}

// Main function to process files
async function fixAllFiles() {
  console.log('Starting syntax error fixes...');
  
  // Get all TypeScript and TSX files
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    try {
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Apply fixes
      let fixedContent = fixJSXSyntax(content);
      fixedContent = fixSpecificFile(fixedContent, file);
      
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