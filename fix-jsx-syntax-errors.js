#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix JSX syntax errors
function fixJSXSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate Helmet closing tags
    if (content.includes('</Helmet>') && content.includes('</Helmet>')) {
      const lines = content.split('\n');
      let helmetCount = 0;
      let lastHelmetIndex = -1;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('<Helmet>')) {
          helmetCount++;
        }
        if (lines[i].includes('</Helmet>')) {
          helmetCount--;
          lastHelmetIndex = i;
        }
      }
      
      // If there are more closing tags than opening tags, remove duplicates
      if (helmetCount < 0) {
        const helmetLines = lines.filter(line => line.includes('</Helmet>'));
        if (helmetLines.length > 1) {
          // Keep only the first closing tag
          let firstHelmetClose = true;
          content = lines.map(line => {
            if (line.includes('</Helmet>')) {
              if (firstHelmetClose) {
                firstHelmetClose = false;
                return line;
              } else {
                return ''; // Remove duplicate
              }
            }
            return line;
          }).join('\n');
          modified = true;
        }
      }
    }

    // Fix missing JSX fragment closing tags
    if (content.includes('<>') && !content.includes('</>')) {
      // Add missing closing fragment tag at the end before the last closing brace
      const lines = content.split('\n');
      let braceCount = 0;
      let lastBraceIndex = -1;
      
      for (let i = lines.length - 1; i >= 0; i--) {
        if (lines[i].includes('}')) {
          braceCount++;
          if (lastBraceIndex === -1) {
            lastBraceIndex = i;
          }
        }
        if (lines[i].includes('{')) {
          braceCount--;
        }
      }
      
      if (lastBraceIndex > 0) {
        lines.splice(lastBraceIndex, 0, '    </>');
        content = lines.join('\n');
        modified = true;
      }
    }

    // Fix missing closing tags for common elements
    const commonElements = ['div', 'section', 'button', 'span', 'li'];
    
    for (const element of commonElements) {
      const openTag = `<${element}`;
      const closeTag = `</${element}>`;
      
      if (content.includes(openTag) && !content.includes(closeTag)) {
        // This is a simplified fix - in a real scenario, you'd need proper parsing
        // For now, we'll add the closing tag before the last closing brace
        const lines = content.split('\n');
        const lastBraceIndex = lines.findLastIndex(line => line.trim() === '}');
        
        if (lastBraceIndex > 0) {
          lines.splice(lastBraceIndex, 0, `      ${closeTag}`);
          content = lines.join('\n');
          modified = true;
        }
      }
    }

    // Fix unterminated string literals in JSX
    content = content.replace(/(<[^>]*"[^"]*$)/gm, (match) => {
      if (!match.endsWith('"')) {
        return match + '"';
      }
      return match;
    });

    // Fix missing closing braces in JSX
    content = content.replace(/(<[^>]*{[^}]*$)/gm, (match) => {
      if (!match.endsWith('}')) {
        return match + '}';
      }
      return match;
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JSX files
async function findTSXFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.ts',
    '*.tsx',
    '*.ts'
  ];
  
  let files = [];
  for (const pattern of patterns) {
    const matches = await glob(pattern, { ignore: ['node_modules/**', 'dist/**', '.next/**'] });
    files = files.concat(matches);
  }
  
  return [...new Set(files)]; // Remove duplicates
}

// Main execution
async function main() {
  console.log('Starting JSX syntax error fixes...');

  const files = await findTSXFiles();
  let fixedCount = 0;

  for (const file of files) {
    if (fixJSXSyntaxErrors(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed JSX syntax errors in ${fixedCount} files.`);
  console.log('JSX syntax error fixes completed!');
}

main().catch(console.error);